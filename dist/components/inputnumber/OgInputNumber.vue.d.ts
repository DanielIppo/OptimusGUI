import { OgSize } from '../../types';

export interface OgInputNumberProps {
    modelValue?: number | null;
    min?: number;
    max?: number;
    step?: number;
    showButtons?: boolean;
    buttonLayout?: 'stacked' | 'horizontal' | 'vertical';
    size?: OgSize;
    disabled?: boolean;
    invalid?: boolean;
    placeholder?: string;
    fluid?: boolean;
    prefix?: string;
    suffix?: string;
}
declare function __VLS_template(): {
    decrementbuttonicon?(_: {}): any;
    incrementbuttonicon?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgInputNumberProps>, {
    modelValue: null;
    step: number;
    showButtons: boolean;
    buttonLayout: string;
    disabled: boolean;
    invalid: boolean;
    fluid: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number | null) => void;
    change: (event: Event) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgInputNumberProps>, {
    modelValue: null;
    step: number;
    showButtons: boolean;
    buttonLayout: string;
    disabled: boolean;
    invalid: boolean;
    fluid: boolean;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: number | null) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: number | null;
    invalid: boolean;
    fluid: boolean;
    step: number;
    showButtons: boolean;
    buttonLayout: "stacked" | "horizontal" | "vertical";
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
