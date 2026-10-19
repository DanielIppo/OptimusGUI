<template>
  <span :class="tagClasses">
    <slot name="icon">
      <span v-if="icon" :class="['og-tag__icon', icon]" />
    </slot>
    <span class="og-tag__value">
      <slot>{{ value }}</slot>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { OgSeverity } from '@/types';

defineOptions({
  name: 'OgTag',
});

export interface OgTagProps {
  value?: string;
  severity?: OgSeverity | 'contrast';
  rounded?: boolean;
  icon?: string;
}

const props = withDefaults(defineProps<OgTagProps>(), {
  rounded: false,
});

const tagClasses = computed(() => [
  'og-tag',
  props.severity ? `og-tag--${props.severity}` : 'og-tag--primary',
  {
    'og-tag--rounded': props.rounded,
  },
]);
</script>

<style scoped>
.og-tag {
  --og-tag-bg: var(--og-color-primary-500);
  --og-tag-color: var(--og-color-primary-contrast);
  --og-tag-radius: var(--og-radius-sm);

  display: inline-flex;
  align-items: center;
  gap: var(--og-spacing-xs);
  padding: 0.125rem 0.5rem;
  border-radius: var(--og-tag-radius);
  background-color: var(--og-tag-bg);
  color: var(--og-tag-color);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-xs);
  font-weight: var(--og-font-weight-semibold);
  line-height: 1.5;
  user-select: none;
}

.og-tag--rounded {
  border-radius: var(--og-radius-full);
}

.og-tag--secondary {
  background-color: var(--og-color-gray-200);
  color: var(--og-color-gray-800);
}
.og-tag--success {
  background-color: #ecfdf5;
  color: #065f46;
}
.og-tag--info {
  background-color: #eff6ff;
  color: #1e40af;
}
.og-tag--warning {
  background-color: #fffbeb;
  color: #92400e;
}
.og-tag--danger {
  background-color: #fef2f2;
  color: #991b1b;
}

.og-tag__icon {
  font-size: 0.875rem;
}
</style>
