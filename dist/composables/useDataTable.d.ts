export interface UseDataTableOptions {
    value: any[];
    paginator?: boolean;
    rows?: number;
    dataKey?: string;
}
export declare function useDataTable(options: UseDataTableOptions): {
    currentPage: import('vue').Ref<number, number>;
    rowsPerPage: import('vue').Ref<number, number>;
    sortField: import('vue').Ref<string | null, string | null>;
    sortOrder: import('vue').Ref<number, number>;
    selectedRows: import('vue').Ref<any[], any[]>;
    totalRecords: import('vue').ComputedRef<number>;
    paginatedData: import('vue').ComputedRef<any[]>;
    sort: (field: string) => void;
    setPage: (page: number) => void;
};
