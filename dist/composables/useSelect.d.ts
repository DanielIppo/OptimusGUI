export interface SelectOption {
    label?: string;
    value?: any;
    disabled?: boolean;
    [key: string]: any;
}
export interface UseSelectOptions {
    options: SelectOption[] | any[];
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: string;
    filter?: boolean;
    filterBy?: string;
}
export declare function useSelect(config: UseSelectOptions): {
    isOpen: import('vue').Ref<boolean, boolean>;
    filterQuery: import('vue').Ref<string, string>;
    focusedIndex: import('vue').Ref<number, number>;
    filteredOptions: import('vue').ComputedRef<any[]>;
    getOptionLabel: (option: any) => string;
    getOptionValue: (option: any) => any;
    isOptionDisabled: (option: any) => boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
};
