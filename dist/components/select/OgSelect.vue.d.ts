import { OgSize } from '../../types';

export interface OgSelectProps {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: string;
    placeholder?: string;
    filter?: boolean;
    filterPlaceholder?: string;
    emptyMessage?: string;
    showClear?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    size?: OgSize;
    fluid?: boolean;
    loading?: boolean;
    overlayTeleport?: boolean;
}
declare function __VLS_template(): {
    value?(_: {
        value: any;
        placeholder: string;
    }): any;
    clearicon?(_: {}): any;
    dropdownicon?(_: {}): any;
    header?(_: {}): any;
    option?(_: {
        option: any;
        index: number;
    }): any;
    footer?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgSelectProps>, {
    options: () => never[];
    placeholder: string;
    filterPlaceholder: string;
    emptyMessage: string;
    filter: boolean;
    showClear: boolean;
    disabled: boolean;
    invalid: boolean;
    fluid: boolean;
    loading: boolean;
    overlayTeleport: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: any) => void;
    change: (value: any) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgSelectProps>, {
    options: () => never[];
    placeholder: string;
    filterPlaceholder: string;
    emptyMessage: string;
    filter: boolean;
    showClear: boolean;
    disabled: boolean;
    invalid: boolean;
    fluid: boolean;
    loading: boolean;
    overlayTeleport: boolean;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onChange?: ((value: any) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    filter: boolean;
    disabled: boolean;
    placeholder: string;
    invalid: boolean;
    loading: boolean;
    fluid: boolean;
    showClear: boolean;
    options: any[];
    filterPlaceholder: string;
    emptyMessage: string;
    overlayTeleport: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
