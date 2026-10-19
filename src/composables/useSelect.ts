import { ref, computed } from 'vue';

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

export function useSelect(config: UseSelectOptions) {
  const isOpen = ref(false);
  const filterQuery = ref('');
  const focusedIndex = ref(-1);

  const getOptionLabel = (option: any): string => {
    if (typeof option === 'object' && option !== null) {
      if (config.optionLabel) return option[config.optionLabel];
      if ('label' in option) return option.label;
    }
    return String(option);
  };

  const getOptionValue = (option: any): any => {
    if (typeof option === 'object' && option !== null) {
      if (config.optionValue) return option[config.optionValue];
      if ('value' in option) return option.value;
    }
    return option;
  };

  const isOptionDisabled = (option: any): boolean => {
    if (typeof option === 'object' && option !== null) {
      if (config.optionDisabled) return !!option[config.optionDisabled];
      if ('disabled' in option) return !!option.disabled;
    }
    return false;
  };

  const filteredOptions = computed(() => {
    if (!config.filter || !filterQuery.value.trim()) {
      return config.options;
    }
    const query = filterQuery.value.toLowerCase();
    return config.options.filter((opt) => {
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
    filteredOptions,
    getOptionLabel,
    getOptionValue,
    isOptionDisabled,
    toggle,
    open,
    close,
  };
}
