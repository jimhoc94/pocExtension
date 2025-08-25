<template>
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
</template>

<script setup lang="ts">
// Props
interface Result {
  timestamp: string;
  success: boolean;
  type: string;
  configName: string;
  message: string;
}

const props = defineProps<{
  results: Result[];
}>();
</script>