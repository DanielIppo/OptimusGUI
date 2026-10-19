<template>
  <div class="og-splitter-panel">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgSplitterPanel',
});
</script>

<style scoped>
.og-splitter-panel {
  flex-grow: 1;
  overflow: auto;
}
</style>
