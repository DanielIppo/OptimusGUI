<template>
  <div v-show="isActive" class="og-tabpanel" role="tabpanel">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';

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
const index = ref<number>(-1);

const isActive = computed(() => {
  if (!tabs) return false;
  return tabs.activeValue.value === index.value;
});

if (tabs) {
  index.value = tabs.registerTab({
    header: props.header,
    disabled: props.disabled,
  });
}
</script>

<style scoped>
.og-tabpanel {
  padding: var(--og-spacing-xl) 0;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}
</style>
