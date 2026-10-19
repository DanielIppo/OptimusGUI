<template>
  <div class="og-panel">
    <div v-if="header || $slots.header || toggleable" class="og-panel__header" @click="toggleable && toggle()">
      <slot name="header">
        <span class="og-panel__title">{{ header }}</span>
      </slot>
      <button v-if="toggleable" type="button" class="og-panel__toggle" aria-label="Toggle Panel">
        {{ isCollapsed ? '+' : '−' }}
      </button>
    </div>
    <div v-show="!isCollapsed" class="og-panel__content">
      <slot />
    </div>
    <div v-if="$slots.footer" class="og-panel__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

defineOptions({
  name: 'OgPanel',
});

export interface OgPanelProps {
  header?: string;
  toggleable?: boolean;
  collapsed?: boolean;
}

const props = withDefaults(defineProps<OgPanelProps>(), {
  toggleable: false,
  collapsed: false,
});

const emit = defineEmits<{
  (e: 'update:collapsed', value: boolean): void;
  (e: 'toggle', event: { originalEvent: Event; collapsed: boolean }): void;
}>();

const isCollapsed = ref(props.collapsed);

watch(
  () => props.collapsed,
  (val) => {
    isCollapsed.value = val;
  }
);

const toggle = (e?: Event) => {
  if (!props.toggleable) return;
  isCollapsed.value = !isCollapsed.value;
  emit('update:collapsed', isCollapsed.value);
  emit('toggle', { originalEvent: e || new CustomEvent('toggle'), collapsed: isCollapsed.value });
};
</script>

<style scoped>
.og-panel {
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-lg);
  background-color: var(--og-color-white);
  overflow: hidden;
}

.og-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--og-spacing-md) var(--og-spacing-xl);
  background-color: var(--og-bg-subtle);
  border-bottom: 1px solid var(--og-border-color);
}

.og-panel__title {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-md);
  font-weight: var(--og-font-weight-semibold);
  color: var(--og-text-primary);
}

.og-panel__toggle {
  border: none;
  background: transparent;
  font-size: 1rem;
  color: var(--og-text-muted);
  cursor: pointer;
}

.og-panel__content {
  padding: var(--og-spacing-xl);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}

.og-panel__footer {
  padding: var(--og-spacing-md) var(--og-spacing-xl);
  border-top: 1px solid var(--og-border-color);
  background-color: var(--og-bg-subtle);
}
</style>
