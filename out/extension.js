"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const injectorWebviewProvider_1 = require("./injectorWebviewProvider");
function activate(context) {
    const injectorProvider = new injectorWebviewProvider_1.InjectorWebviewProvider(context);
    const disposable = vscode.commands.registerCommand("zLab.injector.openWebview", () => {
        injectorProvider.show();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map