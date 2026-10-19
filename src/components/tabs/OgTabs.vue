<template>
  <div class="og-tabs">
    <div class="og-tabs__nav-container">
      <div class="og-tabs__nav" role="tablist">
        <button
          v-for="(tab, idx) in registeredTabs"
          :key="tab.id"
          type="button"
          role="tab"
          :aria-selected="activeValue === idx"
          :disabled="tab.disabled"
          :class="[
            'og-tabs__header',
            {
              'og-tabs__header--active': activeValue === idx,
              'og-tabs__header--disabled': tab.disabled,
            },
          ]"
          @click="selectTab(idx, tab.disabled)"
        >
          <span>{{ tab.header }}</span>
        </button>
      </div>
    </div>
    <div class="og-tabs__panels">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, reactive, watch } from 'vue';

defineOptions({
  name: 'OgTabs',
});

export interface OgTabsProps {
  value?: number;
}

const props = withDefaults(defineProps<OgTabsProps>(), {
  value: 0,
});

const emit = defineEmits<{
  (e: 'update:value', value: number): void;
  (e: 'tab-change', index: number): void;
}>();

const activeValue = ref<number>(props.value);
const registeredTabs = ref<Array<{ id: number; header?: string; disabled?: boolean }>>([]);
let nextId = 0;

watch(
  () => props.value,
  (newVal) => {
    activeValue.value = newVal;
  }
);

const registerTab = (tabData: { header?: string; disabled?: boolean }) => {
  const id = nextId++;
  const tabItem = reactive({ id, header: tabData.header, disabled: tabData.disabled });
  registeredTabs.value.push(tabItem);

  return {
    id,
    update: (data: { header?: string; disabled?: boolean }) => {
      tabItem.header = data.header;
      tabItem.disabled = data.disabled;
    },
    unregister: () => {
      registeredTabs.value = registeredTabs.value.filter((t) => t.id !== id);
    },
  };
};

const selectTab = (index: number, disabled?: boolean) => {
  if (disabled) return;
  activeValue.value = index;
  emit('update:value', index);
  emit('tab-change', index);
};

provide('ogTabs', {
  activeValue,
  registeredTabs,
  registerTab,
});
</script>

<style scoped>
.og-tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.og-tabs__nav-container {
  border-bottom: 1px solid var(--og-border-color);
}

.og-tabs__nav {
  display: flex;
  gap: var(--og-spacing-md);
  margin-bottom: -1px;
}

.og-tabs__header {
  padding: var(--og-spacing-md) var(--og-spacing-lg);
  border: none;
  background: transparent;
  border-bottom: 2px solid transparent;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  font-weight: var(--og-font-weight-medium);
  color: var(--og-text-secondary);
  cursor: pointer;
  transition: all var(--og-transition-fast);
}

.og-tabs__header:hover:not(.og-tabs__header--disabled) {
  color: var(--og-text-primary);
  border-bottom-color: var(--og-border-color-hover);
}

.og-tabs__header--active {
  color: var(--og-color-primary-500);
  border-bottom-color: var(--og-color-primary-500);
}

.og-tabs__header--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.og-tabs__panels {
  width: 100%;
}
</style>
