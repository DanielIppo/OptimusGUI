import { MaybeRefOrGetter } from 'vue';

export interface SelectOption {
    label?: string;
    value?: any;
    disabled?: boolean;
    [key: string]: any;
}
export interface UseSelectOptions {
    options: MaybeRefOrGetter<SelectOption[] | any[]>;
    optionLabel?: MaybeRefOrGetter<string | undefined>;
    optionValue?: MaybeRefOrGetter<string | undefined>;
    optionDisabled?: MaybeRefOrGetter<string | undefined>;
    filter?: MaybeRefOrGetter<boolean | undefined>;
    filterBy?: MaybeRefOrGetter<string | undefined>;
}
export declare function useSelect(config: UseSelectOptions): {
    isOpen: import('vue').Ref<boolean, boolean>;
    filterQuery: import('vue').Ref<string, string>;
    focusedIndex: import('vue').Ref<number, number>;
    rawOptions: import('vue').ComputedRef<any[] | SelectOption[]>;
    filteredOptions: import('vue').ComputedRef<any[]>;
    getOptionLabel: (option: any) => string;
    getOptionValue: (option: any) => any;
    isOptionDisabled: (option: any) => boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
};
