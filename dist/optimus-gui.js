import { defineComponent as w, useAttrs as ue, computed as k, openBlock as o, createBlock as F, resolveDynamicComponent as ae, mergeProps as re, withCtx as se, renderSlot as m, createElementBlock as s, normalizeClass as $, createElementVNode as b, createCommentVNode as _, toDisplayString as V, ref as C, watch as G, nextTick as W, onMounted as ee, createTextVNode as x, withKeys as N, withModifiers as M, toValue as H, onUnmounted as U, Teleport as J, unref as z, normalizeStyle as j, withDirectives as Z, isRef as ce, vModelText as ne, Fragment as R, renderList as E, createVNode as ge, TransitionGroup as ve, useSlots as be, provide as te, inject as ie, vShow as le, reactive as fe, resolveComponent as pe } from "vue";
const me = {
  key: 1,
  class: "og-button__icon og-button__spinner og-button__spinner-svg",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _e = {
  key: 2,
  class: "og-button__label"
}, he = /* @__PURE__ */ w({
  name: "OgButton",
  inheritAttrs: !1,
  __name: "OgButton",
  props: {
    label: {},
    icon: {},
    iconPos: { default: "left" },
    iconClass: {},
    badge: {},
    badgeClass: {},
    badgeSeverity: {},
    loading: { type: Boolean, default: !1 },
    loadingIcon: {},
    as: { default: "button" },
    asChild: { type: Boolean, default: !1 },
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    severity: {},
    variant: {},
    outlined: { type: Boolean, default: !1 },
    text: { type: Boolean, default: !1 },
    link: { type: Boolean, default: !1 },
    raised: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: {},
    fluid: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, e = ue(), n = k(() => typeof l.as == "string" && l.as.toLowerCase() === "button"), a = k(() => l.disabled || l.loading), u = k(() => l.label ? l.badge ? `${l.label} ${l.badge}` : l.label : e["aria-label"] || void 0), r = k(() => (!!l.icon || !!l.loading) && !l.label && !l.badge), c = k(() => {
      const i = l.outlined || l.variant === "outlined", d = l.text || l.variant === "text", g = l.link || l.variant === "link";
      return [
        "og-button",
        l.severity ? `og-button--${l.severity}` : "",
        l.size ? `og-button--${l.size}` : "",
        `og-button--icon-${l.iconPos}`,
        {
          "og-button--outlined": i,
          "og-button--text": d,
          "og-button--link": g,
          "og-button--raised": l.raised,
          "og-button--rounded": l.rounded,
          "og-button--fluid": l.fluid,
          "og-button--icon-only": r.value,
          "og-button--loading": l.loading,
          "og-button--disabled": a.value,
          "og-button--vertical": (l.iconPos === "top" || l.iconPos === "bottom") && !!l.label
        }
      ];
    });
    return (i, d) => t.asChild ? m(i.$slots, "default", {
      class: $(c.value),
      disabled: a.value
    }, void 0, !0, 1) : (o(), F(ae(t.as), re({
      key: 0,
      type: n.value ? t.type : void 0,
      disabled: a.value,
      "aria-disabled": a.value,
      "aria-label": u.value,
      class: c.value
    }, i.$attrs), {
      default: se(() => [
        m(i.$slots, "default", {}, () => [
          t.loading ? m(i.$slots, "loadingicon", { class: "og-button__icon og-button__spinner" }, () => [
            t.loadingIcon ? (o(), s("span", {
              key: 0,
              class: $(["og-button__icon", "og-button__spinner", t.loadingIcon])
            }, null, 2)) : (o(), s("svg", me, [...d[0] || (d[0] = [
              b("circle", {
                class: "og-spinner-track",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              b("path", {
                class: "og-spinner-head",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])]))
          ], !0, 0) : t.icon || i.$slots.icon ? m(i.$slots, "icon", { class: "og-button__icon" }, () => [
            t.icon ? (o(), s("span", {
              key: 0,
              class: $(["og-button__icon", t.icon, t.iconClass])
            }, null, 2)) : _("", !0)
          ], !0, 1) : _("", !0),
          t.label ? (o(), s("span", _e, V(t.label), 1)) : _("", !0),
          t.badge ? (o(), s("span", {
            key: 3,
            class: $(["og-button__badge", t.badgeSeverity ? `og-button__badge--${t.badgeSeverity}` : "", t.badgeClass])
          }, V(t.badge), 3)) : _("", !0)
        ], !0)
      ]),
      _: 3
    }, 16, ["type", "disabled", "aria-disabled", "aria-label", "class"]));
  }
}), O = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [n, a] of l)
    e[n] = a;
  return e;
}, ye = /* @__PURE__ */ O(he, [["__scopeId", "data-v-256088d1"]]), $e = ["type", "value", "disabled", "placeholder"], ke = /* @__PURE__ */ w({
  name: "OgInputText",
  __name: "OgInputText",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    size: {},
    invalid: { type: Boolean, default: !1 },
    variant: { default: "outlined" },
    fluid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = (c) => {
      const i = c.target;
      n("update:modelValue", i.value);
    }, u = (c) => {
      n("change", c);
    }, r = k(() => [
      "og-inputtext",
      e.size ? `og-inputtext--${e.size}` : "",
      e.variant ? `og-inputtext--${e.variant}` : "",
      {
        "og-inputtext--invalid": e.invalid,
        "og-inputtext--fluid": e.fluid,
        "og-inputtext--disabled": e.disabled
      }
    ]);
    return (c, i) => (o(), s("input", {
      type: t.type,
      value: t.modelValue,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: $(r.value),
      onInput: a,
      onChange: u,
      onFocus: i[0] || (i[0] = (d) => c.$emit("focus", d)),
      onBlur: i[1] || (i[1] = (d) => c.$emit("blur", d))
    }, null, 42, $e));
  }
}), we = /* @__PURE__ */ O(ke, [["__scopeId", "data-v-668f2852"]]), Oe = ["value", "rows", "cols", "disabled", "placeholder"], Ve = /* @__PURE__ */ w({
  name: "OgTextarea",
  __name: "OgTextarea",
  props: {
    modelValue: { default: "" },
    rows: { default: 3 },
    cols: {},
    autoResize: { type: Boolean, default: !1 },
    size: {},
    invalid: { type: Boolean, default: !1 },
    variant: { default: "outlined" },
    fluid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(null), u = () => {
      e.autoResize && a.value && (a.value.style.height = "auto", a.value.style.height = `${a.value.scrollHeight}px`);
    }, r = (i) => {
      const d = i.target;
      n("update:modelValue", d.value), u();
    };
    G(
      () => e.modelValue,
      () => {
        W(u);
      }
    ), ee(() => {
      u();
    });
    const c = k(() => [
      "og-textarea",
      e.size ? `og-textarea--${e.size}` : "",
      e.variant ? `og-textarea--${e.variant}` : "",
      {
        "og-textarea--invalid": e.invalid,
        "og-textarea--fluid": e.fluid,
        "og-textarea--disabled": e.disabled,
        "og-textarea--autoresize": e.autoResize
      }
    ]);
    return (i, d) => (o(), s("textarea", {
      ref_key: "textareaRef",
      ref: a,
      value: t.modelValue,
      rows: t.rows,
      cols: t.cols,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: $(c.value),
      onInput: r,
      onChange: d[0] || (d[0] = (g) => i.$emit("change", g)),
      onFocus: d[1] || (d[1] = (g) => i.$emit("focus", g)),
      onBlur: d[2] || (d[2] = (g) => i.$emit("blur", g))
    }, null, 42, Oe));
  }
}), Ce = /* @__PURE__ */ O(Ve, [["__scopeId", "data-v-5ac57b30"]]), Be = ["checked", "disabled", "readonly", "name", "value"], Ie = { class: "og-checkbox__box" }, Te = {
  key: 0,
  class: "og-checkbox__icon",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Le = /* @__PURE__ */ w({
  name: "OgCheckbox",
  __name: "OgCheckbox",
  props: {
    modelValue: { default: !1 },
    value: {},
    binary: { type: Boolean, default: !0 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = k(() => e.binary ? !!e.modelValue : Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : e.modelValue === e.value), u = (i) => {
      e.disabled || e.readonly || n("click", i);
    }, r = (i) => {
      if (e.disabled || e.readonly) return;
      let d;
      if (e.binary)
        d = !a.value;
      else if (Array.isArray(e.modelValue)) {
        const g = [...e.modelValue];
        if (a.value) {
          const y = g.indexOf(e.value);
          y !== -1 && g.splice(y, 1);
        } else
          g.push(e.value);
        d = g;
      } else
        d = a.value ? null : e.value;
      n("update:modelValue", d), n("change", i);
    }, c = k(() => [
      "og-checkbox",
      e.size ? `og-checkbox--${e.size}` : "",
      {
        "og-checkbox--checked": a.value,
        "og-checkbox--disabled": e.disabled,
        "og-checkbox--invalid": e.invalid
      }
    ]);
    return (i, d) => (o(), s("div", {
      class: $(c.value),
      onClick: u
    }, [
      b("input", {
        type: "checkbox",
        checked: a.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-checkbox__input",
        onFocus: d[0] || (d[0] = (g) => i.$emit("focus", g)),
        onBlur: d[1] || (d[1] = (g) => i.$emit("blur", g)),
        onChange: r
      }, null, 40, Be),
      b("div", Ie, [
        m(i.$slots, "icon", { checked: a.value }, () => [
          a.value ? (o(), s("svg", Te, [...d[2] || (d[2] = [
            b("polyline", { points: "20 6 9 17 4 12" }, null, -1)
          ])])) : _("", !0)
        ], !0)
      ])
    ], 2));
  }
}), Se = /* @__PURE__ */ O(Le, [["__scopeId", "data-v-e5f45c3f"]]), xe = ["checked", "disabled", "readonly", "name", "value"], ze = { class: "og-radiobutton__box" }, Re = {
  key: 0,
  class: "og-radiobutton__icon"
}, Pe = /* @__PURE__ */ w({
  name: "OgRadioButton",
  __name: "OgRadioButton",
  props: {
    modelValue: {},
    value: {},
    name: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = k(() => e.modelValue === e.value), u = (c) => {
      e.disabled || e.readonly || (n("update:modelValue", e.value), n("change", c));
    }, r = k(() => [
      "og-radiobutton",
      e.size ? `og-radiobutton--${e.size}` : "",
      {
        "og-radiobutton--checked": a.value,
        "og-radiobutton--disabled": e.disabled,
        "og-radiobutton--invalid": e.invalid
      }
    ]);
    return (c, i) => (o(), s("div", {
      class: $(r.value)
    }, [
      b("input", {
        type: "radio",
        checked: a.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-radiobutton__input",
        onFocus: i[0] || (i[0] = (d) => c.$emit("focus", d)),
        onBlur: i[1] || (i[1] = (d) => c.$emit("blur", d)),
        onChange: u
      }, null, 40, xe),
      b("div", ze, [
        a.value ? (o(), s("div", Re)) : _("", !0)
      ])
    ], 2));
  }
}), De = /* @__PURE__ */ O(Pe, [["__scopeId", "data-v-7a229299"]]), Ee = ["aria-checked", "checked", "disabled", "readonly"], Me = { class: "og-toggleswitch__slider" }, Ae = { class: "og-toggleswitch__handle" }, Ke = /* @__PURE__ */ w({
  name: "OgToggleSwitch",
  __name: "OgToggleSwitch",
  props: {
    modelValue: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = (c) => {
      e.disabled || e.readonly || c.stopPropagation();
    }, u = (c) => {
      e.disabled || e.readonly || (n("update:modelValue", !e.modelValue), n("change", c));
    }, r = k(() => [
      "og-toggleswitch",
      e.size ? `og-toggleswitch--${e.size}` : "",
      {
        "og-toggleswitch--checked": e.modelValue,
        "og-toggleswitch--disabled": e.disabled,
        "og-toggleswitch--invalid": e.invalid
      }
    ]);
    return (c, i) => (o(), s("div", {
      class: $(r.value),
      onClick: a
    }, [
      b("input", {
        type: "checkbox",
        role: "switch",
        "aria-checked": t.modelValue,
        checked: t.modelValue,
        disabled: t.disabled,
        readonly: t.readonly,
        class: "og-toggleswitch__input",
        onFocus: i[0] || (i[0] = (d) => c.$emit("focus", d)),
        onBlur: i[1] || (i[1] = (d) => c.$emit("blur", d)),
        onChange: u
      }, null, 40, Ee),
      b("div", Me, [
        b("div", Ae, [
          m(c.$slots, "handle", { checked: t.modelValue }, void 0, !0)
        ])
      ])
    ], 2));
  }
}), Ne = /* @__PURE__ */ O(Ke, [["__scopeId", "data-v-a9f76058"]]), je = ["disabled"], Fe = { class: "og-inputnumber__input-wrapper" }, Ge = {
  key: 0,
  class: "og-inputnumber__prefix"
}, Ye = ["value", "disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax", "placeholder", "onKeydown"], Xe = {
  key: 1,
  class: "og-inputnumber__suffix"
}, He = {
  key: 1,
  class: "og-inputnumber__stacked-buttons"
}, qe = ["disabled"], Ue = ["disabled"], Qe = ["disabled"], Je = /* @__PURE__ */ w({
  name: "OgInputNumber",
  __name: "OgInputNumber",
  props: {
    modelValue: { default: null },
    min: {},
    max: {},
    step: { default: 1 },
    showButtons: { type: Boolean, default: !1 },
    buttonLayout: { default: "stacked" },
    size: {},
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    placeholder: {},
    fluid: { type: Boolean, default: !1 },
    prefix: {},
    suffix: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(null), u = k(() => e.modelValue === null || e.modelValue === void 0 || isNaN(e.modelValue) ? "" : String(e.modelValue)), r = k(() => e.min !== void 0 && e.modelValue !== null && e.modelValue <= e.min), c = k(() => e.max !== void 0 && e.modelValue !== null && e.modelValue >= e.max), i = (h) => {
      h !== null && (e.min !== void 0 && h < e.min && (h = e.min), e.max !== void 0 && h > e.max && (h = e.max)), n("update:modelValue", h);
    }, d = () => {
      if (e.disabled) return;
      const h = e.modelValue ?? 0;
      i(h + e.step);
    }, g = () => {
      if (e.disabled) return;
      const h = e.modelValue ?? 0;
      i(h - e.step);
    }, y = (h) => {
      const v = h.target.value.trim();
      if (v === "")
        i(null);
      else {
        const I = Number(v);
        isNaN(I) || i(I);
      }
    }, f = (h) => {
      n("change", h);
    }, p = k(() => [
      "og-inputnumber",
      e.size ? `og-inputnumber--${e.size}` : "",
      {
        "og-inputnumber--invalid": e.invalid,
        "og-inputnumber--fluid": e.fluid,
        "og-inputnumber--disabled": e.disabled,
        "og-inputnumber--buttons": e.showButtons,
        [`og-inputnumber--layout-${e.buttonLayout}`]: e.showButtons
      }
    ]);
    return (h, B) => (o(), s("div", {
      class: $(p.value)
    }, [
      t.showButtons && t.buttonLayout === "horizontal" ? (o(), s("button", {
        key: 0,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || r.value,
        class: "og-inputnumber__button og-inputnumber__button--decrement",
        onClick: g
      }, [
        m(h.$slots, "decrementbuttonicon", {}, () => [
          B[2] || (B[2] = x("-", -1))
        ], !0)
      ], 8, je)) : _("", !0),
      b("div", Fe, [
        t.prefix ? (o(), s("span", Ge, V(t.prefix), 1)) : _("", !0),
        b("input", {
          ref_key: "inputRef",
          ref: a,
          type: "text",
          role: "spinbutton",
          value: u.value,
          disabled: t.disabled,
          "aria-valuenow": t.modelValue ?? void 0,
          "aria-valuemin": t.min,
          "aria-valuemax": t.max,
          placeholder: t.placeholder,
          class: "og-inputnumber__input",
          onInput: y,
          onChange: f,
          onFocus: B[0] || (B[0] = (v) => h.$emit("focus", v)),
          onBlur: B[1] || (B[1] = (v) => h.$emit("blur", v)),
          onKeydown: [
            N(M(d, ["prevent"]), ["up"]),
            N(M(g, ["prevent"]), ["down"])
          ]
        }, null, 40, Ye),
        t.suffix ? (o(), s("span", Xe, V(t.suffix), 1)) : _("", !0)
      ]),
      t.showButtons && t.buttonLayout === "stacked" ? (o(), s("div", He, [
        b("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || c.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-up",
          onClick: d
        }, " ▲ ", 8, qe),
        b("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || r.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-down",
          onClick: g
        }, " ▼ ", 8, Ue)
      ])) : _("", !0),
      t.showButtons && t.buttonLayout === "horizontal" ? (o(), s("button", {
        key: 2,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || c.value,
        class: "og-inputnumber__button og-inputnumber__button--increment",
        onClick: d
      }, [
        m(h.$slots, "incrementbuttonicon", {}, () => [
          B[3] || (B[3] = x("+", -1))
        ], !0)
      ], 8, Qe)) : _("", !0)
    ], 2));
  }
}), We = /* @__PURE__ */ O(Je, [["__scopeId", "data-v-640ba28e"]]);
function Ze(t) {
  const l = C(!1), e = C(""), n = C(-1), a = (f) => {
    if (typeof f == "object" && f !== null) {
      const p = H(t.optionLabel);
      if (p && p in f) return f[p];
      if ("label" in f) return f.label;
    }
    return String(f ?? "");
  }, u = (f) => {
    if (typeof f == "object" && f !== null) {
      const p = H(t.optionValue);
      if (p && p in f) return f[p];
      if ("value" in f) return f.value;
    }
    return f;
  }, r = (f) => {
    if (typeof f == "object" && f !== null) {
      const p = H(t.optionDisabled);
      if (p && p in f) return !!f[p];
      if ("disabled" in f) return !!f.disabled;
    }
    return !1;
  }, c = k(() => H(t.options) || []), i = k(() => {
    const f = c.value;
    if (!H(t.filter) || !e.value.trim())
      return f;
    const h = e.value.toLowerCase();
    return f.filter((B) => a(B).toLowerCase().includes(h));
  });
  return {
    isOpen: l,
    filterQuery: e,
    focusedIndex: n,
    rawOptions: c,
    filteredOptions: i,
    getOptionLabel: a,
    getOptionValue: u,
    isOptionDisabled: r,
    toggle: () => {
      l.value = !l.value, l.value || (n.value = -1, e.value = "");
    },
    open: () => {
      l.value = !0;
    },
    close: () => {
      l.value = !1, n.value = -1, e.value = "";
    }
  };
}
const et = { class: "og-select__label" }, tt = { key: 0 }, lt = {
  key: 1,
  class: "og-select__placeholder"
}, ot = { class: "og-select__dropdown-icon" }, at = {
  key: 0,
  class: "og-select__chevron",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, st = {
  key: 1,
  class: "og-select__spinner",
  viewBox: "0 0 24 24",
  fill: "none"
}, nt = {
  key: 0,
  class: "og-select__header"
}, it = {
  key: 1,
  class: "og-select__filter-container"
}, dt = ["placeholder"], ut = {
  class: "og-select__list",
  role: "listbox"
}, rt = ["aria-selected", "onClick"], ct = {
  key: 0,
  class: "og-select__empty"
}, gt = {
  key: 2,
  class: "og-select__footer"
}, vt = /* @__PURE__ */ w({
  name: "OgSelect",
  __name: "OgSelect",
  props: {
    modelValue: {},
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    optionDisabled: {},
    placeholder: { default: "Select an option" },
    filter: { type: Boolean, default: !1 },
    filterPlaceholder: { default: "Search..." },
    emptyMessage: { default: "No options found" },
    showClear: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {},
    fluid: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    overlayTeleport: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(null), u = C(null), r = C(null), c = C({}), {
      isOpen: i,
      filterQuery: d,
      filteredOptions: g,
      getOptionLabel: y,
      getOptionValue: f,
      isOptionDisabled: p,
      toggle: h,
      close: B
    } = Ze({
      options: () => e.options,
      optionLabel: () => e.optionLabel,
      optionValue: () => e.optionValue,
      optionDisabled: () => e.optionDisabled,
      filter: () => e.filter
    }), v = k(() => e.modelValue === null || e.modelValue === void 0 ? null : (e.options || []).find((A) => f(A) === e.modelValue) ?? e.modelValue), I = k(() => v.value !== null && v.value !== void 0 ? y(v.value) : ""), T = (S) => f(S) === e.modelValue, P = (S) => {
      if (p(S)) return;
      const A = f(S);
      n("update:modelValue", A), n("change", A), B();
    }, L = () => {
      n("update:modelValue", null), n("change", null);
    }, D = () => {
      if (!a.value || !e.overlayTeleport) return;
      const S = a.value.getBoundingClientRect();
      c.value = {
        position: "absolute",
        top: `${S.bottom + window.scrollY + 4}px`,
        left: `${S.left + window.scrollX}px`,
        width: `${S.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, K = () => {
      e.disabled || e.loading || (h(), i.value && W(() => {
        D(), e.filter && r.value && r.value.focus();
      }));
    }, Y = (S) => {
      S.key === "Enter" || S.key === " " ? (S.preventDefault(), K()) : S.key === "Escape" && B();
    }, Q = (S) => {
      a.value && !a.value.contains(S.target) && u.value && !u.value.contains(S.target) && B();
    };
    G(i, (S) => {
      S ? (window.addEventListener("resize", D), window.addEventListener("scroll", D, !0)) : (window.removeEventListener("resize", D), window.removeEventListener("scroll", D, !0));
    }), ee(() => {
      document.addEventListener("click", Q);
    }), U(() => {
      document.removeEventListener("click", Q), window.removeEventListener("resize", D), window.removeEventListener("scroll", D, !0);
    });
    const de = k(() => [
      "og-select",
      e.size ? `og-select--${e.size}` : "",
      {
        "og-select--open": i.value,
        "og-select--invalid": e.invalid,
        "og-select--fluid": e.fluid,
        "og-select--disabled": e.disabled
      }
    ]);
    return (S, A) => (o(), s("div", {
      ref_key: "containerRef",
      ref: a,
      class: $(de.value)
    }, [
      b("div", {
        class: "og-select__trigger",
        tabindex: "0",
        onClick: K,
        onKeydown: Y
      }, [
        b("div", et, [
          m(S.$slots, "value", {
            value: v.value,
            placeholder: t.placeholder
          }, () => [
            v.value !== null && v.value !== void 0 ? (o(), s("span", tt, V(I.value), 1)) : (o(), s("span", lt, V(t.placeholder), 1))
          ], !0)
        ]),
        t.showClear && v.value !== null && v.value !== void 0 && !t.disabled ? (o(), s("span", {
          key: 0,
          class: "og-select__clear",
          onClick: M(L, ["stop"])
        }, [
          m(S.$slots, "clearicon", {}, () => [
            A[1] || (A[1] = x("✕", -1))
          ], !0)
        ])) : _("", !0),
        b("span", ot, [
          m(S.$slots, "dropdownicon", {}, () => [
            t.loading ? (o(), s("svg", st, [...A[3] || (A[3] = [
              b("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4",
                style: { opacity: "0.25" }
              }, null, -1),
              b("path", {
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                style: { opacity: "0.75" }
              }, null, -1)
            ])])) : (o(), s("svg", at, [...A[2] || (A[2] = [
              b("polyline", { points: "6 9 12 15 18 9" }, null, -1)
            ])]))
          ], !0)
        ])
      ], 32),
      (o(), F(J, {
        to: "body",
        disabled: !t.overlayTeleport
      }, [
        z(i) ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: u,
          class: "og-select__overlay",
          style: j(c.value)
        }, [
          S.$slots.header ? (o(), s("div", nt, [
            m(S.$slots, "header", {}, void 0, !0)
          ])) : _("", !0),
          t.filter ? (o(), s("div", it, [
            Z(b("input", {
              ref_key: "filterInputRef",
              ref: r,
              "onUpdate:modelValue": A[0] || (A[0] = (X) => ce(d) ? d.value = X : null),
              type: "text",
              class: "og-select__filter-input",
              placeholder: t.filterPlaceholder
            }, null, 8, dt), [
              [ne, z(d)]
            ])
          ])) : _("", !0),
          b("ul", ut, [
            (o(!0), s(R, null, E(z(g), (X, oe) => (o(), s("li", {
              key: oe,
              class: $([
                "og-select__option",
                {
                  "og-select__option--selected": T(X),
                  "og-select__option--disabled": z(p)(X)
                }
              ]),
              role: "option",
              "aria-selected": T(X),
              onClick: (ms) => P(X)
            }, [
              m(S.$slots, "option", {
                option: X,
                index: oe
              }, () => [
                x(V(z(y)(X)), 1)
              ], !0)
            ], 10, rt))), 128)),
            z(g).length === 0 ? (o(), s("li", ct, V(t.emptyMessage), 1)) : _("", !0)
          ]),
          S.$slots.footer ? (o(), s("div", gt, [
            m(S.$slots, "footer", {}, void 0, !0)
          ])) : _("", !0)
        ], 4)) : _("", !0)
      ], 8, ["disabled"]))
    ], 2));
  }
}), bt = /* @__PURE__ */ O(vt, [["__scopeId", "data-v-094ca737"]]), ft = {
  key: 0,
  class: "og-card__header"
}, pt = { class: "og-card__body" }, mt = {
  key: 0,
  class: "og-card__title"
}, _t = {
  key: 1,
  class: "og-card__subtitle"
}, ht = {
  key: 2,
  class: "og-card__content"
}, yt = {
  key: 3,
  class: "og-card__footer"
}, $t = /* @__PURE__ */ w({
  name: "OgCard",
  __name: "OgCard",
  props: {
    title: {},
    subtitle: {}
  },
  setup(t) {
    const l = k(() => ["og-card"]);
    return (e, n) => (o(), s("div", {
      class: $(l.value)
    }, [
      e.$slots.header ? (o(), s("div", ft, [
        m(e.$slots, "header", {}, void 0, !0)
      ])) : _("", !0),
      b("div", pt, [
        t.title || e.$slots.title ? (o(), s("div", mt, [
          m(e.$slots, "title", {}, () => [
            x(V(t.title), 1)
          ], !0)
        ])) : _("", !0),
        t.subtitle || e.$slots.subtitle ? (o(), s("div", _t, [
          m(e.$slots, "subtitle", {}, () => [
            x(V(t.subtitle), 1)
          ], !0)
        ])) : _("", !0),
        e.$slots.content ? (o(), s("div", ht, [
          m(e.$slots, "content", {}, void 0, !0)
        ])) : _("", !0),
        e.$slots.footer ? (o(), s("div", yt, [
          m(e.$slots, "footer", {}, void 0, !0)
        ])) : _("", !0)
      ])
    ], 2));
  }
}), kt = /* @__PURE__ */ O($t, [["__scopeId", "data-v-becb22d8"]]), wt = {
  key: 0,
  class: "og-dialog__header"
}, Ot = { class: "og-dialog__title" }, Vt = { class: "og-dialog__content" }, Ct = {
  key: 1,
  class: "og-dialog__footer"
}, Bt = /* @__PURE__ */ w({
  name: "OgDialog",
  __name: "OgDialog",
  props: {
    visible: { type: Boolean, default: !1 },
    header: {},
    modal: { type: Boolean, default: !0 },
    closable: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    dismissableMask: { type: Boolean, default: !1 },
    position: { default: "center" },
    style: {}
  },
  emits: ["update:visible", "show", "hide"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(null), u = () => {
      n("update:visible", !1), n("hide");
    }, r = () => {
      e.dismissableMask && u();
    }, c = () => {
      e.closeOnEscape && e.closable && u();
    };
    G(
      () => e.visible,
      (d) => {
        d ? (n("show"), document.body.style.overflow = e.modal ? "hidden" : "") : document.body.style.overflow = "";
      }
    ), U(() => {
      document.body.style.overflow = "";
    });
    const i = k(() => ["og-dialog"]);
    return (d, g) => (o(), F(J, { to: "body" }, [
      t.visible ? (o(), s("div", {
        key: 0,
        class: $(["og-dialog-mask", { "og-dialog-mask--modal": t.modal }, `og-dialog-mask--${t.position}`]),
        onClick: r
      }, [
        b("div", {
          ref_key: "dialogRef",
          ref: a,
          class: $(i.value),
          style: j(t.style),
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1",
          onClick: g[0] || (g[0] = M(() => {
          }, ["stop"])),
          onKeydown: N(c, ["esc"])
        }, [
          t.header || d.$slots.header || t.closable ? (o(), s("div", wt, [
            m(d.$slots, "header", {}, () => [
              b("span", Ot, V(t.header), 1)
            ], !0),
            t.closable ? (o(), s("button", {
              key: 0,
              type: "button",
              class: "og-dialog__close",
              "aria-label": "Close",
              onClick: u
            }, [
              m(d.$slots, "closeicon", {}, () => [
                g[1] || (g[1] = x("✕", -1))
              ], !0)
            ])) : _("", !0)
          ])) : _("", !0),
          b("div", Vt, [
            m(d.$slots, "default", {}, void 0, !0)
          ]),
          d.$slots.footer ? (o(), s("div", Ct, [
            m(d.$slots, "footer", {}, void 0, !0)
          ])) : _("", !0)
        ], 38)
      ], 2)) : _("", !0)
    ]));
  }
}), It = /* @__PURE__ */ O(Bt, [["__scopeId", "data-v-d8d5495a"]]), q = C([]);
function Tt() {
  const t = (a) => {
    const u = a.id || Math.random().toString(36).substring(2, 9), r = { ...a, id: u };
    q.value.push(r), !r.sticky && (r.life || !0) && setTimeout(() => {
      l(u);
    }, r.life || 3e3);
  }, l = (a) => {
    q.value = q.value.filter((u) => u.id !== a);
  };
  return {
    messages: q,
    add: t,
    remove: l,
    removeGroup: (a) => {
      q.value = q.value.filter((u) => u.group !== a);
    },
    clear: () => {
      q.value = [];
    }
  };
}
const Lt = { class: "og-toast__icon" }, St = { key: 0 }, xt = { key: 1 }, zt = { key: 2 }, Rt = { key: 3 }, Pt = { class: "og-toast__body" }, Dt = {
  key: 0,
  class: "og-toast__summary"
}, Et = {
  key: 1,
  class: "og-toast__detail"
}, Mt = ["onClick"], At = /* @__PURE__ */ w({
  name: "OgToast",
  __name: "OgToast",
  props: {
    position: { default: "top-right" },
    group: {}
  },
  setup(t) {
    const l = t, { messages: e, remove: n } = Tt(), a = k(() => l.group ? e.value.filter((u) => u.group === l.group) : e.value.filter((u) => !u.group));
    return (u, r) => (o(), F(J, { to: "body" }, [
      b("div", {
        class: $(["og-toast-container", `og-toast-container--${t.position}`])
      }, [
        ge(ve, { name: "og-toast-anim" }, {
          default: se(() => [
            (o(!0), s(R, null, E(a.value, (c) => (o(), s("div", {
              key: c.id,
              class: $(["og-toast", c.severity ? `og-toast--${c.severity}` : "og-toast--info"])
            }, [
              b("div", Lt, [
                m(u.$slots, "icon", { message: c }, () => [
                  c.severity === "success" ? (o(), s("span", St, "✓")) : c.severity === "warn" ? (o(), s("span", xt, "⚠")) : c.severity === "error" ? (o(), s("span", zt, "✕")) : (o(), s("span", Rt, "ℹ"))
                ], !0)
              ]),
              b("div", Pt, [
                c.summary ? (o(), s("div", Dt, V(c.summary), 1)) : _("", !0),
                c.detail ? (o(), s("div", Et, V(c.detail), 1)) : _("", !0)
              ]),
              c.closable !== !1 ? (o(), s("button", {
                key: 0,
                type: "button",
                class: "og-toast__close",
                "aria-label": "Close",
                onClick: (i) => z(n)(c.id)
              }, " ✕ ", 8, Mt)) : _("", !0)
            ], 2))), 128))
          ]),
          _: 3
        })
      ], 2)
    ]));
  }
}), Kt = /* @__PURE__ */ O(At, [["__scopeId", "data-v-965c9c27"]]);
function Nt(t) {
  const l = C(0), e = k(() => H(t.rows) || 10), n = C(null), a = C(1), u = C([]), r = k(() => H(t.value) || []), c = k(() => !!H(t.paginator)), i = k(() => r.value.length), d = k(() => {
    const p = r.value;
    if (!n.value) return p;
    const h = n.value;
    return [...p].sort((B, v) => {
      const I = B[h], T = v[h];
      return I === T ? 0 : I == null ? 1 : T == null ? -1 : I < T ? -1 * a.value : 1 * a.value;
    });
  }), g = k(() => {
    if (!c.value) return d.value;
    const p = l.value * e.value;
    return d.value.slice(p, p + e.value);
  });
  return {
    currentPage: l,
    rowsPerPage: e,
    sortField: n,
    sortOrder: a,
    selectedRows: u,
    totalRecords: i,
    paginatedData: g,
    sort: (p) => {
      n.value === p ? a.value === 1 ? a.value = -1 : (n.value = null, a.value = 1) : (n.value = p, a.value = 1);
    },
    setPage: (p) => {
      l.value = p;
    }
  };
}
const jt = {
  key: 0,
  class: "og-datatable__header"
}, Ft = { class: "og-datatable__wrapper" }, Gt = { class: "og-datatable__table" }, Yt = { class: "og-datatable__thead" }, Xt = ["onClick"], Ht = { class: "og-datatable__th-content" }, qt = {
  key: 0,
  class: "og-datatable__sort-icon"
}, Ut = { class: "og-datatable__tbody" }, Qt = {
  key: 0,
  class: "og-datatable__loading-row"
}, Jt = ["colspan"], Wt = {
  key: 1,
  class: "og-datatable__empty-row"
}, Zt = ["colspan"], el = { key: 1 }, tl = {
  key: 1,
  class: "og-datatable__paginator"
}, ll = ["disabled"], ol = ["onClick"], al = ["disabled"], sl = {
  key: 2,
  class: "og-datatable__footer"
}, nl = /* @__PURE__ */ w({
  name: "OgDataTable",
  __name: "OgDataTable",
  props: {
    value: { default: () => [] },
    dataKey: {},
    paginator: { type: Boolean, default: !1 },
    rows: { default: 10 },
    loading: { type: Boolean, default: !1 },
    stripedRows: { type: Boolean, default: !1 },
    showGridlines: { type: Boolean, default: !1 },
    size: {}
  },
  setup(t) {
    const l = t, e = be(), {
      currentPage: n,
      sortField: a,
      sortOrder: u,
      paginatedData: r,
      sort: c,
      setPage: i
    } = Nt({
      value: () => l.value,
      paginator: () => l.paginator,
      rows: () => l.rows
    }), d = k(() => {
      var p;
      const f = l.rows || 10;
      return Math.ceil((((p = l.value) == null ? void 0 : p.length) || 0) / f);
    }), g = k(() => {
      const f = e.default ? e.default() : [], p = [], h = (B) => {
        B.forEach((v) => {
          Array.isArray(v.children) && typeof v.type == "symbol" ? h(v.children) : v.props && p.push(v);
        });
      };
      return h(f), p.map((B) => ({
        props: B.props,
        children: B.children
      }));
    }), y = k(() => [
      "og-datatable",
      l.size ? `og-datatable--${l.size}` : "",
      {
        "og-datatable--striped": l.stripedRows,
        "og-datatable--gridlines": l.showGridlines
      }
    ]);
    return (f, p) => (o(), s("div", {
      class: $(y.value)
    }, [
      f.$slots.header ? (o(), s("div", jt, [
        m(f.$slots, "header", {}, void 0, !0)
      ])) : _("", !0),
      b("div", Ft, [
        b("table", Gt, [
          b("thead", Yt, [
            b("tr", null, [
              (o(!0), s(R, null, E(g.value, (h, B) => {
                var v, I, T, P, L, D;
                return o(), s("th", {
                  key: B,
                  style: j((v = h.props) == null ? void 0 : v.style),
                  class: $([
                    "og-datatable__th",
                    { "og-datatable__th--sortable": (I = h.props) == null ? void 0 : I.sortable }
                  ]),
                  onClick: (K) => {
                    var Y, Q;
                    return (Y = h.props) != null && Y.sortable && ((Q = h.props) != null && Q.field) ? z(c)(h.props.field) : void 0;
                  }
                }, [
                  b("div", Ht, [
                    b("span", null, V(((T = h.props) == null ? void 0 : T.header) || ((P = h.props) == null ? void 0 : P.field)), 1),
                    (L = h.props) != null && L.sortable && z(a) === ((D = h.props) == null ? void 0 : D.field) ? (o(), s("span", qt, V(z(u) === 1 ? "▲" : "▼"), 1)) : _("", !0)
                  ])
                ], 14, Xt);
              }), 128))
            ])
          ]),
          b("tbody", Ut, [
            t.loading ? (o(), s("tr", Qt, [
              b("td", {
                colspan: g.value.length,
                class: "og-datatable__loading-cell"
              }, [
                m(f.$slots, "loading", {}, () => [
                  p[2] || (p[2] = x("Loading data...", -1))
                ], !0)
              ], 8, Jt)
            ])) : z(r).length === 0 ? (o(), s("tr", Wt, [
              b("td", {
                colspan: g.value.length,
                class: "og-datatable__empty-cell"
              }, [
                m(f.$slots, "empty", {}, () => [
                  p[3] || (p[3] = x("No records found", -1))
                ], !0)
              ], 8, Zt)
            ])) : _("", !0),
            (o(!0), s(R, null, E(z(r), (h, B) => (o(), s("tr", {
              key: t.dataKey ? h[t.dataKey] : B,
              class: "og-datatable__row"
            }, [
              (o(!0), s(R, null, E(g.value, (v, I) => {
                var T, P, L, D, K;
                return o(), s("td", {
                  key: I,
                  style: j((T = v.props) == null ? void 0 : T.style),
                  class: "og-datatable__td"
                }, [
                  (P = v.children) != null && P.body ? (o(), F(ae((L = v.children) == null ? void 0 : L.body), {
                    key: 0,
                    data: h,
                    index: B,
                    field: (D = v.props) == null ? void 0 : D.field
                  }, null, 8, ["data", "index", "field"])) : (K = v.props) != null && K.field ? (o(), s("span", el, V(h[v.props.field]), 1)) : _("", !0)
                ], 4);
              }), 128))
            ]))), 128))
          ])
        ])
      ]),
      t.paginator && d.value > 1 ? (o(), s("div", tl, [
        b("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: z(n) === 0,
          onClick: p[0] || (p[0] = (h) => z(i)(z(n) - 1))
        }, " ‹ ", 8, ll),
        (o(!0), s(R, null, E(d.value, (h) => (o(), s("button", {
          key: h,
          class: $(["og-datatable__page-btn", { "og-datatable__page-btn--active": z(n) === h - 1 }]),
          onClick: (B) => z(i)(h - 1)
        }, V(h), 11, ol))), 128)),
        b("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: z(n) >= d.value - 1,
          onClick: p[1] || (p[1] = (h) => z(i)(z(n) + 1))
        }, " › ", 8, al)
      ])) : _("", !0),
      f.$slots.footer ? (o(), s("div", sl, [
        m(f.$slots, "footer", {}, void 0, !0)
      ])) : _("", !0)
    ], 2));
  }
}), il = /* @__PURE__ */ O(nl, [["__scopeId", "data-v-899ad77c"]]), dl = /* @__PURE__ */ w({
  name: "OgColumn",
  __name: "OgColumn",
  props: {
    field: {},
    header: {},
    sortable: { type: Boolean },
    style: {}
  },
  setup(t) {
    return (l, e) => m(l.$slots, "default");
  }
}), ul = ["src", "alt"], rl = {
  key: 1,
  class: "og-avatar__label"
}, cl = /* @__PURE__ */ w({
  name: "OgAvatar",
  __name: "OgAvatar",
  props: {
    label: {},
    icon: {},
    image: {},
    size: {},
    shape: { default: "square" },
    ariaLabel: {}
  },
  setup(t) {
    const l = t, e = k(() => [
      "og-avatar",
      l.size ? `og-avatar--${l.size}` : "",
      `og-avatar--${l.shape}`
    ]);
    return (n, a) => (o(), s("div", {
      class: $(e.value)
    }, [
      m(n.$slots, "default", {}, () => [
        t.image ? (o(), s("img", {
          key: 0,
          src: t.image,
          alt: t.ariaLabel,
          class: "og-avatar__image"
        }, null, 8, ul)) : t.label ? (o(), s("span", rl, V(t.label), 1)) : t.icon ? (o(), s("span", {
          key: 2,
          class: $(["og-avatar__icon", t.icon])
        }, null, 2)) : _("", !0)
      ], !0)
    ], 2));
  }
}), gl = /* @__PURE__ */ O(cl, [["__scopeId", "data-v-d897d309"]]), vl = /* @__PURE__ */ w({
  name: "OgBadge",
  __name: "OgBadge",
  props: {
    value: {},
    severity: {},
    size: {}
  },
  setup(t) {
    const l = t, e = k(() => [
      "og-badge",
      l.severity ? `og-badge--${l.severity}` : "",
      l.size ? `og-badge--${l.size}` : "",
      {
        "og-badge--dot": l.value === void 0 || l.value === null || l.value === ""
      }
    ]);
    return (n, a) => (o(), s("span", {
      class: $(e.value)
    }, [
      m(n.$slots, "default", {}, () => [
        x(V(t.value), 1)
      ], !0)
    ], 2));
  }
}), bl = /* @__PURE__ */ O(vl, [["__scopeId", "data-v-facd4d33"]]), fl = ["aria-valuenow"], pl = {
  key: 0,
  class: "og-progressbar__label"
}, ml = {
  key: 1,
  class: "og-progressbar__indeterminate-container"
}, _l = /* @__PURE__ */ w({
  name: "OgProgressBar",
  __name: "OgProgressBar",
  props: {
    value: { default: 0 },
    mode: { default: "determinate" },
    showValue: { type: Boolean, default: !0 },
    unit: { default: "%" }
  },
  setup(t) {
    const l = t, e = k(() => Math.min(100, Math.max(0, l.value)));
    return (n, a) => (o(), s("div", {
      class: $(["og-progressbar", `og-progressbar--${t.mode}`]),
      role: "progressbar",
      "aria-valuenow": t.value ?? void 0
    }, [
      t.mode === "determinate" ? (o(), s("div", {
        key: 0,
        class: "og-progressbar__value",
        style: j({ width: `${e.value}%` })
      }, [
        t.showValue ? (o(), s("span", pl, V(e.value) + V(t.unit), 1)) : _("", !0)
      ], 4)) : (o(), s("div", ml, [...a[0] || (a[0] = [
        b("div", { class: "og-progressbar__indeterminate-bar" }, null, -1)
      ])]))
    ], 10, fl));
  }
}), hl = /* @__PURE__ */ O(_l, [["__scopeId", "data-v-5bd32dc7"]]), yl = /* @__PURE__ */ w({
  name: "OgSkeleton",
  __name: "OgSkeleton",
  props: {
    shape: { default: "rectangle" },
    size: {},
    width: { default: "100%" },
    height: { default: "1rem" },
    borderRadius: {},
    animation: { default: "wave" }
  },
  setup(t) {
    const l = t, e = k(() => l.size ? {
      width: l.size,
      height: l.size,
      borderRadius: l.shape === "circle" ? "50%" : l.borderRadius
    } : {
      width: l.width,
      height: l.height,
      borderRadius: l.shape === "circle" ? "50%" : l.borderRadius
    }), n = k(() => [
      "og-skeleton",
      `og-skeleton--${l.shape}`,
      `og-skeleton--anim-${l.animation}`
    ]);
    return (a, u) => (o(), s("div", {
      class: $(n.value),
      style: j(e.value)
    }, null, 6));
  }
}), $l = /* @__PURE__ */ O(yl, [["__scopeId", "data-v-442ac949"]]), kl = {
  key: 0,
  class: "og-divider__content"
}, wl = /* @__PURE__ */ w({
  name: "OgDivider",
  __name: "OgDivider",
  props: {
    align: { default: "center" },
    layout: { default: "horizontal" },
    type: { default: "solid" }
  },
  setup(t) {
    const l = t, e = k(() => [
      "og-divider",
      `og-divider--${l.layout}`,
      `og-divider--${l.type}`,
      `og-divider--align-${l.align}`
    ]);
    return (n, a) => (o(), s("div", {
      class: $(e.value),
      role: "separator"
    }, [
      n.$slots.default ? (o(), s("div", kl, [
        m(n.$slots, "default", {}, void 0, !0)
      ])) : _("", !0)
    ], 2));
  }
}), Ol = /* @__PURE__ */ O(wl, [["__scopeId", "data-v-9409c09c"]]), Vl = { class: "og-accordion" }, Cl = /* @__PURE__ */ w({
  name: "OgAccordion",
  __name: "OgAccordion",
  props: {
    value: { default: null },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "tab-open", "tab-close"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(e.value ?? (e.multiple ? [] : null)), u = C([]);
    let r = 0;
    G(
      () => e.value,
      (d) => {
        a.value = d;
      }
    );
    const c = () => {
      const d = r++;
      return u.value.push(d), {
        id: d,
        unregister: () => {
          u.value = u.value.filter((g) => g !== d);
        }
      };
    }, i = (d) => {
      if (e.multiple) {
        let g = Array.isArray(a.value) ? [...a.value] : [];
        g.includes(d) ? (g = g.filter((y) => y !== d), n("tab-close", d)) : (g.push(d), n("tab-open", d)), a.value = g, n("update:value", g);
      } else
        a.value === d ? (a.value = null, n("tab-close", d), n("update:value", null)) : (a.value = d, n("tab-open", d), n("update:value", d));
    };
    return te("ogAccordion", {
      multiple: e.multiple,
      activeValue: a,
      registeredTabs: u,
      registerTab: c,
      toggleTab: i
    }), (d, g) => (o(), s("div", Vl, [
      m(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Bl = /* @__PURE__ */ O(Cl, [["__scopeId", "data-v-c67797a3"]]), Il = ["tabindex"], Tl = { class: "og-accordion-tab__title" }, Ll = { class: "og-accordion-tab__toggle-icon" }, Sl = { class: "og-accordion-tab__content" }, xl = /* @__PURE__ */ w({
  name: "OgAccordionTab",
  __name: "OgAccordionTab",
  props: {
    header: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, e = ie("ogAccordion", null), n = C(-1);
    let a = null;
    e && (a = e.registerTab(), n.value = a.id), U(() => {
      a && a.unregister();
    });
    const u = k(() => e ? e.registeredTabs.value.indexOf(n.value) : -1), r = k(() => !e || u.value === -1 ? !1 : e.multiple ? Array.isArray(e.activeValue.value) && e.activeValue.value.includes(u.value) : e.activeValue.value === u.value), c = () => {
      l.disabled || !e || u.value === -1 || e.toggleTab(u.value);
    };
    return (i, d) => (o(), s("div", {
      class: $(["og-accordion-tab", { "og-accordion-tab--active": r.value, "og-accordion-tab--disabled": t.disabled }])
    }, [
      b("div", {
        class: "og-accordion-tab__header",
        role: "button",
        tabindex: t.disabled ? -1 : 0,
        onClick: c
      }, [
        m(i.$slots, "header", {}, () => [
          b("span", Tl, V(t.header), 1)
        ], !0),
        b("span", Ll, V(r.value ? "−" : "+"), 1)
      ], 8, Il),
      Z(b("div", Sl, [
        m(i.$slots, "default", {}, void 0, !0)
      ], 512), [
        [le, r.value]
      ])
    ], 2));
  }
}), zl = /* @__PURE__ */ O(xl, [["__scopeId", "data-v-30d7e376"]]), Rl = { class: "og-tabs" }, Pl = { class: "og-tabs__nav-container" }, Dl = {
  class: "og-tabs__nav",
  role: "tablist"
}, El = ["aria-selected", "disabled", "onClick"], Ml = { class: "og-tabs__panels" }, Al = /* @__PURE__ */ w({
  name: "OgTabs",
  __name: "OgTabs",
  props: {
    value: { default: 0 }
  },
  emits: ["update:value", "tab-change"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(e.value), u = C([]);
    let r = 0;
    G(
      () => e.value,
      (d) => {
        a.value = d;
      }
    );
    const c = (d) => {
      const g = r++, y = fe({ id: g, header: d.header, disabled: d.disabled });
      return u.value.push(y), {
        id: g,
        update: (f) => {
          y.header = f.header, y.disabled = f.disabled;
        },
        unregister: () => {
          u.value = u.value.filter((f) => f.id !== g);
        }
      };
    }, i = (d, g) => {
      g || (a.value = d, n("update:value", d), n("tab-change", d));
    };
    return te("ogTabs", {
      activeValue: a,
      registeredTabs: u,
      registerTab: c
    }), (d, g) => (o(), s("div", Rl, [
      b("div", Pl, [
        b("div", Dl, [
          (o(!0), s(R, null, E(u.value, (y, f) => (o(), s("button", {
            key: y.id,
            type: "button",
            role: "tab",
            "aria-selected": a.value === f,
            disabled: y.disabled,
            class: $([
              "og-tabs__header",
              {
                "og-tabs__header--active": a.value === f,
                "og-tabs__header--disabled": y.disabled
              }
            ]),
            onClick: (p) => i(f, y.disabled)
          }, [
            b("span", null, V(y.header), 1)
          ], 10, El))), 128))
        ])
      ]),
      b("div", Ml, [
        m(d.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Kl = /* @__PURE__ */ O(Al, [["__scopeId", "data-v-50236a70"]]), Nl = {
  class: "og-tabpanel",
  role: "tabpanel"
}, jl = /* @__PURE__ */ w({
  name: "OgTabPanel",
  __name: "OgTabPanel",
  props: {
    header: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, e = ie("ogTabs", null), n = C(-1);
    let a = null;
    e && (a = e.registerTab({
      header: l.header,
      disabled: l.disabled
    }), n.value = a.id), G(
      () => [l.header, l.disabled],
      () => {
        a && a.update({ header: l.header, disabled: l.disabled });
      }
    ), U(() => {
      a && a.unregister();
    });
    const u = k(() => e ? e.registeredTabs.value.findIndex((c) => c.id === n.value) : -1), r = k(() => e ? e.activeValue.value === u.value : !1);
    return (c, i) => Z((o(), s("div", Nl, [
      m(c.$slots, "default", {}, void 0, !0)
    ], 512)), [
      [le, r.value]
    ]);
  }
}), Fl = /* @__PURE__ */ O(jl, [["__scopeId", "data-v-ea9476c4"]]), Gl = { class: "og-tag__value" }, Yl = /* @__PURE__ */ w({
  name: "OgTag",
  __name: "OgTag",
  props: {
    value: {},
    severity: {},
    rounded: { type: Boolean, default: !1 },
    icon: {}
  },
  setup(t) {
    const l = t, e = k(() => [
      "og-tag",
      l.severity ? `og-tag--${l.severity}` : "og-tag--primary",
      {
        "og-tag--rounded": l.rounded
      }
    ]);
    return (n, a) => (o(), s("span", {
      class: $(e.value)
    }, [
      m(n.$slots, "icon", {}, () => [
        t.icon ? (o(), s("span", {
          key: 0,
          class: $(["og-tag__icon", t.icon])
        }, null, 2)) : _("", !0)
      ], !0),
      b("span", Gl, [
        m(n.$slots, "default", {}, () => [
          x(V(t.value), 1)
        ], !0)
      ])
    ], 2));
  }
}), Xl = /* @__PURE__ */ O(Yl, [["__scopeId", "data-v-be36ea7e"]]), Hl = {
  key: 0,
  class: "og-chip"
}, ql = ["src"], Ul = { class: "og-chip__label" }, Ql = /* @__PURE__ */ w({
  name: "OgChip",
  __name: "OgChip",
  props: {
    label: {},
    icon: {},
    image: {},
    removable: { type: Boolean, default: !1 }
  },
  emits: ["remove"],
  setup(t, { emit: l }) {
    const e = l, n = C(!0), a = (u) => {
      n.value = !1, e("remove", u);
    };
    return (u, r) => n.value ? (o(), s("div", Hl, [
      m(u.$slots, "icon", {}, () => [
        t.image ? (o(), s("img", {
          key: 0,
          src: t.image,
          alt: "chip avatar",
          class: "og-chip__image"
        }, null, 8, ql)) : t.icon ? (o(), s("span", {
          key: 1,
          class: $(["og-chip__icon", t.icon])
        }, null, 2)) : _("", !0)
      ], !0),
      b("span", Ul, [
        m(u.$slots, "default", {}, () => [
          x(V(t.label), 1)
        ], !0)
      ]),
      t.removable ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "og-chip__remove",
        "aria-label": "Remove",
        onClick: a
      }, [
        m(u.$slots, "removeicon", {}, () => [
          r[0] || (r[0] = x("✕", -1))
        ], !0)
      ])) : _("", !0)
    ])) : _("", !0);
  }
}), Jl = /* @__PURE__ */ O(Ql, [["__scopeId", "data-v-fc160651"]]), Wl = { class: "og-message__wrapper" }, Zl = { class: "og-message__icon" }, eo = { key: 1 }, to = { key: 2 }, lo = { key: 3 }, oo = { key: 4 }, ao = { class: "og-message__content" }, so = /* @__PURE__ */ w({
  name: "OgMessage",
  __name: "OgMessage",
  props: {
    severity: { default: "info" },
    closable: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(!0), u = (c) => {
      a.value = !1, n("close", c);
    }, r = k(() => [
      "og-message",
      `og-message--${e.severity}`
    ]);
    return (c, i) => a.value ? (o(), s("div", {
      key: 0,
      class: $(r.value),
      role: "alert"
    }, [
      b("div", Wl, [
        b("span", Zl, [
          m(c.$slots, "icon", {}, () => [
            t.icon ? (o(), s("span", {
              key: 0,
              class: $(t.icon)
            }, null, 2)) : t.severity === "success" ? (o(), s("span", eo, "✓")) : t.severity === "warning" ? (o(), s("span", to, "⚠")) : t.severity === "danger" ? (o(), s("span", lo, "✕")) : (o(), s("span", oo, "ℹ"))
          ], !0)
        ]),
        b("div", ao, [
          m(c.$slots, "default", {}, void 0, !0)
        ]),
        t.closable ? (o(), s("button", {
          key: 0,
          type: "button",
          class: "og-message__close",
          "aria-label": "Close",
          onClick: u
        }, [
          m(c.$slots, "closeicon", {}, () => [
            i[0] || (i[0] = x("✕", -1))
          ], !0)
        ])) : _("", !0)
      ])
    ], 2)) : _("", !0);
  }
}), no = /* @__PURE__ */ O(so, [["__scopeId", "data-v-40394155"]]), io = {
  key: 0,
  class: "og-drawer__header"
}, uo = { class: "og-drawer__title" }, ro = { class: "og-drawer__content" }, co = {
  key: 1,
  class: "og-drawer__footer"
}, go = /* @__PURE__ */ w({
  name: "OgDrawer",
  __name: "OgDrawer",
  props: {
    visible: { type: Boolean, default: !1 },
    position: { default: "left" },
    header: {},
    modal: { type: Boolean, default: !0 },
    closable: { type: Boolean, default: !0 },
    dismissableMask: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    fullScreen: { type: Boolean, default: !1 }
  },
  emits: ["update:visible", "show", "hide"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = () => {
      n("update:visible", !1), n("hide");
    }, u = () => {
      e.dismissableMask && a();
    }, r = () => {
      e.closeOnEscape && e.closable && a();
    };
    G(
      () => e.visible,
      (i) => {
        i ? (n("show"), e.modal && (document.body.style.overflow = "hidden")) : document.body.style.overflow = "";
      }
    ), U(() => {
      document.body.style.overflow = "";
    });
    const c = k(() => [
      "og-drawer",
      `og-drawer--${e.position}`,
      { "og-drawer--fullscreen": e.fullScreen }
    ]);
    return (i, d) => (o(), F(J, { to: "body" }, [
      t.visible ? (o(), s("div", {
        key: 0,
        class: $(["og-drawer-mask", { "og-drawer-mask--modal": t.modal }]),
        onClick: u
      }, [
        b("div", {
          class: $(c.value),
          role: "complementary",
          "aria-modal": "true",
          tabindex: "-1",
          onClick: d[0] || (d[0] = M(() => {
          }, ["stop"])),
          onKeydown: N(r, ["esc"])
        }, [
          t.header || i.$slots.header || t.closable ? (o(), s("div", io, [
            m(i.$slots, "header", {}, () => [
              b("span", uo, V(t.header), 1)
            ], !0),
            t.closable ? (o(), s("button", {
              key: 0,
              type: "button",
              class: "og-drawer__close",
              "aria-label": "Close",
              onClick: a
            }, [
              m(i.$slots, "closeicon", {}, () => [
                d[1] || (d[1] = x("✕", -1))
              ], !0)
            ])) : _("", !0)
          ])) : _("", !0),
          b("div", ro, [
            m(i.$slots, "default", {}, void 0, !0)
          ]),
          i.$slots.footer ? (o(), s("div", co, [
            m(i.$slots, "footer", {}, void 0, !0)
          ])) : _("", !0)
        ], 34)
      ], 2)) : _("", !0)
    ]));
  }
}), vo = /* @__PURE__ */ O(go, [["__scopeId", "data-v-a172d6a1"]]), bo = { class: "og-slider__track" }, fo = ["onKeydown"], po = /* @__PURE__ */ w({
  name: "OgSlider",
  __name: "OgSlider",
  props: {
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    orientation: { default: "horizontal" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(null), u = k(() => {
      const v = e.max - e.min;
      return v <= 0 ? 0 : (Math.min(e.max, Math.max(e.min, e.modelValue)) - e.min) / v * 100;
    }), r = k(() => e.orientation === "vertical" ? { height: `${u.value}%`, bottom: "0" } : { width: `${u.value}%`, left: "0" }), c = k(() => e.orientation === "vertical" ? { bottom: `${u.value}%`, left: "50%", transform: "translate(-50%, 50%)" } : { left: `${u.value}%`, top: "50%", transform: "translate(-50%, -50%)" }), i = (v) => {
      if (e.disabled) return;
      let I = Math.min(e.max, Math.max(e.min, v));
      n("update:modelValue", I), n("change", I);
    }, d = () => i(e.modelValue + e.step), g = () => i(e.modelValue - e.step), y = (v, I) => {
      if (!a.value || e.disabled) return;
      const T = a.value.getBoundingClientRect();
      let P = 0;
      e.orientation === "vertical" ? P = (T.bottom - I) / T.height : P = (v - T.left) / T.width, P = Math.max(0, Math.min(1, P));
      const L = e.min + P * (e.max - e.min), D = Math.round(L / e.step) * e.step;
      i(D);
    }, f = (v) => {
      const I = "touches" in v ? v.touches[0].clientX : v.clientX, T = "touches" in v ? v.touches[0].clientY : v.clientY;
      y(I, T);
    }, p = () => {
      window.removeEventListener("mousemove", f), window.removeEventListener("mouseup", p), window.removeEventListener("touchmove", f), window.removeEventListener("touchend", p);
    }, h = (v) => {
      if (e.disabled) return;
      const I = "touches" in v ? v.touches[0].clientX : v.clientX, T = "touches" in v ? v.touches[0].clientY : v.clientY;
      y(I, T), window.addEventListener("mousemove", f), window.addEventListener("mouseup", p), window.addEventListener("touchmove", f), window.addEventListener("touchend", p);
    };
    U(() => {
      p();
    });
    const B = k(() => [
      "og-slider",
      `og-slider--${e.orientation}`,
      { "og-slider--disabled": e.disabled }
    ]);
    return (v, I) => (o(), s("div", {
      ref_key: "sliderRef",
      ref: a,
      class: $(B.value),
      onMousedown: h,
      onTouchstartPassive: h
    }, [
      b("div", bo, [
        b("div", {
          class: "og-slider__range",
          style: j(r.value)
        }, null, 4),
        b("div", {
          class: "og-slider__handle",
          tabindex: "0",
          style: j(c.value),
          onKeydown: [
            N(M(g, ["prevent"]), ["left"]),
            N(M(g, ["prevent"]), ["down"]),
            N(M(d, ["prevent"]), ["right"]),
            N(M(d, ["prevent"]), ["up"])
          ]
        }, null, 44, fo)
      ])
    ], 34));
  }
}), mo = /* @__PURE__ */ O(po, [["__scopeId", "data-v-6614aa05"]]), _o = ["disabled"], ho = ["aria-label", "disabled", "onClick"], yo = /* @__PURE__ */ w({
  name: "OgRating",
  __name: "OgRating",
  props: {
    modelValue: { default: 0 },
    stars: { default: 5 },
    cancel: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = (r) => {
      e.disabled || e.readonly || (n("update:modelValue", r), n("change", r));
    }, u = () => {
      e.disabled || e.readonly || (n("update:modelValue", null), n("change", null));
    };
    return (r, c) => (o(), s("div", {
      class: $(["og-rating", { "og-rating--disabled": t.disabled, "og-rating--readonly": t.readonly }])
    }, [
      t.cancel ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "og-rating__cancel",
        "aria-label": "Cancel rating",
        disabled: t.disabled || t.readonly,
        onClick: u
      }, [
        m(r.$slots, "cancelicon", {}, () => [
          c[0] || (c[0] = x("⊘", -1))
        ], !0)
      ], 8, _o)) : _("", !0),
      (o(!0), s(R, null, E(t.stars, (i) => (o(), s("button", {
        key: i,
        type: "button",
        class: $(["og-rating__star", { "og-rating__star--active": i <= (t.modelValue ?? 0) }]),
        "aria-label": `Rate ${i} stars`,
        disabled: t.disabled || t.readonly,
        onClick: (d) => a(i)
      }, [
        m(r.$slots, "item", {
          value: i,
          active: i <= (t.modelValue ?? 0)
        }, () => [
          c[1] || (c[1] = x(" ★ ", -1))
        ], !0)
      ], 10, ho))), 128))
    ], 2));
  }
}), $o = /* @__PURE__ */ O(yo, [["__scopeId", "data-v-74f409df"]]), ko = ["value", "disabled", "onInput", "onKeydown"], wo = /* @__PURE__ */ w({
  name: "OgInputOtp",
  __name: "OgInputOtp",
  props: {
    modelValue: { default: "" },
    length: { default: 4 },
    integerOnly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C([]), u = k(() => (e.modelValue || "").split("")), r = (g) => {
      const y = g.join("").substring(0, e.length);
      n("update:modelValue", y), n("change", y);
    }, c = (g, y) => {
      let p = g.target.value;
      e.integerOnly && (p = p.replace(/\D/g, ""));
      const h = [...u.value];
      h[y] = p, r(h), p && y < e.length - 1 && a.value[y + 1] && a.value[y + 1].focus();
    }, i = (g, y) => {
      g.key === "Backspace" && !u.value[y] && y > 0 && a.value[y - 1] && a.value[y - 1].focus();
    }, d = (g) => {
      var p, h;
      if (g.preventDefault(), e.disabled) return;
      let f = (((p = g.clipboardData) == null ? void 0 : p.getData("text")) || "").trim();
      if (e.integerOnly && (f = f.replace(/\D/g, "")), f) {
        const B = f.split("").slice(0, e.length);
        r(B);
        const v = Math.min(B.length, e.length - 1);
        (h = a.value[v]) == null || h.focus();
      }
    };
    return (g, y) => (o(), s("div", {
      class: $(["og-inputotp", { "og-inputotp--disabled": t.disabled }])
    }, [
      (o(!0), s(R, null, E(t.length, (f) => (o(), s("input", {
        key: f,
        ref_for: !0,
        ref_key: "inputRefs",
        ref: a,
        type: "text",
        maxlength: "1",
        value: u.value[f - 1] || "",
        disabled: t.disabled,
        class: "og-inputotp__input",
        onInput: (p) => c(p, f - 1),
        onKeydown: (p) => i(p, f - 1),
        onPaste: d
      }, null, 40, ko))), 128))
    ], 2));
  }
}), Oo = /* @__PURE__ */ O(wo, [["__scopeId", "data-v-1a3402f6"]]), Vo = {
  class: "og-menu__list",
  role: "menu"
}, Co = {
  key: 0,
  class: "og-menu__separator",
  role: "separator"
}, Bo = ["href", "onClick"], Io = { class: "og-menu__label" }, To = /* @__PURE__ */ w({
  name: "OgMenu",
  __name: "OgMenu",
  props: {
    model: { default: () => [] },
    popup: { type: Boolean, default: !1 }
  },
  setup(t, { expose: l }) {
    const e = t, n = C(!1), a = C(null), u = () => {
      n.value = !n.value;
    }, r = (c, i) => {
      i.disabled || (i.command && i.command({ originalEvent: c, item: i }), e.popup && (n.value = !1));
    };
    return l({
      toggle: u
    }), (c, i) => !t.popup || n.value ? (o(), s("div", {
      key: 0,
      ref_key: "menuRef",
      ref: a,
      class: $(["og-menu", { "og-menu--popup": t.popup }])
    }, [
      b("ul", Vo, [
        (o(!0), s(R, null, E(t.model, (d, g) => (o(), s(R, { key: g }, [
          d.separator ? (o(), s("li", Co)) : (o(), s("li", {
            key: 1,
            class: $(["og-menu__item", { "og-menu__item--disabled": d.disabled }]),
            role: "menuitem"
          }, [
            b("a", {
              href: d.url || "#",
              class: "og-menu__link",
              onClick: M((y) => r(y, d), ["prevent"])
            }, [
              d.icon ? (o(), s("span", {
                key: 0,
                class: $(["og-menu__icon", d.icon])
              }, null, 2)) : _("", !0),
              b("span", Io, V(d.label), 1)
            ], 8, Bo)
          ], 2))
        ], 64))), 128))
      ])
    ], 2)) : _("", !0);
  }
}), Lo = /* @__PURE__ */ O(To, [["__scopeId", "data-v-9f004ca7"]]), So = {
  class: "og-breadcrumb",
  "aria-label": "Breadcrumb"
}, xo = { class: "og-breadcrumb__list" }, zo = {
  key: 0,
  class: "og-breadcrumb__item"
}, Ro = ["href"], Po = { key: 1 }, Do = {
  key: 1,
  class: "og-breadcrumb__separator"
}, Eo = { class: "og-breadcrumb__item" }, Mo = ["href", "onClick"], Ao = {
  key: 0,
  class: "og-breadcrumb__separator"
}, Ko = /* @__PURE__ */ w({
  name: "OgBreadcrumb",
  __name: "OgBreadcrumb",
  props: {
    model: { default: () => [] },
    home: {}
  },
  setup(t) {
    const l = (e, n) => {
      n.disabled || n.command && n.command({ originalEvent: e, item: n });
    };
    return (e, n) => (o(), s("nav", So, [
      b("ol", xo, [
        t.home ? (o(), s("li", zo, [
          b("a", {
            href: t.home.url || "#",
            class: "og-breadcrumb__link",
            onClick: n[0] || (n[0] = M((a) => l(a, t.home), ["prevent"]))
          }, [
            t.home.icon ? (o(), s("span", {
              key: 0,
              class: $(["og-breadcrumb__icon", t.home.icon])
            }, null, 2)) : _("", !0),
            t.home.label ? (o(), s("span", Po, V(t.home.label), 1)) : _("", !0)
          ], 8, Ro)
        ])) : _("", !0),
        t.home && t.model.length > 0 ? (o(), s("li", Do, [
          m(e.$slots, "separator", {}, () => [
            n[1] || (n[1] = x("/", -1))
          ], !0)
        ])) : _("", !0),
        (o(!0), s(R, null, E(t.model, (a, u) => (o(), s(R, { key: u }, [
          b("li", Eo, [
            b("a", {
              href: a.url || "#",
              class: "og-breadcrumb__link",
              onClick: M((r) => l(r, a), ["prevent"])
            }, [
              a.icon ? (o(), s("span", {
                key: 0,
                class: $(["og-breadcrumb__icon", a.icon])
              }, null, 2)) : _("", !0),
              b("span", null, V(a.label), 1)
            ], 8, Mo)
          ]),
          u < t.model.length - 1 ? (o(), s("li", Ao, [
            m(e.$slots, "separator", {}, () => [
              n[2] || (n[2] = x("/", -1))
            ], !0)
          ])) : _("", !0)
        ], 64))), 128))
      ])
    ]));
  }
}), No = /* @__PURE__ */ O(Ko, [["__scopeId", "data-v-86bc2af1"]]), jo = ["placeholder", "disabled", "onKeydown"], Fo = {
  class: "og-autocomplete__list",
  role: "listbox"
}, Go = ["onClick"], Yo = /* @__PURE__ */ w({
  name: "OgAutoComplete",
  __name: "OgAutoComplete",
  props: {
    modelValue: { default: "" },
    suggestions: { default: () => [] },
    optionLabel: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "complete", "change", "select"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(typeof e.modelValue == "string" ? e.modelValue : ""), u = C(!1), r = C(-1), c = C(null), i = C(null), d = C({}), g = (L) => {
      if (typeof L == "object" && L !== null) {
        if (e.optionLabel) return L[e.optionLabel];
        if ("label" in L) return L.label;
      }
      return String(L);
    }, y = () => {
      if (!c.value) return;
      const L = c.value.getBoundingClientRect();
      d.value = {
        position: "absolute",
        top: `${L.bottom + window.scrollY + 4}px`,
        left: `${L.left + window.scrollX}px`,
        width: `${L.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, f = (L) => {
      u.value = !0, r.value = -1, n("complete", { query: a.value }), n("update:modelValue", a.value), n("change", L), W(y);
    }, p = (L) => {
      a.value = g(L), n("update:modelValue", L), n("select", L), u.value = !1;
    }, h = () => {
      u.value && r.value < e.suggestions.length - 1 && r.value++;
    }, B = () => {
      u.value && r.value > 0 && r.value--;
    }, v = () => {
      u.value && r.value >= 0 && r.value < e.suggestions.length && p(e.suggestions[r.value]);
    }, I = () => {
      a.value.length > 0 && e.suggestions.length > 0 && (u.value = !0, W(y));
    }, T = () => {
      setTimeout(() => {
        u.value = !1;
      }, 200);
    }, P = k(() => [
      "og-autocomplete",
      e.size ? `og-autocomplete--${e.size}` : "",
      { "og-autocomplete--disabled": e.disabled }
    ]);
    return (L, D) => (o(), s("div", {
      ref_key: "containerRef",
      ref: c,
      class: $(P.value)
    }, [
      Z(b("input", {
        "onUpdate:modelValue": D[0] || (D[0] = (K) => a.value = K),
        type: "text",
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-autocomplete__input",
        onInput: f,
        onFocus: I,
        onBlur: T,
        onKeydown: [
          N(M(h, ["prevent"]), ["down"]),
          N(M(B, ["prevent"]), ["up"]),
          N(M(v, ["prevent"]), ["enter"])
        ]
      }, null, 40, jo), [
        [ne, a.value]
      ]),
      (o(), F(J, { to: "body" }, [
        u.value && t.suggestions.length > 0 ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: i,
          class: "og-autocomplete__overlay",
          style: j(d.value)
        }, [
          b("ul", Fo, [
            (o(!0), s(R, null, E(t.suggestions, (K, Y) => (o(), s("li", {
              key: Y,
              class: $(["og-autocomplete__item", { "og-autocomplete__item--focused": r.value === Y }]),
              role: "option",
              onClick: (Q) => p(K)
            }, [
              m(L.$slots, "option", {
                item: K,
                index: Y
              }, () => [
                x(V(g(K)), 1)
              ], !0)
            ], 10, Go))), 128))
          ])
        ], 4)) : _("", !0)
      ]))
    ], 2));
  }
}), Xo = /* @__PURE__ */ O(Yo, [["__scopeId", "data-v-8b9bbef0"]]), Ho = ["type", "value", "placeholder", "disabled"], qo = /* @__PURE__ */ w({
  name: "OgPassword",
  __name: "OgPassword",
  props: {
    modelValue: { default: "" },
    toggleMask: { type: Boolean, default: !0 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = l, n = C(!1), a = (u) => {
      const r = u.target;
      e("update:modelValue", r.value);
    };
    return (u, r) => (o(), s("div", {
      class: $(["og-password", { "og-password--invalid": t.invalid, "og-password--disabled": t.disabled }])
    }, [
      b("input", {
        type: n.value ? "text" : "password",
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-password__input",
        onInput: a,
        onChange: r[0] || (r[0] = (c) => u.$emit("change", c))
      }, null, 40, Ho),
      t.toggleMask ? (o(), s("button", {
        key: 0,
        type: "button",
        class: "og-password__toggle",
        "aria-label": "Toggle Password Visibility",
        onClick: r[1] || (r[1] = (c) => n.value = !n.value)
      }, [
        n.value ? m(u.$slots, "hideicon", {}, () => [
          r[2] || (r[2] = x("👁", -1))
        ], !0, 0) : m(u.$slots, "showicon", {}, () => [
          r[3] || (r[3] = x("👁‍🗨", -1))
        ], !0, 1)
      ])) : _("", !0)
    ], 2));
  }
}), Uo = /* @__PURE__ */ O(qo, [["__scopeId", "data-v-49678b27"]]), Qo = ["onKeydown"], Jo = { class: "og-multiselect__label" }, Wo = { key: 0 }, Zo = {
  key: 1,
  class: "og-multiselect__placeholder"
}, ea = { class: "og-multiselect__list" }, ta = ["onClick"], la = ["checked"], oa = /* @__PURE__ */ w({
  name: "OgMultiSelect",
  __name: "OgMultiSelect",
  props: {
    modelValue: { default: () => [] },
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    placeholder: { default: "Select items" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(!1), u = C(null), r = C(null), c = C({}), i = (v) => {
      if (typeof v == "object" && v !== null) {
        if (e.optionLabel) return v[e.optionLabel];
        if ("label" in v) return v.label;
      }
      return String(v);
    }, d = (v) => {
      if (typeof v == "object" && v !== null) {
        if (e.optionValue) return v[e.optionValue];
        if ("value" in v) return v.value;
      }
      return v;
    }, g = (v) => {
      const I = d(v);
      return e.modelValue.includes(I);
    }, y = k(() => e.options.filter((v) => g(v)).map((v) => i(v))), f = (v) => {
      const I = d(v);
      let T = [...e.modelValue];
      T.includes(I) ? T = T.filter((P) => P !== I) : T.push(I), n("update:modelValue", T), n("change", T);
    }, p = () => {
      if (!u.value) return;
      const v = u.value.getBoundingClientRect();
      c.value = {
        position: "absolute",
        top: `${v.bottom + window.scrollY + 4}px`,
        left: `${v.left + window.scrollX}px`,
        width: `${v.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, h = () => {
      e.disabled || (a.value = !a.value, a.value && W(p));
    }, B = (v) => {
      u.value && !u.value.contains(v.target) && r.value && !r.value.contains(v.target) && (a.value = !1);
    };
    return G(a, (v) => {
      v ? (window.addEventListener("resize", p), window.addEventListener("scroll", p, !0)) : (window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0));
    }), ee(() => {
      document.addEventListener("click", B);
    }), U(() => {
      document.removeEventListener("click", B), window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0);
    }), (v, I) => (o(), s("div", {
      ref_key: "containerRef",
      ref: u,
      class: $(["og-multiselect", { "og-multiselect--disabled": t.disabled }])
    }, [
      b("div", {
        class: "og-multiselect__trigger",
        tabindex: "0",
        onClick: h,
        onKeydown: N(M(h, ["prevent"]), ["enter"])
      }, [
        b("div", Jo, [
          y.value.length > 0 ? (o(), s("span", Wo, V(y.value.join(", ")), 1)) : (o(), s("span", Zo, V(t.placeholder), 1))
        ]),
        I[0] || (I[0] = b("span", { class: "og-multiselect__icon" }, "▼", -1))
      ], 40, Qo),
      (o(), F(J, { to: "body" }, [
        a.value ? (o(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: r,
          class: "og-multiselect__overlay",
          style: j(c.value)
        }, [
          b("ul", ea, [
            (o(!0), s(R, null, E(t.options, (T, P) => (o(), s("li", {
              key: P,
              class: $(["og-multiselect__option", { "og-multiselect__option--selected": g(T) }]),
              onClick: (L) => f(T)
            }, [
              b("input", {
                type: "checkbox",
                checked: g(T),
                class: "og-multiselect__checkbox"
              }, null, 8, la),
              b("span", null, V(i(T)), 1)
            ], 10, ta))), 128))
          ])
        ], 4)) : _("", !0)
      ]))
    ], 2));
  }
}), aa = /* @__PURE__ */ O(oa, [["__scopeId", "data-v-d2efa64b"]]), sa = ["value", "placeholder", "disabled"], na = /* @__PURE__ */ w({
  name: "OgDatePicker",
  __name: "OgDatePicker",
  props: {
    modelValue: { default: null },
    placeholder: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = k(() => {
      if (!e.modelValue) return "";
      if (e.modelValue instanceof Date) {
        const r = e.modelValue.getFullYear(), c = String(e.modelValue.getMonth() + 1).padStart(2, "0"), i = String(e.modelValue.getDate()).padStart(2, "0");
        return `${r}-${c}-${i}`;
      }
      return String(e.modelValue);
    }), u = (r) => {
      const c = r.target;
      if (!c.value)
        n("update:modelValue", null);
      else {
        const [i, d, g] = c.value.split("-").map(Number), y = new Date(i, d - 1, g);
        n("update:modelValue", y);
      }
      n("change", r);
    };
    return (r, c) => (o(), s("div", {
      class: $(["og-datepicker", { "og-datepicker--disabled": t.disabled }])
    }, [
      b("input", {
        type: "date",
        value: a.value,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-datepicker__input",
        onInput: u
      }, null, 40, sa)
    ], 2));
  }
}), ia = /* @__PURE__ */ O(na, [["__scopeId", "data-v-14080042"]]), da = ["value", "disabled"], ua = /* @__PURE__ */ w({
  name: "OgColorPicker",
  __name: "OgColorPicker",
  props: {
    modelValue: { default: "#0f172a" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = l, n = (a) => {
      const u = a.target;
      e("update:modelValue", u.value), e("change", a);
    };
    return (a, u) => (o(), s("div", {
      class: $(["og-colorpicker", { "og-colorpicker--disabled": t.disabled }])
    }, [
      b("input", {
        type: "color",
        value: t.modelValue,
        disabled: t.disabled,
        class: "og-colorpicker__input",
        onInput: n
      }, null, 40, da)
    ], 2));
  }
}), ra = /* @__PURE__ */ O(ua, [["__scopeId", "data-v-8b5a7233"]]), ca = {
  class: "og-listbox__list",
  role: "listbox"
}, ga = ["aria-selected", "onClick"], va = /* @__PURE__ */ w({
  name: "OgListbox",
  __name: "OgListbox",
  props: {
    modelValue: {},
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionLabel) return i[e.optionLabel];
        if ("label" in i) return i.label;
      }
      return String(i);
    }, u = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionValue) return i[e.optionValue];
        if ("value" in i) return i.value;
      }
      return i;
    }, r = (i) => u(i) === e.modelValue, c = (i) => {
      if (e.disabled) return;
      const d = u(i);
      n("update:modelValue", d), n("change", d);
    };
    return (i, d) => (o(), s("div", {
      class: $(["og-listbox", { "og-listbox--disabled": t.disabled }])
    }, [
      b("ul", ca, [
        (o(!0), s(R, null, E(t.options, (g, y) => (o(), s("li", {
          key: y,
          class: $(["og-listbox__option", { "og-listbox__option--selected": r(g) }]),
          role: "option",
          "aria-selected": r(g),
          onClick: (f) => c(g)
        }, [
          m(i.$slots, "option", {
            option: g,
            index: y
          }, () => [
            x(V(a(g)), 1)
          ], !0)
        ], 10, ga))), 128))
      ])
    ], 2));
  }
}), ba = /* @__PURE__ */ O(va, [["__scopeId", "data-v-c053ef77"]]), fa = ["disabled", "onClick"], pa = /* @__PURE__ */ w({
  name: "OgSelectButton",
  __name: "OgSelectButton",
  props: {
    modelValue: {},
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionLabel) return i[e.optionLabel];
        if ("label" in i) return i.label;
      }
      return String(i);
    }, u = (i) => {
      if (typeof i == "object" && i !== null) {
        if (e.optionValue) return i[e.optionValue];
        if ("value" in i) return i.value;
      }
      return i;
    }, r = (i) => {
      const d = u(i);
      return e.multiple ? Array.isArray(e.modelValue) && e.modelValue.includes(d) : e.modelValue === d;
    }, c = (i) => {
      if (e.disabled) return;
      const d = u(i);
      if (e.multiple) {
        let g = Array.isArray(e.modelValue) ? [...e.modelValue] : [];
        g.includes(d) ? g = g.filter((y) => y !== d) : g.push(d), n("update:modelValue", g), n("change", g);
      } else
        n("update:modelValue", d), n("change", d);
    };
    return (i, d) => (o(), s("div", {
      class: $(["og-selectbutton", { "og-selectbutton--disabled": t.disabled }])
    }, [
      (o(!0), s(R, null, E(t.options, (g, y) => (o(), s("button", {
        key: y,
        type: "button",
        class: $(["og-selectbutton__btn", { "og-selectbutton__btn--active": r(g) }]),
        disabled: t.disabled,
        onClick: (f) => c(g)
      }, [
        m(i.$slots, "option", {
          option: g,
          index: y
        }, () => [
          x(V(a(g)), 1)
        ], !0)
      ], 10, fa))), 128))
    ], 2));
  }
}), ma = /* @__PURE__ */ O(pa, [["__scopeId", "data-v-42050f87"]]), _a = ["disabled"], ha = { class: "og-togglebutton__label" }, ya = /* @__PURE__ */ w({
  name: "OgToggleButton",
  __name: "OgToggleButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    onLabel: { default: "Yes" },
    offLabel: { default: "No" },
    onIcon: {},
    offIcon: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = k(() => e.modelValue ? e.onLabel : e.offLabel), u = k(() => e.modelValue ? e.onIcon : e.offIcon), r = (c) => {
      e.disabled || (n("update:modelValue", !e.modelValue), n("change", c));
    };
    return (c, i) => (o(), s("button", {
      type: "button",
      class: $(["og-togglebutton", { "og-togglebutton--checked": t.modelValue, "og-togglebutton--disabled": t.disabled }]),
      disabled: t.disabled,
      onClick: r
    }, [
      u.value ? (o(), s("span", {
        key: 0,
        class: $(["og-togglebutton__icon", u.value])
      }, null, 2)) : _("", !0),
      b("span", ha, V(a.value), 1)
    ], 10, _a));
  }
}), $a = /* @__PURE__ */ O(ya, [["__scopeId", "data-v-bf6a463d"]]), ka = { class: "og-floatlabel" }, wa = /* @__PURE__ */ w({
  name: "OgFloatLabel",
  __name: "OgFloatLabel",
  setup(t) {
    return (l, e) => (o(), s("div", ka, [
      m(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Oa = /* @__PURE__ */ O(wa, [["__scopeId", "data-v-2c438c2c"]]), Va = { class: "og-inputgroup" }, Ca = /* @__PURE__ */ w({
  name: "OgInputGroup",
  __name: "OgInputGroup",
  setup(t) {
    return (l, e) => (o(), s("div", Va, [
      m(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ba = /* @__PURE__ */ O(Ca, [["__scopeId", "data-v-8c486269"]]), Ia = { class: "og-inputgroupaddon" }, Ta = /* @__PURE__ */ w({
  name: "OgInputGroupAddon",
  __name: "OgInputGroupAddon",
  setup(t) {
    return (l, e) => (o(), s("div", Ia, [
      m(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), La = /* @__PURE__ */ O(Ta, [["__scopeId", "data-v-bcac245e"]]), Sa = { class: "og-panel" }, xa = { class: "og-panel__title" }, za = {
  key: 0,
  type: "button",
  class: "og-panel__toggle",
  "aria-label": "Toggle Panel"
}, Ra = { class: "og-panel__content" }, Pa = {
  key: 1,
  class: "og-panel__footer"
}, Da = /* @__PURE__ */ w({
  name: "OgPanel",
  __name: "OgPanel",
  props: {
    header: {},
    toggleable: { type: Boolean, default: !1 },
    collapsed: { type: Boolean, default: !1 }
  },
  emits: ["update:collapsed", "toggle"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(e.collapsed);
    G(
      () => e.collapsed,
      (r) => {
        a.value = r;
      }
    );
    const u = (r) => {
      e.toggleable && (a.value = !a.value, n("update:collapsed", a.value), n("toggle", { originalEvent: new CustomEvent("toggle"), collapsed: a.value }));
    };
    return (r, c) => (o(), s("div", Sa, [
      t.header || r.$slots.header || t.toggleable ? (o(), s("div", {
        key: 0,
        class: "og-panel__header",
        onClick: c[0] || (c[0] = (i) => t.toggleable && u())
      }, [
        m(r.$slots, "header", {}, () => [
          b("span", xa, V(t.header), 1)
        ], !0),
        t.toggleable ? (o(), s("button", za, V(a.value ? "+" : "−"), 1)) : _("", !0)
      ])) : _("", !0),
      Z(b("div", Ra, [
        m(r.$slots, "default", {}, void 0, !0)
      ], 512), [
        [le, !a.value]
      ]),
      r.$slots.footer ? (o(), s("div", Pa, [
        m(r.$slots, "footer", {}, void 0, !0)
      ])) : _("", !0)
    ]));
  }
}), Ea = /* @__PURE__ */ O(Da, [["__scopeId", "data-v-f1e8c9a5"]]), Ma = {
  class: "og-toolbar",
  role: "toolbar"
}, Aa = {
  key: 0,
  class: "og-toolbar__start"
}, Ka = {
  key: 1,
  class: "og-toolbar__center"
}, Na = {
  key: 2,
  class: "og-toolbar__end"
}, ja = /* @__PURE__ */ w({
  name: "OgToolbar",
  __name: "OgToolbar",
  setup(t) {
    return (l, e) => (o(), s("div", Ma, [
      l.$slots.start ? (o(), s("div", Aa, [
        m(l.$slots, "start", {}, void 0, !0)
      ])) : _("", !0),
      l.$slots.center ? (o(), s("div", Ka, [
        m(l.$slots, "center", {}, void 0, !0)
      ])) : _("", !0),
      l.$slots.end ? (o(), s("div", Na, [
        m(l.$slots, "end", {}, void 0, !0)
      ])) : _("", !0)
    ]));
  }
}), Fa = /* @__PURE__ */ O(ja, [["__scopeId", "data-v-dbb68d11"]]), Ga = /* @__PURE__ */ w({
  name: "OgSplitter",
  __name: "OgSplitter",
  props: {
    layout: { default: "horizontal" }
  },
  setup(t) {
    return (l, e) => (o(), s("div", {
      class: $(["og-splitter", `og-splitter--${t.layout}`])
    }, [
      m(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ya = /* @__PURE__ */ O(Ga, [["__scopeId", "data-v-de819503"]]), Xa = { class: "og-splitter-panel" }, Ha = /* @__PURE__ */ w({
  name: "OgSplitterPanel",
  __name: "OgSplitterPanel",
  setup(t) {
    return (l, e) => (o(), s("div", Xa, [
      m(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), qa = /* @__PURE__ */ O(Ha, [["__scopeId", "data-v-802e3f15"]]), Ua = {
  class: "og-tree__node",
  role: "treeitem"
}, Qa = {
  key: 0,
  class: "og-tree__toggler"
}, Ja = {
  key: 1,
  class: "og-tree__toggler-placeholder"
}, Wa = { class: "og-tree__label" }, Za = {
  key: 0,
  class: "og-tree__sublist"
}, es = /* @__PURE__ */ w({
  name: "OgTreeNode",
  __name: "OgTreeNode",
  props: {
    node: {},
    expandedKeys: {}
  },
  emits: ["toggle"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = k(() => e.node.key || e.node.label || ""), u = k(() => !!e.expandedKeys[a.value]), r = () => {
      e.node.children && e.node.children.length > 0 && n("toggle", a.value);
    };
    return (c, i) => {
      const d = pe("OgTreeNode", !0);
      return o(), s("li", Ua, [
        b("div", {
          class: "og-tree__content",
          onClick: r
        }, [
          t.node.children && t.node.children.length > 0 ? (o(), s("span", Qa, V(u.value ? "▼" : "►"), 1)) : (o(), s("span", Ja)),
          t.node.icon ? (o(), s("span", {
            key: 2,
            class: $(["og-tree__icon", t.node.icon])
          }, null, 2)) : _("", !0),
          b("span", Wa, V(t.node.label), 1)
        ]),
        t.node.children && t.node.children.length > 0 && u.value ? (o(), s("ul", Za, [
          (o(!0), s(R, null, E(t.node.children, (g) => (o(), F(d, {
            key: g.key || g.label,
            node: g,
            "expanded-keys": t.expandedKeys,
            onToggle: i[0] || (i[0] = (y) => n("toggle", y))
          }, null, 8, ["node", "expanded-keys"]))), 128))
        ])) : _("", !0)
      ]);
    };
  }
}), ts = /* @__PURE__ */ O(es, [["__scopeId", "data-v-d6b5bfeb"]]), ls = { class: "og-tree" }, os = {
  class: "og-tree__list",
  role: "tree"
}, as = /* @__PURE__ */ w({
  name: "OgTree",
  __name: "OgTree",
  props: {
    value: { default: () => [] }
  },
  setup(t) {
    const l = C({}), e = (n) => {
      l.value[n] = !l.value[n];
    };
    return (n, a) => (o(), s("div", ls, [
      b("ul", os, [
        (o(!0), s(R, null, E(t.value, (u) => (o(), F(ts, {
          key: u.key || u.label,
          node: u,
          "expanded-keys": l.value,
          onToggle: e
        }, null, 8, ["node", "expanded-keys"]))), 128))
      ])
    ]));
  }
}), ss = /* @__PURE__ */ O(as, [["__scopeId", "data-v-44dcce2c"]]), ns = { class: "og-stepper" }, is = { class: "og-stepper__header" }, ds = ["onClick"], us = { class: "og-stepper__number" }, rs = { class: "og-stepper__title" }, cs = { class: "og-stepper__content" }, gs = /* @__PURE__ */ w({
  name: "OgStepper",
  __name: "OgStepper",
  props: {
    value: { default: 1 },
    steps: { default: () => ["Step 1", "Step 2", "Step 3"] }
  },
  emits: ["update:value"],
  setup(t, { emit: l }) {
    const e = t, n = l, a = C(e.value);
    G(
      () => e.value,
      (r) => {
        a.value = r;
      }
    );
    const u = (r) => {
      a.value = r, n("update:value", r);
    };
    return te("ogStepper", { activeStep: a, setStep: u }), (r, c) => (o(), s("div", ns, [
      b("div", is, [
        (o(!0), s(R, null, E(t.steps, (i, d) => (o(), s("button", {
          key: d,
          type: "button",
          class: $(["og-stepper__step-btn", { "og-stepper__step-btn--active": a.value === d + 1 }]),
          onClick: (g) => u(d + 1)
        }, [
          b("span", us, V(d + 1), 1),
          b("span", rs, V(i), 1)
        ], 10, ds))), 128))
      ]),
      b("div", cs, [
        m(r.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), vs = /* @__PURE__ */ O(gs, [["__scopeId", "data-v-f1256a42"]]), bs = {
  mounted(t, l) {
    t.setAttribute("title", l.value || "");
  },
  updated(t, l) {
    t.setAttribute("title", l.value || "");
  }
}, fs = {
  mounted(t) {
    t.style.position = "relative", t.style.overflow = "hidden";
  }
};
function hs(t = {}) {
  const l = C(t.visible ?? !1), e = () => {
    l.value = !0;
  }, n = () => {
    l.value = !1, t.onClose && t.onClose();
  };
  return {
    isVisible: l,
    open: e,
    close: n,
    toggle: () => {
      l.value ? n() : e();
    }
  };
}
const ps = {
  OgButton: ye,
  OgInputText: we,
  OgTextarea: Ce,
  OgCheckbox: Se,
  OgRadioButton: De,
  OgToggleSwitch: Ne,
  OgInputNumber: We,
  OgSelect: bt,
  OgCard: kt,
  OgDialog: It,
  OgToast: Kt,
  OgDataTable: il,
  OgColumn: dl,
  OgAvatar: gl,
  OgBadge: bl,
  OgProgressBar: hl,
  OgSkeleton: $l,
  OgDivider: Ol,
  OgAccordion: Bl,
  OgAccordionTab: zl,
  OgTabs: Kl,
  OgTabPanel: Fl,
  OgTag: Xl,
  OgChip: Jl,
  OgMessage: no,
  OgDrawer: vo,
  OgSlider: mo,
  OgRating: $o,
  OgInputOtp: Oo,
  OgMenu: Lo,
  OgBreadcrumb: No,
  OgAutoComplete: Xo,
  OgPassword: Uo,
  OgMultiSelect: aa,
  OgDatePicker: ia,
  OgColorPicker: ra,
  OgListbox: ba,
  OgSelectButton: ma,
  OgToggleButton: $a,
  OgFloatLabel: Oa,
  OgInputGroup: Ba,
  OgInputGroupAddon: La,
  OgPanel: Ea,
  OgToolbar: Fa,
  OgSplitter: Ya,
  OgSplitterPanel: qa,
  OgTree: ss,
  OgStepper: vs
}, ys = {
  install(t) {
    Object.entries(ps).forEach(([l, e]) => {
      t.component(l, e);
    }), t.directive("og-tooltip", bs), t.directive("og-ripple", fs);
  }
};
export {
  Bl as OgAccordion,
  zl as OgAccordionTab,
  Xo as OgAutoComplete,
  gl as OgAvatar,
  bl as OgBadge,
  No as OgBreadcrumb,
  ye as OgButton,
  kt as OgCard,
  Se as OgCheckbox,
  Jl as OgChip,
  ra as OgColorPicker,
  dl as OgColumn,
  il as OgDataTable,
  ia as OgDatePicker,
  It as OgDialog,
  Ol as OgDivider,
  vo as OgDrawer,
  Oa as OgFloatLabel,
  Ba as OgInputGroup,
  La as OgInputGroupAddon,
  We as OgInputNumber,
  Oo as OgInputOtp,
  we as OgInputText,
  ba as OgListbox,
  Lo as OgMenu,
  no as OgMessage,
  aa as OgMultiSelect,
  Ea as OgPanel,
  Uo as OgPassword,
  hl as OgProgressBar,
  De as OgRadioButton,
  $o as OgRating,
  bt as OgSelect,
  ma as OgSelectButton,
  $l as OgSkeleton,
  mo as OgSlider,
  Ya as OgSplitter,
  qa as OgSplitterPanel,
  vs as OgStepper,
  Fl as OgTabPanel,
  Kl as OgTabs,
  Xl as OgTag,
  Ce as OgTextarea,
  Kt as OgToast,
  $a as OgToggleButton,
  Ne as OgToggleSwitch,
  Fa as OgToolbar,
  ss as OgTree,
  ts as OgTreeNode,
  ys as OptimusGUI,
  ys as default,
  Nt as useDataTable,
  hs as useDialog,
  Ze as useSelect,
  Tt as useToast,
  fs as vOgRipple,
  bs as vOgTooltip
};
