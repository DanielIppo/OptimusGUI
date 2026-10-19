<template>
  <div :class="tableContainerClasses">
    <div v-if="$slots.header" class="og-datatable__header">
      <slot name="header" />
    </div>

    <div class="og-datatable__wrapper">
      <table class="og-datatable__table">
        <thead class="og-datatable__thead">
          <tr>
            <th
              v-for="(col, index) in columns"
              :key="index"
              :style="col.props?.style"
              :class="[
                'og-datatable__th',
                { 'og-datatable__th--sortable': col.props?.sortable },
              ]"
              @click="col.props?.sortable && col.props?.field ? handleSort(col.props.field) : undefined"
            >
              <div class="og-datatable__th-content">
                <span>{{ col.props?.header || col.props?.field }}</span>
                <span v-if="col.props?.sortable && sortField === col.props?.field" class="og-datatable__sort-icon">
                  {{ sortOrder === 1 ? '▲' : '▼' }}
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="og-datatable__tbody">
          <tr v-if="loading" class="og-datatable__loading-row">
            <td :colspan="columns.length" class="og-datatable__loading-cell">
              <slot name="loading">Loading data...</slot>
            </td>
          </tr>
          <tr v-else-if="paginatedData.length === 0" class="og-datatable__empty-row">
            <td :colspan="columns.length" class="og-datatable__empty-cell">
              <slot name="empty">No records found</slot>
            </td>
          </tr>
          <tr
            v-for="(row, rowIndex) in paginatedData"
            :key="dataKey ? row[dataKey] : rowIndex"
            class="og-datatable__row"
          >
            <td
              v-for="(col, colIndex) in columns"
              :key="colIndex"
              :style="col.props?.style"
              class="og-datatable__td"
            >
              <component
                :is="col.children?.body"
                v-if="col.children?.body"
                :data="row"
                :index="rowIndex"
                :field="col.props?.field"
              />
              <span v-else-if="col.props?.field">{{ row[col.props.field] }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Paginator -->
    <div v-if="paginator && totalPages > 1" class="og-datatable__paginator">
      <button
        type="button"
        class="og-datatable__page-btn"
        :disabled="currentPage === 0"
        @click="setPage(currentPage - 1)"
      >
        ‹
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        :class="['og-datatable__page-btn', { 'og-datatable__page-btn--active': currentPage === page - 1 }]"
        @click="setPage(page - 1)"
      >
        {{ page }}
      </button>
      <button
        type="button"
        class="og-datatable__page-btn"
        :disabled="currentPage >= totalPages - 1"
        @click="setPage(currentPage + 1)"
      >
        ›
      </button>
    </div>

    <div v-if="$slots.footer" class="og-datatable__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { OgSize } from '@/types';
import { useDataTable } from '@/composables/useDataTable';

defineOptions({
  name: 'OgDataTable',
});

export interface OgDataTableProps {
  value?: any[];
  dataKey?: string;
  paginator?: boolean;
  rows?: number;
  loading?: boolean;
  stripedRows?: boolean;
  showGridlines?: boolean;
  size?: OgSize;
}

const props = withDefaults(defineProps<OgDataTableProps>(), {
  value: () => [],
  paginator: false,
  rows: 10,
  loading: false,
  stripedRows: false,
  showGridlines: false,
});

const slots = useSlots();

const {
  currentPage,
  sortField,
  sortOrder,
  paginatedData,
  sort: handleSort,
  setPage,
} = useDataTable({
  value: () => props.value,
  paginator: () => props.paginator,
  rows: () => props.rows,
  dataKey: () => props.dataKey,
});

const totalPages = computed(() => {
  const rowCount = props.rows || 10;
  return Math.ceil((props.value?.length || 0) / rowCount);
});

const columns = computed(() => {
  const defaultSlot = slots.default ? slots.default() : [];
  const flatNodes: any[] = [];
  const flatten = (nodes: any[]) => {
    nodes.forEach((node) => {
      if (Array.isArray(node.children) && typeof node.type === 'symbol') {
        flatten(node.children);
      } else if (node.props) {
        flatNodes.push(node);
      }
    });
  };
  flatten(defaultSlot);
  return flatNodes.map((vnode: any) => ({
    props: vnode.props,
    children: vnode.children,
  }));
});

const tableContainerClasses = computed(() => [
  'og-datatable',
  props.size ? `og-datatable--${props.size}` : '',
  {
    'og-datatable--striped': props.stripedRows,
    'og-datatable--gridlines': props.showGridlines,
  },
]);
</script>

<style scoped>
.og-datatable {
  --og-dt-bg: var(--og-color-white);
  --og-dt-border-color: var(--og-border-color);
  --og-dt-header-bg: var(--og-bg-subtle);
  --og-dt-hover-bg: var(--og-bg-subtle);
  --og-dt-padding: var(--og-spacing-md);

  width: 100%;
  border: 1px solid var(--og-dt-border-color);
  border-radius: var(--og-radius-lg);
  background-color: var(--og-dt-bg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.og-datatable__header,
.og-datatable__footer {
  padding: var(--og-spacing-md) var(--og-spacing-lg);
  background-color: var(--og-bg-subtle);
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
  border-bottom: 1px solid var(--og-dt-border-color);
}
.og-datatable__footer {
  border-bottom: none;
  border-top: 1px solid var(--og-dt-border-color);
}

.og-datatable__wrapper {
  overflow-x: auto;
}

.og-datatable__table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: var(--og-font-family);
  font-size: var(--og-font-size-sm);
}

.og-datatable__th {
  padding: var(--og-dt-padding);
  background-color: var(--og-dt-header-bg);
  color: var(--og-text-primary);
  font-weight: var(--og-font-weight-semibold);
  border-bottom: 1px solid var(--og-dt-border-color);
  user-select: none;
}

.og-datatable__th--sortable {
  cursor: pointer;
}
.og-datatable__th--sortable:hover {
  background-color: var(--og-color-gray-200);
}

.og-datatable__th-content {
  display: flex;
  align-items: center;
  gap: var(--og-spacing-xs);
}

.og-datatable__sort-icon {
  font-size: 0.75rem;
}

.og-datatable__td {
  padding: var(--og-dt-padding);
  color: var(--og-text-primary);
  border-bottom: 1px solid var(--og-dt-border-color);
}

.og-datatable__row:hover {
  background-color: var(--og-dt-hover-bg);
}

.og-datatable--striped .og-datatable__row:nth-child(even) {
  background-color: var(--og-bg-subtle);
}

.og-datatable--gridlines .og-datatable__th,
.og-datatable--gridlines .og-datatable__td {
  border-right: 1px solid var(--og-dt-border-color);
}

.og-datatable__loading-cell,
.og-datatable__empty-cell {
  padding: var(--og-spacing-xl);
  text-align: center;
  color: var(--og-text-muted);
}

.og-datatable__paginator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--og-spacing-xs);
  padding: var(--og-spacing-md);
  border-top: 1px solid var(--og-dt-border-color);
}

.og-datatable__page-btn {
  border: 1px solid var(--og-border-color);
  background: var(--og-color-white);
  color: var(--og-text-primary);
  padding: 0.25rem 0.6rem;
  border-radius: var(--og-radius-sm);
  cursor: pointer;
  font-size: var(--og-font-size-xs);
}
.og-datatable__page-btn:hover:not(:disabled) {
  background-color: var(--og-bg-subtle);
}
.og-datatable__page-btn--active {
  background-color: var(--og-color-primary-500);
  color: var(--og-color-primary-contrast);
  border-color: var(--og-color-primary-500);
}
.og-datatable__page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
