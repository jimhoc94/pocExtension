<template>
  <div
    class="min-h-screen bg-[var(--vscode-editor-background)] text-[var(--vscode-editor-foreground)]"
  >
    <div class="container mx-auto p-6 min-w-[800px] overflow-x-auto">
      <header class="mb-6">
        <h1 class="text-2xl font-bold mb-2">Injector</h1>
        <p class="text-[var(--vscode-descriptionForeground)]">
          CICS/IMS Configuration Management and Injection Tool
        </p>
      </header>

      <vscode-tabs
        :selected-index="selectedTabIndex"
        @vsc-tabs-select="onTabChange"
        panel
      >
        <vscode-tab-header slot="header" panel>Configuration</vscode-tab-header>
        <vscode-tab-header slot="header" panel>Injection</vscode-tab-header>
        <vscode-tab-header slot="header" panel>Results</vscode-tab-header>

        <vscode-tab-panel panel>
          <br />
          <ConfigurationTab
            :configurations="configurations"
            :show-form="showNewConfigForm"
            :editing-index="editingIndex"
            :current-config="currentConfig"
            :is-loading="isLoading"
            :loading-config-index="loadingConfigIndex"
            @create-new="showNewConfigForm = true"
            @edit-config="editConfiguration"
            @execute-config="executeConfigurationDirectly"
            @delete-config="deleteConfiguration"
            @save-config="saveConfiguration"
            @cancel-config="cancelConfiguration"
            @type-change="handleTypeChange"
            @test-zowe-connection="testZoweConnection"
          />
        </vscode-tab-panel>

        <vscode-tab-panel panel>
          <br />
          <InjectionTab
            :configurations="configurations"
            :selected-configuration-index="selectedConfigIndex"
            :is-loading="isLoading"
            @selection-changed="selectedConfigIndex = $event"
            @execute-injection="executeInjection"
            @test-configuration="testConfiguration"
          />
        </vscode-tab-panel>

        <vscode-tab-panel panel>
          <br />
          <ResultsTab :results="results" />
        </vscode-tab-panel>
      </vscode-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import ConfigurationTab from "./components/ConfigurationTab.vue";
import InjectionTab from "./components/InjectionTab.vue";
import ResultsTab from "./components/ResultsTab.vue";

interface ZoweConnectionConfig {
  hostname: string;
  port: number;
  user: string;
  password: string;
  rejectUnauthorized: boolean;
}

interface BaseConfig {
  name: string;
  type: "CICS" | "IMS";
  commAreaIn: string;
  commAreaOut: string;
  transactionName: string;
  saveLocation: "workspace" | "user";
  jclTemplate?: string;
  zoweConnection?: ZoweConnectionConfig;
}

interface CicsConfig extends BaseConfig {
  type: "CICS";
  cicsRegion: string;
  programName: string;
  commAreaLength: number;
}

interface ImsConfig extends BaseConfig {
  type: "IMS";
  imsRegionName: string;
  messageType: string;
  testWithAnswer: boolean;
}

type Configuration = CicsConfig | ImsConfig;

interface Result {
  timestamp: string;
  success: boolean;
  type: string;
  configName: string;
  message: string;
}

// Reactive state
const configurations = ref<Configuration[]>([]);
const showNewConfigForm = ref(false);
const editingIndex = ref(-1);
const selectedConfigIndex = ref("-1");
const results = ref<Result[]>([]);
const isLoading = ref(false);
const loadingConfigIndex = ref(-1);
const selectedTabIndex = ref(0);

// Current configuration being edited/created
const currentConfig = ref<Partial<Configuration>>({
  name: "",
  type: "CICS",
  commAreaIn: "",
  commAreaOut: "",
  transactionName: "",
  saveLocation: "workspace",
  cicsRegion: "",
  programName: "",
  commAreaLength: 0,
  imsRegionName: "",
  messageType: "",
  testWithAnswer: false,
  jclTemplate: "",
  zoweConnection: {
    hostname: "",
    port: 443,
    user: "",
    password: "",
    rejectUnauthorized: false,
  },
});

// Original configuration for edit tracking
const originalConfig = ref<Configuration | null>(null);

// Computed properties
const selectedConfig = computed(() => {
  const index = parseInt(selectedConfigIndex.value);
  return index >= 0 ? configurations.value[index] : null;
});

