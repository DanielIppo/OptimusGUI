import { OgSize, OgSeverity } from '../../types';

export interface OgButtonProps {
    label?: string;
    icon?: string;
    iconPos?: 'left' | 'right' | 'top' | 'bottom';
    iconClass?: string | object;
    badge?: string;
    badgeClass?: string | object;
    badgeSeverity?: OgSeverity | 'contrast';
    loading?: boolean;
    loadingIcon?: string;
    as?: string | object;
    asChild?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    severity?: OgSeverity | 'contrast';
    variant?: 'outlined' | 'text' | 'link';
    outlined?: boolean;
    text?: boolean;
    link?: boolean;
    raised?: boolean;
    rounded?: boolean;
    size?: OgSize;
    fluid?: boolean;
}
declare function __VLS_template(): {
    default?(_: {
        class: (string | {
            'og-button--outlined': boolean;
            'og-button--text': boolean;
            'og-button--link': boolean;
            'og-button--raised': boolean;
            'og-button--rounded': boolean;
            'og-button--fluid': boolean;
            'og-button--icon-only': boolean;
            'og-button--loading': boolean;
            'og-button--disabled': boolean;
            'og-button--vertical': boolean;
        })[];
        disabled: boolean;
    }): any;
    loadingicon?(_: {
        class: string;
    }): any;
    icon?(_: {
        class: string;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgButtonProps>, {
    as: string;
    type: string;
    iconPos: string;
    loading: boolean;
    disabled: boolean;
    asChild: boolean;
    outlined: boolean;
    text: boolean;
    link: boolean;
    raised: boolean;
    rounded: boolean;
    fluid: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<OgButtonProps>, {
    as: string;
    type: string;
    iconPos: string;
    loading: boolean;
    disabled: boolean;
    asChild: boolean;
    outlined: boolean;
    text: boolean;
    link: boolean;
    raised: boolean;
    rounded: boolean;
    fluid: boolean;
}>>> & Readonly<{}>, {
    link: boolean;
    type: "button" | "submit" | "reset";
    text: boolean;
    disabled: boolean;
    outlined: boolean;
    iconPos: "left" | "right" | "top" | "bottom";
    loading: boolean;
    as: string | object;
    asChild: boolean;
    raised: boolean;
    rounded: boolean;
    fluid: boolean;
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
