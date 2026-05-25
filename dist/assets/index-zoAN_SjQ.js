import { i as Si, w as Nn, l as Tu, a as Ou, b as Iu, c as _e, d as Au, e as Fr, B as $u, h as zr, f as _r, g as Ci, j as Pu, k as Ee, m as Ru, t as Mu, n as fe, o as Lu, p as Nu, q as xu, r as be, s as Vr, u as pe, v as Ei, x as ku, N as Tt, y as Du, z as Bu, A as Te, C as oe, D as P, E as y, F as c, G as Hr, H as Fu, I as Ti, J as on, K as Wr, L as ge, M as Z, O as zu, P as jr, Q as Rs, R as qe, S as V, T as B, U as _, V as U, W as Wt, X as $, Y as ot, Z as Ur, _ as Vu, $ as Kr, a0 as W, a1 as ke, a2 as L, a3 as K, a4 as H, a5 as xe, a6 as Q, a7 as G, a8 as ye, a9 as it, aa as Re, ab as jt, ac as Hu, ad as Wu, ae as ju, af as Oi, ag as Uu, ah as Ku, ai as Gu, aj as qu, ak as dt, al as Yu, am as Zu, an as Gr, ao as Xu, ap as Xt, aq as Ju, ar as Ao, as as Qu, at as ec, au as Xn } from "./runtime-entry-9Bgq0Mno.js";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Sr;
const Ms = typeof window < "u" && window.trustedTypes;
if (Ms)
  try {
    Sr = /* @__PURE__ */ Ms.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Nn(`Error creating trusted types policy: ${e}`);
  }