const isConfigValid = computed(() => {
  const name = currentConfig.value.name;
  const type = currentConfig.value.type;
  return !!(name && name.trim() && type && type.trim());
});

const canExecute = computed(() => {
  return selectedConfig.value !== null;
});

// Computed properties for grouped configurations
const userConfigurations = computed(() => {
  return configurations.value
    .filter((config) => config.saveLocation === "user")
    .sort((a, b) => {
      // First sort by type: CICS first, then IMS
      if (a.type !== b.type) {
        if (a.type === "CICS") return -1;
        if (b.type === "CICS") return 1;
        return 0;
      }
      // Then sort by name alphabetically
      return a.name.localeCompare(b.name);
    });
});

const workspaceConfigurations = computed(() => {
  return configurations.value
    .filter((config) => config.saveLocation === "workspace")
    .sort((a, b) => {
      // First sort by type: CICS first, then IMS
      if (a.type !== b.type) {
        if (a.type === "CICS") return -1;
        if (b.type === "CICS") return 1;
        return 0;
      }
      // Then sort by name alphabetically
      return a.name.localeCompare(b.name);
    });
});

// Helper function to find the original index of a configuration in the full list
const getConfigurationIndex = (targetConfig: Configuration) => {
  return configurations.value.findIndex(
    (config) =>
      config.name === targetConfig.name &&
      config.type === targetConfig.type &&
      config.saveLocation === targetConfig.saveLocation
  );
};

// VS Code API
declare global {
  interface Window {
    acquireVsCodeApi(): {
      postMessage(message: any): void;
    };
  }
}

const vscode = window.acquireVsCodeApi();

// Configuration management methods
const resetCurrentConfig = () => {
  currentConfig.value = {
    name: "",
    type: "CICS",
    commAreaIn: "",
    commAreaOut: "",
    transactionName: "",
    saveLocation: "workspace",
    cicsRegion: "",
    programName: "",
    commAreaLength: 0,
    imsRegionName: "",
    messageType: "",
    testWithAnswer: false,
    jclTemplate: "",
    zoweConnection: {
      hostname: "",
      port: 443,
      user: "",
      password: "",
      rejectUnauthorized: false,
    },
  };
};

const handleTypeChange = () => {
  // Reset type-specific fields when switching types
  if (currentConfig.value.type === "CICS") {
    currentConfig.value.imsRegionName = "";
    currentConfig.value.messageType = "";
    currentConfig.value.testWithAnswer = false;
  } else if (currentConfig.value.type === "IMS") {
    currentConfig.value.cicsRegion = "";
    currentConfig.value.programName = "";
    currentConfig.value.commAreaLength = 0;
  }
};

const saveConfiguration = () => {
  if (!isConfigValid.value) return;

  // Clean the configuration before saving
  const config = cleanConfigurationForSerialization(
    currentConfig.value
  ) as Configuration;

  if (editingIndex.value !== -1) {
    // Update existing configuration
    configurations.value[editingIndex.value] = config;

    // Auto-save to VSCode settings when editing
    // Pass original config data and index to properly identify which config to update
    vscode.postMessage({
      command: "updateConfiguration",
      data: {
        originalConfig: cleanConfigurationForSerialization(
          originalConfig.value
        ),
        updatedConfig: config,
        location: config.saveLocation,
        configIndex: editingIndex.value,
      },
    });

    // Close edit form
    editingIndex.value = -1;
    originalConfig.value = null;
    showNewConfigForm.value = false;
  } else {
    // Add new configuration
    configurations.value.push(config);

    // Auto-save to VSCode settings when creating
    saveConfigurationToVSCode(config);

    showNewConfigForm.value = false;
  }

  resetCurrentConfig();
};

const editConfiguration = (index: number) => {
  editingIndex.value = index;
  currentConfig.value = { ...configurations.value[index] };
  // Store original configuration for tracking
  originalConfig.value = { ...configurations.value[index] };
  showNewConfigForm.value = false;
};

