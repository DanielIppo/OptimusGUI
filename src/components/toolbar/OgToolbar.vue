<template>
  <div class="og-toolbar" role="toolbar">
    <div v-if="$slots.start" class="og-toolbar__start">
      <slot name="start" />
    </div>
    <div v-if="$slots.center" class="og-toolbar__center">
      <slot name="center" />
    </div>
    <div v-if="$slots.end" class="og-toolbar__end">
      <slot name="end" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgToolbar',
});
</script>

<style scoped>
.og-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--og-spacing-md) var(--og-spacing-lg);
  background-color: var(--og-bg-subtle);
  border: 1px solid var(--og-border-color);
  border-radius: var(--og-radius-lg);
  gap: var(--og-spacing-md);
}

.og-toolbar__start,
.og-toolbar__center,
.og-toolbar__end {
  display: flex;
  align-items: center;
  gap: var(--og-spacing-sm);
}
</style>
