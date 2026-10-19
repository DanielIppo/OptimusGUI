import { OgSize } from '../../types';

export interface OgTextareaProps {
    modelValue?: string | null;
    rows?: number;
    cols?: number;
    autoResize?: boolean;
    size?: OgSize;
    invalid?: boolean;
    variant?: 'outlined' | 'filled';
    fluid?: boolean;
    disabled?: boolean;
    placeholder?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgTextareaProps>, {
    modelValue: string;
    rows: number;
    autoResize: boolean;
    variant: string;
    invalid: boolean;
    fluid: boolean;
    disabled: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    change: (event: Event) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgTextareaProps>, {
    modelValue: string;
    rows: number;
    autoResize: boolean;
    variant: string;
    invalid: boolean;
    fluid: boolean;
    disabled: boolean;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string | null;
    variant: "outlined" | "filled";
    fluid: boolean;
    invalid: boolean;
    rows: number;
    autoResize: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
