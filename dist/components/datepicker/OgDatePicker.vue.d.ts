import { OgSize } from '../../types';

export interface OgDatePickerProps {
    modelValue?: Date | string | null;
    placeholder?: string;
    disabled?: boolean;
    invalid?: boolean;
    fluid?: boolean;
    size?: OgSize;
    showClear?: boolean;
    minDate?: Date;
    maxDate?: Date;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgDatePickerProps>, {
    modelValue: null;
    placeholder: string;
    disabled: boolean;
    invalid: boolean;
    fluid: boolean;
    showClear: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: Date | null) => void;
    change: (value: Date | null) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgDatePickerProps>, {
    modelValue: null;
    placeholder: string;
    disabled: boolean;
    invalid: boolean;
    fluid: boolean;
    showClear: boolean;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: Date | null) => any) | undefined;
    onChange?: ((value: Date | null) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: Date | string | null;
    placeholder: string;
    fluid: boolean;
    invalid: boolean;
    showClear: boolean;
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
