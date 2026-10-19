<template>
  <li class="og-tree__node" role="treeitem">
    <div class="og-tree__content" @click="toggleNode">
      <span v-if="node.children && node.children.length > 0" class="og-tree__toggler">
        {{ isExpanded ? '▼' : '►' }}
      </span>
      <span v-else class="og-tree__toggler-placeholder" />
      <span v-if="node.icon" :class="['og-tree__icon', node.icon]" />
      <span class="og-tree__label">{{ node.label }}</span>
    </div>

    <ul v-if="node.children && node.children.length > 0 && isExpanded" class="og-tree__sublist">
      <OgTreeNode
        v-for="child in node.children"
        :key="child.key || child.label"
        :node="child"
        :expanded-keys="expandedKeys"
        @toggle="(k) => emit('toggle', k)"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'OgTreeNode',
});

export interface TreeNode {
  key?: string;
  label?: string;
  children?: TreeNode[];
  icon?: string;
  [key: string]: any;
}

const props = defineProps<{
  node: TreeNode;
  expandedKeys: Record<string, boolean>;
}>();

const emit = defineEmits<{
  (e: 'toggle', key: string): void;
}>();

const nodeKey = computed(() => props.node.key || props.node.label || '');
const isExpanded = computed(() => !!props.expandedKeys[nodeKey.value]);

const toggleNode = () => {
  if (props.node.children && props.node.children.length > 0) {
    emit('toggle', nodeKey.value);
  }
};
</script>

<style scoped>
.og-tree__sublist {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 1.25rem;
}

.og-tree__node {
  margin: 0.125rem 0;
}

.og-tree__content {
  display: flex;
  align-items: center;
  gap: var(--og-spacing-xs);
  padding: 0.25rem 0.5rem;
  border-radius: var(--og-radius-sm);
  cursor: pointer;
  transition: background-color var(--og-transition-fast);
}

.og-tree__content:hover {
  background-color: var(--og-bg-subtle);
}

.og-tree__toggler {
  font-size: 0.65rem;
  color: var(--og-text-muted);
  width: 0.75rem;
}
.og-tree__toggler-placeholder {
  width: 0.75rem;
}
</style>