const deleteConfiguration = async (index: number) => {
  const configToDelete = configurations.value[index];

  // Remove from local array
  configurations.value.splice(index, 1);

  // Clear selection if deleted config was selected
  if (selectedConfigIndex.value === index.toString()) {
    selectedConfigIndex.value = "-1";
  }

  // Auto-save updated list to VSCode settings
  if (configToDelete) {
    // Get remaining configurations for the same save location
    const remainingConfigs = configurations.value.filter(
      (config) => config.saveLocation === configToDelete.saveLocation
    );

    // Save updated list to VSCode settings
    vscode.postMessage({
      command: "saveAllConfigurations",
      data: {
        configurations: remainingConfigs,
        location: configToDelete.saveLocation,
      },
    });
  }
};

const cancelConfiguration = () => {
  showNewConfigForm.value = false;
  editingIndex.value = -1;
  originalConfig.value = null;
  resetCurrentConfig();
};

// Helper function to clean configuration data for serialization
const cleanConfigurationForSerialization = (config: any) => {
  try {
    // Create a clean copy with only relevant fields
    const cleaned: any = {
      name: config.name,
      type: config.type,
      commAreaIn: config.commAreaIn || "",
      commAreaOut: config.commAreaOut || "",
      transactionName: config.transactionName || "",
      saveLocation: config.saveLocation,
    };

    // Add JCL template if present
    if (config.jclTemplate !== undefined && config.jclTemplate !== "") {
      cleaned.jclTemplate = config.jclTemplate;
    }

    // Add Zowe connection if present and valid
    if (config.zoweConnection && config.zoweConnection.hostname) {
      cleaned.zoweConnection = {
        hostname: config.zoweConnection.hostname,
        port: config.zoweConnection.port || 443,
        user: config.zoweConnection.user || "",
        password: config.zoweConnection.password || "",
        rejectUnauthorized: config.zoweConnection.rejectUnauthorized !== undefined 
          ? config.zoweConnection.rejectUnauthorized 
          : false,
      };
    }

    // Add type-specific fields based on configuration type
    if (config.type === "CICS") {
      // Only add CICS-specific fields
      if (config.cicsRegion !== undefined && config.cicsRegion !== "") {
        cleaned.cicsRegion = config.cicsRegion;
      }
      if (config.programName !== undefined && config.programName !== "") {
        cleaned.programName = config.programName;
      }
      if (config.commAreaLength !== undefined && config.commAreaLength !== 0) {
        cleaned.commAreaLength = config.commAreaLength;
      }
    } else if (config.type === "IMS") {
      // Only add IMS-specific fields
      if (config.imsRegionName !== undefined && config.imsRegionName !== "") {
        cleaned.imsRegionName = config.imsRegionName;
      }
      if (config.messageType !== undefined && config.messageType !== "") {
        cleaned.messageType = config.messageType;
      }
      if (config.testWithAnswer !== undefined) {
        cleaned.testWithAnswer = config.testWithAnswer;
      }
    }

    return cleaned;
  } catch (error) {
    console.error("Error cleaning configuration:", error);
    return {};
  }
};

const saveConfigurationToVSCode = (config: Configuration) => {
  console.log("Saving single configuration to VSCode:", config);

  // Clean configuration to remove undefined values
  const cleanedConfig = cleanConfigurationForSerialization(config);
  console.log("Cleaned configuration:", cleanedConfig);

  vscode.postMessage({
    command: "saveConfiguration",
    data: {
      configuration: cleanedConfig,
      location: config.saveLocation,
    },
  });
};

const loadConfigurations = () => {
  vscode.postMessage({
    command: "loadAllConfigurations",
  });
};

// Injection methods
const executeConfigurationDirectly = async (config: Configuration) => {
  const configIndex = getConfigurationIndex(config);
  loadingConfigIndex.value = configIndex;
  isLoading.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result: Result = {
      timestamp: new Date().toLocaleString(),
      success: Math.random() > 0.3,
      type: config.type,
      configName: config.name,
      message: `${config.type} injection executed for ${
        config.name
      }\nTransaction: ${
        config.transactionName
      }\nComm Area In: ${config.commAreaIn?.substring(0, 100)}...`,
    };

    results.value.unshift(result);

    vscode.postMessage({
      command: "injectionResult",
      data: result,
    });

    // Switch to Results tab after execution
    switchToResultsTab();
  } catch (error) {
    const result: Result = {
      timestamp: new Date().toLocaleString(),
      success: false,
      type: config.type,
      configName: config.name,
      message: `Injection failed: ${error}`,
    };

    results.value.unshift(result);
  } finally {
    isLoading.value = false;
    loadingConfigIndex.value = -1;
  }
};

