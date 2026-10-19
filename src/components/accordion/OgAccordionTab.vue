<template>
  <div :class="['og-accordion-tab', { 'og-accordion-tab--active': isActive, 'og-accordion-tab--disabled': disabled }]">
    <div class="og-accordion-tab__header" role="button" :tabindex="disabled ? -1 : 0" @click="onHeaderClick">
      <slot name="header">
        <span class="og-accordion-tab__title">{{ header }}</span>
      </slot>
      <span class="og-accordion-tab__toggle-icon">{{ isActive ? '−' : '+' }}</span>
    </div>

    <div v-show="isActive" class="og-accordion-tab__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, onUnmounted } from 'vue';

defineOptions({
  name: 'OgAccordionTab',
});

export interface OgAccordionTabProps {
  header?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<OgAccordionTabProps>(), {
  disabled: false,
});

const accordion = inject<any>('ogAccordion', null);
const tabId = ref<number>(-1);
let tabHandle: any = null;

if (accordion) {
  tabHandle = accordion.registerTab();
  tabId.value = tabHandle.id;
}

onUnmounted(() => {
  if (tabHandle) {
    tabHandle.unregister();
  }
});

const tabIndex = computed(() => {
  if (!accordion) return -1;
  return accordion.registeredTabs.value.indexOf(tabId.value);
});

const isActive = computed(() => {
  if (!accordion || tabIndex.value === -1) return false;
  if (accordion.multiple) {
    return Array.isArray(accordion.activeValue.value) && accordion.activeValue.value.includes(tabIndex.value);
  }
  return accordion.activeValue.value === tabIndex.value;
});

const onHeaderClick = () => {
  if (props.disabled || !accordion || tabIndex.value === -1) return;
  accordion.toggleTab(tabIndex.value);
};
</script>

<style scoped>
.og-accordion-tab {
  border-bottom: 1px solid var(--og-border-color);
}
.og-accordion-tab:last-child {
  border-bottom: none;
}

.og-accordion-tab__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--og-spacing-lg) var(--og-spacing-xl);
  background-color: var(--og-color-white);
  cursor: pointer;
  user-select: none;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-md);
  font-weight: var(--og-font-weight-medium);
  color: var(--og-text-primary);
  transition: background-color var(--og-transition-fast);
}

.og-accordion-tab__header:hover:not(.og-accordion-tab--disabled .og-accordion-tab__header) {
  background-color: var(--og-bg-subtle);
}

.og-accordion-tab__toggle-icon {
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--og-text-muted);
}

.og-accordion-tab__content {
  padding: var(--og-spacing-xl);
  background-color: var(--og-color-white);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}

.og-accordion-tab--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.og-accordion-tab--disabled .og-accordion-tab__header {
  cursor: not-allowed;
}
</style>
