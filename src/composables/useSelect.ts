import { ref, computed, toValue, type MaybeRefOrGetter } from 'vue';

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

export function useSelect(config: UseSelectOptions) {
  const isOpen = ref(false);
  const filterQuery = ref('');
  const focusedIndex = ref(-1);

  const getOptionLabel = (option: any): string => {
    if (typeof option === 'object' && option !== null) {
      const optLabelKey = toValue(config.optionLabel);
      if (optLabelKey && optLabelKey in option) return option[optLabelKey];
      if ('label' in option) return option.label;
    }
    return String(option ?? '');
  };

  const getOptionValue = (option: any): any => {
    if (typeof option === 'object' && option !== null) {
      const optValKey = toValue(config.optionValue);
      if (optValKey && optValKey in option) return option[optValKey];
      if ('value' in option) return option.value;
    }
    return option;
  };

  const isOptionDisabled = (option: any): boolean => {
    if (typeof option === 'object' && option !== null) {
      const optDisKey = toValue(config.optionDisabled);
      if (optDisKey && optDisKey in option) return !!option[optDisKey];
      if ('disabled' in option) return !!option.disabled;
    }
    return false;
  };

  const rawOptions = computed(() => toValue(config.options) || []);

  const filteredOptions = computed(() => {
    const list = rawOptions.value;
    const isFilterActive = toValue(config.filter);
    if (!isFilterActive || !filterQuery.value.trim()) {
      return list;
    }
    const query = filterQuery.value.toLowerCase();
    return list.filter((opt) => {
      const label = getOptionLabel(opt).toLowerCase();
      return label.includes(query);
    });
  });

  const toggle = () => {
    isOpen.value = !isOpen.value;
    if (!isOpen.value) {
      focusedIndex.value = -1;
      filterQuery.value = '';
    }
  };

  const open = () => {
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
    focusedIndex.value = -1;
    filterQuery.value = '';
  };

  return {
    isOpen,
    filterQuery,
    focusedIndex,
    rawOptions,
    filteredOptions,
    getOptionLabel,
    getOptionValue,
    isOptionDisabled,
    toggle,
    open,
    close,
  };
}
