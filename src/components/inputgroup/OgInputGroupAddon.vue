<template>
  <div class="og-inputgroupaddon">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgInputGroupAddon',
});
</script>

<style scoped>
.og-inputgroupaddon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--og-spacing-md);
  background-color: var(--og-bg-muted);
  border: 1px solid var(--og-border-color);
  color: var(--og-text-secondary);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  user-select: none;
}
</style>