const executeInjection = async () => {
  if (!selectedConfig.value) return;

  isLoading.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result: Result = {
      timestamp: new Date().toLocaleString(),
      success: Math.random() > 0.3,
      type: selectedConfig.value.type,
      configName: selectedConfig.value.name,
      message: `${selectedConfig.value.type} injection executed for ${
        selectedConfig.value.name
      }\nTransaction: ${
        selectedConfig.value.transactionName
      }\nComm Area In: ${selectedConfig.value.commAreaIn?.substring(
        0,
        100
      )}...`,
    };

    results.value.unshift(result);

    vscode.postMessage({
      command: "injectionResult",
      data: result,
    });

    // Switch to Results tab after execution
    switchToResultsTab();
  } catch (error) {
    const result: Result = {
      timestamp: new Date().toLocaleString(),
      success: false,
      type: selectedConfig.value.type,
      configName: selectedConfig.value.name,
      message: `Injection failed: ${error}`,
    };

    results.value.unshift(result);
  } finally {
    isLoading.value = false;
  }
};

const testConfiguration = () => {
  if (!selectedConfig.value) return;

  // If JCL and Zowe config are present, execute JCL
  if (selectedConfig.value.jclTemplate && selectedConfig.value.zoweConnection?.hostname) {
    vscode.postMessage({
      command: "executeJcl",
      data: {
        configuration: cleanConfigurationForSerialization(selectedConfig.value),
        jclTemplate: selectedConfig.value.jclTemplate,
        zoweConnection: selectedConfig.value.zoweConnection,
      },
    });
  } else {
    vscode.postMessage({
      command: "testConfiguration",
      data: cleanConfigurationForSerialization(selectedConfig.value),
    });
  }
};

const testZoweConnection = () => {
  if (!currentConfig.value.zoweConnection?.hostname) return;
  
  vscode.postMessage({
    command: "testZoweConnection",
    data: currentConfig.value.zoweConnection,
  });
};

const onTabChange = (event: CustomEvent<{ selectedIndex: number }>) => {
  selectedTabIndex.value = event.detail.selectedIndex;
};

const switchToResultsTab = () => {
  // Switch to Results tab (index 2)
  selectedTabIndex.value = 2;
};

// Message handling from extension
window.addEventListener("message", (event) => {
  const message = event.data;
  switch (message.command) {
    case "configurationsLoaded":
      if (message.data) {
        configurations.value = message.data;
      }
      break;
    
    case "jclExecutionStarted":
      // Handle JCL execution started
      console.log(`JCL execution started for ${message.data.configurationName}`);
      break;
    
    case "jclExecutionCompleted":
      // Handle JCL execution completed
      const jclResult = message.data.result;
      const result: Result = {
        timestamp: new Date().toLocaleString(),
        success: jclResult.success,
        type: "JCL",
        configName: message.data.configurationName,
        message: jclResult.success 
          ? `JCL execution successful\nJob: ${jclResult.jobName}(${jclResult.jobId})\nReturn Code: ${jclResult.returnCode}\n\nOutput:\n${jclResult.output || 'No output available'}`
          : `JCL execution failed\nError: ${jclResult.error}`,
      };
      results.value.unshift(result);
      switchToResultsTab();
      break;
    
    case "zoweConnectionTested":
      // Handle Zowe connection test result
      const success = message.data.success;
      console.log(`Zowe connection test ${success ? 'successful' : 'failed'}`);
      break;
  }
});

// Watch for type changes to ensure reactivity
watch(
  () => currentConfig.value.type,
  (newType) => {
    handleTypeChange();
  }
);

// Initialize
onMounted(() => {
  loadConfigurations();
});
</script>

<style>
/* Override VS Code component styles to work better with Tailwind */
vscode-textfield,
vscode-textarea,
vscode-single-select {
  width: 100%;
}

vscode-tabs {
  width: 100%;
}

.container {
  max-width: 1400px;
  min-width: 800px;
}

/* Custom checkbox styling for VS Code theme */
input[type="checkbox"] {
  background-color: var(--vscode-checkbox-background);
  border: 1px solid var(--vscode-checkbox-border);
}

input[type="checkbox"]:checked {
  background-color: var(--vscode-checkbox-selectBackground);
  border-color: var(--vscode-checkbox-selectBorder);
}
</style>
