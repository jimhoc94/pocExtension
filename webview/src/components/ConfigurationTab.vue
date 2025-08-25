<template>
  <div class="space-y-6 w-full">
    <!-- Configuration List -->
    <div class="w-full">
      <div class="flex items-center mb-4 p-4 w-full">
        <vscode-button
          @click="$emit('create-new')"
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
                @click="$emit('edit-config', getConfigurationIndex(config))"
                class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                title="Edit configuration"
              >
                ✏️
              </button>
              <button
                @click="$emit('execute-config', config)"
                class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                title="Execute injection"
                :disabled="isLoading"
              >
                <span
                  v-if="loadingConfigIndex !== getConfigurationIndex(config)"
                  >▶️</span
                >
                <vscode-progress-ring
                  v-else
                  style="width: 14px; height: 14px"
                ></vscode-progress-ring>
              </button>
              <button
                @click="$emit('delete-config', getConfigurationIndex(config))"
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
                @click="$emit('edit-config', getConfigurationIndex(config))"
                class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                title="Edit configuration"
              >
                ✏️
              </button>
              <button
                @click="$emit('execute-config', config)"
                class="p-1 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded"
                title="Execute injection"
                :disabled="isLoading"
              >
                <span
                  v-if="loadingConfigIndex !== getConfigurationIndex(config)"
                  >▶️</span
                >
                <vscode-progress-ring
                  v-else
                  style="width: 14px; height: 14px"
                ></vscode-progress-ring>
              </button>
              <button
                @click="$emit('delete-config', getConfigurationIndex(config))"
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
      v-if="showForm || editingIndex !== -1"
      class="border border-[var(--vscode-widget-border)] rounded p-6 bg-[var(--vscode-textBlockQuote-background)]"
    >
      <h3 class="text-lg font-semibold mb-4">
        {{ editingIndex !== -1 ? "Edit Configuration" : "New Configuration" }}
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
              @change="$emit('type-change')"
              class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded"
            >
              <option value="CICS">CICS</option>
              <option value="IMS">IMS</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Transaction Name</label>
          <input
            v-model="currentConfig.transactionName"
            type="text"
            placeholder="Transaction name"
            class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Comm Area In</label>
            <textarea
              v-model="currentConfig.commAreaIn"
              rows="4"
              placeholder="z/OS dataset name (e.g., HLQ.DATASET or HLQ.PDS(MEMBER))"
              :class="{
                'w-full px-3 py-2 bg-[var(--vscode-input-background)] border text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)] font-mono text-sm resize-y': true,
                'border-[var(--vscode-input-border)]': commAreaInValidation.isValid,
                'border-[var(--vscode-inputValidation-errorBorder)] bg-[var(--vscode-inputValidation-errorBackground)]': !commAreaInValidation.isValid
              }"
            ></textarea>
            <div 
              v-if="!commAreaInValidation.isValid" 
              class="text-xs text-[var(--vscode-inputValidation-errorForeground)] mt-1 px-1"
            >
              {{ commAreaInValidation.error }}
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Comm Area Out</label>
            <textarea
              v-model="currentConfig.commAreaOut"
              rows="4"
              placeholder="z/OS dataset name (e.g., HLQ.DATASET or HLQ.PDS(MEMBER))"
              :class="{
                'w-full px-3 py-2 bg-[var(--vscode-input-background)] border text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)] font-mono text-sm resize-y': true,
                'border-[var(--vscode-input-border)]': commAreaOutValidation.isValid,
                'border-[var(--vscode-inputValidation-errorBorder)] bg-[var(--vscode-inputValidation-errorBackground)]': !commAreaOutValidation.isValid
              }"
            ></textarea>
            <div 
              v-if="!commAreaOutValidation.isValid" 
              class="text-xs text-[var(--vscode-inputValidation-errorForeground)] mt-1 px-1"
            >
              {{ commAreaOutValidation.error }}
            </div>
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
          <p class="text-xs text-[var(--vscode-descriptionForeground)] mt-2">
            <span v-if="editingIndex !== -1"
              >Save location cannot be changed when editing an existing
              configuration.</span
            >
            <span v-else
              >Workspace settings are specific to this project, User settings
              are global to all projects.</span
            >
          </p>
        </div>

        <!-- CICS Specific Fields -->
        <div v-if="currentConfig.type === 'CICS'" class="border-t pt-4">
          <h4 class="font-medium mb-3">CICS Specific</h4>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-2">CICS Region</label>
              <input
                v-model="currentConfig.cicsRegion"
                type="text"
                placeholder="CICS region name"
                class="w-full px-3 py-1 bg-[var(--vscode-input-background)] border border-[var(--vscode-input-border)] text-[var(--vscode-input-foreground)] rounded focus:outline-none focus:ring-1 focus:ring-[var(--vscode-focusBorder)]"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Program Name</label>
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
              <label class="block text-sm font-medium mb-2">Message Type</label>
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
            @click="$emit('save-config')"
            appearance="primary"
            :disabled="!isConfigValid"
          >
            {{ editingIndex !== -1 ? "Update" : "Save" }} Configuration
          </vscode-button>
          <vscode-button @click="$emit('cancel-config')" appearance="secondary">
            Cancel
          </vscode-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { validateCommAreaName, type ValidationResult } from "../utils/zosValidation";

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
  showForm: boolean;
  editingIndex: number;
  currentConfig: Partial<Configuration>;
  isLoading: boolean;
  loadingConfigIndex: number;
}>();

// Emits
const emit = defineEmits<{
  "create-new": [];
  "edit-config": [index: number];
  "execute-config": [config: Configuration];
  "delete-config": [index: number];
  "save-config": [];
  "cancel-config": [];
  "type-change": [];
}>();

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

// Validation computed properties
const commAreaInValidation = computed(() => {
  return validateCommAreaName(props.currentConfig.commAreaIn || '');
});

const commAreaOutValidation = computed(() => {
  return validateCommAreaName(props.currentConfig.commAreaOut || '');
});

const isConfigValid = computed(() => {
  const name = props.currentConfig.name;
  const type = props.currentConfig.type;
  const basicValid = !!(name && name.trim() && type && type.trim());
  const areasValid = commAreaInValidation.value.isValid && commAreaOutValidation.value.isValid;
  return basicValid && areasValid;
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

<style scoped>
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
