"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode2 = __toESM(require("vscode"));

// src/injectorWebviewProvider.ts
var vscode = __toESM(require("vscode"));
var path = __toESM(require("path"));
var fs = __toESM(require("fs"));
var InjectorWebviewProvider = class {
  constructor(context) {
    this.context = context;
  }
  show() {
    if (this.panel) {
      this.panel.reveal();
      return;
    }
    this.panel = vscode.window.createWebviewPanel(
      "injector",
      "Injector",
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [
          vscode.Uri.file(path.join(this.context.extensionPath, "webview", "dist"))
        ]
      }
    );
    this.panel.webview.html = this.getWebviewContent();
    this.panel.onDidDispose(() => {
      this.panel = void 0;
    });
    this.panel.webview.onDidReceiveMessage(
      async (message) => {
        switch (message.command) {
          case "alert":
            vscode.window.showInformationMessage(message.text);
            return;
          case "saveConfiguration":
            await this.saveConfiguration(message.data.configuration, message.data.location);
            return;
          case "loadAllConfigurations":
            await this.loadAllConfigurations();
            return;
          case "testConfiguration":
            this.testConfiguration(message.data);
            return;
          case "injectionResult":
            this.handleInjectionResult(message.data);
            return;
          case "saveAllConfigurations":
            await this.saveConfigurations(message.data.configurations, message.data.location);
            return;
          case "updateConfiguration":
            await this.updateConfiguration(message.data.originalConfig, message.data.updatedConfig, message.data.location, message.data.configIndex);
            return;
        }
      },
      void 0,
      this.context.subscriptions
    );
  }
  async updateConfiguration(originalConfig, updatedConfig, location, configIndex) {
    try {
      console.log(`Updating configuration from:`, originalConfig);
      console.log(`To:`, updatedConfig);
      console.log(`Config index:`, configIndex);
      if (location === "workspace" && !vscode.workspace.workspaceFolders) {
        vscode.window.showErrorMessage("No workspace is open. Cannot save to workspace settings. Please use user settings instead.");
        return;
      }
      let existingConfigs = [];
      if (location === "workspace") {
        const config2 = vscode.workspace.getConfiguration("injector");
        existingConfigs = config2.get("configurations", []);
      } else {
        const globalConfig = vscode.workspace.getConfiguration("injector").inspect("configurations");
        existingConfigs = globalConfig?.globalValue || [];
      }
      console.log("Existing configs in VSCode settings:", existingConfigs);
      let originalIndex = -1;
      originalIndex = existingConfigs.findIndex(
        (c) => c.name === originalConfig.name && c.type === originalConfig.type && c.saveLocation === originalConfig.saveLocation
      );
      console.log("Found original config by name/type/saveLocation at index:", originalIndex);
      if (originalIndex === -1) {
        const sameLocationConfigs = existingConfigs.filter((c) => c.saveLocation === location);
        originalIndex = existingConfigs.findIndex(
          (c) => c.name === originalConfig.name && c.type === originalConfig.type && c.saveLocation === location
        );
        console.log("Found by name/type in same location at index:", originalIndex);
      }
      let updatedConfigs;
      if (originalIndex !== -1) {
        updatedConfigs = [...existingConfigs];
        console.log("Before replacement at index", originalIndex, ":", updatedConfigs[originalIndex]);
        updatedConfigs[originalIndex] = updatedConfig;
        console.log("After replacement at index", originalIndex, ":", updatedConfigs[originalIndex]);
      } else {
        console.warn("Original configuration not found in VSCode settings, adding as new");
        console.warn("Looking for:", originalConfig);
        console.warn("In configs:", existingConfigs);
        updatedConfigs = [...existingConfigs, updatedConfig];
      }
      console.log("Final configs to save:", updatedConfigs);
      const config = vscode.workspace.getConfiguration("injector");
      const target = location === "workspace" ? vscode.ConfigurationTarget.Workspace : vscode.ConfigurationTarget.Global;
      await config.update("configurations", updatedConfigs, target);
      let verifiedConfigs = [];
      if (location === "workspace") {
        const verifyConfig = vscode.workspace.getConfiguration("injector");
        verifiedConfigs = verifyConfig.get("configurations", []);
      } else {
        const globalConfig = vscode.workspace.getConfiguration("injector").inspect("configurations");
        verifiedConfigs = globalConfig?.globalValue || [];
      }
      console.log("Verified saved configurations:", verifiedConfigs);
      vscode.window.showInformationMessage(
        `Configuration "${updatedConfig.name}" updated in ${location === "workspace" ? "workspace" : "user"} settings successfully!`
      );
      await this.loadAllConfigurations();
    } catch (error) {
      console.error("Update error:", error);
      vscode.window.showErrorMessage(`Failed to update configuration: ${error}`);
    }
  }
  async saveConfiguration(configuration, location) {
    try {
      console.log(`Attempting to save single configuration to ${location}:`, configuration);
      if (location === "workspace" && !vscode.workspace.workspaceFolders) {
        vscode.window.showErrorMessage("No workspace is open. Cannot save to workspace settings. Please use user settings instead.");
        return;
      }
      let existingConfigs = [];
      if (location === "workspace") {
        const config2 = vscode.workspace.getConfiguration("injector");
        existingConfigs = config2.get("configurations", []);
      } else {
        const globalConfig = vscode.workspace.getConfiguration("injector").inspect("configurations");
        existingConfigs = globalConfig?.globalValue || [];
      }
      const existingIndex = existingConfigs.findIndex(
        (c) => c.name === configuration.name && c.type === configuration.type
      );
      let updatedConfigs;
      if (existingIndex !== -1) {
        updatedConfigs = [...existingConfigs];
        updatedConfigs[existingIndex] = configuration;
      } else {
        updatedConfigs = [...existingConfigs, configuration];
      }
      const config = vscode.workspace.getConfiguration("injector");
      const target = location === "workspace" ? vscode.ConfigurationTarget.Workspace : vscode.ConfigurationTarget.Global;
      await config.update("configurations", updatedConfigs, target);
      vscode.window.showInformationMessage(
        `Configuration "${configuration.name}" saved to ${location === "workspace" ? "workspace" : "user"} settings successfully!`
      );
      let savedConfigs = [];
      if (location === "workspace") {
        const verifyConfig = vscode.workspace.getConfiguration("injector");
        savedConfigs = verifyConfig.get("configurations", []);
      } else {
        const globalConfig = vscode.workspace.getConfiguration("injector").inspect("configurations");
        savedConfigs = globalConfig?.globalValue || [];
      }
      console.log("Saved configurations verified:", savedConfigs);
    } catch (error) {
      console.error("Save error:", error);
      vscode.window.showErrorMessage(`Failed to save configuration: ${error}`);
    }
  }
  async saveConfigurations(configurations, location) {
    try {
      console.log(`Attempting to save configurations to ${location}:`, configurations);
      if (location === "workspace" && !vscode.workspace.workspaceFolders) {
        vscode.window.showErrorMessage("No workspace is open. Cannot save to workspace settings. Please use user settings instead.");
        return;
      }
      const config = location === "workspace" ? vscode.workspace.getConfiguration("injector") : vscode.workspace.getConfiguration("injector", null);
      const target = location === "workspace" ? vscode.ConfigurationTarget.Workspace : vscode.ConfigurationTarget.Global;
      await config.update("configurations", configurations, target);
      vscode.window.showInformationMessage(
        `Configurations saved to ${location === "workspace" ? "workspace" : "user"} settings successfully!`
      );
      const verifyConfig = location === "workspace" ? vscode.workspace.getConfiguration("injector") : vscode.workspace.getConfiguration("injector", null);
      const savedConfigs = verifyConfig.get("configurations", []);
      console.log("Saved configurations verified:", savedConfigs);
    } catch (error) {
      console.error("Save error:", error);
      vscode.window.showErrorMessage(`Failed to save configurations: ${error}`);
    }
  }
  async loadAllConfigurations() {
    try {
      console.log("Loading configurations from both workspace and user settings");
      const allConfigurations = [];
      if (vscode.workspace.workspaceFolders) {
        try {
          const workspaceConfig = vscode.workspace.getConfiguration("injector");
          const workspaceConfigs = workspaceConfig.get("configurations", []);
          console.log(`Found ${workspaceConfigs.length} workspace configurations:`, workspaceConfigs);
          workspaceConfigs.forEach((config) => {
            if (!config.saveLocation) {
              config.saveLocation = "workspace";
            }
          });
          allConfigurations.push(...workspaceConfigs);
        } catch (error) {
          console.log("Error loading workspace configs:", error);
        }
      }
      try {
        const globalConfig = vscode.workspace.getConfiguration("injector").inspect("configurations");
        const userConfigs = globalConfig?.globalValue || [];
        console.log(`Found ${userConfigs.length} user configurations:`, userConfigs);
        userConfigs.forEach((config) => {
          if (!config.saveLocation) {
            config.saveLocation = "user";
          }
        });
        allConfigurations.push(...userConfigs);
      } catch (error) {
        console.log("Error loading user configs:", error);
      }
      console.log(`Total configurations loaded: ${allConfigurations.length}`);
      this.panel?.webview.postMessage({
        command: "configurationsLoaded",
        data: allConfigurations
      });
    } catch (error) {
      console.error("Load error:", error);
      vscode.window.showErrorMessage(`Failed to load configurations: ${error}`);
      this.panel?.webview.postMessage({
        command: "configurationsLoaded",
        data: []
      });
    }
  }
  testConfiguration(config) {
    const details = config.type === "CICS" ? `CICS Region: ${config.cicsRegion}, Program: ${config.programName}, Comm Area Length: ${config.commAreaLength}` : `IMS Region: ${config.imsRegionName}, Message Type: ${config.messageType}, Test with Answer: ${config.testWithAnswer}`;
    vscode.window.showInformationMessage(
      `Testing configuration: ${config.name} (${config.type})
${details}
Transaction: ${config.transactionName}`
    );
  }
  handleInjectionResult(result) {
    const message = result.success ? `Injection executed successfully for ${result.configName}` : `Injection failed for ${result.configName}`;
    if (result.success) {
      vscode.window.showInformationMessage(message);
    } else {
      vscode.window.showWarningMessage(message);
    }
    this.logToOutput(`[${result.timestamp}] ${result.type} - ${result.configName}: ${result.message}`);
  }
  logToOutput(message) {
    const outputChannel = vscode.window.createOutputChannel("Injector");
    outputChannel.appendLine(message);
  }
  getWebviewContent() {
    const webviewDistPath = path.join(this.context.extensionPath, "webview", "dist");
    const indexPath = path.join(webviewDistPath, "index.html");
    if (fs.existsSync(indexPath)) {
      let html = fs.readFileSync(indexPath, "utf8");
      const webviewUri = this.panel.webview.asWebviewUri(vscode.Uri.file(webviewDistPath));
      html = html.replace(/(<script[^>]+src=")\.?\/?([^"]+)/g, `$1${webviewUri}/$2`);
      html = html.replace(/(<link[^>]+href=")\.?\/?([^"]+)/g, `$1${webviewUri}/$2`);
      return html;
    }
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
};

// src/extension.ts
function activate(context) {
  const injectorProvider = new InjectorWebviewProvider(context);
  const disposable = vscode2.commands.registerCommand(
    "zLab.injector.openWebview",
    () => {
      injectorProvider.show();
    }
  );
  context.subscriptions.push(disposable);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
