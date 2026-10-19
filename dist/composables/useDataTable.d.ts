import { MaybeRefOrGetter } from 'vue';

export interface UseDataTableOptions {
    value: MaybeRefOrGetter<any[]>;
    paginator?: MaybeRefOrGetter<boolean | undefined>;
    rows?: MaybeRefOrGetter<number | undefined>;
    dataKey?: MaybeRefOrGetter<string | undefined>;
}
export declare function useDataTable(options: UseDataTableOptions): {
    currentPage: import('vue').Ref<number, number>;
    rowsPerPage: import('vue').ComputedRef<number>;
    sortField: import('vue').Ref<string | null, string | null>;
    sortOrder: import('vue').Ref<number, number>;
    selectedRows: import('vue').Ref<any[], any[]>;
    totalRecords: import('vue').ComputedRef<number>;
    paginatedData: import('vue').ComputedRef<any[]>;
    sort: (field: string) => void;
    setPage: (page: number) => void;
};
