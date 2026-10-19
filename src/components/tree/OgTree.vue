<template>
  <div class="og-tree">
    <ul class="og-tree__list" role="tree">
      <li v-for="node in value" :key="node.key || node.label" class="og-tree__node" role="treeitem">
        <div class="og-tree__content" @click="toggleNode(node)">
          <span v-if="node.children && node.children.length > 0" class="og-tree__toggler">
            {{ isExpanded(node) ? '▼' : '►' }}
          </span>
          <span v-else class="og-tree__toggler-placeholder" />
          <span v-if="node.icon" :class="['og-tree__icon', node.icon]" />
          <span class="og-tree__label">{{ node.label }}</span>
        </div>

        <ul v-if="node.children && isExpanded(node)" class="og-tree__sublist">
          <li v-for="child in node.children" :key="child.key || child.label" class="og-tree__node">
            <div class="og-tree__content">
              <span v-if="child.icon" :class="['og-tree__icon', child.icon]" />
              <span class="og-tree__label">{{ child.label }}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'OgTree',
});

export interface TreeNode {
  key?: string;
  label?: string;
  children?: TreeNode[];
  icon?: string;
  [key: string]: any;
}

export interface OgTreeProps {
  value?: TreeNode[];
}

withDefaults(defineProps<OgTreeProps>(), {
  value: () => [],
});

const expandedKeys = ref<Record<string, boolean>>({});

const isExpanded = (node: TreeNode) => {
  const k = node.key || node.label || '';
  return !!expandedKeys.value[k];
};

const toggleNode = (node: TreeNode) => {
  const k = node.key || node.label || '';
  expandedKeys.value[k] = !expandedKeys.value[k];
};
</script>

<style scoped>
.og-tree {
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  color: var(--og-text-primary);
}

.og-tree__list,
.og-tree__sublist {
  list-style: none;
  margin: 0;
  padding: 0;
}
.og-tree__sublist {
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
