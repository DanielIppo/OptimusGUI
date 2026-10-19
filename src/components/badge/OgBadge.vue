<template>
  <span :class="badgeClasses">
    <slot>{{ value }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { OgSize, OgSeverity } from '@/types';

defineOptions({
  name: 'OgBadge',
});

export interface OgBadgeProps {
  value?: string | number;
  severity?: OgSeverity | 'contrast';
  size?: OgSize;
}

const props = defineProps<OgBadgeProps>();

const badgeClasses = computed(() => [
  'og-badge',
  props.severity ? `og-badge--${props.severity}` : '',
  props.size ? `og-badge--${props.size}` : '',
  {
    'og-badge--dot': props.value === undefined || props.value === null || props.value === '',
  },
]);
</script>

<style scoped>
.og-badge {
  --og-badge-bg: var(--og-color-primary-500);
  --og-badge-color: var(--og-color-primary-contrast);
  --og-badge-min-size: 1.25rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--og-badge-min-size);
  height: var(--og-badge-min-size);
  padding: 0 0.375rem;
  border-radius: var(--og-radius-full);
  background-color: var(--og-badge-bg);
  color: var(--og-badge-color);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-xs);
  font-weight: var(--og-font-weight-bold);
  line-height: 1;
  user-select: none;
}

.og-badge--dot {
  min-width: 0.5rem;
  height: 0.5rem;
  padding: 0;
}

.og-badge--secondary {
  background-color: var(--og-color-gray-500);
}
.og-badge--success {
  background-color: #10b981;
}
.og-badge--info {
  background-color: #3b82f6;
}
.og-badge--warning {
  background-color: #f59e0b;
}
.og-badge--danger {
  background-color: #ef4444;
}

.og-badge--large {
  --og-badge-min-size: 1.5rem;
  font-size: var(--og-font-size-sm);
}
</style>
