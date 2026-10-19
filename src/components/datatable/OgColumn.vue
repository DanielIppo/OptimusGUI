<script setup lang="ts">
defineOptions({
  name: 'OgColumn',
});

export interface OgColumnProps {
  field?: string;
  header?: string;
  sortable?: boolean;
  style?: any;
}

defineProps<OgColumnProps>();
</script>

<template>
  <!-- OgColumn is a declarative slot holder component for OgDataTable -->
  <slot />
</template>
