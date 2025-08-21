"use strict";

import * as vscode from "vscode";

import { DepNodeProvider, Dependency } from "./nodeDependencies";

export function activate(context: vscode.ExtensionContext) {
  const rootPath =
    vscode.workspace.workspaceFolders &&
    vscode.workspace.workspaceFolders.length > 0
      ? vscode.workspace.workspaceFolders[0].uri.fsPath
      : undefined;

  // Samples of `window.registerTreeDataProvider`
  const nodeDependenciesProvider = new DepNodeProvider(rootPath);
  vscode.window.registerTreeDataProvider(
    "nodeDependencies",
    nodeDependenciesProvider
  );
  vscode.commands.registerCommand("nodeDependencies.refreshEntry", () =>
    nodeDependenciesProvider.refresh()
  );
  vscode.commands.registerCommand("extension.openPackageOnNpm", (moduleName) =>
    vscode.commands.executeCommand(
      "vscode.open",
      vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)
    )
  );
  vscode.commands.registerCommand("nodeDependencies.addEntry", () =>
    vscode.window.showInformationMessage(`Successfully called add entry.`)
  );
  vscode.commands.registerCommand(
    "nodeDependencies.editEntry",
    (node: Dependency) =>
      vscode.window.showInformationMessage(
        `Successfully called edit entry on ${node.label}.`
      )
  );
  vscode.commands.registerCommand(
    "nodeDependencies.deleteEntry",
    (node: Dependency) =>
      vscode.window.showInformationMessage(
        `Successfully called delete entry on ${node.label}.`
      )
  );

  // Samples of `window.registerTreeDataProvider`
  const compilationProvider = new DepNodeProvider(rootPath);
  vscode.window.registerTreeDataProvider("compilation", compilationProvider);
  vscode.commands.registerCommand("compilation.refreshEntry", () =>
    compilationProvider.refresh()
  );
  vscode.commands.registerCommand("extension.openPackageOnNpm", (moduleName) =>
    vscode.commands.executeCommand(
      "vscode.open",
      vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)
    )
  );
  vscode.commands.registerCommand("compilation.addEntry", () =>
    vscode.window.showInformationMessage(`Successfully called add entry.`)
  );
  vscode.commands.registerCommand("compilation.editEntry", (node: Dependency) =>
    vscode.window.showInformationMessage(
      `Successfully called edit entry on ${node.label}.`
    )
  );
  vscode.commands.registerCommand(
    "compilation.deleteEntry",
    (node: Dependency) =>
      vscode.window.showInformationMessage(
        `Successfully called delete entry on ${node.label}.`
      )
  );
}
