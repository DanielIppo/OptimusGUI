import { ref, computed, toValue, type MaybeRefOrGetter } from 'vue';

export interface UseDataTableOptions {
  value: MaybeRefOrGetter<any[]>;
  paginator?: MaybeRefOrGetter<boolean | undefined>;
  rows?: MaybeRefOrGetter<number | undefined>;
  dataKey?: MaybeRefOrGetter<string | undefined>;
}

export function useDataTable(options: UseDataTableOptions) {
  const currentPage = ref(0);
  const rowsPerPage = computed(() => toValue(options.rows) || 10);
  const sortField = ref<string | null>(null);
  const sortOrder = ref<number>(1); // 1 = asc, -1 = desc
  const selectedRows = ref<any[]>([]);

  const rawData = computed(() => toValue(options.value) || []);
  const isPaginator = computed(() => !!toValue(options.paginator));
  const totalRecords = computed(() => rawData.value.length);

  const sortedData = computed(() => {
    const data = rawData.value;
    if (!sortField.value) return data;
    const field = sortField.value;
    return [...data].sort((a, b) => {
      const valA = a[field];
      const valB = b[field];
      if (valA === valB) return 0;
      if (valA === null || valA === undefined) return 1;
      if (valB === null || valB === undefined) return -1;
      return valA < valB ? -1 * sortOrder.value : 1 * sortOrder.value;
    });
  });

  const paginatedData = computed(() => {
    if (!isPaginator.value) return sortedData.value;
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
