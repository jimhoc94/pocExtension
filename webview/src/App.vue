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

      <vscode-panels>
        <vscode-panel-tab id="tab-1">Configuration</vscode-panel-tab>
        <vscode-panel-tab id="tab-2">Injection</vscode-panel-tab>
        <vscode-panel-tab id="tab-3">Results</vscode-panel-tab>

        <vscode-panel-view id="view-1">
          <div class="space-y-6 w-full">
            <!-- Configuration List -->
            <div class="w-full">
              <div class="flex items-center mb-4 w-full">
                <h3 class="text-lg font-semibold">Configurations</h3>
                <vscode-button
                  @click="showNewConfigForm = true"
                  appearance="primary"
                  class="ml-auto"
                >
                  ＋ Configuration
                </vscode-button>
              </div>

              <!-- Configuration Dropdown List -->
              <div
                v-if="configurations.length === 0"
                class="text-[var(--vscode-descriptionForeground)] italic p-4 text-center"
              >
                No configurations yet. Create your first configuration above.
              </div>

              <div
                v-if="configurations.length > 0"
                class="bg-[var(--vscode-textBlockQuote-background)] p-4 rounded border-l-4 border-[var(--vscode-textBlockQuote-border)]"
              >
                <h4 class="font-semibold mb-3">Existing Configurations</h4>

                <!-- User Settings Section -->
                <div v-if="userConfigurations.length > 0" class="mb-4">
                  <div
                    class="text-sm font-medium mb-2 text-[var(--vscode-descriptionForeground)] text-right"
                  >
                    User Settings ({{ userConfigurations.length }})
                  </div>
                  <div
                    v-for="(config, userIndex) in userConfigurations"
                    :key="`user-${userIndex}`"
                    class="flex items-center justify-between p-2 mb-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] rounded text-left"
                  >
                    <div class="flex-1">
                      <span class="font-medium">{{ config.name }}</span>
                      <span
                        class="text-sm text-[var(--vscode-descriptionForeground)] ml-2"
                        >({{ config.type }})</span
                      >
                    </div>
                    <div class="flex space-x-2">
                      <button
                        @click="
                          editConfiguration(getConfigurationIndex(config))
                        "
                        class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                        title="Edit configuration"
                      >
                        ✏️
                      </button>
                      <button
                        @click="executeConfigurationDirectly(config)"
                        class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                        title="Execute injection"
                        :disabled="isLoading"
                      >
                        <span v-if="loadingConfigIndex !== getConfigurationIndex(config)">▶️</span>
                        <vscode-progress-ring v-else style="width: 14px; height: 14px;"></vscode-progress-ring>
                      </button>
                      <button
                        @click="
                          deleteConfiguration(getConfigurationIndex(config))
                        "
                        class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                        title="Delete configuration"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Workspace Settings Section -->
                <div v-if="workspaceConfigurations.length > 0">
                  <div
                    class="text-sm font-medium mb-2 text-[var(--vscode-descriptionForeground)] text-right"
                  >
                    Workspace Settings ({{ workspaceConfigurations.length }})
                  </div>
                  <div
                    v-for="(config, workspaceIndex) in workspaceConfigurations"
                    :key="`workspace-${workspaceIndex}`"
                    class="flex items-center justify-between p-2 mb-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] rounded text-left"
                  >
                    <div class="flex-1">
                      <span class="font-medium">{{ config.name }}</span>
                      <span
                        class="text-sm text-[var(--vscode-descriptionForeground)] ml-2"
                        >({{ config.type }})</span
                      >
                    </div>
                    <div class="flex space-x-2">
                      <button
                        @click="
                          editConfiguration(getConfigurationIndex(config))
                        "
                        class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                        title="Edit configuration"
                      >
                        ✏️
                      </button>
                      <button
                        @click="executeConfigurationDirectly(config)"
                        class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                        title="Execute injection"
                        :disabled="isLoading"
                      >
                        <span v-if="loadingConfigIndex !== getConfigurationIndex(config)">▶️</span>
                        <vscode-progress-ring v-else style="width: 14px; height: 14px;"></vscode-progress-ring>
                      </button>
                      <button
                        @click="
                          deleteConfiguration(getConfigurationIndex(config))
                        "
                        class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                        title="Delete configuration"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- New/Edit Configuration Form -->
            <div
              v-if="showNewConfigForm || editingIndex !== -1"
              class="border border-[var(--vscode-widget-border)] rounded p-6 bg-[var(--vscode-textBlockQuote-background)]"
            >
              <h3 class="text-lg font-semibold mb-4">
                {{
                  editingIndex !== -1
                    ? "Edit Configuration"
                    : "New Configuration"
                }}
              </h3>

              <div class="space-y-4">
                <!-- Basic Fields -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-2">Name *</label>
                    <input
                      v-model="currentConfig.name"
                      type="text"
                      placeholder="Configuration name"
                      class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2">Type *</label>
                    <select
                      v-model="currentConfig.type"
                      @change="handleTypeChange"
                      class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded"
                    >
                      <option value="CICS">CICS</option>
                      <option value="IMS">IMS</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium mb-2"
                    >Transaction Name</label
                  >
                  <input
                    v-model="currentConfig.transactionName"
                    type="text"
                    placeholder="Transaction name"
                    class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"
                  />
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-2"
                      >Comm Area In</label
                    >
                    <textarea
                      v-model="currentConfig.commAreaIn"
                      rows="4"
                      placeholder="Input communication area"
                      class="w-full px-3 py-2 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)] font-mono text-sm resize-y"
                    ></textarea>
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2"
                      >Comm Area Out</label
                    >
                    <textarea
                      v-model="currentConfig.commAreaOut"
                      rows="4"
                      placeholder="Output communication area"
                      class="w-full px-3 py-2 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)] font-mono text-sm resize-y"
                    ></textarea>
                  </div>
                </div>

                <!-- Save Location Selection -->
                <div class="border-t pt-4">
                  <h4 class="font-medium mb-3">Save Location</h4>
                  <div class="flex space-x-4">
                    <label class="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        v-model="currentConfig.saveLocation"
                        value="workspace"
                        :disabled="editingIndex !== -1"
                        class="text-[var(--vscode-checkbox-selectBackground)]"
                      />
                      <span
                        class="text-sm"
                        :class="
                          editingIndex !== -1
                            ? 'text-[var(--vscode-descriptionForeground)]'
                            : ''
                        "
                        >Workspace Settings</span
                      >
                    </label>
                    <label class="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        v-model="currentConfig.saveLocation"
                        value="user"
                        :disabled="editingIndex !== -1"
                        class="text-[var(--vscode-checkbox-selectBackground)]"
                      />
                      <span
                        class="text-sm"
                        :class="
                          editingIndex !== -1
                            ? 'text-[var(--vscode-descriptionForeground)]'
                            : ''
                        "
                        >User Settings</span
                      >
                    </label>
                  </div>
                  <p
                    class="text-xs text-[var(--vscode-descriptionForeground)] mt-2"
                  >
                    <span v-if="editingIndex !== -1"
                      >Save location cannot be changed when editing an existing
                      configuration.</span
                    >
                    <span v-else
                      >Workspace settings are specific to this project, User
                      settings are global to all projects.</span
                    >
                  </p>
                </div>

                <!-- CICS Specific Fields -->
                <div v-if="currentConfig.type === 'CICS'" class="border-t pt-4">
                  <h4 class="font-medium mb-3">CICS Specific</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-2"
                        >CICS Region</label
                      >
                      <input
                        v-model="currentConfig.cicsRegion"
                        type="text"
                        placeholder="CICS region name"
                        class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-2"
                        >Program Name</label
                      >
                      <input
                        v-model="currentConfig.programName"
                        type="text"
                        placeholder="Program name"
                        class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"
                      />
                    </div>
                  </div>
                  <div class="mt-4">
                    <label class="block text-sm font-medium mb-2"
                      >Comm Area Length</label
                    >
                    <input
                      v-model.number="currentConfig.commAreaLength"
                      type="number"
                      placeholder="Length in bytes"
                      class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"
                    />
                  </div>
                </div>

                <!-- IMS Specific Fields -->
                <div v-if="currentConfig.type === 'IMS'" class="border-t pt-4">
                  <h4 class="font-medium mb-3">IMS Specific</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-2"
                        >IMS Region Name</label
                      >
                      <input
                        v-model="currentConfig.imsRegionName"
                        type="text"
                        placeholder="IMS region name"
                        class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-2"
                        >Message Type</label
                      >
                      <input
                        v-model="currentConfig.messageType"
                        type="text"
                        placeholder="Message type"
                        class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"
                      />
                    </div>
                  </div>
                  <div class="mt-4">
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        v-model="currentConfig.testWithAnswer"
                        class="rounded"
                      />
                      <span class="text-sm font-medium">Test with Answer</span>
                    </label>
                  </div>
                </div>

                <!-- Debug info (temporary) -->
                <div
                  class="text-xs bg-[var(--vscode-textCodeBlock-background)] p-2 rounded"
                >
                  Debug: name="{{ currentConfig.name }}", type="{{
                    currentConfig.type
                  }}", saveLocation="{{ currentConfig.saveLocation }}", valid={{
                    isConfigValid
                  }}
                </div>

                <!-- Form Actions -->
                <vscode-divider />
                <div class="flex space-x-3">
                  <vscode-button
                    @click="saveConfiguration"
                    appearance="primary"
                    :disabled="!isConfigValid"
                  >
                    {{ editingIndex !== -1 ? "Update" : "Save" }} Configuration
                  </vscode-button>
                  <vscode-button
                    @click="cancelConfiguration"
                    appearance="secondary"
                  >
                    Cancel
                  </vscode-button>
                </div>
              </div>
            </div>
          </div>
        </vscode-panel-view>

        <vscode-panel-view id="view-2">
          <div class="space-y-4 min-h-[400px] w-full">
            <!-- Fixed height dropdown section -->
            <div
              class="bg-[var(--vscode-textBlockQuote-background)] p-4 rounded border-l-4 border-[var(--vscode-textBlockQuote-border)] h-[80px] w-full"
            >
              <h3 class="font-semibold mb-2">Select Configuration</h3>
              <select
                v-model="selectedConfigIndex"
                class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded h-[36px]"
                size="1"
              >
                <option value="-1">Select a configuration...</option>

                <!-- User Settings Section -->
                <optgroup
                  v-if="userConfigurations.length > 0"
                  :label="` User Settings (${userConfigurations.length}) `"
                  class="text-right"
                >
                  <option
                    v-for="(config, userIndex) in userConfigurations"
                    :key="`user-${userIndex}`"
                    :value="getConfigurationIndex(config).toString()"
                    class="text-left"
                  >
                    {{ config.name }} ({{ config.type }})
                  </option>
                </optgroup>

                <!-- Workspace Settings Section -->
                <optgroup
                  v-if="workspaceConfigurations.length > 0"
                  :label="` Workspace Settings (${workspaceConfigurations.length}) `"
                  class="text-right"
                >
                  <option
                    v-for="(config, workspaceIndex) in workspaceConfigurations"
                    :key="`workspace-${workspaceIndex}`"
                    :value="getConfigurationIndex(config).toString()"
                    class="text-left"
                  >
                    {{ config.name }} ({{ config.type }})
                  </option>
                </optgroup>
              </select>
            </div>

            <!-- Fixed height configuration display -->
            <div
              class="bg-[var(--vscode-textBlockQuote-background)] p-4 rounded border-l-4 border-[var(--vscode-textBlockQuote-border)] min-h-[200px] w-full"
            >
              <h3 class="font-semibold mb-2">Selected Configuration</h3>

              <div
                v-if="!selectedConfig"
                class="text-[var(--vscode-descriptionForeground)] italic flex items-center justify-center h-[150px]"
              >
                No configuration selected. Please select one from the dropdown
                above.
              </div>

              <div v-if="selectedConfig" class="space-y-3">
                <!-- Basic Info Grid - Fixed height -->
                <div class="grid grid-cols-2 gap-4 text-sm h-[80px]">
                  <div class="space-y-1">
                    <div><strong>Name:</strong> {{ selectedConfig.name }}</div>
                    <div><strong>Type:</strong> {{ selectedConfig.type }}</div>
                    <div>
                      <strong>Save Location:</strong>
                      {{
                        selectedConfig.saveLocation === "workspace"
                          ? "Workspace"
                          : "User"
                      }}
                    </div>
                  </div>
                  <div class="space-y-1">
                    <div>
                      <strong>Transaction:</strong>
                      {{ selectedConfig.transactionName || "N/A" }}
                    </div>
                    <!-- Fixed space for type-specific field -->
                    <div class="h-4">
                      <span v-if="selectedConfig.type === 'CICS'"
                        ><strong>Program:</strong>
                        {{ selectedConfig.programName || "N/A" }}</span
                      >
                      <span v-if="selectedConfig.type === 'IMS'"
                        ><strong>IMS Region:</strong>
                        {{ selectedConfig.imsRegionName || "N/A" }}</span
                      >
                    </div>
                    <div class="h-4">
                      <span v-if="selectedConfig.type === 'CICS'"
                        ><strong>CICS Region:</strong>
                        {{ selectedConfig.cicsRegion || "N/A" }}</span
                      >
                      <span v-if="selectedConfig.type === 'IMS'"
                        ><strong>Message Type:</strong>
                        {{ selectedConfig.messageType || "N/A" }}</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Communication Areas - Fixed height -->
                <div class="border-t pt-2">
                  <div class="grid grid-cols-2 gap-4 text-xs h-[60px]">
                    <div>
                      <div class="font-medium mb-1">Comm Area In:</div>
                      <div
                        class="bg-[var(--vscode-textCodeBlock-background)] p-1 rounded font-mono text-xs overflow-y-auto h-[40px]"
                      >
                        {{ selectedConfig.commAreaIn || "Not set" }}
                      </div>
                    </div>
                    <div>
                      <div class="font-medium mb-1">Comm Area Out:</div>
                      <div
                        class="bg-[var(--vscode-textCodeBlock-background)] p-1 rounded font-mono text-xs overflow-y-auto h-[40px]"
                      >
                        {{ selectedConfig.commAreaOut || "Not set" }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <vscode-divider />

            <!-- Action buttons - Fixed height -->
            <div class="h-[40px] flex items-center space-x-3 w-full">
              <vscode-button
                @click="executeInjection"
                appearance="primary"
                :disabled="!canExecute"
              >
                Execute Injection
              </vscode-button>
              <vscode-button
                @click="testConfiguration"
                appearance="secondary"
                :disabled="!selectedConfig"
              >
                Test Configuration
              </vscode-button>
            </div>

            <!-- Loading indicator - Fixed height -->
            <div class="h-[30px] flex items-center w-full">
              <div v-if="isLoading" class="flex items-center space-x-2">
                <vscode-progress-ring />
                <span>Processing...</span>
              </div>
            </div>
          </div>
        </vscode-panel-view>

        <vscode-panel-view id="view-3">
          <div class="space-y-4 w-full">
            <h3 class="text-lg font-semibold">Execution Results</h3>

            <div
              v-if="results.length === 0"
              class="text-[var(--vscode-descriptionForeground)] italic"
            >
              No results yet. Execute an injection to see results here.
            </div>

            <div
              v-for="(result, index) in results"
              :key="index"
              class="border border-[var(--vscode-widget-border)] rounded p-4"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="font-semibold">{{ result.timestamp }}</span>
                <span
                  :class="[
                    'px-2 py-1 rounded text-xs',
                    result.success
                      ? 'bg-green-600 text-white'
                      : 'bg-red-600 text-white',
                  ]"
                >
                  {{ result.success ? "Success" : "Failed" }}
                </span>
              </div>
              <p class="text-sm mb-2">
                {{ result.type }} - {{ result.configName }}
              </p>
              <pre
                class="bg-[var(--vscode-textCodeBlock-background)] p-2 rounded text-xs overflow-x-auto"
                >{{ result.message }}</pre
              >
            </div>
          </div>
        </vscode-panel-view>
      </vscode-panels>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";

interface BaseConfig {
  name: string;
  type: "CICS" | "IMS";
  commAreaIn: string;
  commAreaOut: string;
  transactionName: string;
  saveLocation: "workspace" | "user";
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
      }\nComm Area In: ${config.commAreaIn?.substring(
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

  vscode.postMessage({
    command: "testConfiguration",
    data: cleanConfigurationForSerialization(selectedConfig.value),
  });
};

const switchToResultsTab = () => {
  // Get the results tab and activate it
  const resultsTab = document.getElementById('tab-3');
  if (resultsTab) {
    resultsTab.click();
  }
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
vscode-text-field,
vscode-text-area,
vscode-dropdown {
  width: 100%;
}

vscode-panels {
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
