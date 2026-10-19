<template>
  <div class="og-tree">
    <ul class="og-tree__list" role="tree">
      <OgTreeNode
        v-for="node in value"
        :key="node.key || node.label"
        :node="node"
        :expanded-keys="expandedKeys"
        @toggle="toggleNode"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OgTreeNode, { type TreeNode } from './OgTreeNode.vue';

defineOptions({
  name: 'OgTree',
});

export type { TreeNode };

export interface OgTreeProps {
  value?: TreeNode[];
}

withDefaults(defineProps<OgTreeProps>(), {
  value: () => [],
});

const expandedKeys = ref<Record<string, boolean>>({});

const toggleNode = (k: string) => {
  expandedKeys.value[k] = !expandedKeys.value[k];
};
</script>

<style scoped>
.og-tree {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}

.og-tree__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
