<template>
  <div class="og-floatlabel">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OgFloatLabel',
});
</script>

<style scoped>
.og-floatlabel {
  display: inline-flex;
  flex-direction: column;
  position: relative;
}
</style>