const Ii = Sr ? (e) => Sr.createHTML(e) : (e) => e, tc = "http://www.w3.org/2000/svg", nc = "http://www.w3.org/1998/Math/MathML", _t = typeof document < "u" ? document : null, Ls = _t && /* @__PURE__ */ _t.createElement("template"), oc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? _t.createElementNS(tc, e) : t === "mathml" ? _t.createElementNS(nc, e) : n ? _t.createElement(e, { is: n }) : _t.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => _t.createTextNode(e),
  createComment: (e) => _t.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => _t.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, a) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === a || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === a || !(r = r.nextSibling)); )
        ;
    else {
      Ls.innerHTML = Ii(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Ls.content;
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
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, xt = "transition", Fn = "animation", Jn = Symbol("_vtc"), Ai = {
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
}, rc = /* @__PURE__ */ Fr(
  {},
  $u,
  Ai
), sc = (e) => (e.displayName = "Transition", e.props = rc, e), cn = /* @__PURE__ */ sc(
  (e, { slots: t }) => Ci(Pu, ac(e), t)
), Jt = (e, t = []) => {
  _e(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ns = (e) => e ? _e(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ac(e) {
  const t = {};
  for (const R in e)
    R in Ai || (t[R] = e[R]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: a = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: i = `${n}-enter-to`,
    appearFromClass: l = a,
    appearActiveClass: u = s,
    appearToClass: f = i,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: v = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, p = ic(r), g = p && p[0], b = p && p[1], {
    onBeforeEnter: m,
    onEnter: C,
    onEnterCancelled: O,
    onLeave: I,
    onLeaveCancelled: S,
    onBeforeAppear: A = m,
    onAppear: E = C,
    onAppearCancelled: F = O
  } = t, T = (R, j, re, J) => {
    R._enterCancelled = J, Qt(R, j ? f : i), Qt(R, j ? u : s), re && re();
  }, z = (R, j) => {
    R._isLeaving = !1, Qt(R, d), Qt(R, h), Qt(R, v), j && j();
  }, k = (R) => (j, re) => {
    const J = R ? E : C, X = () => T(j, R, re);
    Jt(J, [j, X]), xs(() => {
      Qt(j, R ? l : a), yt(j, R ? f : i), Ns(J) || ks(j, o, g, X);
    });
  };
  return Fr(t, {
    onBeforeEnter(R) {
      Jt(m, [R]), yt(R, a), yt(R, s);
    },
    onBeforeAppear(R) {
      Jt(A, [R]), yt(R, l), yt(R, u);
    },
    onEnter: k(!1),
    onAppear: k(!0),
    onLeave(R, j) {
      R._isLeaving = !0;
      const re = () => z(R, j);
      yt(R, d), R._enterCancelled ? (yt(R, v), Fs()) : (Fs(), yt(R, v)), xs(() => {
        R._isLeaving && (Qt(R, d), yt(R, h), Ns(I) || ks(R, o, b, re));
      }), Jt(I, [R, re]);
    },
    onEnterCancelled(R) {
      T(R, !1, void 0, !0), Jt(O, [R]);
    },
    onAppearCancelled(R) {
      T(R, !0, void 0, !0), Jt(F, [R]);
    },
    onLeaveCancelled(R) {
      z(R), Jt(S, [R]);
    }
  });
}
function ic(e) {
  if (e == null)
    return null;
  if (Ee(e))
    return [ar(e.enter), ar(e.leave)];
  {
    const t = ar(e);
    return [t, t];
  }
}
function ar(e) {
  const t = Mu(e);
  return process.env.NODE_ENV !== "production" && Ru(t, "<transition> explicit duration"), t;
}
function yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Jn] || (e[Jn] = /* @__PURE__ */ new Set())).add(t);
}
function Qt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Jn];
  n && (n.delete(t), n.size || (e[Jn] = void 0));
}
function xs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let lc = 0;
function ks(e, t, n, o) {
  const r = e._endId = ++lc, a = () => {
    r === e._endId && o();
  };
  if (n != null)
    return setTimeout(a, n);
  const { type: s, timeout: i, propCount: l } = uc(e, t);
  if (!s)
    return o();
  const u = s + "end";
  let f = 0;
  const d = () => {
    e.removeEventListener(u, v), a();
  }, v = (h) => {
    h.target === e && ++f >= l && d();
  };
  setTimeout(() => {
    f < l && d();
  }, i + 1), e.addEventListener(u, v);
}
function uc(e, t) {
  const n = window.getComputedStyle(e), o = (p) => (n[p] || "").split(", "), r = o(`${xt}Delay`), a = o(`${xt}Duration`), s = Ds(r, a), i = o(`${Fn}Delay`), l = o(`${Fn}Duration`), u = Ds(i, l);
  let f = null, d = 0, v = 0;
  t === xt ? s > 0 && (f = xt, d = s, v = a.length) : t === Fn ? u > 0 && (f = Fn, d = u, v = l.length) : (d = Math.max(s, u), f = d > 0 ? s > u ? xt : Fn : null, v = f ? f === xt ? a.length : l.length : 0);
  const h = f === xt && /\b(transform|all)(,|$)/.test(
    o(`${xt}Property`).toString()
  );
  return {
    type: f,
    timeout: d,
    propCount: v,
    hasTransform: h
  };
}
function Ds(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Bs(n) + Bs(e[o])));
}
function Bs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Fs() {
  return document.body.offsetHeight;
}
function cc(e, t, n) {
  const o = e[Jn];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const $o = Symbol("_vod"), $i = Symbol("_vsh"), st = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[$o] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), zn(e, !0), o.enter(e)) : o.leave(e, () => {
      zn(e, !1);
    }) : zn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    zn(e, t);
  }
};
process.env.NODE_ENV !== "production" && (st.name = "show");
function zn(e, t) {
  e.style.display = t ? e[$o] : "none", e[$i] = !t;
}
const dc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), fc = /(^|;)\s*display\s*:/;
function pc(e, t, n) {
  const o = e.style, r = be(n);
  let a = !1;
  if (n && !r) {
    if (t)
      if (be(t))
        for (const s of t.split(";")) {
          const i = s.slice(0, s.indexOf(":")).trim();
          n[i] == null && Eo(o, i, "");
        }
      else
        for (const s in t)
          n[s] == null && Eo(o, s, "");
    for (const s in n)
      s === "display" && (a = !0), Eo(o, s, n[s]);
  } else if (r) {
    if (t !== n) {
      const s = o[dc];
      s && (n += ";" + s), o.cssText = n, a = fc.test(n);
    }
  } else t && e.removeAttribute("style");
  $o in e && (e[$o] = a ? o.display : "", e[$i] && (o.display = "none"));
}
const vc = /[^\\];\s*$/, zs = /\s*!important$/;
function Eo(e, t, n) {
  if (_e(n))
    n.forEach((o) => Eo(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && vc.test(n) && Nn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = gc(e, t);
    zs.test(n) ? e.setProperty(
      zr(o),
      n.replace(zs, ""),
      "important"
    ) : e[o] = n;
  }
}
const Vs = ["Webkit", "Moz", "ms"], ir = {};
function gc(e, t) {
  const n = ir[t];
  if (n)
    return n;
  let o = Vr(t);
  if (o !== "filter" && o in e)
    return ir[t] = o;
  o = Du(o);
  for (let r = 0; r < Vs.length; r++) {
    const a = Vs[r] + o;
    if (a in e)
      return ir[t] = a;
  }
  return t;
}
const Hs = "http://www.w3.org/1999/xlink";
function Ws(e, t, n, o, r, a = xu(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hs, t.slice(6, t.length)) : e.setAttributeNS(Hs, t, n) : n == null || a && !Ei(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : ku(n) ? String(n) : n
  );
}
function js(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ii(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const i = a === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (i !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = Ei(n) : n == null && i === "string" ? (n = "", s = !0) : i === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (i) {
    process.env.NODE_ENV !== "production" && !s && Nn(
      `Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`,
      i
    );
  }
  s && e.removeAttribute(r || t);
}
function tn(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function hc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Us = Symbol("_vei");
function mc(e, t, n, o, r = null) {
  const a = e[Us] || (e[Us] = {}), s = a[t];
  if (o && s)
    s.value = process.env.NODE_ENV !== "production" ? Gs(o, t) : o;
  else {
    const [i, l] = bc(t);
    if (o) {
      const u = a[t] = _c(
        process.env.NODE_ENV !== "production" ? Gs(o, t) : o,
        r
      );
      tn(e, i, u, l);
    } else s && (hc(e, i, s, l), a[t] = void 0);
  }
}
const Ks = /(?:Once|Passive|Capture)$/;
function bc(e) {
  let t;
  if (Ks.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ks); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : zr(e.slice(2)), t];
}
let lr = 0;
const yc = /* @__PURE__ */ Promise.resolve(), wc = () => lr || (yc.then(() => lr = 0), lr = Date.now());
function _c(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Bu(
      Sc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = wc(), n;
}
function Gs(e, t) {
  return pe(e) || _e(e) ? e : (Nn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Tt);
}
function Sc(e, t) {
  if (_e(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Cc = (e, t, n, o, r, a) => {
  const s = r === "svg";
  t === "class" ? cc(e, o, s) : t === "style" ? pc(e, n, o) : Lu(t) ? Nu(t) || mc(e, t, n, o, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ec(e, t, o, s)) ? (js(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ws(e, t, o, s, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !be(o)) ? js(e, Vr(t), o, a, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ws(e, t, o, s));
};
function Ec(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qs(t) && pe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return qs(t) && be(n) ? !1 : t in e;
}
const Po = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return _e(t) ? (n) => Iu(t, n) : t;
};
function Tc(e) {
  e.target.composing = !0;
}
function Ys(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Tn = Symbol("_assign"), Oc = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[Tn] = Po(r);
    const a = o || r.props && r.props.type === "number";
    tn(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let i = e.value;
      n && (i = i.trim()), a && (i = _r(i)), e[Tn](i);
    }), n && tn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (tn(e, "compositionstart", Tc), tn(e, "compositionend", Ys), tn(e, "change", Ys));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: a } }, s) {
    if (e[Tn] = Po(s), e.composing) return;
    const i = (a || e.type === "number") && !/^0\d/.test(e.value) ? _r(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === l) || (e.value = l));
  }
}, Zs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = Si(t);
    tn(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? _r(Ro(s)) : Ro(s)
      );
      e[Tn](
        e.multiple ? r ? new Set(a) : a : a[0]
      ), e._assigning = !0, fe(() => {
        e._assigning = !1;
      });
    }), e[Tn] = Po(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Xs(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Tn] = Po(n);
  },
  updated(e, { value: t }) {
    e._assigning || Xs(e, t);
  }
};
function Xs(e, t) {
  const n = e.multiple, o = _e(t);
  if (n && !o && !Si(t)) {
    process.env.NODE_ENV !== "production" && Nn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, a = e.options.length; r < a; r++) {
    const s = e.options[r], i = Ro(s);
    if (n)
      if (o) {
        const l = typeof i;
        l === "string" || l === "number" ? s.selected = t.some((u) => String(u) === String(i)) : s.selected = Tu(t, i) > -1;
      } else
        s.selected = t.has(i);
    else if (Ou(Ro(s), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Ro(e) {
  return "_value" in e ? e._value : e.value;
}
const Ic = ["ctrl", "shift", "alt", "meta"], Ac = {
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
  exact: (e, t) => Ic.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ae = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...a) => {
    for (let s = 0; s < t.length; s++) {
      const i = Ac[t[s]];
      if (i && i(r, t)) return;
    }
    return e(r, ...a);
  });
}, $c = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Vn = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const a = zr(r.key);
    if (t.some(
      (s) => s === a || $c[s] === a
    ))
      return e(r);
  });
}, Pc = /* @__PURE__ */ Fr({ patchProp: Cc }, oc);
let Js;
function Rc() {
  return Js || (Js = Au(Pc));
}
const Mo = (...e) => {
  Rc().render(...e);
};
function Mc(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Lc(e, t, n, o, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var To;
const Ye = "__TAURI_TO_IPC_KEY__";
function Nc(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function N(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class xc {
  get rid() {
    return Mc(this, To, "f");
  }
  constructor(t) {
    To.set(this, void 0), Lc(this, To, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return N("plugin:resources|close", {
      rid: this.rid
    });
  }
}
To = /* @__PURE__ */ new WeakMap();
class Lo {
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
    return new jn(this.width * t, this.height * t);
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
class jn {
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
    return new Lo(this.width / t, this.height / t);
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
class wn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Lo ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof jn ? this.size : this.size.toPhysical(t);
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
class qr {
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
    return new Bt(this.x * t, this.y * t);
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
class Bt {
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
    return new qr(this.x / t, this.y / t);
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
    return this.position instanceof qr ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Bt ? this.position : this.position.toPhysical(t);
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
var He;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(He || (He = {}));
async function Pi(e, t) {
  await N("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ri(e, t, n) {
  var o;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return N("plugin:event|listen", {
    event: e,
    target: r,
    handler: Nc(t)
  }).then((a) => async () => Pi(e, a));
}
async function kc(e, t, n) {
  return Ri(e, (o) => {
    Pi(e, o.id), t(o);
  }, n);
}
async function Dc(e, t) {
  await N("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Bc(e, t, n) {
  await N("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Un extends xc {
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
    return N("plugin:image|new", {
      rgba: No(t),
      width: n,
      height: o
    }).then((r) => new Un(r));
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
    return N("plugin:image|from_bytes", {
      bytes: No(t)
    }).then((n) => new Un(n));
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
    return N("plugin:image|from_path", { path: t }).then((n) => new Un(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return N("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return N("plugin:image|size", { rid: this.rid });
  }
}
function No(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Un ? e.rid : e;
}
var Cr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Cr || (Cr = {}));
class Fc {
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
var Qs;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Qs || (Qs = {}));
function Mi() {
  return new Li(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ur() {
  return N("plugin:window|get_all_windows").then((e) => e.map((t) => new Li(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const cr = ["tauri://created", "tauri://error"];
class Li {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || N("plugin:window|create", {
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
    return (n = (await ur()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Mi();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return ur();
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
    for (const t of await ur())
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
    } : Ri(t, n, {
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
    } : kc(t, n, {
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
    if (cr.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Dc(t, n);
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
    if (cr.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Bc(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return cr.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return N("plugin:window|scale_factor", {
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
    return N("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Bt(t));
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
    return N("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Bt(t));
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
    return N("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new jn(t));
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
    return N("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new jn(t));
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
    return N("plugin:window|is_fullscreen", {
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
    return N("plugin:window|is_minimized", {
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
    return N("plugin:window|is_maximized", {
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
    return N("plugin:window|is_focused", {
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
    return N("plugin:window|is_decorated", {
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
    return N("plugin:window|is_resizable", {
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
    return N("plugin:window|is_maximizable", {
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
    return N("plugin:window|is_minimizable", {
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
    return N("plugin:window|is_closable", {
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
    return N("plugin:window|is_visible", {
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
    return N("plugin:window|title", {
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
    return N("plugin:window|theme", {
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
    return N("plugin:window|is_always_on_top", {
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
    return N("plugin:window|center", {
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
    return t && (t === Cr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), N("plugin:window|request_user_attention", {
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
    return N("plugin:window|set_resizable", {
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
    return N("plugin:window|set_enabled", {
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
    return N("plugin:window|is_enabled", {
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
    return N("plugin:window|set_maximizable", {
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
    return N("plugin:window|set_minimizable", {
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
    return N("plugin:window|set_closable", {
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
    return N("plugin:window|set_title", {
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
    return N("plugin:window|maximize", {
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
    return N("plugin:window|unmaximize", {
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
    return N("plugin:window|toggle_maximize", {
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
    return N("plugin:window|minimize", {
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
    return N("plugin:window|unminimize", {
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
    return N("plugin:window|show", {
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
    return N("plugin:window|hide", {
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
    return N("plugin:window|close", {
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
    return N("plugin:window|destroy", {
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
    return N("plugin:window|set_decorations", {
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
    return N("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return N("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return N("plugin:window|set_effects", {
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
    return N("plugin:window|set_always_on_top", {
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
    return N("plugin:window|set_always_on_bottom", {
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
    return N("plugin:window|set_content_protected", {
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
    return N("plugin:window|set_size", {
      label: this.label,
      value: t instanceof wn ? t : new wn(t)
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
    return N("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof wn ? t : t ? new wn(t) : null
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
    return N("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof wn ? t : t ? new wn(t) : null
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
    return N("plugin:window|set_size_constraints", {
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
    return N("plugin:window|set_position", {
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
    return N("plugin:window|set_fullscreen", {
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
    return N("plugin:window|set_focus", {
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
    return N("plugin:window|set_icon", {
      label: this.label,
      value: No(t)
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
    return N("plugin:window|set_skip_taskbar", {
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
    return N("plugin:window|set_cursor_grab", {
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
    return N("plugin:window|set_cursor_visible", {
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
    return N("plugin:window|set_cursor_icon", {
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
    return N("plugin:window|set_background_color", { color: t });
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
    return N("plugin:window|set_cursor_position", {
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
    return N("plugin:window|set_ignore_cursor_events", {
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
    return N("plugin:window|start_dragging", {
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
    return N("plugin:window|start_resize_dragging", {
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
    return N("plugin:window|set_badge_count", {
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
    return N("plugin:window|set_badge_label", {
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
    return N("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? No(t) : void 0
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
    return N("plugin:window|set_progress_bar", {
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
    return N("plugin:window|set_visible_on_all_workspaces", {
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
    return N("plugin:window|set_title_bar_style", {
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
    return N("plugin:window|set_theme", {
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
    return this.listen(He.WINDOW_RESIZED, (n) => {
      n.payload = new jn(n.payload), t(n);
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
    return this.listen(He.WINDOW_MOVED, (n) => {
      n.payload = new Bt(n.payload), t(n);
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
    return this.listen(He.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Fc(n);
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
    const n = await this.listen(He.DRAG_ENTER, (s) => {
      t({
        ...s,
        payload: {
          type: "enter",
          paths: s.payload.paths,
          position: new Bt(s.payload.position)
        }
      });
    }), o = await this.listen(He.DRAG_OVER, (s) => {
      t({
        ...s,
        payload: {
          type: "over",
          position: new Bt(s.payload.position)
        }
      });
    }), r = await this.listen(He.DRAG_DROP, (s) => {
      t({
        ...s,
        payload: {
          type: "drop",
          paths: s.payload.paths,
          position: new Bt(s.payload.position)
        }
      });
    }), a = await this.listen(He.DRAG_LEAVE, (s) => {
      t({ ...s, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), o(), a();
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
    const n = await this.listen(He.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), o = await this.listen(He.WINDOW_BLUR, (r) => {
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
    return this.listen(He.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(He.WINDOW_THEME_CHANGED, t);
  }
}
var ea;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ea || (ea = {}));
var ta;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ta || (ta = {}));
var na;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(na || (na = {}));
const Ni = Symbol(), Kn = "el", zc = "is-", en = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
}, xi = Symbol("namespaceContextKey"), Yr = (e) => {
  const t = e || (Te() ? oe(xi, P(Kn)) : P(Kn));
  return y(() => c(t) || Kn);
}, ce = (e, t) => {
  const n = Yr(t);
  return {
    namespace: n,
    b: (g = "") => en(n.value, e, g, "", ""),
    e: (g) => g ? en(n.value, e, "", g, "") : "",
    m: (g) => g ? en(n.value, e, "", "", g) : "",
    be: (g, b) => g && b ? en(n.value, e, g, b, "") : "",
    em: (g, b) => g && b ? en(n.value, e, "", g, b) : "",
    bm: (g, b) => g && b ? en(n.value, e, g, "", b) : "",
    bem: (g, b, m) => g && b && m ? en(n.value, e, g, b, m) : "",
    is: (g, ...b) => {
      const m = b.length >= 1 ? b[0] : !0;
      return g && m ? `${zc}${g}` : "";
    },
    cssVar: (g) => {
      const b = {};
      for (const m in g)
        g[m] && (b[`--${n.value}-${m}`] = g[m]);
      return b;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const b = {};
      for (const m in g)
        g[m] && (b[`--${n.value}-${e}-${m}`] = g[m]);
      return b;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
var ki = typeof global == "object" && global && global.Object === Object && global, Vc = typeof self == "object" && self && self.Object === Object && self, ht = ki || Vc || Function("return this")(), vt = ht.Symbol, Di = Object.prototype, Hc = Di.hasOwnProperty, Wc = Di.toString, Hn = vt ? vt.toStringTag : void 0;
function jc(e) {
  var t = Hc.call(e, Hn), n = e[Hn];
  try {
    e[Hn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Wc.call(e);
  return o && (t ? e[Hn] = n : delete e[Hn]), r;
}
var Uc = Object.prototype, Kc = Uc.toString;
function Gc(e) {
  return Kc.call(e);
}
var qc = "[object Null]", Yc = "[object Undefined]", oa = vt ? vt.toStringTag : void 0;
function xn(e) {
  return e == null ? e === void 0 ? Yc : qc : oa && oa in Object(e) ? jc(e) : Gc(e);
}
function On(e) {
  return e != null && typeof e == "object";
}
var Zc = "[object Symbol]";
function Uo(e) {
  return typeof e == "symbol" || On(e) && xn(e) == Zc;
}
function Xc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var at = Array.isArray, ra = vt ? vt.prototype : void 0, sa = ra ? ra.toString : void 0;
function Bi(e) {
  if (typeof e == "string")
    return e;
  if (at(e))
    return Xc(e, Bi) + "";
  if (Uo(e))
    return sa ? sa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Jc = /\s/;
function Qc(e) {
  for (var t = e.length; t-- && Jc.test(e.charAt(t)); )
    ;
  return t;
}
var ed = /^\s+/;
function td(e) {
  return e && e.slice(0, Qc(e) + 1).replace(ed, "");
}
function Ut(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var aa = NaN, nd = /^[-+]0x[0-9a-f]+$/i, od = /^0b[01]+$/i, rd = /^0o[0-7]+$/i, sd = parseInt;
function ia(e) {
  if (typeof e == "number")
    return e;
  if (Uo(e))
    return aa;
  if (Ut(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ut(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = td(e);
  var n = od.test(e);
  return n || rd.test(e) ? sd(e.slice(2), n ? 2 : 8) : nd.test(e) ? aa : +e;
}
function Fi(e) {
  return e;
}
var ad = "[object AsyncFunction]", id = "[object Function]", ld = "[object GeneratorFunction]", ud = "[object Proxy]";
function zi(e) {
  if (!Ut(e))
    return !1;
  var t = xn(e);
  return t == id || t == ld || t == ad || t == ud;
}
var dr = ht["__core-js_shared__"], la = function() {
  var e = /[^.]+$/.exec(dr && dr.keys && dr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function cd(e) {
  return !!la && la in e;
}
var dd = Function.prototype, fd = dd.toString;
function dn(e) {
  if (e != null) {
    try {
      return fd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var pd = /[\\^$.*+?()[\]{}|]/g, vd = /^\[object .+?Constructor\]$/, gd = Function.prototype, hd = Object.prototype, md = gd.toString, bd = hd.hasOwnProperty, yd = RegExp(
  "^" + md.call(bd).replace(pd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wd(e) {
  if (!Ut(e) || cd(e))
    return !1;
  var t = zi(e) ? yd : vd;
  return t.test(dn(e));
}
function _d(e, t) {
  return e?.[t];
}
function fn(e, t) {
  var n = _d(e, t);
  return wd(n) ? n : void 0;
}
var Er = fn(ht, "WeakMap");
function Sd(e, t, n) {
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
var Cd = 800, Ed = 16, Td = Date.now;
function Od(e) {
  var t = 0, n = 0;
  return function() {
    var o = Td(), r = Ed - (o - n);
    if (n = o, r > 0) {
      if (++t >= Cd)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Id(e) {
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
}(), Ad = xo ? function(e, t) {
  return xo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Id(t),
    writable: !0
  });
} : Fi, $d = Od(Ad);
function Pd(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Rd = 9007199254740991, Md = /^(?:0|[1-9]\d*)$/;
function Zr(e, t) {
  var n = typeof e;
  return t = t ?? Rd, !!t && (n == "number" || n != "symbol" && Md.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ld(e, t, n) {
  t == "__proto__" && xo ? xo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Xr(e, t) {
  return e === t || e !== e && t !== t;
}
var Nd = Object.prototype, xd = Nd.hasOwnProperty;
function kd(e, t, n) {
  var o = e[t];
  (!(xd.call(e, t) && Xr(o, n)) || n === void 0 && !(t in e)) && Ld(e, t, n);
}
var ua = Math.max;
function Dd(e, t, n) {
  return t = ua(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = ua(o.length - t, 0), s = Array(a); ++r < a; )
      s[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(s), Sd(e, this, i);
  };
}
var Bd = 9007199254740991;
function Jr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Bd;
}
function Fd(e) {
  return e != null && Jr(e.length) && !zi(e);
}
var zd = Object.prototype;
function Vd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || zd;
  return e === n;
}
function Hd(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Wd = "[object Arguments]";
function ca(e) {
  return On(e) && xn(e) == Wd;
}
var Vi = Object.prototype, jd = Vi.hasOwnProperty, Ud = Vi.propertyIsEnumerable, Qr = ca(/* @__PURE__ */ function() {
  return arguments;
}()) ? ca : function(e) {
  return On(e) && jd.call(e, "callee") && !Ud.call(e, "callee");
};
function Kd() {
  return !1;
}
var Hi = typeof exports == "object" && exports && !exports.nodeType && exports, da = Hi && typeof module == "object" && module && !module.nodeType && module, Gd = da && da.exports === Hi, fa = Gd ? ht.Buffer : void 0, qd = fa ? fa.isBuffer : void 0, Tr = qd || Kd, Yd = "[object Arguments]", Zd = "[object Array]", Xd = "[object Boolean]", Jd = "[object Date]", Qd = "[object Error]", ef = "[object Function]", tf = "[object Map]", nf = "[object Number]", of = "[object Object]", rf = "[object RegExp]", sf = "[object Set]", af = "[object String]", lf = "[object WeakMap]", uf = "[object ArrayBuffer]", cf = "[object DataView]", df = "[object Float32Array]", ff = "[object Float64Array]", pf = "[object Int8Array]", vf = "[object Int16Array]", gf = "[object Int32Array]", hf = "[object Uint8Array]", mf = "[object Uint8ClampedArray]", bf = "[object Uint16Array]", yf = "[object Uint32Array]", le = {};
le[df] = le[ff] = le[pf] = le[vf] = le[gf] = le[hf] = le[mf] = le[bf] = le[yf] = !0;
le[Yd] = le[Zd] = le[uf] = le[Xd] = le[cf] = le[Jd] = le[Qd] = le[ef] = le[tf] = le[nf] = le[of] = le[rf] = le[sf] = le[af] = le[lf] = !1;
function wf(e) {
  return On(e) && Jr(e.length) && !!le[xn(e)];
}
function _f(e) {
  return function(t) {
    return e(t);
  };
}
var Wi = typeof exports == "object" && exports && !exports.nodeType && exports, Gn = Wi && typeof module == "object" && module && !module.nodeType && module, Sf = Gn && Gn.exports === Wi, fr = Sf && ki.process, pa = function() {
  try {
    var e = Gn && Gn.require && Gn.require("util").types;
    return e || fr && fr.binding && fr.binding("util");
  } catch {
  }
}(), va = pa && pa.isTypedArray, ji = va ? _f(va) : wf, Cf = Object.prototype, Ef = Cf.hasOwnProperty;
function Tf(e, t) {
  var n = at(e), o = !n && Qr(e), r = !n && !o && Tr(e), a = !n && !o && !r && ji(e), s = n || o || r || a, i = s ? Hd(e.length, String) : [], l = i.length;
  for (var u in e)
    Ef.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Zr(u, l))) && i.push(u);
  return i;
}
function Of(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var If = Of(Object.keys, Object), Af = Object.prototype, $f = Af.hasOwnProperty;
function Pf(e) {
  if (!Vd(e))
    return If(e);
  var t = [];
  for (var n in Object(e))
    $f.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ui(e) {
  return Fd(e) ? Tf(e) : Pf(e);
}
var Rf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mf = /^\w*$/;
function es(e, t) {
  if (at(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Uo(e) ? !0 : Mf.test(e) || !Rf.test(e) || t != null && e in Object(t);
}
var Qn = fn(Object, "create");
function Lf() {
  this.__data__ = Qn ? Qn(null) : {}, this.size = 0;
}
function Nf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var xf = "__lodash_hash_undefined__", kf = Object.prototype, Df = kf.hasOwnProperty;
function Bf(e) {
  var t = this.__data__;
  if (Qn) {
    var n = t[e];
    return n === xf ? void 0 : n;
  }
  return Df.call(t, e) ? t[e] : void 0;
}
var Ff = Object.prototype, zf = Ff.hasOwnProperty;
function Vf(e) {
  var t = this.__data__;
  return Qn ? t[e] !== void 0 : zf.call(t, e);
}
var Hf = "__lodash_hash_undefined__";
function Wf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Qn && t === void 0 ? Hf : t, this;
}
function sn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
sn.prototype.clear = Lf;
sn.prototype.delete = Nf;
sn.prototype.get = Bf;
sn.prototype.has = Vf;
sn.prototype.set = Wf;
function jf() {
  this.__data__ = [], this.size = 0;
}
function Ko(e, t) {
  for (var n = e.length; n--; )
    if (Xr(e[n][0], t))
      return n;
  return -1;
}
var Uf = Array.prototype, Kf = Uf.splice;
function Gf(e) {
  var t = this.__data__, n = Ko(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Kf.call(t, n, 1), --this.size, !0;
}
function qf(e) {
  var t = this.__data__, n = Ko(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Yf(e) {
  return Ko(this.__data__, e) > -1;
}
function Zf(e, t) {
  var n = this.__data__, o = Ko(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function $t(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
$t.prototype.clear = jf;
$t.prototype.delete = Gf;
$t.prototype.get = qf;
$t.prototype.has = Yf;
$t.prototype.set = Zf;
var eo = fn(ht, "Map");
function Xf() {
  this.size = 0, this.__data__ = {
    hash: new sn(),
    map: new (eo || $t)(),
    string: new sn()
  };
}
function Jf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Go(e, t) {
  var n = e.__data__;
  return Jf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Qf(e) {
  var t = Go(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ep(e) {
  return Go(this, e).get(e);
}
function tp(e) {
  return Go(this, e).has(e);
}
function np(e, t) {
  var n = Go(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Pt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Pt.prototype.clear = Xf;
Pt.prototype.delete = Qf;
Pt.prototype.get = ep;
Pt.prototype.has = tp;
Pt.prototype.set = np;
var op = "Expected a function";
function ts(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(op);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, o);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (ts.Cache || Pt)(), n;
}
ts.Cache = Pt;
var rp = 500;
function sp(e) {
  var t = ts(e, function(o) {
    return n.size === rp && n.clear(), o;
  }), n = t.cache;
  return t;
}
var ap = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ip = /\\(\\)?/g, lp = sp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ap, function(n, o, r, a) {
    t.push(r ? a.replace(ip, "$1") : o || n);
  }), t;
});
function up(e) {
  return e == null ? "" : Bi(e);
}
function qo(e, t) {
  return at(e) ? e : es(e, t) ? [e] : lp(up(e));
}
function oo(e) {
  if (typeof e == "string" || Uo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ns(e, t) {
  t = qo(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[oo(t[n++])];
  return n && n == o ? e : void 0;
}
function Vt(e, t, n) {
  var o = e == null ? void 0 : ns(e, t);
  return o === void 0 ? n : o;
}
function Ki(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var ga = vt ? vt.isConcatSpreadable : void 0;
function cp(e) {
  return at(e) || Qr(e) || !!(ga && e && e[ga]);
}
function dp(e, t, n, o, r) {
  var a = -1, s = e.length;
  for (n || (n = cp), r || (r = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Ki(r, i) : r[r.length] = i;
  }
  return r;
}
function fp(e) {
  var t = e == null ? 0 : e.length;
  return t ? dp(e) : [];
}
function pp(e) {
  return $d(Dd(e, void 0, fp), e + "");
}
function zt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return at(e) ? e : [e];
}
function vp() {
  this.__data__ = new $t(), this.size = 0;
}
function gp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function hp(e) {
  return this.__data__.get(e);
}
function mp(e) {
  return this.__data__.has(e);
}
var bp = 200;
function yp(e, t) {
  var n = this.__data__;
  if (n instanceof $t) {
    var o = n.__data__;
    if (!eo || o.length < bp - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Pt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ot(e) {
  var t = this.__data__ = new $t(e);
  this.size = t.size;
}
Ot.prototype.clear = vp;
Ot.prototype.delete = gp;
Ot.prototype.get = hp;
Ot.prototype.has = mp;
Ot.prototype.set = yp;
function wp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, a = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (a[r++] = s);
  }
  return a;
}
function _p() {
  return [];
}
var Sp = Object.prototype, Cp = Sp.propertyIsEnumerable, ha = Object.getOwnPropertySymbols, Ep = ha ? function(e) {
  return e == null ? [] : (e = Object(e), wp(ha(e), function(t) {
    return Cp.call(e, t);
  }));
} : _p;
function Tp(e, t, n) {
  var o = t(e);
  return at(e) ? o : Ki(o, n(e));
}
function ma(e) {
  return Tp(e, Ui, Ep);
}
var Or = fn(ht, "DataView"), Ir = fn(ht, "Promise"), Ar = fn(ht, "Set"), ba = "[object Map]", Op = "[object Object]", ya = "[object Promise]", wa = "[object Set]", _a = "[object WeakMap]", Sa = "[object DataView]", Ip = dn(Or), Ap = dn(eo), $p = dn(Ir), Pp = dn(Ar), Rp = dn(Er), Ft = xn;
(Or && Ft(new Or(new ArrayBuffer(1))) != Sa || eo && Ft(new eo()) != ba || Ir && Ft(Ir.resolve()) != ya || Ar && Ft(new Ar()) != wa || Er && Ft(new Er()) != _a) && (Ft = function(e) {
  var t = xn(e), n = t == Op ? e.constructor : void 0, o = n ? dn(n) : "";
  if (o)
    switch (o) {
      case Ip:
        return Sa;
      case Ap:
        return ba;
      case $p:
        return ya;
      case Pp:
        return wa;
      case Rp:
        return _a;
    }
  return t;
});
var Ca = ht.Uint8Array, Mp = "__lodash_hash_undefined__";
function Lp(e) {
  return this.__data__.set(e, Mp), this;
}
function Np(e) {
  return this.__data__.has(e);
}
function ko(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Pt(); ++t < n; )
    this.add(e[t]);
}
ko.prototype.add = ko.prototype.push = Lp;
ko.prototype.has = Np;
function xp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function kp(e, t) {
  return e.has(t);
}
var Dp = 1, Bp = 2;
function Gi(e, t, n, o, r, a) {
  var s = n & Dp, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var d = -1, v = !0, h = n & Bp ? new ko() : void 0;
  for (a.set(e, t), a.set(t, e); ++d < i; ) {
    var p = e[d], g = t[d];
    if (o)
      var b = s ? o(g, p, d, t, e, a) : o(p, g, d, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (h) {
      if (!xp(t, function(m, C) {
        if (!kp(h, C) && (p === m || r(p, m, n, o, a)))
          return h.push(C);
      })) {
        v = !1;
        break;
      }
    } else if (!(p === g || r(p, g, n, o, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
function Fp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function zp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Vp = 1, Hp = 2, Wp = "[object Boolean]", jp = "[object Date]", Up = "[object Error]", Kp = "[object Map]", Gp = "[object Number]", qp = "[object RegExp]", Yp = "[object Set]", Zp = "[object String]", Xp = "[object Symbol]", Jp = "[object ArrayBuffer]", Qp = "[object DataView]", Ea = vt ? vt.prototype : void 0, pr = Ea ? Ea.valueOf : void 0;
function ev(e, t, n, o, r, a, s) {
  switch (n) {
    case Qp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Jp:
      return !(e.byteLength != t.byteLength || !a(new Ca(e), new Ca(t)));
    case Wp:
    case jp:
    case Gp:
      return Xr(+e, +t);
    case Up:
      return e.name == t.name && e.message == t.message;
    case qp:
    case Zp:
      return e == t + "";
    case Kp:
      var i = Fp;
    case Yp:
      var l = o & Vp;
      if (i || (i = zp), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= Hp, s.set(e, t);
      var f = Gi(i(e), i(t), o, r, a, s);
      return s.delete(e), f;
    case Xp:
      if (pr)
        return pr.call(e) == pr.call(t);
  }
  return !1;
}
var tv = 1, nv = Object.prototype, ov = nv.hasOwnProperty;
function rv(e, t, n, o, r, a) {
  var s = n & tv, i = ma(e), l = i.length, u = ma(t), f = u.length;
  if (l != f && !s)
    return !1;
  for (var d = l; d--; ) {
    var v = i[d];
    if (!(s ? v in t : ov.call(t, v)))
      return !1;
  }
  var h = a.get(e), p = a.get(t);
  if (h && p)
    return h == t && p == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var b = s; ++d < l; ) {
    v = i[d];
    var m = e[v], C = t[v];
    if (o)
      var O = s ? o(C, m, v, t, e, a) : o(m, C, v, e, t, a);
    if (!(O === void 0 ? m === C || r(m, C, n, o, a) : O)) {
      g = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (g && !b) {
    var I = e.constructor, S = t.constructor;
    I != S && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof S == "function" && S instanceof S) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var sv = 1, Ta = "[object Arguments]", Oa = "[object Array]", ho = "[object Object]", av = Object.prototype, Ia = av.hasOwnProperty;
function iv(e, t, n, o, r, a) {
  var s = at(e), i = at(t), l = s ? Oa : Ft(e), u = i ? Oa : Ft(t);
  l = l == Ta ? ho : l, u = u == Ta ? ho : u;
  var f = l == ho, d = u == ho, v = l == u;
  if (v && Tr(e)) {
    if (!Tr(t))
      return !1;
    s = !0, f = !1;
  }
  if (v && !f)
    return a || (a = new Ot()), s || ji(e) ? Gi(e, t, n, o, r, a) : ev(e, t, l, n, o, r, a);
  if (!(n & sv)) {
    var h = f && Ia.call(e, "__wrapped__"), p = d && Ia.call(t, "__wrapped__");
    if (h || p) {
      var g = h ? e.value() : e, b = p ? t.value() : t;
      return a || (a = new Ot()), r(g, b, n, o, a);
    }
  }
  return v ? (a || (a = new Ot()), rv(e, t, n, o, r, a)) : !1;
}
function Yo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !On(e) && !On(t) ? e !== e && t !== t : iv(e, t, n, o, Yo, r);
}
var lv = 1, uv = 2;
function cv(e, t, n, o) {
  var r = n.length, a = r;
  if (e == null)
    return !a;
  for (e = Object(e); r--; ) {
    var s = n[r];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++r < a; ) {
    s = n[r];
    var i = s[0], l = e[i], u = s[1];
    if (s[2]) {
      if (l === void 0 && !(i in e))
        return !1;
    } else {
      var f = new Ot(), d;
      if (!(d === void 0 ? Yo(u, l, lv | uv, o, f) : d))
        return !1;
    }
  }
  return !0;
}
function qi(e) {
  return e === e && !Ut(e);
}
function dv(e) {
  for (var t = Ui(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, qi(r)];
  }
  return t;
}
function Yi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function fv(e) {
  var t = dv(e);
  return t.length == 1 && t[0][2] ? Yi(t[0][0], t[0][1]) : function(n) {
    return n === e || cv(n, e, t);
  };
}
function pv(e, t) {
  return e != null && t in Object(e);
}
function vv(e, t, n) {
  t = qo(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var s = oo(t[o]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && Jr(r) && Zr(s, r) && (at(e) || Qr(e)));
}
function Zi(e, t) {
  return e != null && vv(e, t, pv);
}
var gv = 1, hv = 2;
function mv(e, t) {
  return es(e) && qi(t) ? Yi(oo(e), t) : function(n) {
    var o = Vt(n, e);
    return o === void 0 && o === t ? Zi(n, e) : Yo(t, o, gv | hv);
  };
}
function bv(e) {
  return function(t) {
    return t?.[e];
  };
}
function yv(e) {
  return function(t) {
    return ns(t, e);
  };
}
function wv(e) {
  return es(e) ? bv(oo(e)) : yv(e);
}
function _v(e) {
  return typeof e == "function" ? e : e == null ? Fi : typeof e == "object" ? at(e) ? mv(e[0], e[1]) : fv(e) : wv(e);
}
var vr = function() {
  return ht.Date.now();
}, Sv = "Expected a function", Cv = Math.max, Ev = Math.min;
function Tv(e, t, n) {
  var o, r, a, s, i, l, u = 0, f = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Sv);
  t = ia(t) || 0, Ut(n) && (f = !!n.leading, d = "maxWait" in n, a = d ? Cv(ia(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v);
  function h(A) {
    var E = o, F = r;
    return o = r = void 0, u = A, s = e.apply(F, E), s;
  }
  function p(A) {
    return u = A, i = setTimeout(m, t), f ? h(A) : s;
  }
  function g(A) {
    var E = A - l, F = A - u, T = t - E;
    return d ? Ev(T, a - F) : T;
  }
  function b(A) {
    var E = A - l, F = A - u;
    return l === void 0 || E >= t || E < 0 || d && F >= a;
  }
  function m() {
    var A = vr();
    if (b(A))
      return C(A);
    i = setTimeout(m, g(A));
  }
  function C(A) {
    return i = void 0, v && o ? h(A) : (o = r = void 0, s);
  }
  function O() {
    i !== void 0 && clearTimeout(i), u = 0, o = l = r = i = void 0;
  }
  function I() {
    return i === void 0 ? s : C(vr());
  }
  function S() {
    var A = vr(), E = b(A);
    if (o = arguments, r = this, l = A, E) {
      if (i === void 0)
        return p(l);
      if (d)
        return clearTimeout(i), i = setTimeout(m, t), h(l);
    }
    return i === void 0 && (i = setTimeout(m, t)), s;
  }
  return S.cancel = O, S.flush = I, S;
}
function Ov(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Pd(e, _v(t), r);
}
function Do(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function qn(e, t) {
  return Yo(e, t);
}
function Zo(e) {
  return e == null;
}
function Xi(e) {
  return e === void 0;
}
function Iv(e, t, n, o) {
  if (!Ut(e))
    return e;
  t = qo(t, e);
  for (var r = -1, a = t.length, s = a - 1, i = e; i != null && ++r < a; ) {
    var l = oo(t[r]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != s) {
      var f = i[l];
      u = void 0, u === void 0 && (u = Ut(f) ? f : Zr(t[r + 1]) ? [] : {});
    }
    kd(i, l, u), i = i[l];
  }
  return e;
}
function Av(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var s = t[o], i = ns(e, s);
    n(i, s) && Iv(a, qo(s, e), i);
  }
  return a;
}
function $v(e, t) {
  return Av(e, t, function(n, o) {
    return Zi(e, o);
  });
}
var Pv = pp(function(e, t) {
  return e == null ? {} : $v(e, t);
});
const En = (e) => e === void 0, an = (e) => typeof e == "boolean", ve = (e) => typeof e == "number", Ke = (e) => typeof Element > "u" ? !1 : e instanceof Element, Rv = (e) => be(e) ? !Number.isNaN(Number(e)) : !1;
var Mv = Object.defineProperty, Lv = Object.defineProperties, Nv = Object.getOwnPropertyDescriptors, Aa = Object.getOwnPropertySymbols, xv = Object.prototype.hasOwnProperty, kv = Object.prototype.propertyIsEnumerable, $a = (e, t, n) => t in e ? Mv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Dv = (e, t) => {
  for (var n in t || (t = {}))
    xv.call(t, n) && $a(e, n, t[n]);
  if (Aa)
    for (var n of Aa(t))
      kv.call(t, n) && $a(e, n, t[n]);
  return e;
}, Bv = (e, t) => Lv(e, Nv(t));
function Fv(e, t) {
  var n;
  const o = on();
  return Wr(() => {
    o.value = e();
  }, Bv(Dv({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Hr(o);
}
var Pa;
const ue = typeof window < "u", Ra = (e) => typeof e == "function", zv = (e) => typeof e == "string", Ji = () => {
}, $r = ue && ((Pa = window?.navigator) == null ? void 0 : Pa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function os(e) {
  return typeof e == "function" ? e() : c(e);
}
function Vv(e) {
  return e;
}
function Hv(e, t) {
  let n, o, r;
  const a = P(!0), s = () => {
    a.value = !0, r();
  };
  Z(e, s, { flush: "sync" });
  const i = Ra(t) ? t : t.get, l = Ra(t) ? void 0 : t.set, u = zu((f, d) => (o = f, r = d, {
    get() {
      return a.value && (n = i(), a.value = !1), o(), n;
    },
    set(v) {
      l?.(v);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = s), u;
}
function ro(e) {
  return Fu() ? (Ti(e), !0) : !1;
}
function Wv(e, t = !0) {
  Te() ? ge(e) : t ? e() : fe(e);
}
function Bo(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = P(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    r.value = !1, s();
  }
  function l(...u) {
    s(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...u);
    }, os(t));
  }
  return o && (r.value = !0, ue && l()), ro(i), {
    isPending: Hr(r),
    start: l,
    stop: i
  };
}
function Et(e) {
  var t;
  const n = os(e);
  return (t = n?.$el) != null ? t : n;
}
const so = ue ? window : void 0;
function $e(...e) {
  let t, n, o, r;
  if (zv(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = so) : [t, n, o, r] = e, !t)
    return Ji;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, d, v, h) => (f.addEventListener(d, v, h), () => f.removeEventListener(d, v, h)), l = Z(() => [Et(t), os(r)], ([f, d]) => {
    s(), f && a.push(...n.flatMap((v) => o.map((h) => i(f, v, h, d))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return ro(u), u;
}
let Ma = !1;
function jv(e, t, n = {}) {
  const { window: o = so, ignore: r = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  $r && !Ma && (Ma = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Ji)));
  let i = !0;
  const l = (v) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(o.document.querySelectorAll(h)).some((p) => p === v.target || v.composedPath().includes(p));
    {
      const p = Et(h);
      return p && (v.target === p || v.composedPath().includes(p));
    }
  }), f = [
    $e(o, "click", (v) => {
      const h = Et(e);
      if (!(!h || h === v.target || v.composedPath().includes(h))) {
        if (v.detail === 0 && (i = !l(v)), !i) {
          i = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: a }),
    $e(o, "pointerdown", (v) => {
      const h = Et(e);
      h && (i = !v.composedPath().includes(h) && !l(v));
    }, { passive: !0 }),
    s && $e(o, "blur", (v) => {
      var h;
      const p = Et(e);
      ((h = o.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !p?.contains(o.document.activeElement) && t(v);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
function Uv(e = {}) {
  var t;
  const { window: n = so } = e, o = (t = e.document) != null ? t : n?.document, r = Hv(() => null, () => o?.activeElement);
  return n && ($e(n, "blur", (a) => {
    a.relatedTarget === null && r.trigger();
  }, !0), $e(n, "focus", r.trigger, !0)), r;
}
function Qi(e, t = !1) {
  const n = P(), o = () => n.value = !!e();
  return o(), Wv(o, t), n;
}
const La = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Na = "__vueuse_ssr_handlers__";
La[Na] = La[Na] || {};
var xa = Object.getOwnPropertySymbols, Kv = Object.prototype.hasOwnProperty, Gv = Object.prototype.propertyIsEnumerable, qv = (e, t) => {
  var n = {};
  for (var o in e)
    Kv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && xa)
    for (var o of xa(e))
      t.indexOf(o) < 0 && Gv.call(e, o) && (n[o] = e[o]);
  return n;
};
function nt(e, t, n = {}) {
  const o = n, { window: r = so } = o, a = qv(o, ["window"]);
  let s;
  const i = Qi(() => r && "ResizeObserver" in r), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Z(() => Et(e), (d) => {
    l(), i.value && r && d && (s = new ResizeObserver(t), s.observe(d, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return ro(f), {
    isSupported: i,
    stop: f
  };
}
var ka = Object.getOwnPropertySymbols, Yv = Object.prototype.hasOwnProperty, Zv = Object.prototype.propertyIsEnumerable, Xv = (e, t) => {
  var n = {};
  for (var o in e)
    Yv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ka)
    for (var o of ka(e))
      t.indexOf(o) < 0 && Zv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Jv(e, t, n = {}) {
  const o = n, { window: r = so } = o, a = Xv(o, ["window"]);
  let s;
  const i = Qi(() => r && "MutationObserver" in r), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = Z(() => Et(e), (d) => {
    l(), i.value && r && d && (s = new MutationObserver(t), s.observe(d, a));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return ro(f), {
    isSupported: i,
    stop: f
  };
}
var Da;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Da || (Da = {}));
var Qv = Object.defineProperty, Ba = Object.getOwnPropertySymbols, eg = Object.prototype.hasOwnProperty, tg = Object.prototype.propertyIsEnumerable, Fa = (e, t, n) => t in e ? Qv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ng = (e, t) => {
  for (var n in t || (t = {}))
    eg.call(t, n) && Fa(e, n, t[n]);
  if (Ba)
    for (var n of Ba(t))
      tg.call(t, n) && Fa(e, n, t[n]);
  return e;
};
const og = {
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
ng({
  linear: Vv
}, og);
class el extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function tl(e, t) {
  throw new el(`[${e}] ${t}`);
}
function we(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = be(e) ? new el(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const za = {
  current: 0
}, Va = P(0), nl = 2e3, Ha = Symbol("elZIndexContextKey"), ol = Symbol("zIndexContextKey"), rs = (e) => {
  const t = Te() ? oe(Ha, za) : za, n = e || (Te() ? oe(ol, void 0) : void 0), o = y(() => {
    const s = c(n);
    return ve(s) ? s : nl;
  }), r = y(() => o.value + Va.value), a = () => (t.current++, Va.value = t.current, r.value);
  return !ue && !oe(Ha) && we("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: a
  };
};
var rg = {
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
const sg = (e) => (t, n) => ag(t, n, c(e)), ag = (e, t, n) => Vt(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t?.[r]) != null ? a : `{${r}}`}`;
}), ig = (e) => {
  const t = y(() => c(e).name), n = jr(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: sg(e)
  };
}, rl = Symbol("localeContextKey"), ss = (e) => {
  const t = e || oe(rl, P());
  return ig(y(() => t.value || rg));
}, sl = "__epPropKey", q = (e) => e, lg = (e) => Ee(e) && !!e[sl], Xo = (e, t) => {
  if (!Ee(e) || lg(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: s } = e, l = {
    type: a,
    required: !!o,
    validator: n || s ? (u) => {
      let f = !1, d = [];
      if (n && (d = Array.from(n), Rs(e, "default") && d.push(r), f || (f = d.includes(u))), s && (f || (f = s(u))), !f && d.length > 0) {
        const v = [...new Set(d)].map((h) => JSON.stringify(h)).join(", ");
        Nn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [sl]: !0
  };
  return Rs(e, "default") && (l.default = r), l;
}, se = (e) => Do(Object.entries(e).map(([t, n]) => [
  t,
  Xo(n, t)
])), al = ["", "default", "small", "large"], Jo = Xo({
  type: String,
  values: al,
  required: !1
}), il = Symbol("size"), ug = () => {
  const e = oe(il, {});
  return y(() => c(e.size) || "");
}, ll = Symbol("emptyValuesContextKey"), cg = "use-empty-values", dg = ["", void 0, null], fg = void 0, pg = se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => pe(e) ? !e() : !e
  }
}), vg = (e, t) => {
  const n = Te() ? oe(ll, P({})) : P({}), o = y(() => e.emptyValues || n.value.emptyValues || dg), r = y(() => pe(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : pe(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : fg), a = (s) => o.value.includes(s);
  return o.value.includes(r.value) || we(cg, "value-on-clear should be a value of empty-values"), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: a
  };
}, Wa = (e) => Object.keys(e), Fo = P();
function Qo(e, t = void 0) {
  const n = Te() ? oe(Ni, Fo) : Fo;
  return e ? y(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function ul(e, t) {
  const n = Qo(), o = ce(e, y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Kn;
  })), r = ss(y(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = rs(y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || nl;
  })), s = y(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return gg(y(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: a,
    size: s
  };
}
const gg = (e, t, n = !1) => {
  var o;
  const r = !!Te(), a = r ? Qo() : void 0, s = (o = void 0) != null ? o : r ? qe : void 0;
  if (!s) {
    we("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = y(() => {
    const l = c(e);
    return a?.value ? hg(a.value, l) : l;
  });
  return s(Ni, i), s(rl, y(() => i.value.locale)), s(xi, y(() => i.value.namespace)), s(ol, y(() => i.value.zIndex)), s(il, {
    size: y(() => i.value.size || "")
  }), s(ll, y(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Fo.value) && (Fo.value = i.value), i;
}, hg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Wa(e), ...Wa(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, We = "update:modelValue", In = "change", ja = "input";
var ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const mg = "utils/dom/style", cl = (e = "") => e.split(" ").filter((t) => !!t.trim()), Ua = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, bg = (e, t) => {
  !e || !t.trim() || e.classList.add(...cl(t));
}, yg = (e, t) => {
  !e || !t.trim() || e.classList.remove(...cl(t));
}, wg = (e, t) => {
  var n;
  if (!ue || !e)
    return "";
  let o = Vr(t);
  o === "float" && (o = "cssFloat");
  try {
    const r = e.style[o];
    if (r)
      return r;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[o] : "";
  } catch {
    return e.style[o];
  }
};
function Kt(e, t = "px") {
  if (!e)
    return "";
  if (ve(e) || Rv(e))
    return `${e}${t}`;
  if (be(e))
    return e;
  we(mg, "binding value must be a string or number");
}
let mo;
const _g = (e) => {
  var t;
  if (!ue)
    return 0;
  if (mo !== void 0)
    return mo;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const a = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), mo = o - a, mo;
};
function Sg(e, t) {
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
  const r = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), a = r + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  r < s ? e.scrollTop = r : a > i && (e.scrollTop = a - e.clientHeight);
}
const Je = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, dl = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), as = (e) => (e.install = Tt, e), Cg = se({
  size: {
    type: q([Number, String])
  },
  color: {
    type: String
  }
}), Eg = V({
  name: "ElIcon",
  inheritAttrs: !1
}), Tg = /* @__PURE__ */ V({
  ...Eg,
  props: Cg,
  setup(e) {
    const t = e, n = ce("icon"), o = y(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: En(r) ? void 0 : Kt(r),
        "--color": a
      };
    });
    return (r, a) => (_(), B("i", Wt({
      class: c(n).b(),
      style: c(o)
    }, r.$attrs), [
      U(r.$slots, "default")
    ], 16));
  }
});
var Og = /* @__PURE__ */ ae(Tg, [["__file", "icon.vue"]]);
const Pe = Je(Og);
/*! Element Plus Icons Vue v2.3.1 */
var Ig = /* @__PURE__ */ V({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ag = Ig, $g = /* @__PURE__ */ V({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      $("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Pg = $g, Rg = /* @__PURE__ */ V({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Mg = Rg, Lg = /* @__PURE__ */ V({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      $("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), is = Lg, Ng = /* @__PURE__ */ V({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), zo = Ng, xg = /* @__PURE__ */ V({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      $("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), kg = xg, Dg = /* @__PURE__ */ V({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Bg = Dg, Fg = /* @__PURE__ */ V({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), fl = Fg, zg = /* @__PURE__ */ V({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Vg = zg, Hg = /* @__PURE__ */ V({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Wg = Hg, jg = /* @__PURE__ */ V({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (_(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ug = jg;
const It = q([
  String,
  Object,
  Function
]), pl = {
  Close: zo
}, Kg = {
  Close: zo
}, Vo = {
  success: Vg,
  warning: Ug,
  error: Mg,
  info: Bg
}, vl = {
  validating: fl,
  success: Pg,
  error: is
}, Gg = () => ue && /firefox/i.test(window.navigator.userAgent);
let Ne;
const qg = {
  height: "0",
  visibility: "hidden",
  overflow: Gg() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Yg = [
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
function Zg(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Yg.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Ka(e, t = 1, n) {
  var o;
  Ne || (Ne = document.createElement("textarea"), document.body.appendChild(Ne));
  const { paddingSize: r, borderSize: a, boxSizing: s, contextStyle: i } = Zg(e);
  i.forEach(([d, v]) => Ne?.style.setProperty(d, v)), Object.entries(qg).forEach(([d, v]) => Ne?.style.setProperty(d, v, "important")), Ne.value = e.value || e.placeholder || "";
  let l = Ne.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - r), Ne.value = "";
  const f = Ne.scrollHeight - r;
  if (ve(t)) {
    let d = f * t;
    s === "border-box" && (d = d + r + a), l = Math.max(d, l), u.minHeight = `${d}px`;
  }
  if (ve(n)) {
    let d = f * n;
    s === "border-box" && (d = d + r + a), l = Math.min(d, l);
  }
  return u.height = `${l}px`, (o = Ne.parentNode) == null || o.removeChild(Ne), Ne = void 0, u;
}
const gl = (e) => e, Xg = se({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), kn = (e) => Pv(Xg, e), Jg = se({
  id: {
    type: String,
    default: void 0
  },
  size: Jo,
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
    type: It
  },
  prefixIcon: {
    type: It
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
    default: () => gl({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...kn(["ariaLabel"])
}), Qg = {
  [We]: (e) => be(e),
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
}, eh = ["class", "style"], th = /^on[A-Z]/, nh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = y(() => (n?.value || []).concat(eh)), r = Te();
  return r ? y(() => {
    var a;
    return Do(Object.entries((a = r.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !o.value.includes(s) && !(t && th.test(s))));
  }) : (we("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), y(() => ({})));
}, ls = Symbol("formContextKey"), Ho = Symbol("formItemContextKey"), Pr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, oh = Symbol("elIdInjection"), hl = () => Te() ? oe(oh, Pr) : Pr, ln = (e) => {
  const t = hl();
  !ue && t === Pr && we("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Yr();
  return Fv(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, er = () => {
  const e = oe(ls, void 0), t = oe(Ho, void 0);
  return {
    form: e,
    formItem: t
  };
}, us = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = P(!1)), o || (o = P(!1));
  const r = P();
  let a;
  const s = y(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return ge(() => {
    a = Z([ot(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : ln().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !l && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Ur(() => {
    a && a(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
}, ml = (e) => {
  const t = Te();
  return y(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, ao = (e, t = {}) => {
  const n = P(void 0), o = t.prop ? n : ml("size"), r = t.global ? n : ug(), a = t.form ? { size: void 0 } : oe(ls, void 0), s = t.formItem ? { size: void 0 } : oe(Ho, void 0);
  return y(() => o.value || c(e) || s?.size || a?.size || r.value || "");
}, tr = (e) => {
  const t = ml("disabled"), n = oe(ls, void 0);
  return y(() => t.value || c(e) || n?.disabled || !1);
};
function bl(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const a = Te(), { emit: s } = a, i = on(), l = P(!1), u = (v) => {
    pe(t) && t(v) || l.value || (l.value = !0, s("focus", v), n?.());
  }, f = (v) => {
    var h;
    pe(o) && o(v) || v.relatedTarget && ((h = i.value) != null && h.contains(v.relatedTarget)) || (l.value = !1, s("blur", v), r?.());
  }, d = () => {
    var v, h;
    (v = i.value) != null && v.contains(document.activeElement) && i.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return Z(i, (v) => {
    v && v.setAttribute("tabindex", "-1");
  }), $e(i, "focus", u, !0), $e(i, "blur", f, !0), $e(i, "click", d, !0), process.env.NODE_ENV === "test" && ge(() => {
    const v = Ke(e.value) ? e.value : document.querySelector("input,textarea");
    v && ($e(v, "focus", u, !0), $e(v, "blur", f, !0));
  }), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: f
  };
}
const rh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function yl({
  afterComposition: e,
  emit: t
}) {
  const n = P(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, f = u[u.length - 1] || "";
    n.value = !rh(f);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, fe(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? a(i) : r(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: r,
    handleCompositionEnd: a
  };
}
function sh(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: a, value: s } = e.value;
    if (r == null || a == null)
      return;
    const i = s.slice(0, Math.max(0, r)), l = s.slice(Math.max(0, a));
    t = {
      selectionStart: r,
      selectionEnd: a,
      value: s,
      beforeTxt: i,
      afterTxt: l
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: r } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: i } = t;
    if (a == null || s == null || i == null)
      return;
    let l = r.length;
    if (r.endsWith(s))
      l = r.length - s.length;
    else if (r.startsWith(a))
      l = a.length;
    else {
      const u = a[i - 1], f = r.indexOf(u, i - 1);
      f !== -1 && (l = f + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, o];
}
const wl = "ElInput", ah = V({
  name: wl,
  inheritAttrs: !1
}), ih = /* @__PURE__ */ V({
  ...ah,
  props: Jg,
  emits: Qg,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Vu(), a = nh(), s = Kr(), i = y(() => [
      o.type === "textarea" ? g.b() : p.b(),
      p.m(v.value),
      p.is("disabled", h.value),
      p.is("exceed", Fe.value),
      {
        [p.b("group")]: s.prepend || s.append,
        [p.m("prefix")]: s.prefix || o.prefixIcon,
        [p.m("suffix")]: s.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [p.bm("suffix", "password-clear")]: Y.value && ne.value,
        [p.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), l = y(() => [
      p.e("wrapper"),
      p.is("focus", F.value)
    ]), { form: u, formItem: f } = er(), { inputId: d } = us(o, {
      formItemContext: f
    }), v = ao(), h = tr(), p = ce("input"), g = ce("textarea"), b = on(), m = on(), C = P(!1), O = P(!1), I = P(), S = on(o.inputStyle), A = y(() => b.value || m.value), { wrapperRef: E, isFocused: F, handleFocus: T, handleBlur: z } = bl(A, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var x;
        o.validateEvent && ((x = f?.validate) == null || x.call(f, "blur").catch((te) => we(te)));
      }
    }), k = y(() => {
      var x;
      return (x = u?.statusIcon) != null ? x : !1;
    }), R = y(() => f?.validateState || ""), j = y(() => R.value && vl[R.value]), re = y(() => O.value ? Wg : kg), J = y(() => [
      r.style
    ]), X = y(() => [
      o.inputStyle,
      S.value,
      { resize: o.resize }
    ]), M = y(() => Zo(o.modelValue) ? "" : String(o.modelValue)), Y = y(() => o.clearable && !h.value && !o.readonly && !!M.value && (F.value || C.value)), ne = y(() => o.showPassword && !h.value && !!M.value && (!!M.value || F.value)), he = y(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !h.value && !o.readonly && !o.showPassword), Qe = y(() => M.value.length), Fe = y(() => !!he.value && Qe.value > Number(o.maxlength)), lt = y(() => !!s.suffix || !!o.suffixIcon || Y.value || o.showPassword || he.value || !!R.value && k.value), [Oe, de] = sh(b);
    nt(m, (x) => {
      if (ie(), !he.value || o.resize !== "both")
        return;
      const te = x[0], { width: Ue } = te.contentRect;
      I.value = {
        right: `calc(100% - ${Ue + 15 + 6}px)`
      };
    });
    const Me = () => {
      const { type: x, autosize: te } = o;
      if (!(!ue || x !== "textarea" || !m.value))
        if (te) {
          const Ue = Ee(te) ? te.minRows : void 0, Mt = Ee(te) ? te.maxRows : void 0, Lt = Ka(m.value, Ue, Mt);
          S.value = {
            overflowY: "hidden",
            ...Lt
          }, fe(() => {
            m.value.offsetHeight, S.value = Lt;
          });
        } else
          S.value = {
            minHeight: Ka(m.value).minHeight
          };
    }, ie = ((x) => {
      let te = !1;
      return () => {
        var Ue;
        if (te || !o.autosize)
          return;
        ((Ue = m.value) == null ? void 0 : Ue.offsetParent) === null || (x(), te = !0);
      };
    })(Me), et = () => {
      const x = A.value, te = o.formatter ? o.formatter(M.value) : M.value;
      !x || x.value === te || (x.value = te);
    }, mt = async (x) => {
      Oe();
      let { value: te } = x.target;
      if (o.formatter && o.parser && (te = o.parser(te)), !qt.value) {
        if (te === M.value) {
          et();
          return;
        }
        n(We, te), n(ja, te), await fe(), et(), de();
      }
    }, bt = (x) => {
      let { value: te } = x.target;
      o.formatter && o.parser && (te = o.parser(te)), n(In, te);
    }, {
      isComposing: qt,
      handleCompositionStart: Yt,
      handleCompositionUpdate: pn,
      handleCompositionEnd: vn
    } = yl({ emit: n, afterComposition: mt }), gn = () => {
      Oe(), O.value = !O.value, setTimeout(de);
    }, hn = () => {
      var x;
      return (x = A.value) == null ? void 0 : x.focus();
    }, Rt = () => {
      var x;
      return (x = A.value) == null ? void 0 : x.blur();
    }, mn = (x) => {
      C.value = !1, n("mouseleave", x);
    }, Le = (x) => {
      C.value = !0, n("mouseenter", x);
    }, ut = (x) => {
      n("keydown", x);
    }, bn = () => {
      var x;
      (x = A.value) == null || x.select();
    }, Zt = () => {
      n(We, ""), n(In, ""), n("clear"), n(ja, "");
    };
    return Z(() => o.modelValue, () => {
      var x;
      fe(() => Me()), o.validateEvent && ((x = f?.validate) == null || x.call(f, "change").catch((te) => we(te)));
    }), Z(M, () => et()), Z(() => o.type, async () => {
      await fe(), et(), Me();
    }), ge(() => {
      !o.formatter && o.parser && we(wl, "If you set the parser, you also need to set the formatter."), et(), fe(Me);
    }), t({
      input: b,
      textarea: m,
      ref: A,
      textareaStyle: X,
      autosize: ot(o, "autosize"),
      isComposing: qt,
      focus: hn,
      blur: Rt,
      select: bn,
      clear: Zt,
      resizeTextarea: Me
    }), (x, te) => (_(), B("div", {
      class: L([
        c(i),
        {
          [c(p).bm("group", "append")]: x.$slots.append,
          [c(p).bm("group", "prepend")]: x.$slots.prepend
        }
      ]),
      style: ye(c(J)),
      onMouseenter: Le,
      onMouseleave: mn
    }, [
      W(" input "),
      x.type !== "textarea" ? (_(), B(ke, { key: 0 }, [
        W(" prepend slot "),
        x.$slots.prepend ? (_(), B("div", {
          key: 0,
          class: L(c(p).be("group", "prepend"))
        }, [
          U(x.$slots, "prepend")
        ], 2)) : W("v-if", !0),
        $("div", {
          ref_key: "wrapperRef",
          ref: E,
          class: L(c(l))
        }, [
          W(" prefix slot "),
          x.$slots.prefix || x.prefixIcon ? (_(), B("span", {
            key: 0,
            class: L(c(p).e("prefix"))
          }, [
            $("span", {
              class: L(c(p).e("prefix-inner"))
            }, [
              U(x.$slots, "prefix"),
              x.prefixIcon ? (_(), K(c(Pe), {
                key: 0,
                class: L(c(p).e("icon"))
              }, {
                default: H(() => [
                  (_(), K(xe(x.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0),
          $("input", Wt({
            id: c(d),
            ref_key: "input",
            ref: b,
            class: c(p).e("inner")
          }, c(a), {
            minlength: x.minlength,
            maxlength: x.maxlength,
            type: x.showPassword ? O.value ? "text" : "password" : x.type,
            disabled: c(h),
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
            onCompositionupdate: c(pn),
            onCompositionend: c(vn),
            onInput: mt,
            onChange: bt,
            onKeydown: ut
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          W(" suffix slot "),
          c(lt) ? (_(), B("span", {
            key: 1,
            class: L(c(p).e("suffix"))
          }, [
            $("span", {
              class: L(c(p).e("suffix-inner"))
            }, [
              !c(Y) || !c(ne) || !c(he) ? (_(), B(ke, { key: 0 }, [
                U(x.$slots, "suffix"),
                x.suffixIcon ? (_(), K(c(Pe), {
                  key: 0,
                  class: L(c(p).e("icon"))
                }, {
                  default: H(() => [
                    (_(), K(xe(x.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : W("v-if", !0)
              ], 64)) : W("v-if", !0),
              c(Y) ? (_(), K(c(Pe), {
                key: 1,
                class: L([c(p).e("icon"), c(p).e("clear")]),
                onMousedown: Ae(c(Tt), ["prevent"]),
                onClick: Zt
              }, {
                default: H(() => [
                  Q(c(is))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : W("v-if", !0),
              c(ne) ? (_(), K(c(Pe), {
                key: 2,
                class: L([c(p).e("icon"), c(p).e("password")]),
                onClick: gn
              }, {
                default: H(() => [
                  (_(), K(xe(c(re))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0),
              c(he) ? (_(), B("span", {
                key: 3,
                class: L(c(p).e("count"))
              }, [
                $("span", {
                  class: L(c(p).e("count-inner"))
                }, G(c(Qe)) + " / " + G(x.maxlength), 3)
              ], 2)) : W("v-if", !0),
              c(R) && c(j) && c(k) ? (_(), K(c(Pe), {
                key: 4,
                class: L([
                  c(p).e("icon"),
                  c(p).e("validateIcon"),
                  c(p).is("loading", c(R) === "validating")
                ])
              }, {
                default: H(() => [
                  (_(), K(xe(c(j))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0)
        ], 2),
        W(" append slot "),
        x.$slots.append ? (_(), B("div", {
          key: 1,
          class: L(c(p).be("group", "append"))
        }, [
          U(x.$slots, "append")
        ], 2)) : W("v-if", !0)
      ], 64)) : (_(), B(ke, { key: 1 }, [
        W(" textarea "),
        $("textarea", Wt({
          id: c(d),
          ref_key: "textarea",
          ref: m,
          class: [c(g).e("inner"), c(p).is("focus", c(F))]
        }, c(a), {
          minlength: x.minlength,
          maxlength: x.maxlength,
          tabindex: x.tabindex,
          disabled: c(h),
          readonly: x.readonly,
          autocomplete: x.autocomplete,
          style: c(X),
          "aria-label": x.ariaLabel,
          placeholder: x.placeholder,
          form: x.form,
          autofocus: x.autofocus,
          rows: x.rows,
          role: x.containerRole,
          onCompositionstart: c(Yt),
          onCompositionupdate: c(pn),
          onCompositionend: c(vn),
          onInput: mt,
          onFocus: c(T),
          onBlur: c(z),
          onChange: bt,
          onKeydown: ut
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(he) ? (_(), B("span", {
          key: 0,
          style: ye(I.value),
          class: L(c(p).e("count"))
        }, G(c(Qe)) + " / " + G(x.maxlength), 7)) : W("v-if", !0)
      ], 64))
    ], 38));
  }
});
var lh = /* @__PURE__ */ ae(ih, [["__file", "input.vue"]]);
const uh = Je(lh), _n = 4, ch = {
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
}, dh = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), cs = Symbol("scrollbarContextKey"), fh = se({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), ph = "Thumb", vh = /* @__PURE__ */ V({
  __name: "thumb",
  props: fh,
  setup(e) {
    const t = e, n = oe(cs), o = ce("scrollbar");
    n || tl(ph, "can not inject scrollbar context");
    const r = P(), a = P(), s = P({}), i = P(!1);
    let l = !1, u = !1, f = ue ? document.onselectstart : null;
    const d = y(() => ch[t.vertical ? "vertical" : "horizontal"]), v = y(() => dh({
      size: t.size,
      move: t.move,
      bar: d.value
    })), h = y(() => r.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / a.value[d.value.offset]), p = (A) => {
      var E;
      if (A.stopPropagation(), A.ctrlKey || [1, 2].includes(A.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), b(A);
      const F = A.currentTarget;
      F && (s.value[d.value.axis] = F[d.value.offset] - (A[d.value.client] - F.getBoundingClientRect()[d.value.direction]));
    }, g = (A) => {
      if (!a.value || !r.value || !n.wrapElement)
        return;
      const E = Math.abs(A.target.getBoundingClientRect()[d.value.direction] - A[d.value.client]), F = a.value[d.value.offset] / 2, T = (E - F) * 100 * h.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = T * n.wrapElement[d.value.scrollSize] / 100;
    }, b = (A) => {
      A.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", C), f = document.onselectstart, document.onselectstart = () => !1;
    }, m = (A) => {
      if (!r.value || !a.value || l === !1)
        return;
      const E = s.value[d.value.axis];
      if (!E)
        return;
      const F = (r.value.getBoundingClientRect()[d.value.direction] - A[d.value.client]) * -1, T = a.value[d.value.offset] - E, z = (F - T) * 100 * h.value / r.value[d.value.offset];
      n.wrapElement[d.value.scroll] = z * n.wrapElement[d.value.scrollSize] / 100;
    }, C = () => {
      l = !1, s.value[d.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", C), S(), u && (i.value = !1);
    }, O = () => {
      u = !1, i.value = !!t.size;
    }, I = () => {
      u = !0, i.value = l;
    };
    it(() => {
      S(), document.removeEventListener("mouseup", C);
    });
    const S = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return $e(ot(n, "scrollbarElement"), "mousemove", O), $e(ot(n, "scrollbarElement"), "mouseleave", I), (A, E) => (_(), K(cn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: H(() => [
        Re($("div", {
          ref_key: "instance",
          ref: r,
          class: L([c(o).e("bar"), c(o).is(c(d).key)]),
          onMousedown: g
        }, [
          $("div", {
            ref_key: "thumb",
            ref: a,
            class: L(c(o).e("thumb")),
            style: ye(c(v)),
            onMousedown: p
          }, null, 38)
        ], 34), [
          [st, A.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ga = /* @__PURE__ */ ae(vh, [["__file", "thumb.vue"]]);
const gh = se({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), hh = /* @__PURE__ */ V({
  __name: "bar",
  props: gh,
  setup(e, { expose: t }) {
    const n = e, o = oe(cs), r = P(0), a = P(0), s = P(""), i = P(""), l = P(1), u = P(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const h = v.offsetHeight - _n, p = v.offsetWidth - _n;
          a.value = v.scrollTop * 100 / h * l.value, r.value = v.scrollLeft * 100 / p * u.value;
        }
      },
      update: () => {
        const v = o?.wrapElement;
        if (!v)
          return;
        const h = v.offsetHeight - _n, p = v.offsetWidth - _n, g = h ** 2 / v.scrollHeight, b = p ** 2 / v.scrollWidth, m = Math.max(g, n.minSize), C = Math.max(b, n.minSize);
        l.value = g / (h - g) / (m / (h - m)), u.value = b / (p - b) / (C / (p - C)), i.value = m + _n < h ? `${m}px` : "", s.value = C + _n < p ? `${C}px` : "";
      }
    }), (v, h) => (_(), B(ke, null, [
      Q(Ga, {
        move: r.value,
        ratio: u.value,
        size: s.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      Q(Ga, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var mh = /* @__PURE__ */ ae(hh, [["__file", "bar.vue"]]);
const bh = se({
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
  ...kn(["ariaLabel", "ariaOrientation"])
}), yh = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ve)
}, Rr = "ElScrollbar", wh = V({
  name: Rr
}), _h = /* @__PURE__ */ V({
  ...wh,
  props: bh,
  emits: yh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ce("scrollbar");
    let a, s, i = 0, l = 0;
    const u = P(), f = P(), d = P(), v = P(), h = y(() => {
      const S = {};
      return o.height && (S.height = Kt(o.height)), o.maxHeight && (S.maxHeight = Kt(o.maxHeight)), [o.wrapStyle, S];
    }), p = y(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), g = y(() => [r.e("view"), o.viewClass]), b = () => {
      var S;
      f.value && ((S = v.value) == null || S.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function m(S, A) {
      Ee(S) ? f.value.scrollTo(S) : ve(S) && ve(A) && f.value.scrollTo(S, A);
    }
    const C = (S) => {
      if (!ve(S)) {
        we(Rr, "value must be a number");
        return;
      }
      f.value.scrollTop = S;
    }, O = (S) => {
      if (!ve(S)) {
        we(Rr, "value must be a number");
        return;
      }
      f.value.scrollLeft = S;
    }, I = () => {
      var S;
      (S = v.value) == null || S.update();
    };
    return Z(() => o.noresize, (S) => {
      S ? (a?.(), s?.()) : ({ stop: a } = nt(d, I), s = $e("resize", I));
    }, { immediate: !0 }), Z(() => [o.maxHeight, o.height], () => {
      o.native || fe(() => {
        var S;
        I(), f.value && ((S = v.value) == null || S.handleScroll(f.value));
      });
    }), qe(cs, jt({
      scrollbarElement: u,
      wrapElement: f
    })), Hu(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), ge(() => {
      o.native || fe(() => {
        I();
      });
    }), Wu(() => I()), t({
      wrapRef: f,
      update: I,
      scrollTo: m,
      setScrollTop: C,
      setScrollLeft: O,
      handleScroll: b
    }), (S, A) => (_(), B("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: L(c(r).b())
    }, [
      $("div", {
        ref_key: "wrapRef",
        ref: f,
        class: L(c(p)),
        style: ye(c(h)),
        tabindex: S.tabindex,
        onScroll: b
      }, [
        (_(), K(xe(S.tag), {
          id: S.id,
          ref_key: "resizeRef",
          ref: d,
          class: L(c(g)),
          style: ye(S.viewStyle),
          role: S.role,
          "aria-label": S.ariaLabel,
          "aria-orientation": S.ariaOrientation
        }, {
          default: H(() => [
            U(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      S.native ? W("v-if", !0) : (_(), K(mh, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        always: S.always,
        "min-size": S.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Sh = /* @__PURE__ */ ae(_h, [["__file", "scrollbar.vue"]]);
const Ch = Je(Sh), ds = Symbol("popper"), _l = Symbol("popperContent"), Eh = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Sl = se({
  role: {
    type: String,
    values: Eh,
    default: "tooltip"
  }
}), Th = V({
  name: "ElPopper",
  inheritAttrs: !1
}), Oh = /* @__PURE__ */ V({
  ...Th,
  props: Sl,
  setup(e, { expose: t }) {
    const n = e, o = P(), r = P(), a = P(), s = P(), i = y(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), qe(ds, l), (u, f) => U(u.$slots, "default");
  }
});
var Ih = /* @__PURE__ */ ae(Oh, [["__file", "popper.vue"]]);
const Cl = se({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Ah = V({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), $h = /* @__PURE__ */ V({
  ...Ah,
  props: Cl,
  setup(e, { expose: t }) {
    const n = e, o = ce("popper"), { arrowOffset: r, arrowRef: a, arrowStyle: s } = oe(_l, void 0);
    return Z(() => n.arrowOffset, (i) => {
      r.value = i;
    }), it(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (_(), B("span", {
      ref_key: "arrowRef",
      ref: a,
      class: L(c(o).e("arrow")),
      style: ye(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Ph = /* @__PURE__ */ ae($h, [["__file", "arrow.vue"]]);
const El = se({
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
}), Tl = Symbol("elForwardRef"), Rh = (e) => {
  qe(Tl, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Mh = (e) => ({
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
}, gr = "ElOnlyChild", Lh = V({
  name: gr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = oe(Tl), a = Mh((o = r?.setForwardRef) != null ? o : Tt);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return we(gr, "requires exact only one valid child."), null;
      const l = Ol(i);
      return l ? Re(ju(l, n), [[a]]) : (we(gr, "no valid child node found"), null);
    };
  }
});
function Ol(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Ee(n))
      switch (n.type) {
        case Uu:
          continue;
        case Oi:
        case "svg":
          return qa(n);
        case ke:
          return Ol(n.children);
        default:
          return n;
      }
    return qa(n);
  }
  return null;
}
function qa(e) {
  const t = ce("only-child");
  return Q("span", {
    class: t.e("content")
  }, [e]);
}
const Nh = V({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), xh = /* @__PURE__ */ V({
  ...Nh,
  props: El,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = oe(ds, void 0);
    Rh(r);
    const a = y(() => i.value ? n.id : void 0), s = y(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = y(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = y(() => i.value ? `${n.open}` : void 0);
    let u;
    const f = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return ge(() => {
      Z(() => n.virtualRef, (d) => {
        d && (r.value = Et(d));
      }, {
        immediate: !0
      }), Z(r, (d, v) => {
        u?.(), u = void 0, Ke(d) && (f.forEach((h) => {
          var p;
          const g = n[h];
          g && (d.addEventListener(h.slice(2).toLowerCase(), g), (p = v?.removeEventListener) == null || p.call(v, h.slice(2).toLowerCase(), g));
        }), Mr(d) && (u = Z([a, s, i, l], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((p, g) => {
            Zo(h[g]) ? d.removeAttribute(p) : d.setAttribute(p, h[g]);
          });
        }, { immediate: !0 }))), Ke(v) && Mr(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => v.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), it(() => {
      if (u?.(), u = void 0, r.value && Ke(r.value)) {
        const d = r.value;
        f.forEach((v) => {
          const h = n[v];
          h && d.removeEventListener(v.slice(2).toLowerCase(), h);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (d, v) => d.virtualTriggering ? W("v-if", !0) : (_(), K(c(Lh), Wt({ key: 0 }, d.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: H(() => [
        U(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var kh = /* @__PURE__ */ ae(xh, [["__file", "trigger.vue"]]);
const hr = "focus-trap.focus-after-trapped", mr = "focus-trap.focus-after-released", Dh = "focus-trap.focusout-prevented", Ya = {
  cancelable: !0,
  bubbles: !1
}, Bh = {
  cancelable: !0,
  bubbles: !1
}, Za = "focusAfterTrapped", Xa = "focusAfterReleased", Il = Symbol("elFocusTrap"), fs = P(), nr = P(0), ps = P(0);
let bo = 0;
const Al = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ja = (e, t) => {
  for (const n of e)
    if (!Fh(n, t))
      return n;
}, Fh = (e, t) => {
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
}, zh = (e) => {
  const t = Al(e), n = Ja(t, e), o = Ja(t.reverse(), e);
  return [n, o];
}, Vh = (e) => e instanceof HTMLInputElement && "select" in e, St = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Ke(e) && !Mr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), ps.value = window.performance.now(), e !== n && Vh(e) && t && e.select(), Ke(e) && o && e.removeAttribute("tabindex");
  }
};
function Qa(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Hh = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Qa(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, a;
      e = Qa(e, o), (a = (r = e[0]) == null ? void 0 : r.resume) == null || a.call(r);
    }
  };
}, Wh = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (St(o, t), document.activeElement !== n)
      return;
}, ei = Hh(), jh = () => nr.value > ps.value, yo = () => {
  fs.value = "pointer", nr.value = window.performance.now();
}, ti = () => {
  fs.value = "keyboard", nr.value = window.performance.now();
}, Uh = () => (ge(() => {
  bo === 0 && (document.addEventListener("mousedown", yo), document.addEventListener("touchstart", yo), document.addEventListener("keydown", ti)), bo++;
}), it(() => {
  bo--, bo <= 0 && (document.removeEventListener("mousedown", yo), document.removeEventListener("touchstart", yo), document.removeEventListener("keydown", ti));
}), {
  focusReason: fs,
  lastUserFocusTimestamp: nr,
  lastAutomatedFocusTimestamp: ps
}), wo = (e) => new CustomEvent(Dh, {
  ...Bh,
  detail: e
}), ft = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Cn = [];
const ni = (e) => {
  e.code === ft.esc && Cn.forEach((t) => t(e));
}, Kh = (e) => {
  ge(() => {
    Cn.length === 0 && document.addEventListener("keydown", ni), ue && Cn.push(e);
  }), it(() => {
    Cn = Cn.filter((t) => t !== e), Cn.length === 0 && ue && document.removeEventListener("keydown", ni);
  });
}, Gh = V({
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
    Za,
    Xa,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = P();
    let o, r;
    const { focusReason: a } = Uh();
    Kh((p) => {
      e.trapped && !s.paused && t("release-requested", p);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (p) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: g, altKey: b, ctrlKey: m, metaKey: C, currentTarget: O, shiftKey: I } = p, { loop: S } = e, A = g === ft.tab && !b && !m && !C, E = document.activeElement;
      if (A && E) {
        const F = O, [T, z] = zh(F);
        if (T && z) {
          if (!I && E === z) {
            const R = wo({
              focusReason: a.value
            });
            t("focusout-prevented", R), R.defaultPrevented || (p.preventDefault(), S && St(T, !0));
          } else if (I && [T, F].includes(E)) {
            const R = wo({
              focusReason: a.value
            });
            t("focusout-prevented", R), R.defaultPrevented || (p.preventDefault(), S && St(z, !0));
          }
        } else if (E === F) {
          const R = wo({
            focusReason: a.value
          });
          t("focusout-prevented", R), R.defaultPrevented || p.preventDefault();
        }
      }
    };
    qe(Il, {
      focusTrapRef: n,
      onKeydown: i
    }), Z(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), Z([n], ([p], [g]) => {
      p && (p.addEventListener("keydown", i), p.addEventListener("focusin", f), p.addEventListener("focusout", d)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", f), g.removeEventListener("focusout", d));
    });
    const l = (p) => {
      t(Za, p);
    }, u = (p) => t(Xa, p), f = (p) => {
      const g = c(n);
      if (!g)
        return;
      const b = p.target, m = p.relatedTarget, C = b && g.contains(b);
      e.trapped || m && g.contains(m) || (o = m), C && t("focusin", p), !s.paused && e.trapped && (C ? r = b : St(r, !0));
    }, d = (p) => {
      const g = c(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const b = p.relatedTarget;
          !Zo(b) && !g.contains(b) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const m = wo({
                focusReason: a.value
              });
              t("focusout-prevented", m), m.defaultPrevented || St(r, !0);
            }
          }, 0);
        } else {
          const b = p.target;
          b && g.contains(b) || t("focusout", p);
        }
    };
    async function v() {
      await fe();
      const p = c(n);
      if (p) {
        ei.push(s);
        const g = p.contains(document.activeElement) ? o : document.activeElement;
        if (o = g, !p.contains(g)) {
          const m = new Event(hr, Ya);
          p.addEventListener(hr, l), p.dispatchEvent(m), m.defaultPrevented || fe(() => {
            let C = e.focusStartEl;
            be(C) || (St(C), document.activeElement !== C && (C = "first")), C === "first" && Wh(Al(p), !0), (document.activeElement === g || C === "container") && St(p);
          });
        }
      }
    }
    function h() {
      const p = c(n);
      if (p) {
        p.removeEventListener(hr, l);
        const g = new CustomEvent(mr, {
          ...Ya,
          detail: {
            focusReason: a.value
          }
        });
        p.addEventListener(mr, u), p.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !jh() || p.contains(document.activeElement)) && St(o ?? document.body), p.removeEventListener(mr, u), ei.remove(s);
      }
    }
    return ge(() => {
      e.trapped && v(), Z(() => e.trapped, (p) => {
        p ? v() : h();
      });
    }), it(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", d), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function qh(e, t, n, o, r, a) {
  return U(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var $l = /* @__PURE__ */ ae(Gh, [["render", qh], ["__file", "focus-trap.vue"]]), De = "top", Ze = "bottom", Xe = "right", Be = "left", vs = "auto", io = [De, Ze, Xe, Be], An = "start", to = "end", Yh = "clippingParents", Pl = "viewport", Wn = "popper", Zh = "reference", oi = io.reduce(function(e, t) {
  return e.concat([t + "-" + An, t + "-" + to]);
}, []), or = [].concat(io, [vs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + An, t + "-" + to]);
}, []), Xh = "beforeRead", Jh = "read", Qh = "afterRead", em = "beforeMain", tm = "main", nm = "afterMain", om = "beforeWrite", rm = "write", sm = "afterWrite", am = [Xh, Jh, Qh, em, tm, nm, om, rm, sm];
function gt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function je(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function un(e) {
  var t = je(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ge(e) {
  var t = je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function im(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, a = t.elements[n];
    !Ge(a) || !gt(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(s) {
      var i = r[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function lm(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Ge(r) || !gt(r) || (Object.assign(r.style, i), Object.keys(a).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Rl = { name: "applyStyles", enabled: !0, phase: "write", fn: im, effect: lm, requires: ["computeStyles"] };
function pt(e) {
  return e.split("-")[0];
}
var rn = Math.max, Wo = Math.min, $n = Math.round;
function Lr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ml() {
  return !/^((?!chrome|android).)*safari/i.test(Lr());
}
function Pn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  t && Ge(e) && (r = e.offsetWidth > 0 && $n(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && $n(o.height) / e.offsetHeight || 1);
  var s = un(e) ? je(e) : window, i = s.visualViewport, l = !Ml() && n, u = (o.left + (l && i ? i.offsetLeft : 0)) / r, f = (o.top + (l && i ? i.offsetTop : 0)) / a, d = o.width / r, v = o.height / a;
  return { width: d, height: v, top: f, right: u + d, bottom: f + v, left: u, x: u, y: f };
}
function hs(e) {
  var t = Pn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Ll(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && gs(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function At(e) {
  return je(e).getComputedStyle(e);
}
function um(e) {
  return ["table", "td", "th"].indexOf(gt(e)) >= 0;
}
function Gt(e) {
  return ((un(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function rr(e) {
  return gt(e) === "html" ? e : e.assignedSlot || e.parentNode || (gs(e) ? e.host : null) || Gt(e);
}
function ri(e) {
  return !Ge(e) || At(e).position === "fixed" ? null : e.offsetParent;
}
function cm(e) {
  var t = /firefox/i.test(Lr()), n = /Trident/i.test(Lr());
  if (n && Ge(e)) {
    var o = At(e);
    if (o.position === "fixed") return null;
  }
  var r = rr(e);
  for (gs(r) && (r = r.host); Ge(r) && ["html", "body"].indexOf(gt(r)) < 0; ) {
    var a = At(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function lo(e) {
  for (var t = je(e), n = ri(e); n && um(n) && At(n).position === "static"; ) n = ri(n);
  return n && (gt(n) === "html" || gt(n) === "body" && At(n).position === "static") ? t : n || cm(e) || t;
}
function ms(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Yn(e, t, n) {
  return rn(e, Wo(t, n));
}
function dm(e, t, n) {
  var o = Yn(e, t, n);
  return o > n ? n : o;
}
function Nl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function xl(e) {
  return Object.assign({}, Nl(), e);
}
function kl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var fm = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, xl(typeof e != "number" ? e : kl(e, io));
};
function pm(e) {
  var t, n = e.state, o = e.name, r = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = pt(n.placement), l = ms(i), u = [Be, Xe].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var d = fm(r.padding, n), v = hs(a), h = l === "y" ? De : Be, p = l === "y" ? Ze : Xe, g = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], b = s[l] - n.rects.reference[l], m = lo(a), C = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, O = g / 2 - b / 2, I = d[h], S = C - v[f] - d[p], A = C / 2 - v[f] / 2 + O, E = Yn(I, A, S), F = l;
    n.modifiersData[o] = (t = {}, t[F] = E, t.centerOffset = E - A, t);
  }
}
function vm(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ll(t.elements.popper, r) && (t.elements.arrow = r));
}
var gm = { name: "arrow", enabled: !0, phase: "main", fn: pm, effect: vm, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Rn(e) {
  return e.split("-")[1];
}
var hm = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function mm(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: $n(n * r) / r || 0, y: $n(o * r) / r || 0 };
}
function si(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, v = s.x, h = v === void 0 ? 0 : v, p = s.y, g = p === void 0 ? 0 : p, b = typeof f == "function" ? f({ x: h, y: g }) : { x: h, y: g };
  h = b.x, g = b.y;
  var m = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), O = Be, I = De, S = window;
  if (u) {
    var A = lo(n), E = "clientHeight", F = "clientWidth";
    if (A === je(n) && (A = Gt(n), At(A).position !== "static" && i === "absolute" && (E = "scrollHeight", F = "scrollWidth")), A = A, r === De || (r === Be || r === Xe) && a === to) {
      I = Ze;
      var T = d && A === S && S.visualViewport ? S.visualViewport.height : A[E];
      g -= T - o.height, g *= l ? 1 : -1;
    }
    if (r === Be || (r === De || r === Ze) && a === to) {
      O = Xe;
      var z = d && A === S && S.visualViewport ? S.visualViewport.width : A[F];
      h -= z - o.width, h *= l ? 1 : -1;
    }
  }
  var k = Object.assign({ position: i }, u && hm), R = f === !0 ? mm({ x: h, y: g }, je(n)) : { x: h, y: g };
  if (h = R.x, g = R.y, l) {
    var j;
    return Object.assign({}, k, (j = {}, j[I] = C ? "0" : "", j[O] = m ? "0" : "", j.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", j));
  }
  return Object.assign({}, k, (t = {}, t[I] = C ? g + "px" : "", t[O] = m ? h + "px" : "", t.transform = "", t));
}
function bm(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: pt(t.placement), variation: Rn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, si(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, si(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Dl = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: bm, data: {} }, _o = { passive: !0 };
function ym(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, s = o.resize, i = s === void 0 ? !0 : s, l = je(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, _o);
  }), i && l.addEventListener("resize", n.update, _o), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, _o);
    }), i && l.removeEventListener("resize", n.update, _o);
  };
}
var Bl = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ym, data: {} }, wm = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Oo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wm[t];
  });
}
var _m = { start: "end", end: "start" };
function ai(e) {
  return e.replace(/start|end/g, function(t) {
    return _m[t];
  });
}
function bs(e) {
  var t = je(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function ys(e) {
  return Pn(Gt(e)).left + bs(e).scrollLeft;
}
function Sm(e, t) {
  var n = je(e), o = Gt(e), r = n.visualViewport, a = o.clientWidth, s = o.clientHeight, i = 0, l = 0;
  if (r) {
    a = r.width, s = r.height;
    var u = Ml();
    (u || !u && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return { width: a, height: s, x: i + ys(e), y: l };
}
function Cm(e) {
  var t, n = Gt(e), o = bs(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, a = rn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = rn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + ys(e), l = -o.scrollTop;
  return At(r || n).direction === "rtl" && (i += rn(n.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function ws(e) {
  var t = At(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Fl(e) {
  return ["html", "body", "#document"].indexOf(gt(e)) >= 0 ? e.ownerDocument.body : Ge(e) && ws(e) ? e : Fl(rr(e));
}
function Zn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Fl(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = je(o), s = r ? [a].concat(a.visualViewport || [], ws(o) ? o : []) : o, i = t.concat(s);
  return r ? i : i.concat(Zn(rr(s)));
}
function Nr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Em(e, t) {
  var n = Pn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ii(e, t, n) {
  return t === Pl ? Nr(Sm(e, n)) : un(t) ? Em(t, n) : Nr(Cm(Gt(e)));
}
function Tm(e) {
  var t = Zn(rr(e)), n = ["absolute", "fixed"].indexOf(At(e).position) >= 0, o = n && Ge(e) ? lo(e) : e;
  return un(o) ? t.filter(function(r) {
    return un(r) && Ll(r, o) && gt(r) !== "body";
  }) : [];
}
function Om(e, t, n, o) {
  var r = t === "clippingParents" ? Tm(e) : [].concat(t), a = [].concat(r, [n]), s = a[0], i = a.reduce(function(l, u) {
    var f = ii(e, u, o);
    return l.top = rn(f.top, l.top), l.right = Wo(f.right, l.right), l.bottom = Wo(f.bottom, l.bottom), l.left = rn(f.left, l.left), l;
  }, ii(e, s, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function zl(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? pt(o) : null, a = o ? Rn(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case De:
      l = { x: s, y: t.y - n.height };
      break;
    case Ze:
      l = { x: s, y: t.y + t.height };
      break;
    case Xe:
      l = { x: t.x + t.width, y: i };
      break;
    case Be:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? ms(r) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case An:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case to:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function no(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? Yh : i, u = n.rootBoundary, f = u === void 0 ? Pl : u, d = n.elementContext, v = d === void 0 ? Wn : d, h = n.altBoundary, p = h === void 0 ? !1 : h, g = n.padding, b = g === void 0 ? 0 : g, m = xl(typeof b != "number" ? b : kl(b, io)), C = v === Wn ? Zh : Wn, O = e.rects.popper, I = e.elements[p ? C : v], S = Om(un(I) ? I : I.contextElement || Gt(e.elements.popper), l, f, s), A = Pn(e.elements.reference), E = zl({ reference: A, element: O, placement: r }), F = Nr(Object.assign({}, O, E)), T = v === Wn ? F : A, z = { top: S.top - T.top + m.top, bottom: T.bottom - S.bottom + m.bottom, left: S.left - T.left + m.left, right: T.right - S.right + m.right }, k = e.modifiersData.offset;
  if (v === Wn && k) {
    var R = k[r];
    Object.keys(z).forEach(function(j) {
      var re = [Xe, Ze].indexOf(j) >= 0 ? 1 : -1, J = [De, Ze].indexOf(j) >= 0 ? "y" : "x";
      z[j] += R[J] * re;
    });
  }
  return z;
}
function Im(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? or : l, f = Rn(o), d = f ? i ? oi : oi.filter(function(p) {
    return Rn(p) === f;
  }) : io, v = d.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  v.length === 0 && (v = d);
  var h = v.reduce(function(p, g) {
    return p[g] = no(e, { placement: g, boundary: r, rootBoundary: a, padding: s })[pt(g)], p;
  }, {});
  return Object.keys(h).sort(function(p, g) {
    return h[p] - h[g];
  });
}
function Am(e) {
  if (pt(e) === vs) return [];
  var t = Oo(e);
  return [ai(e), t, ai(t)];
}
function $m(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, d = n.rootBoundary, v = n.altBoundary, h = n.flipVariations, p = h === void 0 ? !0 : h, g = n.allowedAutoPlacements, b = t.options.placement, m = pt(b), C = m === b, O = l || (C || !p ? [Oo(b)] : Am(b)), I = [b].concat(O).reduce(function(Oe, de) {
      return Oe.concat(pt(de) === vs ? Im(t, { placement: de, boundary: f, rootBoundary: d, padding: u, flipVariations: p, allowedAutoPlacements: g }) : de);
    }, []), S = t.rects.reference, A = t.rects.popper, E = /* @__PURE__ */ new Map(), F = !0, T = I[0], z = 0; z < I.length; z++) {
      var k = I[z], R = pt(k), j = Rn(k) === An, re = [De, Ze].indexOf(R) >= 0, J = re ? "width" : "height", X = no(t, { placement: k, boundary: f, rootBoundary: d, altBoundary: v, padding: u }), M = re ? j ? Xe : Be : j ? Ze : De;
      S[J] > A[J] && (M = Oo(M));
      var Y = Oo(M), ne = [];
      if (a && ne.push(X[R] <= 0), i && ne.push(X[M] <= 0, X[Y] <= 0), ne.every(function(Oe) {
        return Oe;
      })) {
        T = k, F = !1;
        break;
      }
      E.set(k, ne);
    }
    if (F) for (var he = p ? 3 : 1, Qe = function(Oe) {
      var de = I.find(function(Me) {
        var Ie = E.get(Me);
        if (Ie) return Ie.slice(0, Oe).every(function(ie) {
          return ie;
        });
      });
      if (de) return T = de, "break";
    }, Fe = he; Fe > 0; Fe--) {
      var lt = Qe(Fe);
      if (lt === "break") break;
    }
    t.placement !== T && (t.modifiersData[o]._skip = !0, t.placement = T, t.reset = !0);
  }
}
var Pm = { name: "flip", enabled: !0, phase: "main", fn: $m, requiresIfExists: ["offset"], data: { _skip: !1 } };
function li(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function ui(e) {
  return [De, Xe, Ze, Be].some(function(t) {
    return e[t] >= 0;
  });
}
function Rm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, a = t.modifiersData.preventOverflow, s = no(t, { elementContext: "reference" }), i = no(t, { altBoundary: !0 }), l = li(s, o), u = li(i, r, a), f = ui(l), d = ui(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": d });
}
var Mm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Rm };
function Lm(e, t, n) {
  var o = pt(e), r = [Be, De].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * r, [Be, Xe].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Nm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, a = r === void 0 ? [0, 0] : r, s = or.reduce(function(f, d) {
    return f[d] = Lm(d, t.rects, a), f;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = s;
}
var xm = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Nm };
function km(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = zl({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Vl = { name: "popperOffsets", enabled: !0, phase: "read", fn: km, data: {} };
function Dm(e) {
  return e === "x" ? "y" : "x";
}
function Bm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, a = r === void 0 ? !0 : r, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, d = n.padding, v = n.tether, h = v === void 0 ? !0 : v, p = n.tetherOffset, g = p === void 0 ? 0 : p, b = no(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: f }), m = pt(t.placement), C = Rn(t.placement), O = !C, I = ms(m), S = Dm(I), A = t.modifiersData.popperOffsets, E = t.rects.reference, F = t.rects.popper, T = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, z = typeof T == "number" ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, R = { x: 0, y: 0 };
  if (A) {
    if (a) {
      var j, re = I === "y" ? De : Be, J = I === "y" ? Ze : Xe, X = I === "y" ? "height" : "width", M = A[I], Y = M + b[re], ne = M - b[J], he = h ? -F[X] / 2 : 0, Qe = C === An ? E[X] : F[X], Fe = C === An ? -F[X] : -E[X], lt = t.elements.arrow, Oe = h && lt ? hs(lt) : { width: 0, height: 0 }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Nl(), Me = de[re], Ie = de[J], ie = Yn(0, E[X], Oe[X]), et = O ? E[X] / 2 - he - ie - Me - z.mainAxis : Qe - ie - Me - z.mainAxis, mt = O ? -E[X] / 2 + he + ie + Ie + z.mainAxis : Fe + ie + Ie + z.mainAxis, bt = t.elements.arrow && lo(t.elements.arrow), qt = bt ? I === "y" ? bt.clientTop || 0 : bt.clientLeft || 0 : 0, Yt = (j = k?.[I]) != null ? j : 0, pn = M + et - Yt - qt, vn = M + mt - Yt, gn = Yn(h ? Wo(Y, pn) : Y, M, h ? rn(ne, vn) : ne);
      A[I] = gn, R[I] = gn - M;
    }
    if (i) {
      var hn, Rt = I === "x" ? De : Be, mn = I === "x" ? Ze : Xe, Le = A[S], ut = S === "y" ? "height" : "width", bn = Le + b[Rt], Zt = Le - b[mn], x = [De, Be].indexOf(m) !== -1, te = (hn = k?.[S]) != null ? hn : 0, Ue = x ? bn : Le - E[ut] - F[ut] - te + z.altAxis, Mt = x ? Le + E[ut] + F[ut] - te - z.altAxis : Zt, Lt = h && x ? dm(Ue, Le, Mt) : Yn(h ? Ue : bn, Le, h ? Mt : Zt);
      A[S] = Lt, R[S] = Lt - Le;
    }
    t.modifiersData[o] = R;
  }
}
var Fm = { name: "preventOverflow", enabled: !0, phase: "main", fn: Bm, requiresIfExists: ["offset"] };
function zm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Vm(e) {
  return e === je(e) || !Ge(e) ? bs(e) : zm(e);
}
function Hm(e) {
  var t = e.getBoundingClientRect(), n = $n(t.width) / e.offsetWidth || 1, o = $n(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Wm(e, t, n) {
  n === void 0 && (n = !1);
  var o = Ge(t), r = Ge(t) && Hm(t), a = Gt(t), s = Pn(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((gt(t) !== "body" || ws(a)) && (i = Vm(t)), Ge(t) ? (l = Pn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = ys(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function jm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function r(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && r(l);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || r(a);
  }), o;
}
function Um(e) {
  var t = jm(e);
  return am.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Km(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Gm(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ci = { placement: "bottom", modifiers: [], strategy: "absolute" };
function di() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function _s(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, a = r === void 0 ? ci : r;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ci, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], d = !1, v = { state: u, setOptions: function(g) {
      var b = typeof g == "function" ? g(u.options) : g;
      p(), u.options = Object.assign({}, a, u.options, b), u.scrollParents = { reference: un(s) ? Zn(s) : s.contextElement ? Zn(s.contextElement) : [], popper: Zn(i) };
      var m = Um(Gm([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(C) {
        return C.enabled;
      }), h(), v.update();
    }, forceUpdate: function() {
      if (!d) {
        var g = u.elements, b = g.reference, m = g.popper;
        if (di(b, m)) {
          u.rects = { reference: Wm(b, lo(m), u.options.strategy === "fixed"), popper: hs(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(F) {
            return u.modifiersData[F.name] = Object.assign({}, F.data);
          });
          for (var C = 0; C < u.orderedModifiers.length; C++) {
            if (u.reset === !0) {
              u.reset = !1, C = -1;
              continue;
            }
            var O = u.orderedModifiers[C], I = O.fn, S = O.options, A = S === void 0 ? {} : S, E = O.name;
            typeof I == "function" && (u = I({ state: u, options: A, name: E, instance: v }) || u);
          }
        }
      }
    }, update: Km(function() {
      return new Promise(function(g) {
        v.forceUpdate(), g(u);
      });
    }), destroy: function() {
      p(), d = !0;
    } };
    if (!di(s, i)) return v;
    v.setOptions(l).then(function(g) {
      !d && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function h() {
      u.orderedModifiers.forEach(function(g) {
        var b = g.name, m = g.options, C = m === void 0 ? {} : m, O = g.effect;
        if (typeof O == "function") {
          var I = O({ state: u, name: b, instance: v, options: C }), S = function() {
          };
          f.push(I || S);
        }
      });
    }
    function p() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return v;
  };
}
_s();
var qm = [Bl, Vl, Dl, Rl];
_s({ defaultModifiers: qm });
var Ym = [Bl, Vl, Dl, Rl, xm, Pm, Fm, gm, Mm], Zm = _s({ defaultModifiers: Ym });
const Xm = ["fixed", "absolute"], Jm = se({
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
    values: or,
    default: "bottom"
  },
  popperOptions: {
    type: q(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Xm,
    default: "absolute"
  }
}), Hl = se({
  ...Jm,
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
  ...kn(["ariaLabel"])
}), Qm = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, eb = (e, t) => {
  const n = P(!1), o = P();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (o.value = "first", t("blur"));
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
}, tb = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, a = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...ob(e), ...t]
  };
  return rb(a, r?.modifiers), a;
}, nb = (e) => {
  if (ue)
    return Et(e);
};
function ob(e) {
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
function rb(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const sb = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = ab(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, r = y(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: d } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...d || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = on(), s = P({
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
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return Z(r, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Z([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = Zm(l, u, c(r)));
  }), it(() => {
    i();
  }), {
    state: y(() => {
      var l;
      return { ...((l = c(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: y(() => c(s).styles),
    attributes: y(() => c(s).attributes),
    update: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: y(() => c(a))
  };
};
function ab(e) {
  const t = Object.keys(e.elements), n = Do(t.map((r) => [r, e.styles[r] || {}])), o = Do(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const ib = 0, lb = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = oe(ds, void 0), a = P(), s = P(), i = y(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = y(() => {
    var m;
    const C = c(a), O = (m = c(s)) != null ? m : ib;
    return {
      name: "arrow",
      enabled: !Xi(C),
      options: {
        element: C,
        padding: O
      }
    };
  }), u = y(() => ({
    onFirstUpdate: () => {
      p();
    },
    ...tb(e, [
      c(l),
      c(i)
    ])
  })), f = y(() => nb(e.referenceEl) || c(o)), { attributes: d, state: v, styles: h, update: p, forceUpdate: g, instanceRef: b } = sb(f, n, u);
  return Z(b, (m) => t.value = m), ge(() => {
    Z(() => {
      var m;
      return (m = c(f)) == null ? void 0 : m.getBoundingClientRect();
    }, () => {
      p();
    });
  }), {
    attributes: d,
    arrowRef: a,
    contentRef: n,
    instanceRef: b,
    state: v,
    styles: h,
    role: r,
    forceUpdate: g,
    update: p
  };
}, ub = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = rs(), a = ce("popper"), s = y(() => c(t).popper), i = P(ve(e.zIndex) ? e.zIndex : r()), l = y(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = y(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), f = y(() => o.value === "dialog" ? "false" : void 0), d = y(() => c(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: d,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = ve(e.zIndex) ? e.zIndex : r();
    }
  };
}, cb = V({
  name: "ElPopperContent"
}), db = /* @__PURE__ */ V({
  ...cb,
  props: Hl,
  emits: Qm,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = eb(o, n), { attributes: d, arrowRef: v, contentRef: h, styles: p, instanceRef: g, role: b, update: m } = lb(o), {
      ariaModal: C,
      arrowStyle: O,
      contentAttrs: I,
      contentClass: S,
      contentStyle: A,
      updateZIndex: E
    } = ub(o, {
      styles: p,
      attributes: d,
      role: b
    }), F = oe(Ho, void 0), T = P();
    qe(_l, {
      arrowStyle: O,
      arrowRef: v,
      arrowOffset: T
    }), F && qe(Ho, {
      ...F,
      addInputId: Tt,
      removeInputId: Tt
    });
    let z;
    const k = (j = !0) => {
      m(), j && E();
    }, R = () => {
      k(!1), o.visible && o.focusOnShow ? a.value = !0 : o.visible === !1 && (a.value = !1);
    };
    return ge(() => {
      Z(() => o.triggerTargetEl, (j, re) => {
        z?.(), z = void 0;
        const J = c(j || h.value), X = c(re || h.value);
        Ke(J) && (z = Z([b, () => o.ariaLabel, C, () => o.id], (M) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((Y, ne) => {
            Zo(M[ne]) ? J.removeAttribute(Y) : J.setAttribute(Y, M[ne]);
          });
        }, { immediate: !0 })), X !== J && Ke(X) && ["role", "aria-label", "aria-modal", "id"].forEach((M) => {
          X.removeAttribute(M);
        });
      }, { immediate: !0 }), Z(() => o.visible, R, { immediate: !0 });
    }), it(() => {
      z?.(), z = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: g,
      updatePopper: k,
      contentStyle: A
    }), (j, re) => (_(), B("div", Wt({
      ref_key: "contentRef",
      ref: h
    }, c(I), {
      style: c(A),
      class: c(S),
      tabindex: "-1",
      onMouseenter: (J) => j.$emit("mouseenter", J),
      onMouseleave: (J) => j.$emit("mouseleave", J)
    }), [
      Q(c($l), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(h),
        "focus-start-el": c(r),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(s),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(f)
      }, {
        default: H(() => [
          U(j.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var fb = /* @__PURE__ */ ae(db, [["__file", "content.vue"]]);
const pb = Je(Ih), Ss = Symbol("elTooltip");
function fi() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return ro(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const vb = se({
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
}), gb = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: a } = fi(), {
    registerTimeout: s,
    cancelTimeout: i
  } = fi();
  return {
    onOpen: (f) => {
      a(() => {
        o(f);
        const d = c(n);
        ve(d) && d > 0 && s(() => {
          r(f);
        }, d);
      }, c(e));
    },
    onClose: (f) => {
      i(), a(() => {
        r(f);
      }, c(t));
    }
  };
}, Cs = se({
  ...vb,
  ...Hl,
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
  ...kn(["ariaLabel"])
}), Wl = se({
  ...El,
  disabled: Boolean,
  trigger: {
    type: q([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: q(Array),
    default: () => [ft.enter, ft.numpadEnter, ft.space]
  }
}), hb = Xo({
  type: q(Boolean),
  default: null
}), mb = Xo({
  type: q(Function)
}), bb = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: hb,
    [n]: mb
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: d
    }) => {
      const v = Te(), { emit: h } = v, p = v.props, g = y(() => pe(p[n])), b = y(() => p[e] === null), m = (E) => {
        s.value !== !0 && (s.value = !0, i && (i.value = E), pe(f) && f(E));
      }, C = (E) => {
        s.value !== !1 && (s.value = !1, i && (i.value = E), pe(d) && d(E));
      }, O = (E) => {
        if (p.disabled === !0 || pe(u) && !u())
          return;
        const F = g.value && ue;
        F && h(t, !0), (b.value || !F) && m(E);
      }, I = (E) => {
        if (p.disabled === !0 || !ue)
          return;
        const F = g.value && ue;
        F && h(t, !1), (b.value || !F) && C(E);
      }, S = (E) => {
        an(E) && (p.disabled && E ? g.value && h(t, !1) : s.value !== E && (E ? m() : C()));
      }, A = () => {
        s.value ? I() : O();
      };
      return Z(() => p[e], S), l && v.appContext.config.globalProperties.$route !== void 0 && Z(() => ({
        ...v.proxy.$route
      }), () => {
        l.value && s.value && I();
      }), ge(() => {
        S(p[e]);
      }), {
        hide: I,
        show: O,
        toggle: A,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: yb,
  useModelToggleEmits: wb,
  useModelToggle: _b
} = bb("visible"), Sb = se({
  ...Sl,
  ...yb,
  ...Cs,
  ...Wl,
  ...Cl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Cb = [
  ...wb,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Eb = (e, t) => _e(e) ? e.includes(t) : e === t, Sn = (e, t, n) => (o) => {
  Eb(c(e), t) && n(o);
}, Ct = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const a = e?.(r);
  if (n === !1 || !a)
    return t?.(r);
}, Tb = V({
  name: "ElTooltipTrigger"
}), Ob = /* @__PURE__ */ V({
  ...Tb,
  props: Wl,
  setup(e, { expose: t }) {
    const n = e, o = ce("tooltip"), { controlled: r, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = oe(Ss, void 0), f = P(null), d = () => {
      if (c(r) || n.disabled)
        return !0;
    }, v = ot(n, "trigger"), h = Ct(d, Sn(v, "hover", i)), p = Ct(d, Sn(v, "hover", l)), g = Ct(d, Sn(v, "click", (I) => {
      I.button === 0 && u(I);
    })), b = Ct(d, Sn(v, "focus", i)), m = Ct(d, Sn(v, "focus", l)), C = Ct(d, Sn(v, "contextmenu", (I) => {
      I.preventDefault(), u(I);
    })), O = Ct(d, (I) => {
      const { code: S } = I;
      n.triggerKeys.includes(S) && (I.preventDefault(), u(I));
    });
    return t({
      triggerRef: f
    }), (I, S) => (_(), K(c(kh), {
      id: c(a),
      "virtual-ref": I.virtualRef,
      open: c(s),
      "virtual-triggering": I.virtualTriggering,
      class: L(c(o).e("trigger")),
      onBlur: c(m),
      onClick: c(g),
      onContextmenu: c(C),
      onFocus: c(b),
      onMouseenter: c(h),
      onMouseleave: c(p),
      onKeydown: c(O)
    }, {
      default: H(() => [
        U(I.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Ib = /* @__PURE__ */ ae(Ob, [["__file", "trigger.vue"]]);
const Ab = se({
  to: {
    type: q([String, Object]),
    required: !0
  },
  disabled: Boolean
}), $b = /* @__PURE__ */ V({
  __name: "teleport",
  props: Ab,
  setup(e) {
    return (t, n) => t.disabled ? U(t.$slots, "default", { key: 0 }) : (_(), K(Ku, {
      key: 1,
      to: t.to
    }, [
      U(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Pb = /* @__PURE__ */ ae($b, [["__file", "teleport.vue"]]);
const jl = Je(Pb), Ul = () => {
  const e = Yr(), t = hl(), n = y(() => `${e.value}-popper-container-${t.prefix}`), o = y(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Rb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Mb = () => {
  const { id: e, selector: t } = Ul();
  return Gu(() => {
    ue && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && Rb(e.value);
  }), {
    id: e,
    selector: t
  };
}, Lb = V({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Nb = /* @__PURE__ */ V({
  ...Lb,
  props: Cs,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ul(), r = ce("tooltip"), a = P();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: f,
      onClose: d,
      onOpen: v,
      onShow: h,
      onHide: p,
      onBeforeShow: g,
      onBeforeHide: b
    } = oe(Ss, void 0), m = y(() => n.transition || `${r.namespace.value}-fade-in-linear`), C = y(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    it(() => {
      s?.();
    });
    const O = y(() => c(C) ? !0 : c(u)), I = y(() => n.disabled ? !1 : c(u)), S = y(() => n.appendTo || o.value), A = y(() => {
      var M;
      return (M = n.style) != null ? M : {};
    }), E = P(!0), F = () => {
      p(), X() && St(document.body), E.value = !0;
    }, T = () => {
      if (c(i))
        return !0;
    }, z = Ct(T, () => {
      n.enterable && c(f) === "hover" && v();
    }), k = Ct(T, () => {
      c(f) === "hover" && d();
    }), R = () => {
      var M, Y;
      (Y = (M = a.value) == null ? void 0 : M.updatePopper) == null || Y.call(M), g?.();
    }, j = () => {
      b?.();
    }, re = () => {
      h(), s = jv(y(() => {
        var M;
        return (M = a.value) == null ? void 0 : M.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && d();
      });
    }, J = () => {
      n.virtualTriggering || d();
    }, X = (M) => {
      var Y;
      const ne = (Y = a.value) == null ? void 0 : Y.popperContentRef, he = M?.relatedTarget || document.activeElement;
      return ne?.contains(he);
    };
    return Z(() => c(u), (M) => {
      M ? E.value = !1 : s?.();
    }, {
      flush: "post"
    }), Z(() => n.content, () => {
      var M, Y;
      (Y = (M = a.value) == null ? void 0 : M.updatePopper) == null || Y.call(M);
    }), t({
      contentRef: a,
      isFocusInsideContent: X
    }), (M, Y) => (_(), K(c(jl), {
      disabled: !M.teleported,
      to: c(S)
    }, {
      default: H(() => [
        Q(cn, {
          name: c(m),
          onAfterLeave: F,
          onBeforeEnter: R,
          onAfterEnter: re,
          onBeforeLeave: j
        }, {
          default: H(() => [
            c(O) ? Re((_(), K(c(fb), Wt({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, M.$attrs, {
              "aria-label": M.ariaLabel,
              "aria-hidden": E.value,
              "boundaries-padding": M.boundariesPadding,
              "fallback-placements": M.fallbackPlacements,
              "gpu-acceleration": M.gpuAcceleration,
              offset: M.offset,
              placement: M.placement,
              "popper-options": M.popperOptions,
              strategy: M.strategy,
              effect: M.effect,
              enterable: M.enterable,
              pure: M.pure,
              "popper-class": M.popperClass,
              "popper-style": [M.popperStyle, c(A)],
              "reference-el": M.referenceEl,
              "trigger-target-el": M.triggerTargetEl,
              visible: c(I),
              "z-index": M.zIndex,
              onMouseenter: c(z),
              onMouseleave: c(k),
              onBlur: J,
              onClose: c(d)
            }), {
              default: H(() => [
                U(M.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [st, c(I)]
            ]) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var xb = /* @__PURE__ */ ae(Nb, [["__file", "content.vue"]]);
const kb = V({
  name: "ElTooltip"
}), Db = /* @__PURE__ */ V({
  ...kb,
  props: Sb,
  emits: Cb,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Mb();
    const r = ln(), a = P(), s = P(), i = () => {
      var m;
      const C = c(a);
      C && ((m = C.popperInstanceRef) == null || m.update());
    }, l = P(!1), u = P(), { show: f, hide: d, hasUpdateHandler: v } = _b({
      indicator: l,
      toggleReason: u
    }), { onOpen: h, onClose: p } = gb({
      showAfter: ot(o, "showAfter"),
      hideAfter: ot(o, "hideAfter"),
      autoClose: ot(o, "autoClose"),
      open: f,
      close: d
    }), g = y(() => an(o.visible) && !v.value);
    qe(Ss, {
      controlled: g,
      id: r,
      open: Hr(l),
      trigger: ot(o, "trigger"),
      onOpen: (m) => {
        h(m);
      },
      onClose: (m) => {
        p(m);
      },
      onToggle: (m) => {
        c(l) ? p(m) : h(m);
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
      return (C = s.value) == null ? void 0 : C.isFocusInsideContent(m);
    };
    return qu(() => l.value && d()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: b,
      updatePopper: i,
      onOpen: h,
      onClose: p,
      hide: d
    }), (m, C) => (_(), K(c(pb), {
      ref_key: "popperRef",
      ref: a,
      role: m.role
    }, {
      default: H(() => [
        Q(Ib, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: H(() => [
            m.$slots.default ? U(m.$slots, "default", { key: 0 }) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Q(xb, {
          ref_key: "contentRef",
          ref: s,
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
            U(m.$slots, "content", {}, () => [
              m.rawContent ? (_(), B("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, ["innerHTML"])) : (_(), B("span", { key: 1 }, G(m.content), 1))
            ]),
            m.showArrow ? (_(), K(c(Ph), {
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
var Bb = /* @__PURE__ */ ae(Db, [["__file", "tooltip.vue"]]);
const Fb = Je(Bb), zb = se({
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
}), Vb = V({
  name: "ElBadge"
}), Hb = /* @__PURE__ */ V({
  ...Vb,
  props: zb,
  setup(e, { expose: t }) {
    const n = e, o = ce("badge"), r = y(() => n.isDot ? "" : ve(n.value) && ve(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = y(() => {
      var s, i, l, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: Kt(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Kt((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: r
    }), (s, i) => (_(), B("div", {
      class: L(c(o).b())
    }, [
      U(s.$slots, "default"),
      Q(cn, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: H(() => [
          Re($("sup", {
            class: L([
              c(o).e("content"),
              c(o).em("content", s.type),
              c(o).is("fixed", !!s.$slots.default),
              c(o).is("dot", s.isDot),
              c(o).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: ye(c(a))
          }, [
            U(s.$slots, "content", { value: c(r) }, () => [
              dt(G(c(r)), 1)
            ])
          ], 6), [
            [st, !s.hidden && (c(r) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Wb = /* @__PURE__ */ ae(Hb, [["__file", "badge.vue"]]);
const jb = Je(Wb), Kl = Symbol("buttonGroupContextKey"), Gl = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: a = "API" }, s) => {
  Z(() => c(s), (i) => {
    i && we(n, `[${a}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, Ub = (e, t) => {
  Gl({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const n = oe(Kl, void 0), o = Qo("button"), { form: r } = er(), a = ao(y(() => n?.size)), s = tr(), i = P(), l = Kr(), u = y(() => e.type || n?.type || ""), f = y(() => {
    var p, g, b;
    return (b = (g = e.autoInsertSpace) != null ? g : (p = o.value) == null ? void 0 : p.autoInsertSpace) != null ? b : !1;
  }), d = y(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), v = y(() => {
    var p;
    const g = (p = l.default) == null ? void 0 : p.call(l);
    if (f.value && g?.length === 1) {
      const b = g[0];
      if (b?.type === Oi) {
        const m = b.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(m.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: a,
    _type: u,
    _ref: i,
    _props: d,
    shouldAddSpace: v,
    handleClick: (p) => {
      if (s.value || e.loading) {
        p.stopPropagation();
        return;
      }
      e.nativeType === "reset" && r?.resetFields(), t("click", p);
    }
  };
}, Kb = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Gb = ["button", "submit", "reset"], xr = se({
  size: Jo,
  disabled: Boolean,
  type: {
    type: String,
    values: Kb,
    default: ""
  },
  icon: {
    type: It
  },
  nativeType: {
    type: String,
    values: Gb,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: It,
    default: () => fl
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
}), qb = {
  click: (e) => e instanceof MouseEvent
};
function Se(e, t) {
  Yb(e) && (e = "100%");
  var n = Zb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function So(e) {
  return Math.min(1, Math.max(0, e));
}
function Yb(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Zb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ql(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Co(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function nn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Xb(e, t, n) {
  return {
    r: Se(e, 255) * 255,
    g: Se(t, 255) * 255,
    b: Se(n, 255) * 255
  };
}
function pi(e, t, n) {
  e = Se(e, 255), t = Se(t, 255), n = Se(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, s = 0, i = (o + r) / 2;
  if (o === r)
    s = 0, a = 0;
  else {
    var l = o - r;
    switch (s = i > 0.5 ? l / (2 - o - r) : l / (o + r), o) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, l: i };
}
function br(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Jb(e, t, n) {
  var o, r, a;
  if (e = Se(e, 360), t = Se(t, 100), n = Se(n, 100), t === 0)
    r = n, a = n, o = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - s;
    o = br(i, s, e + 1 / 3), r = br(i, s, e), a = br(i, s, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: a * 255 };
}
function vi(e, t, n) {
  e = Se(e, 255), t = Se(t, 255), n = Se(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, s = o, i = o - r, l = o === 0 ? 0 : i / o;
  if (o === r)
    a = 0;
  else {
    switch (o) {
      case e:
        a = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / i + 2;
        break;
      case n:
        a = (e - t) / i + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: l, v: s };
}
function Qb(e, t, n) {
  e = Se(e, 360) * 6, t = Se(t, 100), n = Se(n, 100);
  var o = Math.floor(e), r = e - o, a = n * (1 - t), s = n * (1 - r * t), i = n * (1 - (1 - r) * t), l = o % 6, u = [n, s, a, a, i, n][l], f = [i, n, n, s, a, a][l], d = [a, a, i, n, n, s][l];
  return { r: u * 255, g: f * 255, b: d * 255 };
}
function gi(e, t, n, o) {
  var r = [
    nn(Math.round(e).toString(16)),
    nn(Math.round(t).toString(16)),
    nn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function e0(e, t, n, o, r) {
  var a = [
    nn(Math.round(e).toString(16)),
    nn(Math.round(t).toString(16)),
    nn(Math.round(n).toString(16)),
    nn(t0(o))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function t0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function hi(e) {
  return Ve(e) / 255;
}
function Ve(e) {
  return parseInt(e, 16);
}
function n0(e) {
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
function o0(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, a = null, s = !1, i = !1;
  return typeof e == "string" && (e = a0(e)), typeof e == "object" && (wt(e.r) && wt(e.g) && wt(e.b) ? (t = Xb(e.r, e.g, e.b), s = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : wt(e.h) && wt(e.s) && wt(e.v) ? (o = Co(e.s), r = Co(e.v), t = Qb(e.h, o, r), s = !0, i = "hsv") : wt(e.h) && wt(e.s) && wt(e.l) && (o = Co(e.s), a = Co(e.l), t = Jb(e.h, o, a), s = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = ql(n), {
    ok: s,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var r0 = "[-\\+]?\\d+%?", s0 = "[-\\+]?\\d*\\.\\d+%?", Ht = "(?:".concat(s0, ")|(?:").concat(r0, ")"), yr = "[\\s|\\(]+(".concat(Ht, ")[,|\\s]+(").concat(Ht, ")[,|\\s]+(").concat(Ht, ")\\s*\\)?"), wr = "[\\s|\\(]+(".concat(Ht, ")[,|\\s]+(").concat(Ht, ")[,|\\s]+(").concat(Ht, ")[,|\\s]+(").concat(Ht, ")\\s*\\)?"), tt = {
  CSS_UNIT: new RegExp(Ht),
  rgb: new RegExp("rgb" + yr),
  rgba: new RegExp("rgba" + wr),
  hsl: new RegExp("hsl" + yr),
  hsla: new RegExp("hsla" + wr),
  hsv: new RegExp("hsv" + yr),
  hsva: new RegExp("hsva" + wr),
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
  var n = tt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = tt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = tt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = tt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = tt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = tt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = tt.hex8.exec(e), n ? {
    r: Ve(n[1]),
    g: Ve(n[2]),
    b: Ve(n[3]),
    a: hi(n[4]),
    format: t ? "name" : "hex8"
  } : (n = tt.hex6.exec(e), n ? {
    r: Ve(n[1]),
    g: Ve(n[2]),
    b: Ve(n[3]),
    format: t ? "name" : "hex"
  } : (n = tt.hex4.exec(e), n ? {
    r: Ve(n[1] + n[1]),
    g: Ve(n[2] + n[2]),
    b: Ve(n[3] + n[3]),
    a: hi(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = tt.hex3.exec(e), n ? {
    r: Ve(n[1] + n[1]),
    g: Ve(n[2] + n[2]),
    b: Ve(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function wt(e) {
  return !!tt.CSS_UNIT.exec(String(e));
}
var i0 = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = n0(t)), this.originalInput = t;
      var r = o0(t);
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
      var t = this.toRgb(), n, o, r, a = t.r / 255, s = t.g / 255, i = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = ql(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = vi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = vi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = pi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = pi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), gi(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), e0(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Se(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Se(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + gi(this.r, this.g, this.b, !1), n = 0, o = Object.entries(kr); n < o.length; n++) {
        var r = o[n], a = r[0], s = r[1];
        if (t === s)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, a = !n && r && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = So(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = So(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = So(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = So(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), a = n / 100, s = {
        r: (r.r - o.r) * a + o.r,
        g: (r.g - o.g) * a + o.g,
        b: (r.b - o.b) * a + o.b,
        a: (r.a - o.a) * a + o.a
      };
      return new e(s);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, a = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, a.push(new e(o));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, a = n.v, s = [], i = 1 / t; t--; )
        s.push(new e({ h: o, s: r, v: a })), a = (a + i) % 1;
      return s;
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
      for (var n = this.toHsl(), o = n.h, r = [this], a = 360 / t, s = 1; s < t; s++)
        r.push(new e({ h: (o + s * a) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function kt(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function l0(e) {
  const t = tr(), n = ce("button");
  return y(() => {
    let o = {}, r = e.color;
    if (r) {
      const a = r.match(/var\((.*?)\)/);
      a && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(a[1]));
      const s = new i0(r), i = e.dark ? s.tint(20).toString() : kt(s, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? kt(s, 90) : s.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? kt(s, 50) : s.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? kt(s, 90) : s.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? kt(s, 50) : s.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? kt(s, 80) : s.tint(80).toString());
      else {
        const l = e.dark ? kt(s, 30) : s.tint(30).toString(), u = s.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
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
          const f = e.dark ? kt(s, 50) : s.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = f, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = f;
        }
      }
    }
    return o;
  });
}
const u0 = V({
  name: "ElButton"
}), c0 = /* @__PURE__ */ V({
  ...u0,
  props: xr,
  emits: qb,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = l0(o), a = ce("button"), { _ref: s, _size: i, _type: l, _disabled: u, _props: f, shouldAddSpace: d, handleClick: v } = Ub(o, n), h = y(() => [
      a.b(),
      a.m(l.value),
      a.m(i.value),
      a.is("disabled", u.value),
      a.is("loading", o.loading),
      a.is("plain", o.plain),
      a.is("round", o.round),
      a.is("circle", o.circle),
      a.is("text", o.text),
      a.is("link", o.link),
      a.is("has-bg", o.bg)
    ]);
    return t({
      ref: s,
      size: i,
      type: l,
      disabled: u,
      shouldAddSpace: d
    }), (p, g) => (_(), K(xe(p.tag), Wt({
      ref_key: "_ref",
      ref: s
    }, c(f), {
      class: c(h),
      style: c(r),
      onClick: c(v)
    }), {
      default: H(() => [
        p.loading ? (_(), B(ke, { key: 0 }, [
          p.$slots.loading ? U(p.$slots, "loading", { key: 0 }) : (_(), K(c(Pe), {
            key: 1,
            class: L(c(a).is("loading"))
          }, {
            default: H(() => [
              (_(), K(xe(p.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : p.icon || p.$slots.icon ? (_(), K(c(Pe), { key: 1 }, {
          default: H(() => [
            p.icon ? (_(), K(xe(p.icon), { key: 0 })) : U(p.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : W("v-if", !0),
        p.$slots.default ? (_(), B("span", {
          key: 2,
          class: L({ [c(a).em("text", "expand")]: c(d) })
        }, [
          U(p.$slots, "default")
        ], 2)) : W("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var d0 = /* @__PURE__ */ ae(c0, [["__file", "button.vue"]]);
const f0 = {
  size: xr.size,
  type: xr.type
}, p0 = V({
  name: "ElButtonGroup"
}), v0 = /* @__PURE__ */ V({
  ...p0,
  props: f0,
  setup(e) {
    const t = e;
    qe(Kl, jt({
      size: ot(t, "size"),
      type: ot(t, "type")
    }));
    const n = ce("button");
    return (o, r) => (_(), B("div", {
      class: L(c(n).b("group"))
    }, [
      U(o.$slots, "default")
    ], 2));
  }
});
var Yl = /* @__PURE__ */ ae(v0, [["__file", "button-group.vue"]]);
const Zl = Je(d0, {
  ButtonGroup: Yl
});
as(Yl);
var Io = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Io || {});
const g0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Dr = se({
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
}, m0 = V({
  name: "ElTag"
}), b0 = /* @__PURE__ */ V({
  ...m0,
  props: Dr,
  emits: h0,
  setup(e, { emit: t }) {
    const n = e, o = ao(), r = ce("tag"), a = y(() => {
      const { type: u, hit: f, effect: d, closable: v, round: h } = n;
      return [
        r.b(),
        r.is("closable", v),
        r.m(u || "primary"),
        r.m(o.value),
        r.m(d),
        r.is("hit", f),
        r.is("round", h)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var f, d, v;
      (v = (d = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : d.component) != null && v.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (_(), B("span", {
      key: 0,
      class: L(c(a)),
      style: ye({ backgroundColor: u.color }),
      onClick: i
    }, [
      $("span", {
        class: L(c(r).e("content"))
      }, [
        U(u.$slots, "default")
      ], 2),
      u.closable ? (_(), K(c(Pe), {
        key: 0,
        class: L(c(r).e("close")),
        onClick: Ae(s, ["stop"])
      }, {
        default: H(() => [
          Q(c(zo))
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
        $("span", {
          class: L(c(a)),
          style: ye({ backgroundColor: u.color }),
          onClick: i
        }, [
          $("span", {
            class: L(c(r).e("content"))
          }, [
            U(u.$slots, "default")
          ], 2),
          u.closable ? (_(), K(c(Pe), {
            key: 0,
            class: L(c(r).e("close")),
            onClick: Ae(s, ["stop"])
          }, {
            default: H(() => [
              Q(c(zo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var y0 = /* @__PURE__ */ ae(b0, [["__file", "tag.vue"]]);
const w0 = Je(y0), Dt = /* @__PURE__ */ new Map();
if (ue) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Dt.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function mi(e, t) {
  let n = [];
  return _e(t.arg) ? n = t.arg : Ke(t.arg) && n.push(t.arg), function(o, r) {
    const a = t.instance.popperRef, s = o.target, i = r?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), d = e === s, v = n.length && n.some((p) => p?.contains(s)) || n.length && n.includes(i), h = a && (a.contains(s) || a.contains(i));
    l || u || f || d || v || h || t.value(o, r);
  };
}
const _0 = {
  beforeMount(e, t) {
    Dt.has(e) || Dt.set(e, []), Dt.get(e).push({
      documentHandler: mi(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Dt.has(e) || Dt.set(e, []);
    const n = Dt.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), r = {
      documentHandler: mi(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Dt.delete(e);
  }
}, ct = {}, Xl = (e) => {
  if (!e)
    return { onClick: Tt, onMousedown: Tt, onMouseup: Tt };
  let t = !1, n = !1;
  return { onClick: (s) => {
    t && n && e(s), t = n = !1;
  }, onMousedown: (s) => {
    t = s.target === s.currentTarget;
  }, onMouseup: (s) => {
    n = s.target === s.currentTarget;
  } };
}, S0 = se({
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
}), C0 = {
  click: (e) => e instanceof MouseEvent
}, E0 = "overlay";
var T0 = V({
  name: "ElOverlay",
  props: S0,
  emits: C0,
  setup(e, { slots: t, emit: n }) {
    const o = ce(E0), r = (l) => {
      n("click", l);
    }, { onClick: a, onMousedown: s, onMouseup: i } = Xl(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? Q("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: a,
      onMousedown: s,
      onMouseup: i
    }, [U(t, "default")], Io.STYLE | Io.CLASS | Io.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Ci("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [U(t, "default")]);
  }
});
const O0 = T0, Jl = Symbol("dialogInjectionKey"), Ql = se({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: It
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
}), I0 = {
  close: () => !0
}, A0 = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const a = (u) => {
    const f = u.clientX, d = u.clientY, { offsetX: v, offsetY: h } = r, p = e.value.getBoundingClientRect(), g = p.left, b = p.top, m = p.width, C = p.height, O = document.documentElement.clientWidth, I = document.documentElement.clientHeight, S = -g + v, A = -b + h, E = O - g - m + v, F = I - b - C + h, T = (k) => {
      let R = v + k.clientX - f, j = h + k.clientY - d;
      o?.value || (R = Math.min(Math.max(R, S), E), j = Math.min(Math.max(j, A), F)), r = {
        offsetX: R,
        offsetY: j
      }, e.value && (e.value.style.transform = `translate(${Kt(R)}, ${Kt(j)})`);
    }, z = () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", z);
    };
    document.addEventListener("mousemove", T), document.addEventListener("mouseup", z);
  }, s = () => {
    t.value && e.value && t.value.addEventListener("mousedown", a);
  }, i = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", a);
  }, l = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return ge(() => {
    Wr(() => {
      n.value ? s() : i();
    });
  }), it(() => {
    i();
  }), {
    resetPosition: l
  };
}, $0 = (...e) => (t) => {
  e.forEach((n) => {
    pe(n) ? n(t) : n.value = t;
  });
}, P0 = V({ name: "ElDialogContent" }), R0 = /* @__PURE__ */ V({
  ...P0,
  props: Ql,
  emits: I0,
  setup(e, { expose: t }) {
    const n = e, { t: o } = ss(), { Close: r } = pl, { dialogRef: a, headerRef: s, bodyId: i, ns: l, style: u } = oe(Jl), { focusTrapRef: f } = oe(Il), d = y(() => [
      l.b(),
      l.is("fullscreen", n.fullscreen),
      l.is("draggable", n.draggable),
      l.is("align-center", n.alignCenter),
      { [l.m("center")]: n.center }
    ]), v = $0(f, a), h = y(() => n.draggable), p = y(() => n.overflow), { resetPosition: g } = A0(a, s, h, p);
    return t({
      resetPosition: g
    }), (b, m) => (_(), B("div", {
      ref: c(v),
      class: L(c(d)),
      style: ye(c(u)),
      tabindex: "-1"
    }, [
      $("header", {
        ref_key: "headerRef",
        ref: s,
        class: L([c(l).e("header"), b.headerClass, { "show-close": b.showClose }])
      }, [
        U(b.$slots, "header", {}, () => [
          $("span", {
            role: "heading",
            "aria-level": b.ariaLevel,
            class: L(c(l).e("title"))
          }, G(b.title), 11, ["aria-level"])
        ]),
        b.showClose ? (_(), B("button", {
          key: 0,
          "aria-label": c(o)("el.dialog.close"),
          class: L(c(l).e("headerbtn")),
          type: "button",
          onClick: (C) => b.$emit("close")
        }, [
          Q(c(Pe), {
            class: L(c(l).e("close"))
          }, {
            default: H(() => [
              (_(), K(xe(b.closeIcon || c(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : W("v-if", !0)
      ], 2),
      $("div", {
        id: c(i),
        class: L([c(l).e("body"), b.bodyClass])
      }, [
        U(b.$slots, "default")
      ], 10, ["id"]),
      b.$slots.footer ? (_(), B("footer", {
        key: 0,
        class: L([c(l).e("footer"), b.footerClass])
      }, [
        U(b.$slots, "footer")
      ], 2)) : W("v-if", !0)
    ], 6));
  }
});
var M0 = /* @__PURE__ */ ae(R0, [["__file", "dialog-content.vue"]]);
const L0 = se({
  ...Ql,
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
}), N0 = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [We]: (e) => an(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, x0 = (e, t = {}) => {
  jr(e) || tl("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || ce("popup"), o = y(() => n.bm("parent", "hidden"));
  if (!ue || Ua(document.body, o.value))
    return;
  let r = 0, a = !1, s = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || a && document && (document.body.style.width = s, yg(document.body, o.value));
    }, 200);
  };
  Z(e, (l) => {
    if (!l) {
      i();
      return;
    }
    a = !Ua(document.body, o.value), a && (s = document.body.style.width, bg(document.body, o.value)), r = _g(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, f = wg(document.body, "overflowY");
    r > 0 && (u || f === "scroll") && a && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Ti(() => i());
}, k0 = (e, t) => {
  var n;
  const r = Te().emit, { nextZIndex: a } = rs();
  let s = "";
  const i = ln(), l = ln(), u = P(!1), f = P(!1), d = P(!1), v = P((n = e.zIndex) != null ? n : a());
  let h, p;
  const g = Qo("namespace", Kn), b = y(() => {
    const J = {}, X = `--${g.value}-dialog`;
    return e.fullscreen || (e.top && (J[`${X}-margin-top`] = e.top), e.width && (J[`${X}-width`] = Kt(e.width))), J;
  }), m = y(() => e.alignCenter ? { display: "flex" } : {});
  function C() {
    r("opened");
  }
  function O() {
    r("closed"), r(We, !1), e.destroyOnClose && (d.value = !1);
  }
  function I() {
    r("close");
  }
  function S() {
    p?.(), h?.(), e.openDelay && e.openDelay > 0 ? { stop: h } = Bo(() => T(), e.openDelay) : T();
  }
  function A() {
    h?.(), p?.(), e.closeDelay && e.closeDelay > 0 ? { stop: p } = Bo(() => z(), e.closeDelay) : z();
  }
  function E() {
    function J(X) {
      X || (f.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose(J) : A();
  }
  function F() {
    e.closeOnClickModal && E();
  }
  function T() {
    ue && (u.value = !0);
  }
  function z() {
    u.value = !1;
  }
  function k() {
    r("openAutoFocus");
  }
  function R() {
    r("closeAutoFocus");
  }
  function j(J) {
    var X;
    ((X = J.detail) == null ? void 0 : X.focusReason) === "pointer" && J.preventDefault();
  }
  e.lockScroll && x0(u);
  function re() {
    e.closeOnPressEscape && E();
  }
  return Z(() => e.modelValue, (J) => {
    J ? (f.value = !1, S(), d.value = !0, v.value = Xi(e.zIndex) ? a() : v.value++, fe(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && A();
  }), Z(() => e.fullscreen, (J) => {
    t.value && (J ? (s = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = s);
  }), ge(() => {
    e.modelValue && (u.value = !0, d.value = !0, S());
  }), {
    afterEnter: C,
    afterLeave: O,
    beforeLeave: I,
    handleClose: E,
    onModalClick: F,
    close: A,
    doClose: z,
    onOpenAutoFocus: k,
    onCloseAutoFocus: R,
    onCloseRequested: re,
    onFocusoutPrevented: j,
    titleId: i,
    bodyId: l,
    closed: f,
    style: b,
    overlayDialogStyle: m,
    rendered: d,
    visible: u,
    zIndex: v
  };
}, D0 = V({
  name: "ElDialog",
  inheritAttrs: !1
}), B0 = /* @__PURE__ */ V({
  ...D0,
  props: L0,
  emits: N0,
  setup(e, { expose: t }) {
    const n = e, o = Kr();
    Gl({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, y(() => !!o.title));
    const r = ce("dialog"), a = P(), s = P(), i = P(), {
      visible: l,
      titleId: u,
      bodyId: f,
      style: d,
      overlayDialogStyle: v,
      rendered: h,
      zIndex: p,
      afterEnter: g,
      afterLeave: b,
      beforeLeave: m,
      handleClose: C,
      onModalClick: O,
      onOpenAutoFocus: I,
      onCloseAutoFocus: S,
      onCloseRequested: A,
      onFocusoutPrevented: E
    } = k0(n, a);
    qe(Jl, {
      dialogRef: a,
      headerRef: s,
      bodyId: f,
      ns: r,
      rendered: h,
      style: d
    });
    const F = Xl(O), T = y(() => n.draggable && !n.fullscreen);
    return t({
      visible: l,
      dialogContentRef: i,
      resetPosition: () => {
        var k;
        (k = i.value) == null || k.resetPosition();
      }
    }), (k, R) => (_(), K(c(jl), {
      to: k.appendTo,
      disabled: k.appendTo !== "body" ? !1 : !k.appendToBody
    }, {
      default: H(() => [
        Q(cn, {
          name: "dialog-fade",
          onAfterEnter: c(g),
          onAfterLeave: c(b),
          onBeforeLeave: c(m),
          persisted: ""
        }, {
          default: H(() => [
            Re(Q(c(O0), {
              "custom-mask-event": "",
              mask: k.modal,
              "overlay-class": k.modalClass,
              "z-index": c(p)
            }, {
              default: H(() => [
                $("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": k.title || void 0,
                  "aria-labelledby": k.title ? void 0 : c(u),
                  "aria-describedby": c(f),
                  class: L(`${c(r).namespace.value}-overlay-dialog`),
                  style: ye(c(v)),
                  onClick: c(F).onClick,
                  onMousedown: c(F).onMousedown,
                  onMouseup: c(F).onMouseup
                }, [
                  Q(c($l), {
                    loop: "",
                    trapped: c(l),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: c(I),
                    onFocusAfterReleased: c(S),
                    onFocusoutPrevented: c(E),
                    onReleaseRequested: c(A)
                  }, {
                    default: H(() => [
                      c(h) ? (_(), K(M0, Wt({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: i
                      }, k.$attrs, {
                        center: k.center,
                        "align-center": k.alignCenter,
                        "close-icon": k.closeIcon,
                        draggable: c(T),
                        overflow: k.overflow,
                        fullscreen: k.fullscreen,
                        "header-class": k.headerClass,
                        "body-class": k.bodyClass,
                        "footer-class": k.footerClass,
                        "show-close": k.showClose,
                        title: k.title,
                        "aria-level": k.headerAriaLevel,
                        onClose: c(C)
                      }), Yu({
                        header: H(() => [
                          k.$slots.title ? U(k.$slots, "title", { key: 1 }) : U(k.$slots, "header", {
                            key: 0,
                            close: c(C),
                            titleId: c(u),
                            titleClass: c(r).e("title")
                          })
                        ]),
                        default: H(() => [
                          U(k.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        k.$slots.footer ? {
                          name: "footer",
                          fn: H(() => [
                            U(k.$slots, "footer")
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
              [st, c(l)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var F0 = /* @__PURE__ */ ae(B0, [["__file", "dialog.vue"]]);
const z0 = Je(F0);
function V0() {
  const e = on(), t = P(0), n = 11, o = y(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return nt(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const eu = Symbol("ElSelectGroup"), sr = Symbol("ElSelect");
function H0(e, t) {
  const n = oe(sr), o = oe(eu, { disabled: !1 }), r = y(() => f(zt(n.props.modelValue), e.value)), a = y(() => {
    var h;
    if (n.props.multiple) {
      const p = zt((h = n.props.modelValue) != null ? h : []);
      return !r.value && p.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = y(() => e.label || (Ee(e.value) ? "" : e.value)), i = y(() => e.value || e.label || ""), l = y(() => e.disabled || t.groupDisabled || a.value), u = Te(), f = (h = [], p) => {
    if (Ee(e.value)) {
      const g = n.props.valueKey;
      return h && h.some((b) => Zu(Vt(b, g)) === Vt(p, g));
    } else
      return h && h.includes(p);
  }, d = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, v = (h) => {
    const p = new RegExp(g0(h), "i");
    t.visible = p.test(s.value) || e.created;
  };
  return Z(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Z(() => e.value, (h, p) => {
    const { remote: g, valueKey: b } = n.props;
    if ((g ? h !== p : !qn(h, p)) && (n.onOptionDestroy(p, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (b && Ee(h) && Ee(p) && h[b] === p[b])
        return;
      n.setSelected();
    }
  }), Z(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: r,
    isDisabled: l,
    hoverItem: d,
    updateOption: v
  };
}
const W0 = V({
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
      t.is("selected", c(s)),
      t.is("hovering", c(v))
    ]), r = jt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: f
    } = H0(e, r), { visible: d, hover: v } = Gr(r), h = Te().proxy;
    l.onOptionCreate(h), it(() => {
      const g = h.value, { selected: b } = l.states, m = b.some((C) => C.value === h.value);
      fe(() => {
        l.states.cachedOptions.get(g) === h && !m && l.states.cachedOptions.delete(g);
      }), l.onOptionDestroy(g, h);
    });
    function p() {
      i.value || l.handleOptionSelect(h);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: f,
      visible: d,
      hover: v,
      selectOptionClick: p,
      states: r
    };
  }
});
function j0(e, t, n, o, r, a) {
  return Re((_(), B("li", {
    id: e.id,
    class: L(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ae(e.selectOptionClick, ["stop"])
  }, [
    U(e.$slots, "default", {}, () => [
      $("span", null, G(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [st, e.visible]
  ]);
}
var Es = /* @__PURE__ */ ae(W0, [["render", j0], ["__file", "option.vue"]]);
const U0 = V({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = oe(sr), t = ce("select"), n = y(() => e.props.popperClass), o = y(() => e.props.multiple), r = y(() => e.props.fitInputWidth), a = P("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return ge(() => {
      s(), nt(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function K0(e, t, n, o, r, a) {
  return _(), B("div", {
    class: L([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: ye({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), B("div", {
      key: 0,
      class: L(e.ns.be("dropdown", "header"))
    }, [
      U(e.$slots, "header")
    ], 2)) : W("v-if", !0),
    U(e.$slots, "default"),
    e.$slots.footer ? (_(), B("div", {
      key: 1,
      class: L(e.ns.be("dropdown", "footer"))
    }, [
      U(e.$slots, "footer")
    ], 2)) : W("v-if", !0)
  ], 6);
}
var G0 = /* @__PURE__ */ ae(U0, [["render", K0], ["__file", "select-dropdown.vue"]]);
const q0 = (e, t) => {
  const { t: n } = ss(), o = ln(), r = ce("select"), a = ce("input"), s = jt({
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
  }), i = P(null), l = P(null), u = P(null), f = P(null), d = P(null), v = P(null), h = P(null), p = P(null), g = P(null), b = P(null), m = P(null), {
    isComposing: C,
    handleCompositionStart: O,
    handleCompositionUpdate: I,
    handleCompositionEnd: S
  } = yl({
    afterComposition: (w) => Lt(w)
  }), { wrapperRef: A, isFocused: E, handleBlur: F } = bl(d, {
    beforeFocus() {
      return X.value;
    },
    afterFocus() {
      e.automaticDropdown && !T.value && (T.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(w) {
      var D, ee;
      return ((D = u.value) == null ? void 0 : D.isFocusInsideContent(w)) || ((ee = f.value) == null ? void 0 : ee.isFocusInsideContent(w));
    },
    afterBlur() {
      T.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), T = P(!1), z = P(), { form: k, formItem: R } = er(), { inputId: j } = us(e, {
    formItemContext: R
  }), { valueOnClear: re, isEmptyValue: J } = vg(e), X = y(() => e.disabled || k?.disabled), M = y(() => _e(e.modelValue) ? e.modelValue.length > 0 : !J(e.modelValue)), Y = y(() => {
    var w;
    return (w = k?.statusIcon) != null ? w : !1;
  }), ne = y(() => e.clearable && !X.value && s.inputHovering && M.value), he = y(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Qe = y(() => r.is("reverse", he.value && T.value)), Fe = y(() => R?.validateState || ""), lt = y(() => vl[Fe.value]), Oe = y(() => e.remote ? 300 : 0), de = y(() => e.remote && !s.inputValue && s.options.size === 0), Me = y(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ie.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ie = y(() => ie.value.filter((w) => w.visible).length), ie = y(() => {
    const w = Array.from(s.options.values()), D = [];
    return s.optionValues.forEach((ee) => {
      const me = w.findIndex((ze) => ze.value === ee);
      me > -1 && D.push(w[me]);
    }), D.length >= w.length ? D : w;
  }), et = y(() => Array.from(s.cachedOptions.values())), mt = y(() => {
    const w = ie.value.filter((D) => !D.created).some((D) => D.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !w;
  }), bt = () => {
    e.filterable && pe(e.filterMethod) || e.filterable && e.remote && pe(e.remoteMethod) || ie.value.forEach((w) => {
      var D;
      (D = w.updateOption) == null || D.call(w, s.inputValue);
    });
  }, qt = ao(), Yt = y(() => ["small"].includes(qt.value) ? "small" : "default"), pn = y({
    get() {
      return T.value && !de.value;
    },
    set(w) {
      T.value = w;
    }
  }), vn = y(() => {
    if (e.multiple && !En(e.modelValue))
      return zt(e.modelValue).length === 0 && !s.inputValue;
    const w = _e(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || En(w) ? !s.inputValue : !0;
  }), gn = y(() => {
    var w;
    const D = (w = e.placeholder) != null ? w : n("el.select.placeholder");
    return e.multiple || !M.value ? D : s.selectedLabel;
  }), hn = y(() => $r ? null : "mouseenter");
  Z(() => e.modelValue, (w, D) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", Rt("")), Le(), !qn(w, D) && e.validateEvent && R?.validate("change").catch((ee) => we(ee));
  }, {
    flush: "post",
    deep: !0
  }), Z(() => T.value, (w) => {
    w ? Rt(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", w);
  }), Z(() => s.options.entries(), () => {
    ue && (Le(), e.defaultFirstOption && (e.filterable || e.remote) && Ie.value && mn());
  }, {
    flush: "post"
  }), Z([() => s.hoveringIndex, ie], ([w]) => {
    ve(w) && w > -1 ? z.value = ie.value[w] || {} : z.value = {}, ie.value.forEach((D) => {
      D.hover = z.value === D;
    });
  }), Wr(() => {
    s.isBeforeHide || bt();
  });
  const Rt = (w) => {
    s.previousQuery === w || C.value || (s.previousQuery = w, e.filterable && pe(e.filterMethod) ? e.filterMethod(w) : e.filterable && e.remote && pe(e.remoteMethod) && e.remoteMethod(w), e.defaultFirstOption && (e.filterable || e.remote) && Ie.value ? fe(mn) : fe(bn));
  }, mn = () => {
    const w = ie.value.filter((ze) => ze.visible && !ze.disabled && !ze.states.groupDisabled), D = w.find((ze) => ze.created), ee = w[0], me = ie.value.map((ze) => ze.value);
    s.hoveringIndex = As(me, D || ee);
  }, Le = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const D = _e(e.modelValue) ? e.modelValue[0] : e.modelValue, ee = ut(D);
      s.selectedLabel = ee.currentLabel, s.selected = [ee];
      return;
    }
    const w = [];
    En(e.modelValue) || zt(e.modelValue).forEach((D) => {
      w.push(ut(D));
    }), s.selected = w;
  }, ut = (w) => {
    let D;
    const ee = Xu(w);
    for (let yn = s.cachedOptions.size - 1; yn >= 0; yn--) {
      const Nt = et.value[yn];
      if (ee ? Vt(Nt.value, e.valueKey) === Vt(w, e.valueKey) : Nt.value === w) {
        D = {
          value: w,
          currentLabel: Nt.currentLabel,
          get isDisabled() {
            return Nt.isDisabled;
          }
        };
        break;
      }
    }
    if (D)
      return D;
    const me = ee ? w.label : w ?? "";
    return {
      value: w,
      currentLabel: me
    };
  }, bn = () => {
    s.hoveringIndex = ie.value.findIndex((w) => s.selected.some((D) => po(D) === po(w)));
  }, Zt = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, x = () => {
    s.collapseItemWidth = b.value.getBoundingClientRect().width;
  }, te = () => {
    var w, D;
    (D = (w = u.value) == null ? void 0 : w.updatePopper) == null || D.call(w);
  }, Ue = () => {
    var w, D;
    (D = (w = f.value) == null ? void 0 : w.updatePopper) == null || D.call(w);
  }, Mt = () => {
    s.inputValue.length > 0 && !T.value && (T.value = !0), Rt(s.inputValue);
  }, Lt = (w) => {
    if (s.inputValue = w.target.value, e.remote)
      Ts();
    else
      return Mt();
  }, Ts = Tv(() => {
    Mt();
  }, Oe.value), Dn = (w) => {
    qn(e.modelValue, w) || t(In, w);
  }, su = (w) => Ov(w, (D) => {
    const ee = s.cachedOptions.get(D);
    return ee && !ee.disabled && !ee.states.groupDisabled;
  }), au = (w) => {
    if (e.multiple && w.code !== ft.delete && w.target.value.length <= 0) {
      const D = zt(e.modelValue).slice(), ee = su(D);
      if (ee < 0)
        return;
      const me = D[ee];
      D.splice(ee, 1), t(We, D), Dn(D), t("remove-tag", me);
    }
  }, iu = (w, D) => {
    const ee = s.selected.indexOf(D);
    if (ee > -1 && !X.value) {
      const me = zt(e.modelValue).slice();
      me.splice(ee, 1), t(We, me), Dn(me), t("remove-tag", D.value);
    }
    w.stopPropagation(), fo();
  }, Os = (w) => {
    w.stopPropagation();
    const D = e.multiple ? [] : re.value;
    if (e.multiple)
      for (const ee of s.selected)
        ee.isDisabled && D.push(ee.value);
    t(We, D), Dn(D), s.hoveringIndex = -1, T.value = !1, t("clear"), fo();
  }, Is = (w) => {
    var D;
    if (e.multiple) {
      const ee = zt((D = e.modelValue) != null ? D : []).slice(), me = As(ee, w);
      me > -1 ? ee.splice(me, 1) : (e.multipleLimit <= 0 || ee.length < e.multipleLimit) && ee.push(w.value), t(We, ee), Dn(ee), w.created && Rt(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(We, w.value), Dn(w.value), T.value = !1;
    fo(), !T.value && fe(() => {
      co(w);
    });
  }, As = (w = [], D) => En(D) ? -1 : Ee(D.value) ? w.findIndex((ee) => qn(Vt(ee, e.valueKey), po(D))) : w.indexOf(D.value), co = (w) => {
    var D, ee, me, ze, yn;
    const Nt = _e(w) ? w[0] : w;
    let vo = null;
    if (Nt?.value) {
      const Bn = ie.value.filter((Eu) => Eu.value === Nt.value);
      Bn.length > 0 && (vo = Bn[0].$el);
    }
    if (u.value && vo) {
      const Bn = (ze = (me = (ee = (D = u.value) == null ? void 0 : D.popperRef) == null ? void 0 : ee.contentRef) == null ? void 0 : me.querySelector) == null ? void 0 : ze.call(me, `.${r.be("dropdown", "wrap")}`);
      Bn && Sg(Bn, vo);
    }
    (yn = m.value) == null || yn.handleScroll();
  }, lu = (w) => {
    s.options.set(w.value, w), s.cachedOptions.set(w.value, w);
  }, uu = (w, D) => {
    s.options.get(w) === D && s.options.delete(w);
  }, cu = y(() => {
    var w, D;
    return (D = (w = u.value) == null ? void 0 : w.popperRef) == null ? void 0 : D.contentRef;
  }), du = () => {
    s.isBeforeHide = !1, fe(() => {
      var w;
      (w = m.value) == null || w.update(), co(s.selected);
    });
  }, fo = () => {
    var w;
    (w = d.value) == null || w.focus();
  }, fu = () => {
    var w;
    if (T.value) {
      T.value = !1, fe(() => {
        var D;
        return (D = d.value) == null ? void 0 : D.blur();
      });
      return;
    }
    (w = d.value) == null || w.blur();
  }, pu = (w) => {
    Os(w);
  }, vu = (w) => {
    if (T.value = !1, E.value) {
      const D = new FocusEvent("focus", w);
      fe(() => F(D));
    }
  }, gu = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : T.value = !1;
  }, $s = () => {
    X.value || ($r && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : T.value = !T.value);
  }, hu = () => {
    if (!T.value)
      $s();
    else {
      const w = ie.value[s.hoveringIndex];
      w && !w.isDisabled && Is(w);
    }
  }, po = (w) => Ee(w.value) ? Vt(w.value, e.valueKey) : w.value, mu = y(() => ie.value.filter((w) => w.visible).every((w) => w.isDisabled)), bu = y(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), yu = y(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ps = (w) => {
    if (!T.value) {
      T.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ie.value === 0 || C.value) && !mu.value) {
      w === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : w === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const D = ie.value[s.hoveringIndex];
      (D.isDisabled || !D.visible) && Ps(w), fe(() => co(z.value));
    }
  }, wu = () => {
    if (!l.value)
      return 0;
    const w = window.getComputedStyle(l.value);
    return Number.parseFloat(w.gap || "6px");
  }, _u = y(() => {
    const w = wu();
    return { maxWidth: `${b.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - w : s.selectionWidth}px` };
  }), Su = y(() => ({ maxWidth: `${s.selectionWidth}px` })), Cu = (w) => {
    t("popup-scroll", w);
  };
  return nt(l, Zt), nt(p, te), nt(A, te), nt(g, Ue), nt(b, x), ge(() => {
    Le();
  }), {
    inputId: j,
    contentId: o,
    nsSelect: r,
    nsInput: a,
    states: s,
    isFocused: E,
    expanded: T,
    optionsArray: ie,
    hoverOption: z,
    selectSize: qt,
    filteredOptionsCount: Ie,
    updateTooltip: te,
    updateTagTooltip: Ue,
    debouncedOnInputChange: Ts,
    onInput: Lt,
    deletePrevTag: au,
    deleteTag: iu,
    deleteSelected: Os,
    handleOptionSelect: Is,
    scrollToOption: co,
    hasModelValue: M,
    shouldShowPlaceholder: vn,
    currentPlaceholder: gn,
    mouseEnterEventName: hn,
    needStatusIcon: Y,
    showClose: ne,
    iconComponent: he,
    iconReverse: Qe,
    validateState: Fe,
    validateIcon: lt,
    showNewOption: mt,
    updateOptions: bt,
    collapseTagSize: Yt,
    setSelected: Le,
    selectDisabled: X,
    emptyText: Me,
    handleCompositionStart: O,
    handleCompositionUpdate: I,
    handleCompositionEnd: S,
    onOptionCreate: lu,
    onOptionDestroy: uu,
    handleMenuEnter: du,
    focus: fo,
    blur: fu,
    handleClearClick: pu,
    handleClickOutside: vu,
    handleEsc: gu,
    toggleMenu: $s,
    selectOption: hu,
    getValueKey: po,
    navigateOptions: Ps,
    dropdownMenuVisible: pn,
    showTagList: bu,
    collapseTagList: yu,
    popupScroll: Cu,
    tagStyle: _u,
    collapseTagStyle: Su,
    popperRef: cu,
    inputRef: d,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: v,
    suffixRef: h,
    selectRef: i,
    wrapperRef: A,
    selectionRef: l,
    scrollbarRef: m,
    menuRef: p,
    tagMenuRef: g,
    collapseItemRef: b
  };
};
var Y0 = V({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = oe(sr);
    let o = [];
    return () => {
      var r, a;
      const s = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function l(u) {
        _e(u) && u.forEach((f) => {
          var d, v, h, p;
          const g = (d = f?.type || {}) == null ? void 0 : d.name;
          g === "ElOptionGroup" ? l(!be(f.children) && !_e(f.children) && pe((v = f.children) == null ? void 0 : v.default) ? (h = f.children) == null ? void 0 : h.default() : f.children) : g === "ElOption" ? i.push((p = f.props) == null ? void 0 : p.value) : _e(f.children) && l(f.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), qn(i, o) || (o = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Z0 = se({
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
  size: Jo,
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
  teleported: Cs.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: It,
    default: is
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: It,
    default: Ag
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
    values: or,
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
  ...pg,
  ...kn(["ariaLabel"])
}), bi = "ElSelect", X0 = V({
  name: bi,
  componentName: bi,
  components: {
    ElSelectMenu: G0,
    ElOption: Es,
    ElOptions: Y0,
    ElTag: w0,
    ElScrollbar: Ch,
    ElTooltip: Fb,
    ElIcon: Pe
  },
  directives: { ClickOutside: _0 },
  props: Z0,
  emits: [
    We,
    In,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = y(() => {
      const { modelValue: l, multiple: u } = e, f = u ? [] : void 0;
      return _e(l) ? u ? l : f : u ? f : l;
    }), o = jt({
      ...Gr(e),
      modelValue: n
    }), r = q0(o, t), { calculatorRef: a, inputStyle: s } = V0();
    qe(sr, jt({
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
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function J0(e, t, n, o, r, a) {
  const s = Xt("el-tag"), i = Xt("el-tooltip"), l = Xt("el-icon"), u = Xt("el-option"), f = Xt("el-options"), d = Xt("el-scrollbar"), v = Xt("el-select-menu"), h = Ju("click-outside");
  return Re((_(), B("div", {
    ref: "selectRef",
    class: L([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Qu(e.mouseEnterEventName)]: (p) => e.states.inputHovering = !0,
    onMouseleave: (p) => e.states.inputHovering = !1
  }, [
    Q(i, {
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
      onHide: (p) => e.states.isBeforeHide = !1
    }, {
      default: H(() => {
        var p;
        return [
          $("div", {
            ref: "wrapperRef",
            class: L([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ae(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (_(), B("div", {
              key: 0,
              ref: "prefixRef",
              class: L(e.nsSelect.e("prefix"))
            }, [
              U(e.$slots, "prefix")
            ], 2)) : W("v-if", !0),
            $("div", {
              ref: "selectionRef",
              class: L([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? U(e.$slots, "tag", { key: 0 }, () => [
                (_(!0), B(ke, null, Ao(e.showTagList, (g) => (_(), B("div", {
                  key: e.getValueKey(g),
                  class: L(e.nsSelect.e("selected-item"))
                }, [
                  Q(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: ye(e.tagStyle),
                    onClose: (b) => e.deleteTag(b, g)
                  }, {
                    default: H(() => [
                      $("span", {
                        class: L(e.nsSelect.e("tags-text"))
                      }, [
                        U(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          dt(G(g.currentLabel), 1)
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
                    $("div", {
                      ref: "collapseItemRef",
                      class: L(e.nsSelect.e("selected-item"))
                    }, [
                      Q(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: ye(e.collapseTagStyle)
                      }, {
                        default: H(() => [
                          $("span", {
                            class: L(e.nsSelect.e("tags-text"))
                          }, " + " + G(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: H(() => [
                    $("div", {
                      ref: "tagMenuRef",
                      class: L(e.nsSelect.e("selection"))
                    }, [
                      (_(!0), B(ke, null, Ao(e.collapseTagList, (g) => (_(), B("div", {
                        key: e.getValueKey(g),
                        class: L(e.nsSelect.e("selected-item"))
                      }, [
                        Q(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (b) => e.deleteTag(b, g)
                        }, {
                          default: H(() => [
                            $("span", {
                              class: L(e.nsSelect.e("tags-text"))
                            }, [
                              U(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                dt(G(g.currentLabel), 1)
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
              $("div", {
                class: L([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Re($("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: L([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: ye(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((p = e.hoverOption) == null ? void 0 : p.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    Vn(Ae((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Vn(Ae((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Vn(Ae(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Vn(Ae(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Vn(Ae(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ae(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Oc, e.states.inputValue]
                ]),
                e.filterable ? (_(), B("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: L(e.nsSelect.e("input-calculator")),
                  textContent: G(e.states.inputValue)
                }, null, 10, ["textContent"])) : W("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (_(), B("div", {
                key: 1,
                class: L([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? U(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  $("span", null, G(e.currentPlaceholder), 1)
                ]) : (_(), B("span", { key: 1 }, G(e.currentPlaceholder), 1))
              ], 2)) : W("v-if", !0)
            ], 2),
            $("div", {
              ref: "suffixRef",
              class: L(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (_(), K(l, {
                key: 0,
                class: L([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: H(() => [
                  (_(), K(xe(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0),
              e.showClose && e.clearIcon ? (_(), K(l, {
                key: 1,
                class: L([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: H(() => [
                  (_(), K(xe(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : W("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (_(), K(l, {
                key: 2,
                class: L([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: H(() => [
                  (_(), K(xe(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: H(() => [
        Q(v, { ref: "menuRef" }, {
          default: H(() => [
            e.$slots.header ? (_(), B("div", {
              key: 0,
              class: L(e.nsSelect.be("dropdown", "header")),
              onClick: Ae(() => {
              }, ["stop"])
            }, [
              U(e.$slots, "header")
            ], 10, ["onClick"])) : W("v-if", !0),
            Re(Q(d, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: L([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
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
                Q(f, null, {
                  default: H(() => [
                    U(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [st, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (_(), B("div", {
              key: 1,
              class: L(e.nsSelect.be("dropdown", "loading"))
            }, [
              U(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (_(), B("div", {
              key: 2,
              class: L(e.nsSelect.be("dropdown", "empty"))
            }, [
              U(e.$slots, "empty", {}, () => [
                $("span", null, G(e.emptyText), 1)
              ])
            ], 2)) : W("v-if", !0),
            e.$slots.footer ? (_(), B("div", {
              key: 3,
              class: L(e.nsSelect.be("dropdown", "footer")),
              onClick: Ae(() => {
              }, ["stop"])
            }, [
              U(e.$slots, "footer")
            ], 10, ["onClick"])) : W("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [h, e.handleClickOutside, e.popperRef]
  ]);
}
var Q0 = /* @__PURE__ */ ae(X0, [["render", J0], ["__file", "select.vue"]]);
const ey = V({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = ce("select"), n = P(null), o = Te(), r = P([]);
    qe(eu, jt({
      ...Gr(e)
    }));
    const a = y(() => r.value.some((u) => u.visible === !0)), s = (u) => {
      var f, d;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((d = u.component) != null && d.proxy);
    }, i = (u) => {
      const f = zt(u), d = [];
      return f.forEach((v) => {
        var h, p;
        s(v) ? d.push(v.component.proxy) : (h = v.children) != null && h.length ? d.push(...i(v.children)) : (p = v.component) != null && p.subTree && d.push(...i(v.component.subTree));
      }), d;
    }, l = () => {
      r.value = i(o.subTree);
    };
    return ge(() => {
      l();
    }), Jv(n, l, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: a,
      ns: t
    };
  }
});
function ty(e, t, n, o, r, a) {
  return Re((_(), B("ul", {
    ref: "groupRef",
    class: L(e.ns.be("group", "wrap"))
  }, [
    $("li", {
      class: L(e.ns.be("group", "title"))
    }, G(e.label), 3),
    $("li", null, [
      $("ul", {
        class: L(e.ns.b("group"))
      }, [
        U(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [st, e.visible]
  ]);
}
var tu = /* @__PURE__ */ ae(ey, [["render", ty], ["__file", "option-group.vue"]]);
const ny = Je(Q0, {
  Option: Es,
  OptionGroup: tu
}), oy = as(Es);
as(tu);
const ry = se({
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
  size: Jo,
  disabled: Boolean,
  validateEvent: {
    type: Boolean,
    default: !0
  },
  id: String,
  name: String,
  ...kn(["ariaLabel"])
}), sy = {
  [We]: (e) => be(e) || ve(e) || an(e),
  [In]: (e) => be(e) || ve(e) || an(e)
}, ay = V({
  name: "ElSegmented"
}), iy = /* @__PURE__ */ V({
  ...ay,
  props: ry,
  emits: sy,
  setup(e, { emit: t }) {
    const n = e, o = ce("segmented"), r = ln(), a = ao(), s = tr(), { formItem: i } = er(), { inputId: l, isLabeledByFormItem: u } = us(n, {
      formItemContext: i
    }), f = P(null), d = Uv(), v = jt({
      isInit: !1,
      width: 0,
      height: 0,
      translateX: 0,
      translateY: 0,
      focusVisible: !1
    }), h = (T) => {
      const z = p(T);
      t(We, z), t(In, z);
    }, p = (T) => Ee(T) ? T.value : T, g = (T) => Ee(T) ? T.label : T, b = (T) => !!(s.value || Ee(T) && T.disabled), m = (T) => n.modelValue === p(T), C = (T) => n.options.find((z) => p(z) === T), O = (T) => [
      o.e("item"),
      o.is("selected", m(T)),
      o.is("disabled", b(T))
    ], I = () => {
      if (!f.value)
        return;
      const T = f.value.querySelector(".is-selected"), z = f.value.querySelector(".is-selected input");
      if (!T || !z) {
        v.width = 0, v.height = 0, v.translateX = 0, v.translateY = 0, v.focusVisible = !1;
        return;
      }
      const k = T.getBoundingClientRect();
      v.isInit = !0, n.direction === "vertical" ? (v.height = k.height, v.translateY = T.offsetTop) : (v.width = k.width, v.translateX = T.offsetLeft);
      try {
        v.focusVisible = z.matches(":focus-visible");
      } catch {
      }
    }, S = y(() => [
      o.b(),
      o.m(a.value),
      o.is("block", n.block)
    ]), A = y(() => ({
      width: n.direction === "vertical" ? "100%" : `${v.width}px`,
      height: n.direction === "vertical" ? `${v.height}px` : "100%",
      transform: n.direction === "vertical" ? `translateY(${v.translateY}px)` : `translateX(${v.translateX}px)`,
      display: v.isInit ? "block" : "none"
    })), E = y(() => [
      o.e("item-selected"),
      o.is("disabled", b(C(n.modelValue))),
      o.is("focus-visible", v.focusVisible)
    ]), F = y(() => n.name || r.value);
    return nt(f, I), Z(d, I), Z(() => n.modelValue, () => {
      var T;
      I(), n.validateEvent && ((T = i?.validate) == null || T.call(i, "change").catch((z) => we(z)));
    }, {
      flush: "post"
    }), (T, z) => T.options.length ? (_(), B("div", {
      key: 0,
      id: c(l),
      ref_key: "segmentedRef",
      ref: f,
      class: L(c(S)),
      role: "radiogroup",
      "aria-label": c(u) ? void 0 : T.ariaLabel || "segmented",
      "aria-labelledby": c(u) ? c(i).labelId : void 0
    }, [
      $("div", {
        class: L([c(o).e("group"), c(o).m(n.direction)])
      }, [
        $("div", {
          style: ye(c(A)),
          class: L(c(E))
        }, null, 6),
        (_(!0), B(ke, null, Ao(T.options, (k, R) => (_(), B("label", {
          key: R,
          class: L(O(k))
        }, [
          $("input", {
            class: L(c(o).e("item-input")),
            type: "radio",
            name: c(F),
            disabled: b(k),
            checked: m(k),
            onChange: (j) => h(k)
          }, null, 42, ["name", "disabled", "checked", "onChange"]),
          $("div", {
            class: L(c(o).e("item-label"))
          }, [
            U(T.$slots, "default", { item: k }, () => [
              dt(G(g(k)), 1)
            ])
          ], 2)
        ], 2))), 128))
      ], 2)
    ], 10, ["id", "aria-label", "aria-labelledby"])) : W("v-if", !0);
  }
});
var ly = /* @__PURE__ */ ae(iy, [["__file", "segmented.vue"]]);
const uy = Je(ly), nu = ["success", "info", "warning", "error"], Ce = gl({
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
}), cy = se({
  customClass: {
    type: String,
    default: Ce.customClass
  },
  center: {
    type: Boolean,
    default: Ce.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ce.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ce.duration
  },
  icon: {
    type: It,
    default: Ce.icon
  },
  id: {
    type: String,
    default: Ce.id
  },
  message: {
    type: q([
      String,
      Object,
      Function
    ]),
    default: Ce.message
  },
  onClose: {
    type: q(Function),
    default: Ce.onClose
  },
  showClose: {
    type: Boolean,
    default: Ce.showClose
  },
  type: {
    type: String,
    values: nu,
    default: Ce.type
  },
  plain: {
    type: Boolean,
    default: Ce.plain
  },
  offset: {
    type: Number,
    default: Ce.offset
  },
  zIndex: {
    type: Number,
    default: Ce.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ce.grouping
  },
  repeatNum: {
    type: Number,
    default: Ce.repeatNum
  }
}), dy = {
  destroy: () => !0
}, rt = ec([]), fy = (e) => {
  const t = rt.findIndex((r) => r.id === e), n = rt[t];
  let o;
  return t > 0 && (o = rt[t - 1]), { current: n, prev: o };
}, py = (e) => {
  const { prev: t } = fy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, vy = (e, t) => rt.findIndex((o) => o.id === e) > 0 ? 16 : t, gy = V({
  name: "ElMessage"
}), hy = /* @__PURE__ */ V({
  ...gy,
  props: cy,
  emits: dy,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Kg, { ns: r, zIndex: a } = ul("message"), { currentZIndex: s, nextZIndex: i } = a, l = P(), u = P(!1), f = P(0);
    let d;
    const v = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = y(() => {
      const E = n.type;
      return { [r.bm("icon", E)]: E && Vo[E] };
    }), p = y(() => n.icon || Vo[n.type] || ""), g = y(() => py(n.id)), b = y(() => vy(n.id, n.offset) + g.value), m = y(() => f.value + b.value), C = y(() => ({
      top: `${b.value}px`,
      zIndex: s.value
    }));
    function O() {
      n.duration !== 0 && ({ stop: d } = Bo(() => {
        S();
      }, n.duration));
    }
    function I() {
      d?.();
    }
    function S() {
      u.value = !1;
    }
    function A({ code: E }) {
      E === ft.esc && S();
    }
    return ge(() => {
      O(), i(), u.value = !0;
    }), Z(() => n.repeatNum, () => {
      I(), O();
    }), $e(document, "keydown", A), nt(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: m,
      close: S
    }), (E, F) => (_(), K(cn, {
      name: c(r).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (T) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: H(() => [
        Re($("div", {
          id: E.id,
          ref_key: "messageRef",
          ref: l,
          class: L([
            c(r).b(),
            { [c(r).m(E.type)]: E.type },
            c(r).is("center", E.center),
            c(r).is("closable", E.showClose),
            c(r).is("plain", E.plain),
            E.customClass
          ]),
          style: ye(c(C)),
          role: "alert",
          onMouseenter: I,
          onMouseleave: O
        }, [
          E.repeatNum > 1 ? (_(), K(c(jb), {
            key: 0,
            value: E.repeatNum,
            type: c(v),
            class: L(c(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : W("v-if", !0),
          c(p) ? (_(), K(c(Pe), {
            key: 1,
            class: L([c(r).e("icon"), c(h)])
          }, {
            default: H(() => [
              (_(), K(xe(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          U(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (_(), B(ke, { key: 1 }, [
              W(" Caution here, message could've been compromised, never use user's input as message "),
              $("p", {
                class: L(c(r).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), B("p", {
              key: 0,
              class: L(c(r).e("content"))
            }, G(E.message), 3))
          ]),
          E.showClose ? (_(), K(c(Pe), {
            key: 2,
            class: L(c(r).e("closeBtn")),
            onClick: Ae(S, ["stop"])
          }, {
            default: H(() => [
              Q(c(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 46, ["id"]), [
          [st, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var my = /* @__PURE__ */ ae(hy, [["__file", "message.vue"]]);
let by = 1;
const ou = (e) => {
  const t = !e || be(e) || Xn(e) || pe(e) ? { message: e } : e, n = {
    ...Ce,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (be(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Ke(o) || (we("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return an(ct.grouping) && !n.grouping && (n.grouping = ct.grouping), ve(ct.duration) && n.duration === 3e3 && (n.duration = ct.duration), ve(ct.offset) && n.offset === 16 && (n.offset = ct.offset), an(ct.showClose) && !n.showClose && (n.showClose = ct.showClose), n;
}, yy = (e) => {
  const t = rt.indexOf(e);
  if (t === -1)
    return;
  rt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, wy = ({ appendTo: e, ...t }, n) => {
  const o = `message_${by++}`, r = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), yy(f);
    },
    onDestroy: () => {
      Mo(null, a);
    }
  }, i = Q(my, s, pe(s.message) || Xn(s.message) ? {
    default: pe(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Mn._context, Mo(i, a), e.appendChild(a.firstElementChild);
  const l = i.component, f = {
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
  return f;
}, Mn = (e = {}, t) => {
  if (!ue)
    return { close: () => {
    } };
  const n = ou(e);
  if (n.grouping && rt.length) {
    const r = rt.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (ve(ct.max) && rt.length >= ct.max)
    return { close: () => {
    } };
  const o = wy(n, t);
  return rt.push(o), o.handler;
};
nu.forEach((e) => {
  Mn[e] = (t = {}, n) => {
    const o = ou(t);
    return Mn({ ...o, type: e }, n);
  };
});
function _y(e) {
  for (const t of rt)
    (!e || e === t.props.type) && t.handler.close();
}
Mn.closeAll = _y;
Mn._context = null;
const Sy = dl(Mn, "$message"), ru = [
  "success",
  "info",
  "warning",
  "error"
], Cy = se({
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
    type: It
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
    values: [...ru, ""],
    default: ""
  },
  zIndex: Number
}), Ey = {
  destroy: () => !0
}, Ty = V({
  name: "ElNotification"
}), Oy = /* @__PURE__ */ V({
  ...Ty,
  props: Cy,
  emits: Ey,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = ul("notification"), { nextZIndex: a, currentZIndex: s } = r, { Close: i } = pl, l = P(!1);
    let u;
    const f = y(() => {
      const O = n.type;
      return O && Vo[n.type] ? o.m(O) : "";
    }), d = y(() => n.type && Vo[n.type] || n.icon), v = y(() => n.position.endsWith("right") ? "right" : "left"), h = y(() => n.position.startsWith("top") ? "top" : "bottom"), p = y(() => {
      var O;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (O = n.zIndex) != null ? O : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: u } = Bo(() => {
        l.value && m();
      }, n.duration));
    }
    function b() {
      u?.();
    }
    function m() {
      l.value = !1;
    }
    function C({ code: O }) {
      O === ft.delete || O === ft.backspace ? b() : O === ft.esc ? l.value && m() : g();
    }
    return ge(() => {
      g(), a(), l.value = !0;
    }), $e(document, "keydown", C), t({
      visible: l,
      close: m
    }), (O, I) => (_(), K(cn, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (S) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: H(() => [
        Re($("div", {
          id: O.id,
          class: L([c(o).b(), O.customClass, c(v)]),
          style: ye(c(p)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: g,
          onClick: O.onClick
        }, [
          c(d) ? (_(), K(c(Pe), {
            key: 0,
            class: L([c(o).e("icon"), c(f)])
          }, {
            default: H(() => [
              (_(), K(xe(c(d))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          $("div", {
            class: L(c(o).e("group"))
          }, [
            $("h2", {
              class: L(c(o).e("title")),
              textContent: G(O.title)
            }, null, 10, ["textContent"]),
            Re($("div", {
              class: L(c(o).e("content")),
              style: ye(O.title ? void 0 : { margin: 0 })
            }, [
              U(O.$slots, "default", {}, () => [
                O.dangerouslyUseHTMLString ? (_(), B(ke, { key: 1 }, [
                  W(" Caution here, message could've been compromised, never use user's input as message "),
                  $("p", { innerHTML: O.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), B("p", { key: 0 }, G(O.message), 1))
              ])
            ], 6), [
              [st, O.message]
            ]),
            O.showClose ? (_(), K(c(Pe), {
              key: 0,
              class: L(c(o).e("closeBtn")),
              onClick: Ae(m, ["stop"])
            }, {
              default: H(() => [
                Q(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : W("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [st, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Iy = /* @__PURE__ */ ae(Oy, [["__file", "notification.vue"]]);
const jo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Br = 16;
let Ay = 1;
const Ln = function(e = {}, t) {
  if (!ue)
    return { close: () => {
    } };
  (be(e) || Xn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  jo[n].forEach(({ vm: f }) => {
    var d;
    o += (((d = f.el) == null ? void 0 : d.offsetHeight) || 0) + Br;
  }), o += Br;
  const r = `notification_${Ay++}`, a = e.onClose, s = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      $y(r, n, a);
    }
  };
  let i = document.body;
  Ke(e.appendTo) ? i = e.appendTo : be(e.appendTo) && (i = document.querySelector(e.appendTo)), Ke(i) || (we("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), i = document.body);
  const l = document.createElement("div"), u = Q(Iy, s, pe(s.message) ? s.message : Xn(s.message) ? () => s.message : null);
  return u.appContext = En(t) ? Ln._context : t, u.props.onDestroy = () => {
    Mo(null, l);
  }, Mo(u, l), jo[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
ru.forEach((e) => {
  Ln[e] = (t = {}, n) => ((be(t) || Xn(t)) && (t = {
    message: t
  }), Ln({ ...t, type: e }, n));
});
function $y(e, t, n) {
  const o = jo[t], r = o.findIndex(({ vm: u }) => {
    var f;
    return ((f = u.component) == null ? void 0 : f.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: a } = o[r];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, i = t.split("-")[0];
  o.splice(r, 1);
  const l = o.length;
  if (!(l < 1))
    for (let u = r; u < l; u++) {
      const { el: f, component: d } = o[u].vm, v = Number.parseInt(f.style[i], 10) - s - Br;
      d.props.offset = v;
    }
}
function Py() {
  for (const e of Object.values(jo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ln.closeAll = Py;
Ln._context = null;
const Ry = dl(Ln, "$notify"), My = {
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
      showClose: a = !1
    } = e;
    o === "center" ? Sy({
      message: t,
      type: n,
      duration: r,
      showClose: a,
      grouping: !0
    }) : Ry({
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
}, Ly = { class: "floating-control" }, Ny = { class: "time" }, xy = /* @__PURE__ */ V({
  __name: "FloatingControlBar",
  props: {
    elapsedMs: {},
    paused: { type: Boolean }
  },
  emits: ["pause", "resume", "stop", "cancel"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = y(() => {
      const s = Math.floor(n.elapsedMs / 1e3), i = Math.floor(s / 60).toString().padStart(2, "0"), l = (s % 60).toString().padStart(2, "0");
      return `${i}:${l}`;
    }), a = () => {
      n.paused ? o("resume") : o("pause");
    };
    return (s, i) => (_(), B("div", Ly, [
      $(
        "span",
        {
          class: L(["record-dot", { paused: s.paused }])
        },
        null,
        2
        /* CLASS */
      ),
      $(
        "span",
        Ny,
        G(r.value),
        1
        /* TEXT */
      ),
      $(
        "button",
        { onClick: a },
        G(s.paused ? s.$t("screenRecorder.resume") : s.$t("screenRecorder.pause")),
        1
        /* TEXT */
      ),
      $(
        "button",
        {
          class: "danger",
          onClick: i[0] || (i[0] = (l) => s.$emit("stop"))
        },
        G(s.$t("screenRecorder.stop")),
        1
        /* TEXT */
      ),
      $(
        "button",
        {
          class: "ghost",
          onClick: i[1] || (i[1] = (l) => s.$emit("cancel"))
        },
        G(s.$t("screenRecorder.cancel")),
        1
        /* TEXT */
      )
    ]));
  }
}), uo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ky = /* @__PURE__ */ uo(xy, [["__scopeId", "data-v-934c1ee3"]]);
async function Dy(e = {}) {
  return typeof e == "object" && Object.freeze(e), await N("plugin:dialog|save", { options: e });
}
const By = { class: "export-form" }, Fy = { class: "path-row" }, zy = /* @__PURE__ */ V({
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
    ], a = [15, 24, 30, 60], s = (d, v) => {
      o("update:settings", {
        ...n.settings,
        [d]: v
      });
    }, i = (d) => {
      s("format", d === "gif" ? "gif" : "mp4");
    }, l = (d) => {
      const v = Number(d);
      s("fps", [15, 24, 30, 60].includes(v) ? v : 30);
    }, u = (d) => {
      const v = String(d);
      s(
        "quality",
        ["high", "standard", "small"].includes(v) ? v : "standard"
      );
    }, f = async () => {
      const d = n.settings.format, v = await Dy({
        title: "保存录屏",
        defaultPath: `recording.${d}`,
        filters: [
          { name: d.toUpperCase(), extensions: [d] }
        ]
      });
      v && s("savePath", v);
    };
    return (d, v) => {
      const h = uy, p = oy, g = ny, b = uh, m = Zl, C = z0;
      return _(), K(C, {
        "model-value": d.modelValue,
        title: d.$t("screenRecorder.exportSettings"),
        width: "420px",
        "append-to-body": "",
        "onUpdate:modelValue": v[2] || (v[2] = (O) => d.$emit("update:modelValue", O))
      }, {
        footer: H(() => [
          Q(m, {
            onClick: v[0] || (v[0] = (O) => d.$emit("cancel"))
          }, {
            default: H(() => [
              dt(
                G(d.$t("common.cancel")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          Q(m, {
            type: "primary",
            disabled: !d.settings.savePath,
            onClick: v[1] || (v[1] = (O) => d.$emit("export"))
          }, {
            default: H(() => [
              dt(
                G(d.$t("screenRecorder.export")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ]),
        default: H(() => [
          $("div", By, [
            $("label", null, [
              $(
                "span",
                null,
                G(d.$t("screenRecorder.format")),
                1
                /* TEXT */
              ),
              Q(h, {
                "model-value": d.settings.format,
                options: r,
                "onUpdate:modelValue": i
              }, null, 8, ["model-value"])
            ]),
            $("label", null, [
              $(
                "span",
                null,
                G(d.$t("screenRecorder.fps")),
                1
                /* TEXT */
              ),
              Q(g, {
                "model-value": d.settings.fps,
                "onUpdate:modelValue": l
              }, {
                default: H(() => [
                  (_(), B(
                    ke,
                    null,
                    Ao(a, (O) => Q(p, {
                      key: O,
                      label: `${O} FPS`,
                      value: O
                    }, null, 8, ["label", "value"])),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model-value"])
            ]),
            $("label", null, [
              $(
                "span",
                null,
                G(d.$t("screenRecorder.quality")),
                1
                /* TEXT */
              ),
              Q(g, {
                "model-value": d.settings.quality,
                "onUpdate:modelValue": u
              }, {
                default: H(() => [
                  Q(p, {
                    label: d.$t("screenRecorder.qualityHigh"),
                    value: "high"
                  }, null, 8, ["label"]),
                  Q(p, {
                    label: d.$t("screenRecorder.qualityStandard"),
                    value: "standard"
                  }, null, 8, ["label"]),
                  Q(p, {
                    label: d.$t("screenRecorder.qualitySmall"),
                    value: "small"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model-value"])
            ]),
            $("label", null, [
              $(
                "span",
                null,
                G(d.$t("screenRecorder.savePath")),
                1
                /* TEXT */
              ),
              $("div", Fy, [
                Q(b, {
                  "model-value": d.settings.savePath,
                  readonly: ""
                }, null, 8, ["model-value"]),
                Q(m, { onClick: f }, {
                  default: H(() => [
                    dt(
                      G(d.$t("common.browse")),
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
}), Vy = /* @__PURE__ */ uo(zy, [["__scopeId", "data-v-11026f25"]]), Hy = {}, Wy = { class: "export-progress" };
function jy(e, t) {
  return _(), B("div", Wy, [
    t[0] || (t[0] = $(
      "div",
      { class: "spinner" },
      null,
      -1
      /* HOISTED */
    )),
    $(
      "div",
      null,
      G(e.$t("screenRecorder.exporting")),
      1
      /* TEXT */
    )
  ]);
}
const Uy = /* @__PURE__ */ uo(Hy, [["render", jy], ["__scopeId", "data-v-92ef9ccc"]]), Ky = { class: "recording-result" }, Gy = { class: "actions" }, qy = /* @__PURE__ */ V({
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
      const a = Zl;
      return _(), B("div", Ky, [
        $(
          "h3",
          null,
          G(o.$t("screenRecorder.exportDone")),
          1
          /* TEXT */
        ),
        $(
          "p",
          null,
          G(o.result.width) + " × " + G(o.result.height) + " · " + G(n.value),
          1
          /* TEXT */
        ),
        $("div", Gy, [
          Q(a, {
            type: "primary",
            onClick: r[0] || (r[0] = (s) => o.$emit("open"))
          }, {
            default: H(() => [
              dt(
                G(o.$t("screenRecorder.openFile")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          Q(a, {
            onClick: r[1] || (r[1] = (s) => o.$emit("reveal"))
          }, {
            default: H(() => [
              dt(
                G(o.$t("screenRecorder.openFolder")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          Q(a, {
            onClick: r[2] || (r[2] = (s) => o.$emit("recordAgain"))
          }, {
            default: H(() => [
              dt(
                G(o.$t("screenRecorder.recordAgain")),
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
}), Yy = /* @__PURE__ */ uo(qy, [["__scopeId", "data-v-2c0d75b1"]]), Zy = () => N("screen_recorder_get_ffmpeg_status"), Xy = () => N("screen_recorder_pick_region"), Jy = () => N("screen_recorder_close_window"), Qy = (e, t) => N("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), ew = () => N("screen_recorder_pause_recording"), tw = (e, t) => N("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), nw = () => N("screen_recorder_stop_recording"), ow = () => N("screen_recorder_cancel_recording"), rw = (e) => N("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), yi = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: ""
});
function sw() {
  const e = P("selecting"), t = P(yi()), n = P(null), o = P(null), r = P(""), a = P(null), s = P(0), i = P(null), l = y(() => e.value !== "recording" || a.value === null ? s.value : s.value + Date.now() - a.value), u = () => {
    i.value !== null && (window.clearInterval(i.value), i.value = null);
  }, f = () => {
    u(), i.value = window.setInterval(() => {
      s.value = l.value, a.value = Date.now();
    }, 500);
  }, d = async () => (n.value = await Zy(), n.value), v = async (O) => {
    r.value = "", o.value = null;
    const I = n.value ?? await d();
    if (!I.available)
      throw new Error(I.message || "FFmpeg unavailable");
    await Qy(O, t.value), e.value = "recording", s.value = 0, a.value = Date.now(), f();
  }, h = async () => {
    e.value === "recording" && (s.value = l.value, a.value = null, u(), await ew(), e.value = "paused");
  }, p = async (O) => {
    e.value === "paused" && (await tw(O, t.value), e.value = "recording", a.value = Date.now(), f());
  }, g = async () => {
    e.value !== "recording" && e.value !== "paused" || (s.value = l.value, a.value = null, u(), await nw(), e.value = "exporting");
  }, b = async () => (e.value = "exporting", o.value = await rw(t.value), e.value = "completed", o.value), m = async () => {
    u(), await ow(), e.value = "selecting", a.value = null, s.value = 0, o.value = null;
  }, C = () => {
    e.value = "selecting", a.value = null, s.value = 0, o.value = null, r.value = "", t.value = yi();
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
    refreshFfmpegStatus: d,
    begin: v,
    pause: h,
    resume: p,
    stop: g,
    exportFile: b,
    cancel: m,
    reset: C
  };
}
const aw = { class: "screen-recorder" }, iw = {
  key: 0,
  class: "setup-panel"
}, lw = { class: "settings-row" }, uw = { class: "actions" }, cw = ["disabled"], dw = ["disabled"], fw = {
  key: 0,
  class: "warning"
}, pw = 430, vw = 92, wi = 520, _i = 220, gw = /* @__PURE__ */ V({
  __name: "index",
  setup(e) {
    const t = Mi(), n = P(null), o = P(!1), r = P(!1), {
      status: a,
      settings: s,
      ffmpegStatus: i,
      result: l,
      elapsedMs: u,
      refreshFfmpegStatus: f,
      begin: d,
      pause: v,
      resume: h,
      stop: p,
      exportFile: g,
      cancel: b,
      reset: m
    } = sw(), C = async (M) => {
      try {
        await M();
      } catch (Y) {
        My.msg(Y?.message || String(Y), "error");
      }
    }, O = async (M, Y, ne) => {
      const he = M.scale || await t.scaleFactor(), Qe = M.screenX / he, Fe = M.screenY / he, lt = window.screen.availWidth, Oe = window.screen.availHeight, de = 12, Me = Qe + M.width / 2, Ie = Fe + M.height + de, ie = Fe - ne - de, et = Math.min(
        Math.max(de, Me - Y / 2),
        Math.max(de, lt - Y - de)
      ), mt = Ie + ne <= Oe ? Ie : Math.max(de, Math.min(ie, Oe - ne - de));
      await t.setSize(new Lo(Y, ne)), await t.setPosition(new qr(et, mt));
    }, I = () => C(async () => {
      r.value = !0;
      try {
        const M = await Xy();
        n.value = M, a.value = "ready", await O(M, wi, _i).catch(() => {
        });
      } finally {
        r.value = !1;
      }
    }), S = () => {
      if (!n.value)
        throw new Error("请先选择录制区域");
      return n.value;
    }, A = () => C(async () => {
      const M = S();
      await O(M, pw, vw).catch(() => {
      }), await d(M);
    }), E = () => C(v), F = () => C(async () => {
      await h(S());
    }), T = () => C(async () => {
      await p(), o.value = !0;
    }), z = () => C(async () => {
      o.value = !1, await g();
    }), k = () => C(async () => {
      o.value = !1, await b(), m(), n.value = null;
    }), R = () => {
      m(), n.value = null, t.setSize(new Lo(wi, _i));
    }, j = async () => {
      try {
        await b();
      } catch {
      }
      await Jy();
    }, re = async () => {
      l.value && await N("open_file_with_default_app", { filePath: l.value.path });
    }, J = async () => {
      l.value && await N("show_file_in_folder", { filePath: l.value.path });
    }, X = (M) => {
      M.key === "Escape" && (M.preventDefault(), j());
    };
    return ge(async () => {
      await t.emit("screen_recorder_ready"), await f().catch(() => {
      }), window.addEventListener("keydown", X);
    }), Ur(() => {
      window.removeEventListener("keydown", X);
    }), (M, Y) => (_(), B("div", aw, [
      c(a) === "selecting" || c(a) === "ready" ? (_(), B("section", iw, [
        $("header", null, [
          $(
            "h2",
            null,
            G(M.$t("screenRecorder.title") || "自定义录屏"),
            1
            /* TEXT */
          ),
          $("button", {
            class: "icon-button",
            onClick: j
          }, "×")
        ]),
        $(
          "div",
          {
            class: L(["region-summary", { empty: !n.value }])
          },
          [
            n.value ? (_(), B(
              ke,
              { key: 0 },
              [
                $(
                  "strong",
                  null,
                  G(Math.round(n.value.width)) + " × " + G(Math.round(n.value.height)),
                  1
                  /* TEXT */
                ),
                $(
                  "span",
                  null,
                  G(n.value.screenX) + ", " + G(n.value.screenY),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (_(), B(
              ke,
              { key: 1 },
              [
                $(
                  "strong",
                  null,
                  G(M.$t("screenRecorder.dragToSelect")),
                  1
                  /* TEXT */
                ),
                $(
                  "span",
                  null,
                  G(M.$t("screenRecorder.pickRegionHint") || "点击选择区域后，在屏幕上按住鼠标拖出录制范围。"),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        ),
        $("div", lw, [
          Re($(
            "select",
            {
              "onUpdate:modelValue": Y[0] || (Y[0] = (ne) => c(s).fps = ne)
            },
            Y[4] || (Y[4] = [
              $(
                "option",
                { value: 15 },
                "15 FPS",
                -1
                /* HOISTED */
              ),
              $(
                "option",
                { value: 24 },
                "24 FPS",
                -1
                /* HOISTED */
              ),
              $(
                "option",
                { value: 30 },
                "30 FPS",
                -1
                /* HOISTED */
              ),
              $(
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
            [Zs, c(s).fps]
          ]),
          Re($(
            "select",
            {
              "onUpdate:modelValue": Y[1] || (Y[1] = (ne) => c(s).format = ne)
            },
            Y[5] || (Y[5] = [
              $(
                "option",
                { value: "mp4" },
                "MP4",
                -1
                /* HOISTED */
              ),
              $(
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
            [Zs, c(s).format]
          ])
        ]),
        $("div", uw, [
          $("button", {
            class: "secondary",
            disabled: r.value,
            onClick: I
          }, G(r.value ? M.$t("screenRecorder.picking") || "拖选中..." : M.$t("screenRecorder.pickRegion") || "选择区域"), 9, cw),
          $("button", {
            class: "primary",
            disabled: !n.value || c(i)?.available === !1,
            onClick: A
          }, G(M.$t("screenRecorder.start")), 9, dw)
        ]),
        c(i) && !c(i).available ? (_(), B(
          "p",
          fw,
          G(c(i).message || M.$t("screenRecorder.ffmpegMissing")),
          1
          /* TEXT */
        )) : W("v-if", !0)
      ])) : W("v-if", !0),
      c(a) === "recording" || c(a) === "paused" ? (_(), K(ky, {
        key: 1,
        "elapsed-ms": c(u),
        paused: c(a) === "paused",
        onPause: E,
        onResume: F,
        onStop: T,
        onCancel: k
      }, null, 8, ["elapsed-ms", "paused"])) : W("v-if", !0),
      Q(Vy, {
        modelValue: o.value,
        "onUpdate:modelValue": Y[2] || (Y[2] = (ne) => o.value = ne),
        settings: c(s),
        "onUpdate:settings": Y[3] || (Y[3] = (ne) => jr(s) ? s.value = ne : null),
        onExport: z,
        onCancel: k
      }, null, 8, ["modelValue", "settings"]),
      c(a) === "exporting" && !o.value ? (_(), K(Uy, { key: 2 })) : W("v-if", !0),
      c(a) === "completed" && c(l) ? (_(), K(Yy, {
        key: 3,
        result: c(l),
        onOpen: re,
        onReveal: J,
        onRecordAgain: R
      }, null, 8, ["result"])) : W("v-if", !0)
    ]));
  }
}), mw = /* @__PURE__ */ uo(gw, [["__scopeId", "data-v-6f6811d2"]]);
export {
  mw as default
};
