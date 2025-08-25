<template>
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
        @change="$emit('selection-changed', selectedConfigIndex)"
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
        No configuration selected. Please select one from the dropdown above.
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
    <div class="h-[40px] flex items-center p-4 space-x-3 w-full">
      <vscode-button
        @click="$emit('execute-injection')"
        appearance="primary"
        :disabled="!canExecute || isLoading"
      >
        Execute Injection
      </vscode-button>
      <vscode-button
        @click="$emit('test-configuration')"
        appearance="secondary"
        :disabled="!selectedConfig || isLoading"
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
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Props
interface Configuration {
  name: string;
  type: "CICS" | "IMS";
  commAreaIn: string;
  commAreaOut: string;
  transactionName: string;
  saveLocation: "workspace" | "user";
  cicsRegion?: string;
  programName?: string;
  commAreaLength?: number;
  imsRegionName?: string;
  messageType?: string;
  testWithAnswer?: boolean;
}

const props = defineProps<{
  configurations: Configuration[];
  selectedConfigurationIndex: string;
  isLoading: boolean;
}>();

// Emits
const emit = defineEmits<{
  "selection-changed": [index: string];
  "execute-injection": [];
  "test-configuration": [];
}>();

// Local state
const selectedConfigIndex = ref(props.selectedConfigurationIndex);

// Computed properties
const userConfigurations = computed(() => {
  return props.configurations
    .filter((config) => config.saveLocation === "user")
    .sort((a, b) => {
      if (a.type !== b.type) {
        if (a.type === "CICS") return -1;
        if (b.type === "CICS") return 1;
        return 0;
      }
      return a.name.localeCompare(b.name);
    });
});

const workspaceConfigurations = computed(() => {
  return props.configurations
    .filter((config) => config.saveLocation === "workspace")
    .sort((a, b) => {
      if (a.type !== b.type) {
        if (a.type === "CICS") return -1;
        if (b.type === "CICS") return 1;
        return 0;
      }
      return a.name.localeCompare(b.name);
    });
});

const selectedConfig = computed(() => {
  const index = parseInt(selectedConfigIndex.value);
  return index >= 0 ? props.configurations[index] : null;
});

const canExecute = computed(() => {
  return selectedConfig.value !== null && !props.isLoading;
});

const getConfigurationIndex = (targetConfig: Configuration) => {
  return props.configurations.findIndex(
    (config) =>
      config.name === targetConfig.name &&
      config.type === targetConfig.type &&
      config.saveLocation === targetConfig.saveLocation
  );
};
</script>
