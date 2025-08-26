import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { ZoweJclService, ZoweConnectionConfig, JclExecutionRequest, JclExecutionResult } from './services/zoweJclService';

// Configuration interfaces
interface BaseConfig {
    name: string;
    type: 'CICS' | 'IMS';
    commAreaIn: string;
    commAreaOut: string;
    transactionName: string;
    saveLocation: 'workspace' | 'user';
    jclTemplate?: string;
    zoweConnection?: ZoweConnectionConfig;
}

interface CicsConfig extends BaseConfig {
    type: 'CICS';
    cicsRegion: string;
    programName: string;
    commAreaLength: number;
}

interface ImsConfig extends BaseConfig {
    type: 'IMS';
    imsRegionName: string;
    messageType: string;
    testWithAnswer: boolean;
}

type Configuration = CicsConfig | ImsConfig;

export class InjectorWebviewProvider {
    private panel: vscode.WebviewPanel | undefined;
    private zoweJclService: ZoweJclService;

    constructor(private readonly context: vscode.ExtensionContext) {
        this.zoweJclService = new ZoweJclService();
    }

    public show() {
        if (this.panel) {
            this.panel.reveal();
            return;
        }

        this.panel = vscode.window.createWebviewPanel(
            'injector',
            'Injector',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [
                    vscode.Uri.file(path.join(this.context.extensionPath, 'webview', 'dist'))
                ]
            }
        );

        this.panel.webview.html = this.getWebviewContent();

        this.panel.onDidDispose(() => {
            this.panel = undefined;
            this.zoweJclService.dispose();
        });

