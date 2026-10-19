<template>
  <div :class="['og-splitter', `og-splitter--${layout}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgSplitter',
});

export interface OgSplitterProps {
  layout?: 'horizontal' | 'vertical';
}

withDefaults(defineProps<OgSplitterProps>(), {
  layout: 'horizontal',
});
</script>

<style scoped>
.og-splitter {
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-lg);
  overflow: hidden;
}

.og-splitter--horizontal {
  flex-direction: row;
}

.og-splitter--vertical {
  flex-direction: column;
}
</style>
