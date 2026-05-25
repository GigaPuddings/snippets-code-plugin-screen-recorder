import { i as yi, w as Nn, l as Eu, a as Tu, b as Ou, c as we, d as Iu, e as Fr, B as $u, h as zr, f as _r, g as wi, j as Au, k as Ce, m as Pu, t as Ru, n as fe, o as Mu, p as Lu, q as xu, r as be, s as Vr, u as pe, v as _i, x as Nu, N as Et, y as ku, z as Du, A as Ee, C as re, D as A, E as y, F as c, G as Hr, H as Bu, I as Si, J as on, K as Wr, L as ge, M as Z, O as Fu, P as jr, Q as Pa, R as qe, S as z, T as B, U as _, V as G, W as Ht, X as R, Y as nt, Z as Ur, _ as zu, $ as Kr, a0 as W, a1 as ze, a2 as M, a3 as K, a4 as H, a5 as Me, a6 as X, a7 as Y, a8 as ve, a9 as st, aa as $e, ab as Wt, ac as Vu, ad as Hu, ae as Wu, af as Ci, ag as ju, ah as Uu, ai as Ku, aj as Gu, ak as ct, al as qu, am as Yu, an as Gr, ao as Zu, ap as Xt, aq as Xu, ar as Jn, as as Ju, at as Qu, au as Qn } from "./runtime-entry-Bo-Tw_vw.js";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Sr;
const Ra = typeof window < "u" && window.trustedTypes;
if (Ra)
  try {
    Sr = /* @__PURE__ */ Ra.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Nn(`Error creating trusted types policy: ${e}`);
  }
