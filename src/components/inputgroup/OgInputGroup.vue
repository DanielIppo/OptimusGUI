<template>
  <div class="og-inputgroup">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgInputGroup',
});
</script>

<style scoped>
.og-inputgroup {
  display: flex;
  align-items: stretch;
  width: 100%;
}
.og-inputgroup > :deep(*) {
  border-radius: 0;
  margin-left: -1px;
}
.og-inputgroup > :deep(*:first-child) {
  border-top-left-radius: var(--og-radius-md);
  border-bottom-left-radius: var(--og-radius-md);
  margin-left: 0;
}
.og-inputgroup > :deep(*:last-child) {
  border-top-right-radius: var(--og-radius-md);
  border-bottom-right-radius: var(--og-radius-md);
}
</style>
