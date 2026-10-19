<template>
  <div :class="['og-progressbar', `og-progressbar--${mode}`]" role="progressbar" :aria-valuenow="value ?? undefined">
    <div
      v-if="mode === 'determinate'"
      class="og-progressbar__value"
      :style="{ width: `${clampedValue}%` }"
    >
      <span v-if="showValue" class="og-progressbar__label">{{ clampedValue }}{{ unit }}</span>
    </div>
    <div v-else class="og-progressbar__indeterminate-container">
      <div class="og-progressbar__indeterminate-bar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'OgProgressBar',
});

export interface OgProgressBarProps {
  value?: number;
  mode?: 'determinate' | 'indeterminate';
  showValue?: boolean;
  unit?: string;
}

const props = withDefaults(defineProps<OgProgressBarProps>(), {
  value: 0,
  mode: 'determinate',
  showValue: true,
  unit: '%',
});

const clampedValue = computed(() => Math.min(100, Math.max(0, props.value)));
</script>

<style scoped>
.og-progressbar {
  --og-pg-bg: var(--og-bg-muted);
  --og-pg-fill: var(--og-color-primary-500);
  --og-pg-height: 1.25rem;
  --og-pg-radius: var(--og-radius-full);

  width: 100%;
  height: var(--og-pg-height);
  background-color: var(--og-pg-bg);
  border-radius: var(--og-pg-radius);
  overflow: hidden;
  position: relative;
}

.og-progressbar__value {
  height: 100%;
  background-color: var(--og-pg-fill);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: var(--og-spacing-sm);
  transition: width 0.3s ease;
}

.og-progressbar__label {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-xs);
  font-weight: var(--og-font-weight-bold);
  color: var(--og-color-primary-contrast);
}

.og-progressbar--indeterminate {
  height: 0.5rem;
}

.og-progressbar__indeterminate-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.og-progressbar__indeterminate-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--og-pg-fill);
  animation: og-pg-indeterminate 1.5s infinite ease-in-out;
}

@keyframes og-pg-indeterminate {
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
}
</style>