const Ei = Sr ? (e) => Sr.createHTML(e) : (e) => e, ec = "http://www.w3.org/2000/svg", tc = "http://www.w3.org/1998/Math/MathML", wt = typeof document < "u" ? document : null, Ma = wt && /* @__PURE__ */ wt.createElement("template"), nc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? wt.createElementNS(ec, e) : t === "mathml" ? wt.createElementNS(tc, e) : n ? wt.createElement(e, { is: n }) : wt.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => wt.createTextNode(e),
  createComment: (e) => wt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => wt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const a = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      Ma.innerHTML = Ei(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Ma.content;
      if (o === "svg" || o === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, xt = "transition", zn = "animation", eo = Symbol("_vtc"), Ti = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, oc = /* @__PURE__ */ Fr(
  {},
  $u,
  Ti
), rc = (e) => (e.displayName = "Transition", e.props = oc, e), cn = /* @__PURE__ */ rc(
  (e, { slots: t }) => wi(Au, ac(e), t)
), Jt = (e, t = []) => {
  we(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, La = (e) => e ? we(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ac(e) {
  const t = {};
  for (const P in e)
    P in Ti || (t[P] = e[P]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: a = `${n}-enter-active`,
    enterToClass: i = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: u = a,
    appearToClass: p = i,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: v = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, d = sc(r), h = d && d[0], b = d && d[1], {
    onBeforeEnter: m,
    onEnter: C,
    onEnterCancelled: I,
    onLeave: $,
    onLeaveCancelled: S,
    onBeforeAppear: T = m,
    onAppear: E = C,
    onAppearCancelled: F = I
  } = t, O = (P, j, ae, J) => {
    P._enterCancelled = J, Qt(P, j ? p : i), Qt(P, j ? u : a), ae && ae();
  }, V = (P, j) => {
    P._isLeaving = !1, Qt(P, f), Qt(P, g), Qt(P, v), j && j();
  }, N = (P) => (j, ae) => {
    const J = P ? E : C, Q = () => O(j, P, ae);
    Jt(J, [j, Q]), xa(() => {
      Qt(j, P ? l : s), bt(j, P ? p : i), La(J) || Na(j, o, h, Q);
    });
  };
  return Fr(t, {
    onBeforeEnter(P) {
      Jt(m, [P]), bt(P, s), bt(P, a);
    },
    onBeforeAppear(P) {
      Jt(T, [P]), bt(P, l), bt(P, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(P, j) {
      P._isLeaving = !0;
      const ae = () => V(P, j);
      bt(P, f), P._enterCancelled ? (bt(P, v), Ba()) : (Ba(), bt(P, v)), xa(() => {
        P._isLeaving && (Qt(P, f), bt(P, g), La($) || Na(P, o, b, ae));
      }), Jt($, [P, ae]);
    },
    onEnterCancelled(P) {
      O(P, !1, void 0, !0), Jt(I, [P]);
    },
    onAppearCancelled(P) {
      O(P, !0, void 0, !0), Jt(F, [P]);
    },
    onLeaveCancelled(P) {
      V(P), Jt(S, [P]);
    }
  });
}
function sc(e) {
  if (e == null)
    return null;
  if (Ce(e))
    return [ar(e.enter), ar(e.leave)];
  {
    const t = ar(e);
    return [t, t];
  }
}
function ar(e) {
  const t = Ru(e);
  return process.env.NODE_ENV !== "production" && Pu(t, "<transition> explicit duration"), t;
}
function bt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[eo] || (e[eo] = /* @__PURE__ */ new Set())).add(t);
}
function Qt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[eo];
  n && (n.delete(t), n.size || (e[eo] = void 0));
}
function xa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ic = 0;
function Na(e, t, n, o) {
  const r = e._endId = ++ic, s = () => {
    r === e._endId && o();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = lc(e, t);
  if (!a)
    return o();
  const u = a + "end";
  let p = 0;
  const f = () => {
    e.removeEventListener(u, v), s();
  }, v = (g) => {
    g.target === e && ++p >= l && f();
  };
  setTimeout(() => {
    p < l && f();
  }, i + 1), e.addEventListener(u, v);
}
function lc(e, t) {
  const n = window.getComputedStyle(e), o = (d) => (n[d] || "").split(", "), r = o(`${xt}Delay`), s = o(`${xt}Duration`), a = ka(r, s), i = o(`${zn}Delay`), l = o(`${zn}Duration`), u = ka(i, l);
  let p = null, f = 0, v = 0;
  t === xt ? a > 0 && (p = xt, f = a, v = s.length) : t === zn ? u > 0 && (p = zn, f = u, v = l.length) : (f = Math.max(a, u), p = f > 0 ? a > u ? xt : zn : null, v = p ? p === xt ? s.length : l.length : 0);
  const g = p === xt && /\b(transform|all)(,|$)/.test(
    o(`${xt}Property`).toString()
  );
  return {
    type: p,
    timeout: f,
    propCount: v,
    hasTransform: g
  };
}
function ka(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Da(n) + Da(e[o])));
}
function Da(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ba() {
  return document.body.offsetHeight;
}
function uc(e, t, n) {
  const o = e[eo];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ao = Symbol("_vod"), Oi = Symbol("_vsh"), rt = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ao] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Vn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Vn(e, !0), o.enter(e)) : o.leave(e, () => {
      Vn(e, !1);
    }) : Vn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Vn(e, t);
  }
};
process.env.NODE_ENV !== "production" && (rt.name = "show");
function Vn(e, t) {
  e.style.display = t ? e[Ao] : "none", e[Oi] = !t;
}
const cc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), dc = /(^|;)\s*display\s*:/;
function fc(e, t, n) {
  const o = e.style, r = be(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (be(t))
        for (const a of t.split(";")) {
          const i = a.slice(0, a.indexOf(":")).trim();
          n[i] == null && To(o, i, "");
        }
      else
        for (const a in t)
          n[a] == null && To(o, a, "");
    for (const a in n)
      a === "display" && (s = !0), To(o, a, n[a]);
  } else if (r) {
    if (t !== n) {
      const a = o[cc];
      a && (n += ";" + a), o.cssText = n, s = dc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ao in e && (e[Ao] = s ? o.display : "", e[Oi] && (o.display = "none"));
}
const pc = /[^\\];\s*$/, Fa = /\s*!important$/;
function To(e, t, n) {
  if (we(n))
    n.forEach((o) => To(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && pc.test(n) && Nn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = vc(e, t);
    Fa.test(n) ? e.setProperty(
      zr(o),
      n.replace(Fa, ""),
      "important"
    ) : e[o] = n;
  }
}
const za = ["Webkit", "Moz", "ms"], sr = {};
function vc(e, t) {
  const n = sr[t];
  if (n)
    return n;
  let o = Vr(t);
  if (o !== "filter" && o in e)
    return sr[t] = o;
  o = ku(o);
  for (let r = 0; r < za.length; r++) {
    const s = za[r] + o;
    if (s in e)
      return sr[t] = s;
  }
  return t;
}
const Va = "http://www.w3.org/1999/xlink";
function Ha(e, t, n, o, r, s = xu(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Va, t.slice(6, t.length)) : e.setAttributeNS(Va, t, n) : n == null || s && !_i(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Nu(n) ? String(n) : n
  );
}
function Wa(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ei(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const i = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (i !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = _i(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch (i) {
    process.env.NODE_ENV !== "production" && !a && Nn(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      i
    );
  }
  a && e.removeAttribute(r || t);
}
function tn(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function hc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ja = Symbol("_vei");
function gc(e, t, n, o, r = null) {
  const s = e[ja] || (e[ja] = {}), a = s[t];
  if (o && a)
    a.value = process.env.NODE_ENV !== "production" ? Ka(o, t) : o;
  else {
    const [i, l] = mc(t);
    if (o) {
      const u = s[t] = wc(
        process.env.NODE_ENV !== "production" ? Ka(o, t) : o,
        r
      );
      tn(e, i, u, l);
    } else a && (hc(e, i, a, l), s[t] = void 0);
  }
}
const Ua = /(?:Once|Passive|Capture)$/;
function mc(e) {
  let t;
  if (Ua.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ua); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : zr(e.slice(2)), t];
}
let ir = 0;
const bc = /* @__PURE__ */ Promise.resolve(), yc = () => ir || (bc.then(() => ir = 0), ir = Date.now());
function wc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Du(
      _c(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = yc(), n;
}
function Ka(e, t) {
  return pe(e) || we(e) ? e : (Nn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Et);
}
function _c(e, t) {
  if (we(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const Ga = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Sc = (e, t, n, o, r, s) => {
  const a = r === "svg";
  t === "class" ? uc(e, o, a) : t === "style" ? fc(e, n, o) : Mu(t) ? Lu(t) || gc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cc(e, t, o, a)) ? (Wa(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ha(e, t, o, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !be(o)) ? Wa(e, Vr(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ha(e, t, o, a));
};
function Cc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ga(t) && pe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ga(t) && be(n) ? !1 : t in e;
}
const Po = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return we(t) ? (n) => Ou(t, n) : t;
};
function Ec(e) {
  e.target.composing = !0;
}
function qa(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const On = Symbol("_assign"), Tc = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[On] = Po(r);
    const s = o || r.props && r.props.type === "number";
    tn(e, t ? "change" : "input", (a) => {
      if (a.target.composing) return;
      let i = e.value;
      n && (i = i.trim()), s && (i = _r(i)), e[On](i);
    }), n && tn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (tn(e, "compositionstart", Ec), tn(e, "compositionend", qa), tn(e, "change", qa));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: s } }, a) {
    if (e[On] = Po(a), e.composing) return;
    const i = (s || e.type === "number") && !/^0\d/.test(e.value) ? _r(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === l) || (e.value = l));
  }
}, Ya = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = yi(t);
    tn(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? _r(Ro(a)) : Ro(a)
      );
      e[On](
        e.multiple ? r ? new Set(s) : s : s[0]
      ), e._assigning = !0, fe(() => {
        e._assigning = !1;
      });
    }), e[On] = Po(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Za(e, t);
  },
  beforeUpdate(e, t, n) {
    e[On] = Po(n);
  },
  updated(e, { value: t }) {
    e._assigning || Za(e, t);
  }
};
function Za(e, t) {
  const n = e.multiple, o = we(t);
  if (n && !o && !yi(t)) {
    process.env.NODE_ENV !== "production" && Nn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, s = e.options.length; r < s; r++) {
    const a = e.options[r], i = Ro(a);
    if (n)
      if (o) {
        const l = typeof i;
        l === "string" || l === "number" ? a.selected = t.some((u) => String(u) === String(i)) : a.selected = Eu(t, i) > -1;
      } else
        a.selected = t.has(i);
    else if (Tu(Ro(a), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Ro(e) {
  return "_value" in e ? e._value : e.value;
}
const Oc = ["ctrl", "shift", "alt", "meta"], Ic = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Oc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Te = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = Ic[t[a]];
      if (i && i(r, t)) return;
    }
    return e(r, ...s);
  });
}, $c = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Hn = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = zr(r.key);
    if (t.some(
      (a) => a === s || $c[a] === s
    ))
      return e(r);
  });
}, Ac = /* @__PURE__ */ Fr({ patchProp: Sc }, nc);
let Xa;
function Pc() {
  return Xa || (Xa = Iu(Ac));
}
const Mo = (...e) => {
  Pc().render(...e);
};
function Rc(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Mc(e, t, n, o, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Oo;
const Ye = "__TAURI_TO_IPC_KEY__";
function Lc(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function L(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class xc {
  get rid() {
    return Rc(this, Oo, "f");
  }
  constructor(t) {
    Oo.set(this, void 0), Mc(this, Oo, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return L("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Oo = /* @__PURE__ */ new WeakMap();
class Ii {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.width = t[0].Logical.width, this.height = t[0].Logical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the logical size to a physical one.
   * @example
   * ```typescript
   * import { LogicalSize } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = new LogicalSize(400, 500);
   * const physical = size.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new Un(this.width * t, this.height * t);
  }
  [Ye]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ye]();
  }
}
class Un {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.width = t[0].Physical.width, this.height = t[0].Physical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the physical size to a logical one.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = await appWindow.innerSize(); // PhysicalSize
   * const logical = size.toLogical(factor);
   * ```
   */
  toLogical(t) {
    return new Ii(this.width / t, this.height / t);
  }
  [Ye]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ye]();
  }
}
class _n {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ii ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Un ? this.size : this.size.toPhysical(t);
  }
  [Ye]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Ye]();
  }
}
class $i {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.x = t[0].Logical.x, this.y = t[0].Logical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the logical position to a physical one.
   * @example
   * ```typescript
   * import { LogicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new LogicalPosition(400, 500);
   * const physical = position.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new Dt(this.x * t, this.y * t);
  }
  [Ye]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ye]();
  }
}
class Dt {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.x = t[0].Physical.x, this.y = t[0].Physical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the physical position to a logical one.
   * @example
   * ```typescript
   * import { PhysicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new PhysicalPosition(400, 500);
   * const physical = position.toLogical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toLogical(t) {
    return new $i(this.x / t, this.y / t);
  }
  [Ye]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ye]();
  }
}
class go {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof $i ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Dt ? this.position : this.position.toPhysical(t);
  }
  [Ye]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Ye]();
  }
}
var Be;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Be || (Be = {}));
async function Ai(e, t) {
  await L("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Pi(e, t, n) {
  var o;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return L("plugin:event|listen", {
    event: e,
    target: r,
    handler: Lc(t)
  }).then((s) => async () => Ai(e, s));
}
async function Nc(e, t, n) {
  return Pi(e, (o) => {
    Ai(e, o.id), t(o);
  }, n);
}
async function kc(e, t) {
  await L("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Dc(e, t, n) {
  await L("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Kn extends xc {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, o) {
    return L("plugin:image|new", {
      rgba: Lo(t),
      width: n,
      height: o
    }).then((r) => new Kn(r));
  }
  /**
   * Creates a new image using the provided bytes by inferring the file format.
   * If the format is known, prefer [@link Image.fromPngBytes] or [@link Image.fromIcoBytes].
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromBytes(t) {
    return L("plugin:image|from_bytes", {
      bytes: Lo(t)
    }).then((n) => new Kn(n));
  }
  /**
   * Creates a new image using the provided path.
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromPath(t) {
    return L("plugin:image|from_path", { path: t }).then((n) => new Kn(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return L("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return L("plugin:image|size", { rid: this.rid });
  }
}
function Lo(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Kn ? e.rid : e;
}
var Cr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Cr || (Cr = {}));
class Bc {
  constructor(t) {
    this._preventDefault = !1, this.event = t.event, this.id = t.id;
  }
  preventDefault() {
    this._preventDefault = !0;
  }
  isPreventDefault() {
    return this._preventDefault;
  }
}
var Ja;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ja || (Ja = {}));
function Ri() {
  return new Mi(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function lr() {
  return L("plugin:window|get_all_windows").then((e) => e.map((t) => new Mi(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ur = ["tauri://created", "tauri://error"];
class Mi {
  /**
   * Creates a new Window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const appWindow = new Window('my-label');
   * appWindow.once('tauri://created', function () {
   *  // window successfully created
   * });
   * appWindow.once('tauri://error', function (e) {
   *  // an error happened creating the window
   * });
   * ```
   *
   * @param label The unique window label. Must be alphanumeric: `a-zA-Z-/:_`.
   * @returns The {@link Window} instance to communicate with the window.
   */
  constructor(t, n = {}) {
    var o;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || L("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (r) => this.emit("tauri://error", r));
  }
  /**
   * Gets the Window associated with the given label.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const mainWindow = Window.getByLabel('main');
   * ```
   *
   * @param label The window label.
   * @returns The Window instance to communicate with the window or null if the window doesn't exist.
   */
  static async getByLabel(t) {
    var n;
    return (n = (await lr()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ri();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return lr();
  }
  /**
   *  Gets the focused window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const focusedWindow = Window.getFocusedWindow();
   * ```
   *
   * @returns The Window instance or `undefined` if there is not any focused window.
   */
  static async getFocusedWindow() {
    for (const t of await lr())
      if (await t.isFocused())
        return t;
    return null;
  }
  /**
   * Listen to an emitted event on this window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().listen<string>('state-changed', (event) => {
   *   console.log(`Got error: ${payload}`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async listen(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : Pi(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Listen to an emitted event on this window only once.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().once<null>('initialized', (event) => {
   *   console.log(`Window initialized!`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async once(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : Nc(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Emits an event to all {@link EventTarget|targets}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emit(t, n) {
    if (ur.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return kc(t, n);
  }
  /**
   * Emits an event to all {@link EventTarget|targets} matching the given target.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('main', 'window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   * @param target Label of the target Window/Webview/WebviewWindow or raw {@link EventTarget} object.
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emitTo(t, n, o) {
    if (ur.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Dc(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return ur.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
  }
  // Getters
  /**
   * The scale factor that can be used to map physical pixels to logical pixels.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const factor = await getCurrentWindow().scaleFactor();
   * ```
   *
   * @returns The window's monitor scale factor.
   */
  async scaleFactor() {
    return L("plugin:window|scale_factor", {
      label: this.label
    });
  }
  /**
   * The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().innerPosition();
   * ```
   *
   * @returns The window's inner position.
   */
  async innerPosition() {
    return L("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Dt(t));
  }
  /**
   * The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().outerPosition();
   * ```
   *
   * @returns The window's outer position.
   */
  async outerPosition() {
    return L("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Dt(t));
  }
  /**
   * The physical size of the window's client area.
   * The client area is the content of the window, excluding the title bar and borders.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().innerSize();
   * ```
   *
   * @returns The window's inner size.
   */
  async innerSize() {
    return L("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Un(t));
  }
  /**
   * The physical size of the entire window.
   * These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().outerSize();
   * ```
   *
   * @returns The window's outer size.
   */
  async outerSize() {
    return L("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Un(t));
  }
  /**
   * Gets the window's current fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const fullscreen = await getCurrentWindow().isFullscreen();
   * ```
   *
   * @returns Whether the window is in fullscreen mode or not.
   */
  async isFullscreen() {
    return L("plugin:window|is_fullscreen", {
      label: this.label
    });
  }
  /**
   * Gets the window's current minimized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimized = await getCurrentWindow().isMinimized();
   * ```
   */
  async isMinimized() {
    return L("plugin:window|is_minimized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximized = await getCurrentWindow().isMaximized();
   * ```
   *
   * @returns Whether the window is maximized or not.
   */
  async isMaximized() {
    return L("plugin:window|is_maximized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current focus state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const focused = await getCurrentWindow().isFocused();
   * ```
   *
   * @returns Whether the window is focused or not.
   */
  async isFocused() {
    return L("plugin:window|is_focused", {
      label: this.label
    });
  }
  /**
   * Gets the window's current decorated state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const decorated = await getCurrentWindow().isDecorated();
   * ```
   *
   * @returns Whether the window is decorated or not.
   */
  async isDecorated() {
    return L("plugin:window|is_decorated", {
      label: this.label
    });
  }
  /**
   * Gets the window's current resizable state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const resizable = await getCurrentWindow().isResizable();
   * ```
   *
   * @returns Whether the window is resizable or not.
   */
  async isResizable() {
    return L("plugin:window|is_resizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native maximize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximizable = await getCurrentWindow().isMaximizable();
   * ```
   *
   * @returns Whether the window's native maximize button is enabled or not.
   */
  async isMaximizable() {
    return L("plugin:window|is_maximizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native minimize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimizable = await getCurrentWindow().isMinimizable();
   * ```
   *
   * @returns Whether the window's native minimize button is enabled or not.
   */
  async isMinimizable() {
    return L("plugin:window|is_minimizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native close button state.
   *
   * #### Platform-specific
   *
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const closable = await getCurrentWindow().isClosable();
   * ```
   *
   * @returns Whether the window's native close button is enabled or not.
   */
  async isClosable() {
    return L("plugin:window|is_closable", {
      label: this.label
    });
  }
  /**
   * Gets the window's current visible state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const visible = await getCurrentWindow().isVisible();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isVisible() {
    return L("plugin:window|is_visible", {
      label: this.label
    });
  }
  /**
   * Gets the window's current title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const title = await getCurrentWindow().title();
   * ```
   */
  async title() {
    return L("plugin:window|title", {
      label: this.label
    });
  }
  /**
   * Gets the window's current theme.
   *
   * #### Platform-specific
   *
   * - **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const theme = await getCurrentWindow().theme();
   * ```
   *
   * @returns The window theme.
   */
  async theme() {
    return L("plugin:window|theme", {
      label: this.label
    });
  }
  /**
   * Whether the window is configured to be always on top of other windows or not.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const alwaysOnTop = await getCurrentWindow().isAlwaysOnTop();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isAlwaysOnTop() {
    return L("plugin:window|is_always_on_top", {
      label: this.label
    });
  }
  // Setters
  /**
   * Centers the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().center();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async center() {
    return L("plugin:window|center", {
      label: this.label
    });
  }
  /**
   *  Requests user attention to the window, this has no effect if the application
   * is already focused. How requesting for user attention manifests is platform dependent,
   * see `UserAttentionType` for details.
   *
   * Providing `null` will unset the request for user attention. Unsetting the request for
   * user attention might not be done automatically by the WM when the window receives input.
   *
   * #### Platform-specific
   *
   * - **macOS:** `null` has no effect.
   * - **Linux:** Urgency levels have the same effect.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().requestUserAttention();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async requestUserAttention(t) {
    let n = null;
    return t && (t === Cr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), L("plugin:window|request_user_attention", {
      label: this.label,
      value: n
    });
  }
  /**
   * Updates the window resizable flag.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setResizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setResizable(t) {
    return L("plugin:window|set_resizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Enable or disable the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async setEnabled(t) {
    return L("plugin:window|set_enabled", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window is enabled or disabled.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async isEnabled() {
    return L("plugin:window|is_enabled", {
      label: this.label
    });
  }
  /**
   * Sets whether the window's native maximize button is enabled or not.
   * If resizable is set to false, this setting is ignored.
   *
   * #### Platform-specific
   *
   * - **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaximizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaximizable(t) {
    return L("plugin:window|set_maximizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native minimize button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinimizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinimizable(t) {
    return L("plugin:window|set_minimizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native close button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setClosable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setClosable(t) {
    return L("plugin:window|set_closable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setTitle('Tauri');
   * ```
   *
   * @param title The new title
   * @returns A promise indicating the success or failure of the operation.
   */
  async setTitle(t) {
    return L("plugin:window|set_title", {
      label: this.label,
      value: t
    });
  }
  /**
   * Maximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().maximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async maximize() {
    return L("plugin:window|maximize", {
      label: this.label
    });
  }
  /**
   * Unmaximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unmaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unmaximize() {
    return L("plugin:window|unmaximize", {
      label: this.label
    });
  }
  /**
   * Toggles the window maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().toggleMaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async toggleMaximize() {
    return L("plugin:window|toggle_maximize", {
      label: this.label
    });
  }
  /**
   * Minimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().minimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async minimize() {
    return L("plugin:window|minimize", {
      label: this.label
    });
  }
  /**
   * Unminimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unminimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unminimize() {
    return L("plugin:window|unminimize", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to true.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().show();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async show() {
    return L("plugin:window|show", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to false.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().hide();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async hide() {
    return L("plugin:window|hide", {
      label: this.label
    });
  }
  /**
   * Closes the window.
   *
   * Note this emits a closeRequested event so you can intercept it. To force window close, use {@link Window.destroy}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().close();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async close() {
    return L("plugin:window|close", {
      label: this.label
    });
  }
  /**
   * Destroys the window. Behaves like {@link Window.close} but forces the window close instead of emitting a closeRequested event.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().destroy();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async destroy() {
    return L("plugin:window|destroy", {
      label: this.label
    });
  }
  /**
   * Whether the window should have borders and bars.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setDecorations(false);
   * ```
   *
   * @param decorations Whether the window should have borders and bars.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setDecorations(t) {
    return L("plugin:window|set_decorations", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether or not the window should have shadow.
   *
   * #### Platform-specific
   *
   * - **Windows:**
   *   - `false` has no effect on decorated window, shadows are always ON.
   *   - `true` will make undecorated window have a 1px white border,
   * and on Windows 11, it will have a rounded corners.
   * - **Linux:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setShadow(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setShadow(t) {
    return L("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return L("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return L("plugin:window|set_effects", {
      label: this.label,
      value: null
    });
  }
  /**
   * Whether the window should always be on top of other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnTop(true);
   * ```
   *
   * @param alwaysOnTop Whether the window should always be on top of other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnTop(t) {
    return L("plugin:window|set_always_on_top", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window should always be below other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnBottom(true);
   * ```
   *
   * @param alwaysOnBottom Whether the window should always be below other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnBottom(t) {
    return L("plugin:window|set_always_on_bottom", {
      label: this.label,
      value: t
    });
  }
  /**
   * Prevents the window contents from being captured by other apps.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setContentProtected(true);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setContentProtected(t) {
    return L("plugin:window|set_content_protected", {
      label: this.label,
      value: t
    });
  }
  /**
   * Resizes the window with a new inner size.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSize(t) {
    return L("plugin:window|set_size", {
      label: this.label,
      value: t instanceof _n ? t : new _n(t)
    });
  }
  /**
   * Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, PhysicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinSize(new PhysicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinSize(t) {
    return L("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof _n ? t : t ? new _n(t) : null
    });
  }
  /**
   * Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaxSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaxSize(t) {
    return L("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof _n ? t : t ? new _n(t) : null
    });
  }
  /**
   * Sets the window inner size constraints.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSizeConstraints({ minWidth: 300 });
   * ```
   *
   * @param constraints The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSizeConstraints(t) {
    function n(o) {
      return o ? { Logical: o } : null;
    }
    return L("plugin:window|set_size_constraints", {
      label: this.label,
      value: {
        minWidth: n(t?.minWidth),
        minHeight: n(t?.minHeight),
        maxWidth: n(t?.maxWidth),
        maxHeight: n(t?.maxHeight)
      }
    });
  }
  /**
   * Sets the window outer position.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setPosition(new LogicalPosition(600, 500));
   * ```
   *
   * @param position The new position, in logical or physical pixels.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setPosition(t) {
    return L("plugin:window|set_position", {
      label: this.label,
      value: t instanceof go ? t : new go(t)
    });
  }
  /**
   * Sets the window fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFullscreen(true);
   * ```
   *
   * @param fullscreen Whether the window should go to fullscreen or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFullscreen(t) {
    return L("plugin:window|set_fullscreen", {
      label: this.label,
      value: t
    });
  }
  /**
   * Bring the window to front and focus.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFocus();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFocus() {
    return L("plugin:window|set_focus", {
      label: this.label
    });
  }
  /**
   * Sets the window icon.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIcon('/tauri/awesome.png');
   * ```
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @param icon Icon bytes or path to the icon file.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIcon(t) {
    return L("plugin:window|set_icon", {
      label: this.label,
      value: Lo(t)
    });
  }
  /**
   * Whether the window icon should be hidden from the taskbar or not.
   *
   * #### Platform-specific
   *
   * - **macOS:** Unsupported.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSkipTaskbar(true);
   * ```
   *
   * @param skip true to hide window icon, false to show it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSkipTaskbar(t) {
    return L("plugin:window|set_skip_taskbar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Grabs the cursor, preventing it from leaving the window.
   *
   * There's no guarantee that the cursor will be hidden. You should
   * hide it by yourself if you want so.
   *
   * #### Platform-specific
   *
   * - **Linux:** Unsupported.
   * - **macOS:** This locks the cursor in a fixed location, which looks visually awkward.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorGrab(true);
   * ```
   *
   * @param grab `true` to grab the cursor icon, `false` to release it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorGrab(t) {
    return L("plugin:window|set_cursor_grab", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor's visibility.
   *
   * #### Platform-specific
   *
   * - **Windows:** The cursor is only hidden within the confines of the window.
   * - **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
   *   outside of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorVisible(false);
   * ```
   *
   * @param visible If `false`, this will hide the cursor. If `true`, this will show the cursor.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorVisible(t) {
    return L("plugin:window|set_cursor_visible", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor icon of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorIcon('help');
   * ```
   *
   * @param icon The new cursor icon.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorIcon(t) {
    return L("plugin:window|set_cursor_icon", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window background color.
   *
   * #### Platform-specific:
   *
   * - **Windows:** alpha channel is ignored.
   * - **iOS / Android:** Unsupported.
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.1.0
   */
  async setBackgroundColor(t) {
    return L("plugin:window|set_background_color", { color: t });
  }
  /**
   * Changes the position of the cursor in window coordinates.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorPosition(new LogicalPosition(600, 300));
   * ```
   *
   * @param position The new cursor position.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorPosition(t) {
    return L("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof go ? t : new go(t)
    });
  }
  /**
   * Changes the cursor events behavior.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIgnoreCursorEvents(true);
   * ```
   *
   * @param ignore `true` to ignore the cursor events; `false` to process them as usual.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIgnoreCursorEvents(t) {
    return L("plugin:window|set_ignore_cursor_events", {
      label: this.label,
      value: t
    });
  }
  /**
   * Starts dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startDragging() {
    return L("plugin:window|start_dragging", {
      label: this.label
    });
  }
  /**
   * Starts resize-dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startResizeDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startResizeDragging(t) {
    return L("plugin:window|start_resize_dragging", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge count. It is app wide and not specific to this window.
   *
   * #### Platform-specific
   *
   * - **Windows**: Unsupported. Use @{linkcode Window.setOverlayIcon} instead.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeCount(5);
   * ```
   *
   * @param count The badge count. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeCount(t) {
    return L("plugin:window|set_badge_count", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge cont **macOS only**.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeLabel("Hello");
   * ```
   *
   * @param label The badge label. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeLabel(t) {
    return L("plugin:window|set_badge_label", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the overlay icon. **Windows only**
   * The overlay icon can be set for every window.
   *
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   *
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setOverlayIcon("/tauri/awesome.png");
   * ```
   *
   * @param icon Icon bytes or path to the icon file. Use `undefined` to remove the overlay icon.
   * @return A promise indicating the success or failure of the operation.
   */
  async setOverlayIcon(t) {
    return L("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Lo(t) : void 0
    });
  }
  /**
   * Sets the taskbar progress state.
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Progress bar is app-wide and not specific to this window.
   * - **Linux**: Only supported desktop environments with `libunity` (e.g. GNOME).
   *
   * @example
   * ```typescript
   * import { getCurrentWindow, ProgressBarStatus } from '@tauri-apps/api/window';
   * await getCurrentWindow().setProgressBar({
   *   status: ProgressBarStatus.Normal,
   *   progress: 50,
   * });
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async setProgressBar(t) {
    return L("plugin:window|set_progress_bar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window should be visible on all workspaces or virtual desktops.
   *
   * #### Platform-specific
   *
   * - **Windows / iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setVisibleOnAllWorkspaces(t) {
    return L("plugin:window|set_visible_on_all_workspaces", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the title bar style. **macOS only**.
   *
   * @since 2.0.0
   */
  async setTitleBarStyle(t) {
    return L("plugin:window|set_title_bar_style", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window theme, pass in `null` or `undefined` to follow system theme
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Theme is app-wide and not specific to this window.
   * - **iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setTheme(t) {
    return L("plugin:window|set_theme", {
      label: this.label,
      value: t
    });
  }
  // Listeners
  /**
   * Listen to window resize.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onResized(({ payload: size }) => {
   *  console.log('Window resized', size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onResized(t) {
    return this.listen(Be.WINDOW_RESIZED, (n) => {
      n.payload = new Un(n.payload), t(n);
    });
  }
  /**
   * Listen to window move.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onMoved(({ payload: position }) => {
   *  console.log('Window moved', position);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onMoved(t) {
    return this.listen(Be.WINDOW_MOVED, (n) => {
      n.payload = new Dt(n.payload), t(n);
    });
  }
  /**
   * Listen to window close requested. Emitted when the user requests to closes the window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * import { confirm } from '@tauri-apps/api/dialog';
   * const unlisten = await getCurrentWindow().onCloseRequested(async (event) => {
   *   const confirmed = await confirm('Are you sure?');
   *   if (!confirmed) {
   *     // user did not confirm closing the window; let's prevent it
   *     event.preventDefault();
   *   }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onCloseRequested(t) {
    return this.listen(Be.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Bc(n);
      await t(o), o.isPreventDefault() || await this.destroy();
    });
  }
  /**
   * Listen to a file drop event.
   * The listener is triggered when the user hovers the selected files on the webview,
   * drops the files or cancels the operation.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/webview";
   * const unlisten = await getCurrentWindow().onDragDropEvent((event) => {
   *  if (event.payload.type === 'over') {
   *    console.log('User hovering', event.payload.position);
   *  } else if (event.payload.type === 'drop') {
   *    console.log('User dropped', event.payload.paths);
   *  } else {
   *    console.log('File drop cancelled');
   *  }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onDragDropEvent(t) {
    const n = await this.listen(Be.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Dt(a.payload.position)
        }
      });
    }), o = await this.listen(Be.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Dt(a.payload.position)
        }
      });
    }), r = await this.listen(Be.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Dt(a.payload.position)
        }
      });
    }), s = await this.listen(Be.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), o(), s();
    };
  }
  /**
   * Listen to window focus change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onFocusChanged(({ payload: focused }) => {
   *  console.log('Focus changed, window is focused? ' + focused);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onFocusChanged(t) {
    const n = await this.listen(Be.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), o = await this.listen(Be.WINDOW_BLUR, (r) => {
      t({ ...r, payload: !1 });
    });
    return () => {
      n(), o();
    };
  }
  /**
   * Listen to window scale change. Emitted when the window's scale factor has changed.
   * The following user actions can cause DPI changes:
   * - Changing the display's resolution.
   * - Changing the display's scale factor (e.g. in Control Panel on Windows).
   * - Moving the window to a display with a different scale factor.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onScaleChanged(({ payload }) => {
   *  console.log('Scale changed', payload.scaleFactor, payload.size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onScaleChanged(t) {
    return this.listen(Be.WINDOW_SCALE_FACTOR_CHANGED, t);
  }
  /**
   * Listen to the system theme change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onThemeChanged(({ payload: theme }) => {
   *  console.log('New theme: ' + theme);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onThemeChanged(t) {
    return this.listen(Be.WINDOW_THEME_CHANGED, t);
  }
}
var Qa;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Qa || (Qa = {}));
var es;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(es || (es = {}));
var ts;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ts || (ts = {}));
const Li = Symbol(), Gn = "el", Fc = "is-", en = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, xi = Symbol("namespaceContextKey"), qr = (e) => {
  const t = e || (Ee() ? re(xi, A(Gn)) : A(Gn));
  return y(() => c(t) || Gn);
}, ce = (e, t) => {
  const n = qr(t);
  return {
    namespace: n,
    b: (h = "") => en(n.value, e, h, "", ""),
    e: (h) => h ? en(n.value, e, "", h, "") : "",
    m: (h) => h ? en(n.value, e, "", "", h) : "",
    be: (h, b) => h && b ? en(n.value, e, h, b, "") : "",
    em: (h, b) => h && b ? en(n.value, e, "", h, b) : "",
    bm: (h, b) => h && b ? en(n.value, e, h, "", b) : "",
    bem: (h, b, m) => h && b && m ? en(n.value, e, h, b, m) : "",
    is: (h, ...b) => {
      const m = b.length >= 1 ? b[0] : !0;
      return h && m ? `${Fc}${h}` : "";
    },
    cssVar: (h) => {
      const b = {};
      for (const m in h)
        h[m] && (b[`--${n.value}-${m}`] = h[m]);
      return b;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const b = {};
      for (const m in h)
        h[m] && (b[`--${n.value}-${e}-${m}`] = h[m]);
      return b;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
var Ni = typeof global == "object" && global && global.Object === Object && global, zc = typeof self == "object" && self && self.Object === Object && self, ht = Ni || zc || Function("return this")(), pt = ht.Symbol, ki = Object.prototype, Vc = ki.hasOwnProperty, Hc = ki.toString, Wn = pt ? pt.toStringTag : void 0;
function Wc(e) {
  var t = Vc.call(e, Wn), n = e[Wn];
  try {
    e[Wn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Hc.call(e);
  return o && (t ? e[Wn] = n : delete e[Wn]), r;
}
var jc = Object.prototype, Uc = jc.toString;
function Kc(e) {
  return Uc.call(e);
}
var Gc = "[object Null]", qc = "[object Undefined]", ns = pt ? pt.toStringTag : void 0;
function kn(e) {
  return e == null ? e === void 0 ? qc : Gc : ns && ns in Object(e) ? Wc(e) : Kc(e);
}
function In(e) {
  return e != null && typeof e == "object";
}
var Yc = "[object Symbol]";
function jo(e) {
  return typeof e == "symbol" || In(e) && kn(e) == Yc;
}
function Zc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var at = Array.isArray, os = pt ? pt.prototype : void 0, rs = os ? os.toString : void 0;
function Di(e) {
  if (typeof e == "string")
    return e;
  if (at(e))
    return Zc(e, Di) + "";
  if (jo(e))
    return rs ? rs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Xc = /\s/;
function Jc(e) {
  for (var t = e.length; t-- && Xc.test(e.charAt(t)); )
    ;
  return t;
}
var Qc = /^\s+/;
function ed(e) {
  return e && e.slice(0, Jc(e) + 1).replace(Qc, "");
}
function jt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var as = NaN, td = /^[-+]0x[0-9a-f]+$/i, nd = /^0b[01]+$/i, od = /^0o[0-7]+$/i, rd = parseInt;
function ss(e) {
  if (typeof e == "number")
    return e;
  if (jo(e))
    return as;
  if (jt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = jt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ed(e);
  var n = nd.test(e);
  return n || od.test(e) ? rd(e.slice(2), n ? 2 : 8) : td.test(e) ? as : +e;
}
function Bi(e) {
  return e;
}
var ad = "[object AsyncFunction]", sd = "[object Function]", id = "[object GeneratorFunction]", ld = "[object Proxy]";
function Fi(e) {
  if (!jt(e))
    return !1;
  var t = kn(e);
  return t == sd || t == id || t == ad || t == ld;
}
var cr = ht["__core-js_shared__"], is = function() {
  var e = /[^.]+$/.exec(cr && cr.keys && cr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ud(e) {
  return !!is && is in e;
}
var cd = Function.prototype, dd = cd.toString;
function dn(e) {
  if (e != null) {
    try {
      return dd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var fd = /[\\^$.*+?()[\]{}|]/g, pd = /^\[object .+?Constructor\]$/, vd = Function.prototype, hd = Object.prototype, gd = vd.toString, md = hd.hasOwnProperty, bd = RegExp(
  "^" + gd.call(md).replace(fd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yd(e) {
  if (!jt(e) || ud(e))
    return !1;
  var t = Fi(e) ? bd : pd;
  return t.test(dn(e));
}
function wd(e, t) {
  return e?.[t];
}
function fn(e, t) {
  var n = wd(e, t);
  return yd(n) ? n : void 0;
}
var Er = fn(ht, "WeakMap");
function _d(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Sd = 800, Cd = 16, Ed = Date.now;
function Td(e) {
  var t = 0, n = 0;
  return function() {
    var o = Ed(), r = Cd - (o - n);
    if (n = o, r > 0) {
      if (++t >= Sd)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Od(e) {
  return function() {
    return e;
  };
}
var xo = function() {
  try {
    var e = fn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Id = xo ? function(e, t) {
  return xo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Od(t),
    writable: !0
  });
} : Bi, $d = Td(Id);
function Ad(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Pd = 9007199254740991, Rd = /^(?:0|[1-9]\d*)$/;
function Yr(e, t) {
  var n = typeof e;
  return t = t ?? Pd, !!t && (n == "number" || n != "symbol" && Rd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Md(e, t, n) {
  t == "__proto__" && xo ? xo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Zr(e, t) {
  return e === t || e !== e && t !== t;
}
var Ld = Object.prototype, xd = Ld.hasOwnProperty;
function Nd(e, t, n) {
  var o = e[t];
  (!(xd.call(e, t) && Zr(o, n)) || n === void 0 && !(t in e)) && Md(e, t, n);
}
var ls = Math.max;
function kd(e, t, n) {
  return t = ls(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = ls(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(a), _d(e, this, i);
  };
}
var Dd = 9007199254740991;
function Xr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Dd;
}
function Bd(e) {
  return e != null && Xr(e.length) && !Fi(e);
}
var Fd = Object.prototype;
function zd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Fd;
  return e === n;
}
function Vd(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Hd = "[object Arguments]";
function us(e) {
  return In(e) && kn(e) == Hd;
}
var zi = Object.prototype, Wd = zi.hasOwnProperty, jd = zi.propertyIsEnumerable, Jr = us(/* @__PURE__ */ function() {
  return arguments;
}()) ? us : function(e) {
  return In(e) && Wd.call(e, "callee") && !jd.call(e, "callee");
};
function Ud() {
  return !1;
}
var Vi = typeof exports == "object" && exports && !exports.nodeType && exports, cs = Vi && typeof module == "object" && module && !module.nodeType && module, Kd = cs && cs.exports === Vi, ds = Kd ? ht.Buffer : void 0, Gd = ds ? ds.isBuffer : void 0, Tr = Gd || Ud, qd = "[object Arguments]", Yd = "[object Array]", Zd = "[object Boolean]", Xd = "[object Date]", Jd = "[object Error]", Qd = "[object Function]", ef = "[object Map]", tf = "[object Number]", nf = "[object Object]", of = "[object RegExp]", rf = "[object Set]", af = "[object String]", sf = "[object WeakMap]", lf = "[object ArrayBuffer]", uf = "[object DataView]", cf = "[object Float32Array]", df = "[object Float64Array]", ff = "[object Int8Array]", pf = "[object Int16Array]", vf = "[object Int32Array]", hf = "[object Uint8Array]", gf = "[object Uint8ClampedArray]", mf = "[object Uint16Array]", bf = "[object Uint32Array]", le = {};
le[cf] = le[df] = le[ff] = le[pf] = le[vf] = le[hf] = le[gf] = le[mf] = le[bf] = !0;
le[qd] = le[Yd] = le[lf] = le[Zd] = le[uf] = le[Xd] = le[Jd] = le[Qd] = le[ef] = le[tf] = le[nf] = le[of] = le[rf] = le[af] = le[sf] = !1;
function yf(e) {
  return In(e) && Xr(e.length) && !!le[kn(e)];
}
function wf(e) {
  return function(t) {
    return e(t);
  };
}
var Hi = typeof exports == "object" && exports && !exports.nodeType && exports, qn = Hi && typeof module == "object" && module && !module.nodeType && module, _f = qn && qn.exports === Hi, dr = _f && Ni.process, fs = function() {
  try {
    var e = qn && qn.require && qn.require("util").types;
    return e || dr && dr.binding && dr.binding("util");
  } catch {
  }
}(), ps = fs && fs.isTypedArray, Wi = ps ? wf(ps) : yf, Sf = Object.prototype, Cf = Sf.hasOwnProperty;
function Ef(e, t) {
  var n = at(e), o = !n && Jr(e), r = !n && !o && Tr(e), s = !n && !o && !r && Wi(e), a = n || o || r || s, i = a ? Vd(e.length, String) : [], l = i.length;
  for (var u in e)
    Cf.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Yr(u, l))) && i.push(u);
  return i;
}
function Tf(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Of = Tf(Object.keys, Object), If = Object.prototype, $f = If.hasOwnProperty;
function Af(e) {
  if (!zd(e))
    return Of(e);
  var t = [];
  for (var n in Object(e))
    $f.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ji(e) {
  return Bd(e) ? Ef(e) : Af(e);
}
var Pf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Rf = /^\w*$/;
function Qr(e, t) {
  if (at(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || jo(e) ? !0 : Rf.test(e) || !Pf.test(e) || t != null && e in Object(t);
}
var to = fn(Object, "create");
function Mf() {
  this.__data__ = to ? to(null) : {}, this.size = 0;
}
function Lf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var xf = "__lodash_hash_undefined__", Nf = Object.prototype, kf = Nf.hasOwnProperty;
function Df(e) {
  var t = this.__data__;
  if (to) {
    var n = t[e];
    return n === xf ? void 0 : n;
  }
  return kf.call(t, e) ? t[e] : void 0;
}
var Bf = Object.prototype, Ff = Bf.hasOwnProperty;
function zf(e) {
  var t = this.__data__;
  return to ? t[e] !== void 0 : Ff.call(t, e);
}
var Vf = "__lodash_hash_undefined__";
function Hf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = to && t === void 0 ? Vf : t, this;
}
function an(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
an.prototype.clear = Mf;
an.prototype.delete = Lf;
an.prototype.get = Df;
an.prototype.has = zf;
an.prototype.set = Hf;
function Wf() {
  this.__data__ = [], this.size = 0;
}
function Uo(e, t) {
  for (var n = e.length; n--; )
    if (Zr(e[n][0], t))
      return n;
  return -1;
}
var jf = Array.prototype, Uf = jf.splice;
function Kf(e) {
  var t = this.__data__, n = Uo(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Uf.call(t, n, 1), --this.size, !0;
}
function Gf(e) {
  var t = this.__data__, n = Uo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function qf(e) {
  return Uo(this.__data__, e) > -1;
}
function Yf(e, t) {
  var n = this.__data__, o = Uo(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function $t(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
$t.prototype.clear = Wf;
$t.prototype.delete = Kf;
$t.prototype.get = Gf;
$t.prototype.has = qf;
$t.prototype.set = Yf;
var no = fn(ht, "Map");
function Zf() {
  this.size = 0, this.__data__ = {
    hash: new an(),
    map: new (no || $t)(),
    string: new an()
  };
}
function Xf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ko(e, t) {
  var n = e.__data__;
  return Xf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Jf(e) {
  var t = Ko(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Qf(e) {
  return Ko(this, e).get(e);
}
function ep(e) {
  return Ko(this, e).has(e);
}
function tp(e, t) {
  var n = Ko(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function At(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
At.prototype.clear = Zf;
At.prototype.delete = Jf;
At.prototype.get = Qf;
At.prototype.has = ep;
At.prototype.set = tp;
var np = "Expected a function";
function ea(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(np);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (ea.Cache || At)(), n;
}
ea.Cache = At;
var op = 500;
function rp(e) {
  var t = ea(e, function(o) {
    return n.size === op && n.clear(), o;
  }), n = t.cache;
  return t;
}
var ap = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sp = /\\(\\)?/g, ip = rp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ap, function(n, o, r, s) {
    t.push(r ? s.replace(sp, "$1") : o || n);
  }), t;
});
function lp(e) {
  return e == null ? "" : Di(e);
}
function Go(e, t) {
  return at(e) ? e : Qr(e, t) ? [e] : ip(lp(e));
}
function ao(e) {
  if (typeof e == "string" || jo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ta(e, t) {
  t = Go(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ao(t[n++])];
  return n && n == o ? e : void 0;
}
function zt(e, t, n) {
  var o = e == null ? void 0 : ta(e, t);
  return o === void 0 ? n : o;
}
function Ui(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var vs = pt ? pt.isConcatSpreadable : void 0;
function up(e) {
  return at(e) || Jr(e) || !!(vs && e && e[vs]);
}
function cp(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = up), r || (r = []); ++s < a; ) {
    var i = e[s];
    n(i) ? Ui(r, i) : r[r.length] = i;
  }
  return r;
}
function dp(e) {
  var t = e == null ? 0 : e.length;
  return t ? cp(e) : [];
}
function fp(e) {
  return $d(kd(e, void 0, dp), e + "");
}
function Ft() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return at(e) ? e : [e];
}
function pp() {
  this.__data__ = new $t(), this.size = 0;
}
function vp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function hp(e) {
  return this.__data__.get(e);
}
function gp(e) {
  return this.__data__.has(e);
}
var mp = 200;
function bp(e, t) {
  var n = this.__data__;
  if (n instanceof $t) {
    var o = n.__data__;
    if (!no || o.length < mp - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new At(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Tt(e) {
  var t = this.__data__ = new $t(e);
  this.size = t.size;
}
Tt.prototype.clear = pp;
Tt.prototype.delete = vp;
Tt.prototype.get = hp;
Tt.prototype.has = gp;
Tt.prototype.set = bp;
function yp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function wp() {
  return [];
}
var _p = Object.prototype, Sp = _p.propertyIsEnumerable, hs = Object.getOwnPropertySymbols, Cp = hs ? function(e) {
  return e == null ? [] : (e = Object(e), yp(hs(e), function(t) {
    return Sp.call(e, t);
  }));
} : wp;
function Ep(e, t, n) {
  var o = t(e);
  return at(e) ? o : Ui(o, n(e));
}
function gs(e) {
  return Ep(e, ji, Cp);
}
var Or = fn(ht, "DataView"), Ir = fn(ht, "Promise"), $r = fn(ht, "Set"), ms = "[object Map]", Tp = "[object Object]", bs = "[object Promise]", ys = "[object Set]", ws = "[object WeakMap]", _s = "[object DataView]", Op = dn(Or), Ip = dn(no), $p = dn(Ir), Ap = dn($r), Pp = dn(Er), Bt = kn;
(Or && Bt(new Or(new ArrayBuffer(1))) != _s || no && Bt(new no()) != ms || Ir && Bt(Ir.resolve()) != bs || $r && Bt(new $r()) != ys || Er && Bt(new Er()) != ws) && (Bt = function(e) {
  var t = kn(e), n = t == Tp ? e.constructor : void 0, o = n ? dn(n) : "";
  if (o)
    switch (o) {
      case Op:
        return _s;
      case Ip:
        return ms;
      case $p:
        return bs;
      case Ap:
        return ys;
      case Pp:
        return ws;
    }
  return t;
});
var Ss = ht.Uint8Array, Rp = "__lodash_hash_undefined__";
function Mp(e) {
  return this.__data__.set(e, Rp), this;
}
function Lp(e) {
  return this.__data__.has(e);
}
function No(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new At(); ++t < n; )
    this.add(e[t]);
}
No.prototype.add = No.prototype.push = Mp;
No.prototype.has = Lp;
function xp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Np(e, t) {
  return e.has(t);
}
var kp = 1, Dp = 2;
function Ki(e, t, n, o, r, s) {
  var a = n & kp, i = e.length, l = t.length;
  if (i != l && !(a && l > i))
    return !1;
  var u = s.get(e), p = s.get(t);
  if (u && p)
    return u == t && p == e;
  var f = -1, v = !0, g = n & Dp ? new No() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < i; ) {
    var d = e[f], h = t[f];
    if (o)
      var b = a ? o(h, d, f, t, e, s) : o(d, h, f, e, t, s);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!xp(t, function(m, C) {
        if (!Np(g, C) && (d === m || r(d, m, n, o, s)))
          return g.push(C);
      })) {
        v = !1;
        break;
      }
    } else if (!(d === h || r(d, h, n, o, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
function Bp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Fp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var zp = 1, Vp = 2, Hp = "[object Boolean]", Wp = "[object Date]", jp = "[object Error]", Up = "[object Map]", Kp = "[object Number]", Gp = "[object RegExp]", qp = "[object Set]", Yp = "[object String]", Zp = "[object Symbol]", Xp = "[object ArrayBuffer]", Jp = "[object DataView]", Cs = pt ? pt.prototype : void 0, fr = Cs ? Cs.valueOf : void 0;
function Qp(e, t, n, o, r, s, a) {
  switch (n) {
    case Jp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Xp:
      return !(e.byteLength != t.byteLength || !s(new Ss(e), new Ss(t)));
    case Hp:
    case Wp:
    case Kp:
      return Zr(+e, +t);
    case jp:
      return e.name == t.name && e.message == t.message;
    case Gp:
    case Yp:
      return e == t + "";
    case Up:
      var i = Bp;
    case qp:
      var l = o & zp;
      if (i || (i = Fp), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Vp, a.set(e, t);
      var p = Ki(i(e), i(t), o, r, s, a);
      return a.delete(e), p;
    case Zp:
      if (fr)
        return fr.call(e) == fr.call(t);
  }
  return !1;
}
var ev = 1, tv = Object.prototype, nv = tv.hasOwnProperty;
function ov(e, t, n, o, r, s) {
  var a = n & ev, i = gs(e), l = i.length, u = gs(t), p = u.length;
  if (l != p && !a)
    return !1;
  for (var f = l; f--; ) {
    var v = i[f];
    if (!(a ? v in t : nv.call(t, v)))
      return !1;
  }
  var g = s.get(e), d = s.get(t);
  if (g && d)
    return g == t && d == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var b = a; ++f < l; ) {
    v = i[f];
    var m = e[v], C = t[v];
    if (o)
      var I = a ? o(C, m, v, t, e, s) : o(m, C, v, e, t, s);
    if (!(I === void 0 ? m === C || r(m, C, n, o, s) : I)) {
      h = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (h && !b) {
    var $ = e.constructor, S = t.constructor;
    $ != S && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof S == "function" && S instanceof S) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var rv = 1, Es = "[object Arguments]", Ts = "[object Array]", mo = "[object Object]", av = Object.prototype, Os = av.hasOwnProperty;
function sv(e, t, n, o, r, s) {
  var a = at(e), i = at(t), l = a ? Ts : Bt(e), u = i ? Ts : Bt(t);
  l = l == Es ? mo : l, u = u == Es ? mo : u;
  var p = l == mo, f = u == mo, v = l == u;
  if (v && Tr(e)) {
    if (!Tr(t))
      return !1;
    a = !0, p = !1;
  }
  if (v && !p)
    return s || (s = new Tt()), a || Wi(e) ? Ki(e, t, n, o, r, s) : Qp(e, t, l, n, o, r, s);
  if (!(n & rv)) {
    var g = p && Os.call(e, "__wrapped__"), d = f && Os.call(t, "__wrapped__");
    if (g || d) {
      var h = g ? e.value() : e, b = d ? t.value() : t;
      return s || (s = new Tt()), r(h, b, n, o, s);
    }
  }
  return v ? (s || (s = new Tt()), ov(e, t, n, o, r, s)) : !1;
}
function qo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !In(e) && !In(t) ? e !== e && t !== t : sv(e, t, n, o, qo, r);
}
var iv = 1, lv = 2;
function uv(e, t, n, o) {
  var r = n.length, s = r;
  if (e == null)
    return !s;
  for (e = Object(e); r--; ) {
    var a = n[r];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++r < s; ) {
    a = n[r];
    var i = a[0], l = e[i], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(i in e))
        return !1;
    } else {
      var p = new Tt(), f;
      if (!(f === void 0 ? qo(u, l, iv | lv, o, p) : f))
        return !1;
    }
  }
  return !0;
}
function Gi(e) {
  return e === e && !jt(e);
}
function cv(e) {
  for (var t = ji(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Gi(r)];
  }
  return t;
}
function qi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function dv(e) {
  var t = cv(e);
  return t.length == 1 && t[0][2] ? qi(t[0][0], t[0][1]) : function(n) {
    return n === e || uv(n, e, t);
  };
}
function fv(e, t) {
  return e != null && t in Object(e);
}
function pv(e, t, n) {
  t = Go(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = ao(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && Xr(r) && Yr(a, r) && (at(e) || Jr(e)));
}
function Yi(e, t) {
  return e != null && pv(e, t, fv);
}
var vv = 1, hv = 2;
function gv(e, t) {
  return Qr(e) && Gi(t) ? qi(ao(e), t) : function(n) {
    var o = zt(n, e);
    return o === void 0 && o === t ? Yi(n, e) : qo(t, o, vv | hv);
  };
}
function mv(e) {
  return function(t) {
    return t?.[e];
  };
}
function bv(e) {
  return function(t) {
    return ta(t, e);
  };
}
function yv(e) {
  return Qr(e) ? mv(ao(e)) : bv(e);
}
function wv(e) {
  return typeof e == "function" ? e : e == null ? Bi : typeof e == "object" ? at(e) ? gv(e[0], e[1]) : dv(e) : yv(e);
}
var pr = function() {
  return ht.Date.now();
}, _v = "Expected a function", Sv = Math.max, Cv = Math.min;
function Ev(e, t, n) {
  var o, r, s, a, i, l, u = 0, p = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(_v);
  t = ss(t) || 0, jt(n) && (p = !!n.leading, f = "maxWait" in n, s = f ? Sv(ss(n.maxWait) || 0, t) : s, v = "trailing" in n ? !!n.trailing : v);
  function g(T) {
    var E = o, F = r;
    return o = r = void 0, u = T, a = e.apply(F, E), a;
  }
  function d(T) {
    return u = T, i = setTimeout(m, t), p ? g(T) : a;
  }
  function h(T) {
    var E = T - l, F = T - u, O = t - E;
    return f ? Cv(O, s - F) : O;
  }
  function b(T) {
    var E = T - l, F = T - u;
    return l === void 0 || E >= t || E < 0 || f && F >= s;
  }
  function m() {
    var T = pr();
    if (b(T))
      return C(T);
    i = setTimeout(m, h(T));
  }
  function C(T) {
    return i = void 0, v && o ? g(T) : (o = r = void 0, a);
  }
  function I() {
    i !== void 0 && clearTimeout(i), u = 0, o = l = r = i = void 0;
  }
  function $() {
    return i === void 0 ? a : C(pr());
  }
  function S() {
    var T = pr(), E = b(T);
    if (o = arguments, r = this, l = T, E) {
      if (i === void 0)
        return d(l);
      if (f)
        return clearTimeout(i), i = setTimeout(m, t), g(l);
    }
    return i === void 0 && (i = setTimeout(m, t)), a;
  }
  return S.cancel = I, S.flush = $, S;
}
function Tv(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Ad(e, wv(t), r);
}
function ko(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Yn(e, t) {
  return qo(e, t);
}
function Yo(e) {
  return e == null;
}
function Zi(e) {
  return e === void 0;
}
function Ov(e, t, n, o) {
  if (!jt(e))
    return e;
  t = Go(t, e);
  for (var r = -1, s = t.length, a = s - 1, i = e; i != null && ++r < s; ) {
    var l = ao(t[r]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != a) {
      var p = i[l];
      u = void 0, u === void 0 && (u = jt(p) ? p : Yr(t[r + 1]) ? [] : {});
    }
    Nd(i, l, u), i = i[l];
  }
  return e;
}
function Iv(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], i = ta(e, a);
    n(i, a) && Ov(s, Go(a, e), i);
  }
  return s;
}
function $v(e, t) {
  return Iv(e, t, function(n, o) {
    return Yi(e, o);
  });
}
var Av = fp(function(e, t) {
  return e == null ? {} : $v(e, t);
});
const Tn = (e) => e === void 0, sn = (e) => typeof e == "boolean", he = (e) => typeof e == "number", Ke = (e) => typeof Element > "u" ? !1 : e instanceof Element, Pv = (e) => be(e) ? !Number.isNaN(Number(e)) : !1;
var Rv = Object.defineProperty, Mv = Object.defineProperties, Lv = Object.getOwnPropertyDescriptors, Is = Object.getOwnPropertySymbols, xv = Object.prototype.hasOwnProperty, Nv = Object.prototype.propertyIsEnumerable, $s = (e, t, n) => t in e ? Rv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kv = (e, t) => {
  for (var n in t || (t = {}))
    xv.call(t, n) && $s(e, n, t[n]);
  if (Is)
    for (var n of Is(t))
      Nv.call(t, n) && $s(e, n, t[n]);
  return e;
}, Dv = (e, t) => Mv(e, Lv(t));
function Bv(e, t) {
  var n;
  const o = on();
  return Wr(() => {
    o.value = e();
  }, Dv(kv({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Hr(o);
}
var As;
const ue = typeof window < "u", Ps = (e) => typeof e == "function", Fv = (e) => typeof e == "string", Xi = () => {
}, Ar = ue && ((As = window?.navigator) == null ? void 0 : As.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function na(e) {
  return typeof e == "function" ? e() : c(e);
}
function zv(e) {
  return e;
}
function Vv(e, t) {
  let n, o, r;
  const s = A(!0), a = () => {
    s.value = !0, r();
  };
  Z(e, a, { flush: "sync" });
  const i = Ps(t) ? t : t.get, l = Ps(t) ? void 0 : t.set, u = Fu((p, f) => (o = p, r = f, {
    get() {
      return s.value && (n = i(), s.value = !1), o(), n;
    },
    set(v) {
      l?.(v);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = a), u;
}
function so(e) {
  return Bu() ? (Si(e), !0) : !1;
}
function Hv(e, t = !0) {
  Ee() ? ge(e) : t ? e() : fe(e);
}
function Do(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = A(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    r.value = !1, a();
  }
  function l(...u) {
    a(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, e(...u);
    }, na(t));
  }
  return o && (r.value = !0, ue && l()), so(i), {
    isPending: Hr(r),
    start: l,
    stop: i
  };
}
function Ct(e) {
  var t;
  const n = na(e);
  return (t = n?.$el) != null ? t : n;
}
const io = ue ? window : void 0;
function Oe(...e) {
  let t, n, o, r;
  if (Fv(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = io) : [t, n, o, r] = e, !t)
    return Xi;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, f, v, g) => (p.addEventListener(f, v, g), () => p.removeEventListener(f, v, g)), l = Z(() => [Ct(t), na(r)], ([p, f]) => {
    a(), p && s.push(...n.flatMap((v) => o.map((g) => i(p, v, g, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), a();
  };
  return so(u), u;
}
let Rs = !1;
function Wv(e, t, n = {}) {
  const { window: o = io, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  Ar && !Rs && (Rs = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Xi)));
  let i = !0;
  const l = (v) => r.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((d) => d === v.target || v.composedPath().includes(d));
    {
      const d = Ct(g);
      return d && (v.target === d || v.composedPath().includes(d));
    }
  }), p = [
    Oe(o, "click", (v) => {
      const g = Ct(e);
      if (!(!g || g === v.target || v.composedPath().includes(g))) {
        if (v.detail === 0 && (i = !l(v)), !i) {
          i = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: s }),
    Oe(o, "pointerdown", (v) => {
      const g = Ct(e);
      g && (i = !v.composedPath().includes(g) && !l(v));
    }, { passive: !0 }),
    a && Oe(o, "blur", (v) => {
      var g;
      const d = Ct(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !d?.contains(o.document.activeElement) && t(v);
    })
  ].filter(Boolean);
  return () => p.forEach((v) => v());
}
function jv(e = {}) {
  var t;
  const { window: n = io } = e, o = (t = e.document) != null ? t : n?.document, r = Vv(() => null, () => o?.activeElement);
  return n && (Oe(n, "blur", (s) => {
    s.relatedTarget === null && r.trigger();
  }, !0), Oe(n, "focus", r.trigger, !0)), r;
}
function Ji(e, t = !1) {
  const n = A(), o = () => n.value = !!e();
  return o(), Hv(o, t), n;
}
const Ms = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ls = "__vueuse_ssr_handlers__";
Ms[Ls] = Ms[Ls] || {};
var xs = Object.getOwnPropertySymbols, Uv = Object.prototype.hasOwnProperty, Kv = Object.prototype.propertyIsEnumerable, Gv = (e, t) => {
  var n = {};
  for (var o in e)
    Uv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && xs)
    for (var o of xs(e))
      t.indexOf(o) < 0 && Kv.call(e, o) && (n[o] = e[o]);
  return n;
};
function tt(e, t, n = {}) {
  const o = n, { window: r = io } = o, s = Gv(o, ["window"]);
  let a;
  const i = Ji(() => r && "ResizeObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Z(() => Ct(e), (f) => {
    l(), i.value && r && f && (a = new ResizeObserver(t), a.observe(f, s));
  }, { immediate: !0, flush: "post" }), p = () => {
    l(), u();
  };
  return so(p), {
    isSupported: i,
    stop: p
  };
}
var Ns = Object.getOwnPropertySymbols, qv = Object.prototype.hasOwnProperty, Yv = Object.prototype.propertyIsEnumerable, Zv = (e, t) => {
  var n = {};
  for (var o in e)
    qv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ns)
    for (var o of Ns(e))
      t.indexOf(o) < 0 && Yv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Xv(e, t, n = {}) {
  const o = n, { window: r = io } = o, s = Zv(o, ["window"]);
  let a;
  const i = Ji(() => r && "MutationObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = Z(() => Ct(e), (f) => {
    l(), i.value && r && f && (a = new MutationObserver(t), a.observe(f, s));
  }, { immediate: !0 }), p = () => {
    l(), u();
  };
  return so(p), {
    isSupported: i,
    stop: p
  };
}
var ks;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ks || (ks = {}));
var Jv = Object.defineProperty, Ds = Object.getOwnPropertySymbols, Qv = Object.prototype.hasOwnProperty, eh = Object.prototype.propertyIsEnumerable, Bs = (e, t, n) => t in e ? Jv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, th = (e, t) => {
  for (var n in t || (t = {}))
    Qv.call(t, n) && Bs(e, n, t[n]);
  if (Ds)
    for (var n of Ds(t))
      eh.call(t, n) && Bs(e, n, t[n]);
  return e;
};
const nh = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
th({
  linear: zv
}, nh);
class Qi extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function el(e, t) {
  throw new Qi(`[${e}] ${t}`);
}
function ye(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = be(e) ? new Qi(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Fs = {
  current: 0
}, zs = A(0), tl = 2e3, Vs = Symbol("elZIndexContextKey"), nl = Symbol("zIndexContextKey"), oa = (e) => {
  const t = Ee() ? re(Vs, Fs) : Fs, n = e || (Ee() ? re(nl, void 0) : void 0), o = y(() => {
    const a = c(n);
    return he(a) ? a : tl;
  }), r = y(() => o.value + zs.value), s = () => (t.current++, zs.value = t.current, r.value);
  return !ue && !re(Vs) && ye("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var oh = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const rh = (e) => (t, n) => ah(t, n, c(e)), ah = (e, t, n) => zt(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), sh = (e) => {
  const t = y(() => c(e).name), n = jr(e) ? e : A(e);
  return {
    lang: t,
    locale: n,
    t: rh(e)
  };
}, ol = Symbol("localeContextKey"), ra = (e) => {
  const t = e || re(ol, A());
  return sh(y(() => t.value || oh));
}, rl = "__epPropKey", q = (e) => e, ih = (e) => Ce(e) && !!e[rl], Zo = (e, t) => {
  if (!Ce(e) || ih(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, l = {
    type: s,
    required: !!o,
    validator: n || a ? (u) => {
      let p = !1, f = [];
      if (n && (f = Array.from(n), Pa(e, "default") && f.push(r), p || (p = f.includes(u))), a && (p || (p = a(u))), !p && f.length > 0) {
        const v = [...new Set(f)].map((g) => JSON.stringify(g)).join(", ");
        Nn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return p;
    } : void 0,
    [rl]: !0
  };
  return Pa(e, "default") && (l.default = r), l;
}, se = (e) => ko(Object.entries(e).map(([t, n]) => [
  t,
  Zo(n, t)
])), al = ["", "default", "small", "large"], Xo = Zo({
  type: String,
  values: al,
  required: !1
}), sl = Symbol("size"), lh = () => {
  const e = re(sl, {});
  return y(() => c(e.size) || "");
}, il = Symbol("emptyValuesContextKey"), uh = "use-empty-values", ch = ["", void 0, null], dh = void 0, fh = se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => pe(e) ? !e() : !e
  }
}), ph = (e, t) => {
  const n = Ee() ? re(il, A({})) : A({}), o = y(() => e.emptyValues || n.value.emptyValues || ch), r = y(() => pe(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : pe(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : dh), s = (a) => o.value.includes(a);
  return o.value.includes(r.value) || ye(uh, "value-on-clear should be a value of empty-values"), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, Hs = (e) => Object.keys(e), Bo = A();
function Jo(e, t = void 0) {
  const n = Ee() ? re(Li, Bo) : Bo;
  return e ? y(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function ll(e, t) {
  const n = Jo(), o = ce(e, y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Gn;
  })), r = ra(y(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = oa(y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || tl;
  })), a = y(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return vh(y(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const vh = (e, t, n = !1) => {
  var o;
  const r = !!Ee(), s = r ? Jo() : void 0, a = (o = void 0) != null ? o : r ? qe : void 0;
  if (!a) {
    ye("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = y(() => {
    const l = c(e);
    return s?.value ? hh(s.value, l) : l;
  });
  return a(Li, i), a(ol, y(() => i.value.locale)), a(xi, y(() => i.value.namespace)), a(nl, y(() => i.value.zIndex)), a(sl, {
    size: y(() => i.value.size || "")
  }), a(il, y(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Bo.value) && (Bo.value = i.value), i;
}, hh = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Hs(e), ...Hs(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, Fe = "update:modelValue", $n = "change", Ws = "input";
var ie = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const gh = "utils/dom/style", ul = (e = "") => e.split(" ").filter((t) => !!t.trim()), js = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, mh = (e, t) => {
  !e || !t.trim() || e.classList.add(...ul(t));
}, bh = (e, t) => {
  !e || !t.trim() || e.classList.remove(...ul(t));
}, yh = (e, t) => {
  var n;
  if (!ue || !e)
    return "";
  let o = Vr(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return s ? s[o] : "";
  } catch {
    return e.style[o];
  }
};
function Ut(e, t = "px") {
  if (!e)
    return "";
  if (he(e) || Pv(e))
    return `${e}${t}`;
  if (be(e))
    return e;
  ye(gh, "binding value must be a string or number");
}
let bo;
const wh = (e) => {
  var t;
  if (!ue)
    return 0;
  if (bo !== void 0)
    return bo;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const s = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), bo = o - s, bo;
};
function _h(e, t) {
  if (!ue)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const r = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), s = r + t.offsetHeight, a = e.scrollTop, i = a + e.clientHeight;
  r < a ? e.scrollTop = r : s > i && (e.scrollTop = s - e.clientHeight);
}
const Je = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, cl = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), aa = (e) => (e.install = Et, e), Sh = se({
  size: {
    type: q([Number, String])
  },
  color: {
    type: String
  }
}), Ch = z({
  name: "ElIcon",
  inheritAttrs: !1
}), Eh = /* @__PURE__ */ z({
  ...Ch,
  props: Sh,
  setup(e) {
    const t = e, n = ce("icon"), o = y(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: Tn(r) ? void 0 : Ut(r),
        "--color": s
      };
    });
    return (r, s) => (_(), B("i", Ht({
      class: c(n).b(),
      style: c(o)
    }, r.$attrs), [
      G(r.$slots, "default")
    ], 16));
  }
});
var Th = /* @__PURE__ */ ie(Eh, [["__file", "icon.vue"]]);
const Ie = Je(Th);
/*! Element Plus Icons Vue v2.3.1 */
var Oh = /* @__PURE__ */ z({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ih = Oh, $h = /* @__PURE__ */ z({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      R("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Ah = $h, Ph = /* @__PURE__ */ z({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Rh = Ph, Mh = /* @__PURE__ */ z({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      R("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), sa = Mh, Lh = /* @__PURE__ */ z({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Fo = Lh, xh = /* @__PURE__ */ z({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      R("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Nh = xh, kh = /* @__PURE__ */ z({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Dh = kh, Bh = /* @__PURE__ */ z({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), dl = Bh, Fh = /* @__PURE__ */ z({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), zh = Fh, Vh = /* @__PURE__ */ z({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Hh = Vh, Wh = /* @__PURE__ */ z({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), jh = Wh;
const Ot = q([
  String,
  Object,
  Function
]), fl = {
  Close: Fo
}, Uh = {
  Close: Fo
}, zo = {
  success: zh,
  warning: jh,
  error: Rh,
  info: Dh
}, pl = {
  validating: dl,
  success: Ah,
  error: sa
}, Kh = () => ue && /firefox/i.test(window.navigator.userAgent);
let Re;
const Gh = {
  height: "0",
  visibility: "hidden",
  overflow: Kh() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, qh = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Yh(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: qh.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Us(e, t = 1, n) {
  var o;
  Re || (Re = document.createElement("textarea"), document.body.appendChild(Re));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: i } = Yh(e);
  i.forEach(([f, v]) => Re?.style.setProperty(f, v)), Object.entries(Gh).forEach(([f, v]) => Re?.style.setProperty(f, v, "important")), Re.value = e.value || e.placeholder || "";
  let l = Re.scrollHeight;
  const u = {};
  a === "border-box" ? l = l + s : a === "content-box" && (l = l - r), Re.value = "";
  const p = Re.scrollHeight - r;
  if (he(t)) {
    let f = p * t;
    a === "border-box" && (f = f + r + s), l = Math.max(f, l), u.minHeight = `${f}px`;
  }
  if (he(n)) {
    let f = p * n;
    a === "border-box" && (f = f + r + s), l = Math.min(f, l);
  }
  return u.height = `${l}px`, (o = Re.parentNode) == null || o.removeChild(Re), Re = void 0, u;
}
const vl = (e) => e, Zh = se({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Dn = (e) => Av(Zh, e), Xh = se({
  id: {
    type: String,
    default: void 0
  },
  size: Xo,
  disabled: Boolean,
  modelValue: {
    type: q([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: q([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  showWordLimit: Boolean,
  suffixIcon: {
    type: Ot
  },
  prefixIcon: {
    type: Ot
  },
  containerRole: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: q([Object, Array, String]),
    default: () => vl({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Dn(["ariaLabel"])
}), Jh = {
  [Fe]: (e) => be(e),
  input: (e) => be(e),
  change: (e) => be(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Qh = ["class", "style"], eg = /^on[A-Z]/, tg = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = y(() => (n?.value || []).concat(Qh)), r = Ee();
  return r ? y(() => {
    var s;
    return ko(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && eg.test(a))));
  }) : (ye("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), y(() => ({})));
}, ia = Symbol("formContextKey"), Vo = Symbol("formItemContextKey"), Pr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ng = Symbol("elIdInjection"), hl = () => Ee() ? re(ng, Pr) : Pr, ln = (e) => {
  const t = hl();
  !ue && t === Pr && ye("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = qr();
  return Bv(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Qo = () => {
  const e = re(ia, void 0), t = re(Vo, void 0);
  return {
    form: e,
    formItem: t
  };
}, la = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = A(!1)), o || (o = A(!1));
  const r = A();
  let s;
  const a = y(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return ge(() => {
    s = Z([nt(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : ln().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !l && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Ur(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, gl = (e) => {
  const t = Ee();
  return y(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, lo = (e, t = {}) => {
  const n = A(void 0), o = t.prop ? n : gl("size"), r = t.global ? n : lh(), s = t.form ? { size: void 0 } : re(ia, void 0), a = t.formItem ? { size: void 0 } : re(Vo, void 0);
  return y(() => o.value || c(e) || a?.size || s?.size || r.value || "");
}, er = (e) => {
  const t = gl("disabled"), n = re(ia, void 0);
  return y(() => t.value || c(e) || n?.disabled || !1);
};
function ml(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = Ee(), { emit: a } = s, i = on(), l = A(!1), u = (v) => {
    pe(t) && t(v) || l.value || (l.value = !0, a("focus", v), n?.());
  }, p = (v) => {
    var g;
    pe(o) && o(v) || v.relatedTarget && ((g = i.value) != null && g.contains(v.relatedTarget)) || (l.value = !1, a("blur", v), r?.());
  }, f = () => {
    var v, g;
    (v = i.value) != null && v.contains(document.activeElement) && i.value !== document.activeElement || (g = e.value) == null || g.focus();
  };
  return Z(i, (v) => {
    v && v.setAttribute("tabindex", "-1");
  }), Oe(i, "focus", u, !0), Oe(i, "blur", p, !0), Oe(i, "click", f, !0), process.env.NODE_ENV === "test" && ge(() => {
    const v = Ke(e.value) ? e.value : document.querySelector("input,textarea");
    v && (Oe(v, "focus", u, !0), Oe(v, "blur", p, !0));
  }), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: p
  };
}
const og = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function bl({
  afterComposition: e,
  emit: t
}) {
  const n = A(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, p = u[u.length - 1] || "";
    n.value = !og(p);
  }, s = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, fe(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? s(i) : r(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: s
  };
}
function rg(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: s, value: a } = e.value;
    if (r == null || s == null)
      return;
    const i = a.slice(0, Math.max(0, r)), l = a.slice(Math.max(0, s));
    t = {
      selectionStart: r,
      selectionEnd: s,
      value: a,
      beforeTxt: i,
      afterTxt: l
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: s, afterTxt: a, selectionStart: i } = t;
    if (s == null || a == null || i == null)
      return;
    let l = r.length;
    if (r.endsWith(a))
      l = r.length - a.length;
    else if (r.startsWith(s))
      l = s.length;
    else {
      const u = s[i - 1], p = r.indexOf(u, i - 1);
      p !== -1 && (l = p + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, o];
}
const yl = "ElInput", ag = z({
  name: yl,
  inheritAttrs: !1
}), sg = /* @__PURE__ */ z({
  ...ag,
  props: Xh,
  emits: Jh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = zu(), s = tg(), a = Kr(), i = y(() => [
      o.type === "textarea" ? h.b() : d.b(),
      d.m(v.value),
      d.is("disabled", g.value),
      d.is("exceed", Ne.value),
      {
        [d.b("group")]: a.prepend || a.append,
        [d.m("prefix")]: a.prefix || o.prefixIcon,
        [d.m("suffix")]: a.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [d.bm("suffix", "password-clear")]: U.value && te.value,
        [d.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), l = y(() => [
      d.e("wrapper"),
      d.is("focus", F.value)
    ]), { form: u, formItem: p } = Qo(), { inputId: f } = la(o, {
      formItemContext: p
    }), v = lo(), g = er(), d = ce("input"), h = ce("textarea"), b = on(), m = on(), C = A(!1), I = A(!1), $ = A(), S = on(o.inputStyle), T = y(() => b.value || m.value), { wrapperRef: E, isFocused: F, handleFocus: O, handleBlur: V } = ml(T, {
      beforeFocus() {
        return g.value;
      },
      afterBlur() {
        var x;
        o.validateEvent && ((x = p?.validate) == null || x.call(p, "blur").catch((oe) => ye(oe)));
      }
    }), N = y(() => {
      var x;
      return (x = u?.statusIcon) != null ? x : !1;
    }), P = y(() => p?.validateState || ""), j = y(() => P.value && pl[P.value]), ae = y(() => I.value ? Hh : Nh), J = y(() => [
      r.style
    ]), Q = y(() => [
      o.inputStyle,
      S.value,
      { resize: o.resize }
    ]), D = y(() => Yo(o.modelValue) ? "" : String(o.modelValue)), U = y(() => o.clearable && !g.value && !o.readonly && !!D.value && (F.value || C.value)), te = y(() => o.showPassword && !g.value && !!D.value && (!!D.value || F.value)), ne = y(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !g.value && !o.readonly && !o.showPassword), Qe = y(() => D.value.length), Ne = y(() => !!ne.value && Qe.value > Number(o.maxlength)), it = y(() => !!a.suffix || !!o.suffixIcon || U.value || o.showPassword || ne.value || !!P.value && N.value), [He, Ae] = rg(b);
    tt(m, (x) => {
      if (de(), !ne.value || o.resize !== "both")
        return;
      const oe = x[0], { width: Ue } = oe.contentRect;
      $.value = {
        right: `calc(100% - ${Ue + 15 + 6}px)`
      };
    });
    const We = () => {
      const { type: x, autosize: oe } = o;
      if (!(!ue || x !== "textarea" || !m.value))
        if (oe) {
          const Ue = Ce(oe) ? oe.minRows : void 0, Rt = Ce(oe) ? oe.maxRows : void 0, Mt = Us(m.value, Ue, Rt);
          S.value = {
            overflowY: "hidden",
            ...Mt
          }, fe(() => {
            m.value.offsetHeight, S.value = Mt;
          });
        } else
          S.value = {
            minHeight: Us(m.value).minHeight
          };
    }, de = ((x) => {
      let oe = !1;
      return () => {
        var Ue;
        if (oe || !o.autosize)
          return;
        ((Ue = m.value) == null ? void 0 : Ue.offsetParent) === null || (x(), oe = !0);
      };
    })(We), gt = () => {
      const x = T.value, oe = o.formatter ? o.formatter(D.value) : D.value;
      !x || x.value === oe || (x.value = oe);
    }, Gt = async (x) => {
      He();
      let { value: oe } = x.target;
      if (o.formatter && o.parser && (oe = o.parser(oe)), !qt.value) {
        if (oe === D.value) {
          gt();
          return;
        }
        n(Fe, oe), n(Ws, oe), await fe(), gt(), Ae();
      }
    }, mt = (x) => {
      let { value: oe } = x.target;
      o.formatter && o.parser && (oe = o.parser(oe)), n($n, oe);
    }, {
      isComposing: qt,
      handleCompositionStart: Yt,
      handleCompositionUpdate: vn,
      handleCompositionEnd: hn
    } = bl({ emit: n, afterComposition: Gt }), gn = () => {
      He(), I.value = !I.value, setTimeout(Ae);
    }, mn = () => {
      var x;
      return (x = T.value) == null ? void 0 : x.focus();
    }, Pt = () => {
      var x;
      return (x = T.value) == null ? void 0 : x.blur();
    }, bn = (x) => {
      C.value = !1, n("mouseleave", x);
    }, Pe = (x) => {
      C.value = !0, n("mouseenter", x);
    }, lt = (x) => {
      n("keydown", x);
    }, yn = () => {
      var x;
      (x = T.value) == null || x.select();
    }, Zt = () => {
      n(Fe, ""), n($n, ""), n("clear"), n(Ws, "");
    };
    return Z(() => o.modelValue, () => {
      var x;
      fe(() => We()), o.validateEvent && ((x = p?.validate) == null || x.call(p, "change").catch((oe) => ye(oe)));
    }), Z(D, () => gt()), Z(() => o.type, async () => {
      await fe(), gt(), We();
    }), ge(() => {
      !o.formatter && o.parser && ye(yl, "If you set the parser, you also need to set the formatter."), gt(), fe(We);
    }), t({
      input: b,
      textarea: m,
      ref: T,
      textareaStyle: Q,
      autosize: nt(o, "autosize"),
      isComposing: qt,
      focus: mn,
      blur: Pt,
      select: yn,
      clear: Zt,
      resizeTextarea: We
    }), (x, oe) => (_(), B("div", {
      class: M([
        c(i),
        {
          [c(d).bm("group", "append")]: x.$slots.append,
          [c(d).bm("group", "prepend")]: x.$slots.prepend
        }
      ]),
      style: ve(c(J)),
      onMouseenter: Pe,
      onMouseleave: bn
    }, [
      W(" input "),
      x.type !== "textarea" ? (_(), B(ze, { key: 0 }, [
        W(" prepend slot "),
        x.$slots.prepend ? (_(), B("div", {
          key: 0,
          class: M(c(d).be("group", "prepend"))
        }, [
          G(x.$slots, "prepend")
        ], 2)) : W("v-if", !0),
        R("div", {
          ref_key: "wrapperRef",
          ref: E,
          class: M(c(l))
        }, [
          W(" prefix slot "),
          x.$slots.prefix || x.prefixIcon ? (_(), B("span", {
            key: 0,
            class: M(c(d).e("prefix"))
          }, [
            R("span", {
              class: M(c(d).e("prefix-inner"))
            }, [
              G(x.$slots, "prefix"),
              x.prefixIcon ? (_(), K(c(Ie), {
                key: 0,
                class: M(c(d).e("icon"))
              }, {
                default: H(() => [
                  (_(), K(Me(x.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0),
          R("input", Ht({
            id: c(f),
            ref_key: "input",
            ref: b,
            class: c(d).e("inner")
          }, c(s), {
            minlength: x.minlength,
            maxlength: x.maxlength,
            type: x.showPassword ? I.value ? "text" : "password" : x.type,
            disabled: c(g),
            readonly: x.readonly,
            autocomplete: x.autocomplete,
            tabindex: x.tabindex,
            "aria-label": x.ariaLabel,
            placeholder: x.placeholder,
            style: x.inputStyle,
            form: x.form,
            autofocus: x.autofocus,
            role: x.containerRole,
            onCompositionstart: c(Yt),
            onCompositionupdate: c(vn),
            onCompositionend: c(hn),
            onInput: Gt,
            onChange: mt,
            onKeydown: lt
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          W(" suffix slot "),
          c(it) ? (_(), B("span", {
            key: 1,
            class: M(c(d).e("suffix"))
          }, [
            R("span", {
              class: M(c(d).e("suffix-inner"))
            }, [
              !c(U) || !c(te) || !c(ne) ? (_(), B(ze, { key: 0 }, [
                G(x.$slots, "suffix"),
                x.suffixIcon ? (_(), K(c(Ie), {
                  key: 0,
                  class: M(c(d).e("icon"))
                }, {
                  default: H(() => [
                    (_(), K(Me(x.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : W("v-if", !0)
              ], 64)) : W("v-if", !0),
              c(U) ? (_(), K(c(Ie), {
                key: 1,
                class: M([c(d).e("icon"), c(d).e("clear")]),
                onMousedown: Te(c(Et), ["prevent"]),
                onClick: Zt
              }, {
                default: H(() => [
                  X(c(sa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : W("v-if", !0),
              c(te) ? (_(), K(c(Ie), {
                key: 2,
                class: M([c(d).e("icon"), c(d).e("password")]),
                onClick: gn
              }, {
                default: H(() => [
                  (_(), K(Me(c(ae))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0),
              c(ne) ? (_(), B("span", {
                key: 3,
                class: M(c(d).e("count"))
              }, [
                R("span", {
                  class: M(c(d).e("count-inner"))
                }, Y(c(Qe)) + " / " + Y(x.maxlength), 3)
              ], 2)) : W("v-if", !0),
              c(P) && c(j) && c(N) ? (_(), K(c(Ie), {
                key: 4,
                class: M([
                  c(d).e("icon"),
                  c(d).e("validateIcon"),
                  c(d).is("loading", c(P) === "validating")
                ])
              }, {
                default: H(() => [
                  (_(), K(Me(c(j))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0)
        ], 2),
        W(" append slot "),
        x.$slots.append ? (_(), B("div", {
          key: 1,
          class: M(c(d).be("group", "append"))
        }, [
          G(x.$slots, "append")
        ], 2)) : W("v-if", !0)
      ], 64)) : (_(), B(ze, { key: 1 }, [
        W(" textarea "),
        R("textarea", Ht({
          id: c(f),
          ref_key: "textarea",
          ref: m,
          class: [c(h).e("inner"), c(d).is("focus", c(F))]
        }, c(s), {
          minlength: x.minlength,
          maxlength: x.maxlength,
          tabindex: x.tabindex,
          disabled: c(g),
          readonly: x.readonly,
          autocomplete: x.autocomplete,
          style: c(Q),
          "aria-label": x.ariaLabel,
          placeholder: x.placeholder,
          form: x.form,
          autofocus: x.autofocus,
          rows: x.rows,
          role: x.containerRole,
          onCompositionstart: c(Yt),
          onCompositionupdate: c(vn),
          onCompositionend: c(hn),
          onInput: Gt,
          onFocus: c(O),
          onBlur: c(V),
          onChange: mt,
          onKeydown: lt
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(ne) ? (_(), B("span", {
          key: 0,
          style: ve($.value),
          class: M(c(d).e("count"))
        }, Y(c(Qe)) + " / " + Y(x.maxlength), 7)) : W("v-if", !0)
      ], 64))
    ], 38));
  }
});
var ig = /* @__PURE__ */ ie(sg, [["__file", "input.vue"]]);
const lg = Je(ig), Sn = 4, ug = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, cg = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ua = Symbol("scrollbarContextKey"), dg = se({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), fg = "Thumb", pg = /* @__PURE__ */ z({
  __name: "thumb",
  props: dg,
  setup(e) {
    const t = e, n = re(ua), o = ce("scrollbar");
    n || el(fg, "can not inject scrollbar context");
    const r = A(), s = A(), a = A({}), i = A(!1);
    let l = !1, u = !1, p = ue ? document.onselectstart : null;
    const f = y(() => ug[t.vertical ? "vertical" : "horizontal"]), v = y(() => cg({
      size: t.size,
      move: t.move,
      bar: f.value
    })), g = y(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / s.value[f.value.offset]), d = (T) => {
      var E;
      if (T.stopPropagation(), T.ctrlKey || [1, 2].includes(T.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), b(T);
      const F = T.currentTarget;
      F && (a.value[f.value.axis] = F[f.value.offset] - (T[f.value.client] - F.getBoundingClientRect()[f.value.direction]));
    }, h = (T) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const E = Math.abs(T.target.getBoundingClientRect()[f.value.direction] - T[f.value.client]), F = s.value[f.value.offset] / 2, O = (E - F) * 100 * g.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = O * n.wrapElement[f.value.scrollSize] / 100;
    }, b = (T) => {
      T.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", C), p = document.onselectstart, document.onselectstart = () => !1;
    }, m = (T) => {
      if (!r.value || !s.value || l === !1)
        return;
      const E = a.value[f.value.axis];
      if (!E)
        return;
      const F = (r.value.getBoundingClientRect()[f.value.direction] - T[f.value.client]) * -1, O = s.value[f.value.offset] - E, V = (F - O) * 100 * g.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = V * n.wrapElement[f.value.scrollSize] / 100;
    }, C = () => {
      l = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", C), S(), u && (i.value = !1);
    }, I = () => {
      u = !1, i.value = !!t.size;
    }, $ = () => {
      u = !0, i.value = l;
    };
    st(() => {
      S(), document.removeEventListener("mouseup", C);
    });
    const S = () => {
      document.onselectstart !== p && (document.onselectstart = p);
    };
    return Oe(nt(n, "scrollbarElement"), "mousemove", I), Oe(nt(n, "scrollbarElement"), "mouseleave", $), (T, E) => (_(), K(cn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: H(() => [
        $e(R("div", {
          ref_key: "instance",
          ref: r,
          class: M([c(o).e("bar"), c(o).is(c(f).key)]),
          onMousedown: h
        }, [
          R("div", {
            ref_key: "thumb",
            ref: s,
            class: M(c(o).e("thumb")),
            style: ve(c(v)),
            onMousedown: d
          }, null, 38)
        ], 34), [
          [rt, T.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ks = /* @__PURE__ */ ie(pg, [["__file", "thumb.vue"]]);
const vg = se({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), hg = /* @__PURE__ */ z({
  __name: "bar",
  props: vg,
  setup(e, { expose: t }) {
    const n = e, o = re(ua), r = A(0), s = A(0), a = A(""), i = A(""), l = A(1), u = A(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const g = v.offsetHeight - Sn, d = v.offsetWidth - Sn;
          s.value = v.scrollTop * 100 / g * l.value, r.value = v.scrollLeft * 100 / d * u.value;
        }
      },
      update: () => {
        const v = o?.wrapElement;
        if (!v)
          return;
        const g = v.offsetHeight - Sn, d = v.offsetWidth - Sn, h = g ** 2 / v.scrollHeight, b = d ** 2 / v.scrollWidth, m = Math.max(h, n.minSize), C = Math.max(b, n.minSize);
        l.value = h / (g - h) / (m / (g - m)), u.value = b / (d - b) / (C / (d - C)), i.value = m + Sn < g ? `${m}px` : "", a.value = C + Sn < d ? `${C}px` : "";
      }
    }), (v, g) => (_(), B(ze, null, [
      X(Ks, {
        move: r.value,
        ratio: u.value,
        size: a.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      X(Ks, {
        move: s.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var gg = /* @__PURE__ */ ie(hg, [["__file", "bar.vue"]]);
const mg = se({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: q([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  tabindex: {
    type: [String, Number],
    default: void 0
  },
  id: String,
  role: String,
  ...Dn(["ariaLabel", "ariaOrientation"])
}), bg = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(he)
}, Rr = "ElScrollbar", yg = z({
  name: Rr
}), wg = /* @__PURE__ */ z({
  ...yg,
  props: mg,
  emits: bg,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ce("scrollbar");
    let s, a, i = 0, l = 0;
    const u = A(), p = A(), f = A(), v = A(), g = y(() => {
      const S = {};
      return o.height && (S.height = Ut(o.height)), o.maxHeight && (S.maxHeight = Ut(o.maxHeight)), [o.wrapStyle, S];
    }), d = y(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), h = y(() => [r.e("view"), o.viewClass]), b = () => {
      var S;
      p.value && ((S = v.value) == null || S.handleScroll(p.value), i = p.value.scrollTop, l = p.value.scrollLeft, n("scroll", {
        scrollTop: p.value.scrollTop,
        scrollLeft: p.value.scrollLeft
      }));
    };
    function m(S, T) {
      Ce(S) ? p.value.scrollTo(S) : he(S) && he(T) && p.value.scrollTo(S, T);
    }
    const C = (S) => {
      if (!he(S)) {
        ye(Rr, "value must be a number");
        return;
      }
      p.value.scrollTop = S;
    }, I = (S) => {
      if (!he(S)) {
        ye(Rr, "value must be a number");
        return;
      }
      p.value.scrollLeft = S;
    }, $ = () => {
      var S;
      (S = v.value) == null || S.update();
    };
    return Z(() => o.noresize, (S) => {
      S ? (s?.(), a?.()) : ({ stop: s } = tt(f, $), a = Oe("resize", $));
    }, { immediate: !0 }), Z(() => [o.maxHeight, o.height], () => {
      o.native || fe(() => {
        var S;
        $(), p.value && ((S = v.value) == null || S.handleScroll(p.value));
      });
    }), qe(ua, Wt({
      scrollbarElement: u,
      wrapElement: p
    })), Vu(() => {
      p.value && (p.value.scrollTop = i, p.value.scrollLeft = l);
    }), ge(() => {
      o.native || fe(() => {
        $();
      });
    }), Hu(() => $()), t({
      wrapRef: p,
      update: $,
      scrollTo: m,
      setScrollTop: C,
      setScrollLeft: I,
      handleScroll: b
    }), (S, T) => (_(), B("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: M(c(r).b())
    }, [
      R("div", {
        ref_key: "wrapRef",
        ref: p,
        class: M(c(d)),
        style: ve(c(g)),
        tabindex: S.tabindex,
        onScroll: b
      }, [
        (_(), K(Me(S.tag), {
          id: S.id,
          ref_key: "resizeRef",
          ref: f,
          class: M(c(h)),
          style: ve(S.viewStyle),
          role: S.role,
          "aria-label": S.ariaLabel,
          "aria-orientation": S.ariaOrientation
        }, {
          default: H(() => [
            G(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      S.native ? W("v-if", !0) : (_(), K(gg, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        always: S.always,
        "min-size": S.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var _g = /* @__PURE__ */ ie(wg, [["__file", "scrollbar.vue"]]);
const Sg = Je(_g), ca = Symbol("popper"), wl = Symbol("popperContent"), Cg = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], _l = se({
  role: {
    type: String,
    values: Cg,
    default: "tooltip"
  }
}), Eg = z({
  name: "ElPopper",
  inheritAttrs: !1
}), Tg = /* @__PURE__ */ z({
  ...Eg,
  props: _l,
  setup(e, { expose: t }) {
    const n = e, o = A(), r = A(), s = A(), a = A(), i = y(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: i
    };
    return t(l), qe(ca, l), (u, p) => G(u.$slots, "default");
  }
});
var Og = /* @__PURE__ */ ie(Tg, [["__file", "popper.vue"]]);
const Sl = se({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Ig = z({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), $g = /* @__PURE__ */ z({
  ...Ig,
  props: Sl,
  setup(e, { expose: t }) {
    const n = e, o = ce("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = re(wl, void 0);
    return Z(() => n.arrowOffset, (i) => {
      r.value = i;
    }), st(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, l) => (_(), B("span", {
      ref_key: "arrowRef",
      ref: s,
      class: M(c(o).e("arrow")),
      style: ve(c(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Ag = /* @__PURE__ */ ie($g, [["__file", "arrow.vue"]]);
const Cl = se({
  virtualRef: {
    type: q(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: q(Function)
  },
  onMouseleave: {
    type: q(Function)
  },
  onClick: {
    type: q(Function)
  },
  onKeydown: {
    type: q(Function)
  },
  onFocus: {
    type: q(Function)
  },
  onBlur: {
    type: q(Function)
  },
  onContextmenu: {
    type: q(Function)
  },
  id: String,
  open: Boolean
}), El = Symbol("elForwardRef"), Pg = (e) => {
  qe(El, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Rg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Mr = (e) => {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.tabIndex < 0 || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true")
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return !(e.type === "hidden" || e.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}, vr = "ElOnlyChild", Mg = z({
  name: vr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = re(El), s = Rg((o = r?.setForwardRef) != null ? o : Et);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return ye(vr, "requires exact only one valid child."), null;
      const l = Tl(i);
      return l ? $e(Wu(l, n), [[s]]) : (ye(vr, "no valid child node found"), null);
    };
  }
});
function Tl(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Ce(n))
      switch (n.type) {
        case ju:
          continue;
        case Ci:
        case "svg":
          return Gs(n);
        case ze:
          return Tl(n.children);
        default:
          return n;
      }
    return Gs(n);
  }
  return null;
}
function Gs(e) {
  const t = ce("only-child");
  return X("span", {
    class: t.e("content")
  }, [e]);
}
const Lg = z({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), xg = /* @__PURE__ */ z({
  ...Lg,
  props: Cl,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = re(ca, void 0);
    Pg(r);
    const s = y(() => i.value ? n.id : void 0), a = y(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = y(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = y(() => i.value ? `${n.open}` : void 0);
    let u;
    const p = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return ge(() => {
      Z(() => n.virtualRef, (f) => {
        f && (r.value = Ct(f));
      }, {
        immediate: !0
      }), Z(r, (f, v) => {
        u?.(), u = void 0, Ke(f) && (p.forEach((g) => {
          var d;
          const h = n[g];
          h && (f.addEventListener(g.slice(2).toLowerCase(), h), (d = v?.removeEventListener) == null || d.call(v, g.slice(2).toLowerCase(), h));
        }), Mr(f) && (u = Z([s, a, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((d, h) => {
            Yo(g[h]) ? f.removeAttribute(d) : f.setAttribute(d, g[h]);
          });
        }, { immediate: !0 }))), Ke(v) && Mr(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => v.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), st(() => {
      if (u?.(), u = void 0, r.value && Ke(r.value)) {
        const f = r.value;
        p.forEach((v) => {
          const g = n[v];
          g && f.removeEventListener(v.slice(2).toLowerCase(), g);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (f, v) => f.virtualTriggering ? W("v-if", !0) : (_(), K(c(Mg), Ht({ key: 0 }, f.$attrs, {
      "aria-controls": c(s),
      "aria-describedby": c(a),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: H(() => [
        G(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Ng = /* @__PURE__ */ ie(xg, [["__file", "trigger.vue"]]);
const hr = "focus-trap.focus-after-trapped", gr = "focus-trap.focus-after-released", kg = "focus-trap.focusout-prevented", qs = {
  cancelable: !0,
  bubbles: !1
}, Dg = {
  cancelable: !0,
  bubbles: !1
}, Ys = "focusAfterTrapped", Zs = "focusAfterReleased", Ol = Symbol("elFocusTrap"), da = A(), tr = A(0), fa = A(0);
let yo = 0;
const Il = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Xs = (e, t) => {
  for (const n of e)
    if (!Bg(n, t))
      return n;
}, Bg = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Fg = (e) => {
  const t = Il(e), n = Xs(t, e), o = Xs(t.reverse(), e);
  return [n, o];
}, zg = (e) => e instanceof HTMLInputElement && "select" in e, _t = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Ke(e) && !Mr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), fa.value = window.performance.now(), e !== n && zg(e) && t && e.select(), Ke(e) && o && e.removeAttribute("tabindex");
  }
};
function Js(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Vg = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Js(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = Js(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, Hg = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (_t(o, t), document.activeElement !== n)
      return;
}, Qs = Vg(), Wg = () => tr.value > fa.value, wo = () => {
  da.value = "pointer", tr.value = window.performance.now();
}, ei = () => {
  da.value = "keyboard", tr.value = window.performance.now();
}, jg = () => (ge(() => {
  yo === 0 && (document.addEventListener("mousedown", wo), document.addEventListener("touchstart", wo), document.addEventListener("keydown", ei)), yo++;
}), st(() => {
  yo--, yo <= 0 && (document.removeEventListener("mousedown", wo), document.removeEventListener("touchstart", wo), document.removeEventListener("keydown", ei));
}), {
  focusReason: da,
  lastUserFocusTimestamp: tr,
  lastAutomatedFocusTimestamp: fa
}), _o = (e) => new CustomEvent(kg, {
  ...Dg,
  detail: e
}), dt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let En = [];
const ti = (e) => {
  e.code === dt.esc && En.forEach((t) => t(e));
}, Ug = (e) => {
  ge(() => {
    En.length === 0 && document.addEventListener("keydown", ti), ue && En.push(e);
  }), st(() => {
    En = En.filter((t) => t !== e), En.length === 0 && ue && document.removeEventListener("keydown", ti);
  });
}, Kg = z({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Ys,
    Zs,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = A();
    let o, r;
    const { focusReason: s } = jg();
    Ug((d) => {
      e.trapped && !a.paused && t("release-requested", d);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (d) => {
      if (!e.loop && !e.trapped || a.paused)
        return;
      const { code: h, altKey: b, ctrlKey: m, metaKey: C, currentTarget: I, shiftKey: $ } = d, { loop: S } = e, T = h === dt.tab && !b && !m && !C, E = document.activeElement;
      if (T && E) {
        const F = I, [O, V] = Fg(F);
        if (O && V) {
          if (!$ && E === V) {
            const P = _o({
              focusReason: s.value
            });
            t("focusout-prevented", P), P.defaultPrevented || (d.preventDefault(), S && _t(O, !0));
          } else if ($ && [O, F].includes(E)) {
            const P = _o({
              focusReason: s.value
            });
            t("focusout-prevented", P), P.defaultPrevented || (d.preventDefault(), S && _t(V, !0));
          }
        } else if (E === F) {
          const P = _o({
            focusReason: s.value
          });
          t("focusout-prevented", P), P.defaultPrevented || d.preventDefault();
        }
      }
    };
    qe(Ol, {
      focusTrapRef: n,
      onKeydown: i
    }), Z(() => e.focusTrapEl, (d) => {
      d && (n.value = d);
    }, { immediate: !0 }), Z([n], ([d], [h]) => {
      d && (d.addEventListener("keydown", i), d.addEventListener("focusin", p), d.addEventListener("focusout", f)), h && (h.removeEventListener("keydown", i), h.removeEventListener("focusin", p), h.removeEventListener("focusout", f));
    });
    const l = (d) => {
      t(Ys, d);
    }, u = (d) => t(Zs, d), p = (d) => {
      const h = c(n);
      if (!h)
        return;
      const b = d.target, m = d.relatedTarget, C = b && h.contains(b);
      e.trapped || m && h.contains(m) || (o = m), C && t("focusin", d), !a.paused && e.trapped && (C ? r = b : _t(r, !0));
    }, f = (d) => {
      const h = c(n);
      if (!(a.paused || !h))
        if (e.trapped) {
          const b = d.relatedTarget;
          !Yo(b) && !h.contains(b) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const m = _o({
                focusReason: s.value
              });
              t("focusout-prevented", m), m.defaultPrevented || _t(r, !0);
            }
          }, 0);
        } else {
          const b = d.target;
          b && h.contains(b) || t("focusout", d);
        }
    };
    async function v() {
      await fe();
      const d = c(n);
      if (d) {
        Qs.push(a);
        const h = d.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !d.contains(h)) {
          const m = new Event(hr, qs);
          d.addEventListener(hr, l), d.dispatchEvent(m), m.defaultPrevented || fe(() => {
            let C = e.focusStartEl;
            be(C) || (_t(C), document.activeElement !== C && (C = "first")), C === "first" && Hg(Il(d), !0), (document.activeElement === h || C === "container") && _t(d);
          });
        }
      }
    }
    function g() {
      const d = c(n);
      if (d) {
        d.removeEventListener(hr, l);
        const h = new CustomEvent(gr, {
          ...qs,
          detail: {
            focusReason: s.value
          }
        });
        d.addEventListener(gr, u), d.dispatchEvent(h), !h.defaultPrevented && (s.value == "keyboard" || !Wg() || d.contains(document.activeElement)) && _t(o ?? document.body), d.removeEventListener(gr, u), Qs.remove(a);
      }
    }
    return ge(() => {
      e.trapped && v(), Z(() => e.trapped, (d) => {
        d ? v() : g();
      });
    }), st(() => {
      e.trapped && g(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", p), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function Gg(e, t, n, o, r, s) {
  return G(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var $l = /* @__PURE__ */ ie(Kg, [["render", Gg], ["__file", "focus-trap.vue"]]), Le = "top", Ze = "bottom", Xe = "right", xe = "left", pa = "auto", uo = [Le, Ze, Xe, xe], An = "start", oo = "end", qg = "clippingParents", Al = "viewport", jn = "popper", Yg = "reference", ni = uo.reduce(function(e, t) {
  return e.concat([t + "-" + An, t + "-" + oo]);
}, []), nr = [].concat(uo, [pa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + An, t + "-" + oo]);
}, []), Zg = "beforeRead", Xg = "read", Jg = "afterRead", Qg = "beforeMain", em = "main", tm = "afterMain", nm = "beforeWrite", om = "write", rm = "afterWrite", am = [Zg, Xg, Jg, Qg, em, tm, nm, om, rm];
function vt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ve(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function un(e) {
  var t = Ve(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ge(e) {
  var t = Ve(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function va(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ve(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function sm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !Ge(s) || !vt(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var i = r[a];
      i === !1 ? s.removeAttribute(a) : s.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function im(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Ge(r) || !vt(r) || (Object.assign(r.style, i), Object.keys(s).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Pl = { name: "applyStyles", enabled: !0, phase: "write", fn: sm, effect: im, requires: ["computeStyles"] };
function ft(e) {
  return e.split("-")[0];
}
var rn = Math.max, Ho = Math.min, Pn = Math.round;
function Lr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Rl() {
  return !/^((?!chrome|android).)*safari/i.test(Lr());
}
function Rn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && Ge(e) && (r = e.offsetWidth > 0 && Pn(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Pn(o.height) / e.offsetHeight || 1);
  var a = un(e) ? Ve(e) : window, i = a.visualViewport, l = !Rl() && n, u = (o.left + (l && i ? i.offsetLeft : 0)) / r, p = (o.top + (l && i ? i.offsetTop : 0)) / s, f = o.width / r, v = o.height / s;
  return { width: f, height: v, top: p, right: u + f, bottom: p + v, left: u, x: u, y: p };
}
function ha(e) {
  var t = Rn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Ml(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && va(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function It(e) {
  return Ve(e).getComputedStyle(e);
}
function lm(e) {
  return ["table", "td", "th"].indexOf(vt(e)) >= 0;
}
function Kt(e) {
  return ((un(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function or(e) {
  return vt(e) === "html" ? e : e.assignedSlot || e.parentNode || (va(e) ? e.host : null) || Kt(e);
}
function oi(e) {
  return !Ge(e) || It(e).position === "fixed" ? null : e.offsetParent;
}
function um(e) {
  var t = /firefox/i.test(Lr()), n = /Trident/i.test(Lr());
  if (n && Ge(e)) {
    var o = It(e);
    if (o.position === "fixed") return null;
  }
  var r = or(e);
  for (va(r) && (r = r.host); Ge(r) && ["html", "body"].indexOf(vt(r)) < 0; ) {
    var s = It(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function co(e) {
  for (var t = Ve(e), n = oi(e); n && lm(n) && It(n).position === "static"; ) n = oi(n);
  return n && (vt(n) === "html" || vt(n) === "body" && It(n).position === "static") ? t : n || um(e) || t;
}
function ga(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zn(e, t, n) {
  return rn(e, Ho(t, n));
}
function cm(e, t, n) {
  var o = Zn(e, t, n);
  return o > n ? n : o;
}
function Ll() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function xl(e) {
  return Object.assign({}, Ll(), e);
}
function Nl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var dm = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, xl(typeof e != "number" ? e : Nl(e, uo));
};
function fm(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = ft(n.placement), l = ga(i), u = [xe, Xe].indexOf(i) >= 0, p = u ? "height" : "width";
  if (!(!s || !a)) {
    var f = dm(r.padding, n), v = ha(s), g = l === "y" ? Le : xe, d = l === "y" ? Ze : Xe, h = n.rects.reference[p] + n.rects.reference[l] - a[l] - n.rects.popper[p], b = a[l] - n.rects.reference[l], m = co(s), C = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, I = h / 2 - b / 2, $ = f[g], S = C - v[p] - f[d], T = C / 2 - v[p] / 2 + I, E = Zn($, T, S), F = l;
    n.modifiersData[o] = (t = {}, t[F] = E, t.centerOffset = E - T, t);
  }
}
function pm(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ml(t.elements.popper, r) && (t.elements.arrow = r));
}
var vm = { name: "arrow", enabled: !0, phase: "main", fn: fm, effect: pm, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Mn(e) {
  return e.split("-")[1];
}
var hm = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function gm(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Pn(n * r) / r || 0, y: Pn(o * r) / r || 0 };
}
function ri(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, f = e.isFixed, v = a.x, g = v === void 0 ? 0 : v, d = a.y, h = d === void 0 ? 0 : d, b = typeof p == "function" ? p({ x: g, y: h }) : { x: g, y: h };
  g = b.x, h = b.y;
  var m = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), I = xe, $ = Le, S = window;
  if (u) {
    var T = co(n), E = "clientHeight", F = "clientWidth";
    if (T === Ve(n) && (T = Kt(n), It(T).position !== "static" && i === "absolute" && (E = "scrollHeight", F = "scrollWidth")), T = T, r === Le || (r === xe || r === Xe) && s === oo) {
      $ = Ze;
      var O = f && T === S && S.visualViewport ? S.visualViewport.height : T[E];
      h -= O - o.height, h *= l ? 1 : -1;
    }
    if (r === xe || (r === Le || r === Ze) && s === oo) {
      I = Xe;
      var V = f && T === S && S.visualViewport ? S.visualViewport.width : T[F];
      g -= V - o.width, g *= l ? 1 : -1;
    }
  }
  var N = Object.assign({ position: i }, u && hm), P = p === !0 ? gm({ x: g, y: h }, Ve(n)) : { x: g, y: h };
  if (g = P.x, h = P.y, l) {
    var j;
    return Object.assign({}, N, (j = {}, j[$] = C ? "0" : "", j[I] = m ? "0" : "", j.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + h + "px)" : "translate3d(" + g + "px, " + h + "px, 0)", j));
  }
  return Object.assign({}, N, (t = {}, t[$] = C ? h + "px" : "", t[I] = m ? g + "px" : "", t.transform = "", t));
}
function mm(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: ft(t.placement), variation: Mn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ri(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ri(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var kl = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: mm, data: {} }, So = { passive: !0 };
function bm(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, i = a === void 0 ? !0 : a, l = Ve(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(p) {
    p.addEventListener("scroll", n.update, So);
  }), i && l.addEventListener("resize", n.update, So), function() {
    s && u.forEach(function(p) {
      p.removeEventListener("scroll", n.update, So);
    }), i && l.removeEventListener("resize", n.update, So);
  };
}
var Dl = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: bm, data: {} }, ym = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Io(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ym[t];
  });
}
var wm = { start: "end", end: "start" };
function ai(e) {
  return e.replace(/start|end/g, function(t) {
    return wm[t];
  });
}
function ma(e) {
  var t = Ve(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function ba(e) {
  return Rn(Kt(e)).left + ma(e).scrollLeft;
}
function _m(e, t) {
  var n = Ve(e), o = Kt(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, i = 0, l = 0;
  if (r) {
    s = r.width, a = r.height;
    var u = Rl();
    (u || !u && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return { width: s, height: a, x: i + ba(e), y: l };
}
function Sm(e) {
  var t, n = Kt(e), o = ma(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = rn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = rn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + ba(e), l = -o.scrollTop;
  return It(r || n).direction === "rtl" && (i += rn(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: i, y: l };
}
function ya(e) {
  var t = It(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Bl(e) {
  return ["html", "body", "#document"].indexOf(vt(e)) >= 0 ? e.ownerDocument.body : Ge(e) && ya(e) ? e : Bl(or(e));
}
function Xn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Bl(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Ve(o), a = r ? [s].concat(s.visualViewport || [], ya(o) ? o : []) : o, i = t.concat(a);
  return r ? i : i.concat(Xn(or(a)));
}
function xr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Cm(e, t) {
  var n = Rn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function si(e, t, n) {
  return t === Al ? xr(_m(e, n)) : un(t) ? Cm(t, n) : xr(Sm(Kt(e)));
}
function Em(e) {
  var t = Xn(or(e)), n = ["absolute", "fixed"].indexOf(It(e).position) >= 0, o = n && Ge(e) ? co(e) : e;
  return un(o) ? t.filter(function(r) {
    return un(r) && Ml(r, o) && vt(r) !== "body";
  }) : [];
}
function Tm(e, t, n, o) {
  var r = t === "clippingParents" ? Em(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], i = s.reduce(function(l, u) {
    var p = si(e, u, o);
    return l.top = rn(p.top, l.top), l.right = Ho(p.right, l.right), l.bottom = Ho(p.bottom, l.bottom), l.left = rn(p.left, l.left), l;
  }, si(e, a, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Fl(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? ft(o) : null, s = o ? Mn(o) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case Le:
      l = { x: a, y: t.y - n.height };
      break;
    case Ze:
      l = { x: a, y: t.y + t.height };
      break;
    case Xe:
      l = { x: t.x + t.width, y: i };
      break;
    case xe:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? ga(r) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (s) {
      case An:
        l[u] = l[u] - (t[p] / 2 - n[p] / 2);
        break;
      case oo:
        l[u] = l[u] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return l;
}
function ro(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, i = n.boundary, l = i === void 0 ? qg : i, u = n.rootBoundary, p = u === void 0 ? Al : u, f = n.elementContext, v = f === void 0 ? jn : f, g = n.altBoundary, d = g === void 0 ? !1 : g, h = n.padding, b = h === void 0 ? 0 : h, m = xl(typeof b != "number" ? b : Nl(b, uo)), C = v === jn ? Yg : jn, I = e.rects.popper, $ = e.elements[d ? C : v], S = Tm(un($) ? $ : $.contextElement || Kt(e.elements.popper), l, p, a), T = Rn(e.elements.reference), E = Fl({ reference: T, element: I, placement: r }), F = xr(Object.assign({}, I, E)), O = v === jn ? F : T, V = { top: S.top - O.top + m.top, bottom: O.bottom - S.bottom + m.bottom, left: S.left - O.left + m.left, right: O.right - S.right + m.right }, N = e.modifiersData.offset;
  if (v === jn && N) {
    var P = N[r];
    Object.keys(V).forEach(function(j) {
      var ae = [Xe, Ze].indexOf(j) >= 0 ? 1 : -1, J = [Le, Ze].indexOf(j) >= 0 ? "y" : "x";
      V[j] += P[J] * ae;
    });
  }
  return V;
}
function Om(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? nr : l, p = Mn(o), f = p ? i ? ni : ni.filter(function(d) {
    return Mn(d) === p;
  }) : uo, v = f.filter(function(d) {
    return u.indexOf(d) >= 0;
  });
  v.length === 0 && (v = f);
  var g = v.reduce(function(d, h) {
    return d[h] = ro(e, { placement: h, boundary: r, rootBoundary: s, padding: a })[ft(h)], d;
  }, {});
  return Object.keys(g).sort(function(d, h) {
    return g[d] - g[h];
  });
}
function Im(e) {
  if (ft(e) === pa) return [];
  var t = Io(e);
  return [ai(e), t, ai(t)];
}
function $m(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, p = n.boundary, f = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, d = g === void 0 ? !0 : g, h = n.allowedAutoPlacements, b = t.options.placement, m = ft(b), C = m === b, I = l || (C || !d ? [Io(b)] : Im(b)), $ = [b].concat(I).reduce(function(He, Ae) {
      return He.concat(ft(Ae) === pa ? Om(t, { placement: Ae, boundary: p, rootBoundary: f, padding: u, flipVariations: d, allowedAutoPlacements: h }) : Ae);
    }, []), S = t.rects.reference, T = t.rects.popper, E = /* @__PURE__ */ new Map(), F = !0, O = $[0], V = 0; V < $.length; V++) {
      var N = $[V], P = ft(N), j = Mn(N) === An, ae = [Le, Ze].indexOf(P) >= 0, J = ae ? "width" : "height", Q = ro(t, { placement: N, boundary: p, rootBoundary: f, altBoundary: v, padding: u }), D = ae ? j ? Xe : xe : j ? Ze : Le;
      S[J] > T[J] && (D = Io(D));
      var U = Io(D), te = [];
      if (s && te.push(Q[P] <= 0), i && te.push(Q[D] <= 0, Q[U] <= 0), te.every(function(He) {
        return He;
      })) {
        O = N, F = !1;
        break;
      }
      E.set(N, te);
    }
    if (F) for (var ne = d ? 3 : 1, Qe = function(He) {
      var Ae = $.find(function(We) {
        var je = E.get(We);
        if (je) return je.slice(0, He).every(function(de) {
          return de;
        });
      });
      if (Ae) return O = Ae, "break";
    }, Ne = ne; Ne > 0; Ne--) {
      var it = Qe(Ne);
      if (it === "break") break;
    }
    t.placement !== O && (t.modifiersData[o]._skip = !0, t.placement = O, t.reset = !0);
  }
}
var Am = { name: "flip", enabled: !0, phase: "main", fn: $m, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ii(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function li(e) {
  return [Le, Xe, Ze, xe].some(function(t) {
    return e[t] >= 0;
  });
}
function Pm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = ro(t, { elementContext: "reference" }), i = ro(t, { altBoundary: !0 }), l = ii(a, o), u = ii(i, r, s), p = li(l), f = li(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: p, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": f });
}
var Rm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Pm };
function Mm(e, t, n) {
  var o = ft(e), r = [xe, Le].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * r, [xe, Xe].indexOf(o) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function Lm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = nr.reduce(function(p, f) {
    return p[f] = Mm(f, t.rects, s), p;
  }, {}), i = a[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var xm = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Lm };
function Nm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Fl({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var zl = { name: "popperOffsets", enabled: !0, phase: "read", fn: Nm, data: {} };
function km(e) {
  return e === "x" ? "y" : "x";
}
function Dm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, f = n.padding, v = n.tether, g = v === void 0 ? !0 : v, d = n.tetherOffset, h = d === void 0 ? 0 : d, b = ro(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: p }), m = ft(t.placement), C = Mn(t.placement), I = !C, $ = ga(m), S = km($), T = t.modifiersData.popperOffsets, E = t.rects.reference, F = t.rects.popper, O = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, V = typeof O == "number" ? { mainAxis: O, altAxis: O } : Object.assign({ mainAxis: 0, altAxis: 0 }, O), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, P = { x: 0, y: 0 };
  if (T) {
    if (s) {
      var j, ae = $ === "y" ? Le : xe, J = $ === "y" ? Ze : Xe, Q = $ === "y" ? "height" : "width", D = T[$], U = D + b[ae], te = D - b[J], ne = g ? -F[Q] / 2 : 0, Qe = C === An ? E[Q] : F[Q], Ne = C === An ? -F[Q] : -E[Q], it = t.elements.arrow, He = g && it ? ha(it) : { width: 0, height: 0 }, Ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ll(), We = Ae[ae], je = Ae[J], de = Zn(0, E[Q], He[Q]), gt = I ? E[Q] / 2 - ne - de - We - V.mainAxis : Qe - de - We - V.mainAxis, Gt = I ? -E[Q] / 2 + ne + de + je + V.mainAxis : Ne + de + je + V.mainAxis, mt = t.elements.arrow && co(t.elements.arrow), qt = mt ? $ === "y" ? mt.clientTop || 0 : mt.clientLeft || 0 : 0, Yt = (j = N?.[$]) != null ? j : 0, vn = D + gt - Yt - qt, hn = D + Gt - Yt, gn = Zn(g ? Ho(U, vn) : U, D, g ? rn(te, hn) : te);
      T[$] = gn, P[$] = gn - D;
    }
    if (i) {
      var mn, Pt = $ === "x" ? Le : xe, bn = $ === "x" ? Ze : Xe, Pe = T[S], lt = S === "y" ? "height" : "width", yn = Pe + b[Pt], Zt = Pe - b[bn], x = [Le, xe].indexOf(m) !== -1, oe = (mn = N?.[S]) != null ? mn : 0, Ue = x ? yn : Pe - E[lt] - F[lt] - oe + V.altAxis, Rt = x ? Pe + E[lt] + F[lt] - oe - V.altAxis : Zt, Mt = g && x ? cm(Ue, Pe, Rt) : Zn(g ? Ue : yn, Pe, g ? Rt : Zt);
      T[S] = Mt, P[S] = Mt - Pe;
    }
    t.modifiersData[o] = P;
  }
}
var Bm = { name: "preventOverflow", enabled: !0, phase: "main", fn: Dm, requiresIfExists: ["offset"] };
function Fm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function zm(e) {
  return e === Ve(e) || !Ge(e) ? ma(e) : Fm(e);
}
function Vm(e) {
  var t = e.getBoundingClientRect(), n = Pn(t.width) / e.offsetWidth || 1, o = Pn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Hm(e, t, n) {
  n === void 0 && (n = !1);
  var o = Ge(t), r = Ge(t) && Vm(t), s = Kt(t), a = Rn(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((vt(t) !== "body" || ya(s)) && (i = zm(t)), Ge(t) ? (l = Rn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = ba(s))), { x: a.left + i.scrollLeft - l.x, y: a.top + i.scrollTop - l.y, width: a.width, height: a.height };
}
function Wm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && r(l);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function jm(e) {
  var t = Wm(e);
  return am.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Um(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Km(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ui = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ci() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function wa(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? ui : r;
  return function(a, i, l) {
    l === void 0 && (l = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ui, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, p = [], f = !1, v = { state: u, setOptions: function(h) {
      var b = typeof h == "function" ? h(u.options) : h;
      d(), u.options = Object.assign({}, s, u.options, b), u.scrollParents = { reference: un(a) ? Xn(a) : a.contextElement ? Xn(a.contextElement) : [], popper: Xn(i) };
      var m = jm(Km([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(C) {
        return C.enabled;
      }), g(), v.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = u.elements, b = h.reference, m = h.popper;
        if (ci(b, m)) {
          u.rects = { reference: Hm(b, co(m), u.options.strategy === "fixed"), popper: ha(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(F) {
            return u.modifiersData[F.name] = Object.assign({}, F.data);
          });
          for (var C = 0; C < u.orderedModifiers.length; C++) {
            if (u.reset === !0) {
              u.reset = !1, C = -1;
              continue;
            }
            var I = u.orderedModifiers[C], $ = I.fn, S = I.options, T = S === void 0 ? {} : S, E = I.name;
            typeof $ == "function" && (u = $({ state: u, options: T, name: E, instance: v }) || u);
          }
        }
      }
    }, update: Um(function() {
      return new Promise(function(h) {
        v.forceUpdate(), h(u);
      });
    }), destroy: function() {
      d(), f = !0;
    } };
    if (!ci(a, i)) return v;
    v.setOptions(l).then(function(h) {
      !f && l.onFirstUpdate && l.onFirstUpdate(h);
    });
    function g() {
      u.orderedModifiers.forEach(function(h) {
        var b = h.name, m = h.options, C = m === void 0 ? {} : m, I = h.effect;
        if (typeof I == "function") {
          var $ = I({ state: u, name: b, instance: v, options: C }), S = function() {
          };
          p.push($ || S);
        }
      });
    }
    function d() {
      p.forEach(function(h) {
        return h();
      }), p = [];
    }
    return v;
  };
}
wa();
var Gm = [Dl, zl, kl, Pl];
wa({ defaultModifiers: Gm });
var qm = [Dl, zl, kl, Pl, xm, Am, Bm, vm, Rm], Ym = wa({ defaultModifiers: qm });
const Zm = ["fixed", "absolute"], Xm = se({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: q(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: nr,
    default: "bottom"
  },
  popperOptions: {
    type: q(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Zm,
    default: "absolute"
  }
}), Vl = se({
  ...Xm,
  id: String,
  style: {
    type: q([String, Array, Object])
  },
  className: {
    type: q([String, Array, Object])
  },
  effect: {
    type: q(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: q([String, Array, Object])
  },
  popperStyle: {
    type: q([String, Array, Object])
  },
  referenceEl: {
    type: q(Object)
  },
  triggerTargetEl: {
    type: q(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Dn(["ariaLabel"])
}), Jm = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Qm = (e, t) => {
  const n = A(!1), o = A();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var p;
      ((p = u.detail) == null ? void 0 : p.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (o.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, eb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...nb(e), ...t]
  };
  return ob(s, r?.modifiers), s;
}, tb = (e) => {
  if (ue)
    return Ct(e);
};
function nb(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function ob(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const rb = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = ab(l);
      Object.assign(a.value, u);
    },
    requires: ["computeStyles"]
  }, r = y(() => {
    const { onFirstUpdate: l, placement: u, strategy: p, modifiers: f } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: p || "absolute",
      modifiers: [
        ...f || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = on(), a = A({
    styles: {
      popper: {
        position: c(r).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return Z(r, (l) => {
    const u = c(s);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Z([e, t], ([l, u]) => {
    i(), !(!l || !u) && (s.value = Ym(l, u, c(r)));
  }), st(() => {
    i();
  }), {
    state: y(() => {
      var l;
      return { ...((l = c(s)) == null ? void 0 : l.state) || {} };
    }),
    styles: y(() => c(a).styles),
    attributes: y(() => c(a).attributes),
    update: () => {
      var l;
      return (l = c(s)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(s)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: y(() => c(s))
  };
};
function ab(e) {
  const t = Object.keys(e.elements), n = ko(t.map((r) => [r, e.styles[r] || {}])), o = ko(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const sb = 0, ib = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = re(ca, void 0), s = A(), a = A(), i = y(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = y(() => {
    var m;
    const C = c(s), I = (m = c(a)) != null ? m : sb;
    return {
      name: "arrow",
      enabled: !Zi(C),
      options: {
        element: C,
        padding: I
      }
    };
  }), u = y(() => ({
    onFirstUpdate: () => {
      d();
    },
    ...eb(e, [
      c(l),
      c(i)
    ])
  })), p = y(() => tb(e.referenceEl) || c(o)), { attributes: f, state: v, styles: g, update: d, forceUpdate: h, instanceRef: b } = rb(p, n, u);
  return Z(b, (m) => t.value = m), ge(() => {
    Z(() => {
      var m;
      return (m = c(p)) == null ? void 0 : m.getBoundingClientRect();
    }, () => {
      d();
    });
  }), {
    attributes: f,
    arrowRef: s,
    contentRef: n,
    instanceRef: b,
    state: v,
    styles: g,
    role: r,
    forceUpdate: h,
    update: d
  };
}, lb = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = oa(), s = ce("popper"), a = y(() => c(t).popper), i = A(he(e.zIndex) ? e.zIndex : r()), l = y(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), u = y(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), p = y(() => o.value === "dialog" ? "false" : void 0), f = y(() => c(n).arrow || {});
  return {
    ariaModal: p,
    arrowStyle: f,
    contentAttrs: a,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = he(e.zIndex) ? e.zIndex : r();
    }
  };
}, ub = z({
  name: "ElPopperContent"
}), cb = /* @__PURE__ */ z({
  ...ub,
  props: Vl,
  emits: Jm,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: p
    } = Qm(o, n), { attributes: f, arrowRef: v, contentRef: g, styles: d, instanceRef: h, role: b, update: m } = ib(o), {
      ariaModal: C,
      arrowStyle: I,
      contentAttrs: $,
      contentClass: S,
      contentStyle: T,
      updateZIndex: E
    } = lb(o, {
      styles: d,
      attributes: f,
      role: b
    }), F = re(Vo, void 0), O = A();
    qe(wl, {
      arrowStyle: I,
      arrowRef: v,
      arrowOffset: O
    }), F && qe(Vo, {
      ...F,
      addInputId: Et,
      removeInputId: Et
    });
    let V;
    const N = (j = !0) => {
      m(), j && E();
    }, P = () => {
      N(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return ge(() => {
      Z(() => o.triggerTargetEl, (j, ae) => {
        V?.(), V = void 0;
        const J = c(j || g.value), Q = c(ae || g.value);
        Ke(J) && (V = Z([b, () => o.ariaLabel, C, () => o.id], (D) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((U, te) => {
            Yo(D[te]) ? J.removeAttribute(U) : J.setAttribute(U, D[te]);
          });
        }, { immediate: !0 })), Q !== J && Ke(Q) && ["role", "aria-label", "aria-modal", "id"].forEach((D) => {
          Q.removeAttribute(D);
        });
      }, { immediate: !0 }), Z(() => o.visible, P, { immediate: !0 });
    }), st(() => {
      V?.(), V = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: h,
      updatePopper: N,
      contentStyle: T
    }), (j, ae) => (_(), B("div", Ht({
      ref_key: "contentRef",
      ref: g
    }, c($), {
      style: c(T),
      class: c(S),
      tabindex: "-1",
      onMouseenter: (J) => j.$emit("mouseenter", J),
      onMouseleave: (J) => j.$emit("mouseleave", J)
    }), [
      X(c($l), {
        trapped: c(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(g),
        "focus-start-el": c(r),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(a),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(p)
      }, {
        default: H(() => [
          G(j.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var db = /* @__PURE__ */ ie(cb, [["__file", "content.vue"]]);
const fb = Je(Og), _a = Symbol("elTooltip");
function di() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return so(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const pb = se({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), vb = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = di(), {
    registerTimeout: a,
    cancelTimeout: i
  } = di();
  return {
    onOpen: (p) => {
      s(() => {
        o(p);
        const f = c(n);
        he(f) && f > 0 && a(() => {
          r(p);
        }, f);
      }, c(e));
    },
    onClose: (p) => {
      i(), s(() => {
        r(p);
      }, c(t));
    }
  };
}, Sa = se({
  ...pb,
  ...Vl,
  appendTo: {
    type: q([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: q(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Dn(["ariaLabel"])
}), Hl = se({
  ...Cl,
  disabled: Boolean,
  trigger: {
    type: q([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: q(Array),
    default: () => [dt.enter, dt.numpadEnter, dt.space]
  }
}), hb = Zo({
  type: q(Boolean),
  default: null
}), gb = Zo({
  type: q(Function)
}), mb = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: hb,
    [n]: gb
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: p,
      onHide: f
    }) => {
      const v = Ee(), { emit: g } = v, d = v.props, h = y(() => pe(d[n])), b = y(() => d[e] === null), m = (E) => {
        a.value !== !0 && (a.value = !0, i && (i.value = E), pe(p) && p(E));
      }, C = (E) => {
        a.value !== !1 && (a.value = !1, i && (i.value = E), pe(f) && f(E));
      }, I = (E) => {
        if (d.disabled === !0 || pe(u) && !u())
          return;
        const F = h.value && ue;
        F && g(t, !0), (b.value || !F) && m(E);
      }, $ = (E) => {
        if (d.disabled === !0 || !ue)
          return;
        const F = h.value && ue;
        F && g(t, !1), (b.value || !F) && C(E);
      }, S = (E) => {
        sn(E) && (d.disabled && E ? h.value && g(t, !1) : a.value !== E && (E ? m() : C()));
      }, T = () => {
        a.value ? $() : I();
      };
      return Z(() => d[e], S), l && v.appContext.config.globalProperties.$route !== void 0 && Z(() => ({
        ...v.proxy.$route
      }), () => {
        l.value && a.value && $();
      }), ge(() => {
        S(d[e]);
      }), {
        hide: $,
        show: I,
        toggle: T,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: bb,
  useModelToggleEmits: yb,
  useModelToggle: wb
} = mb("visible"), _b = se({
  ..._l,
  ...bb,
  ...Sa,
  ...Hl,
  ...Sl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Sb = [
  ...yb,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Cb = (e, t) => we(e) ? e.includes(t) : e === t, Cn = (e, t, n) => (o) => {
  Cb(c(e), t) && n(o);
}, St = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, Eb = z({
  name: "ElTooltipTrigger"
}), Tb = /* @__PURE__ */ z({
  ...Eb,
  props: Hl,
  setup(e, { expose: t }) {
    const n = e, o = ce("tooltip"), { controlled: r, id: s, open: a, onOpen: i, onClose: l, onToggle: u } = re(_a, void 0), p = A(null), f = () => {
      if (c(r) || n.disabled)
        return !0;
    }, v = nt(n, "trigger"), g = St(f, Cn(v, "hover", i)), d = St(f, Cn(v, "hover", l)), h = St(f, Cn(v, "click", ($) => {
      $.button === 0 && u($);
    })), b = St(f, Cn(v, "focus", i)), m = St(f, Cn(v, "focus", l)), C = St(f, Cn(v, "contextmenu", ($) => {
      $.preventDefault(), u($);
    })), I = St(f, ($) => {
      const { code: S } = $;
      n.triggerKeys.includes(S) && ($.preventDefault(), u($));
    });
    return t({
      triggerRef: p
    }), ($, S) => (_(), K(c(Ng), {
      id: c(s),
      "virtual-ref": $.virtualRef,
      open: c(a),
      "virtual-triggering": $.virtualTriggering,
      class: M(c(o).e("trigger")),
      onBlur: c(m),
      onClick: c(h),
      onContextmenu: c(C),
      onFocus: c(b),
      onMouseenter: c(g),
      onMouseleave: c(d),
      onKeydown: c(I)
    }, {
      default: H(() => [
        G($.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Ob = /* @__PURE__ */ ie(Tb, [["__file", "trigger.vue"]]);
const Ib = se({
  to: {
    type: q([String, Object]),
    required: !0
  },
  disabled: Boolean
}), $b = /* @__PURE__ */ z({
  __name: "teleport",
  props: Ib,
  setup(e) {
    return (t, n) => t.disabled ? G(t.$slots, "default", { key: 0 }) : (_(), K(Uu, {
      key: 1,
      to: t.to
    }, [
      G(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Ab = /* @__PURE__ */ ie($b, [["__file", "teleport.vue"]]);
const Wl = Je(Ab), jl = () => {
  const e = qr(), t = hl(), n = y(() => `${e.value}-popper-container-${t.prefix}`), o = y(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Pb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Rb = () => {
  const { id: e, selector: t } = jl();
  return Ku(() => {
    ue && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && Pb(e.value);
  }), {
    id: e,
    selector: t
  };
}, Mb = z({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Lb = /* @__PURE__ */ z({
  ...Mb,
  props: Sa,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = jl(), r = ce("tooltip"), s = A();
    let a;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: p,
      onClose: f,
      onOpen: v,
      onShow: g,
      onHide: d,
      onBeforeShow: h,
      onBeforeHide: b
    } = re(_a, void 0), m = y(() => n.transition || `${r.namespace.value}-fade-in-linear`), C = y(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    st(() => {
      a?.();
    });
    const I = y(() => c(C) ? !0 : c(u)), $ = y(() => n.disabled ? !1 : c(u)), S = y(() => n.appendTo || o.value), T = y(() => {
      var D;
      return (D = n.style) != null ? D : {};
    }), E = A(!0), F = () => {
      d(), Q() && _t(document.body), E.value = !0;
    }, O = () => {
      if (c(i))
        return !0;
    }, V = St(O, () => {
      n.enterable && c(p) === "hover" && v();
    }), N = St(O, () => {
      c(p) === "hover" && f();
    }), P = () => {
      var D, U;
      (U = (D = s.value) == null ? void 0 : D.updatePopper) == null || U.call(D), h?.();
    }, j = () => {
      b?.();
    }, ae = () => {
      g(), a = Wv(y(() => {
        var D;
        return (D = s.value) == null ? void 0 : D.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(p) !== "hover" && f();
      });
    }, J = () => {
      n.virtualTriggering || f();
    }, Q = (D) => {
      var U;
      const te = (U = s.value) == null ? void 0 : U.popperContentRef, ne = D?.relatedTarget || document.activeElement;
      return te?.contains(ne);
    };
    return Z(() => c(u), (D) => {
      D ? E.value = !1 : a?.();
    }, {
      flush: "post"
    }), Z(() => n.content, () => {
      var D, U;
      (U = (D = s.value) == null ? void 0 : D.updatePopper) == null || U.call(D);
    }), t({
      contentRef: s,
      isFocusInsideContent: Q
    }), (D, U) => (_(), K(c(Wl), {
      disabled: !D.teleported,
      to: c(S)
    }, {
      default: H(() => [
        X(cn, {
          name: c(m),
          onAfterLeave: F,
          onBeforeEnter: P,
          onAfterEnter: ae,
          onBeforeLeave: j
        }, {
          default: H(() => [
            c(I) ? $e((_(), K(c(db), Ht({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: s
            }, D.$attrs, {
              "aria-label": D.ariaLabel,
              "aria-hidden": E.value,
              "boundaries-padding": D.boundariesPadding,
              "fallback-placements": D.fallbackPlacements,
              "gpu-acceleration": D.gpuAcceleration,
              offset: D.offset,
              placement: D.placement,
              "popper-options": D.popperOptions,
              strategy: D.strategy,
              effect: D.effect,
              enterable: D.enterable,
              pure: D.pure,
              "popper-class": D.popperClass,
              "popper-style": [D.popperStyle, c(T)],
              "reference-el": D.referenceEl,
              "trigger-target-el": D.triggerTargetEl,
              visible: c($),
              "z-index": D.zIndex,
              onMouseenter: c(V),
              onMouseleave: c(N),
              onBlur: J,
              onClose: c(f)
            }), {
              default: H(() => [
                G(D.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [rt, c($)]
            ]) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var xb = /* @__PURE__ */ ie(Lb, [["__file", "content.vue"]]);
const Nb = z({
  name: "ElTooltip"
}), kb = /* @__PURE__ */ z({
  ...Nb,
  props: _b,
  emits: Sb,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Rb();
    const r = ln(), s = A(), a = A(), i = () => {
      var m;
      const C = c(s);
      C && ((m = C.popperInstanceRef) == null || m.update());
    }, l = A(!1), u = A(), { show: p, hide: f, hasUpdateHandler: v } = wb({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: d } = vb({
      showAfter: nt(o, "showAfter"),
      hideAfter: nt(o, "hideAfter"),
      autoClose: nt(o, "autoClose"),
      open: p,
      close: f
    }), h = y(() => sn(o.visible) && !v.value);
    qe(_a, {
      controlled: h,
      id: r,
      open: Hr(l),
      trigger: nt(o, "trigger"),
      onOpen: (m) => {
        g(m);
      },
      onClose: (m) => {
        d(m);
      },
      onToggle: (m) => {
        c(l) ? d(m) : g(m);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: i
    }), Z(() => o.disabled, (m) => {
      m && l.value && (l.value = !1);
    });
    const b = (m) => {
      var C;
      return (C = a.value) == null ? void 0 : C.isFocusInsideContent(m);
    };
    return Gu(() => l.value && f()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: b,
      updatePopper: i,
      onOpen: g,
      onClose: d,
      hide: f
    }), (m, C) => (_(), K(c(fb), {
      ref_key: "popperRef",
      ref: s,
      role: m.role
    }, {
      default: H(() => [
        X(Ob, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: H(() => [
            m.$slots.default ? G(m.$slots, "default", { key: 0 }) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        X(xb, {
          ref_key: "contentRef",
          ref: a,
          "aria-label": m.ariaLabel,
          "boundaries-padding": m.boundariesPadding,
          content: m.content,
          disabled: m.disabled,
          effect: m.effect,
          enterable: m.enterable,
          "fallback-placements": m.fallbackPlacements,
          "hide-after": m.hideAfter,
          "gpu-acceleration": m.gpuAcceleration,
          offset: m.offset,
          persistent: m.persistent,
          "popper-class": m.popperClass,
          "popper-style": m.popperStyle,
          placement: m.placement,
          "popper-options": m.popperOptions,
          pure: m.pure,
          "raw-content": m.rawContent,
          "reference-el": m.referenceEl,
          "trigger-target-el": m.triggerTargetEl,
          "show-after": m.showAfter,
          strategy: m.strategy,
          teleported: m.teleported,
          transition: m.transition,
          "virtual-triggering": m.virtualTriggering,
          "z-index": m.zIndex,
          "append-to": m.appendTo
        }, {
          default: H(() => [
            G(m.$slots, "content", {}, () => [
              m.rawContent ? (_(), B("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, ["innerHTML"])) : (_(), B("span", { key: 1 }, Y(m.content), 1))
            ]),
            m.showArrow ? (_(), K(c(Ag), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Db = /* @__PURE__ */ ie(kb, [["__file", "tooltip.vue"]]);
const Bb = Je(Db), Fb = se({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: !0
  },
  color: String,
  badgeStyle: {
    type: q([String, Object, Array])
  },
  offset: {
    type: q(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), zb = z({
  name: "ElBadge"
}), Vb = /* @__PURE__ */ z({
  ...zb,
  props: Fb,
  setup(e, { expose: t }) {
    const n = e, o = ce("badge"), r = y(() => n.isDot ? "" : he(n.value) && he(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = y(() => {
      var a, i, l, u, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ut(-((i = (a = n.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: Ut((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: r
    }), (a, i) => (_(), B("div", {
      class: M(c(o).b())
    }, [
      G(a.$slots, "default"),
      X(cn, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: H(() => [
          $e(R("sup", {
            class: M([
              c(o).e("content"),
              c(o).em("content", a.type),
              c(o).is("fixed", !!a.$slots.default),
              c(o).is("dot", a.isDot),
              c(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: ve(c(s))
          }, [
            G(a.$slots, "content", { value: c(r) }, () => [
              ct(Y(c(r)), 1)
            ])
          ], 6), [
            [rt, !a.hidden && (c(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Hb = /* @__PURE__ */ ie(Vb, [["__file", "badge.vue"]]);
const Wb = Je(Hb), Ul = Symbol("buttonGroupContextKey"), Kl = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: s = "API" }, a) => {
  Z(() => c(a), (i) => {
    i && ye(n, `[${s}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, jb = (e, t) => {
  Kl({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const n = re(Ul, void 0), o = Jo("button"), { form: r } = Qo(), s = lo(y(() => n?.size)), a = er(), i = A(), l = Kr(), u = y(() => e.type || n?.type || ""), p = y(() => {
    var d, h, b;
    return (b = (h = e.autoInsertSpace) != null ? h : (d = o.value) == null ? void 0 : d.autoInsertSpace) != null ? b : !1;
  }), f = y(() => e.tag === "button" ? {
    ariaDisabled: a.value || e.loading,
    disabled: a.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), v = y(() => {
    var d;
    const h = (d = l.default) == null ? void 0 : d.call(l);
    if (p.value && h?.length === 1) {
      const b = h[0];
      if (b?.type === Ci) {
        const m = b.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(m.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: a,
    _size: s,
    _type: u,
    _ref: i,
    _props: f,
    shouldAddSpace: v,
    handleClick: (d) => {
      if (a.value || e.loading) {
        d.stopPropagation();
        return;
      }
      e.nativeType === "reset" && r?.resetFields(), t("click", d);
    }
  };
}, Ub = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Kb = ["button", "submit", "reset"], Nr = se({
  size: Xo,
  disabled: Boolean,
  type: {
    type: String,
    values: Ub,
    default: ""
  },
  icon: {
    type: Ot
  },
  nativeType: {
    type: String,
    values: Kb,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Ot,
    default: () => dl
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: q([String, Object]),
    default: "button"
  }
}), Gb = {
  click: (e) => e instanceof MouseEvent
};
function _e(e, t) {
  qb(e) && (e = "100%");
  var n = Yb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Co(e) {
  return Math.min(1, Math.max(0, e));
}
function qb(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Yb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Gl(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Eo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function nn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Zb(e, t, n) {
  return {
    r: _e(e, 255) * 255,
    g: _e(t, 255) * 255,
    b: _e(n, 255) * 255
  };
}
function fi(e, t, n) {
  e = _e(e, 255), t = _e(t, 255), n = _e(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), s = 0, a = 0, i = (o + r) / 2;
  if (o === r)
    a = 0, s = 0;
  else {
    var l = o - r;
    switch (a = i > 0.5 ? l / (2 - o - r) : l / (o + r), o) {
      case e:
        s = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / l + 2;
        break;
      case n:
        s = (e - t) / l + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, l: i };
}
function mr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Xb(e, t, n) {
  var o, r, s;
  if (e = _e(e, 360), t = _e(t, 100), n = _e(n, 100), t === 0)
    r = n, s = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a;
    o = mr(i, a, e + 1 / 3), r = mr(i, a, e), s = mr(i, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: s * 255 };
}
function pi(e, t, n) {
  e = _e(e, 255), t = _e(t, 255), n = _e(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), s = 0, a = o, i = o - r, l = o === 0 ? 0 : i / o;
  if (o === r)
    s = 0;
  else {
    switch (o) {
      case e:
        s = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / i + 2;
        break;
      case n:
        s = (e - t) / i + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: l, v: a };
}
function Jb(e, t, n) {
  e = _e(e, 360) * 6, t = _e(t, 100), n = _e(n, 100);
  var o = Math.floor(e), r = e - o, s = n * (1 - t), a = n * (1 - r * t), i = n * (1 - (1 - r) * t), l = o % 6, u = [n, a, s, s, i, n][l], p = [i, n, n, a, s, s][l], f = [s, s, i, n, n, a][l];
  return { r: u * 255, g: p * 255, b: f * 255 };
}
function vi(e, t, n, o) {
  var r = [
    nn(Math.round(e).toString(16)),
    nn(Math.round(t).toString(16)),
    nn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function Qb(e, t, n, o, r) {
  var s = [
    nn(Math.round(e).toString(16)),
    nn(Math.round(t).toString(16)),
    nn(Math.round(n).toString(16)),
    nn(e0(o))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("");
}
function e0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function hi(e) {
  return De(e) / 255;
}
function De(e) {
  return parseInt(e, 16);
}
function t0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var kr = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function n0(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, s = null, a = !1, i = !1;
  return typeof e == "string" && (e = a0(e)), typeof e == "object" && (yt(e.r) && yt(e.g) && yt(e.b) ? (t = Zb(e.r, e.g, e.b), a = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : yt(e.h) && yt(e.s) && yt(e.v) ? (o = Eo(e.s), r = Eo(e.v), t = Jb(e.h, o, r), a = !0, i = "hsv") : yt(e.h) && yt(e.s) && yt(e.l) && (o = Eo(e.s), s = Eo(e.l), t = Xb(e.h, o, s), a = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Gl(n), {
    ok: a,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var o0 = "[-\\+]?\\d+%?", r0 = "[-\\+]?\\d*\\.\\d+%?", Vt = "(?:".concat(r0, ")|(?:").concat(o0, ")"), br = "[\\s|\\(]+(".concat(Vt, ")[,|\\s]+(").concat(Vt, ")[,|\\s]+(").concat(Vt, ")\\s*\\)?"), yr = "[\\s|\\(]+(".concat(Vt, ")[,|\\s]+(").concat(Vt, ")[,|\\s]+(").concat(Vt, ")[,|\\s]+(").concat(Vt, ")\\s*\\)?"), et = {
  CSS_UNIT: new RegExp(Vt),
  rgb: new RegExp("rgb" + br),
  rgba: new RegExp("rgba" + yr),
  hsl: new RegExp("hsl" + br),
  hsla: new RegExp("hsla" + yr),
  hsv: new RegExp("hsv" + br),
  hsva: new RegExp("hsva" + yr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function a0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (kr[e])
    e = kr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = et.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = et.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = et.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = et.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = et.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = et.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = et.hex8.exec(e), n ? {
    r: De(n[1]),
    g: De(n[2]),
    b: De(n[3]),
    a: hi(n[4]),
    format: t ? "name" : "hex8"
  } : (n = et.hex6.exec(e), n ? {
    r: De(n[1]),
    g: De(n[2]),
    b: De(n[3]),
    format: t ? "name" : "hex"
  } : (n = et.hex4.exec(e), n ? {
    r: De(n[1] + n[1]),
    g: De(n[2] + n[2]),
    b: De(n[3] + n[3]),
    a: hi(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = et.hex3.exec(e), n ? {
    r: De(n[1] + n[1]),
    g: De(n[2] + n[2]),
    b: De(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function yt(e) {
  return !!et.CSS_UNIT.exec(String(e));
}
var s0 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = t0(t)), this.originalInput = t;
      var r = n0(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, s = t.r / 255, a = t.g / 255, i = t.b / 255;
      return s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), a <= 0.03928 ? o = a / 12.92 : o = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Gl(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = pi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = pi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = fi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = fi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), vi(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Qb(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(_e(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(_e(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + vi(this.r, this.g, this.b, !1), n = 0, o = Object.entries(kr); n < o.length; n++) {
        var r = o[n], s = r[0], a = r[1];
        if (t === a)
          return s;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, s = !n && r && (t.startsWith("hex") || t === "name");
      return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Co(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Co(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Co(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Co(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), s = n / 100, a = {
        r: (r.r - o.r) * s + o.r,
        g: (r.g - o.g) * s + o.g,
        b: (r.b - o.b) * s + o.b,
        a: (r.a - o.a) * s + o.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, s = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, s.push(new e(o));
      return s;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, s = n.v, a = [], i = 1 / t; t--; )
        a.push(new e({ h: o, s: r, v: s })), s = (s + i) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], s = 360 / t, a = 1; a < t; a++)
        r.push(new e({ h: (o + a * s) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function Nt(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function i0(e) {
  const t = er(), n = ce("button");
  return y(() => {
    let o = {}, r = e.color;
    if (r) {
      const s = r.match(/var\((.*?)\)/);
      s && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));
      const a = new s0(r), i = e.dark ? a.tint(20).toString() : Nt(a, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? Nt(a, 90) : a.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? Nt(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Nt(a, 90) : a.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? Nt(a, 50) : a.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? Nt(a, 80) : a.tint(80).toString());
      else {
        const l = e.dark ? Nt(a, 30) : a.tint(30).toString(), u = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (o = n.cssVarBlock({
          "bg-color": r,
          "text-color": u,
          "border-color": r,
          "hover-bg-color": l,
          "hover-text-color": u,
          "hover-border-color": l,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const p = e.dark ? Nt(a, 50) : a.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = p, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = p;
        }
      }
    }
    return o;
  });
}
const l0 = z({
  name: "ElButton"
}), u0 = /* @__PURE__ */ z({
  ...l0,
  props: Nr,
  emits: Gb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = i0(o), s = ce("button"), { _ref: a, _size: i, _type: l, _disabled: u, _props: p, shouldAddSpace: f, handleClick: v } = jb(o, n), g = y(() => [
      s.b(),
      s.m(l.value),
      s.m(i.value),
      s.is("disabled", u.value),
      s.is("loading", o.loading),
      s.is("plain", o.plain),
      s.is("round", o.round),
      s.is("circle", o.circle),
      s.is("text", o.text),
      s.is("link", o.link),
      s.is("has-bg", o.bg)
    ]);
    return t({
      ref: a,
      size: i,
      type: l,
      disabled: u,
      shouldAddSpace: f
    }), (d, h) => (_(), K(Me(d.tag), Ht({
      ref_key: "_ref",
      ref: a
    }, c(p), {
      class: c(g),
      style: c(r),
      onClick: c(v)
    }), {
      default: H(() => [
        d.loading ? (_(), B(ze, { key: 0 }, [
          d.$slots.loading ? G(d.$slots, "loading", { key: 0 }) : (_(), K(c(Ie), {
            key: 1,
            class: M(c(s).is("loading"))
          }, {
            default: H(() => [
              (_(), K(Me(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (_(), K(c(Ie), { key: 1 }, {
          default: H(() => [
            d.icon ? (_(), K(Me(d.icon), { key: 0 })) : G(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : W("v-if", !0),
        d.$slots.default ? (_(), B("span", {
          key: 2,
          class: M({ [c(s).em("text", "expand")]: c(f) })
        }, [
          G(d.$slots, "default")
        ], 2)) : W("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var c0 = /* @__PURE__ */ ie(u0, [["__file", "button.vue"]]);
const d0 = {
  size: Nr.size,
  type: Nr.type
}, f0 = z({
  name: "ElButtonGroup"
}), p0 = /* @__PURE__ */ z({
  ...f0,
  props: d0,
  setup(e) {
    const t = e;
    qe(Ul, Wt({
      size: nt(t, "size"),
      type: nt(t, "type")
    }));
    const n = ce("button");
    return (o, r) => (_(), B("div", {
      class: M(c(n).b("group"))
    }, [
      G(o.$slots, "default")
    ], 2));
  }
});
var ql = /* @__PURE__ */ ie(p0, [["__file", "button-group.vue"]]);
const Yl = Je(c0, {
  ButtonGroup: ql
});
aa(ql);
var $o = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))($o || {});
const v0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Dr = se({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: al
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), h0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, g0 = z({
  name: "ElTag"
}), m0 = /* @__PURE__ */ z({
  ...g0,
  props: Dr,
  emits: h0,
  setup(e, { emit: t }) {
    const n = e, o = lo(), r = ce("tag"), s = y(() => {
      const { type: u, hit: p, effect: f, closable: v, round: g } = n;
      return [
        r.b(),
        r.is("closable", v),
        r.m(u || "primary"),
        r.m(o.value),
        r.m(f),
        r.is("hit", p),
        r.is("round", g)
      ];
    }), a = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var p, f, v;
      (v = (f = (p = u?.component) == null ? void 0 : p.subTree) == null ? void 0 : f.component) != null && v.bum && (u.component.subTree.component.bum = null);
    };
    return (u, p) => u.disableTransitions ? (_(), B("span", {
      key: 0,
      class: M(c(s)),
      style: ve({ backgroundColor: u.color }),
      onClick: i
    }, [
      R("span", {
        class: M(c(r).e("content"))
      }, [
        G(u.$slots, "default")
      ], 2),
      u.closable ? (_(), K(c(Ie), {
        key: 0,
        class: M(c(r).e("close")),
        onClick: Te(a, ["stop"])
      }, {
        default: H(() => [
          X(c(Fo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : W("v-if", !0)
    ], 6)) : (_(), K(cn, {
      key: 1,
      name: `${c(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: H(() => [
        R("span", {
          class: M(c(s)),
          style: ve({ backgroundColor: u.color }),
          onClick: i
        }, [
          R("span", {
            class: M(c(r).e("content"))
          }, [
            G(u.$slots, "default")
          ], 2),
          u.closable ? (_(), K(c(Ie), {
            key: 0,
            class: M(c(r).e("close")),
            onClick: Te(a, ["stop"])
          }, {
            default: H(() => [
              X(c(Fo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var b0 = /* @__PURE__ */ ie(m0, [["__file", "tag.vue"]]);
const y0 = Je(b0), kt = /* @__PURE__ */ new Map();
if (ue) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of kt.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function gi(e, t) {
  let n = [];
  return we(t.arg) ? n = t.arg : Ke(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, i = r?.target, l = !t || !t.instance, u = !a || !i, p = e.contains(a) || e.contains(i), f = e === a, v = n.length && n.some((d) => d?.contains(a)) || n.length && n.includes(i), g = s && (s.contains(a) || s.contains(i));
    l || u || p || f || v || g || t.value(o, r);
  };
}
const w0 = {
  beforeMount(e, t) {
    kt.has(e) || kt.set(e, []), kt.get(e).push({
      documentHandler: gi(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    kt.has(e) || kt.set(e, []);
    const n = kt.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: gi(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    kt.delete(e);
  }
}, ut = {}, Zl = (e) => {
  if (!e)
    return { onClick: Et, onMousedown: Et, onMouseup: Et };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
}, _0 = se({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: q([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: q([String, Number])
  }
}), S0 = {
  click: (e) => e instanceof MouseEvent
}, C0 = "overlay";
var E0 = z({
  name: "ElOverlay",
  props: _0,
  emits: S0,
  setup(e, { slots: t, emit: n }) {
    const o = ce(C0), r = (l) => {
      n("click", l);
    }, { onClick: s, onMousedown: a, onMouseup: i } = Zl(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? X("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: s,
      onMousedown: a,
      onMouseup: i
    }, [G(t, "default")], $o.STYLE | $o.CLASS | $o.PROPS, ["onClick", "onMouseup", "onMousedown"]) : wi("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [G(t, "default")]);
  }
});
const T0 = E0, Xl = Symbol("dialogInjectionKey"), Jl = se({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Ot
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), O0 = {
  close: () => !0
}, I0 = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const s = (u) => {
    const p = u.clientX, f = u.clientY, { offsetX: v, offsetY: g } = r, d = e.value.getBoundingClientRect(), h = d.left, b = d.top, m = d.width, C = d.height, I = document.documentElement.clientWidth, $ = document.documentElement.clientHeight, S = -h + v, T = -b + g, E = I - h - m + v, F = $ - b - C + g, O = (N) => {
      let P = v + N.clientX - p, j = g + N.clientY - f;
      o?.value || (P = Math.min(Math.max(P, S), E), j = Math.min(Math.max(j, T), F)), r = {
        offsetX: P,
        offsetY: j
      }, e.value && (e.value.style.transform = `translate(${Ut(P)}, ${Ut(j)})`);
    }, V = () => {
      document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", V);
    };
    document.addEventListener("mousemove", O), document.addEventListener("mouseup", V);
  }, a = () => {
    t.value && e.value && t.value.addEventListener("mousedown", s);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", s);
  }, l = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return ge(() => {
    Wr(() => {
      n.value ? a() : i();
    });
  }), st(() => {
    i();
  }), {
    resetPosition: l
  };
}, $0 = (...e) => (t) => {
  e.forEach((n) => {
    pe(n) ? n(t) : n.value = t;
  });
}, A0 = z({ name: "ElDialogContent" }), P0 = /* @__PURE__ */ z({
  ...A0,
  props: Jl,
  emits: O0,
  setup(e, { expose: t }) {
    const n = e, { t: o } = ra(), { Close: r } = fl, { dialogRef: s, headerRef: a, bodyId: i, ns: l, style: u } = re(Xl), { focusTrapRef: p } = re(Ol), f = y(() => [
      l.b(),
      l.is("fullscreen", n.fullscreen),
      l.is("draggable", n.draggable),
      l.is("align-center", n.alignCenter),
      { [l.m("center")]: n.center }
    ]), v = $0(p, s), g = y(() => n.draggable), d = y(() => n.overflow), { resetPosition: h } = I0(s, a, g, d);
    return t({
      resetPosition: h
    }), (b, m) => (_(), B("div", {
      ref: c(v),
      class: M(c(f)),
      style: ve(c(u)),
      tabindex: "-1"
    }, [
      R("header", {
        ref_key: "headerRef",
        ref: a,
        class: M([c(l).e("header"), b.headerClass, { "show-close": b.showClose }])
      }, [
        G(b.$slots, "header", {}, () => [
          R("span", {
            role: "heading",
            "aria-level": b.ariaLevel,
            class: M(c(l).e("title"))
          }, Y(b.title), 11, ["aria-level"])
        ]),
        b.showClose ? (_(), B("button", {
          key: 0,
          "aria-label": c(o)("el.dialog.close"),
          class: M(c(l).e("headerbtn")),
          type: "button",
          onClick: (C) => b.$emit("close")
        }, [
          X(c(Ie), {
            class: M(c(l).e("close"))
          }, {
            default: H(() => [
              (_(), K(Me(b.closeIcon || c(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : W("v-if", !0)
      ], 2),
      R("div", {
        id: c(i),
        class: M([c(l).e("body"), b.bodyClass])
      }, [
        G(b.$slots, "default")
      ], 10, ["id"]),
      b.$slots.footer ? (_(), B("footer", {
        key: 0,
        class: M([c(l).e("footer"), b.footerClass])
      }, [
        G(b.$slots, "footer")
      ], 2)) : W("v-if", !0)
    ], 6));
  }
});
var R0 = /* @__PURE__ */ ie(P0, [["__file", "dialog-content.vue"]]);
const M0 = se({
  ...Jl,
  appendToBody: Boolean,
  appendTo: {
    type: q([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: q(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), L0 = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [Fe]: (e) => sn(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, x0 = (e, t = {}) => {
  jr(e) || el("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || ce("popup"), o = y(() => n.bm("parent", "hidden"));
  if (!ue || js(document.body, o.value))
    return;
  let r = 0, s = !1, a = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || s && document && (document.body.style.width = a, bh(document.body, o.value));
    }, 200);
  };
  Z(e, (l) => {
    if (!l) {
      i();
      return;
    }
    s = !js(document.body, o.value), s && (a = document.body.style.width, mh(document.body, o.value)), r = wh(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, p = yh(document.body, "overflowY");
    r > 0 && (u || p === "scroll") && s && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Si(() => i());
}, N0 = (e, t) => {
  var n;
  const r = Ee().emit, { nextZIndex: s } = oa();
  let a = "";
  const i = ln(), l = ln(), u = A(!1), p = A(!1), f = A(!1), v = A((n = e.zIndex) != null ? n : s());
  let g, d;
  const h = Jo("namespace", Gn), b = y(() => {
    const J = {}, Q = `--${h.value}-dialog`;
    return e.fullscreen || (e.top && (J[`${Q}-margin-top`] = e.top), e.width && (J[`${Q}-width`] = Ut(e.width))), J;
  }), m = y(() => e.alignCenter ? { display: "flex" } : {});
  function C() {
    r("opened");
  }
  function I() {
    r("closed"), r(Fe, !1), e.destroyOnClose && (f.value = !1);
  }
  function $() {
    r("close");
  }
  function S() {
    d?.(), g?.(), e.openDelay && e.openDelay > 0 ? { stop: g } = Do(() => O(), e.openDelay) : O();
  }
  function T() {
    g?.(), d?.(), e.closeDelay && e.closeDelay > 0 ? { stop: d } = Do(() => V(), e.closeDelay) : V();
  }
  function E() {
    function J(Q) {
      Q || (p.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose(J) : T();
  }
  function F() {
    e.closeOnClickModal && E();
  }
  function O() {
    ue && (u.value = !0);
  }
  function V() {
    u.value = !1;
  }
  function N() {
    r("openAutoFocus");
  }
  function P() {
    r("closeAutoFocus");
  }
  function j(J) {
    var Q;
    ((Q = J.detail) == null ? void 0 : Q.focusReason) === "pointer" && J.preventDefault();
  }
  e.lockScroll && x0(u);
  function ae() {
    e.closeOnPressEscape && E();
  }
  return Z(() => e.modelValue, (J) => {
    J ? (p.value = !1, S(), f.value = !0, v.value = Zi(e.zIndex) ? s() : v.value++, fe(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && T();
  }), Z(() => e.fullscreen, (J) => {
    t.value && (J ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), ge(() => {
    e.modelValue && (u.value = !0, f.value = !0, S());
  }), {
    afterEnter: C,
    afterLeave: I,
    beforeLeave: $,
    handleClose: E,
    onModalClick: F,
    close: T,
    doClose: V,
    onOpenAutoFocus: N,
    onCloseAutoFocus: P,
    onCloseRequested: ae,
    onFocusoutPrevented: j,
    titleId: i,
    bodyId: l,
    closed: p,
    style: b,
    overlayDialogStyle: m,
    rendered: f,
    visible: u,
    zIndex: v
  };
}, k0 = z({
  name: "ElDialog",
  inheritAttrs: !1
}), D0 = /* @__PURE__ */ z({
  ...k0,
  props: M0,
  emits: L0,
  setup(e, { expose: t }) {
    const n = e, o = Kr();
    Kl({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, y(() => !!o.title));
    const r = ce("dialog"), s = A(), a = A(), i = A(), {
      visible: l,
      titleId: u,
      bodyId: p,
      style: f,
      overlayDialogStyle: v,
      rendered: g,
      zIndex: d,
      afterEnter: h,
      afterLeave: b,
      beforeLeave: m,
      handleClose: C,
      onModalClick: I,
      onOpenAutoFocus: $,
      onCloseAutoFocus: S,
      onCloseRequested: T,
      onFocusoutPrevented: E
    } = N0(n, s);
    qe(Xl, {
      dialogRef: s,
      headerRef: a,
      bodyId: p,
      ns: r,
      rendered: g,
      style: f
    });
    const F = Zl(I), O = y(() => n.draggable && !n.fullscreen);
    return t({
      visible: l,
      dialogContentRef: i,
      resetPosition: () => {
        var N;
        (N = i.value) == null || N.resetPosition();
      }
    }), (N, P) => (_(), K(c(Wl), {
      to: N.appendTo,
      disabled: N.appendTo !== "body" ? !1 : !N.appendToBody
    }, {
      default: H(() => [
        X(cn, {
          name: "dialog-fade",
          onAfterEnter: c(h),
          onAfterLeave: c(b),
          onBeforeLeave: c(m),
          persisted: ""
        }, {
          default: H(() => [
            $e(X(c(T0), {
              "custom-mask-event": "",
              mask: N.modal,
              "overlay-class": N.modalClass,
              "z-index": c(d)
            }, {
              default: H(() => [
                R("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": N.title || void 0,
                  "aria-labelledby": N.title ? void 0 : c(u),
                  "aria-describedby": c(p),
                  class: M(`${c(r).namespace.value}-overlay-dialog`),
                  style: ve(c(v)),
                  onClick: c(F).onClick,
                  onMousedown: c(F).onMousedown,
                  onMouseup: c(F).onMouseup
                }, [
                  X(c($l), {
                    loop: "",
                    trapped: c(l),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: c($),
                    onFocusAfterReleased: c(S),
                    onFocusoutPrevented: c(E),
                    onReleaseRequested: c(T)
                  }, {
                    default: H(() => [
                      c(g) ? (_(), K(R0, Ht({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: i
                      }, N.$attrs, {
                        center: N.center,
                        "align-center": N.alignCenter,
                        "close-icon": N.closeIcon,
                        draggable: c(O),
                        overflow: N.overflow,
                        fullscreen: N.fullscreen,
                        "header-class": N.headerClass,
                        "body-class": N.bodyClass,
                        "footer-class": N.footerClass,
                        "show-close": N.showClose,
                        title: N.title,
                        "aria-level": N.headerAriaLevel,
                        onClose: c(C)
                      }), qu({
                        header: H(() => [
                          N.$slots.title ? G(N.$slots, "title", { key: 1 }) : G(N.$slots, "header", {
                            key: 0,
                            close: c(C),
                            titleId: c(u),
                            titleClass: c(r).e("title")
                          })
                        ]),
                        default: H(() => [
                          G(N.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        N.$slots.footer ? {
                          name: "footer",
                          fn: H(() => [
                            G(N.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : W("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [rt, c(l)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var B0 = /* @__PURE__ */ ie(D0, [["__file", "dialog.vue"]]);
const F0 = Je(B0);
function z0() {
  const e = on(), t = A(0), n = 11, o = y(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return tt(e, () => {
    var s, a;
    t.value = (a = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? a : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const Ql = Symbol("ElSelectGroup"), rr = Symbol("ElSelect");
function V0(e, t) {
  const n = re(rr), o = re(Ql, { disabled: !1 }), r = y(() => p(Ft(n.props.modelValue), e.value)), s = y(() => {
    var g;
    if (n.props.multiple) {
      const d = Ft((g = n.props.modelValue) != null ? g : []);
      return !r.value && d.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = y(() => e.label || (Ce(e.value) ? "" : e.value)), i = y(() => e.value || e.label || ""), l = y(() => e.disabled || t.groupDisabled || s.value), u = Ee(), p = (g = [], d) => {
    if (Ce(e.value)) {
      const h = n.props.valueKey;
      return g && g.some((b) => Yu(zt(b, h)) === zt(d, h));
    } else
      return g && g.includes(d);
  }, f = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, v = (g) => {
    const d = new RegExp(v0(g), "i");
    t.visible = d.test(a.value) || e.created;
  };
  return Z(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Z(() => e.value, (g, d) => {
    const { remote: h, valueKey: b } = n.props;
    if ((h ? g !== d : !Yn(g, d)) && (n.onOptionDestroy(d, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !h) {
      if (b && Ce(g) && Ce(d) && g[b] === d[b])
        return;
      n.setSelected();
    }
  }), Z(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: i,
    itemSelected: r,
    isDisabled: l,
    hoverItem: f,
    updateOption: v
  };
}
const H0 = z({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = ce("select"), n = ln(), o = y(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(a)),
      t.is("hovering", c(v))
    ]), r = Wt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: a,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: p
    } = V0(e, r), { visible: f, hover: v } = Gr(r), g = Ee().proxy;
    l.onOptionCreate(g), st(() => {
      const h = g.value, { selected: b } = l.states, m = b.some((C) => C.value === g.value);
      fe(() => {
        l.states.cachedOptions.get(h) === g && !m && l.states.cachedOptions.delete(h);
      }), l.onOptionDestroy(h, g);
    });
    function d() {
      i.value || l.handleOptionSelect(g);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: s,
      itemSelected: a,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: p,
      visible: f,
      hover: v,
      selectOptionClick: d,
      states: r
    };
  }
});
function W0(e, t, n, o, r, s) {
  return $e((_(), B("li", {
    id: e.id,
    class: M(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Te(e.selectOptionClick, ["stop"])
  }, [
    G(e.$slots, "default", {}, () => [
      R("span", null, Y(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [rt, e.visible]
  ]);
}
var Ca = /* @__PURE__ */ ie(H0, [["render", W0], ["__file", "option.vue"]]);
const j0 = z({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = re(rr), t = ce("select"), n = y(() => e.props.popperClass), o = y(() => e.props.multiple), r = y(() => e.props.fitInputWidth), s = A("");
    function a() {
      var i;
      s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return ge(() => {
      a(), tt(e.selectRef, a);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function U0(e, t, n, o, r, s) {
  return _(), B("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: ve({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), B("div", {
      key: 0,
      class: M(e.ns.be("dropdown", "header"))
    }, [
      G(e.$slots, "header")
    ], 2)) : W("v-if", !0),
    G(e.$slots, "default"),
    e.$slots.footer ? (_(), B("div", {
      key: 1,
      class: M(e.ns.be("dropdown", "footer"))
    }, [
      G(e.$slots, "footer")
    ], 2)) : W("v-if", !0)
  ], 6);
}
var K0 = /* @__PURE__ */ ie(j0, [["render", U0], ["__file", "select-dropdown.vue"]]);
const G0 = (e, t) => {
  const { t: n } = ra(), o = ln(), r = ce("select"), s = ce("input"), a = Wt({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: [],
    selectionWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: !1,
    menuVisibleOnFocus: !1,
    isBeforeHide: !1
  }), i = A(null), l = A(null), u = A(null), p = A(null), f = A(null), v = A(null), g = A(null), d = A(null), h = A(null), b = A(null), m = A(null), {
    isComposing: C,
    handleCompositionStart: I,
    handleCompositionUpdate: $,
    handleCompositionEnd: S
  } = bl({
    afterComposition: (w) => Mt(w)
  }), { wrapperRef: T, isFocused: E, handleBlur: F } = ml(f, {
    beforeFocus() {
      return Q.value;
    },
    afterFocus() {
      e.automaticDropdown && !O.value && (O.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(w) {
      var k, ee;
      return ((k = u.value) == null ? void 0 : k.isFocusInsideContent(w)) || ((ee = p.value) == null ? void 0 : ee.isFocusInsideContent(w));
    },
    afterBlur() {
      O.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), O = A(!1), V = A(), { form: N, formItem: P } = Qo(), { inputId: j } = la(e, {
    formItemContext: P
  }), { valueOnClear: ae, isEmptyValue: J } = ph(e), Q = y(() => e.disabled || N?.disabled), D = y(() => we(e.modelValue) ? e.modelValue.length > 0 : !J(e.modelValue)), U = y(() => {
    var w;
    return (w = N?.statusIcon) != null ? w : !1;
  }), te = y(() => e.clearable && !Q.value && a.inputHovering && D.value), ne = y(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Qe = y(() => r.is("reverse", ne.value && O.value)), Ne = y(() => P?.validateState || ""), it = y(() => pl[Ne.value]), He = y(() => e.remote ? 300 : 0), Ae = y(() => e.remote && !a.inputValue && a.options.size === 0), We = y(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && je.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), je = y(() => de.value.filter((w) => w.visible).length), de = y(() => {
    const w = Array.from(a.options.values()), k = [];
    return a.optionValues.forEach((ee) => {
      const me = w.findIndex((ke) => ke.value === ee);
      me > -1 && k.push(w[me]);
    }), k.length >= w.length ? k : w;
  }), gt = y(() => Array.from(a.cachedOptions.values())), Gt = y(() => {
    const w = de.value.filter((k) => !k.created).some((k) => k.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !w;
  }), mt = () => {
    e.filterable && pe(e.filterMethod) || e.filterable && e.remote && pe(e.remoteMethod) || de.value.forEach((w) => {
      var k;
      (k = w.updateOption) == null || k.call(w, a.inputValue);
    });
  }, qt = lo(), Yt = y(() => ["small"].includes(qt.value) ? "small" : "default"), vn = y({
    get() {
      return O.value && !Ae.value;
    },
    set(w) {
      O.value = w;
    }
  }), hn = y(() => {
    if (e.multiple && !Tn(e.modelValue))
      return Ft(e.modelValue).length === 0 && !a.inputValue;
    const w = we(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Tn(w) ? !a.inputValue : !0;
  }), gn = y(() => {
    var w;
    const k = (w = e.placeholder) != null ? w : n("el.select.placeholder");
    return e.multiple || !D.value ? k : a.selectedLabel;
  }), mn = y(() => Ar ? null : "mouseenter");
  Z(() => e.modelValue, (w, k) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", Pt("")), Pe(), !Yn(w, k) && e.validateEvent && P?.validate("change").catch((ee) => ye(ee));
  }, {
    flush: "post",
    deep: !0
  }), Z(() => O.value, (w) => {
    w ? Pt(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", w);
  }), Z(() => a.options.entries(), () => {
    ue && (Pe(), e.defaultFirstOption && (e.filterable || e.remote) && je.value && bn());
  }, {
    flush: "post"
  }), Z([() => a.hoveringIndex, de], ([w]) => {
    he(w) && w > -1 ? V.value = de.value[w] || {} : V.value = {}, de.value.forEach((k) => {
      k.hover = V.value === k;
    });
  }), Wr(() => {
    a.isBeforeHide || mt();
  });
  const Pt = (w) => {
    a.previousQuery === w || C.value || (a.previousQuery = w, e.filterable && pe(e.filterMethod) ? e.filterMethod(w) : e.filterable && e.remote && pe(e.remoteMethod) && e.remoteMethod(w), e.defaultFirstOption && (e.filterable || e.remote) && je.value ? fe(bn) : fe(yn));
  }, bn = () => {
    const w = de.value.filter((ke) => ke.visible && !ke.disabled && !ke.states.groupDisabled), k = w.find((ke) => ke.created), ee = w[0], me = de.value.map((ke) => ke.value);
    a.hoveringIndex = Ia(me, k || ee);
  }, Pe = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const k = we(e.modelValue) ? e.modelValue[0] : e.modelValue, ee = lt(k);
      a.selectedLabel = ee.currentLabel, a.selected = [ee];
      return;
    }
    const w = [];
    Tn(e.modelValue) || Ft(e.modelValue).forEach((k) => {
      w.push(lt(k));
    }), a.selected = w;
  }, lt = (w) => {
    let k;
    const ee = Zu(w);
    for (let wn = a.cachedOptions.size - 1; wn >= 0; wn--) {
      const Lt = gt.value[wn];
      if (ee ? zt(Lt.value, e.valueKey) === zt(w, e.valueKey) : Lt.value === w) {
        k = {
          value: w,
          currentLabel: Lt.currentLabel,
          get isDisabled() {
            return Lt.isDisabled;
          }
        };
        break;
      }
    }
    if (k)
      return k;
    const me = ee ? w.label : w ?? "";
    return {
      value: w,
      currentLabel: me
    };
  }, yn = () => {
    a.hoveringIndex = de.value.findIndex((w) => a.selected.some((k) => vo(k) === vo(w)));
  }, Zt = () => {
    a.selectionWidth = l.value.getBoundingClientRect().width;
  }, x = () => {
    a.collapseItemWidth = b.value.getBoundingClientRect().width;
  }, oe = () => {
    var w, k;
    (k = (w = u.value) == null ? void 0 : w.updatePopper) == null || k.call(w);
  }, Ue = () => {
    var w, k;
    (k = (w = p.value) == null ? void 0 : w.updatePopper) == null || k.call(w);
  }, Rt = () => {
    a.inputValue.length > 0 && !O.value && (O.value = !0), Pt(a.inputValue);
  }, Mt = (w) => {
    if (a.inputValue = w.target.value, e.remote)
      Ea();
    else
      return Rt();
  }, Ea = Ev(() => {
    Rt();
  }, He.value), Bn = (w) => {
    Yn(e.modelValue, w) || t($n, w);
  }, ru = (w) => Tv(w, (k) => {
    const ee = a.cachedOptions.get(k);
    return ee && !ee.disabled && !ee.states.groupDisabled;
  }), au = (w) => {
    if (e.multiple && w.code !== dt.delete && w.target.value.length <= 0) {
      const k = Ft(e.modelValue).slice(), ee = ru(k);
      if (ee < 0)
        return;
      const me = k[ee];
      k.splice(ee, 1), t(Fe, k), Bn(k), t("remove-tag", me);
    }
  }, su = (w, k) => {
    const ee = a.selected.indexOf(k);
    if (ee > -1 && !Q.value) {
      const me = Ft(e.modelValue).slice();
      me.splice(ee, 1), t(Fe, me), Bn(me), t("remove-tag", k.value);
    }
    w.stopPropagation(), po();
  }, Ta = (w) => {
    w.stopPropagation();
    const k = e.multiple ? [] : ae.value;
    if (e.multiple)
      for (const ee of a.selected)
        ee.isDisabled && k.push(ee.value);
    t(Fe, k), Bn(k), a.hoveringIndex = -1, O.value = !1, t("clear"), po();
  }, Oa = (w) => {
    var k;
    if (e.multiple) {
      const ee = Ft((k = e.modelValue) != null ? k : []).slice(), me = Ia(ee, w);
      me > -1 ? ee.splice(me, 1) : (e.multipleLimit <= 0 || ee.length < e.multipleLimit) && ee.push(w.value), t(Fe, ee), Bn(ee), w.created && Pt(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(Fe, w.value), Bn(w.value), O.value = !1;
    po(), !O.value && fe(() => {
      fo(w);
    });
  }, Ia = (w = [], k) => Tn(k) ? -1 : Ce(k.value) ? w.findIndex((ee) => Yn(zt(ee, e.valueKey), vo(k))) : w.indexOf(k.value), fo = (w) => {
    var k, ee, me, ke, wn;
    const Lt = we(w) ? w[0] : w;
    let ho = null;
    if (Lt?.value) {
      const Fn = de.value.filter((Cu) => Cu.value === Lt.value);
      Fn.length > 0 && (ho = Fn[0].$el);
    }
    if (u.value && ho) {
      const Fn = (ke = (me = (ee = (k = u.value) == null ? void 0 : k.popperRef) == null ? void 0 : ee.contentRef) == null ? void 0 : me.querySelector) == null ? void 0 : ke.call(me, `.${r.be("dropdown", "wrap")}`);
      Fn && _h(Fn, ho);
    }
    (wn = m.value) == null || wn.handleScroll();
  }, iu = (w) => {
    a.options.set(w.value, w), a.cachedOptions.set(w.value, w);
  }, lu = (w, k) => {
    a.options.get(w) === k && a.options.delete(w);
  }, uu = y(() => {
    var w, k;
    return (k = (w = u.value) == null ? void 0 : w.popperRef) == null ? void 0 : k.contentRef;
  }), cu = () => {
    a.isBeforeHide = !1, fe(() => {
      var w;
      (w = m.value) == null || w.update(), fo(a.selected);
    });
  }, po = () => {
    var w;
    (w = f.value) == null || w.focus();
  }, du = () => {
    var w;
    if (O.value) {
      O.value = !1, fe(() => {
        var k;
        return (k = f.value) == null ? void 0 : k.blur();
      });
      return;
    }
    (w = f.value) == null || w.blur();
  }, fu = (w) => {
    Ta(w);
  }, pu = (w) => {
    if (O.value = !1, E.value) {
      const k = new FocusEvent("focus", w);
      fe(() => F(k));
    }
  }, vu = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : O.value = !1;
  }, $a = () => {
    Q.value || (Ar && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : O.value = !O.value);
  }, hu = () => {
    if (!O.value)
      $a();
    else {
      const w = de.value[a.hoveringIndex];
      w && !w.isDisabled && Oa(w);
    }
  }, vo = (w) => Ce(w.value) ? zt(w.value, e.valueKey) : w.value, gu = y(() => de.value.filter((w) => w.visible).every((w) => w.isDisabled)), mu = y(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), bu = y(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), Aa = (w) => {
    if (!O.value) {
      O.value = !0;
      return;
    }
    if (!(a.options.size === 0 || je.value === 0 || C.value) && !gu.value) {
      w === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : w === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const k = de.value[a.hoveringIndex];
      (k.isDisabled || !k.visible) && Aa(w), fe(() => fo(V.value));
    }
  }, yu = () => {
    if (!l.value)
      return 0;
    const w = window.getComputedStyle(l.value);
    return Number.parseFloat(w.gap || "6px");
  }, wu = y(() => {
    const w = yu();
    return { maxWidth: `${b.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - w : a.selectionWidth}px` };
  }), _u = y(() => ({ maxWidth: `${a.selectionWidth}px` })), Su = (w) => {
    t("popup-scroll", w);
  };
  return tt(l, Zt), tt(d, oe), tt(T, oe), tt(h, Ue), tt(b, x), ge(() => {
    Pe();
  }), {
    inputId: j,
    contentId: o,
    nsSelect: r,
    nsInput: s,
    states: a,
    isFocused: E,
    expanded: O,
    optionsArray: de,
    hoverOption: V,
    selectSize: qt,
    filteredOptionsCount: je,
    updateTooltip: oe,
    updateTagTooltip: Ue,
    debouncedOnInputChange: Ea,
    onInput: Mt,
    deletePrevTag: au,
    deleteTag: su,
    deleteSelected: Ta,
    handleOptionSelect: Oa,
    scrollToOption: fo,
    hasModelValue: D,
    shouldShowPlaceholder: hn,
    currentPlaceholder: gn,
    mouseEnterEventName: mn,
    needStatusIcon: U,
    showClose: te,
    iconComponent: ne,
    iconReverse: Qe,
    validateState: Ne,
    validateIcon: it,
    showNewOption: Gt,
    updateOptions: mt,
    collapseTagSize: Yt,
    setSelected: Pe,
    selectDisabled: Q,
    emptyText: We,
    handleCompositionStart: I,
    handleCompositionUpdate: $,
    handleCompositionEnd: S,
    onOptionCreate: iu,
    onOptionDestroy: lu,
    handleMenuEnter: cu,
    focus: po,
    blur: du,
    handleClearClick: fu,
    handleClickOutside: pu,
    handleEsc: vu,
    toggleMenu: $a,
    selectOption: hu,
    getValueKey: vo,
    navigateOptions: Aa,
    dropdownMenuVisible: vn,
    showTagList: mu,
    collapseTagList: bu,
    popupScroll: Su,
    tagStyle: wu,
    collapseTagStyle: _u,
    popperRef: uu,
    inputRef: f,
    tooltipRef: u,
    tagTooltipRef: p,
    prefixRef: v,
    suffixRef: g,
    selectRef: i,
    wrapperRef: T,
    selectionRef: l,
    scrollbarRef: m,
    menuRef: d,
    tagMenuRef: h,
    collapseItemRef: b
  };
};
var q0 = z({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = re(rr);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function l(u) {
        we(u) && u.forEach((p) => {
          var f, v, g, d;
          const h = (f = p?.type || {}) == null ? void 0 : f.name;
          h === "ElOptionGroup" ? l(!be(p.children) && !we(p.children) && pe((v = p.children) == null ? void 0 : v.default) ? (g = p.children) == null ? void 0 : g.default() : p.children) : h === "ElOption" ? i.push((d = p.props) == null ? void 0 : d.value) : we(p.children) && l(p.children);
        });
      }
      return a.length && l((s = a[0]) == null ? void 0 : s.children), Yn(i, o) || (o = i, n && (n.states.optionValues = i)), a;
    };
  }
});
const Y0 = se({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: Xo,
  effect: {
    type: q(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: q(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: !0
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: Sa.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Ot,
    default: sa
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Ot,
    default: Ih
  },
  tagType: { ...Dr.type, default: "info" },
  tagEffect: { ...Dr.effect, default: "light" },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  remoteShowSuffix: Boolean,
  showArrow: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: q(String),
    values: nr,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: q(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...fh,
  ...Dn(["ariaLabel"])
}), mi = "ElSelect", Z0 = z({
  name: mi,
  componentName: mi,
  components: {
    ElSelectMenu: K0,
    ElOption: Ca,
    ElOptions: q0,
    ElTag: y0,
    ElScrollbar: Sg,
    ElTooltip: Bb,
    ElIcon: Ie
  },
  directives: { ClickOutside: w0 },
  props: Y0,
  emits: [
    Fe,
    $n,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = y(() => {
      const { modelValue: l, multiple: u } = e, p = u ? [] : void 0;
      return we(l) ? u ? l : p : u ? p : l;
    }), o = Wt({
      ...Gr(e),
      modelValue: n
    }), r = G0(o, t), { calculatorRef: s, inputStyle: a } = z0();
    qe(rr, Wt({
      props: o,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const i = y(() => e.multiple ? r.states.selected.map((l) => l.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: s,
      inputStyle: a
    };
  }
});
function X0(e, t, n, o, r, s) {
  const a = Xt("el-tag"), i = Xt("el-tooltip"), l = Xt("el-icon"), u = Xt("el-option"), p = Xt("el-options"), f = Xt("el-scrollbar"), v = Xt("el-select-menu"), g = Xu("click-outside");
  return $e((_(), B("div", {
    ref: "selectRef",
    class: M([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Ju(e.mouseEnterEventName)]: (d) => e.states.inputHovering = !0,
    onMouseleave: (d) => e.states.inputHovering = !1
  }, [
    X(i, {
      ref: "tooltipRef",
      visible: e.dropdownMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": e.fallbackPlacements,
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      "append-to": e.appendTo,
      "show-arrow": e.showArrow,
      offset: e.offset,
      onBeforeShow: e.handleMenuEnter,
      onHide: (d) => e.states.isBeforeHide = !1
    }, {
      default: H(() => {
        var d;
        return [
          R("div", {
            ref: "wrapperRef",
            class: M([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Te(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (_(), B("div", {
              key: 0,
              ref: "prefixRef",
              class: M(e.nsSelect.e("prefix"))
            }, [
              G(e.$slots, "prefix")
            ], 2)) : W("v-if", !0),
            R("div", {
              ref: "selectionRef",
              class: M([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? G(e.$slots, "tag", { key: 0 }, () => [
                (_(!0), B(ze, null, Jn(e.showTagList, (h) => (_(), B("div", {
                  key: e.getValueKey(h),
                  class: M(e.nsSelect.e("selected-item"))
                }, [
                  X(a, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: ve(e.tagStyle),
                    onClose: (b) => e.deleteTag(b, h)
                  }, {
                    default: H(() => [
                      R("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, [
                        G(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          ct(Y(h.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (_(), K(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: H(() => [
                    R("div", {
                      ref: "collapseItemRef",
                      class: M(e.nsSelect.e("selected-item"))
                    }, [
                      X(a, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: ve(e.collapseTagStyle)
                      }, {
                        default: H(() => [
                          R("span", {
                            class: M(e.nsSelect.e("tags-text"))
                          }, " + " + Y(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: H(() => [
                    R("div", {
                      ref: "tagMenuRef",
                      class: M(e.nsSelect.e("selection"))
                    }, [
                      (_(!0), B(ze, null, Jn(e.collapseTagList, (h) => (_(), B("div", {
                        key: e.getValueKey(h),
                        class: M(e.nsSelect.e("selected-item"))
                      }, [
                        X(a, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !h.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (b) => e.deleteTag(b, h)
                        }, {
                          default: H(() => [
                            R("span", {
                              class: M(e.nsSelect.e("tags-text"))
                            }, [
                              G(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                ct(Y(h.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : W("v-if", !0)
              ]) : W("v-if", !0),
              R("div", {
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                $e(R("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
                  type: "text",
                  name: e.name,
                  class: M([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: ve(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((d = e.hoverOption) == null ? void 0 : d.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    Hn(Te((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Hn(Te((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Hn(Te(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Hn(Te(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Hn(Te(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Te(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Tc, e.states.inputValue]
                ]),
                e.filterable ? (_(), B("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: M(e.nsSelect.e("input-calculator")),
                  textContent: Y(e.states.inputValue)
                }, null, 10, ["textContent"])) : W("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (_(), B("div", {
                key: 1,
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? G(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  R("span", null, Y(e.currentPlaceholder), 1)
                ]) : (_(), B("span", { key: 1 }, Y(e.currentPlaceholder), 1))
              ], 2)) : W("v-if", !0)
            ], 2),
            R("div", {
              ref: "suffixRef",
              class: M(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (_(), K(l, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: H(() => [
                  (_(), K(Me(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0),
              e.showClose && e.clearIcon ? (_(), K(l, {
                key: 1,
                class: M([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: H(() => [
                  (_(), K(Me(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : W("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (_(), K(l, {
                key: 2,
                class: M([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: H(() => [
                  (_(), K(Me(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: H(() => [
        X(v, { ref: "menuRef" }, {
          default: H(() => [
            e.$slots.header ? (_(), B("div", {
              key: 0,
              class: M(e.nsSelect.be("dropdown", "header")),
              onClick: Te(() => {
              }, ["stop"])
            }, [
              G(e.$slots, "header")
            ], 10, ["onClick"])) : W("v-if", !0),
            $e(X(f, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: H(() => [
                e.showNewOption ? (_(), K(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : W("v-if", !0),
                X(p, null, {
                  default: H(() => [
                    G(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [rt, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (_(), B("div", {
              key: 1,
              class: M(e.nsSelect.be("dropdown", "loading"))
            }, [
              G(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (_(), B("div", {
              key: 2,
              class: M(e.nsSelect.be("dropdown", "empty"))
            }, [
              G(e.$slots, "empty", {}, () => [
                R("span", null, Y(e.emptyText), 1)
              ])
            ], 2)) : W("v-if", !0),
            e.$slots.footer ? (_(), B("div", {
              key: 3,
              class: M(e.nsSelect.be("dropdown", "footer")),
              onClick: Te(() => {
              }, ["stop"])
            }, [
              G(e.$slots, "footer")
            ], 10, ["onClick"])) : W("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [g, e.handleClickOutside, e.popperRef]
  ]);
}
var J0 = /* @__PURE__ */ ie(Z0, [["render", X0], ["__file", "select.vue"]]);
const Q0 = z({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = ce("select"), n = A(null), o = Ee(), r = A([]);
    qe(Ql, Wt({
      ...Gr(e)
    }));
    const s = y(() => r.value.some((u) => u.visible === !0)), a = (u) => {
      var p, f;
      return ((p = u.type) == null ? void 0 : p.name) === "ElOption" && !!((f = u.component) != null && f.proxy);
    }, i = (u) => {
      const p = Ft(u), f = [];
      return p.forEach((v) => {
        var g, d;
        a(v) ? f.push(v.component.proxy) : (g = v.children) != null && g.length ? f.push(...i(v.children)) : (d = v.component) != null && d.subTree && f.push(...i(v.component.subTree));
      }), f;
    }, l = () => {
      r.value = i(o.subTree);
    };
    return ge(() => {
      l();
    }), Xv(n, l, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: s,
      ns: t
    };
  }
});
function ey(e, t, n, o, r, s) {
  return $e((_(), B("ul", {
    ref: "groupRef",
    class: M(e.ns.be("group", "wrap"))
  }, [
    R("li", {
      class: M(e.ns.be("group", "title"))
    }, Y(e.label), 3),
    R("li", null, [
      R("ul", {
        class: M(e.ns.b("group"))
      }, [
        G(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [rt, e.visible]
  ]);
}
var eu = /* @__PURE__ */ ie(Q0, [["render", ey], ["__file", "option-group.vue"]]);
const ty = Je(J0, {
  Option: Ca,
  OptionGroup: eu
}), ny = aa(Ca);
aa(eu);
const oy = se({
  direction: {
    type: q(String),
    default: "horizontal"
  },
  options: {
    type: q(Array),
    default: () => []
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  block: Boolean,
  size: Xo,
  disabled: Boolean,
  validateEvent: {
    type: Boolean,
    default: !0
  },
  id: String,
  name: String,
  ...Dn(["ariaLabel"])
}), ry = {
  [Fe]: (e) => be(e) || he(e) || sn(e),
  [$n]: (e) => be(e) || he(e) || sn(e)
}, ay = z({
  name: "ElSegmented"
}), sy = /* @__PURE__ */ z({
  ...ay,
  props: oy,
  emits: ry,
  setup(e, { emit: t }) {
    const n = e, o = ce("segmented"), r = ln(), s = lo(), a = er(), { formItem: i } = Qo(), { inputId: l, isLabeledByFormItem: u } = la(n, {
      formItemContext: i
    }), p = A(null), f = jv(), v = Wt({
      isInit: !1,
      width: 0,
      height: 0,
      translateX: 0,
      translateY: 0,
      focusVisible: !1
    }), g = (O) => {
      const V = d(O);
      t(Fe, V), t($n, V);
    }, d = (O) => Ce(O) ? O.value : O, h = (O) => Ce(O) ? O.label : O, b = (O) => !!(a.value || Ce(O) && O.disabled), m = (O) => n.modelValue === d(O), C = (O) => n.options.find((V) => d(V) === O), I = (O) => [
      o.e("item"),
      o.is("selected", m(O)),
      o.is("disabled", b(O))
    ], $ = () => {
      if (!p.value)
        return;
      const O = p.value.querySelector(".is-selected"), V = p.value.querySelector(".is-selected input");
      if (!O || !V) {
        v.width = 0, v.height = 0, v.translateX = 0, v.translateY = 0, v.focusVisible = !1;
        return;
      }
      const N = O.getBoundingClientRect();
      v.isInit = !0, n.direction === "vertical" ? (v.height = N.height, v.translateY = O.offsetTop) : (v.width = N.width, v.translateX = O.offsetLeft);
      try {
        v.focusVisible = V.matches(":focus-visible");
      } catch {
      }
    }, S = y(() => [
      o.b(),
      o.m(s.value),
      o.is("block", n.block)
    ]), T = y(() => ({
      width: n.direction === "vertical" ? "100%" : `${v.width}px`,
      height: n.direction === "vertical" ? `${v.height}px` : "100%",
      transform: n.direction === "vertical" ? `translateY(${v.translateY}px)` : `translateX(${v.translateX}px)`,
      display: v.isInit ? "block" : "none"
    })), E = y(() => [
      o.e("item-selected"),
      o.is("disabled", b(C(n.modelValue))),
      o.is("focus-visible", v.focusVisible)
    ]), F = y(() => n.name || r.value);
    return tt(p, $), Z(f, $), Z(() => n.modelValue, () => {
      var O;
      $(), n.validateEvent && ((O = i?.validate) == null || O.call(i, "change").catch((V) => ye(V)));
    }, {
      flush: "post"
    }), (O, V) => O.options.length ? (_(), B("div", {
      key: 0,
      id: c(l),
      ref_key: "segmentedRef",
      ref: p,
      class: M(c(S)),
      role: "radiogroup",
      "aria-label": c(u) ? void 0 : O.ariaLabel || "segmented",
      "aria-labelledby": c(u) ? c(i).labelId : void 0
    }, [
      R("div", {
        class: M([c(o).e("group"), c(o).m(n.direction)])
      }, [
        R("div", {
          style: ve(c(T)),
          class: M(c(E))
        }, null, 6),
        (_(!0), B(ze, null, Jn(O.options, (N, P) => (_(), B("label", {
          key: P,
          class: M(I(N))
        }, [
          R("input", {
            class: M(c(o).e("item-input")),
            type: "radio",
            name: c(F),
            disabled: b(N),
            checked: m(N),
            onChange: (j) => g(N)
          }, null, 42, ["name", "disabled", "checked", "onChange"]),
          R("div", {
            class: M(c(o).e("item-label"))
          }, [
            G(O.$slots, "default", { item: N }, () => [
              ct(Y(h(N)), 1)
            ])
          ], 2)
        ], 2))), 128))
      ], 2)
    ], 10, ["id", "aria-label", "aria-labelledby"])) : W("v-if", !0);
  }
});
var iy = /* @__PURE__ */ ie(sy, [["__file", "segmented.vue"]]);
const ly = Je(iy), tu = ["success", "info", "warning", "error"], Se = vl({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  plain: !1,
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: ue ? document.body : void 0
}), uy = se({
  customClass: {
    type: String,
    default: Se.customClass
  },
  center: {
    type: Boolean,
    default: Se.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Se.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Se.duration
  },
  icon: {
    type: Ot,
    default: Se.icon
  },
  id: {
    type: String,
    default: Se.id
  },
  message: {
    type: q([
      String,
      Object,
      Function
    ]),
    default: Se.message
  },
  onClose: {
    type: q(Function),
    default: Se.onClose
  },
  showClose: {
    type: Boolean,
    default: Se.showClose
  },
  type: {
    type: String,
    values: tu,
    default: Se.type
  },
  plain: {
    type: Boolean,
    default: Se.plain
  },
  offset: {
    type: Number,
    default: Se.offset
  },
  zIndex: {
    type: Number,
    default: Se.zIndex
  },
  grouping: {
    type: Boolean,
    default: Se.grouping
  },
  repeatNum: {
    type: Number,
    default: Se.repeatNum
  }
}), cy = {
  destroy: () => !0
}, ot = Qu([]), dy = (e) => {
  const t = ot.findIndex((r) => r.id === e), n = ot[t];
  let o;
  return t > 0 && (o = ot[t - 1]), { current: n, prev: o };
}, fy = (e) => {
  const { prev: t } = dy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, py = (e, t) => ot.findIndex((o) => o.id === e) > 0 ? 16 : t, vy = z({
  name: "ElMessage"
}), hy = /* @__PURE__ */ z({
  ...vy,
  props: uy,
  emits: cy,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Uh, { ns: r, zIndex: s } = ll("message"), { currentZIndex: a, nextZIndex: i } = s, l = A(), u = A(!1), p = A(0);
    let f;
    const v = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = y(() => {
      const E = n.type;
      return { [r.bm("icon", E)]: E && zo[E] };
    }), d = y(() => n.icon || zo[n.type] || ""), h = y(() => fy(n.id)), b = y(() => py(n.id, n.offset) + h.value), m = y(() => p.value + b.value), C = y(() => ({
      top: `${b.value}px`,
      zIndex: a.value
    }));
    function I() {
      n.duration !== 0 && ({ stop: f } = Do(() => {
        S();
      }, n.duration));
    }
    function $() {
      f?.();
    }
    function S() {
      u.value = !1;
    }
    function T({ code: E }) {
      E === dt.esc && S();
    }
    return ge(() => {
      I(), i(), u.value = !0;
    }), Z(() => n.repeatNum, () => {
      $(), I();
    }), Oe(document, "keydown", T), tt(l, () => {
      p.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: m,
      close: S
    }), (E, F) => (_(), K(cn, {
      name: c(r).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (O) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: H(() => [
        $e(R("div", {
          id: E.id,
          ref_key: "messageRef",
          ref: l,
          class: M([
            c(r).b(),
            { [c(r).m(E.type)]: E.type },
            c(r).is("center", E.center),
            c(r).is("closable", E.showClose),
            c(r).is("plain", E.plain),
            E.customClass
          ]),
          style: ve(c(C)),
          role: "alert",
          onMouseenter: $,
          onMouseleave: I
        }, [
          E.repeatNum > 1 ? (_(), K(c(Wb), {
            key: 0,
            value: E.repeatNum,
            type: c(v),
            class: M(c(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : W("v-if", !0),
          c(d) ? (_(), K(c(Ie), {
            key: 1,
            class: M([c(r).e("icon"), c(g)])
          }, {
            default: H(() => [
              (_(), K(Me(c(d))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          G(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (_(), B(ze, { key: 1 }, [
              W(" Caution here, message could've been compromised, never use user's input as message "),
              R("p", {
                class: M(c(r).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), B("p", {
              key: 0,
              class: M(c(r).e("content"))
            }, Y(E.message), 3))
          ]),
          E.showClose ? (_(), K(c(Ie), {
            key: 2,
            class: M(c(r).e("closeBtn")),
            onClick: Te(S, ["stop"])
          }, {
            default: H(() => [
              X(c(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 46, ["id"]), [
          [rt, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var gy = /* @__PURE__ */ ie(hy, [["__file", "message.vue"]]);
let my = 1;
const nu = (e) => {
  const t = !e || be(e) || Qn(e) || pe(e) ? { message: e } : e, n = {
    ...Se,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (be(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Ke(o) || (ye("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return sn(ut.grouping) && !n.grouping && (n.grouping = ut.grouping), he(ut.duration) && n.duration === 3e3 && (n.duration = ut.duration), he(ut.offset) && n.offset === 16 && (n.offset = ut.offset), sn(ut.showClose) && !n.showClose && (n.showClose = ut.showClose), n;
}, by = (e) => {
  const t = ot.indexOf(e);
  if (t === -1)
    return;
  ot.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, yy = ({ appendTo: e, ...t }, n) => {
  const o = `message_${my++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), by(p);
    },
    onDestroy: () => {
      Mo(null, s);
    }
  }, i = X(gy, a, pe(a.message) || Qn(a.message) ? {
    default: pe(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || Ln._context, Mo(i, s), e.appendChild(s.firstElementChild);
  const l = i.component, p = {
    id: o,
    vnode: i,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return p;
}, Ln = (e = {}, t) => {
  if (!ue)
    return { close: () => {
    } };
  const n = nu(e);
  if (n.grouping && ot.length) {
    const r = ot.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (he(ut.max) && ot.length >= ut.max)
    return { close: () => {
    } };
  const o = yy(n, t);
  return ot.push(o), o.handler;
};
tu.forEach((e) => {
  Ln[e] = (t = {}, n) => {
    const o = nu(t);
    return Ln({ ...o, type: e }, n);
  };
});
function wy(e) {
  for (const t of ot)
    (!e || e === t.props.type) && t.handler.close();
}
Ln.closeAll = wy;
Ln._context = null;
const _y = cl(Ln, "$message"), ou = [
  "success",
  "info",
  "warning",
  "error"
], Sy = se({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: Boolean,
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: Ot
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: q([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: q(Function),
    default: () => {
    }
  },
  onClose: {
    type: q(Function),
    required: !0
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...ou, ""],
    default: ""
  },
  zIndex: Number
}), Cy = {
  destroy: () => !0
}, Ey = z({
  name: "ElNotification"
}), Ty = /* @__PURE__ */ z({
  ...Ey,
  props: Sy,
  emits: Cy,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = ll("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: i } = fl, l = A(!1);
    let u;
    const p = y(() => {
      const I = n.type;
      return I && zo[n.type] ? o.m(I) : "";
    }), f = y(() => n.type && zo[n.type] || n.icon), v = y(() => n.position.endsWith("right") ? "right" : "left"), g = y(() => n.position.startsWith("top") ? "top" : "bottom"), d = y(() => {
      var I;
      return {
        [g.value]: `${n.offset}px`,
        zIndex: (I = n.zIndex) != null ? I : a.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: u } = Do(() => {
        l.value && m();
      }, n.duration));
    }
    function b() {
      u?.();
    }
    function m() {
      l.value = !1;
    }
    function C({ code: I }) {
      I === dt.delete || I === dt.backspace ? b() : I === dt.esc ? l.value && m() : h();
    }
    return ge(() => {
      h(), s(), l.value = !0;
    }), Oe(document, "keydown", C), t({
      visible: l,
      close: m
    }), (I, $) => (_(), K(cn, {
      name: c(o).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: (S) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: H(() => [
        $e(R("div", {
          id: I.id,
          class: M([c(o).b(), I.customClass, c(v)]),
          style: ve(c(d)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: h,
          onClick: I.onClick
        }, [
          c(f) ? (_(), K(c(Ie), {
            key: 0,
            class: M([c(o).e("icon"), c(p)])
          }, {
            default: H(() => [
              (_(), K(Me(c(f))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          R("div", {
            class: M(c(o).e("group"))
          }, [
            R("h2", {
              class: M(c(o).e("title")),
              textContent: Y(I.title)
            }, null, 10, ["textContent"]),
            $e(R("div", {
              class: M(c(o).e("content")),
              style: ve(I.title ? void 0 : { margin: 0 })
            }, [
              G(I.$slots, "default", {}, () => [
                I.dangerouslyUseHTMLString ? (_(), B(ze, { key: 1 }, [
                  W(" Caution here, message could've been compromised, never use user's input as message "),
                  R("p", { innerHTML: I.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), B("p", { key: 0 }, Y(I.message), 1))
              ])
            ], 6), [
              [rt, I.message]
            ]),
            I.showClose ? (_(), K(c(Ie), {
              key: 0,
              class: M(c(o).e("closeBtn")),
              onClick: Te(m, ["stop"])
            }, {
              default: H(() => [
                X(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : W("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [rt, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Oy = /* @__PURE__ */ ie(Ty, [["__file", "notification.vue"]]);
const Wo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Br = 16;
let Iy = 1;
const xn = function(e = {}, t) {
  if (!ue)
    return { close: () => {
    } };
  (be(e) || Qn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Wo[n].forEach(({ vm: p }) => {
    var f;
    o += (((f = p.el) == null ? void 0 : f.offsetHeight) || 0) + Br;
  }), o += Br;
  const r = `notification_${Iy++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      $y(r, n, s);
    }
  };
  let i = document.body;
  Ke(e.appendTo) ? i = e.appendTo : be(e.appendTo) && (i = document.querySelector(e.appendTo)), Ke(i) || (ye("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), i = document.body);
  const l = document.createElement("div"), u = X(Oy, a, pe(a.message) ? a.message : Qn(a.message) ? () => a.message : null);
  return u.appContext = Tn(t) ? xn._context : t, u.props.onDestroy = () => {
    Mo(null, l);
  }, Mo(u, l), Wo[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
ou.forEach((e) => {
  xn[e] = (t = {}, n) => ((be(t) || Qn(t)) && (t = {
    message: t
  }), xn({ ...t, type: e }, n));
});
function $y(e, t, n) {
  const o = Wo[t], r = o.findIndex(({ vm: u }) => {
    var p;
    return ((p = u.component) == null ? void 0 : p.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: s } = o[r];
  if (!s)
    return;
  n?.(s);
  const a = s.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const l = o.length;
  if (!(l < 1))
    for (let u = r; u < l; u++) {
      const { el: p, component: f } = o[u].vm, v = Number.parseInt(p.style[i], 10) - a - Br;
      f.props.offset = v;
    }
}
function Ay() {
  for (const e of Object.values(Wo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
xn.closeAll = Ay;
xn._context = null;
const Py = cl(xn, "$notify"), Ry = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", o) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: o
    });
  },
  /**
   * 显示消息提示（完整版）
   * @param options 消息选项
   */
  message(e) {
    const {
      message: t,
      type: n = "success",
      position: o = "center",
      duration: r = 3e3,
      showClose: s = !1
    } = e;
    o === "center" ? _y({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0
    }) : Py({
      message: t,
      type: n,
      position: o,
      duration: r,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: "custom-notification"
      // 自定义样式类
    });
  },
  /**
   * 显示成功消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  success(e, t = "center", n) {
    this.msg(e, "success", t, n);
  },
  /**
   * 显示警告消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  warning(e, t = "center", n) {
    this.msg(e, "warning", t, n);
  },
  /**
   * 显示信息消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  info(e, t = "center", n) {
    this.msg(e, "info", t, n);
  },
  /**
   * 显示错误消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  error(e, t = "center", n) {
    this.msg(e, "error", t, n);
  }
}, My = {
  key: 0,
  class: "selection-hint"
}, Ly = /* @__PURE__ */ z({
  __name: "RegionSelector",
  props: {
    modelValue: {},
    locked: { type: Boolean }
  },
  emits: ["update:modelValue", "complete"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = A(null), s = A(null), a = ["nw", "n", "ne", "e", "se", "s", "sw", "w"], i = y(() => s.value ?? n.modelValue), l = y(() => i.value ? {
      left: `${i.value.x}px`,
      top: `${i.value.y}px`,
      width: `${i.value.width}px`,
      height: `${i.value.height}px`
    } : {}), u = (d, h, b, m) => ({
      x: Math.min(d, b),
      y: Math.min(h, m),
      width: Math.abs(b - d),
      height: Math.abs(m - h)
    }), p = (d, h, b) => Math.min(Math.max(d, h), b), f = (d) => {
      n.locked || d.button !== 0 || d.target.closest(".selected-region") || (r.value = { x: d.clientX, y: d.clientY }, s.value = { x: d.clientX, y: d.clientY, width: 0, height: 0 }, o("update:modelValue", null), window.addEventListener("mousemove", v), window.addEventListener("mouseup", g, { once: !0 }));
    }, v = (d) => {
      if (!r.value) return;
      const h = p(d.clientX, 0, window.innerWidth), b = p(d.clientY, 0, window.innerHeight);
      s.value = u(r.value.x, r.value.y, h, b);
    }, g = () => {
      window.removeEventListener("mousemove", v);
      const d = s.value;
      if (s.value = null, r.value = null, !d || d.width < 20 || d.height < 20) {
        o("update:modelValue", null);
        return;
      }
      const h = {
        ...d,
        x: Math.round(d.x),
        y: Math.round(d.y),
        width: Math.round(d.width),
        height: Math.round(d.height)
      };
      o("update:modelValue", h), o("complete", h);
    };
    return (d, h) => (_(), B(
      "div",
      {
        class: "region-selector",
        onMousedown: f
      },
      [
        h[0] || (h[0] = R(
          "div",
          { class: "grid-layer" },
          null,
          -1
          /* HOISTED */
        )),
        i.value ? W("v-if", !0) : (_(), B(
          "div",
          My,
          Y(d.$t("screenRecorder.dragToSelect")),
          1
          /* TEXT */
        )),
        i.value ? (_(), B(
          "div",
          {
            key: 1,
            class: "selected-region",
            style: ve(l.value)
          },
          [
            (_(), B(
              ze,
              null,
              Jn(a, (b) => R(
                "span",
                {
                  key: b,
                  class: M(["resize-handle", b])
                },
                null,
                2
                /* CLASS */
              )),
              64
              /* STABLE_FRAGMENT */
            ))
          ],
          4
          /* STYLE */
        )) : W("v-if", !0)
      ],
      32
      /* NEED_HYDRATION */
    ));
  }
}), pn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, xy = /* @__PURE__ */ pn(Ly, [["__scopeId", "data-v-f61ad013"]]), Ny = { class: "dimension" }, ky = ["value"], Dy = { class: "dimension" }, By = ["value"], Fy = ["disabled"], zy = /* @__PURE__ */ z({
  __name: "RecordingEntry",
  props: {
    width: {},
    height: {},
    top: {},
    left: {},
    fps: {},
    format: {},
    disabled: { type: Boolean }
  },
  emits: ["start", "cancel", "update:fps", "update:format"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = y({
      get: () => n.fps,
      set: (i) => o("update:fps", Number(i))
    }), s = y({
      get: () => n.format,
      set: (i) => o("update:format", i)
    }), a = y(() => ({
      left: `${n.left}px`,
      top: `${n.top}px`
    }));
    return (i, l) => (_(), B(
      "div",
      {
        class: "recording-entry",
        style: ve(a.value)
      },
      [
        R("label", Ny, [
          R(
            "span",
            null,
            Y(i.$t("screenRecorder.width")),
            1
            /* TEXT */
          ),
          R("input", {
            value: i.width,
            readonly: ""
          }, null, 8, ky)
        ]),
        R("label", Dy, [
          R(
            "span",
            null,
            Y(i.$t("screenRecorder.height")),
            1
            /* TEXT */
          ),
          R("input", {
            value: i.height,
            readonly: ""
          }, null, 8, By)
        ]),
        $e(R(
          "select",
          {
            "onUpdate:modelValue": l[0] || (l[0] = (u) => r.value = u)
          },
          l[4] || (l[4] = [
            R(
              "option",
              { value: 15 },
              "15 FPS",
              -1
              /* HOISTED */
            ),
            R(
              "option",
              { value: 24 },
              "24 FPS",
              -1
              /* HOISTED */
            ),
            R(
              "option",
              { value: 30 },
              "30 FPS",
              -1
              /* HOISTED */
            ),
            R(
              "option",
              { value: 60 },
              "60 FPS",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ), [
          [Ya, r.value]
        ]),
        $e(R(
          "select",
          {
            "onUpdate:modelValue": l[1] || (l[1] = (u) => s.value = u)
          },
          l[5] || (l[5] = [
            R(
              "option",
              { value: "mp4" },
              "MP4",
              -1
              /* HOISTED */
            ),
            R(
              "option",
              { value: "gif" },
              "GIF",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ), [
          [Ya, s.value]
        ]),
        R("button", {
          class: "primary",
          disabled: i.disabled,
          onClick: l[2] || (l[2] = (u) => i.$emit("start"))
        }, Y(i.$t("screenRecorder.start")), 9, Fy),
        R("button", {
          class: "ghost",
          onClick: l[3] || (l[3] = (u) => i.$emit("cancel"))
        }, "×")
      ],
      4
      /* STYLE */
    ));
  }
}), Vy = /* @__PURE__ */ pn(zy, [["__scopeId", "data-v-ea3f2aa6"]]), Hy = { class: "floating-control" }, Wy = { class: "time" }, jy = /* @__PURE__ */ z({
  __name: "FloatingControlBar",
  props: {
    elapsedMs: {},
    paused: { type: Boolean }
  },
  emits: ["pause", "resume", "stop", "cancel"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = y(() => {
      const a = Math.floor(n.elapsedMs / 1e3), i = Math.floor(a / 60).toString().padStart(2, "0"), l = (a % 60).toString().padStart(2, "0");
      return `${i}:${l}`;
    }), s = () => {
      n.paused ? o("resume") : o("pause");
    };
    return (a, i) => (_(), B("div", Hy, [
      R(
        "span",
        {
          class: M(["record-dot", { paused: a.paused }])
        },
        null,
        2
        /* CLASS */
      ),
      R(
        "span",
        Wy,
        Y(r.value),
        1
        /* TEXT */
      ),
      R(
        "button",
        { onClick: s },
        Y(a.paused ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
        1
        /* TEXT */
      ),
      R(
        "button",
        {
          class: "danger",
          onClick: i[0] || (i[0] = (l) => a.$emit("stop"))
        },
        Y(a.$t("screenRecorder.stop")),
        1
        /* TEXT */
      ),
      R(
        "button",
        {
          class: "ghost",
          onClick: i[1] || (i[1] = (l) => a.$emit("cancel"))
        },
        Y(a.$t("screenRecorder.cancel")),
        1
        /* TEXT */
      )
    ]));
  }
}), Uy = /* @__PURE__ */ pn(jy, [["__scopeId", "data-v-934c1ee3"]]);
async function Ky(e = {}) {
  return typeof e == "object" && Object.freeze(e), await L("plugin:dialog|save", { options: e });
}
const Gy = { class: "export-form" }, qy = { class: "path-row" }, Yy = /* @__PURE__ */ z({
  __name: "ExportSettingsDialog",
  props: {
    modelValue: { type: Boolean },
    settings: {}
  },
  emits: ["update:modelValue", "update:settings", "export", "cancel"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = [
      { label: "MP4", value: "mp4" },
      { label: "GIF", value: "gif" }
    ], s = [15, 24, 30, 60], a = (f, v) => {
      o("update:settings", {
        ...n.settings,
        [f]: v
      });
    }, i = (f) => {
      a("format", f === "gif" ? "gif" : "mp4");
    }, l = (f) => {
      const v = Number(f);
      a("fps", [15, 24, 30, 60].includes(v) ? v : 30);
    }, u = (f) => {
      const v = String(f);
      a(
        "quality",
        ["high", "standard", "small"].includes(v) ? v : "standard"
      );
    }, p = async () => {
      const f = n.settings.format, v = await Ky({
        title: "保存录屏",
        defaultPath: `recording.${f}`,
        filters: [
          { name: f.toUpperCase(), extensions: [f] }
        ]
      });
      v && a("savePath", v);
    };
    return (f, v) => {
      const g = ly, d = ny, h = ty, b = lg, m = Yl, C = F0;
      return _(), K(C, {
        "model-value": f.modelValue,
        title: f.$t("screenRecorder.exportSettings"),
        width: "420px",
        "append-to-body": "",
        "onUpdate:modelValue": v[2] || (v[2] = (I) => f.$emit("update:modelValue", I))
      }, {
        footer: H(() => [
          X(m, {
            onClick: v[0] || (v[0] = (I) => f.$emit("cancel"))
          }, {
            default: H(() => [
              ct(
                Y(f.$t("common.cancel")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          X(m, {
            type: "primary",
            disabled: !f.settings.savePath,
            onClick: v[1] || (v[1] = (I) => f.$emit("export"))
          }, {
            default: H(() => [
              ct(
                Y(f.$t("screenRecorder.export")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ]),
        default: H(() => [
          R("div", Gy, [
            R("label", null, [
              R(
                "span",
                null,
                Y(f.$t("screenRecorder.format")),
                1
                /* TEXT */
              ),
              X(g, {
                "model-value": f.settings.format,
                options: r,
                "onUpdate:modelValue": i
              }, null, 8, ["model-value"])
            ]),
            R("label", null, [
              R(
                "span",
                null,
                Y(f.$t("screenRecorder.fps")),
                1
                /* TEXT */
              ),
              X(h, {
                "model-value": f.settings.fps,
                "onUpdate:modelValue": l
              }, {
                default: H(() => [
                  (_(), B(
                    ze,
                    null,
                    Jn(s, (I) => X(d, {
                      key: I,
                      label: `${I} FPS`,
                      value: I
                    }, null, 8, ["label", "value"])),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model-value"])
            ]),
            R("label", null, [
              R(
                "span",
                null,
                Y(f.$t("screenRecorder.quality")),
                1
                /* TEXT */
              ),
              X(h, {
                "model-value": f.settings.quality,
                "onUpdate:modelValue": u
              }, {
                default: H(() => [
                  X(d, {
                    label: f.$t("screenRecorder.qualityHigh"),
                    value: "high"
                  }, null, 8, ["label"]),
                  X(d, {
                    label: f.$t("screenRecorder.qualityStandard"),
                    value: "standard"
                  }, null, 8, ["label"]),
                  X(d, {
                    label: f.$t("screenRecorder.qualitySmall"),
                    value: "small"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model-value"])
            ]),
            R("label", null, [
              R(
                "span",
                null,
                Y(f.$t("screenRecorder.savePath")),
                1
                /* TEXT */
              ),
              R("div", qy, [
                X(b, {
                  "model-value": f.settings.savePath,
                  readonly: ""
                }, null, 8, ["model-value"]),
                X(m, { onClick: p }, {
                  default: H(() => [
                    ct(
                      Y(f.$t("common.browse")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "title"]);
    };
  }
}), Zy = /* @__PURE__ */ pn(Yy, [["__scopeId", "data-v-11026f25"]]), Xy = {}, Jy = { class: "export-progress" };
function Qy(e, t) {
  return _(), B("div", Jy, [
    t[0] || (t[0] = R(
      "div",
      { class: "spinner" },
      null,
      -1
      /* HOISTED */
    )),
    R(
      "div",
      null,
      Y(e.$t("screenRecorder.exporting")),
      1
      /* TEXT */
    )
  ]);
}
const ew = /* @__PURE__ */ pn(Xy, [["render", Qy], ["__scopeId", "data-v-92ef9ccc"]]), tw = { class: "recording-result" }, nw = { class: "actions" }, ow = /* @__PURE__ */ z({
  __name: "RecordingResult",
  props: {
    result: {}
  },
  emits: ["open", "reveal", "recordAgain"],
  setup(e) {
    const t = e, n = y(() => {
      const o = t.result.sizeBytes / 1024 / 1024;
      return o >= 1 ? `${o.toFixed(2)} MB` : `${(t.result.sizeBytes / 1024).toFixed(1)} KB`;
    });
    return (o, r) => {
      const s = Yl;
      return _(), B("div", tw, [
        R(
          "h3",
          null,
          Y(o.$t("screenRecorder.exportDone")),
          1
          /* TEXT */
        ),
        R(
          "p",
          null,
          Y(o.result.width) + " × " + Y(o.result.height) + " · " + Y(n.value),
          1
          /* TEXT */
        ),
        R("div", nw, [
          X(s, {
            type: "primary",
            onClick: r[0] || (r[0] = (a) => o.$emit("open"))
          }, {
            default: H(() => [
              ct(
                Y(o.$t("screenRecorder.openFile")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          X(s, {
            onClick: r[1] || (r[1] = (a) => o.$emit("reveal"))
          }, {
            default: H(() => [
              ct(
                Y(o.$t("screenRecorder.openFolder")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          X(s, {
            onClick: r[2] || (r[2] = (a) => o.$emit("recordAgain"))
          }, {
            default: H(() => [
              ct(
                Y(o.$t("screenRecorder.recordAgain")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
}), rw = /* @__PURE__ */ pn(ow, [["__scopeId", "data-v-2c0d75b1"]]), aw = () => L("screen_recorder_get_ffmpeg_status"), wr = (e) => L("screen_recorder_set_capture_excluded", { excluded: e }), sw = () => L("screen_recorder_close_window"), iw = (e, t) => L("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), lw = () => L("screen_recorder_pause_recording"), uw = (e, t) => L("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), cw = () => L("screen_recorder_stop_recording"), dw = () => L("screen_recorder_cancel_recording"), fw = (e) => L("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), bi = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: ""
});
function pw() {
  const e = A("selecting"), t = A(bi()), n = A(null), o = A(null), r = A(""), s = A(null), a = A(0), i = A(null), l = y(() => e.value !== "recording" || s.value === null ? a.value : a.value + Date.now() - s.value), u = () => {
    i.value !== null && (window.clearInterval(i.value), i.value = null);
  }, p = () => {
    u(), i.value = window.setInterval(() => {
      a.value = l.value, s.value = Date.now();
    }, 500);
  }, f = async () => (n.value = await aw(), n.value), v = async (I) => {
    r.value = "", o.value = null;
    const $ = n.value ?? await f();
    if (!$.available)
      throw new Error($.message || "FFmpeg unavailable");
    await iw(I, t.value), e.value = "recording", a.value = 0, s.value = Date.now(), p();
  }, g = async () => {
    e.value === "recording" && (a.value = l.value, s.value = null, u(), await lw(), e.value = "paused");
  }, d = async (I) => {
    e.value === "paused" && (await uw(I, t.value), e.value = "recording", s.value = Date.now(), p());
  }, h = async () => {
    e.value !== "recording" && e.value !== "paused" || (a.value = l.value, s.value = null, u(), await cw(), e.value = "exporting");
  }, b = async () => (e.value = "exporting", o.value = await fw(t.value), e.value = "completed", o.value), m = async () => {
    u(), await dw(), e.value = "selecting", s.value = null, a.value = 0, o.value = null;
  }, C = () => {
    e.value = "selecting", s.value = null, a.value = 0, o.value = null, r.value = "", t.value = bi();
  };
  return Ur(() => {
    u();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: r,
    elapsedMs: l,
    refreshFfmpegStatus: f,
    begin: v,
    pause: g,
    resume: d,
    stop: h,
    exportFile: b,
    cancel: m,
    reset: C
  };
}
const vw = { class: "screen-recorder" }, hw = {
  key: 4,
  class: "ffmpeg-warning"
}, gw = /* @__PURE__ */ z({
  __name: "index",
  setup(e) {
    const t = Ri(), n = A(null), o = A(null), r = A(!1), {
      status: s,
      settings: a,
      ffmpegStatus: i,
      result: l,
      elapsedMs: u,
      refreshFfmpegStatus: p,
      begin: f,
      pause: v,
      resume: g,
      stop: d,
      exportFile: h,
      cancel: b,
      reset: m
    } = pw(), C = y(() => {
      if (!n.value) return { left: 36, top: 36 };
      const U = 10, te = 470, ne = 38, Qe = Math.min(
        Math.max(n.value.x, U),
        Math.max(U, window.innerWidth - te - U)
      ), Ne = n.value.y + n.value.height + U, it = Ne + ne <= window.innerHeight ? Ne : Math.max(U, n.value.y - ne - U);
      return { left: Qe, top: it };
    }), I = async (U) => {
      const te = await t.outerPosition(), ne = await t.scaleFactor();
      return {
        x: U.x,
        y: U.y,
        width: U.width,
        height: U.height,
        screenX: Math.round(te.x + U.x * ne),
        screenY: Math.round(te.y + U.y * ne),
        physicalWidth: Math.max(1, Math.round(U.width * ne)),
        physicalHeight: Math.max(1, Math.round(U.height * ne)),
        scale: ne
      };
    }, $ = async (U) => {
      o.value = await I(U), s.value = "ready";
    }, S = async () => {
      if (!n.value)
        throw new Error("NO_REGION");
      return o.value = await I(n.value), o.value;
    }, T = async (U) => {
      try {
        await U();
      } catch (te) {
        Ry.msg(te?.message || String(te), "error");
      }
    }, E = () => T(async () => {
      const U = await S();
      await f(U);
    }), F = () => T(v), O = () => T(async () => {
      const U = await S();
      await g(U);
    }), V = () => T(async () => {
      await d(), r.value = !0;
    }), N = () => T(async () => {
      r.value = !1, await h();
    }), P = () => T(async () => {
      r.value = !1, await b(), m(), n.value = null, o.value = null;
    }), j = () => {
      m(), n.value = null, o.value = null;
    }, ae = async () => {
      try {
        await b();
      } catch {
      }
      await wr(!1).catch(() => {
      }), await sw();
    }, J = async () => {
      l.value && await L("open_file_with_default_app", { filePath: l.value.path });
    }, Q = async () => {
      l.value && await L("show_file_in_folder", { filePath: l.value.path });
    }, D = (U) => {
      U.key === "Escape" && (U.preventDefault(), ae());
    };
    return ge(async () => {
      await wr(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await p().catch(() => {
      }), window.addEventListener("keydown", D);
    }), Ur(() => {
      window.removeEventListener("keydown", D), wr(!1);
    }), (U, te) => (_(), B("div", vw, [
      X(xy, {
        modelValue: n.value,
        "onUpdate:modelValue": te[0] || (te[0] = (ne) => n.value = ne),
        locked: c(s) !== "selecting" && c(s) !== "ready",
        onComplete: $
      }, null, 8, ["modelValue", "locked"]),
      n.value && (c(s) === "selecting" || c(s) === "ready") ? (_(), K(Vy, {
        key: 0,
        width: Math.round(n.value.width),
        height: Math.round(n.value.height),
        left: C.value.left,
        top: C.value.top,
        fps: c(a).fps,
        format: c(a).format,
        disabled: c(i)?.available === !1,
        "onUpdate:fps": te[1] || (te[1] = (ne) => c(a).fps = ne),
        "onUpdate:format": te[2] || (te[2] = (ne) => c(a).format = ne),
        onStart: E,
        onCancel: ae
      }, null, 8, ["width", "height", "left", "top", "fps", "format", "disabled"])) : W("v-if", !0),
      c(s) === "recording" || c(s) === "paused" ? (_(), K(Uy, {
        key: 1,
        "elapsed-ms": c(u),
        paused: c(s) === "paused",
        onPause: F,
        onResume: O,
        onStop: V,
        onCancel: P
      }, null, 8, ["elapsed-ms", "paused"])) : W("v-if", !0),
      X(Zy, {
        modelValue: r.value,
        "onUpdate:modelValue": te[3] || (te[3] = (ne) => r.value = ne),
        settings: c(a),
        "onUpdate:settings": te[4] || (te[4] = (ne) => jr(a) ? a.value = ne : null),
        onExport: N,
        onCancel: P
      }, null, 8, ["modelValue", "settings"]),
      c(s) === "exporting" && !r.value ? (_(), K(ew, { key: 2 })) : W("v-if", !0),
      c(s) === "completed" && c(l) ? (_(), K(rw, {
        key: 3,
        result: c(l),
        onOpen: J,
        onReveal: Q,
        onRecordAgain: j
      }, null, 8, ["result"])) : W("v-if", !0),
      c(i) && !c(i).available ? (_(), B(
        "div",
        hw,
        Y(c(i).message || U.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : W("v-if", !0)
    ]));
  }
}), bw = /* @__PURE__ */ pn(gw, [["__scopeId", "data-v-7bf5637e"]]);
export {
  bw as default
};
