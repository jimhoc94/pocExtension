import * as vscode from 'vscode';
import { SubmitJobs, GetJobs, MonitorJobs, IJob, IJobFile } from '@zowe/zos-jobs-for-zowe-sdk';
import { Session } from '@zowe/imperative';

export interface ZoweConnectionConfig {
    hostname: string;
    port: number;
    user: string;
    password: string;
    rejectUnauthorized: boolean;
}

export interface JclExecutionResult {
    success: boolean;
    jobId?: string;
    jobName?: string;
    returnCode?: string;
    output?: string;
    error?: string;
    timestamp: string;
}

export interface JclExecutionRequest {
    jcl: string;
    connectionConfig: ZoweConnectionConfig;
    configurationName: string;
}

export class ZoweJclService {
    private outputChannel: vscode.OutputChannel;

    constructor() {
        this.outputChannel = vscode.window.createOutputChannel('Injector - Zowe JCL');
    }

    public async executeJcl(request: JclExecutionRequest): Promise<JclExecutionResult> {
        const timestamp = new Date().toISOString();
        
        try {
            this.outputChannel.appendLine(`[${timestamp}] Starting JCL execution for configuration: ${request.configurationName}`);
            this.outputChannel.appendLine(`[${timestamp}] JCL Content:\n${request.jcl}`);
            
            // Create z/OSMF session
            const session = new Session({
                hostname: request.connectionConfig.hostname,
                port: request.connectionConfig.port,
                user: request.connectionConfig.user,
                password: request.connectionConfig.password,
                type: 'basic',
                rejectUnauthorized: request.connectionConfig.rejectUnauthorized
            });

            // Submit JCL
            this.outputChannel.appendLine(`[${timestamp}] Submitting JCL to z/OSMF...`);
            const jobInfo = await SubmitJobs.submitJcl(session, request.jcl);
            
            if (!jobInfo) {
                throw new Error('Failed to submit JCL - no job information returned');
            }

            const jobId = jobInfo.jobid;
            const jobName = jobInfo.jobname;
            
            this.outputChannel.appendLine(`[${timestamp}] JCL submitted successfully - Job ID: ${jobId}, Job Name: ${jobName}`);

            // Wait for job completion with polling
            const completedJob = await this.waitForJobCompletion(session, jobName!, jobId!, timestamp);
            
            // Get job output
            const output = await this.getJobOutput(session, jobName!, jobId!, timestamp);

            const result: JclExecutionResult = {
                success: completedJob.retcode === 'CC 0000' || completedJob.retcode?.startsWith('CC 00'),
                jobId: jobId,
                jobName: jobName,
                returnCode: completedJob.retcode,
                output: output,
                timestamp: timestamp
            };

            this.outputChannel.appendLine(`[${timestamp}] Job completed with return code: ${completedJob.retcode}`);
            
            return result;

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            this.outputChannel.appendLine(`[${timestamp}] Error executing JCL: ${errorMessage}`);
            
            return {
                success: false,
                error: errorMessage,
                timestamp: timestamp
            };
        }
    }

    private async waitForJobCompletion(session: Session, jobName: string, jobId: string, timestamp: string, maxWaitTime: number = 300000): Promise<any> {
        const pollInterval = 2000; // 2 seconds
        const maxAttempts = maxWaitTime / pollInterval;
        let attempts = 0;

        while (attempts < maxAttempts) {
            try {
                const jobDetails = await GetJobs.getJob(session, `${jobName}(${jobId})`);
                
                if (jobDetails && jobDetails.status && jobDetails.status !== 'INPUT' && jobDetails.status !== 'ACTIVE') {
                    this.outputChannel.appendLine(`[${timestamp}] Job ${jobName}(${jobId}) completed with status: ${jobDetails.status}`);
                    return jobDetails;
                }
                
                // Wait before next poll
                await new Promise(resolve => setTimeout(resolve, pollInterval));
                attempts++;
                
                if (attempts % 10 === 0) {
                    this.outputChannel.appendLine(`[${timestamp}] Still waiting for job completion... (${attempts * pollInterval / 1000}s elapsed)`);
                }
                
            } catch (error) {
                this.outputChannel.appendLine(`[${timestamp}] Error polling job status: ${error}`);
                await new Promise(resolve => setTimeout(resolve, pollInterval));
                attempts++;
            }
        }
        
        throw new Error(`Job did not complete within ${maxWaitTime / 1000} seconds`);
    }

    private async getJobOutput(session: Session, jobName: string, jobId: string, timestamp: string): Promise<string> {
        try {
            this.outputChannel.appendLine(`[${timestamp}] Retrieving job output for ${jobName}(${jobId})`);
            
            // Get job files
            const jobFiles = await GetJobs.getSpoolFiles(session, jobName, jobId);
            
            if (!jobFiles || jobFiles.length === 0) {
                return 'No output files available';
            }

            let output = '';
            
            // Get output from all spool files
            for (const jobFile of jobFiles) {
                try {
                    const content = await GetJobs.getSpoolContentById(session, jobName, jobId, jobFile.id);
                    output += `\n=== ${jobFile.stepname} - ${jobFile.ddname} ===\n`;
                    output += content;
                    output += '\n';
                } catch (error) {
                    output += `\n=== Error retrieving ${jobFile.stepname} - ${jobFile.ddname} ===\n`;
                    output += `Error: ${error}\n`;
                }
            }
            
            return output;
            
        } catch (error) {
            this.outputChannel.appendLine(`[${timestamp}] Error retrieving job output: ${error}`);
            return `Error retrieving job output: ${error}`;
        }
    }

    public async testConnection(config: ZoweConnectionConfig): Promise<boolean> {
        try {
            const session = new Session({
                hostname: config.hostname,
                port: config.port,
                user: config.user,
                password: config.password,
                type: 'basic',
                rejectUnauthorized: config.rejectUnauthorized
            });

            // Simple test - get job list (limited to 1)
            const jobs = await GetJobs.getJobs(session);
            return true;
            
        } catch (error) {
            this.outputChannel.appendLine(`Connection test failed: ${error}`);
            return false;
        }
    }

    public showOutput(): void {
        this.outputChannel.show();
    }

    public dispose(): void {
        this.outputChannel.dispose();
    }
}