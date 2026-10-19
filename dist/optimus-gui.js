import { defineComponent as I, useAttrs as we, computed as y, openBlock as a, createBlock as W, resolveDynamicComponent as be, mergeProps as Oe, withCtx as me, renderSlot as m, createElementBlock as s, normalizeClass as $, createElementVNode as g, createCommentVNode as b, toDisplayString as C, ref as B, watch as U, nextTick as se, onMounted as ce, createTextVNode as P, withKeys as X, withModifiers as E, toValue as ee, onUnmounted as te, Teleport as oe, unref as F, normalizeStyle as Q, withDirectives as ne, isRef as Ce, vModelText as ve, Fragment as K, renderList as j, createVNode as _e, TransitionGroup as Ve, useSlots as Be, provide as fe, inject as he, vShow as pe, reactive as Ie, createStaticVNode as De, resolveComponent as xe } from "vue";
const Te = {
  key: 1,
  class: "og-button__icon og-button__spinner og-button__spinner-svg",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Le = {
  key: 2,
  class: "og-button__label"
}, Se = /* @__PURE__ */ I({
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
    const l = t, e = we(), n = y(() => typeof l.as == "string" && l.as.toLowerCase() === "button"), o = y(() => l.disabled || l.loading), u = y(() => l.label ? l.badge ? `${l.label} ${l.badge}` : l.label : e["aria-label"] || void 0), r = y(() => (!!l.icon || !!l.loading) && !l.label && !l.badge), c = y(() => {
      const i = l.outlined || l.variant === "outlined", d = l.text || l.variant === "text", v = l.link || l.variant === "link";
      return [
        "og-button",
        l.severity ? `og-button--${l.severity}` : "",
        l.size ? `og-button--${l.size}` : "",
        `og-button--icon-${l.iconPos}`,
        {
          "og-button--outlined": i,
          "og-button--text": d,
          "og-button--link": v,
          "og-button--raised": l.raised,
          "og-button--rounded": l.rounded,
          "og-button--fluid": l.fluid,
          "og-button--icon-only": r.value,
          "og-button--loading": l.loading,
          "og-button--disabled": o.value,
          "og-button--vertical": (l.iconPos === "top" || l.iconPos === "bottom") && !!l.label
        }
      ];
    });
    return (i, d) => t.asChild ? m(i.$slots, "default", {
      class: $(c.value),
      disabled: o.value
    }, void 0, !0, 1) : (a(), W(be(t.as), Oe({
      key: 0,
      type: n.value ? t.type : void 0,
      disabled: o.value,
      "aria-disabled": o.value,
      "aria-label": u.value,
      class: c.value
    }, i.$attrs), {
      default: me(() => [
        m(i.$slots, "default", {}, () => [
          t.loading ? m(i.$slots, "loadingicon", { class: "og-button__icon og-button__spinner" }, () => [
            t.loadingIcon ? (a(), s("span", {
              key: 0,
              class: $(["og-button__icon", "og-button__spinner", t.loadingIcon])
            }, null, 2)) : (a(), s("svg", Te, [...d[0] || (d[0] = [
              g("circle", {
                class: "og-spinner-track",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              g("path", {
                class: "og-spinner-head",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])]))
          ], !0, 0) : t.icon || i.$slots.icon ? m(i.$slots, "icon", { class: "og-button__icon" }, () => [
            t.icon ? (a(), s("span", {
              key: 0,
              class: $(["og-button__icon", t.icon, t.iconClass])
            }, null, 2)) : b("", !0)
          ], !0, 1) : b("", !0),
          t.label ? (a(), s("span", Le, C(t.label), 1)) : b("", !0),
          t.badge ? (a(), s("span", {
            key: 3,
            class: $(["og-button__badge", t.badgeSeverity ? `og-button__badge--${t.badgeSeverity}` : "", t.badgeClass])
          }, C(t.badge), 3)) : b("", !0)
        ], !0)
      ]),
      _: 3
    }, 16, ["type", "disabled", "aria-disabled", "aria-label", "class"]));
  }
}), D = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [n, o] of l)
    e[n] = o;
  return e;
}, ze = /* @__PURE__ */ D(Se, [["__scopeId", "data-v-256088d1"]]), Me = ["type", "value", "disabled", "placeholder"], Re = /* @__PURE__ */ I({
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
    const e = t, n = l, o = (c) => {
      const i = c.target;
      n("update:modelValue", i.value);
    }, u = (c) => {
      n("change", c);
    }, r = y(() => [
      "og-inputtext",
      e.size ? `og-inputtext--${e.size}` : "",
      e.variant ? `og-inputtext--${e.variant}` : "",
      {
        "og-inputtext--invalid": e.invalid,
        "og-inputtext--fluid": e.fluid,
        "og-inputtext--disabled": e.disabled
      }
    ]);
    return (c, i) => (a(), s("input", {
      type: t.type,
      value: t.modelValue,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: $(r.value),
      onInput: o,
      onChange: u,
      onFocus: i[0] || (i[0] = (d) => c.$emit("focus", d)),
      onBlur: i[1] || (i[1] = (d) => c.$emit("blur", d))
    }, null, 42, Me));
  }
}), Pe = /* @__PURE__ */ D(Re, [["__scopeId", "data-v-668f2852"]]), Ee = ["value", "rows", "cols", "disabled", "placeholder"], Ae = /* @__PURE__ */ I({
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
    const e = t, n = l, o = B(null), u = () => {
      e.autoResize && o.value && (o.value.style.height = "auto", o.value.style.height = `${o.value.scrollHeight}px`);
    }, r = (i) => {
      const d = i.target;
      n("update:modelValue", d.value), u();
    };
    U(
      () => e.modelValue,
      () => {
        se(u);
      }
    ), ce(() => {
      u();
    });
    const c = y(() => [
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
    return (i, d) => (a(), s("textarea", {
      ref_key: "textareaRef",
      ref: o,
      value: t.modelValue,
      rows: t.rows,
      cols: t.cols,
      disabled: t.disabled,
      placeholder: t.placeholder,
      class: $(c.value),
      onInput: r,
      onChange: d[0] || (d[0] = (v) => i.$emit("change", v)),
      onFocus: d[1] || (d[1] = (v) => i.$emit("focus", v)),
      onBlur: d[2] || (d[2] = (v) => i.$emit("blur", v))
    }, null, 42, Ee));
  }
}), Ne = /* @__PURE__ */ D(Ae, [["__scopeId", "data-v-5ac57b30"]]), Ke = ["checked", "disabled", "readonly", "name", "value"], Fe = { class: "og-checkbox__box" }, je = {
  key: 0,
  class: "og-checkbox__icon",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ye = /* @__PURE__ */ I({
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
    const e = t, n = l, o = y(() => e.binary ? !!e.modelValue : Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : e.modelValue === e.value), u = (i) => {
      e.disabled || e.readonly || n("click", i);
    }, r = (i) => {
      if (e.disabled || e.readonly) return;
      let d;
      if (e.binary)
        d = !o.value;
      else if (Array.isArray(e.modelValue)) {
        const v = [...e.modelValue];
        if (o.value) {
          const h = v.indexOf(e.value);
          h !== -1 && v.splice(h, 1);
        } else
          v.push(e.value);
        d = v;
      } else
        d = o.value ? null : e.value;
      n("update:modelValue", d), n("change", i);
    }, c = y(() => [
      "og-checkbox",
      e.size ? `og-checkbox--${e.size}` : "",
      {
        "og-checkbox--checked": o.value,
        "og-checkbox--disabled": e.disabled,
        "og-checkbox--invalid": e.invalid
      }
    ]);
    return (i, d) => (a(), s("div", {
      class: $(c.value),
      onClick: u
    }, [
      g("input", {
        type: "checkbox",
        checked: o.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-checkbox__input",
        onFocus: d[0] || (d[0] = (v) => i.$emit("focus", v)),
        onBlur: d[1] || (d[1] = (v) => i.$emit("blur", v)),
        onChange: r
      }, null, 40, Ke),
      g("div", Fe, [
        m(i.$slots, "icon", { checked: o.value }, () => [
          o.value ? (a(), s("svg", je, [...d[2] || (d[2] = [
            g("polyline", { points: "20 6 9 17 4 12" }, null, -1)
          ])])) : b("", !0)
        ], !0)
      ])
    ], 2));
  }
}), ye = /* @__PURE__ */ D(Ye, [["__scopeId", "data-v-898e5709"]]), Ge = ["checked", "disabled", "readonly", "name", "value"], Xe = { class: "og-radiobutton__box" }, qe = {
  key: 0,
  class: "og-radiobutton__icon"
}, He = /* @__PURE__ */ I({
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
    const e = t, n = l, o = y(() => e.modelValue === e.value), u = (c) => {
      e.disabled || e.readonly || (n("update:modelValue", e.value), n("change", c));
    }, r = y(() => [
      "og-radiobutton",
      e.size ? `og-radiobutton--${e.size}` : "",
      {
        "og-radiobutton--checked": o.value,
        "og-radiobutton--disabled": e.disabled,
        "og-radiobutton--invalid": e.invalid
      }
    ]);
    return (c, i) => (a(), s("div", {
      class: $(r.value)
    }, [
      g("input", {
        type: "radio",
        checked: o.value,
        disabled: t.disabled,
        readonly: t.readonly,
        name: t.name,
        value: t.value,
        class: "og-radiobutton__input",
        onFocus: i[0] || (i[0] = (d) => c.$emit("focus", d)),
        onBlur: i[1] || (i[1] = (d) => c.$emit("blur", d)),
        onChange: u
      }, null, 40, Ge),
      g("div", Xe, [
        o.value ? (a(), s("div", qe)) : b("", !0)
      ])
    ], 2));
  }
}), Ue = /* @__PURE__ */ D(He, [["__scopeId", "data-v-640c2086"]]), Je = ["aria-checked", "checked", "disabled", "readonly"], Qe = { class: "og-toggleswitch__slider" }, We = { class: "og-toggleswitch__handle" }, Ze = /* @__PURE__ */ I({
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
    const e = t, n = l, o = (c) => {
      e.disabled || e.readonly || c.stopPropagation();
    }, u = (c) => {
      e.disabled || e.readonly || (n("update:modelValue", !e.modelValue), n("change", c));
    }, r = y(() => [
      "og-toggleswitch",
      e.size ? `og-toggleswitch--${e.size}` : "",
      {
        "og-toggleswitch--checked": e.modelValue,
        "og-toggleswitch--disabled": e.disabled,
        "og-toggleswitch--invalid": e.invalid
      }
    ]);
    return (c, i) => (a(), s("div", {
      class: $(r.value),
      onClick: o
    }, [
      g("input", {
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
      }, null, 40, Je),
      g("div", Qe, [
        g("div", We, [
          m(c.$slots, "handle", { checked: t.modelValue }, void 0, !0)
        ])
      ])
    ], 2));
  }
}), et = /* @__PURE__ */ D(Ze, [["__scopeId", "data-v-a9f76058"]]), tt = ["disabled"], lt = { class: "og-inputnumber__input-wrapper" }, at = {
  key: 0,
  class: "og-inputnumber__prefix"
}, ot = ["value", "disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax", "placeholder", "onKeydown"], st = {
  key: 1,
  class: "og-inputnumber__suffix"
}, nt = {
  key: 1,
  class: "og-inputnumber__stacked-buttons"
}, it = ["disabled"], dt = ["disabled"], ut = ["disabled"], rt = /* @__PURE__ */ I({
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
    const e = t, n = l, o = B(null), u = y(() => e.modelValue === null || e.modelValue === void 0 || isNaN(e.modelValue) ? "" : String(e.modelValue)), r = y(() => e.min !== void 0 && e.modelValue !== null && e.modelValue <= e.min), c = y(() => e.max !== void 0 && e.modelValue !== null && e.modelValue >= e.max), i = (p) => {
      if (p === null) return null;
      let k = p;
      return e.min !== void 0 && k < e.min && (k = e.min), e.max !== void 0 && k > e.max && (k = e.max), k;
    }, d = (p) => {
      const k = i(p);
      n("update:modelValue", k), o.value && (o.value.value = k === null ? "" : String(k));
    }, v = () => {
      if (e.disabled) return;
      const p = e.modelValue ?? e.min ?? 0;
      d(p + e.step);
    }, h = () => {
      if (e.disabled) return;
      const p = e.modelValue ?? e.max ?? 0;
      d(p - e.step);
    }, f = (p) => {
      const k = p.target, x = k.value.trim();
      if (x === "" || x === "-") {
        n("update:modelValue", null);
        return;
      }
      const M = Number(x);
      isNaN(M) || (e.max !== void 0 && M > e.max ? (k.value = String(e.max), d(e.max)) : d(M));
    }, _ = (p) => {
      const k = p.target, x = k.value.trim();
      if (x !== "") {
        const M = Number(x);
        if (!isNaN(M)) {
          const T = i(M);
          k.value = T === null ? "" : String(T), n("update:modelValue", T);
        }
      }
      n("blur", p);
    }, O = (p) => {
      n("change", p);
    };
    U(
      () => e.modelValue,
      (p) => {
        o.value && document.activeElement !== o.value && (o.value.value = p == null || isNaN(p) ? "" : String(p));
      }
    );
    const L = y(() => [
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
    return (p, k) => (a(), s("div", {
      class: $(L.value)
    }, [
      t.showButtons && t.buttonLayout === "horizontal" ? (a(), s("button", {
        key: 0,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || r.value,
        class: "og-inputnumber__button og-inputnumber__button--decrement",
        onClick: h
      }, [
        m(p.$slots, "decrementbuttonicon", {}, () => [
          k[1] || (k[1] = P("-", -1))
        ], !0)
      ], 8, tt)) : b("", !0),
      g("div", lt, [
        t.prefix ? (a(), s("span", at, C(t.prefix), 1)) : b("", !0),
        g("input", {
          ref_key: "inputRef",
          ref: o,
          type: "text",
          role: "spinbutton",
          value: u.value,
          disabled: t.disabled,
          "aria-valuenow": t.modelValue ?? void 0,
          "aria-valuemin": t.min,
          "aria-valuemax": t.max,
          placeholder: t.placeholder,
          class: "og-inputnumber__input",
          onInput: f,
          onChange: O,
          onFocus: k[0] || (k[0] = (x) => p.$emit("focus", x)),
          onBlur: _,
          onKeydown: [
            X(E(v, ["prevent"]), ["up"]),
            X(E(h, ["prevent"]), ["down"])
          ]
        }, null, 40, ot),
        t.suffix ? (a(), s("span", st, C(t.suffix), 1)) : b("", !0)
      ]),
      t.showButtons && t.buttonLayout === "stacked" ? (a(), s("div", nt, [
        g("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || c.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-up",
          onClick: v
        }, " ▲ ", 8, it),
        g("button", {
          type: "button",
          tabindex: "-1",
          disabled: t.disabled || r.value,
          class: "og-inputnumber__button og-inputnumber__button--stacked-down",
          onClick: h
        }, " ▼ ", 8, dt)
      ])) : b("", !0),
      t.showButtons && t.buttonLayout === "horizontal" ? (a(), s("button", {
        key: 2,
        type: "button",
        tabindex: "-1",
        disabled: t.disabled || c.value,
        class: "og-inputnumber__button og-inputnumber__button--increment",
        onClick: v
      }, [
        m(p.$slots, "incrementbuttonicon", {}, () => [
          k[2] || (k[2] = P("+", -1))
        ], !0)
      ], 8, ut)) : b("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ D(rt, [["__scopeId", "data-v-6d1cf868"]]);
function gt(t) {
  const l = B(!1), e = B(""), n = B(-1), o = (f) => {
    if (typeof f == "object" && f !== null) {
      const _ = ee(t.optionLabel);
      if (_ && _ in f) return f[_];
      if ("label" in f) return f.label;
    }
    return String(f ?? "");
  }, u = (f) => {
    if (typeof f == "object" && f !== null) {
      const _ = ee(t.optionValue);
      if (_ && _ in f) return f[_];
      if ("value" in f) return f.value;
    }
    return f;
  }, r = (f) => {
    if (typeof f == "object" && f !== null) {
      const _ = ee(t.optionDisabled);
      if (_ && _ in f) return !!f[_];
      if ("disabled" in f) return !!f.disabled;
    }
    return !1;
  }, c = y(() => ee(t.options) || []), i = y(() => {
    const f = c.value;
    if (!ee(t.filter) || !e.value.trim())
      return f;
    const O = e.value.toLowerCase();
    return f.filter((L) => o(L).toLowerCase().includes(O));
  });
  return {
    isOpen: l,
    filterQuery: e,
    focusedIndex: n,
    rawOptions: c,
    filteredOptions: i,
    getOptionLabel: o,
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
const vt = { class: "og-select__label" }, ft = { key: 0 }, pt = {
  key: 1,
  class: "og-select__placeholder"
}, bt = { class: "og-select__dropdown-icon" }, mt = {
  key: 0,
  class: "og-select__chevron",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, _t = {
  key: 1,
  class: "og-select__spinner",
  viewBox: "0 0 24 24",
  fill: "none"
}, ht = {
  key: 0,
  class: "og-select__header"
}, yt = {
  key: 1,
  class: "og-select__filter-container"
}, $t = ["placeholder"], kt = {
  class: "og-select__list",
  role: "listbox"
}, wt = ["aria-selected", "onClick"], Ot = {
  key: 0,
  class: "og-select__empty"
}, Ct = {
  key: 2,
  class: "og-select__footer"
}, Vt = /* @__PURE__ */ I({
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
    const e = t, n = l, o = B(null), u = B(null), r = B(null), c = B({}), {
      isOpen: i,
      filterQuery: d,
      filteredOptions: v,
      getOptionLabel: h,
      getOptionValue: f,
      isOptionDisabled: _,
      toggle: O,
      close: L
    } = gt({
      options: () => e.options,
      optionLabel: () => e.optionLabel,
      optionValue: () => e.optionValue,
      optionDisabled: () => e.optionDisabled,
      filter: () => e.filter
    }), p = y(() => e.modelValue === null || e.modelValue === void 0 ? null : (e.options || []).find((G) => f(G) === e.modelValue) ?? e.modelValue), k = y(() => p.value !== null && p.value !== void 0 ? h(p.value) : ""), x = (S) => f(S) === e.modelValue, M = (S) => {
      if (_(S)) return;
      const G = f(S);
      n("update:modelValue", G), n("change", G), L();
    }, T = () => {
      n("update:modelValue", null), n("change", null);
    }, A = () => {
      if (!o.value || !e.overlayTeleport) return;
      const S = o.value.getBoundingClientRect();
      c.value = {
        position: "absolute",
        top: `${S.bottom + window.scrollY + 4}px`,
        left: `${S.left + window.scrollX}px`,
        width: `${S.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, w = () => {
      e.disabled || e.loading || (O(), i.value && se(() => {
        A(), e.filter && r.value && r.value.focus();
      }));
    }, z = (S) => {
      S.key === "Enter" || S.key === " " ? (S.preventDefault(), w()) : S.key === "Escape" && L();
    }, R = (S) => {
      o.value && !o.value.contains(S.target) && u.value && !u.value.contains(S.target) && L();
    };
    U(i, (S) => {
      S ? (window.addEventListener("resize", A), window.addEventListener("scroll", A, !0)) : (window.removeEventListener("resize", A), window.removeEventListener("scroll", A, !0));
    }), ce(() => {
      document.addEventListener("click", R);
    }), te(() => {
      document.removeEventListener("click", R), window.removeEventListener("resize", A), window.removeEventListener("scroll", A, !0);
    });
    const q = y(() => [
      "og-select",
      e.size ? `og-select--${e.size}` : "",
      {
        "og-select--open": i.value,
        "og-select--invalid": e.invalid,
        "og-select--fluid": e.fluid,
        "og-select--disabled": e.disabled
      }
    ]);
    return (S, G) => (a(), s("div", {
      ref_key: "containerRef",
      ref: o,
      class: $(q.value)
    }, [
      g("div", {
        class: "og-select__trigger",
        tabindex: "0",
        onClick: w,
        onKeydown: z
      }, [
        g("div", vt, [
          m(S.$slots, "value", {
            value: p.value,
            placeholder: t.placeholder
          }, () => [
            p.value !== null && p.value !== void 0 ? (a(), s("span", ft, C(k.value), 1)) : (a(), s("span", pt, C(t.placeholder), 1))
          ], !0)
        ]),
        t.showClear && p.value !== null && p.value !== void 0 && !t.disabled ? (a(), s("span", {
          key: 0,
          class: "og-select__clear",
          onClick: E(T, ["stop"])
        }, [
          m(S.$slots, "clearicon", {}, () => [
            G[1] || (G[1] = P("✕", -1))
          ], !0)
        ])) : b("", !0),
        g("span", bt, [
          m(S.$slots, "dropdownicon", {}, () => [
            t.loading ? (a(), s("svg", _t, [...G[3] || (G[3] = [
              g("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4",
                style: { opacity: "0.25" }
              }, null, -1),
              g("path", {
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                style: { opacity: "0.75" }
              }, null, -1)
            ])])) : (a(), s("svg", mt, [...G[2] || (G[2] = [
              g("polyline", { points: "6 9 12 15 18 9" }, null, -1)
            ])]))
          ], !0)
        ])
      ], 32),
      (a(), W(oe, {
        to: "body",
        disabled: !t.overlayTeleport
      }, [
        F(i) ? (a(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: u,
          class: "og-select__overlay",
          style: Q(c.value)
        }, [
          S.$slots.header ? (a(), s("div", ht, [
            m(S.$slots, "header", {}, void 0, !0)
          ])) : b("", !0),
          t.filter ? (a(), s("div", yt, [
            ne(g("input", {
              ref_key: "filterInputRef",
              ref: r,
              "onUpdate:modelValue": G[0] || (G[0] = (J) => Ce(d) ? d.value = J : null),
              type: "text",
              class: "og-select__filter-input",
              placeholder: t.filterPlaceholder
            }, null, 8, $t), [
              [ve, F(d)]
            ])
          ])) : b("", !0),
          g("ul", kt, [
            (a(!0), s(K, null, j(F(v), (J, de) => (a(), s("li", {
              key: de,
              class: $([
                "og-select__option",
                {
                  "og-select__option--selected": x(J),
                  "og-select__option--disabled": F(_)(J)
                }
              ]),
              role: "option",
              "aria-selected": x(J),
              onClick: (V) => M(J)
            }, [
              m(S.$slots, "option", {
                option: J,
                index: de
              }, () => [
                P(C(F(h)(J)), 1)
              ], !0)
            ], 10, wt))), 128)),
            F(v).length === 0 ? (a(), s("li", Ot, C(t.emptyMessage), 1)) : b("", !0)
          ]),
          S.$slots.footer ? (a(), s("div", Ct, [
            m(S.$slots, "footer", {}, void 0, !0)
          ])) : b("", !0)
        ], 4)) : b("", !0)
      ], 8, ["disabled"]))
    ], 2));
  }
}), Bt = /* @__PURE__ */ D(Vt, [["__scopeId", "data-v-094ca737"]]), It = {
  key: 0,
  class: "og-card__header"
}, Dt = { class: "og-card__body" }, xt = {
  key: 0,
  class: "og-card__title"
}, Tt = {
  key: 1,
  class: "og-card__subtitle"
}, Lt = {
  key: 2,
  class: "og-card__content"
}, St = {
  key: 3,
  class: "og-card__footer"
}, zt = /* @__PURE__ */ I({
  name: "OgCard",
  __name: "OgCard",
  props: {
    title: {},
    subtitle: {}
  },
  setup(t) {
    const l = y(() => ["og-card"]);
    return (e, n) => (a(), s("div", {
      class: $(l.value)
    }, [
      e.$slots.header ? (a(), s("div", It, [
        m(e.$slots, "header", {}, void 0, !0)
      ])) : b("", !0),
      g("div", Dt, [
        t.title || e.$slots.title ? (a(), s("div", xt, [
          m(e.$slots, "title", {}, () => [
            P(C(t.title), 1)
          ], !0)
        ])) : b("", !0),
        t.subtitle || e.$slots.subtitle ? (a(), s("div", Tt, [
          m(e.$slots, "subtitle", {}, () => [
            P(C(t.subtitle), 1)
          ], !0)
        ])) : b("", !0),
        e.$slots.content ? (a(), s("div", Lt, [
          m(e.$slots, "content", {}, void 0, !0)
        ])) : b("", !0),
        e.$slots.footer ? (a(), s("div", St, [
          m(e.$slots, "footer", {}, void 0, !0)
        ])) : b("", !0)
      ])
    ], 2));
  }
}), Mt = /* @__PURE__ */ D(zt, [["__scopeId", "data-v-becb22d8"]]), Rt = {
  key: 0,
  class: "og-dialog__header"
}, Pt = { class: "og-dialog__title" }, Et = { class: "og-dialog__content" }, At = {
  key: 1,
  class: "og-dialog__footer"
}, Nt = /* @__PURE__ */ I({
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
    const e = t, n = l, o = B(null), u = () => {
      n("update:visible", !1), n("hide");
    }, r = () => {
      e.dismissableMask && u();
    }, c = () => {
      e.closeOnEscape && e.closable && u();
    };
    U(
      () => e.visible,
      (d) => {
        d ? (n("show"), document.body.style.overflow = e.modal ? "hidden" : "") : document.body.style.overflow = "";
      }
    ), te(() => {
      document.body.style.overflow = "";
    });
    const i = y(() => ["og-dialog"]);
    return (d, v) => (a(), W(oe, { to: "body" }, [
      t.visible ? (a(), s("div", {
        key: 0,
        class: $(["og-dialog-mask", { "og-dialog-mask--modal": t.modal }, `og-dialog-mask--${t.position}`]),
        onClick: r
      }, [
        g("div", {
          ref_key: "dialogRef",
          ref: o,
          class: $(i.value),
          style: Q(t.style),
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1",
          onClick: v[0] || (v[0] = E(() => {
          }, ["stop"])),
          onKeydown: X(c, ["esc"])
        }, [
          t.header || d.$slots.header || t.closable ? (a(), s("div", Rt, [
            m(d.$slots, "header", {}, () => [
              g("span", Pt, C(t.header), 1)
            ], !0),
            t.closable ? (a(), s("button", {
              key: 0,
              type: "button",
              class: "og-dialog__close",
              "aria-label": "Close",
              onClick: u
            }, [
              m(d.$slots, "closeicon", {}, () => [
                v[1] || (v[1] = P("✕", -1))
              ], !0)
            ])) : b("", !0)
          ])) : b("", !0),
          g("div", Et, [
            m(d.$slots, "default", {}, void 0, !0)
          ]),
          d.$slots.footer ? (a(), s("div", At, [
            m(d.$slots, "footer", {}, void 0, !0)
          ])) : b("", !0)
        ], 38)
      ], 2)) : b("", !0)
    ]));
  }
}), Kt = /* @__PURE__ */ D(Nt, [["__scopeId", "data-v-d8d5495a"]]), ae = B([]);
function Ft() {
  const t = (o) => {
    const u = o.id || Math.random().toString(36).substring(2, 9), r = { ...o, id: u };
    ae.value.push(r), !r.sticky && (r.life || !0) && setTimeout(() => {
      l(u);
    }, r.life || 3e3);
  }, l = (o) => {
    ae.value = ae.value.filter((u) => u.id !== o);
  };
  return {
    messages: ae,
    add: t,
    remove: l,
    removeGroup: (o) => {
      ae.value = ae.value.filter((u) => u.group !== o);
    },
    clear: () => {
      ae.value = [];
    }
  };
}
const jt = { class: "og-toast__icon" }, Yt = { key: 0 }, Gt = { key: 1 }, Xt = { key: 2 }, qt = { key: 3 }, Ht = { class: "og-toast__body" }, Ut = {
  key: 0,
  class: "og-toast__summary"
}, Jt = {
  key: 1,
  class: "og-toast__detail"
}, Qt = ["onClick"], Wt = /* @__PURE__ */ I({
  name: "OgToast",
  __name: "OgToast",
  props: {
    position: { default: "top-right" },
    group: {}
  },
  setup(t) {
    const l = t, { messages: e, remove: n } = Ft(), o = y(() => l.group ? e.value.filter((u) => u.group === l.group) : e.value.filter((u) => !u.group));
    return (u, r) => (a(), W(oe, { to: "body" }, [
      g("div", {
        class: $(["og-toast-container", `og-toast-container--${t.position}`])
      }, [
        _e(Ve, { name: "og-toast-anim" }, {
          default: me(() => [
            (a(!0), s(K, null, j(o.value, (c) => (a(), s("div", {
              key: c.id,
              class: $(["og-toast", c.severity ? `og-toast--${c.severity}` : "og-toast--info"])
            }, [
              g("div", jt, [
                m(u.$slots, "icon", { message: c }, () => [
                  c.severity === "success" ? (a(), s("span", Yt, "✓")) : c.severity === "warn" ? (a(), s("span", Gt, "⚠")) : c.severity === "error" ? (a(), s("span", Xt, "✕")) : (a(), s("span", qt, "ℹ"))
                ], !0)
              ]),
              g("div", Ht, [
                c.summary ? (a(), s("div", Ut, C(c.summary), 1)) : b("", !0),
                c.detail ? (a(), s("div", Jt, C(c.detail), 1)) : b("", !0)
              ]),
              c.closable !== !1 ? (a(), s("button", {
                key: 0,
                type: "button",
                class: "og-toast__close",
                "aria-label": "Close",
                onClick: (i) => F(n)(c.id)
              }, " ✕ ", 8, Qt)) : b("", !0)
            ], 2))), 128))
          ]),
          _: 3
        })
      ], 2)
    ]));
  }
}), Zt = /* @__PURE__ */ D(Wt, [["__scopeId", "data-v-965c9c27"]]);
function el(t) {
  const l = B(0), e = y(() => ee(t.rows) || 10), n = B(null), o = B(1), u = B([]), r = y(() => ee(t.value) || []), c = y(() => !!ee(t.paginator)), i = y(() => r.value.length), d = y(() => {
    const _ = r.value;
    if (!n.value) return _;
    const O = n.value;
    return [..._].sort((L, p) => {
      const k = L[O], x = p[O];
      return k === x ? 0 : k == null ? 1 : x == null ? -1 : k < x ? -1 * o.value : 1 * o.value;
    });
  }), v = y(() => {
    if (!c.value) return d.value;
    const _ = l.value * e.value;
    return d.value.slice(_, _ + e.value);
  });
  return {
    currentPage: l,
    rowsPerPage: e,
    sortField: n,
    sortOrder: o,
    selectedRows: u,
    totalRecords: i,
    paginatedData: v,
    sort: (_) => {
      n.value === _ ? o.value === 1 ? o.value = -1 : (n.value = null, o.value = 1) : (n.value = _, o.value = 1);
    },
    setPage: (_) => {
      l.value = _;
    }
  };
}
const tl = {
  key: 0,
  class: "og-datatable__header"
}, ll = { class: "og-datatable__wrapper" }, al = { class: "og-datatable__table" }, ol = { class: "og-datatable__thead" }, sl = ["onClick"], nl = { class: "og-datatable__th-content" }, il = {
  key: 0,
  class: "og-datatable__sort-icon"
}, dl = { class: "og-datatable__tbody" }, ul = {
  key: 0,
  class: "og-datatable__loading-row"
}, rl = ["colspan"], cl = {
  key: 1,
  class: "og-datatable__empty-row"
}, gl = ["colspan"], vl = { key: 1 }, fl = {
  key: 1,
  class: "og-datatable__paginator"
}, pl = ["disabled"], bl = ["onClick"], ml = ["disabled"], _l = {
  key: 2,
  class: "og-datatable__footer"
}, hl = /* @__PURE__ */ I({
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
    const l = t, e = Be(), {
      currentPage: n,
      sortField: o,
      sortOrder: u,
      paginatedData: r,
      sort: c,
      setPage: i
    } = el({
      value: () => l.value,
      paginator: () => l.paginator,
      rows: () => l.rows
    }), d = y(() => {
      var _;
      const f = l.rows || 10;
      return Math.ceil((((_ = l.value) == null ? void 0 : _.length) || 0) / f);
    }), v = y(() => {
      const f = e.default ? e.default() : [], _ = [], O = (L) => {
        L.forEach((p) => {
          Array.isArray(p.children) && typeof p.type == "symbol" ? O(p.children) : p.props && _.push(p);
        });
      };
      return O(f), _.map((L) => ({
        props: L.props,
        children: L.children
      }));
    }), h = y(() => [
      "og-datatable",
      l.size ? `og-datatable--${l.size}` : "",
      {
        "og-datatable--striped": l.stripedRows,
        "og-datatable--gridlines": l.showGridlines
      }
    ]);
    return (f, _) => (a(), s("div", {
      class: $(h.value)
    }, [
      f.$slots.header ? (a(), s("div", tl, [
        m(f.$slots, "header", {}, void 0, !0)
      ])) : b("", !0),
      g("div", ll, [
        g("table", al, [
          g("thead", ol, [
            g("tr", null, [
              (a(!0), s(K, null, j(v.value, (O, L) => {
                var p, k, x, M, T, A;
                return a(), s("th", {
                  key: L,
                  style: Q((p = O.props) == null ? void 0 : p.style),
                  class: $([
                    "og-datatable__th",
                    { "og-datatable__th--sortable": (k = O.props) == null ? void 0 : k.sortable }
                  ]),
                  onClick: (w) => {
                    var z, R;
                    return (z = O.props) != null && z.sortable && ((R = O.props) != null && R.field) ? F(c)(O.props.field) : void 0;
                  }
                }, [
                  g("div", nl, [
                    g("span", null, C(((x = O.props) == null ? void 0 : x.header) || ((M = O.props) == null ? void 0 : M.field)), 1),
                    (T = O.props) != null && T.sortable && F(o) === ((A = O.props) == null ? void 0 : A.field) ? (a(), s("span", il, C(F(u) === 1 ? "▲" : "▼"), 1)) : b("", !0)
                  ])
                ], 14, sl);
              }), 128))
            ])
          ]),
          g("tbody", dl, [
            t.loading ? (a(), s("tr", ul, [
              g("td", {
                colspan: v.value.length,
                class: "og-datatable__loading-cell"
              }, [
                m(f.$slots, "loading", {}, () => [
                  _[2] || (_[2] = P("Loading data...", -1))
                ], !0)
              ], 8, rl)
            ])) : F(r).length === 0 ? (a(), s("tr", cl, [
              g("td", {
                colspan: v.value.length,
                class: "og-datatable__empty-cell"
              }, [
                m(f.$slots, "empty", {}, () => [
                  _[3] || (_[3] = P("No records found", -1))
                ], !0)
              ], 8, gl)
            ])) : b("", !0),
            (a(!0), s(K, null, j(F(r), (O, L) => (a(), s("tr", {
              key: t.dataKey ? O[t.dataKey] : L,
              class: "og-datatable__row"
            }, [
              (a(!0), s(K, null, j(v.value, (p, k) => {
                var x, M, T, A, w;
                return a(), s("td", {
                  key: k,
                  style: Q((x = p.props) == null ? void 0 : x.style),
                  class: "og-datatable__td"
                }, [
                  (M = p.children) != null && M.body ? (a(), W(be((T = p.children) == null ? void 0 : T.body), {
                    key: 0,
                    data: O,
                    index: L,
                    field: (A = p.props) == null ? void 0 : A.field
                  }, null, 8, ["data", "index", "field"])) : (w = p.props) != null && w.field ? (a(), s("span", vl, C(O[p.props.field]), 1)) : b("", !0)
                ], 4);
              }), 128))
            ]))), 128))
          ])
        ])
      ]),
      t.paginator && d.value > 1 ? (a(), s("div", fl, [
        g("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: F(n) === 0,
          onClick: _[0] || (_[0] = (O) => F(i)(F(n) - 1))
        }, " ‹ ", 8, pl),
        (a(!0), s(K, null, j(d.value, (O) => (a(), s("button", {
          key: O,
          class: $(["og-datatable__page-btn", { "og-datatable__page-btn--active": F(n) === O - 1 }]),
          onClick: (L) => F(i)(O - 1)
        }, C(O), 11, bl))), 128)),
        g("button", {
          type: "button",
          class: "og-datatable__page-btn",
          disabled: F(n) >= d.value - 1,
          onClick: _[1] || (_[1] = (O) => F(i)(F(n) + 1))
        }, " › ", 8, ml)
      ])) : b("", !0),
      f.$slots.footer ? (a(), s("div", _l, [
        m(f.$slots, "footer", {}, void 0, !0)
      ])) : b("", !0)
    ], 2));
  }
}), yl = /* @__PURE__ */ D(hl, [["__scopeId", "data-v-899ad77c"]]), $l = /* @__PURE__ */ I({
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
}), kl = ["src", "alt"], wl = {
  key: 1,
  class: "og-avatar__label"
}, Ol = /* @__PURE__ */ I({
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
    const l = t, e = y(() => [
      "og-avatar",
      l.size ? `og-avatar--${l.size}` : "",
      `og-avatar--${l.shape}`
    ]);
    return (n, o) => (a(), s("div", {
      class: $(e.value)
    }, [
      m(n.$slots, "default", {}, () => [
        t.image ? (a(), s("img", {
          key: 0,
          src: t.image,
          alt: t.ariaLabel,
          class: "og-avatar__image"
        }, null, 8, kl)) : t.label ? (a(), s("span", wl, C(t.label), 1)) : t.icon ? (a(), s("span", {
          key: 2,
          class: $(["og-avatar__icon", t.icon])
        }, null, 2)) : b("", !0)
      ], !0)
    ], 2));
  }
}), Cl = /* @__PURE__ */ D(Ol, [["__scopeId", "data-v-d897d309"]]), Vl = /* @__PURE__ */ I({
  name: "OgBadge",
  __name: "OgBadge",
  props: {
    value: {},
    severity: {},
    size: {}
  },
  setup(t) {
    const l = t, e = y(() => [
      "og-badge",
      l.severity ? `og-badge--${l.severity}` : "",
      l.size ? `og-badge--${l.size}` : "",
      {
        "og-badge--dot": l.value === void 0 || l.value === null || l.value === ""
      }
    ]);
    return (n, o) => (a(), s("span", {
      class: $(e.value)
    }, [
      m(n.$slots, "default", {}, () => [
        P(C(t.value), 1)
      ], !0)
    ], 2));
  }
}), Bl = /* @__PURE__ */ D(Vl, [["__scopeId", "data-v-facd4d33"]]), Il = ["aria-valuenow"], Dl = {
  key: 0,
  class: "og-progressbar__label"
}, xl = {
  key: 1,
  class: "og-progressbar__indeterminate-container"
}, Tl = /* @__PURE__ */ I({
  name: "OgProgressBar",
  __name: "OgProgressBar",
  props: {
    value: { default: 0 },
    mode: { default: "determinate" },
    showValue: { type: Boolean, default: !0 },
    unit: { default: "%" }
  },
  setup(t) {
    const l = t, e = y(() => Math.min(100, Math.max(0, l.value)));
    return (n, o) => (a(), s("div", {
      class: $(["og-progressbar", `og-progressbar--${t.mode}`]),
      role: "progressbar",
      "aria-valuenow": t.value ?? void 0
    }, [
      t.mode === "determinate" ? (a(), s("div", {
        key: 0,
        class: "og-progressbar__value",
        style: Q({ width: `${e.value}%` })
      }, [
        t.showValue ? (a(), s("span", Dl, C(e.value) + C(t.unit), 1)) : b("", !0)
      ], 4)) : (a(), s("div", xl, [...o[0] || (o[0] = [
        g("div", { class: "og-progressbar__indeterminate-bar" }, null, -1)
      ])]))
    ], 10, Il));
  }
}), Ll = /* @__PURE__ */ D(Tl, [["__scopeId", "data-v-5bd32dc7"]]), Sl = /* @__PURE__ */ I({
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
    const l = t, e = y(() => l.size ? {
      width: l.size,
      height: l.size,
      borderRadius: l.shape === "circle" ? "50%" : l.borderRadius
    } : {
      width: l.width,
      height: l.height,
      borderRadius: l.shape === "circle" ? "50%" : l.borderRadius
    }), n = y(() => [
      "og-skeleton",
      `og-skeleton--${l.shape}`,
      `og-skeleton--anim-${l.animation}`
    ]);
    return (o, u) => (a(), s("div", {
      class: $(n.value),
      style: Q(e.value)
    }, null, 6));
  }
}), zl = /* @__PURE__ */ D(Sl, [["__scopeId", "data-v-442ac949"]]), Ml = {
  key: 0,
  class: "og-divider__content"
}, Rl = /* @__PURE__ */ I({
  name: "OgDivider",
  __name: "OgDivider",
  props: {
    align: { default: "center" },
    layout: { default: "horizontal" },
    type: { default: "solid" }
  },
  setup(t) {
    const l = t, e = y(() => [
      "og-divider",
      `og-divider--${l.layout}`,
      `og-divider--${l.type}`,
      `og-divider--align-${l.align}`
    ]);
    return (n, o) => (a(), s("div", {
      class: $(e.value),
      role: "separator"
    }, [
      n.$slots.default ? (a(), s("div", Ml, [
        m(n.$slots, "default", {}, void 0, !0)
      ])) : b("", !0)
    ], 2));
  }
}), Pl = /* @__PURE__ */ D(Rl, [["__scopeId", "data-v-9409c09c"]]), El = { class: "og-accordion" }, Al = /* @__PURE__ */ I({
  name: "OgAccordion",
  __name: "OgAccordion",
  props: {
    value: { default: null },
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:value", "tab-open", "tab-close"],
  setup(t, { emit: l }) {
    const e = t, n = l, o = B(e.value ?? (e.multiple ? [] : null)), u = B([]);
    let r = 0;
    U(
      () => e.value,
      (d) => {
        o.value = d;
      }
    );
    const c = () => {
      const d = r++;
      return u.value.push(d), {
        id: d,
        unregister: () => {
          u.value = u.value.filter((v) => v !== d);
        }
      };
    }, i = (d) => {
      if (e.multiple) {
        let v = Array.isArray(o.value) ? [...o.value] : [];
        v.includes(d) ? (v = v.filter((h) => h !== d), n("tab-close", d)) : (v.push(d), n("tab-open", d)), o.value = v, n("update:value", v);
      } else
        o.value === d ? (o.value = null, n("tab-close", d), n("update:value", null)) : (o.value = d, n("tab-open", d), n("update:value", d));
    };
    return fe("ogAccordion", {
      multiple: e.multiple,
      activeValue: o,
      registeredTabs: u,
      registerTab: c,
      toggleTab: i
    }), (d, v) => (a(), s("div", El, [
      m(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Nl = /* @__PURE__ */ D(Al, [["__scopeId", "data-v-c67797a3"]]), Kl = ["tabindex"], Fl = { class: "og-accordion-tab__title" }, jl = { class: "og-accordion-tab__toggle-icon" }, Yl = { class: "og-accordion-tab__content" }, Gl = /* @__PURE__ */ I({
  name: "OgAccordionTab",
  __name: "OgAccordionTab",
  props: {
    header: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, e = he("ogAccordion", null), n = B(-1);
    let o = null;
    e && (o = e.registerTab(), n.value = o.id), te(() => {
      o && o.unregister();
    });
    const u = y(() => e ? e.registeredTabs.value.indexOf(n.value) : -1), r = y(() => !e || u.value === -1 ? !1 : e.multiple ? Array.isArray(e.activeValue.value) && e.activeValue.value.includes(u.value) : e.activeValue.value === u.value), c = () => {
      l.disabled || !e || u.value === -1 || e.toggleTab(u.value);
    };
    return (i, d) => (a(), s("div", {
      class: $(["og-accordion-tab", { "og-accordion-tab--active": r.value, "og-accordion-tab--disabled": t.disabled }])
    }, [
      g("div", {
        class: "og-accordion-tab__header",
        role: "button",
        tabindex: t.disabled ? -1 : 0,
        onClick: c
      }, [
        m(i.$slots, "header", {}, () => [
          g("span", Fl, C(t.header), 1)
        ], !0),
        g("span", jl, C(r.value ? "−" : "+"), 1)
      ], 8, Kl),
      ne(g("div", Yl, [
        m(i.$slots, "default", {}, void 0, !0)
      ], 512), [
        [pe, r.value]
      ])
    ], 2));
  }
}), Xl = /* @__PURE__ */ D(Gl, [["__scopeId", "data-v-30d7e376"]]), ql = { class: "og-tabs" }, Hl = { class: "og-tabs__nav-container" }, Ul = {
  class: "og-tabs__nav",
  role: "tablist"
}, Jl = ["aria-selected", "disabled", "onClick"], Ql = { class: "og-tabs__panels" }, Wl = /* @__PURE__ */ I({
  name: "OgTabs",
  __name: "OgTabs",
  props: {
    value: { default: 0 }
  },
  emits: ["update:value", "tab-change"],
  setup(t, { emit: l }) {
    const e = t, n = l, o = B(e.value), u = B([]);
    let r = 0;
    U(
      () => e.value,
      (d) => {
        o.value = d;
      }
    );
    const c = (d) => {
      const v = r++, h = Ie({ id: v, header: d.header, disabled: d.disabled });
      return u.value.push(h), {
        id: v,
        update: (f) => {
          h.header = f.header, h.disabled = f.disabled;
        },
        unregister: () => {
          u.value = u.value.filter((f) => f.id !== v);
        }
      };
    }, i = (d, v) => {
      v || (o.value = d, n("update:value", d), n("tab-change", d));
    };
    return fe("ogTabs", {
      activeValue: o,
      registeredTabs: u,
      registerTab: c
    }), (d, v) => (a(), s("div", ql, [
      g("div", Hl, [
        g("div", Ul, [
          (a(!0), s(K, null, j(u.value, (h, f) => (a(), s("button", {
            key: h.id,
            type: "button",
            role: "tab",
            "aria-selected": o.value === f,
            disabled: h.disabled,
            class: $([
              "og-tabs__header",
              {
                "og-tabs__header--active": o.value === f,
                "og-tabs__header--disabled": h.disabled
              }
            ]),
            onClick: (_) => i(f, h.disabled)
          }, [
            g("span", null, C(h.header), 1)
          ], 10, Jl))), 128))
        ])
      ]),
      g("div", Ql, [
        m(d.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Zl = /* @__PURE__ */ D(Wl, [["__scopeId", "data-v-50236a70"]]), ea = {
  class: "og-tabpanel",
  role: "tabpanel"
}, ta = /* @__PURE__ */ I({
  name: "OgTabPanel",
  __name: "OgTabPanel",
  props: {
    header: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    const l = t, e = he("ogTabs", null), n = B(-1);
    let o = null;
    e && (o = e.registerTab({
      header: l.header,
      disabled: l.disabled
    }), n.value = o.id), U(
      () => [l.header, l.disabled],
      () => {
        o && o.update({ header: l.header, disabled: l.disabled });
      }
    ), te(() => {
      o && o.unregister();
    });
    const u = y(() => e ? e.registeredTabs.value.findIndex((c) => c.id === n.value) : -1), r = y(() => e ? e.activeValue.value === u.value : !1);
    return (c, i) => ne((a(), s("div", ea, [
      m(c.$slots, "default", {}, void 0, !0)
    ], 512)), [
      [pe, r.value]
    ]);
  }
}), la = /* @__PURE__ */ D(ta, [["__scopeId", "data-v-ea9476c4"]]), aa = { class: "og-tag__value" }, oa = /* @__PURE__ */ I({
  name: "OgTag",
  __name: "OgTag",
  props: {
    value: {},
    severity: {},
    rounded: { type: Boolean, default: !1 },
    icon: {}
  },
  setup(t) {
    const l = t, e = y(() => [
      "og-tag",
      l.severity ? `og-tag--${l.severity}` : "og-tag--primary",
      {
        "og-tag--rounded": l.rounded
      }
    ]);
    return (n, o) => (a(), s("span", {
      class: $(e.value)
    }, [
      m(n.$slots, "icon", {}, () => [
        t.icon ? (a(), s("span", {
          key: 0,
          class: $(["og-tag__icon", t.icon])
        }, null, 2)) : b("", !0)
      ], !0),
      g("span", aa, [
        m(n.$slots, "default", {}, () => [
          P(C(t.value), 1)
        ], !0)
      ])
    ], 2));
  }
}), sa = /* @__PURE__ */ D(oa, [["__scopeId", "data-v-be36ea7e"]]), na = {
  key: 0,
  class: "og-chip"
}, ia = ["src"], da = { class: "og-chip__label" }, ua = /* @__PURE__ */ I({
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
    const e = l, n = B(!0), o = (u) => {
      n.value = !1, e("remove", u);
    };
    return (u, r) => n.value ? (a(), s("div", na, [
      m(u.$slots, "icon", {}, () => [
        t.image ? (a(), s("img", {
          key: 0,
          src: t.image,
          alt: "chip avatar",
          class: "og-chip__image"
        }, null, 8, ia)) : t.icon ? (a(), s("span", {
          key: 1,
          class: $(["og-chip__icon", t.icon])
        }, null, 2)) : b("", !0)
      ], !0),
      g("span", da, [
        m(u.$slots, "default", {}, () => [
          P(C(t.label), 1)
        ], !0)
      ]),
      t.removable ? (a(), s("button", {
        key: 0,
        type: "button",
        class: "og-chip__remove",
        "aria-label": "Remove",
        onClick: o
      }, [
        m(u.$slots, "removeicon", {}, () => [
          r[0] || (r[0] = P("✕", -1))
        ], !0)
      ])) : b("", !0)
    ])) : b("", !0);
  }
}), ra = /* @__PURE__ */ D(ua, [["__scopeId", "data-v-fc160651"]]), ca = { class: "og-message__wrapper" }, ga = { class: "og-message__icon" }, va = { key: 1 }, fa = { key: 2 }, pa = { key: 3 }, ba = { key: 4 }, ma = { class: "og-message__content" }, _a = /* @__PURE__ */ I({
  name: "OgMessage",
  __name: "OgMessage",
  props: {
    severity: { default: "info" },
    closable: { type: Boolean, default: !1 },
    icon: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const e = t, n = l, o = B(!0), u = (c) => {
      o.value = !1, n("close", c);
    }, r = y(() => [
      "og-message",
      `og-message--${e.severity}`
    ]);
    return (c, i) => o.value ? (a(), s("div", {
      key: 0,
      class: $(r.value),
      role: "alert"
    }, [
      g("div", ca, [
        g("span", ga, [
          m(c.$slots, "icon", {}, () => [
            t.icon ? (a(), s("span", {
              key: 0,
              class: $(t.icon)
            }, null, 2)) : t.severity === "success" ? (a(), s("span", va, "✓")) : t.severity === "warning" ? (a(), s("span", fa, "⚠")) : t.severity === "danger" ? (a(), s("span", pa, "✕")) : (a(), s("span", ba, "ℹ"))
          ], !0)
        ]),
        g("div", ma, [
          m(c.$slots, "default", {}, void 0, !0)
        ]),
        t.closable ? (a(), s("button", {
          key: 0,
          type: "button",
          class: "og-message__close",
          "aria-label": "Close",
          onClick: u
        }, [
          m(c.$slots, "closeicon", {}, () => [
            i[0] || (i[0] = P("✕", -1))
          ], !0)
        ])) : b("", !0)
      ])
    ], 2)) : b("", !0);
  }
}), ha = /* @__PURE__ */ D(_a, [["__scopeId", "data-v-40394155"]]), ya = {
  key: 0,
  class: "og-drawer__header"
}, $a = { class: "og-drawer__title" }, ka = { class: "og-drawer__content" }, wa = {
  key: 1,
  class: "og-drawer__footer"
}, Oa = /* @__PURE__ */ I({
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
    const e = t, n = l, o = () => {
      n("update:visible", !1), n("hide");
    }, u = () => {
      e.dismissableMask && o();
    }, r = () => {
      e.closeOnEscape && e.closable && o();
    };
    U(
      () => e.visible,
      (i) => {
        i ? (n("show"), e.modal && (document.body.style.overflow = "hidden")) : document.body.style.overflow = "";
      }
    ), te(() => {
      document.body.style.overflow = "";
    });
    const c = y(() => [
      "og-drawer",
      `og-drawer--${e.position}`,
      { "og-drawer--fullscreen": e.fullScreen }
    ]);
    return (i, d) => (a(), W(oe, { to: "body" }, [
      t.visible ? (a(), s("div", {
        key: 0,
        class: $(["og-drawer-mask", { "og-drawer-mask--modal": t.modal }]),
        onClick: u
      }, [
        g("div", {
          class: $(c.value),
          role: "complementary",
          "aria-modal": "true",
          tabindex: "-1",
          onClick: d[0] || (d[0] = E(() => {
          }, ["stop"])),
          onKeydown: X(r, ["esc"])
        }, [
          t.header || i.$slots.header || t.closable ? (a(), s("div", ya, [
            m(i.$slots, "header", {}, () => [
              g("span", $a, C(t.header), 1)
            ], !0),
            t.closable ? (a(), s("button", {
              key: 0,
              type: "button",
              class: "og-drawer__close",
              "aria-label": "Close",
              onClick: o
            }, [
              m(i.$slots, "closeicon", {}, () => [
                d[1] || (d[1] = P("✕", -1))
              ], !0)
            ])) : b("", !0)
          ])) : b("", !0),
          g("div", ka, [
            m(i.$slots, "default", {}, void 0, !0)
          ]),
          i.$slots.footer ? (a(), s("div", wa, [
            m(i.$slots, "footer", {}, void 0, !0)
          ])) : b("", !0)
        ], 34)
      ], 2)) : b("", !0)
    ]));
  }
}), Ca = /* @__PURE__ */ D(Oa, [["__scopeId", "data-v-a172d6a1"]]), Va = { class: "og-slider__track" }, Ba = ["onKeydown"], Ia = /* @__PURE__ */ I({
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
    const e = t, n = l, o = B(null), u = y(() => {
      const p = e.max - e.min;
      return p <= 0 ? 0 : (Math.min(e.max, Math.max(e.min, e.modelValue)) - e.min) / p * 100;
    }), r = y(() => e.orientation === "vertical" ? { height: `${u.value}%`, bottom: "0" } : { width: `${u.value}%`, left: "0" }), c = y(() => e.orientation === "vertical" ? { bottom: `${u.value}%`, left: "50%", transform: "translate(-50%, 50%)" } : { left: `${u.value}%`, top: "50%", transform: "translate(-50%, -50%)" }), i = (p) => {
      if (e.disabled) return;
      let k = Math.min(e.max, Math.max(e.min, p));
      n("update:modelValue", k), n("change", k);
    }, d = () => i(e.modelValue + e.step), v = () => i(e.modelValue - e.step), h = (p, k) => {
      if (!o.value || e.disabled) return;
      const x = o.value.getBoundingClientRect();
      let M = 0;
      e.orientation === "vertical" ? M = (x.bottom - k) / x.height : M = (p - x.left) / x.width, M = Math.max(0, Math.min(1, M));
      const T = e.min + M * (e.max - e.min), A = Math.round(T / e.step) * e.step;
      i(A);
    }, f = (p) => {
      const k = "touches" in p ? p.touches[0].clientX : p.clientX, x = "touches" in p ? p.touches[0].clientY : p.clientY;
      h(k, x);
    }, _ = () => {
      window.removeEventListener("mousemove", f), window.removeEventListener("mouseup", _), window.removeEventListener("touchmove", f), window.removeEventListener("touchend", _);
    }, O = (p) => {
      if (e.disabled) return;
      const k = "touches" in p ? p.touches[0].clientX : p.clientX, x = "touches" in p ? p.touches[0].clientY : p.clientY;
      h(k, x), window.addEventListener("mousemove", f), window.addEventListener("mouseup", _), window.addEventListener("touchmove", f), window.addEventListener("touchend", _);
    };
    te(() => {
      _();
    });
    const L = y(() => [
      "og-slider",
      `og-slider--${e.orientation}`,
      { "og-slider--disabled": e.disabled }
    ]);
    return (p, k) => (a(), s("div", {
      ref_key: "sliderRef",
      ref: o,
      class: $(L.value),
      onMousedown: O,
      onTouchstartPassive: O
    }, [
      g("div", Va, [
        g("div", {
          class: "og-slider__range",
          style: Q(r.value)
        }, null, 4),
        g("div", {
          class: "og-slider__handle",
          tabindex: "0",
          style: Q(c.value),
          onKeydown: [
            X(E(v, ["prevent"]), ["left"]),
            X(E(v, ["prevent"]), ["down"]),
            X(E(d, ["prevent"]), ["right"]),
            X(E(d, ["prevent"]), ["up"])
          ]
        }, null, 44, Ba)
      ])
    ], 34));
  }
}), Da = /* @__PURE__ */ D(Ia, [["__scopeId", "data-v-6614aa05"]]), xa = ["disabled"], Ta = ["aria-label", "disabled", "onClick"], La = /* @__PURE__ */ I({
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
    const e = t, n = l, o = (r) => {
      e.disabled || e.readonly || (n("update:modelValue", r), n("change", r));
    }, u = () => {
      e.disabled || e.readonly || (n("update:modelValue", null), n("change", null));
    };
    return (r, c) => (a(), s("div", {
      class: $(["og-rating", { "og-rating--disabled": t.disabled, "og-rating--readonly": t.readonly }])
    }, [
      t.cancel ? (a(), s("button", {
        key: 0,
        type: "button",
        class: "og-rating__cancel",
        "aria-label": "Cancel rating",
        disabled: t.disabled || t.readonly,
        onClick: u
      }, [
        m(r.$slots, "cancelicon", {}, () => [
          c[0] || (c[0] = P("⊘", -1))
        ], !0)
      ], 8, xa)) : b("", !0),
      (a(!0), s(K, null, j(t.stars, (i) => (a(), s("button", {
        key: i,
        type: "button",
        class: $(["og-rating__star", { "og-rating__star--active": i <= (t.modelValue ?? 0) }]),
        "aria-label": `Rate ${i} stars`,
        disabled: t.disabled || t.readonly,
        onClick: (d) => o(i)
      }, [
        m(r.$slots, "item", {
          value: i,
          active: i <= (t.modelValue ?? 0)
        }, () => [
          c[1] || (c[1] = P(" ★ ", -1))
        ], !0)
      ], 10, Ta))), 128))
    ], 2));
  }
}), Sa = /* @__PURE__ */ D(La, [["__scopeId", "data-v-74f409df"]]), za = ["value", "disabled", "onInput", "onKeydown"], Ma = /* @__PURE__ */ I({
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
    const e = t, n = l, o = B([]), u = y(() => (e.modelValue || "").split("")), r = (v) => {
      const h = v.join("").substring(0, e.length);
      n("update:modelValue", h), n("change", h);
    }, c = (v, h) => {
      let _ = v.target.value;
      e.integerOnly && (_ = _.replace(/\D/g, ""));
      const O = [...u.value];
      O[h] = _, r(O), _ && h < e.length - 1 && o.value[h + 1] && o.value[h + 1].focus();
    }, i = (v, h) => {
      v.key === "Backspace" && !u.value[h] && h > 0 && o.value[h - 1] && o.value[h - 1].focus();
    }, d = (v) => {
      var _, O;
      if (v.preventDefault(), e.disabled) return;
      let f = (((_ = v.clipboardData) == null ? void 0 : _.getData("text")) || "").trim();
      if (e.integerOnly && (f = f.replace(/\D/g, "")), f) {
        const L = f.split("").slice(0, e.length);
        r(L);
        const p = Math.min(L.length, e.length - 1);
        (O = o.value[p]) == null || O.focus();
      }
    };
    return (v, h) => (a(), s("div", {
      class: $(["og-inputotp", { "og-inputotp--disabled": t.disabled }])
    }, [
      (a(!0), s(K, null, j(t.length, (f) => (a(), s("input", {
        key: f,
        ref_for: !0,
        ref_key: "inputRefs",
        ref: o,
        type: "text",
        maxlength: "1",
        value: u.value[f - 1] || "",
        disabled: t.disabled,
        class: "og-inputotp__input",
        onInput: (_) => c(_, f - 1),
        onKeydown: (_) => i(_, f - 1),
        onPaste: d
      }, null, 40, za))), 128))
    ], 2));
  }
}), Ra = /* @__PURE__ */ D(Ma, [["__scopeId", "data-v-1a3402f6"]]), Pa = {
  class: "og-menu__list",
  role: "menu"
}, Ea = {
  key: 0,
  class: "og-menu__separator",
  role: "separator"
}, Aa = ["href", "onClick"], Na = { class: "og-menu__label" }, Ka = /* @__PURE__ */ I({
  name: "OgMenu",
  __name: "OgMenu",
  props: {
    model: { default: () => [] },
    popup: { type: Boolean, default: !1 }
  },
  setup(t, { expose: l }) {
    const e = t, n = B(!1), o = B(null), u = () => {
      n.value = !n.value;
    }, r = (c, i) => {
      i.disabled || (i.command && i.command({ originalEvent: c, item: i }), e.popup && (n.value = !1));
    };
    return l({
      toggle: u
    }), (c, i) => !t.popup || n.value ? (a(), s("div", {
      key: 0,
      ref_key: "menuRef",
      ref: o,
      class: $(["og-menu", { "og-menu--popup": t.popup }])
    }, [
      g("ul", Pa, [
        (a(!0), s(K, null, j(t.model, (d, v) => (a(), s(K, { key: v }, [
          d.separator ? (a(), s("li", Ea)) : (a(), s("li", {
            key: 1,
            class: $(["og-menu__item", { "og-menu__item--disabled": d.disabled }]),
            role: "menuitem"
          }, [
            g("a", {
              href: d.url || "#",
              class: "og-menu__link",
              onClick: E((h) => r(h, d), ["prevent"])
            }, [
              d.icon ? (a(), s("span", {
                key: 0,
                class: $(["og-menu__icon", d.icon])
              }, null, 2)) : b("", !0),
              g("span", Na, C(d.label), 1)
            ], 8, Aa)
          ], 2))
        ], 64))), 128))
      ])
    ], 2)) : b("", !0);
  }
}), Fa = /* @__PURE__ */ D(Ka, [["__scopeId", "data-v-9f004ca7"]]), ja = {
  class: "og-breadcrumb",
  "aria-label": "Breadcrumb"
}, Ya = { class: "og-breadcrumb__list" }, Ga = {
  key: 0,
  class: "og-breadcrumb__item"
}, Xa = ["href"], qa = { key: 1 }, Ha = {
  key: 1,
  class: "og-breadcrumb__separator"
}, Ua = { class: "og-breadcrumb__item" }, Ja = ["href", "onClick"], Qa = {
  key: 0,
  class: "og-breadcrumb__separator"
}, Wa = /* @__PURE__ */ I({
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
    return (e, n) => (a(), s("nav", ja, [
      g("ol", Ya, [
        t.home ? (a(), s("li", Ga, [
          g("a", {
            href: t.home.url || "#",
            class: "og-breadcrumb__link",
            onClick: n[0] || (n[0] = E((o) => l(o, t.home), ["prevent"]))
          }, [
            t.home.icon ? (a(), s("span", {
              key: 0,
              class: $(["og-breadcrumb__icon", t.home.icon])
            }, null, 2)) : b("", !0),
            t.home.label ? (a(), s("span", qa, C(t.home.label), 1)) : b("", !0)
          ], 8, Xa)
        ])) : b("", !0),
        t.home && t.model.length > 0 ? (a(), s("li", Ha, [
          m(e.$slots, "separator", {}, () => [
            n[1] || (n[1] = P("/", -1))
          ], !0)
        ])) : b("", !0),
        (a(!0), s(K, null, j(t.model, (o, u) => (a(), s(K, { key: u }, [
          g("li", Ua, [
            g("a", {
              href: o.url || "#",
              class: "og-breadcrumb__link",
              onClick: E((r) => l(r, o), ["prevent"])
            }, [
              o.icon ? (a(), s("span", {
                key: 0,
                class: $(["og-breadcrumb__icon", o.icon])
              }, null, 2)) : b("", !0),
              g("span", null, C(o.label), 1)
            ], 8, Ja)
          ]),
          u < t.model.length - 1 ? (a(), s("li", Qa, [
            m(e.$slots, "separator", {}, () => [
              n[2] || (n[2] = P("/", -1))
            ], !0)
          ])) : b("", !0)
        ], 64))), 128))
      ])
    ]));
  }
}), Za = /* @__PURE__ */ D(Wa, [["__scopeId", "data-v-86bc2af1"]]), eo = ["placeholder", "disabled", "onKeydown"], to = {
  class: "og-autocomplete__list",
  role: "listbox"
}, lo = ["onClick"], ao = /* @__PURE__ */ I({
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
    const e = t, n = l, o = B(typeof e.modelValue == "string" ? e.modelValue : ""), u = B(!1), r = B(-1), c = B(null), i = B(null), d = B({}), v = (T) => {
      if (typeof T == "object" && T !== null) {
        if (e.optionLabel) return T[e.optionLabel];
        if ("label" in T) return T.label;
      }
      return String(T);
    }, h = () => {
      if (!c.value) return;
      const T = c.value.getBoundingClientRect();
      d.value = {
        position: "absolute",
        top: `${T.bottom + window.scrollY + 4}px`,
        left: `${T.left + window.scrollX}px`,
        width: `${T.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, f = (T) => {
      u.value = !0, r.value = -1, n("complete", { query: o.value }), n("update:modelValue", o.value), n("change", T), se(h);
    }, _ = (T) => {
      o.value = v(T), n("update:modelValue", T), n("select", T), u.value = !1;
    }, O = () => {
      u.value && r.value < e.suggestions.length - 1 && r.value++;
    }, L = () => {
      u.value && r.value > 0 && r.value--;
    }, p = () => {
      u.value && r.value >= 0 && r.value < e.suggestions.length && _(e.suggestions[r.value]);
    }, k = () => {
      o.value.length > 0 && e.suggestions.length > 0 && (u.value = !0, se(h));
    }, x = () => {
      setTimeout(() => {
        u.value = !1;
      }, 200);
    }, M = y(() => [
      "og-autocomplete",
      e.size ? `og-autocomplete--${e.size}` : "",
      { "og-autocomplete--disabled": e.disabled }
    ]);
    return (T, A) => (a(), s("div", {
      ref_key: "containerRef",
      ref: c,
      class: $(M.value)
    }, [
      ne(g("input", {
        "onUpdate:modelValue": A[0] || (A[0] = (w) => o.value = w),
        type: "text",
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-autocomplete__input",
        onInput: f,
        onFocus: k,
        onBlur: x,
        onKeydown: [
          X(E(O, ["prevent"]), ["down"]),
          X(E(L, ["prevent"]), ["up"]),
          X(E(p, ["prevent"]), ["enter"])
        ]
      }, null, 40, eo), [
        [ve, o.value]
      ]),
      (a(), W(oe, { to: "body" }, [
        u.value && t.suggestions.length > 0 ? (a(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: i,
          class: "og-autocomplete__overlay",
          style: Q(d.value)
        }, [
          g("ul", to, [
            (a(!0), s(K, null, j(t.suggestions, (w, z) => (a(), s("li", {
              key: z,
              class: $(["og-autocomplete__item", { "og-autocomplete__item--focused": r.value === z }]),
              role: "option",
              onClick: (R) => _(w)
            }, [
              m(T.$slots, "option", {
                item: w,
                index: z
              }, () => [
                P(C(v(w)), 1)
              ], !0)
            ], 10, lo))), 128))
          ])
        ], 4)) : b("", !0)
      ]))
    ], 2));
  }
}), oo = /* @__PURE__ */ D(ao, [["__scopeId", "data-v-8b9bbef0"]]), so = ["type", "value", "placeholder", "disabled"], no = /* @__PURE__ */ I({
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
    const e = l, n = B(!1), o = (u) => {
      const r = u.target;
      e("update:modelValue", r.value);
    };
    return (u, r) => (a(), s("div", {
      class: $(["og-password", { "og-password--invalid": t.invalid, "og-password--disabled": t.disabled }])
    }, [
      g("input", {
        type: n.value ? "text" : "password",
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: "og-password__input",
        onInput: o,
        onChange: r[0] || (r[0] = (c) => u.$emit("change", c))
      }, null, 40, so),
      t.toggleMask ? (a(), s("button", {
        key: 0,
        type: "button",
        class: "og-password__toggle",
        "aria-label": "Toggle Password Visibility",
        onClick: r[1] || (r[1] = (c) => n.value = !n.value)
      }, [
        n.value ? m(u.$slots, "hideicon", {}, () => [
          r[2] || (r[2] = P("👁", -1))
        ], !0, 0) : m(u.$slots, "showicon", {}, () => [
          r[3] || (r[3] = P("👁‍🗨", -1))
        ], !0, 1)
      ])) : b("", !0)
    ], 2));
  }
}), io = /* @__PURE__ */ D(no, [["__scopeId", "data-v-49678b27"]]), uo = ["onKeydown"], ro = { class: "og-multiselect__label" }, co = { key: 0 }, go = {
  key: 1,
  class: "og-multiselect__placeholder"
}, vo = { class: "og-multiselect__actions" }, fo = { class: "og-multiselect__icon" }, po = {
  key: 0,
  class: "og-multiselect__header"
}, bo = {
  key: 1,
  class: "og-multiselect__filter-container"
}, mo = ["placeholder"], _o = {
  class: "og-multiselect__list",
  role: "listbox",
  "aria-multiselectable": "true"
}, ho = ["aria-selected", "onClick"], yo = {
  key: 0,
  class: "og-multiselect__empty"
}, $o = {
  key: 2,
  class: "og-multiselect__footer"
}, ko = /* @__PURE__ */ I({
  name: "OgMultiSelect",
  __name: "OgMultiSelect",
  props: {
    modelValue: { default: () => [] },
    options: { default: () => [] },
    optionLabel: {},
    optionValue: {},
    placeholder: { default: "Select items" },
    filter: { type: Boolean, default: !1 },
    filterPlaceholder: { default: "Search..." },
    emptyMessage: { default: "No options found" },
    showClear: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    fluid: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, o = B(!1), u = B(""), r = B(null), c = B(null), i = B(null), d = B({}), v = (w) => {
      if (typeof w == "object" && w !== null) {
        if (e.optionLabel) return w[e.optionLabel];
        if ("label" in w) return w.label;
      }
      return String(w);
    }, h = (w) => {
      if (typeof w == "object" && w !== null) {
        if (e.optionValue) return w[e.optionValue];
        if ("value" in w) return w.value;
      }
      return w;
    }, f = (w) => {
      const z = h(w);
      return (e.modelValue || []).includes(z);
    }, _ = y(() => {
      const w = e.options || [];
      if (!e.filter || !u.value.trim())
        return w;
      const z = u.value.toLowerCase().trim();
      return w.filter((R) => v(R).toLowerCase().includes(z));
    }), O = y(() => (e.options || []).filter((w) => f(w)).map((w) => v(w))), L = (w) => {
      if (e.disabled) return;
      const z = h(w);
      let R = [...e.modelValue || []];
      R.includes(z) ? R = R.filter((q) => q !== z) : R.push(z), n("update:modelValue", R), n("change", R);
    }, p = () => {
      n("update:modelValue", []), n("change", []);
    }, k = () => {
      if (!r.value) return;
      const w = r.value.getBoundingClientRect();
      d.value = {
        position: "absolute",
        top: `${w.bottom + window.scrollY + 4}px`,
        left: `${w.left + window.scrollX}px`,
        width: `${w.width}px`,
        zIndex: "var(--og-z-dropdown)"
      };
    }, x = () => {
      e.disabled || (o.value = !o.value, o.value ? se(() => {
        k(), e.filter && i.value && i.value.focus();
      }) : u.value = "");
    }, M = () => {
      o.value = !1, u.value = "";
    }, T = (w) => {
      r.value && !r.value.contains(w.target) && c.value && !c.value.contains(w.target) && M();
    };
    U(o, (w) => {
      w ? (window.addEventListener("resize", k), window.addEventListener("scroll", k, !0)) : (window.removeEventListener("resize", k), window.removeEventListener("scroll", k, !0));
    }), ce(() => {
      document.addEventListener("click", T);
    }), te(() => {
      document.removeEventListener("click", T), window.removeEventListener("resize", k), window.removeEventListener("scroll", k, !0);
    });
    const A = y(() => [
      "og-multiselect",
      e.size ? `og-multiselect--${e.size}` : "",
      {
        "og-multiselect--open": o.value,
        "og-multiselect--invalid": e.invalid,
        "og-multiselect--fluid": e.fluid,
        "og-multiselect--disabled": e.disabled
      }
    ]);
    return (w, z) => (a(), s("div", {
      ref_key: "containerRef",
      ref: r,
      class: $(A.value)
    }, [
      g("div", {
        class: "og-multiselect__trigger",
        tabindex: "0",
        onClick: x,
        onKeydown: [
          X(E(x, ["prevent"]), ["enter"]),
          X(E(x, ["prevent"]), ["space"]),
          X(M, ["esc"])
        ]
      }, [
        g("div", ro, [
          m(w.$slots, "value", {
            value: t.modelValue,
            placeholder: t.placeholder
          }, () => [
            O.value.length > 0 ? (a(), s("span", co, C(O.value.join(", ")), 1)) : (a(), s("span", go, C(t.placeholder), 1))
          ], !0)
        ]),
        g("div", vo, [
          t.showClear && t.modelValue && t.modelValue.length > 0 && !t.disabled ? (a(), s("span", {
            key: 0,
            class: "og-multiselect__clear",
            title: "Clear selection",
            onClick: E(p, ["stop"])
          }, [
            m(w.$slots, "clearicon", {}, () => [
              z[3] || (z[3] = P("✕", -1))
            ], !0)
          ])) : b("", !0),
          g("span", fo, [
            m(w.$slots, "dropdownicon", {}, () => [
              z[4] || (z[4] = g("svg", {
                class: "og-multiselect__chevron",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                g("polyline", { points: "6 9 12 15 18 9" })
              ], -1))
            ], !0)
          ])
        ])
      ], 40, uo),
      (a(), W(oe, { to: "body" }, [
        o.value ? (a(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: c,
          class: "og-multiselect__overlay",
          style: Q(d.value),
          onClick: z[2] || (z[2] = E(() => {
          }, ["stop"]))
        }, [
          w.$slots.header ? (a(), s("div", po, [
            m(w.$slots, "header", {}, void 0, !0)
          ])) : b("", !0),
          t.filter ? (a(), s("div", bo, [
            ne(g("input", {
              ref_key: "filterInputRef",
              ref: i,
              "onUpdate:modelValue": z[0] || (z[0] = (R) => u.value = R),
              type: "text",
              class: "og-multiselect__filter-input",
              placeholder: t.filterPlaceholder,
              onClick: z[1] || (z[1] = E(() => {
              }, ["stop"]))
            }, null, 8, mo), [
              [ve, u.value]
            ])
          ])) : b("", !0),
          g("ul", _o, [
            (a(!0), s(K, null, j(_.value, (R, q) => (a(), s("li", {
              key: q,
              class: $(["og-multiselect__option", { "og-multiselect__option--selected": f(R) }]),
              role: "option",
              "aria-selected": f(R),
              onClick: (S) => L(R)
            }, [
              _e(ye, {
                "model-value": f(R),
                binary: "",
                style: { "pointer-events": "none" }
              }, null, 8, ["model-value"]),
              g("span", null, C(v(R)), 1)
            ], 10, ho))), 128)),
            _.value.length === 0 ? (a(), s("li", yo, C(t.emptyMessage), 1)) : b("", !0)
          ]),
          w.$slots.footer ? (a(), s("div", $o, [
            m(w.$slots, "footer", {}, void 0, !0)
          ])) : b("", !0)
        ], 4)) : b("", !0)
      ]))
    ], 2));
  }
}), wo = /* @__PURE__ */ D(ko, [["__scopeId", "data-v-d48cf6ea"]]), Oo = ["aria-expanded", "onKeydown"], Co = {
  key: 0,
  class: "og-datepicker__value"
}, Vo = {
  key: 1,
  class: "og-datepicker__placeholder"
}, Bo = { class: "og-datepicker__icons" }, Io = { class: "og-datepicker__header" }, Do = { class: "og-datepicker__title" }, xo = { class: "og-datepicker__month-name" }, To = { class: "og-datepicker__year-name" }, Lo = { class: "og-datepicker__weekdays" }, So = { class: "og-datepicker__days-grid" }, zo = ["disabled", "onClick"], Mo = { class: "og-datepicker__footer" }, Ro = /* @__PURE__ */ I({
  name: "OgDatePicker",
  __name: "OgDatePicker",
  props: {
    modelValue: { default: null },
    placeholder: { default: "Select a date" },
    disabled: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 },
    fluid: { type: Boolean, default: !1 },
    size: {},
    showClear: { type: Boolean, default: !0 },
    minDate: {},
    maxDate: {}
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = t, n = l, o = B(!1), u = B(null), r = B(null), c = B({}), i = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], d = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ], v = (V) => {
      if (!V) return null;
      if (V instanceof Date) return isNaN(V.getTime()) ? null : V;
      const N = String(V).split("-");
      if (N.length === 3) {
        const le = parseInt(N[0], 10), ue = parseInt(N[1], 10) - 1, ge = parseInt(N[2], 10), re = new Date(le, ue, ge);
        return isNaN(re.getTime()) ? null : re;
      }
      const Y = new Date(V);
      return isNaN(Y.getTime()) ? null : Y;
    }, h = y(() => v(e.modelValue)), f = B(/* @__PURE__ */ new Date());
    U(
      h,
      (V) => {
        V && (f.value = new Date(V.getFullYear(), V.getMonth(), 1));
      },
      { immediate: !0 }
    );
    const _ = y(() => f.value.getFullYear()), O = y(() => f.value.getMonth()), L = y(() => {
      const V = h.value;
      if (!V) return "";
      const N = V.getFullYear(), Y = String(V.getMonth() + 1).padStart(2, "0"), le = String(V.getDate()).padStart(2, "0");
      return `${N}-${Y}-${le}`;
    }), p = () => {
      f.value = new Date(_.value, O.value - 1, 1);
    }, k = () => {
      f.value = new Date(_.value, O.value + 1, 1);
    }, x = (V, N) => V.getFullYear() === N.getFullYear() && V.getMonth() === N.getMonth() && V.getDate() === N.getDate(), M = (V) => h.value ? x(V, h.value) : !1, T = (V) => !!(e.minDate && V < new Date(e.minDate.getFullYear(), e.minDate.getMonth(), e.minDate.getDate()) || e.maxDate && V > new Date(e.maxDate.getFullYear(), e.maxDate.getMonth(), e.maxDate.getDate())), A = y(() => {
      const V = _.value, N = O.value, Y = /* @__PURE__ */ new Date(), le = new Date(V, N, 1), ue = new Date(V, N + 1, 0), ge = (le.getDay() + 6) % 7, re = ue.getDate(), ie = [], $e = new Date(V, N, 0).getDate();
      for (let H = ge - 1; H >= 0; H--) {
        const Z = new Date(V, N - 1, $e - H);
        ie.push({
          date: Z,
          dayNumber: Z.getDate(),
          isCurrentMonth: !1,
          isToday: x(Z, Y)
        });
      }
      for (let H = 1; H <= re; H++) {
        const Z = new Date(V, N, H);
        ie.push({
          date: Z,
          dayNumber: H,
          isCurrentMonth: !0,
          isToday: x(Z, Y)
        });
      }
      const ke = 42 - ie.length;
      for (let H = 1; H <= ke; H++) {
        const Z = new Date(V, N + 1, H);
        ie.push({
          date: Z,
          dayNumber: H,
          isCurrentMonth: !1,
          isToday: x(Z, Y)
        });
      }
      return ie;
    }), w = (V) => {
      T(V) || e.disabled || (n("update:modelValue", V), n("change", V), G());
    }, z = () => {
      const V = /* @__PURE__ */ new Date();
      w(new Date(V.getFullYear(), V.getMonth(), V.getDate()));
    }, R = () => {
      n("update:modelValue", null), n("change", null);
    }, q = () => {
      if (!u.value) return;
      const V = u.value.getBoundingClientRect();
      c.value = {
        position: "absolute",
        top: `${V.bottom + window.scrollY + 4}px`,
        left: `${V.left + window.scrollX}px`,
        width: "18rem",
        zIndex: "var(--og-z-dropdown)"
      };
    }, S = () => {
      e.disabled || (o.value = !o.value, o.value && (h.value && (f.value = new Date(h.value.getFullYear(), h.value.getMonth(), 1)), se(q)));
    }, G = () => {
      o.value = !1;
    }, J = (V) => {
      u.value && !u.value.contains(V.target) && r.value && !r.value.contains(V.target) && G();
    };
    U(o, (V) => {
      V ? (window.addEventListener("resize", q), window.addEventListener("scroll", q, !0)) : (window.removeEventListener("resize", q), window.removeEventListener("scroll", q, !0));
    }), ce(() => {
      document.addEventListener("click", J);
    }), te(() => {
      document.removeEventListener("click", J), window.removeEventListener("resize", q), window.removeEventListener("scroll", q, !0);
    });
    const de = y(() => [
      "og-datepicker",
      e.size ? `og-datepicker--${e.size}` : "",
      {
        "og-datepicker--open": o.value,
        "og-datepicker--invalid": e.invalid,
        "og-datepicker--disabled": e.disabled,
        "og-datepicker--fluid": e.fluid
      }
    ]);
    return (V, N) => (a(), s("div", {
      ref_key: "containerRef",
      ref: u,
      class: $(de.value)
    }, [
      g("div", {
        class: "og-datepicker__trigger",
        tabindex: "0",
        "aria-expanded": o.value,
        role: "combobox",
        "aria-haspopup": "dialog",
        onClick: S,
        onKeydown: [
          X(E(S, ["prevent"]), ["enter"]),
          X(E(S, ["prevent"]), ["space"]),
          X(G, ["esc"])
        ]
      }, [
        L.value ? (a(), s("span", Co, C(L.value), 1)) : (a(), s("span", Vo, C(t.placeholder), 1)),
        g("div", Bo, [
          t.showClear && L.value && !t.disabled ? (a(), s("span", {
            key: 0,
            class: "og-datepicker__clear",
            title: "Clear date",
            onClick: E(R, ["stop"])
          }, " ✕ ")) : b("", !0),
          N[1] || (N[1] = De('<span class="og-datepicker__calendar-icon" data-v-6201130b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6201130b><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-v-6201130b></rect><line x1="16" y1="2" x2="16" y2="6" data-v-6201130b></line><line x1="8" y1="2" x2="8" y2="6" data-v-6201130b></line><line x1="3" y1="10" x2="21" y2="10" data-v-6201130b></line></svg></span>', 1))
        ])
      ], 40, Oo),
      (a(), W(oe, { to: "body" }, [
        o.value ? (a(), s("div", {
          key: 0,
          ref_key: "overlayRef",
          ref: r,
          class: "og-datepicker__overlay",
          style: Q(c.value),
          role: "dialog",
          "aria-modal": "true",
          onClick: N[0] || (N[0] = E(() => {
          }, ["stop"]))
        }, [
          g("div", Io, [
            g("button", {
              type: "button",
              class: "og-datepicker__nav-btn",
              "aria-label": "Previous Month",
              onClick: p
            }, " ‹ "),
            g("div", Do, [
              g("span", xo, C(d[O.value]), 1),
              g("span", To, C(_.value), 1)
            ]),
            g("button", {
              type: "button",
              class: "og-datepicker__nav-btn",
              "aria-label": "Next Month",
              onClick: k
            }, " › ")
          ]),
          g("div", Lo, [
            (a(), s(K, null, j(i, (Y) => g("span", {
              key: Y,
              class: "og-datepicker__weekday"
            }, C(Y), 1)), 64))
          ]),
          g("div", So, [
            (a(!0), s(K, null, j(A.value, (Y, le) => (a(), s("button", {
              key: le,
              type: "button",
              class: $([
                "og-datepicker__day",
                {
                  "og-datepicker__day--other-month": !Y.isCurrentMonth,
                  "og-datepicker__day--selected": M(Y.date),
                  "og-datepicker__day--today": Y.isToday,
                  "og-datepicker__day--disabled": T(Y.date)
                }
              ]),
              disabled: T(Y.date),
              onClick: (ue) => w(Y.date)
            }, C(Y.dayNumber), 11, zo))), 128))
          ]),
          g("div", Mo, [
            g("button", {
              type: "button",
              class: "og-datepicker__action-btn",
              onClick: z
            }, " Today "),
            L.value ? (a(), s("button", {
              key: 0,
              type: "button",
              class: "og-datepicker__action-btn og-datepicker__action-btn--clear",
              onClick: R
            }, " Clear ")) : b("", !0)
          ])
        ], 4)) : b("", !0)
      ]))
    ], 2));
  }
}), Po = /* @__PURE__ */ D(Ro, [["__scopeId", "data-v-6201130b"]]), Eo = ["value", "disabled"], Ao = /* @__PURE__ */ I({
  name: "OgColorPicker",
  __name: "OgColorPicker",
  props: {
    modelValue: { default: "#0f172a" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: l }) {
    const e = l, n = (o) => {
      const u = o.target;
      e("update:modelValue", u.value), e("change", o);
    };
    return (o, u) => (a(), s("div", {
      class: $(["og-colorpicker", { "og-colorpicker--disabled": t.disabled }])
    }, [
      g("input", {
        type: "color",
        value: t.modelValue,
        disabled: t.disabled,
        class: "og-colorpicker__input",
        onInput: n
      }, null, 40, Eo)
    ], 2));
  }
}), No = /* @__PURE__ */ D(Ao, [["__scopeId", "data-v-8b5a7233"]]), Ko = {
  class: "og-listbox__list",
  role: "listbox"
}, Fo = ["aria-selected", "onClick"], jo = /* @__PURE__ */ I({
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
    const e = t, n = l, o = (i) => {
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
    return (i, d) => (a(), s("div", {
      class: $(["og-listbox", { "og-listbox--disabled": t.disabled }])
    }, [
      g("ul", Ko, [
        (a(!0), s(K, null, j(t.options, (v, h) => (a(), s("li", {
          key: h,
          class: $(["og-listbox__option", { "og-listbox__option--selected": r(v) }]),
          role: "option",
          "aria-selected": r(v),
          onClick: (f) => c(v)
        }, [
          m(i.$slots, "option", {
            option: v,
            index: h
          }, () => [
            P(C(o(v)), 1)
          ], !0)
        ], 10, Fo))), 128))
      ])
    ], 2));
  }
}), Yo = /* @__PURE__ */ D(jo, [["__scopeId", "data-v-c053ef77"]]), Go = ["disabled", "onClick"], Xo = /* @__PURE__ */ I({
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
    const e = t, n = l, o = (i) => {
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
        let v = Array.isArray(e.modelValue) ? [...e.modelValue] : [];
        v.includes(d) ? v = v.filter((h) => h !== d) : v.push(d), n("update:modelValue", v), n("change", v);
      } else
        n("update:modelValue", d), n("change", d);
    };
    return (i, d) => (a(), s("div", {
      class: $(["og-selectbutton", { "og-selectbutton--disabled": t.disabled }])
    }, [
      (a(!0), s(K, null, j(t.options, (v, h) => (a(), s("button", {
        key: h,
        type: "button",
        class: $(["og-selectbutton__btn", { "og-selectbutton__btn--active": r(v) }]),
        disabled: t.disabled,
        onClick: (f) => c(v)
      }, [
        m(i.$slots, "option", {
          option: v,
          index: h
        }, () => [
          P(C(o(v)), 1)
        ], !0)
      ], 10, Go))), 128))
    ], 2));
  }
}), qo = /* @__PURE__ */ D(Xo, [["__scopeId", "data-v-42050f87"]]), Ho = ["disabled"], Uo = { class: "og-togglebutton__label" }, Jo = /* @__PURE__ */ I({
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
    const e = t, n = l, o = y(() => e.modelValue ? e.onLabel : e.offLabel), u = y(() => e.modelValue ? e.onIcon : e.offIcon), r = (c) => {
      e.disabled || (n("update:modelValue", !e.modelValue), n("change", c));
    };
    return (c, i) => (a(), s("button", {
      type: "button",
      class: $(["og-togglebutton", { "og-togglebutton--checked": t.modelValue, "og-togglebutton--disabled": t.disabled }]),
      disabled: t.disabled,
      onClick: r
    }, [
      u.value ? (a(), s("span", {
        key: 0,
        class: $(["og-togglebutton__icon", u.value])
      }, null, 2)) : b("", !0),
      g("span", Uo, C(o.value), 1)
    ], 10, Ho));
  }
}), Qo = /* @__PURE__ */ D(Jo, [["__scopeId", "data-v-bf6a463d"]]), Wo = { class: "og-floatlabel" }, Zo = /* @__PURE__ */ I({
  name: "OgFloatLabel",
  __name: "OgFloatLabel",
  setup(t) {
    return (l, e) => (a(), s("div", Wo, [
      m(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), es = /* @__PURE__ */ D(Zo, [["__scopeId", "data-v-2c438c2c"]]), ts = { class: "og-inputgroup" }, ls = /* @__PURE__ */ I({
  name: "OgInputGroup",
  __name: "OgInputGroup",
  setup(t) {
    return (l, e) => (a(), s("div", ts, [
      m(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), as = /* @__PURE__ */ D(ls, [["__scopeId", "data-v-8c486269"]]), os = { class: "og-inputgroupaddon" }, ss = /* @__PURE__ */ I({
  name: "OgInputGroupAddon",
  __name: "OgInputGroupAddon",
  setup(t) {
    return (l, e) => (a(), s("div", os, [
      m(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ns = /* @__PURE__ */ D(ss, [["__scopeId", "data-v-bcac245e"]]), is = { class: "og-panel" }, ds = { class: "og-panel__title" }, us = {
  key: 0,
  type: "button",
  class: "og-panel__toggle",
  "aria-label": "Toggle Panel"
}, rs = { class: "og-panel__content" }, cs = {
  key: 1,
  class: "og-panel__footer"
}, gs = /* @__PURE__ */ I({
  name: "OgPanel",
  __name: "OgPanel",
  props: {
    header: {},
    toggleable: { type: Boolean, default: !1 },
    collapsed: { type: Boolean, default: !1 }
  },
  emits: ["update:collapsed", "toggle"],
  setup(t, { emit: l }) {
    const e = t, n = l, o = B(e.collapsed);
    U(
      () => e.collapsed,
      (r) => {
        o.value = r;
      }
    );
    const u = (r) => {
      e.toggleable && (o.value = !o.value, n("update:collapsed", o.value), n("toggle", { originalEvent: new CustomEvent("toggle"), collapsed: o.value }));
    };
    return (r, c) => (a(), s("div", is, [
      t.header || r.$slots.header || t.toggleable ? (a(), s("div", {
        key: 0,
        class: "og-panel__header",
        onClick: c[0] || (c[0] = (i) => t.toggleable && u())
      }, [
        m(r.$slots, "header", {}, () => [
          g("span", ds, C(t.header), 1)
        ], !0),
        t.toggleable ? (a(), s("button", us, C(o.value ? "+" : "−"), 1)) : b("", !0)
      ])) : b("", !0),
      ne(g("div", rs, [
        m(r.$slots, "default", {}, void 0, !0)
      ], 512), [
        [pe, !o.value]
      ]),
      r.$slots.footer ? (a(), s("div", cs, [
        m(r.$slots, "footer", {}, void 0, !0)
      ])) : b("", !0)
    ]));
  }
}), vs = /* @__PURE__ */ D(gs, [["__scopeId", "data-v-f1e8c9a5"]]), fs = {
  class: "og-toolbar",
  role: "toolbar"
}, ps = {
  key: 0,
  class: "og-toolbar__start"
}, bs = {
  key: 1,
  class: "og-toolbar__center"
}, ms = {
  key: 2,
  class: "og-toolbar__end"
}, _s = /* @__PURE__ */ I({
  name: "OgToolbar",
  __name: "OgToolbar",
  setup(t) {
    return (l, e) => (a(), s("div", fs, [
      l.$slots.start ? (a(), s("div", ps, [
        m(l.$slots, "start", {}, void 0, !0)
      ])) : b("", !0),
      l.$slots.center ? (a(), s("div", bs, [
        m(l.$slots, "center", {}, void 0, !0)
      ])) : b("", !0),
      l.$slots.end ? (a(), s("div", ms, [
        m(l.$slots, "end", {}, void 0, !0)
      ])) : b("", !0)
    ]));
  }
}), hs = /* @__PURE__ */ D(_s, [["__scopeId", "data-v-dbb68d11"]]), ys = /* @__PURE__ */ I({
  name: "OgSplitter",
  __name: "OgSplitter",
  props: {
    layout: { default: "horizontal" }
  },
  setup(t) {
    return (l, e) => (a(), s("div", {
      class: $(["og-splitter", `og-splitter--${t.layout}`])
    }, [
      m(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), $s = /* @__PURE__ */ D(ys, [["__scopeId", "data-v-de819503"]]), ks = { class: "og-splitter-panel" }, ws = /* @__PURE__ */ I({
  name: "OgSplitterPanel",
  __name: "OgSplitterPanel",
  setup(t) {
    return (l, e) => (a(), s("div", ks, [
      m(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Os = /* @__PURE__ */ D(ws, [["__scopeId", "data-v-802e3f15"]]), Cs = {
  class: "og-tree__node",
  role: "treeitem"
}, Vs = {
  key: 0,
  class: "og-tree__toggler"
}, Bs = {
  key: 1,
  class: "og-tree__toggler-placeholder"
}, Is = { class: "og-tree__label" }, Ds = {
  key: 0,
  class: "og-tree__sublist"
}, xs = /* @__PURE__ */ I({
  name: "OgTreeNode",
  __name: "OgTreeNode",
  props: {
    node: {},
    expandedKeys: {}
  },
  emits: ["toggle"],
  setup(t, { emit: l }) {
    const e = t, n = l, o = y(() => e.node.key || e.node.label || ""), u = y(() => !!e.expandedKeys[o.value]), r = () => {
      e.node.children && e.node.children.length > 0 && n("toggle", o.value);
    };
    return (c, i) => {
      const d = xe("OgTreeNode", !0);
      return a(), s("li", Cs, [
        g("div", {
          class: "og-tree__content",
          onClick: r
        }, [
          t.node.children && t.node.children.length > 0 ? (a(), s("span", Vs, C(u.value ? "▼" : "►"), 1)) : (a(), s("span", Bs)),
          t.node.icon ? (a(), s("span", {
            key: 2,
            class: $(["og-tree__icon", t.node.icon])
          }, null, 2)) : b("", !0),
          g("span", Is, C(t.node.label), 1)
        ]),
        t.node.children && t.node.children.length > 0 && u.value ? (a(), s("ul", Ds, [
          (a(!0), s(K, null, j(t.node.children, (v) => (a(), W(d, {
            key: v.key || v.label,
            node: v,
            "expanded-keys": t.expandedKeys,
            onToggle: i[0] || (i[0] = (h) => n("toggle", h))
          }, null, 8, ["node", "expanded-keys"]))), 128))
        ])) : b("", !0)
      ]);
    };
  }
}), Ts = /* @__PURE__ */ D(xs, [["__scopeId", "data-v-d6b5bfeb"]]), Ls = { class: "og-tree" }, Ss = {
  class: "og-tree__list",
  role: "tree"
}, zs = /* @__PURE__ */ I({
  name: "OgTree",
  __name: "OgTree",
  props: {
    value: { default: () => [] }
  },
  setup(t) {
    const l = B({}), e = (n) => {
      l.value[n] = !l.value[n];
    };
    return (n, o) => (a(), s("div", Ls, [
      g("ul", Ss, [
        (a(!0), s(K, null, j(t.value, (u) => (a(), W(Ts, {
          key: u.key || u.label,
          node: u,
          "expanded-keys": l.value,
          onToggle: e
        }, null, 8, ["node", "expanded-keys"]))), 128))
      ])
    ]));
  }
}), Ms = /* @__PURE__ */ D(zs, [["__scopeId", "data-v-44dcce2c"]]), Rs = { class: "og-stepper" }, Ps = { class: "og-stepper__header" }, Es = ["onClick"], As = { class: "og-stepper__number" }, Ns = { class: "og-stepper__title" }, Ks = { class: "og-stepper__content" }, Fs = /* @__PURE__ */ I({
  name: "OgStepper",
  __name: "OgStepper",
  props: {
    value: { default: 1 },
    steps: { default: () => ["Step 1", "Step 2", "Step 3"] }
  },
  emits: ["update:value"],
  setup(t, { emit: l }) {
    const e = t, n = l, o = B(e.value);
    U(
      () => e.value,
      (r) => {
        o.value = r;
      }
    );
    const u = (r) => {
      o.value = r, n("update:value", r);
    };
    return fe("ogStepper", { activeStep: o, setStep: u }), (r, c) => (a(), s("div", Rs, [
      g("div", Ps, [
        (a(!0), s(K, null, j(t.steps, (i, d) => (a(), s("button", {
          key: d,
          type: "button",
          class: $(["og-stepper__step-btn", { "og-stepper__step-btn--active": o.value === d + 1 }]),
          onClick: (v) => u(d + 1)
        }, [
          g("span", As, C(d + 1), 1),
          g("span", Ns, C(i), 1)
        ], 10, Es))), 128))
      ]),
      g("div", Ks, [
        m(r.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), js = /* @__PURE__ */ D(Fs, [["__scopeId", "data-v-f1256a42"]]), Ys = {
  mounted(t, l) {
    t.setAttribute("title", l.value || "");
  },
  updated(t, l) {
    t.setAttribute("title", l.value || "");
  }
}, Gs = {
  mounted(t) {
    t.style.position = "relative", t.style.overflow = "hidden";
  }
};
function Hs(t = {}) {
  const l = B(t.visible ?? !1), e = () => {
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
const Xs = {
  OgButton: ze,
  OgInputText: Pe,
  OgTextarea: Ne,
  OgCheckbox: ye,
  OgRadioButton: Ue,
  OgToggleSwitch: et,
  OgInputNumber: ct,
  OgSelect: Bt,
  OgCard: Mt,
  OgDialog: Kt,
  OgToast: Zt,
  OgDataTable: yl,
  OgColumn: $l,
  OgAvatar: Cl,
  OgBadge: Bl,
  OgProgressBar: Ll,
  OgSkeleton: zl,
  OgDivider: Pl,
  OgAccordion: Nl,
  OgAccordionTab: Xl,
  OgTabs: Zl,
  OgTabPanel: la,
  OgTag: sa,
  OgChip: ra,
  OgMessage: ha,
  OgDrawer: Ca,
  OgSlider: Da,
  OgRating: Sa,
  OgInputOtp: Ra,
  OgMenu: Fa,
  OgBreadcrumb: Za,
  OgAutoComplete: oo,
  OgPassword: io,
  OgMultiSelect: wo,
  OgDatePicker: Po,
  OgColorPicker: No,
  OgListbox: Yo,
  OgSelectButton: qo,
  OgToggleButton: Qo,
  OgFloatLabel: es,
  OgInputGroup: as,
  OgInputGroupAddon: ns,
  OgPanel: vs,
  OgToolbar: hs,
  OgSplitter: $s,
  OgSplitterPanel: Os,
  OgTree: Ms,
  OgStepper: js
}, Us = {
  install(t) {
    Object.entries(Xs).forEach(([l, e]) => {
      t.component(l, e);
    }), t.directive("og-tooltip", Ys), t.directive("og-ripple", Gs);
  }
};
export {
  Nl as OgAccordion,
  Xl as OgAccordionTab,
  oo as OgAutoComplete,
  Cl as OgAvatar,
  Bl as OgBadge,
  Za as OgBreadcrumb,
  ze as OgButton,
  Mt as OgCard,
  ye as OgCheckbox,
  ra as OgChip,
  No as OgColorPicker,
  $l as OgColumn,
  yl as OgDataTable,
  Po as OgDatePicker,
  Kt as OgDialog,
  Pl as OgDivider,
  Ca as OgDrawer,
  es as OgFloatLabel,
  as as OgInputGroup,
  ns as OgInputGroupAddon,
  ct as OgInputNumber,
  Ra as OgInputOtp,
  Pe as OgInputText,
  Yo as OgListbox,
  Fa as OgMenu,
  ha as OgMessage,
  wo as OgMultiSelect,
  vs as OgPanel,
  io as OgPassword,
  Ll as OgProgressBar,
  Ue as OgRadioButton,
  Sa as OgRating,
  Bt as OgSelect,
  qo as OgSelectButton,
  zl as OgSkeleton,
  Da as OgSlider,
  $s as OgSplitter,
  Os as OgSplitterPanel,
  js as OgStepper,
  la as OgTabPanel,
  Zl as OgTabs,
  sa as OgTag,
  Ne as OgTextarea,
  Zt as OgToast,
  Qo as OgToggleButton,
  et as OgToggleSwitch,
  hs as OgToolbar,
  Ms as OgTree,
  Ts as OgTreeNode,
  Us as OptimusGUI,
  Us as default,
  el as useDataTable,
  Hs as useDialog,
  gt as useSelect,
  Ft as useToast,
  Gs as vOgRipple,
  Ys as vOgTooltip
};
