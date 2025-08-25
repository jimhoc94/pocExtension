import * as vscode from 'vscode';
import { InjectorWebviewProvider } from './injectorWebviewProvider';

export function activate(context: vscode.ExtensionContext) {
    const injectorProvider = new InjectorWebviewProvider(context);
    
    const disposable = vscode.commands.registerCommand('injector.openWebview', () => {
        injectorProvider.show();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}