        // Handle messages from the webview
        this.panel.webview.onDidReceiveMessage(
            async message => {
                switch (message.command) {
                    case 'alert':
                        vscode.window.showInformationMessage(message.text);
                        return;

                    case 'saveConfiguration':
                        await this.saveConfiguration(message.data.configuration, message.data.location);
                        return;

                    case 'loadAllConfigurations':
                        await this.loadAllConfigurations();
                        return;

                    case 'testConfiguration':
                        this.testConfiguration(message.data);
                        return;

                    case 'executeJcl':
                        await this.executeJcl(message.data);
                        return;

                    case 'testZoweConnection':
                        await this.testZoweConnection(message.data);
                        return;

                    case 'injectionResult':
                        this.handleInjectionResult(message.data);
                        return;

                    case 'saveAllConfigurations':
                        await this.saveConfigurations(message.data.configurations, message.data.location);
                        return;

                    case 'updateConfiguration':
                        await this.updateConfiguration(message.data.originalConfig, message.data.updatedConfig, message.data.location, message.data.configIndex);
                        return;
                }
            },
            undefined,
            this.context.subscriptions
        );
    }

    private async updateConfiguration(originalConfig: Configuration, updatedConfig: Configuration, location: 'workspace' | 'user', configIndex?: number) {
        try {
            console.log(`Updating configuration from:`, originalConfig);
            console.log(`To:`, updatedConfig);
            console.log(`Config index:`, configIndex);
            
            // Check if workspace is available for workspace settings
            if (location === 'workspace' && !vscode.workspace.workspaceFolders) {
                vscode.window.showErrorMessage('No workspace is open. Cannot save to workspace settings. Please use user settings instead.');
                return;
            }
            
            // Get existing configurations from the target location
            let existingConfigs: Configuration[] = [];
            
            if (location === 'workspace') {
                const config = vscode.workspace.getConfiguration('injector');
                existingConfigs = config.get<Configuration[]>('configurations', []);
            } else {
                // For user settings, use inspect to get only global values
                const globalConfig = vscode.workspace.getConfiguration('injector').inspect('configurations');
                existingConfigs = globalConfig?.globalValue as Configuration[] || [];
            }
            
            console.log('Existing configs in VSCode settings:', existingConfigs);
            
            // Find the original configuration to replace
            let originalIndex = -1;
            
            // Primary method: Find by original name, type, and saveLocation
            originalIndex = existingConfigs.findIndex(c => 
                c.name === originalConfig.name && 
                c.type === originalConfig.type && 
                c.saveLocation === originalConfig.saveLocation
            );
            
            console.log('Found original config by name/type/saveLocation at index:', originalIndex);
            
            // Fallback method: If not found, find any config with the same name and type in the same location
            if (originalIndex === -1) {
                const sameLocationConfigs = existingConfigs.filter(c => c.saveLocation === location);
                originalIndex = existingConfigs.findIndex(c => 
                    c.name === originalConfig.name && 
                    c.type === originalConfig.type &&
                    c.saveLocation === location
                );
                console.log('Found by name/type in same location at index:', originalIndex);
            }
            
            let updatedConfigs;
            if (originalIndex !== -1) {
                // Replace the original configuration with the updated one
                updatedConfigs = [...existingConfigs];
                console.log('Before replacement at index', originalIndex, ':', updatedConfigs[originalIndex]);
                updatedConfigs[originalIndex] = updatedConfig;
                console.log('After replacement at index', originalIndex, ':', updatedConfigs[originalIndex]);
            } else {
                // If original not found, add as new (fallback)
                console.warn('Original configuration not found in VSCode settings, adding as new');
                console.warn('Looking for:', originalConfig);
                console.warn('In configs:', existingConfigs);
                updatedConfigs = [...existingConfigs, updatedConfig];
            }
            
            console.log('Final configs to save:', updatedConfigs);
            
            // Save to the appropriate location
            const config = vscode.workspace.getConfiguration('injector');
            const target = location === 'workspace' 
                ? vscode.ConfigurationTarget.Workspace 
                : vscode.ConfigurationTarget.Global;

            await config.update('configurations', updatedConfigs, target);

            // Verify the save worked
            let verifiedConfigs: Configuration[] = [];
            if (location === 'workspace') {
                const verifyConfig = vscode.workspace.getConfiguration('injector');
                verifiedConfigs = verifyConfig.get<Configuration[]>('configurations', []);
            } else {
                const globalConfig = vscode.workspace.getConfiguration('injector').inspect('configurations');
                verifiedConfigs = globalConfig?.globalValue as Configuration[] || [];
            }
            console.log('Verified saved configurations:', verifiedConfigs);

            vscode.window.showInformationMessage(
                `Configuration "${updatedConfig.name}" updated in ${location === 'workspace' ? 'workspace' : 'user'} settings successfully!`
            );
            
            // Reload configurations to update the webview
            await this.loadAllConfigurations();
            
        } catch (error) {
            console.error('Update error:', error);
            vscode.window.showErrorMessage(`Failed to update configuration: ${error}`);
        }
    }

    private async saveConfiguration(configuration: Configuration, location: 'workspace' | 'user') {
        try {
            console.log(`Attempting to save single configuration to ${location}:`, configuration);
            
            // Check if workspace is available for workspace settings
            if (location === 'workspace' && !vscode.workspace.workspaceFolders) {
                vscode.window.showErrorMessage('No workspace is open. Cannot save to workspace settings. Please use user settings instead.');
                return;
            }
            
            // Get existing configurations from the target location
            let existingConfigs: Configuration[] = [];
            
            if (location === 'workspace') {
                const config = vscode.workspace.getConfiguration('injector');
                existingConfigs = config.get<Configuration[]>('configurations', []);
            } else {
                // For user settings, use inspect to get only global values
                const globalConfig = vscode.workspace.getConfiguration('injector').inspect('configurations');
                existingConfigs = globalConfig?.globalValue as Configuration[] || [];
            }
            
            // Find if configuration already exists (by name and type)
            const existingIndex = existingConfigs.findIndex(c => 
                c.name === configuration.name && c.type === configuration.type
            );
            
            let updatedConfigs;
            if (existingIndex !== -1) {
                // Update existing configuration
                updatedConfigs = [...existingConfigs];
                updatedConfigs[existingIndex] = configuration;
            } else {
                // Add new configuration
                updatedConfigs = [...existingConfigs, configuration];
            }
            
            // Save to the appropriate location
            const config = vscode.workspace.getConfiguration('injector');
            const target = location === 'workspace' 
                ? vscode.ConfigurationTarget.Workspace 
                : vscode.ConfigurationTarget.Global;

            await config.update('configurations', updatedConfigs, target);

            vscode.window.showInformationMessage(
                `Configuration "${configuration.name}" saved to ${location === 'workspace' ? 'workspace' : 'user'} settings successfully!`
            );
            
            // Verify the save worked
            let savedConfigs: Configuration[] = [];
            if (location === 'workspace') {
                const verifyConfig = vscode.workspace.getConfiguration('injector');
                savedConfigs = verifyConfig.get<Configuration[]>('configurations', []);
            } else {
                const globalConfig = vscode.workspace.getConfiguration('injector').inspect('configurations');
                savedConfigs = globalConfig?.globalValue as Configuration[] || [];
            }
            console.log('Saved configurations verified:', savedConfigs);
            
        } catch (error) {
            console.error('Save error:', error);
            vscode.window.showErrorMessage(`Failed to save configuration: ${error}`);
        }
    }

    private async saveConfigurations(configurations: Configuration[], location: 'workspace' | 'user') {
        try {
            console.log(`Attempting to save configurations to ${location}:`, configurations);
            
            // Check if workspace is available for workspace settings
            if (location === 'workspace' && !vscode.workspace.workspaceFolders) {
                vscode.window.showErrorMessage('No workspace is open. Cannot save to workspace settings. Please use user settings instead.');
                return;
            }
            
            // Get the appropriate configuration scope
            const config = location === 'workspace' 
                ? vscode.workspace.getConfiguration('injector')
                : vscode.workspace.getConfiguration('injector', null);
                
            const target = location === 'workspace' 
                ? vscode.ConfigurationTarget.Workspace 
                : vscode.ConfigurationTarget.Global;

            await config.update('configurations', configurations, target);

            vscode.window.showInformationMessage(
                `Configurations saved to ${location === 'workspace' ? 'workspace' : 'user'} settings successfully!`
            );
            
            // Verify the save worked by reloading from the same scope
            const verifyConfig = location === 'workspace' 
                ? vscode.workspace.getConfiguration('injector')
                : vscode.workspace.getConfiguration('injector', null);
            const savedConfigs = verifyConfig.get<Configuration[]>('configurations', []);
            console.log('Saved configurations verified:', savedConfigs);
            
        } catch (error) {
            console.error('Save error:', error);
            vscode.window.showErrorMessage(`Failed to save configurations: ${error}`);
        }
    }

    private async loadAllConfigurations() {
        try {
            console.log('Loading configurations from both workspace and user settings');
            
            const allConfigurations: Configuration[] = [];
            
            // Load from workspace settings (only if workspace exists)
            if (vscode.workspace.workspaceFolders) {
                try {
                    const workspaceConfig = vscode.workspace.getConfiguration('injector');
                    const workspaceConfigs = workspaceConfig.get<Configuration[]>('configurations', []);
                    console.log(`Found ${workspaceConfigs.length} workspace configurations:`, workspaceConfigs);
                    
                    // Mark as workspace configs
                    workspaceConfigs.forEach(config => {
                        if (!config.saveLocation) {
                            config.saveLocation = 'workspace';
                        }
                    });
                    
                    allConfigurations.push(...workspaceConfigs);
                } catch (error) {
                    console.log('Error loading workspace configs:', error);
                }
            }
            
            // Load from user (global) settings
            try {
                // Use inspect to get only the global value
                const globalConfig = vscode.workspace.getConfiguration('injector').inspect('configurations');
                const userConfigs = globalConfig?.globalValue as Configuration[] || [];
                console.log(`Found ${userConfigs.length} user configurations:`, userConfigs);
                
                // Mark as user configs
                userConfigs.forEach(config => {
                    if (!config.saveLocation) {
                        config.saveLocation = 'user';
                    }
                });
                
                allConfigurations.push(...userConfigs);
            } catch (error) {
                console.log('Error loading user configs:', error);
            }
            
            console.log(`Total configurations loaded: ${allConfigurations.length}`);

            // Send all configurations back to webview
            this.panel?.webview.postMessage({
                command: 'configurationsLoaded',
                data: allConfigurations
            });
        } catch (error) {
            console.error('Load error:', error);
            vscode.window.showErrorMessage(`Failed to load configurations: ${error}`);
            this.panel?.webview.postMessage({
                command: 'configurationsLoaded',
                data: []
            });
        }
    }

    private async testConfiguration(config: Configuration) {
        const details = config.type === 'CICS' 
            ? `CICS Region: ${config.cicsRegion}, Program: ${config.programName}, Comm Area Length: ${config.commAreaLength}`
            : `IMS Region: ${config.imsRegionName}, Message Type: ${config.messageType}, Test with Answer: ${config.testWithAnswer}`;

        // If JCL template and Zowe connection are configured, execute JCL
        if (config.jclTemplate && config.zoweConnection) {
            await this.executeJcl({
                configuration: config,
                jclTemplate: config.jclTemplate,
                zoweConnection: config.zoweConnection
            });
        } else {
            vscode.window.showInformationMessage(
                `Testing configuration: ${config.name} (${config.type})\n${details}\nTransaction: ${config.transactionName}`
            );
        }
    }

    private async executeJcl(data: { configuration: Configuration; jclTemplate: string; zoweConnection: ZoweConnectionConfig }) {
        try {
            const { configuration, jclTemplate, zoweConnection } = data;
            
            // Generate JCL by replacing placeholders
            const processedJcl = this.processJclTemplate(jclTemplate, configuration);
            
            const request: JclExecutionRequest = {
                jcl: processedJcl,
                connectionConfig: zoweConnection,
                configurationName: configuration.name
            };

            // Send status to webview
            this.panel?.webview.postMessage({
                command: 'jclExecutionStarted',
                data: { configurationName: configuration.name }
            });

            const result = await this.zoweJclService.executeJcl(request);

            // Send result back to webview
            this.panel?.webview.postMessage({
                command: 'jclExecutionCompleted',
                data: {
                    configurationName: configuration.name,
                    result: result
                }
            });

            // Show notification
            if (result.success) {
                vscode.window.showInformationMessage(
                    `JCL execution completed successfully for ${configuration.name}\nJob: ${result.jobName}(${result.jobId})\nReturn Code: ${result.returnCode}`
                );
            } else {
                vscode.window.showErrorMessage(
                    `JCL execution failed for ${configuration.name}\nError: ${result.error}`
                );
            }

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`JCL execution error: ${errorMessage}`);
            
            this.panel?.webview.postMessage({
                command: 'jclExecutionCompleted',
                data: {
                    configurationName: data.configuration.name,
                    result: {
                        success: false,
                        error: errorMessage,
                        timestamp: new Date().toISOString()
                    }
                }
            });
        }
    }

    private async testZoweConnection(connectionConfig: ZoweConnectionConfig) {
        try {
            const success = await this.zoweJclService.testConnection(connectionConfig);
            
            this.panel?.webview.postMessage({
                command: 'zoweConnectionTested',
                data: { success: success }
            });

            if (success) {
                vscode.window.showInformationMessage('Zowe connection test successful!');
            } else {
                vscode.window.showErrorMessage('Zowe connection test failed!');
            }
            
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Connection test error: ${errorMessage}`);
            
            this.panel?.webview.postMessage({
                command: 'zoweConnectionTested',
                data: { success: false, error: errorMessage }
            });
        }
    }

    private processJclTemplate(template: string, config: Configuration): string {
        let processedJcl = template;
        
        // Replace common placeholders
        processedJcl = processedJcl.replace(/\{NAME\}/g, config.name);
        processedJcl = processedJcl.replace(/\{TYPE\}/g, config.type);
        processedJcl = processedJcl.replace(/\{TRANSACTION\}/g, config.transactionName);
        processedJcl = processedJcl.replace(/\{COMM_AREA_IN\}/g, config.commAreaIn);
        processedJcl = processedJcl.replace(/\{COMM_AREA_OUT\}/g, config.commAreaOut);
        
        // Replace CICS specific placeholders
        if (config.type === 'CICS') {
            const cicsConfig = config as CicsConfig;
            processedJcl = processedJcl.replace(/\{CICS_REGION\}/g, cicsConfig.cicsRegion);
            processedJcl = processedJcl.replace(/\{PROGRAM_NAME\}/g, cicsConfig.programName);
            processedJcl = processedJcl.replace(/\{COMM_AREA_LENGTH\}/g, cicsConfig.commAreaLength.toString());
        }
        
        // Replace IMS specific placeholders
        if (config.type === 'IMS') {
            const imsConfig = config as ImsConfig;
            processedJcl = processedJcl.replace(/\{IMS_REGION\}/g, imsConfig.imsRegionName);
            processedJcl = processedJcl.replace(/\{MESSAGE_TYPE\}/g, imsConfig.messageType);
            processedJcl = processedJcl.replace(/\{TEST_WITH_ANSWER\}/g, imsConfig.testWithAnswer.toString());
        }
        
        // Replace date/time placeholders
        const now = new Date();
        processedJcl = processedJcl.replace(/\{TIMESTAMP\}/g, now.toISOString().replace(/[:.]/g, ''));
        processedJcl = processedJcl.replace(/\{DATE\}/g, now.toISOString().substring(0, 10).replace(/-/g, ''));
        processedJcl = processedJcl.replace(/\{TIME\}/g, now.toTimeString().substring(0, 8).replace(/:/g, ''));
        
        return processedJcl;
    }

    private handleInjectionResult(result: any) {
        const message = result.success 
            ? `Injection executed successfully for ${result.configName}`
            : `Injection failed for ${result.configName}`;

        if (result.success) {
            vscode.window.showInformationMessage(message);
        } else {
            vscode.window.showWarningMessage(message);
        }

        // Log to output channel for detailed information
        this.logToOutput(`[${result.timestamp}] ${result.type} - ${result.configName}: ${result.message}`);
    }

    private logToOutput(message: string) {
        // Create or get output channel
        const outputChannel = vscode.window.createOutputChannel('Injector');
        outputChannel.appendLine(message);
    }

    private getWebviewContent(): string {
        // In development, we'll serve a simple HTML that will load our Vue app
        const webviewDistPath = path.join(this.context.extensionPath, 'webview', 'dist');
        const indexPath = path.join(webviewDistPath, 'index.html');

        if (fs.existsSync(indexPath)) {
            let html = fs.readFileSync(indexPath, 'utf8');
            
            // Convert relative paths to webview URIs
            const webviewUri = this.panel!.webview.asWebviewUri(vscode.Uri.file(webviewDistPath));
            html = html.replace(/(<script[^>]+src=")\.?\/?([^"]+)/g, `$1${webviewUri}/$2`);
            html = html.replace(/(<link[^>]+href=")\.?\/?([^"]+)/g, `$1${webviewUri}/$2`);
            
            return html;
        }

        // Fallback HTML for development
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Injector</title>
                <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body>
                <div id="app" class="p-6 bg-gray-100 min-h-screen">
                    <h1 class="text-2xl font-bold mb-4 text-gray-800">Injector Webview</h1>
                    <div class="bg-white p-4 rounded-lg shadow">
                        <p class="text-gray-600 mb-4">Loading CICS/IMS Configuration Manager...</p>
                    </div>
                </div>
            </body>
            </html>
        `;
    }
}