import { ref, computed } from 'vue';

export interface UseDataTableOptions {
  value: any[];
  paginator?: boolean;
  rows?: number;
  dataKey?: string;
}

export function useDataTable(options: UseDataTableOptions) {
  const currentPage = ref(0);
  const rowsPerPage = ref(options.rows || 10);
  const sortField = ref<string | null>(null);
  const sortOrder = ref<number>(1); // 1 = asc, -1 = desc
  const selectedRows = ref<any[]>([]);

  const totalRecords = computed(() => options.value.length);

  const sortedData = computed(() => {
    if (!sortField.value) return options.value;
    const field = sortField.value;
    return [...options.value].sort((a, b) => {
      const valA = a[field];
      const valB = b[field];
      if (valA === valB) return 0;
      if (valA === null || valA === undefined) return 1;
      if (valB === null || valB === undefined) return -1;
      return valA < valB ? -1 * sortOrder.value : 1 * sortOrder.value;
    });
  });

  const paginatedData = computed(() => {
    if (!options.paginator) return sortedData.value;
    const start = currentPage.value * rowsPerPage.value;
    return sortedData.value.slice(start, start + rowsPerPage.value);
  });

  const sort = (field: string) => {
    if (sortField.value === field) {
      if (sortOrder.value === 1) {
        sortOrder.value = -1;
      } else {
        sortField.value = null;
        sortOrder.value = 1;
      }
    } else {
      sortField.value = field;
      sortOrder.value = 1;
    }
  };

  const setPage = (page: number) => {
    currentPage.value = page;
  };

  return {
    currentPage,
    rowsPerPage,
    sortField,
    sortOrder,
    selectedRows,
    totalRecords,
    paginatedData,
    sort,
    setPage,
  };
}
