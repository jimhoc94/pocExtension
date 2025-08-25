# Injector - CICS/IMS Configuration Manager

A powerful Visual Studio Code extension for managing and executing CICS/IMS configurations with an intuitive webview interface.

## Features

### 🎯 Configuration Management
- **Dual Configuration Types**: Full support for both CICS and IMS configurations
- **Smart Form Validation**: Type-specific field validation with real-time feedback
- **Flexible Storage**: Save configurations to workspace or user settings
- **Easy Organization**: Automatic sorting by type (CICS first) then alphabetically

### ⚡ Execution & Testing
- **Direct Execution**: Execute configurations directly from the configuration list
- **Test Mode**: Dedicated testing functionality for validation
- **Real-time Feedback**: Visual loading indicators and execution status
- **Results Tracking**: Complete history of all executions with timestamps

### 🎨 Modern Interface
- **Native VSCode UI**: Built with VSCode Elements for perfect theme integration
- **Responsive Design**: Optimized for different screen sizes (min 800px width)
- **Tab-based Navigation**: Intuitive three-tab interface
- **Smart Auto-navigation**: Automatically switches to Results tab after execution

## Configuration Types

### CICS Configuration
Configure mainframe CICS transactions with:
- **Transaction Name**: CICS transaction identifier
- **Program Name**: Target COBOL program
- **CICS Region**: Target CICS region
- **Communication Areas**: Input and output data areas
- **Area Length**: Communication area length specification

### IMS Configuration
Configure IMS message processing with:
- **Transaction Name**: IMS transaction code
- **IMS Region**: Target IMS region
- **Message Type**: IMS message format
- **Communication Areas**: Input and output message areas
- **Test with Answer**: Enable response testing mode

## Getting Started

### Installation
1. Install from the VSCode Marketplace
2. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Run "Open Injector"

### Creating Your First Configuration

1. **Open the Extension**
   - Use Command Palette: "Open Injector"
   - The Injector webview opens with three tabs

2. **Add Configuration**
   - Go to the "Configuration" tab
   - Click "＋ Configuration" button
   - Select type (CICS or IMS)
   - Fill in the required fields
   - Choose storage location (Workspace/User)

3. **Execute Configuration**
   - Switch to "Injection" tab
   - Select your configuration from the dropdown
   - Click "Execute Injection" or "Test Configuration"
   - View results in the "Results" tab

## Interface Overview

### Configuration Tab
- **Configuration List**: View all saved configurations organized by storage location
- **Quick Actions**: Edit (✏️), Execute (▶️), or Delete (🗑️) configurations directly
- **Form Editor**: Create and modify configurations with type-specific fields
- **Auto-save**: Configurations are automatically saved to VSCode settings

### Injection Tab
- **Configuration Selector**: Choose from available configurations
- **Execution Controls**: Execute or test selected configurations
- **Loading States**: Visual feedback during execution
- **Organized Display**: Configurations grouped by User/Workspace settings

### Results Tab
- **Execution History**: Complete log of all injection attempts
- **Status Indicators**: Success/failure status with timestamps
- **Detailed Messages**: Full execution details and error messages
- **Automatic Navigation**: Auto-switches here after execution

## Storage & Persistence

### Workspace Settings
Configurations saved to `.vscode/settings.json` in your project:
```json
{
  "injector.configurations": [
    {
      "name": "Production CICS",
      "type": "CICS",
      "saveLocation": "workspace",
      // ... other fields
    }
  ]
}
```

### User Settings
Global configurations available across all projects in your VSCode user settings.

## Technical Details

### Built With
- **Frontend**: Vue.js 3 + TypeScript + Tailwind CSS
- **UI Components**: VSCode Elements (@vscode-elements/elements)
- **Build System**: Vite (webview) + TypeScript compiler (extension)
- **Communication**: Bidirectional webview messaging

### System Requirements
- Visual Studio Code 1.60.0 or higher
- Node.js (for development)

## Development

### Building from Source
```bash
# Install dependencies
npm install
cd webview && npm install

# Build webview
cd webview && npm run build

# Compile extension
npm run compile

# Package extension (optional)
vsce package
```

### Project Structure
```
injector/
├── src/                     # Extension source
│   ├── extension.ts         # Main extension entry
│   └── injectorWebviewProvider.ts
├── webview/                 # Vue.js webview app
│   ├── src/
│   │   ├── App.vue         # Main Vue component
│   │   ├── main.ts         # Vue entry point
│   │   └── components/     # Tab components
│   └── dist/               # Built webview assets
└── out/                    # Compiled extension
```

## Commands

| Command | Description |
|---------|-------------|
| `injector.openWebview` | Open the Injector configuration interface |

## Settings

| Setting | Description | Type |
|---------|-------------|------|
| `injector.configurations` | Stored CICS/IMS configurations | Array |

## Contributing

This extension was developed with Claude Code and follows VSCode extension best practices. Feel free to contribute improvements and report issues.

## License

MIT License - see LICENSE file for details.

## Changelog

### 1.0.0
- Initial release
- CICS and IMS configuration support
- Three-tab interface (Configuration, Injection, Results)
- Workspace and User settings storage
- Direct execution from configuration list
- Modern VSCode Elements UI

---

**🚀 Ready to streamline your CICS/IMS workflow? Install Injector today!**