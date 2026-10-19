<template>
  <div v-show="isActive" class="og-tabpanel" role="tabpanel">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch, onUnmounted } from 'vue';

defineOptions({
  name: 'OgTabPanel',
});

export interface OgTabPanelProps {
  header?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<OgTabPanelProps>(), {
  disabled: false,
});

const tabs = inject<any>('ogTabs', null);
const tabId = ref<number>(-1);
let tabHandle: any = null;

if (tabs) {
  tabHandle = tabs.registerTab({
    header: props.header,
    disabled: props.disabled,
  });
  tabId.value = tabHandle.id;
}

watch(
  () => [props.header, props.disabled],
  () => {
    if (tabHandle) {
      tabHandle.update({ header: props.header, disabled: props.disabled });
    }
  }
);

onUnmounted(() => {
  if (tabHandle) {
    tabHandle.unregister();
  }
});

const tabIndex = computed(() => {
  if (!tabs) return -1;
  return tabs.registeredTabs.value.findIndex((t: any) => t.id === tabId.value);
});

const isActive = computed(() => {
  if (!tabs) return false;
  return tabs.activeValue.value === tabIndex.value;
});
</script>

<style scoped>
.og-tabpanel {
  padding: var(--og-spacing-xl) 0;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}
</style>
