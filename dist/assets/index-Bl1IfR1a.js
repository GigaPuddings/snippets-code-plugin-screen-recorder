import { i as Ei, w as kn, l as Ou, a as Iu, b as $u, c as Ee, d as Au, e as Vr, B as Pu, h as Hr, f as Cr, g as Ti, j as Ru, k as $e, m as Mu, t as Lu, n as fe, o as xu, p as Nu, q as ku, r as _e, s as Wr, u as ge, v as Oi, x as Du, N as Rt, y as Bu, z as Fu, A as Ae, C as ae, D as A, E as y, F as c, G as jr, H as zu, I as Ii, J as dn, K as Ur, L as be, M as X, O as Vu, P as Kr, Q as Na, R as Qe, S as V, T as D, U as _, V as G, W as Jt, X as R, Y as it, Z as Gr, _ as Hu, $ as qr, a0 as H, a1 as Ge, a2 as L, a3 as U, a4 as W, a5 as Be, a6 as ee, a7 as Z, a8 as pe, a9 as dt, aa as Ne, ab as Qt, ac as Wu, ad as ju, ae as Uu, af as $i, ag as Ku, ah as Gu, ai as qu, aj as Yu, ak as gt, al as Zu, am as Xu, an as Yr, ao as Ju, ap as rn, aq as Qu, ar as Qn, as as ec, at as tc, au as eo } from "./runtime-entry-BWcHde88.js";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Er;
const ka = typeof window < "u" && window.trustedTypes;
if (ka)
  try {
    Er = /* @__PURE__ */ ka.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && kn(`Error creating trusted types policy: ${e}`);
  }
const Ai = Er ? (e) => Er.createHTML(e) : (e) => e, nc = "http://www.w3.org/2000/svg", oc = "http://www.w3.org/1998/Math/MathML", It = typeof document < "u" ? document : null, Da = It && /* @__PURE__ */ It.createElement("template"), rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? It.createElementNS(nc, e) : t === "mathml" ? It.createElementNS(oc, e) : n ? It.createElement(e, { is: n }) : It.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => It.createTextNode(e),
  createComment: (e) => It.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => It.querySelector(e),
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
      Da.innerHTML = Ai(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Da.content;
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
}, jt = "transition", Vn = "animation", to = Symbol("_vtc"), Pi = {
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
}, ac = /* @__PURE__ */ Vr(
  {},
  Pu,
  Pi
), sc = (e) => (e.displayName = "Transition", e.props = ac, e), mn = /* @__PURE__ */ sc(
  (e, { slots: t }) => Ti(Ru, ic(e), t)
), an = (e, t = []) => {
  Ee(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ba = (e) => e ? Ee(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ic(e) {
  const t = {};
  for (const P in e)
    P in Pi || (t[P] = e[P]);
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
  } = e, d = lc(r), h = d && d[0], b = d && d[1], {
    onBeforeEnter: m,
    onEnter: C,
    onEnterCancelled: O,
    onLeave: $,
    onLeaveCancelled: S,
    onBeforeAppear: I = m,
    onAppear: E = C,
    onAppearCancelled: F = O
  } = t, T = (P, j, re, J) => {
    P._enterCancelled = J, sn(P, j ? p : i), sn(P, j ? u : a), re && re();
  }, z = (P, j) => {
    P._isLeaving = !1, sn(P, f), sn(P, g), sn(P, v), j && j();
  }, N = (P) => (j, re) => {
    const J = P ? E : C, Q = () => T(j, P, re);
    an(J, [j, Q]), Fa(() => {
      sn(j, P ? l : s), Et(j, P ? p : i), Ba(J) || za(j, o, h, Q);
    });
  };
  return Vr(t, {
    onBeforeEnter(P) {
      an(m, [P]), Et(P, s), Et(P, a);
    },
    onBeforeAppear(P) {
      an(I, [P]), Et(P, l), Et(P, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(P, j) {
      P._isLeaving = !0;
      const re = () => z(P, j);
      Et(P, f), P._enterCancelled ? (Et(P, v), Wa()) : (Wa(), Et(P, v)), Fa(() => {
        P._isLeaving && (sn(P, f), Et(P, g), Ba($) || za(P, o, b, re));
      }), an($, [P, re]);
    },
    onEnterCancelled(P) {
      T(P, !1, void 0, !0), an(O, [P]);
    },
    onAppearCancelled(P) {
      T(P, !0, void 0, !0), an(F, [P]);
    },
    onLeaveCancelled(P) {
      z(P), an(S, [P]);
    }
  });
}
function lc(e) {
  if (e == null)
    return null;
  if ($e(e))
    return [ir(e.enter), ir(e.leave)];
  {
    const t = ir(e);
    return [t, t];
  }
}
function ir(e) {
  const t = Lu(e);
  return process.env.NODE_ENV !== "production" && Mu(t, "<transition> explicit duration"), t;
}
function Et(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[to] || (e[to] = /* @__PURE__ */ new Set())).add(t);
}
function sn(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[to];
  n && (n.delete(t), n.size || (e[to] = void 0));
}
function Fa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let uc = 0;
function za(e, t, n, o) {
  const r = e._endId = ++uc, s = () => {
    r === e._endId && o();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: a, timeout: i, propCount: l } = cc(e, t);
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
function cc(e, t) {
  const n = window.getComputedStyle(e), o = (d) => (n[d] || "").split(", "), r = o(`${jt}Delay`), s = o(`${jt}Duration`), a = Va(r, s), i = o(`${Vn}Delay`), l = o(`${Vn}Duration`), u = Va(i, l);
  let p = null, f = 0, v = 0;
  t === jt ? a > 0 && (p = jt, f = a, v = s.length) : t === Vn ? u > 0 && (p = Vn, f = u, v = l.length) : (f = Math.max(a, u), p = f > 0 ? a > u ? jt : Vn : null, v = p ? p === jt ? s.length : l.length : 0);
  const g = p === jt && /\b(transform|all)(,|$)/.test(
    o(`${jt}Property`).toString()
  );
  return {
    type: p,
    timeout: f,
    propCount: v,
    hasTransform: g
  };
}
function Va(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => Ha(n) + Ha(e[o])));
}
function Ha(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Wa() {
  return document.body.offsetHeight;
}
function dc(e, t, n) {
  const o = e[to];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ro = Symbol("_vod"), Ri = Symbol("_vsh"), ut = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ro] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Hn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Hn(e, !0), o.enter(e)) : o.leave(e, () => {
      Hn(e, !1);
    }) : Hn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Hn(e, t);
  }
};
process.env.NODE_ENV !== "production" && (ut.name = "show");
function Hn(e, t) {
  e.style.display = t ? e[Ro] : "none", e[Ri] = !t;
}
const fc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), pc = /(^|;)\s*display\s*:/;
function vc(e, t, n) {
  const o = e.style, r = _e(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (_e(t))
        for (const a of t.split(";")) {
          const i = a.slice(0, a.indexOf(":")).trim();
          n[i] == null && Io(o, i, "");
        }
      else
        for (const a in t)
          n[a] == null && Io(o, a, "");
    for (const a in n)
      a === "display" && (s = !0), Io(o, a, n[a]);
  } else if (r) {
    if (t !== n) {
      const a = o[fc];
      a && (n += ";" + a), o.cssText = n, s = pc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ro in e && (e[Ro] = s ? o.display : "", e[Ri] && (o.display = "none"));
}
const hc = /[^\\];\s*$/, ja = /\s*!important$/;
function Io(e, t, n) {
  if (Ee(n))
    n.forEach((o) => Io(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && hc.test(n) && kn(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = gc(e, t);
    ja.test(n) ? e.setProperty(
      Hr(o),
      n.replace(ja, ""),
      "important"
    ) : e[o] = n;
  }
}
const Ua = ["Webkit", "Moz", "ms"], lr = {};
function gc(e, t) {
  const n = lr[t];
  if (n)
    return n;
  let o = Wr(t);
  if (o !== "filter" && o in e)
    return lr[t] = o;
  o = Bu(o);
  for (let r = 0; r < Ua.length; r++) {
    const s = Ua[r] + o;
    if (s in e)
      return lr[t] = s;
  }
  return t;
}
const Ka = "http://www.w3.org/1999/xlink";
function Ga(e, t, n, o, r, s = ku(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ka, t.slice(6, t.length)) : e.setAttributeNS(Ka, t, n) : n == null || s && !Oi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Du(n) ? String(n) : n
  );
}
function qa(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ai(n) : n);
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
    i === "boolean" ? n = Oi(n) : n == null && i === "string" ? (n = "", a = !0) : i === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch (i) {
    process.env.NODE_ENV !== "production" && !a && kn(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      i
    );
  }
  a && e.removeAttribute(r || t);
}
function un(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function mc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ya = Symbol("_vei");
function bc(e, t, n, o, r = null) {
  const s = e[Ya] || (e[Ya] = {}), a = s[t];
  if (o && a)
    a.value = process.env.NODE_ENV !== "production" ? Xa(o, t) : o;
  else {
    const [i, l] = yc(t);
    if (o) {
      const u = s[t] = Sc(
        process.env.NODE_ENV !== "production" ? Xa(o, t) : o,
        r
      );
      un(e, i, u, l);
    } else a && (mc(e, i, a, l), s[t] = void 0);
  }
}
const Za = /(?:Once|Passive|Capture)$/;
function yc(e) {
  let t;
  if (Za.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Za); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Hr(e.slice(2)), t];
}
let ur = 0;
const wc = /* @__PURE__ */ Promise.resolve(), _c = () => ur || (wc.then(() => ur = 0), ur = Date.now());
function Sc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Fu(
      Cc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = _c(), n;
}
function Xa(e, t) {
  return ge(e) || Ee(e) ? e : (kn(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Rt);
}
function Cc(e, t) {
  if (Ee(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const Ja = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ec = (e, t, n, o, r, s) => {
  const a = r === "svg";
  t === "class" ? dc(e, o, a) : t === "style" ? vc(e, n, o) : xu(t) ? Nu(t) || bc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tc(e, t, o, a)) ? (qa(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ga(e, t, o, a, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !_e(o)) ? qa(e, Wr(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ga(e, t, o, a));
};
function Tc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ja(t) && ge(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ja(t) && _e(n) ? !1 : t in e;
}
const Mo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ee(t) ? (n) => $u(t, n) : t;
};
function Oc(e) {
  e.target.composing = !0;
}
function Qa(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const In = Symbol("_assign"), Ic = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[In] = Mo(r);
    const s = o || r.props && r.props.type === "number";
    un(e, t ? "change" : "input", (a) => {
      if (a.target.composing) return;
      let i = e.value;
      n && (i = i.trim()), s && (i = Cr(i)), e[In](i);
    }), n && un(e, "change", () => {
      e.value = e.value.trim();
    }), t || (un(e, "compositionstart", Oc), un(e, "compositionend", Qa), un(e, "change", Qa));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: s } }, a) {
    if (e[In] = Mo(a), e.composing) return;
    const i = (s || e.type === "number") && !/^0\d/.test(e.value) ? Cr(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === l) || (e.value = l));
  }
}, es = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const r = Ei(t);
    un(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? Cr(Lo(a)) : Lo(a)
      );
      e[In](
        e.multiple ? r ? new Set(s) : s : s[0]
      ), e._assigning = !0, fe(() => {
        e._assigning = !1;
      });
    }), e[In] = Mo(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ts(e, t);
  },
  beforeUpdate(e, t, n) {
    e[In] = Mo(n);
  },
  updated(e, { value: t }) {
    e._assigning || ts(e, t);
  }
};
function ts(e, t) {
  const n = e.multiple, o = Ee(t);
  if (n && !o && !Ei(t)) {
    process.env.NODE_ENV !== "production" && kn(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, s = e.options.length; r < s; r++) {
    const a = e.options[r], i = Lo(a);
    if (n)
      if (o) {
        const l = typeof i;
        l === "string" || l === "number" ? a.selected = t.some((u) => String(u) === String(i)) : a.selected = Ou(t, i) > -1;
      } else
        a.selected = t.has(i);
    else if (Iu(Lo(a), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Lo(e) {
  return "_value" in e ? e._value : e.value;
}
const $c = ["ctrl", "shift", "alt", "meta"], Ac = {
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
  exact: (e, t) => $c.some((n) => e[`${n}Key`] && !t.includes(n))
}, Me = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = Ac[t[a]];
      if (i && i(r, t)) return;
    }
    return e(r, ...s);
  });
}, Pc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Wn = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = Hr(r.key);
    if (t.some(
      (a) => a === s || Pc[a] === s
    ))
      return e(r);
  });
}, Rc = /* @__PURE__ */ Vr({ patchProp: Ec }, rc);
let ns;
function Mc() {
  return ns || (ns = Au(Rc));
}
const xo = (...e) => {
  Mc().render(...e);
};
function Lc(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function xc(e, t, n, o, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var $o;
const et = "__TAURI_TO_IPC_KEY__";
function Nc(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function M(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class kc {
  get rid() {
    return Lc(this, $o, "f");
  }
  constructor(t) {
    $o.set(this, void 0), xc(this, $o, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return M("plugin:resources|close", {
      rid: this.rid
    });
  }
}
$o = /* @__PURE__ */ new WeakMap();
class Zr {
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
    return new Kn(this.width * t, this.height * t);
  }
  [et]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[et]();
  }
}
class Kn {
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
    return new Zr(this.width / t, this.height / t);
  }
  [et]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[et]();
  }
}
class Sn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Zr ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Kn ? this.size : this.size.toPhysical(t);
  }
  [et]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[et]();
  }
}
class Xr {
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
    return new Gt(this.x * t, this.y * t);
  }
  [et]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[et]();
  }
}
class Gt {
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
    return new Xr(this.x / t, this.y / t);
  }
  [et]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[et]();
  }
}
class mo {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Xr ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Gt ? this.position : this.position.toPhysical(t);
  }
  [et]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[et]();
  }
}
var Ue;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Ue || (Ue = {}));
async function Mi(e, t) {
  await M("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Jr(e, t, n) {
  var o;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return M("plugin:event|listen", {
    event: e,
    target: r,
    handler: Nc(t)
  }).then((s) => async () => Mi(e, s));
}
async function Dc(e, t, n) {
  return Jr(e, (o) => {
    Mi(e, o.id), t(o);
  }, n);
}
async function Bc(e, t) {
  await M("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Fc(e, t, n) {
  await M("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Gn extends kc {
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
    return M("plugin:image|new", {
      rgba: No(t),
      width: n,
      height: o
    }).then((r) => new Gn(r));
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
    return M("plugin:image|from_bytes", {
      bytes: No(t)
    }).then((n) => new Gn(n));
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
    return M("plugin:image|from_path", { path: t }).then((n) => new Gn(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return M("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return M("plugin:image|size", { rid: this.rid });
  }
}
function No(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Gn ? e.rid : e;
}
var Tr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Tr || (Tr = {}));
class zc {
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
var os;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(os || (os = {}));
function Li() {
  return new xi(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function cr() {
  return M("plugin:window|get_all_windows").then((e) => e.map((t) => new xi(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const dr = ["tauri://created", "tauri://error"];
class xi {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || M("plugin:window|create", {
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
    return (n = (await cr()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Li();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return cr();
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
    for (const t of await cr())
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
    } : Jr(t, n, {
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
    } : Dc(t, n, {
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
    if (dr.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Bc(t, n);
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
    if (dr.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Fc(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return dr.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return M("plugin:window|scale_factor", {
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
    return M("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Gt(t));
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
    return M("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Gt(t));
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
    return M("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Kn(t));
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
    return M("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Kn(t));
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
    return M("plugin:window|is_fullscreen", {
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
    return M("plugin:window|is_minimized", {
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
    return M("plugin:window|is_maximized", {
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
    return M("plugin:window|is_focused", {
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
    return M("plugin:window|is_decorated", {
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
    return M("plugin:window|is_resizable", {
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
    return M("plugin:window|is_maximizable", {
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
    return M("plugin:window|is_minimizable", {
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
    return M("plugin:window|is_closable", {
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
    return M("plugin:window|is_visible", {
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
    return M("plugin:window|title", {
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
    return M("plugin:window|theme", {
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
    return M("plugin:window|is_always_on_top", {
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
    return M("plugin:window|center", {
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
    return t && (t === Tr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), M("plugin:window|request_user_attention", {
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
    return M("plugin:window|set_resizable", {
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
    return M("plugin:window|set_enabled", {
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
    return M("plugin:window|is_enabled", {
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
    return M("plugin:window|set_maximizable", {
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
    return M("plugin:window|set_minimizable", {
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
    return M("plugin:window|set_closable", {
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
    return M("plugin:window|set_title", {
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
    return M("plugin:window|maximize", {
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
    return M("plugin:window|unmaximize", {
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
    return M("plugin:window|toggle_maximize", {
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
    return M("plugin:window|minimize", {
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
    return M("plugin:window|unminimize", {
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
    return M("plugin:window|show", {
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
    return M("plugin:window|hide", {
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
    return M("plugin:window|close", {
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
    return M("plugin:window|destroy", {
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
    return M("plugin:window|set_decorations", {
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
    return M("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return M("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return M("plugin:window|set_effects", {
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
    return M("plugin:window|set_always_on_top", {
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
    return M("plugin:window|set_always_on_bottom", {
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
    return M("plugin:window|set_content_protected", {
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
    return M("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Sn ? t : new Sn(t)
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
    return M("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Sn ? t : t ? new Sn(t) : null
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
    return M("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Sn ? t : t ? new Sn(t) : null
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
    return M("plugin:window|set_size_constraints", {
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
    return M("plugin:window|set_position", {
      label: this.label,
      value: t instanceof mo ? t : new mo(t)
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
    return M("plugin:window|set_fullscreen", {
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
    return M("plugin:window|set_focus", {
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
    return M("plugin:window|set_icon", {
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
    return M("plugin:window|set_skip_taskbar", {
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
    return M("plugin:window|set_cursor_grab", {
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
    return M("plugin:window|set_cursor_visible", {
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
    return M("plugin:window|set_cursor_icon", {
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
    return M("plugin:window|set_background_color", { color: t });
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
    return M("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof mo ? t : new mo(t)
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
    return M("plugin:window|set_ignore_cursor_events", {
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
    return M("plugin:window|start_dragging", {
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
    return M("plugin:window|start_resize_dragging", {
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
    return M("plugin:window|set_badge_count", {
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
    return M("plugin:window|set_badge_label", {
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
    return M("plugin:window|set_overlay_icon", {
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
    return M("plugin:window|set_progress_bar", {
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
    return M("plugin:window|set_visible_on_all_workspaces", {
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
    return M("plugin:window|set_title_bar_style", {
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
    return M("plugin:window|set_theme", {
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
    return this.listen(Ue.WINDOW_RESIZED, (n) => {
      n.payload = new Kn(n.payload), t(n);
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
    return this.listen(Ue.WINDOW_MOVED, (n) => {
      n.payload = new Gt(n.payload), t(n);
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
    return this.listen(Ue.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new zc(n);
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
    const n = await this.listen(Ue.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Gt(a.payload.position)
        }
      });
    }), o = await this.listen(Ue.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Gt(a.payload.position)
        }
      });
    }), r = await this.listen(Ue.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Gt(a.payload.position)
        }
      });
    }), s = await this.listen(Ue.DRAG_LEAVE, (a) => {
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
    const n = await this.listen(Ue.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), o = await this.listen(Ue.WINDOW_BLUR, (r) => {
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
    return this.listen(Ue.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Ue.WINDOW_THEME_CHANGED, t);
  }
}
var rs;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(rs || (rs = {}));
var as;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(as || (as = {}));
var ss;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ss || (ss = {}));
const Ni = Symbol(), qn = "el", Vc = "is-", ln = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, ki = Symbol("namespaceContextKey"), Qr = (e) => {
  const t = e || (Ae() ? ae(ki, A(qn)) : A(qn));
  return y(() => c(t) || qn);
}, de = (e, t) => {
  const n = Qr(t);
  return {
    namespace: n,
    b: (h = "") => ln(n.value, e, h, "", ""),
    e: (h) => h ? ln(n.value, e, "", h, "") : "",
    m: (h) => h ? ln(n.value, e, "", "", h) : "",
    be: (h, b) => h && b ? ln(n.value, e, h, b, "") : "",
    em: (h, b) => h && b ? ln(n.value, e, "", h, b) : "",
    bm: (h, b) => h && b ? ln(n.value, e, h, "", b) : "",
    bem: (h, b, m) => h && b && m ? ln(n.value, e, h, b, m) : "",
    is: (h, ...b) => {
      const m = b.length >= 1 ? b[0] : !0;
      return h && m ? `${Vc}${h}` : "";
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
var Di = typeof global == "object" && global && global.Object === Object && global, Hc = typeof self == "object" && self && self.Object === Object && self, _t = Di || Hc || Function("return this")(), yt = _t.Symbol, Bi = Object.prototype, Wc = Bi.hasOwnProperty, jc = Bi.toString, jn = yt ? yt.toStringTag : void 0;
function Uc(e) {
  var t = Wc.call(e, jn), n = e[jn];
  try {
    e[jn] = void 0;
    var o = !0;
  } catch {
  }
  var r = jc.call(e);
  return o && (t ? e[jn] = n : delete e[jn]), r;
}
var Kc = Object.prototype, Gc = Kc.toString;
function qc(e) {
  return Gc.call(e);
}
var Yc = "[object Null]", Zc = "[object Undefined]", is = yt ? yt.toStringTag : void 0;
function Dn(e) {
  return e == null ? e === void 0 ? Zc : Yc : is && is in Object(e) ? Uc(e) : qc(e);
}
function $n(e) {
  return e != null && typeof e == "object";
}
var Xc = "[object Symbol]";
function Ko(e) {
  return typeof e == "symbol" || $n(e) && Dn(e) == Xc;
}
function Jc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var ct = Array.isArray, ls = yt ? yt.prototype : void 0, us = ls ? ls.toString : void 0;
function Fi(e) {
  if (typeof e == "string")
    return e;
  if (ct(e))
    return Jc(e, Fi) + "";
  if (Ko(e))
    return us ? us.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Qc = /\s/;
function ed(e) {
  for (var t = e.length; t-- && Qc.test(e.charAt(t)); )
    ;
  return t;
}
var td = /^\s+/;
function nd(e) {
  return e && e.slice(0, ed(e) + 1).replace(td, "");
}
function en(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var cs = NaN, od = /^[-+]0x[0-9a-f]+$/i, rd = /^0b[01]+$/i, ad = /^0o[0-7]+$/i, sd = parseInt;
function ds(e) {
  if (typeof e == "number")
    return e;
  if (Ko(e))
    return cs;
  if (en(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = en(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = nd(e);
  var n = rd.test(e);
  return n || ad.test(e) ? sd(e.slice(2), n ? 2 : 8) : od.test(e) ? cs : +e;
}
function zi(e) {
  return e;
}
var id = "[object AsyncFunction]", ld = "[object Function]", ud = "[object GeneratorFunction]", cd = "[object Proxy]";
function Vi(e) {
  if (!en(e))
    return !1;
  var t = Dn(e);
  return t == ld || t == ud || t == id || t == cd;
}
var fr = _t["__core-js_shared__"], fs = function() {
  var e = /[^.]+$/.exec(fr && fr.keys && fr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function dd(e) {
  return !!fs && fs in e;
}
var fd = Function.prototype, pd = fd.toString;
function bn(e) {
  if (e != null) {
    try {
      return pd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vd = /[\\^$.*+?()[\]{}|]/g, hd = /^\[object .+?Constructor\]$/, gd = Function.prototype, md = Object.prototype, bd = gd.toString, yd = md.hasOwnProperty, wd = RegExp(
  "^" + bd.call(yd).replace(vd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _d(e) {
  if (!en(e) || dd(e))
    return !1;
  var t = Vi(e) ? wd : hd;
  return t.test(bn(e));
}
function Sd(e, t) {
  return e?.[t];
}
function yn(e, t) {
  var n = Sd(e, t);
  return _d(n) ? n : void 0;
}
var Or = yn(_t, "WeakMap");
function Cd(e, t, n) {
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
var Ed = 800, Td = 16, Od = Date.now;
function Id(e) {
  var t = 0, n = 0;
  return function() {
    var o = Od(), r = Td - (o - n);
    if (n = o, r > 0) {
      if (++t >= Ed)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function $d(e) {
  return function() {
    return e;
  };
}
var ko = function() {
  try {
    var e = yn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ad = ko ? function(e, t) {
  return ko(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: $d(t),
    writable: !0
  });
} : zi, Pd = Id(Ad);
function Rd(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Md = 9007199254740991, Ld = /^(?:0|[1-9]\d*)$/;
function ea(e, t) {
  var n = typeof e;
  return t = t ?? Md, !!t && (n == "number" || n != "symbol" && Ld.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function xd(e, t, n) {
  t == "__proto__" && ko ? ko(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ta(e, t) {
  return e === t || e !== e && t !== t;
}
var Nd = Object.prototype, kd = Nd.hasOwnProperty;
function Dd(e, t, n) {
  var o = e[t];
  (!(kd.call(e, t) && ta(o, n)) || n === void 0 && !(t in e)) && xd(e, t, n);
}
var ps = Math.max;
function Bd(e, t, n) {
  return t = ps(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = ps(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = o[r];
    return i[t] = n(a), Cd(e, this, i);
  };
}
var Fd = 9007199254740991;
function na(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Fd;
}
function zd(e) {
  return e != null && na(e.length) && !Vi(e);
}
var Vd = Object.prototype;
function Hd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Vd;
  return e === n;
}
function Wd(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var jd = "[object Arguments]";
function vs(e) {
  return $n(e) && Dn(e) == jd;
}
var Hi = Object.prototype, Ud = Hi.hasOwnProperty, Kd = Hi.propertyIsEnumerable, oa = vs(/* @__PURE__ */ function() {
  return arguments;
}()) ? vs : function(e) {
  return $n(e) && Ud.call(e, "callee") && !Kd.call(e, "callee");
};
function Gd() {
  return !1;
}
var Wi = typeof exports == "object" && exports && !exports.nodeType && exports, hs = Wi && typeof module == "object" && module && !module.nodeType && module, qd = hs && hs.exports === Wi, gs = qd ? _t.Buffer : void 0, Yd = gs ? gs.isBuffer : void 0, Ir = Yd || Gd, Zd = "[object Arguments]", Xd = "[object Array]", Jd = "[object Boolean]", Qd = "[object Date]", ef = "[object Error]", tf = "[object Function]", nf = "[object Map]", of = "[object Number]", rf = "[object Object]", af = "[object RegExp]", sf = "[object Set]", lf = "[object String]", uf = "[object WeakMap]", cf = "[object ArrayBuffer]", df = "[object DataView]", ff = "[object Float32Array]", pf = "[object Float64Array]", vf = "[object Int8Array]", hf = "[object Int16Array]", gf = "[object Int32Array]", mf = "[object Uint8Array]", bf = "[object Uint8ClampedArray]", yf = "[object Uint16Array]", wf = "[object Uint32Array]", ue = {};
ue[ff] = ue[pf] = ue[vf] = ue[hf] = ue[gf] = ue[mf] = ue[bf] = ue[yf] = ue[wf] = !0;
ue[Zd] = ue[Xd] = ue[cf] = ue[Jd] = ue[df] = ue[Qd] = ue[ef] = ue[tf] = ue[nf] = ue[of] = ue[rf] = ue[af] = ue[sf] = ue[lf] = ue[uf] = !1;
function _f(e) {
  return $n(e) && na(e.length) && !!ue[Dn(e)];
}
function Sf(e) {
  return function(t) {
    return e(t);
  };
}
var ji = typeof exports == "object" && exports && !exports.nodeType && exports, Yn = ji && typeof module == "object" && module && !module.nodeType && module, Cf = Yn && Yn.exports === ji, pr = Cf && Di.process, ms = function() {
  try {
    var e = Yn && Yn.require && Yn.require("util").types;
    return e || pr && pr.binding && pr.binding("util");
  } catch {
  }
}(), bs = ms && ms.isTypedArray, Ui = bs ? Sf(bs) : _f, Ef = Object.prototype, Tf = Ef.hasOwnProperty;
function Of(e, t) {
  var n = ct(e), o = !n && oa(e), r = !n && !o && Ir(e), s = !n && !o && !r && Ui(e), a = n || o || r || s, i = a ? Wd(e.length, String) : [], l = i.length;
  for (var u in e)
    Tf.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ea(u, l))) && i.push(u);
  return i;
}
function If(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var $f = If(Object.keys, Object), Af = Object.prototype, Pf = Af.hasOwnProperty;
function Rf(e) {
  if (!Hd(e))
    return $f(e);
  var t = [];
  for (var n in Object(e))
    Pf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ki(e) {
  return zd(e) ? Of(e) : Rf(e);
}
var Mf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lf = /^\w*$/;
function ra(e, t) {
  if (ct(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ko(e) ? !0 : Lf.test(e) || !Mf.test(e) || t != null && e in Object(t);
}
var no = yn(Object, "create");
function xf() {
  this.__data__ = no ? no(null) : {}, this.size = 0;
}
function Nf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var kf = "__lodash_hash_undefined__", Df = Object.prototype, Bf = Df.hasOwnProperty;
function Ff(e) {
  var t = this.__data__;
  if (no) {
    var n = t[e];
    return n === kf ? void 0 : n;
  }
  return Bf.call(t, e) ? t[e] : void 0;
}
var zf = Object.prototype, Vf = zf.hasOwnProperty;
function Hf(e) {
  var t = this.__data__;
  return no ? t[e] !== void 0 : Vf.call(t, e);
}
var Wf = "__lodash_hash_undefined__";
function jf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = no && t === void 0 ? Wf : t, this;
}
function pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
pn.prototype.clear = xf;
pn.prototype.delete = Nf;
pn.prototype.get = Ff;
pn.prototype.has = Hf;
pn.prototype.set = jf;
function Uf() {
  this.__data__ = [], this.size = 0;
}
function Go(e, t) {
  for (var n = e.length; n--; )
    if (ta(e[n][0], t))
      return n;
  return -1;
}
var Kf = Array.prototype, Gf = Kf.splice;
function qf(e) {
  var t = this.__data__, n = Go(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Gf.call(t, n, 1), --this.size, !0;
}
function Yf(e) {
  var t = this.__data__, n = Go(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Zf(e) {
  return Go(this.__data__, e) > -1;
}
function Xf(e, t) {
  var n = this.__data__, o = Go(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Nt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Nt.prototype.clear = Uf;
Nt.prototype.delete = qf;
Nt.prototype.get = Yf;
Nt.prototype.has = Zf;
Nt.prototype.set = Xf;
var oo = yn(_t, "Map");
function Jf() {
  this.size = 0, this.__data__ = {
    hash: new pn(),
    map: new (oo || Nt)(),
    string: new pn()
  };
}
function Qf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qo(e, t) {
  var n = e.__data__;
  return Qf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ep(e) {
  var t = qo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function tp(e) {
  return qo(this, e).get(e);
}
function np(e) {
  return qo(this, e).has(e);
}
function op(e, t) {
  var n = qo(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function kt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
kt.prototype.clear = Jf;
kt.prototype.delete = ep;
kt.prototype.get = tp;
kt.prototype.has = np;
kt.prototype.set = op;
var rp = "Expected a function";
function aa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(rp);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (aa.Cache || kt)(), n;
}
aa.Cache = kt;
var ap = 500;
function sp(e) {
  var t = aa(e, function(o) {
    return n.size === ap && n.clear(), o;
  }), n = t.cache;
  return t;
}
var ip = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lp = /\\(\\)?/g, up = sp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ip, function(n, o, r, s) {
    t.push(r ? s.replace(lp, "$1") : o || n);
  }), t;
});
function cp(e) {
  return e == null ? "" : Fi(e);
}
function Yo(e, t) {
  return ct(e) ? e : ra(e, t) ? [e] : up(cp(e));
}
function so(e) {
  if (typeof e == "string" || Ko(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function sa(e, t) {
  t = Yo(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[so(t[n++])];
  return n && n == o ? e : void 0;
}
function Zt(e, t, n) {
  var o = e == null ? void 0 : sa(e, t);
  return o === void 0 ? n : o;
}
function Gi(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var ys = yt ? yt.isConcatSpreadable : void 0;
function dp(e) {
  return ct(e) || oa(e) || !!(ys && e && e[ys]);
}
function fp(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = dp), r || (r = []); ++s < a; ) {
    var i = e[s];
    n(i) ? Gi(r, i) : r[r.length] = i;
  }
  return r;
}
function pp(e) {
  var t = e == null ? 0 : e.length;
  return t ? fp(e) : [];
}
function vp(e) {
  return Pd(Bd(e, void 0, pp), e + "");
}
function Yt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return ct(e) ? e : [e];
}
function hp() {
  this.__data__ = new Nt(), this.size = 0;
}
function gp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function mp(e) {
  return this.__data__.get(e);
}
function bp(e) {
  return this.__data__.has(e);
}
var yp = 200;
function wp(e, t) {
  var n = this.__data__;
  if (n instanceof Nt) {
    var o = n.__data__;
    if (!oo || o.length < yp - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new kt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Mt(e) {
  var t = this.__data__ = new Nt(e);
  this.size = t.size;
}
Mt.prototype.clear = hp;
Mt.prototype.delete = gp;
Mt.prototype.get = mp;
Mt.prototype.has = bp;
Mt.prototype.set = wp;
function _p(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function Sp() {
  return [];
}
var Cp = Object.prototype, Ep = Cp.propertyIsEnumerable, ws = Object.getOwnPropertySymbols, Tp = ws ? function(e) {
  return e == null ? [] : (e = Object(e), _p(ws(e), function(t) {
    return Ep.call(e, t);
  }));
} : Sp;
function Op(e, t, n) {
  var o = t(e);
  return ct(e) ? o : Gi(o, n(e));
}
function _s(e) {
  return Op(e, Ki, Tp);
}
var $r = yn(_t, "DataView"), Ar = yn(_t, "Promise"), Pr = yn(_t, "Set"), Ss = "[object Map]", Ip = "[object Object]", Cs = "[object Promise]", Es = "[object Set]", Ts = "[object WeakMap]", Os = "[object DataView]", $p = bn($r), Ap = bn(oo), Pp = bn(Ar), Rp = bn(Pr), Mp = bn(Or), qt = Dn;
($r && qt(new $r(new ArrayBuffer(1))) != Os || oo && qt(new oo()) != Ss || Ar && qt(Ar.resolve()) != Cs || Pr && qt(new Pr()) != Es || Or && qt(new Or()) != Ts) && (qt = function(e) {
  var t = Dn(e), n = t == Ip ? e.constructor : void 0, o = n ? bn(n) : "";
  if (o)
    switch (o) {
      case $p:
        return Os;
      case Ap:
        return Ss;
      case Pp:
        return Cs;
      case Rp:
        return Es;
      case Mp:
        return Ts;
    }
  return t;
});
var Is = _t.Uint8Array, Lp = "__lodash_hash_undefined__";
function xp(e) {
  return this.__data__.set(e, Lp), this;
}
function Np(e) {
  return this.__data__.has(e);
}
function Do(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new kt(); ++t < n; )
    this.add(e[t]);
}
Do.prototype.add = Do.prototype.push = xp;
Do.prototype.has = Np;
function kp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Dp(e, t) {
  return e.has(t);
}
var Bp = 1, Fp = 2;
function qi(e, t, n, o, r, s) {
  var a = n & Bp, i = e.length, l = t.length;
  if (i != l && !(a && l > i))
    return !1;
  var u = s.get(e), p = s.get(t);
  if (u && p)
    return u == t && p == e;
  var f = -1, v = !0, g = n & Fp ? new Do() : void 0;
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
      if (!kp(t, function(m, C) {
        if (!Dp(g, C) && (d === m || r(d, m, n, o, s)))
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
function zp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Vp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Hp = 1, Wp = 2, jp = "[object Boolean]", Up = "[object Date]", Kp = "[object Error]", Gp = "[object Map]", qp = "[object Number]", Yp = "[object RegExp]", Zp = "[object Set]", Xp = "[object String]", Jp = "[object Symbol]", Qp = "[object ArrayBuffer]", ev = "[object DataView]", $s = yt ? yt.prototype : void 0, vr = $s ? $s.valueOf : void 0;
function tv(e, t, n, o, r, s, a) {
  switch (n) {
    case ev:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Qp:
      return !(e.byteLength != t.byteLength || !s(new Is(e), new Is(t)));
    case jp:
    case Up:
    case qp:
      return ta(+e, +t);
    case Kp:
      return e.name == t.name && e.message == t.message;
    case Yp:
    case Xp:
      return e == t + "";
    case Gp:
      var i = zp;
    case Zp:
      var l = o & Hp;
      if (i || (i = Vp), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Wp, a.set(e, t);
      var p = qi(i(e), i(t), o, r, s, a);
      return a.delete(e), p;
    case Jp:
      if (vr)
        return vr.call(e) == vr.call(t);
  }
  return !1;
}
var nv = 1, ov = Object.prototype, rv = ov.hasOwnProperty;
function av(e, t, n, o, r, s) {
  var a = n & nv, i = _s(e), l = i.length, u = _s(t), p = u.length;
  if (l != p && !a)
    return !1;
  for (var f = l; f--; ) {
    var v = i[f];
    if (!(a ? v in t : rv.call(t, v)))
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
      var O = a ? o(C, m, v, t, e, s) : o(m, C, v, e, t, s);
    if (!(O === void 0 ? m === C || r(m, C, n, o, s) : O)) {
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
var sv = 1, As = "[object Arguments]", Ps = "[object Array]", bo = "[object Object]", iv = Object.prototype, Rs = iv.hasOwnProperty;
function lv(e, t, n, o, r, s) {
  var a = ct(e), i = ct(t), l = a ? Ps : qt(e), u = i ? Ps : qt(t);
  l = l == As ? bo : l, u = u == As ? bo : u;
  var p = l == bo, f = u == bo, v = l == u;
  if (v && Ir(e)) {
    if (!Ir(t))
      return !1;
    a = !0, p = !1;
  }
  if (v && !p)
    return s || (s = new Mt()), a || Ui(e) ? qi(e, t, n, o, r, s) : tv(e, t, l, n, o, r, s);
  if (!(n & sv)) {
    var g = p && Rs.call(e, "__wrapped__"), d = f && Rs.call(t, "__wrapped__");
    if (g || d) {
      var h = g ? e.value() : e, b = d ? t.value() : t;
      return s || (s = new Mt()), r(h, b, n, o, s);
    }
  }
  return v ? (s || (s = new Mt()), av(e, t, n, o, r, s)) : !1;
}
function Zo(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !$n(e) && !$n(t) ? e !== e && t !== t : lv(e, t, n, o, Zo, r);
}
var uv = 1, cv = 2;
function dv(e, t, n, o) {
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
      var p = new Mt(), f;
      if (!(f === void 0 ? Zo(u, l, uv | cv, o, p) : f))
        return !1;
    }
  }
  return !0;
}
function Yi(e) {
  return e === e && !en(e);
}
function fv(e) {
  for (var t = Ki(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Yi(r)];
  }
  return t;
}
function Zi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function pv(e) {
  var t = fv(e);
  return t.length == 1 && t[0][2] ? Zi(t[0][0], t[0][1]) : function(n) {
    return n === e || dv(n, e, t);
  };
}
function vv(e, t) {
  return e != null && t in Object(e);
}
function hv(e, t, n) {
  t = Yo(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = so(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && na(r) && ea(a, r) && (ct(e) || oa(e)));
}
function Xi(e, t) {
  return e != null && hv(e, t, vv);
}
var gv = 1, mv = 2;
function bv(e, t) {
  return ra(e) && Yi(t) ? Zi(so(e), t) : function(n) {
    var o = Zt(n, e);
    return o === void 0 && o === t ? Xi(n, e) : Zo(t, o, gv | mv);
  };
}
function yv(e) {
  return function(t) {
    return t?.[e];
  };
}
function wv(e) {
  return function(t) {
    return sa(t, e);
  };
}
function _v(e) {
  return ra(e) ? yv(so(e)) : wv(e);
}
function Sv(e) {
  return typeof e == "function" ? e : e == null ? zi : typeof e == "object" ? ct(e) ? bv(e[0], e[1]) : pv(e) : _v(e);
}
var hr = function() {
  return _t.Date.now();
}, Cv = "Expected a function", Ev = Math.max, Tv = Math.min;
function Ov(e, t, n) {
  var o, r, s, a, i, l, u = 0, p = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Cv);
  t = ds(t) || 0, en(n) && (p = !!n.leading, f = "maxWait" in n, s = f ? Ev(ds(n.maxWait) || 0, t) : s, v = "trailing" in n ? !!n.trailing : v);
  function g(I) {
    var E = o, F = r;
    return o = r = void 0, u = I, a = e.apply(F, E), a;
  }
  function d(I) {
    return u = I, i = setTimeout(m, t), p ? g(I) : a;
  }
  function h(I) {
    var E = I - l, F = I - u, T = t - E;
    return f ? Tv(T, s - F) : T;
  }
  function b(I) {
    var E = I - l, F = I - u;
    return l === void 0 || E >= t || E < 0 || f && F >= s;
  }
  function m() {
    var I = hr();
    if (b(I))
      return C(I);
    i = setTimeout(m, h(I));
  }
  function C(I) {
    return i = void 0, v && o ? g(I) : (o = r = void 0, a);
  }
  function O() {
    i !== void 0 && clearTimeout(i), u = 0, o = l = r = i = void 0;
  }
  function $() {
    return i === void 0 ? a : C(hr());
  }
  function S() {
    var I = hr(), E = b(I);
    if (o = arguments, r = this, l = I, E) {
      if (i === void 0)
        return d(l);
      if (f)
        return clearTimeout(i), i = setTimeout(m, t), g(l);
    }
    return i === void 0 && (i = setTimeout(m, t)), a;
  }
  return S.cancel = O, S.flush = $, S;
}
function Iv(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Rd(e, Sv(t), r);
}
function Bo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function Zn(e, t) {
  return Zo(e, t);
}
function Xo(e) {
  return e == null;
}
function Ji(e) {
  return e === void 0;
}
function $v(e, t, n, o) {
  if (!en(e))
    return e;
  t = Yo(t, e);
  for (var r = -1, s = t.length, a = s - 1, i = e; i != null && ++r < s; ) {
    var l = so(t[r]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (r != a) {
      var p = i[l];
      u = void 0, u === void 0 && (u = en(p) ? p : ea(t[r + 1]) ? [] : {});
    }
    Dd(i, l, u), i = i[l];
  }
  return e;
}
function Av(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], i = sa(e, a);
    n(i, a) && $v(s, Yo(a, e), i);
  }
  return s;
}
function Pv(e, t) {
  return Av(e, t, function(n, o) {
    return Xi(e, o);
  });
}
var Rv = vp(function(e, t) {
  return e == null ? {} : Pv(e, t);
});
const On = (e) => e === void 0, vn = (e) => typeof e == "boolean", me = (e) => typeof e == "number", Xe = (e) => typeof Element > "u" ? !1 : e instanceof Element, Mv = (e) => _e(e) ? !Number.isNaN(Number(e)) : !1;
var Lv = Object.defineProperty, xv = Object.defineProperties, Nv = Object.getOwnPropertyDescriptors, Ms = Object.getOwnPropertySymbols, kv = Object.prototype.hasOwnProperty, Dv = Object.prototype.propertyIsEnumerable, Ls = (e, t, n) => t in e ? Lv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Bv = (e, t) => {
  for (var n in t || (t = {}))
    kv.call(t, n) && Ls(e, n, t[n]);
  if (Ms)
    for (var n of Ms(t))
      Dv.call(t, n) && Ls(e, n, t[n]);
  return e;
}, Fv = (e, t) => xv(e, Nv(t));
function zv(e, t) {
  var n;
  const o = dn();
  return Ur(() => {
    o.value = e();
  }, Fv(Bv({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), jr(o);
}
var xs;
const ce = typeof window < "u", Ns = (e) => typeof e == "function", Vv = (e) => typeof e == "string", Qi = () => {
}, Rr = ce && ((xs = window?.navigator) == null ? void 0 : xs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ia(e) {
  return typeof e == "function" ? e() : c(e);
}
function Hv(e) {
  return e;
}
function Wv(e, t) {
  let n, o, r;
  const s = A(!0), a = () => {
    s.value = !0, r();
  };
  X(e, a, { flush: "sync" });
  const i = Ns(t) ? t : t.get, l = Ns(t) ? void 0 : t.set, u = Vu((p, f) => (o = p, r = f, {
    get() {
      return s.value && (n = i(), s.value = !1), o(), n;
    },
    set(v) {
      l?.(v);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = a), u;
}
function io(e) {
  return zu() ? (Ii(e), !0) : !1;
}
function jv(e, t = !0) {
  Ae() ? be(e) : t ? e() : fe(e);
}
function Fo(e, t, n = {}) {
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
    }, ia(t));
  }
  return o && (r.value = !0, ce && l()), io(i), {
    isPending: jr(r),
    start: l,
    stop: i
  };
}
function Pt(e) {
  var t;
  const n = ia(e);
  return (t = n?.$el) != null ? t : n;
}
const lo = ce ? window : void 0;
function Le(...e) {
  let t, n, o, r;
  if (Vv(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = lo) : [t, n, o, r] = e, !t)
    return Qi;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((p) => p()), s.length = 0;
  }, i = (p, f, v, g) => (p.addEventListener(f, v, g), () => p.removeEventListener(f, v, g)), l = X(() => [Pt(t), ia(r)], ([p, f]) => {
    a(), p && s.push(...n.flatMap((v) => o.map((g) => i(p, v, g, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), a();
  };
  return io(u), u;
}
let ks = !1;
function Uv(e, t, n = {}) {
  const { window: o = lo, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  Rr && !ks && (ks = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", Qi)));
  let i = !0;
  const l = (v) => r.some((g) => {
    if (typeof g == "string")
      return Array.from(o.document.querySelectorAll(g)).some((d) => d === v.target || v.composedPath().includes(d));
    {
      const d = Pt(g);
      return d && (v.target === d || v.composedPath().includes(d));
    }
  }), p = [
    Le(o, "click", (v) => {
      const g = Pt(e);
      if (!(!g || g === v.target || v.composedPath().includes(g))) {
        if (v.detail === 0 && (i = !l(v)), !i) {
          i = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: s }),
    Le(o, "pointerdown", (v) => {
      const g = Pt(e);
      g && (i = !v.composedPath().includes(g) && !l(v));
    }, { passive: !0 }),
    a && Le(o, "blur", (v) => {
      var g;
      const d = Pt(e);
      ((g = o.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !d?.contains(o.document.activeElement) && t(v);
    })
  ].filter(Boolean);
  return () => p.forEach((v) => v());
}
function Kv(e = {}) {
  var t;
  const { window: n = lo } = e, o = (t = e.document) != null ? t : n?.document, r = Wv(() => null, () => o?.activeElement);
  return n && (Le(n, "blur", (s) => {
    s.relatedTarget === null && r.trigger();
  }, !0), Le(n, "focus", r.trigger, !0)), r;
}
function el(e, t = !1) {
  const n = A(), o = () => n.value = !!e();
  return o(), jv(o, t), n;
}
const Ds = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Bs = "__vueuse_ssr_handlers__";
Ds[Bs] = Ds[Bs] || {};
var Fs = Object.getOwnPropertySymbols, Gv = Object.prototype.hasOwnProperty, qv = Object.prototype.propertyIsEnumerable, Yv = (e, t) => {
  var n = {};
  for (var o in e)
    Gv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Fs)
    for (var o of Fs(e))
      t.indexOf(o) < 0 && qv.call(e, o) && (n[o] = e[o]);
  return n;
};
function st(e, t, n = {}) {
  const o = n, { window: r = lo } = o, s = Yv(o, ["window"]);
  let a;
  const i = el(() => r && "ResizeObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = X(() => Pt(e), (f) => {
    l(), i.value && r && f && (a = new ResizeObserver(t), a.observe(f, s));
  }, { immediate: !0, flush: "post" }), p = () => {
    l(), u();
  };
  return io(p), {
    isSupported: i,
    stop: p
  };
}
var zs = Object.getOwnPropertySymbols, Zv = Object.prototype.hasOwnProperty, Xv = Object.prototype.propertyIsEnumerable, Jv = (e, t) => {
  var n = {};
  for (var o in e)
    Zv.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && zs)
    for (var o of zs(e))
      t.indexOf(o) < 0 && Xv.call(e, o) && (n[o] = e[o]);
  return n;
};
function Qv(e, t, n = {}) {
  const o = n, { window: r = lo } = o, s = Jv(o, ["window"]);
  let a;
  const i = el(() => r && "MutationObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, u = X(() => Pt(e), (f) => {
    l(), i.value && r && f && (a = new MutationObserver(t), a.observe(f, s));
  }, { immediate: !0 }), p = () => {
    l(), u();
  };
  return io(p), {
    isSupported: i,
    stop: p
  };
}
var Vs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Vs || (Vs = {}));
var eh = Object.defineProperty, Hs = Object.getOwnPropertySymbols, th = Object.prototype.hasOwnProperty, nh = Object.prototype.propertyIsEnumerable, Ws = (e, t, n) => t in e ? eh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, oh = (e, t) => {
  for (var n in t || (t = {}))
    th.call(t, n) && Ws(e, n, t[n]);
  if (Hs)
    for (var n of Hs(t))
      nh.call(t, n) && Ws(e, n, t[n]);
  return e;
};
const rh = {
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
oh({
  linear: Hv
}, rh);
class tl extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function nl(e, t) {
  throw new tl(`[${e}] ${t}`);
}
function Se(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = _e(e) ? new tl(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const js = {
  current: 0
}, Us = A(0), ol = 2e3, Ks = Symbol("elZIndexContextKey"), rl = Symbol("zIndexContextKey"), la = (e) => {
  const t = Ae() ? ae(Ks, js) : js, n = e || (Ae() ? ae(rl, void 0) : void 0), o = y(() => {
    const a = c(n);
    return me(a) ? a : ol;
  }), r = y(() => o.value + Us.value), s = () => (t.current++, Us.value = t.current, r.value);
  return !ce && !ae(Ks) && Se("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var ah = {
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
const sh = (e) => (t, n) => ih(t, n, c(e)), ih = (e, t, n) => Zt(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), lh = (e) => {
  const t = y(() => c(e).name), n = Kr(e) ? e : A(e);
  return {
    lang: t,
    locale: n,
    t: sh(e)
  };
}, al = Symbol("localeContextKey"), ua = (e) => {
  const t = e || ae(al, A());
  return lh(y(() => t.value || ah));
}, sl = "__epPropKey", Y = (e) => e, uh = (e) => $e(e) && !!e[sl], Jo = (e, t) => {
  if (!$e(e) || uh(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, l = {
    type: s,
    required: !!o,
    validator: n || a ? (u) => {
      let p = !1, f = [];
      if (n && (f = Array.from(n), Na(e, "default") && f.push(r), p || (p = f.includes(u))), a && (p || (p = a(u))), !p && f.length > 0) {
        const v = [...new Set(f)].map((g) => JSON.stringify(g)).join(", ");
        kn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}.`);
      }
      return p;
    } : void 0,
    [sl]: !0
  };
  return Na(e, "default") && (l.default = r), l;
}, se = (e) => Bo(Object.entries(e).map(([t, n]) => [
  t,
  Jo(n, t)
])), il = ["", "default", "small", "large"], Qo = Jo({
  type: String,
  values: il,
  required: !1
}), ll = Symbol("size"), ch = () => {
  const e = ae(ll, {});
  return y(() => c(e.size) || "");
}, ul = Symbol("emptyValuesContextKey"), dh = "use-empty-values", fh = ["", void 0, null], ph = void 0, vh = se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => ge(e) ? !e() : !e
  }
}), hh = (e, t) => {
  const n = Ae() ? ae(ul, A({})) : A({}), o = y(() => e.emptyValues || n.value.emptyValues || fh), r = y(() => ge(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : ge(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : ph), s = (a) => o.value.includes(a);
  return o.value.includes(r.value) || Se(dh, "value-on-clear should be a value of empty-values"), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, Gs = (e) => Object.keys(e), zo = A();
function er(e, t = void 0) {
  const n = Ae() ? ae(Ni, zo) : zo;
  return e ? y(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function cl(e, t) {
  const n = er(), o = de(e, y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || qn;
  })), r = ua(y(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = la(y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || ol;
  })), a = y(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return gh(y(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const gh = (e, t, n = !1) => {
  var o;
  const r = !!Ae(), s = r ? er() : void 0, a = (o = void 0) != null ? o : r ? Qe : void 0;
  if (!a) {
    Se("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = y(() => {
    const l = c(e);
    return s?.value ? mh(s.value, l) : l;
  });
  return a(Ni, i), a(al, y(() => i.value.locale)), a(ki, y(() => i.value.namespace)), a(rl, y(() => i.value.zIndex)), a(ll, {
    size: y(() => i.value.size || "")
  }), a(ul, y(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !zo.value) && (zo.value = i.value), i;
}, mh = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Gs(e), ...Gs(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, Ke = "update:modelValue", An = "change", qs = "input";
var ie = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const bh = "utils/dom/style", dl = (e = "") => e.split(" ").filter((t) => !!t.trim()), Ys = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, yh = (e, t) => {
  !e || !t.trim() || e.classList.add(...dl(t));
}, wh = (e, t) => {
  !e || !t.trim() || e.classList.remove(...dl(t));
}, _h = (e, t) => {
  var n;
  if (!ce || !e)
    return "";
  let o = Wr(t);
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
function tn(e, t = "px") {
  if (!e)
    return "";
  if (me(e) || Mv(e))
    return `${e}${t}`;
  if (_e(e))
    return e;
  Se(bh, "binding value must be a string or number");
}
let yo;
const Sh = (e) => {
  var t;
  if (!ce)
    return 0;
  if (yo !== void 0)
    return yo;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const s = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), yo = o - s, yo;
};
function Ch(e, t) {
  if (!ce)
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
const ot = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, fl = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ca = (e) => (e.install = Rt, e), Eh = se({
  size: {
    type: Y([Number, String])
  },
  color: {
    type: String
  }
}), Th = V({
  name: "ElIcon",
  inheritAttrs: !1
}), Oh = /* @__PURE__ */ V({
  ...Th,
  props: Eh,
  setup(e) {
    const t = e, n = de("icon"), o = y(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: On(r) ? void 0 : tn(r),
        "--color": s
      };
    });
    return (r, s) => (_(), D("i", Jt({
      class: c(n).b(),
      style: c(o)
    }, r.$attrs), [
      G(r.$slots, "default")
    ], 16));
  }
});
var Ih = /* @__PURE__ */ ie(Oh, [["__file", "icon.vue"]]);
const xe = ot(Ih);
/*! Element Plus Icons Vue v2.3.1 */
var $h = /* @__PURE__ */ V({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ah = $h, Ph = /* @__PURE__ */ V({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (_(), D("svg", {
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
}), Rh = Ph, Mh = /* @__PURE__ */ V({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Lh = Mh, xh = /* @__PURE__ */ V({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (_(), D("svg", {
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
}), da = xh, Nh = /* @__PURE__ */ V({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Vo = Nh, kh = /* @__PURE__ */ V({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (_(), D("svg", {
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
}), Dh = kh, Bh = /* @__PURE__ */ V({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Fh = Bh, zh = /* @__PURE__ */ V({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), pl = zh, Vh = /* @__PURE__ */ V({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Hh = Vh, Wh = /* @__PURE__ */ V({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), jh = Wh, Uh = /* @__PURE__ */ V({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (_(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      R("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Kh = Uh;
const Lt = Y([
  String,
  Object,
  Function
]), vl = {
  Close: Vo
}, Gh = {
  Close: Vo
}, Ho = {
  success: Hh,
  warning: Kh,
  error: Lh,
  info: Fh
}, hl = {
  validating: pl,
  success: Rh,
  error: da
}, qh = () => ce && /firefox/i.test(window.navigator.userAgent);
let De;
const Yh = {
  height: "0",
  visibility: "hidden",
  overflow: qh() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Zh = [
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
function Xh(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Zh.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Zs(e, t = 1, n) {
  var o;
  De || (De = document.createElement("textarea"), document.body.appendChild(De));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: i } = Xh(e);
  i.forEach(([f, v]) => De?.style.setProperty(f, v)), Object.entries(Yh).forEach(([f, v]) => De?.style.setProperty(f, v, "important")), De.value = e.value || e.placeholder || "";
  let l = De.scrollHeight;
  const u = {};
  a === "border-box" ? l = l + s : a === "content-box" && (l = l - r), De.value = "";
  const p = De.scrollHeight - r;
  if (me(t)) {
    let f = p * t;
    a === "border-box" && (f = f + r + s), l = Math.max(f, l), u.minHeight = `${f}px`;
  }
  if (me(n)) {
    let f = p * n;
    a === "border-box" && (f = f + r + s), l = Math.min(f, l);
  }
  return u.height = `${l}px`, (o = De.parentNode) == null || o.removeChild(De), De = void 0, u;
}
const gl = (e) => e, Jh = se({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Bn = (e) => Rv(Jh, e), Qh = se({
  id: {
    type: String,
    default: void 0
  },
  size: Qo,
  disabled: Boolean,
  modelValue: {
    type: Y([
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
    type: Y([Boolean, Object]),
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
    type: Lt
  },
  prefixIcon: {
    type: Lt
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
    type: Y([Object, Array, String]),
    default: () => gl({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Bn(["ariaLabel"])
}), eg = {
  [Ke]: (e) => _e(e),
  input: (e) => _e(e),
  change: (e) => _e(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, tg = ["class", "style"], ng = /^on[A-Z]/, og = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = y(() => (n?.value || []).concat(tg)), r = Ae();
  return r ? y(() => {
    var s;
    return Bo(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && ng.test(a))));
  }) : (Se("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), y(() => ({})));
}, fa = Symbol("formContextKey"), Wo = Symbol("formItemContextKey"), Mr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, rg = Symbol("elIdInjection"), ml = () => Ae() ? ae(rg, Mr) : Mr, hn = (e) => {
  const t = ml();
  !ce && t === Mr && Se("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Qr();
  return zv(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, tr = () => {
  const e = ae(fa, void 0), t = ae(Wo, void 0);
  return {
    form: e,
    formItem: t
  };
}, pa = (e, {
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
  return be(() => {
    s = X([it(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : hn().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !l && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), Gr(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, bl = (e) => {
  const t = Ae();
  return y(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, uo = (e, t = {}) => {
  const n = A(void 0), o = t.prop ? n : bl("size"), r = t.global ? n : ch(), s = t.form ? { size: void 0 } : ae(fa, void 0), a = t.formItem ? { size: void 0 } : ae(Wo, void 0);
  return y(() => o.value || c(e) || a?.size || s?.size || r.value || "");
}, nr = (e) => {
  const t = bl("disabled"), n = ae(fa, void 0);
  return y(() => t.value || c(e) || n?.disabled || !1);
};
function yl(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = Ae(), { emit: a } = s, i = dn(), l = A(!1), u = (v) => {
    ge(t) && t(v) || l.value || (l.value = !0, a("focus", v), n?.());
  }, p = (v) => {
    var g;
    ge(o) && o(v) || v.relatedTarget && ((g = i.value) != null && g.contains(v.relatedTarget)) || (l.value = !1, a("blur", v), r?.());
  }, f = () => {
    var v, g;
    (v = i.value) != null && v.contains(document.activeElement) && i.value !== document.activeElement || (g = e.value) == null || g.focus();
  };
  return X(i, (v) => {
    v && v.setAttribute("tabindex", "-1");
  }), Le(i, "focus", u, !0), Le(i, "blur", p, !0), Le(i, "click", f, !0), process.env.NODE_ENV === "test" && be(() => {
    const v = Xe(e.value) ? e.value : document.querySelector("input,textarea");
    v && (Le(v, "focus", u, !0), Le(v, "blur", p, !0));
  }), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: p
  };
}
const ag = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function wl({
  afterComposition: e,
  emit: t
}) {
  const n = A(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, r = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, p = u[u.length - 1] || "";
    n.value = !ag(p);
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
function sg(e) {
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
const _l = "ElInput", ig = V({
  name: _l,
  inheritAttrs: !1
}), lg = /* @__PURE__ */ V({
  ...ig,
  props: Qh,
  emits: eg,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Hu(), s = og(), a = qr(), i = y(() => [
      o.type === "textarea" ? h.b() : d.b(),
      d.m(v.value),
      d.is("disabled", g.value),
      d.is("exceed", Ve.value),
      {
        [d.b("group")]: a.prepend || a.append,
        [d.m("prefix")]: a.prefix || o.prefixIcon,
        [d.m("suffix")]: a.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [d.bm("suffix", "password-clear")]: le.value && ve.value,
        [d.b("hidden")]: o.type === "hidden"
      },
      r.class
    ]), l = y(() => [
      d.e("wrapper"),
      d.is("focus", F.value)
    ]), { form: u, formItem: p } = tr(), { inputId: f } = pa(o, {
      formItemContext: p
    }), v = uo(), g = nr(), d = de("input"), h = de("textarea"), b = dn(), m = dn(), C = A(!1), O = A(!1), $ = A(), S = dn(o.inputStyle), I = y(() => b.value || m.value), { wrapperRef: E, isFocused: F, handleFocus: T, handleBlur: z } = yl(I, {
      beforeFocus() {
        return g.value;
      },
      afterBlur() {
        var x;
        o.validateEvent && ((x = p?.validate) == null || x.call(p, "blur").catch((oe) => Se(oe)));
      }
    }), N = y(() => {
      var x;
      return (x = u?.statusIcon) != null ? x : !1;
    }), P = y(() => p?.validateState || ""), j = y(() => P.value && hl[P.value]), re = y(() => O.value ? jh : Dh), J = y(() => [
      r.style
    ]), Q = y(() => [
      o.inputStyle,
      S.value,
      { resize: o.resize }
    ]), B = y(() => Xo(o.modelValue) ? "" : String(o.modelValue)), le = y(() => o.clearable && !g.value && !o.readonly && !!B.value && (F.value || C.value)), ve = y(() => o.showPassword && !g.value && !!B.value && (!!B.value || F.value)), ye = y(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !g.value && !o.readonly && !o.showPassword), rt = y(() => B.value.length), Ve = y(() => !!ye.value && rt.value > Number(o.maxlength)), ft = y(() => !!a.suffix || !!o.suffixIcon || le.value || o.showPassword || ye.value || !!P.value && N.value), [ke, Ce] = sg(b);
    st(m, (x) => {
      if (q(), !ye.value || o.resize !== "both")
        return;
      const oe = x[0], { width: Ze } = oe.contentRect;
      $.value = {
        right: `calc(100% - ${Ze + 15 + 6}px)`
      };
    });
    const K = () => {
      const { type: x, autosize: oe } = o;
      if (!(!ce || x !== "textarea" || !m.value))
        if (oe) {
          const Ze = $e(oe) ? oe.minRows : void 0, Vt = $e(oe) ? oe.maxRows : void 0, Ht = Zs(m.value, Ze, Vt);
          S.value = {
            overflowY: "hidden",
            ...Ht
          }, fe(() => {
            m.value.offsetHeight, S.value = Ht;
          });
        } else
          S.value = {
            minHeight: Zs(m.value).minHeight
          };
    }, q = ((x) => {
      let oe = !1;
      return () => {
        var Ze;
        if (oe || !o.autosize)
          return;
        ((Ze = m.value) == null ? void 0 : Ze.offsetParent) === null || (x(), oe = !0);
      };
    })(K), he = () => {
      const x = I.value, oe = o.formatter ? o.formatter(B.value) : B.value;
      !x || x.value === oe || (x.value = oe);
    }, Pe = async (x) => {
      ke();
      let { value: oe } = x.target;
      if (o.formatter && o.parser && (oe = o.parser(oe)), !pt.value) {
        if (oe === B.value) {
          he();
          return;
        }
        n(Ke, oe), n(qs, oe), await fe(), he(), Ce();
      }
    }, He = (x) => {
      let { value: oe } = x.target;
      o.formatter && o.parser && (oe = o.parser(oe)), n(An, oe);
    }, {
      isComposing: pt,
      handleCompositionStart: Re,
      handleCompositionUpdate: Dt,
      handleCompositionEnd: St
    } = wl({ emit: n, afterComposition: Pe }), Bt = () => {
      ke(), O.value = !O.value, setTimeout(Ce);
    }, Ct = () => {
      var x;
      return (x = I.value) == null ? void 0 : x.focus();
    }, vt = () => {
      var x;
      return (x = I.value) == null ? void 0 : x.blur();
    }, Ft = (x) => {
      C.value = !1, n("mouseleave", x);
    }, Oe = (x) => {
      C.value = !0, n("mouseenter", x);
    }, Ye = (x) => {
      n("keydown", x);
    }, zt = () => {
      var x;
      (x = I.value) == null || x.select();
    }, on = () => {
      n(Ke, ""), n(An, ""), n("clear"), n(qs, "");
    };
    return X(() => o.modelValue, () => {
      var x;
      fe(() => K()), o.validateEvent && ((x = p?.validate) == null || x.call(p, "change").catch((oe) => Se(oe)));
    }), X(B, () => he()), X(() => o.type, async () => {
      await fe(), he(), K();
    }), be(() => {
      !o.formatter && o.parser && Se(_l, "If you set the parser, you also need to set the formatter."), he(), fe(K);
    }), t({
      input: b,
      textarea: m,
      ref: I,
      textareaStyle: Q,
      autosize: it(o, "autosize"),
      isComposing: pt,
      focus: Ct,
      blur: vt,
      select: zt,
      clear: on,
      resizeTextarea: K
    }), (x, oe) => (_(), D("div", {
      class: L([
        c(i),
        {
          [c(d).bm("group", "append")]: x.$slots.append,
          [c(d).bm("group", "prepend")]: x.$slots.prepend
        }
      ]),
      style: pe(c(J)),
      onMouseenter: Oe,
      onMouseleave: Ft
    }, [
      H(" input "),
      x.type !== "textarea" ? (_(), D(Ge, { key: 0 }, [
        H(" prepend slot "),
        x.$slots.prepend ? (_(), D("div", {
          key: 0,
          class: L(c(d).be("group", "prepend"))
        }, [
          G(x.$slots, "prepend")
        ], 2)) : H("v-if", !0),
        R("div", {
          ref_key: "wrapperRef",
          ref: E,
          class: L(c(l))
        }, [
          H(" prefix slot "),
          x.$slots.prefix || x.prefixIcon ? (_(), D("span", {
            key: 0,
            class: L(c(d).e("prefix"))
          }, [
            R("span", {
              class: L(c(d).e("prefix-inner"))
            }, [
              G(x.$slots, "prefix"),
              x.prefixIcon ? (_(), U(c(xe), {
                key: 0,
                class: L(c(d).e("icon"))
              }, {
                default: W(() => [
                  (_(), U(Be(x.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0),
          R("input", Jt({
            id: c(f),
            ref_key: "input",
            ref: b,
            class: c(d).e("inner")
          }, c(s), {
            minlength: x.minlength,
            maxlength: x.maxlength,
            type: x.showPassword ? O.value ? "text" : "password" : x.type,
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
            onCompositionstart: c(Re),
            onCompositionupdate: c(Dt),
            onCompositionend: c(St),
            onInput: Pe,
            onChange: He,
            onKeydown: Ye
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          H(" suffix slot "),
          c(ft) ? (_(), D("span", {
            key: 1,
            class: L(c(d).e("suffix"))
          }, [
            R("span", {
              class: L(c(d).e("suffix-inner"))
            }, [
              !c(le) || !c(ve) || !c(ye) ? (_(), D(Ge, { key: 0 }, [
                G(x.$slots, "suffix"),
                x.suffixIcon ? (_(), U(c(xe), {
                  key: 0,
                  class: L(c(d).e("icon"))
                }, {
                  default: W(() => [
                    (_(), U(Be(x.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : H("v-if", !0)
              ], 64)) : H("v-if", !0),
              c(le) ? (_(), U(c(xe), {
                key: 1,
                class: L([c(d).e("icon"), c(d).e("clear")]),
                onMousedown: Me(c(Rt), ["prevent"]),
                onClick: on
              }, {
                default: W(() => [
                  ee(c(da))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : H("v-if", !0),
              c(ve) ? (_(), U(c(xe), {
                key: 2,
                class: L([c(d).e("icon"), c(d).e("password")]),
                onClick: Bt
              }, {
                default: W(() => [
                  (_(), U(Be(c(re))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              c(ye) ? (_(), D("span", {
                key: 3,
                class: L(c(d).e("count"))
              }, [
                R("span", {
                  class: L(c(d).e("count-inner"))
                }, Z(c(rt)) + " / " + Z(x.maxlength), 3)
              ], 2)) : H("v-if", !0),
              c(P) && c(j) && c(N) ? (_(), U(c(xe), {
                key: 4,
                class: L([
                  c(d).e("icon"),
                  c(d).e("validateIcon"),
                  c(d).is("loading", c(P) === "validating")
                ])
              }, {
                default: W(() => [
                  (_(), U(Be(c(j))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0)
        ], 2),
        H(" append slot "),
        x.$slots.append ? (_(), D("div", {
          key: 1,
          class: L(c(d).be("group", "append"))
        }, [
          G(x.$slots, "append")
        ], 2)) : H("v-if", !0)
      ], 64)) : (_(), D(Ge, { key: 1 }, [
        H(" textarea "),
        R("textarea", Jt({
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
          onCompositionstart: c(Re),
          onCompositionupdate: c(Dt),
          onCompositionend: c(St),
          onInput: Pe,
          onFocus: c(T),
          onBlur: c(z),
          onChange: He,
          onKeydown: Ye
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(ye) ? (_(), D("span", {
          key: 0,
          style: pe($.value),
          class: L(c(d).e("count"))
        }, Z(c(rt)) + " / " + Z(x.maxlength), 7)) : H("v-if", !0)
      ], 64))
    ], 38));
  }
});
var ug = /* @__PURE__ */ ie(lg, [["__file", "input.vue"]]);
const cg = ot(ug), Cn = 4, dg = {
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
}, fg = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), va = Symbol("scrollbarContextKey"), pg = se({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), vg = "Thumb", hg = /* @__PURE__ */ V({
  __name: "thumb",
  props: pg,
  setup(e) {
    const t = e, n = ae(va), o = de("scrollbar");
    n || nl(vg, "can not inject scrollbar context");
    const r = A(), s = A(), a = A({}), i = A(!1);
    let l = !1, u = !1, p = ce ? document.onselectstart : null;
    const f = y(() => dg[t.vertical ? "vertical" : "horizontal"]), v = y(() => fg({
      size: t.size,
      move: t.move,
      bar: f.value
    })), g = y(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / s.value[f.value.offset]), d = (I) => {
      var E;
      if (I.stopPropagation(), I.ctrlKey || [1, 2].includes(I.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), b(I);
      const F = I.currentTarget;
      F && (a.value[f.value.axis] = F[f.value.offset] - (I[f.value.client] - F.getBoundingClientRect()[f.value.direction]));
    }, h = (I) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const E = Math.abs(I.target.getBoundingClientRect()[f.value.direction] - I[f.value.client]), F = s.value[f.value.offset] / 2, T = (E - F) * 100 * g.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = T * n.wrapElement[f.value.scrollSize] / 100;
    }, b = (I) => {
      I.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", m), document.addEventListener("mouseup", C), p = document.onselectstart, document.onselectstart = () => !1;
    }, m = (I) => {
      if (!r.value || !s.value || l === !1)
        return;
      const E = a.value[f.value.axis];
      if (!E)
        return;
      const F = (r.value.getBoundingClientRect()[f.value.direction] - I[f.value.client]) * -1, T = s.value[f.value.offset] - E, z = (F - T) * 100 * g.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = z * n.wrapElement[f.value.scrollSize] / 100;
    }, C = () => {
      l = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", C), S(), u && (i.value = !1);
    }, O = () => {
      u = !1, i.value = !!t.size;
    }, $ = () => {
      u = !0, i.value = l;
    };
    dt(() => {
      S(), document.removeEventListener("mouseup", C);
    });
    const S = () => {
      document.onselectstart !== p && (document.onselectstart = p);
    };
    return Le(it(n, "scrollbarElement"), "mousemove", O), Le(it(n, "scrollbarElement"), "mouseleave", $), (I, E) => (_(), U(mn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: W(() => [
        Ne(R("div", {
          ref_key: "instance",
          ref: r,
          class: L([c(o).e("bar"), c(o).is(c(f).key)]),
          onMousedown: h
        }, [
          R("div", {
            ref_key: "thumb",
            ref: s,
            class: L(c(o).e("thumb")),
            style: pe(c(v)),
            onMousedown: d
          }, null, 38)
        ], 34), [
          [ut, I.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Xs = /* @__PURE__ */ ie(hg, [["__file", "thumb.vue"]]);
const gg = se({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), mg = /* @__PURE__ */ V({
  __name: "bar",
  props: gg,
  setup(e, { expose: t }) {
    const n = e, o = ae(va), r = A(0), s = A(0), a = A(""), i = A(""), l = A(1), u = A(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const g = v.offsetHeight - Cn, d = v.offsetWidth - Cn;
          s.value = v.scrollTop * 100 / g * l.value, r.value = v.scrollLeft * 100 / d * u.value;
        }
      },
      update: () => {
        const v = o?.wrapElement;
        if (!v)
          return;
        const g = v.offsetHeight - Cn, d = v.offsetWidth - Cn, h = g ** 2 / v.scrollHeight, b = d ** 2 / v.scrollWidth, m = Math.max(h, n.minSize), C = Math.max(b, n.minSize);
        l.value = h / (g - h) / (m / (g - m)), u.value = b / (d - b) / (C / (d - C)), i.value = m + Cn < g ? `${m}px` : "", a.value = C + Cn < d ? `${C}px` : "";
      }
    }), (v, g) => (_(), D(Ge, null, [
      ee(Xs, {
        move: r.value,
        ratio: u.value,
        size: a.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      ee(Xs, {
        move: s.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var bg = /* @__PURE__ */ ie(mg, [["__file", "bar.vue"]]);
const yg = se({
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
    type: Y([String, Object, Array]),
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
  ...Bn(["ariaLabel", "ariaOrientation"])
}), wg = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(me)
}, Lr = "ElScrollbar", _g = V({
  name: Lr
}), Sg = /* @__PURE__ */ V({
  ..._g,
  props: yg,
  emits: wg,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = de("scrollbar");
    let s, a, i = 0, l = 0;
    const u = A(), p = A(), f = A(), v = A(), g = y(() => {
      const S = {};
      return o.height && (S.height = tn(o.height)), o.maxHeight && (S.maxHeight = tn(o.maxHeight)), [o.wrapStyle, S];
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
    function m(S, I) {
      $e(S) ? p.value.scrollTo(S) : me(S) && me(I) && p.value.scrollTo(S, I);
    }
    const C = (S) => {
      if (!me(S)) {
        Se(Lr, "value must be a number");
        return;
      }
      p.value.scrollTop = S;
    }, O = (S) => {
      if (!me(S)) {
        Se(Lr, "value must be a number");
        return;
      }
      p.value.scrollLeft = S;
    }, $ = () => {
      var S;
      (S = v.value) == null || S.update();
    };
    return X(() => o.noresize, (S) => {
      S ? (s?.(), a?.()) : ({ stop: s } = st(f, $), a = Le("resize", $));
    }, { immediate: !0 }), X(() => [o.maxHeight, o.height], () => {
      o.native || fe(() => {
        var S;
        $(), p.value && ((S = v.value) == null || S.handleScroll(p.value));
      });
    }), Qe(va, Qt({
      scrollbarElement: u,
      wrapElement: p
    })), Wu(() => {
      p.value && (p.value.scrollTop = i, p.value.scrollLeft = l);
    }), be(() => {
      o.native || fe(() => {
        $();
      });
    }), ju(() => $()), t({
      wrapRef: p,
      update: $,
      scrollTo: m,
      setScrollTop: C,
      setScrollLeft: O,
      handleScroll: b
    }), (S, I) => (_(), D("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: L(c(r).b())
    }, [
      R("div", {
        ref_key: "wrapRef",
        ref: p,
        class: L(c(d)),
        style: pe(c(g)),
        tabindex: S.tabindex,
        onScroll: b
      }, [
        (_(), U(Be(S.tag), {
          id: S.id,
          ref_key: "resizeRef",
          ref: f,
          class: L(c(h)),
          style: pe(S.viewStyle),
          role: S.role,
          "aria-label": S.ariaLabel,
          "aria-orientation": S.ariaOrientation
        }, {
          default: W(() => [
            G(S.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      S.native ? H("v-if", !0) : (_(), U(bg, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        always: S.always,
        "min-size": S.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Cg = /* @__PURE__ */ ie(Sg, [["__file", "scrollbar.vue"]]);
const Eg = ot(Cg), ha = Symbol("popper"), Sl = Symbol("popperContent"), Tg = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Cl = se({
  role: {
    type: String,
    values: Tg,
    default: "tooltip"
  }
}), Og = V({
  name: "ElPopper",
  inheritAttrs: !1
}), Ig = /* @__PURE__ */ V({
  ...Og,
  props: Cl,
  setup(e, { expose: t }) {
    const n = e, o = A(), r = A(), s = A(), a = A(), i = y(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: i
    };
    return t(l), Qe(ha, l), (u, p) => G(u.$slots, "default");
  }
});
var $g = /* @__PURE__ */ ie(Ig, [["__file", "popper.vue"]]);
const El = se({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Ag = V({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Pg = /* @__PURE__ */ V({
  ...Ag,
  props: El,
  setup(e, { expose: t }) {
    const n = e, o = de("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = ae(Sl, void 0);
    return X(() => n.arrowOffset, (i) => {
      r.value = i;
    }), dt(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, l) => (_(), D("span", {
      ref_key: "arrowRef",
      ref: s,
      class: L(c(o).e("arrow")),
      style: pe(c(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Rg = /* @__PURE__ */ ie(Pg, [["__file", "arrow.vue"]]);
const Tl = se({
  virtualRef: {
    type: Y(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Y(Function)
  },
  onMouseleave: {
    type: Y(Function)
  },
  onClick: {
    type: Y(Function)
  },
  onKeydown: {
    type: Y(Function)
  },
  onFocus: {
    type: Y(Function)
  },
  onBlur: {
    type: Y(Function)
  },
  onContextmenu: {
    type: Y(Function)
  },
  id: String,
  open: Boolean
}), Ol = Symbol("elForwardRef"), Mg = (e) => {
  Qe(Ol, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Lg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), xr = (e) => {
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
}, gr = "ElOnlyChild", xg = V({
  name: gr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ae(Ol), s = Lg((o = r?.setForwardRef) != null ? o : Rt);
    return () => {
      var a;
      const i = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Se(gr, "requires exact only one valid child."), null;
      const l = Il(i);
      return l ? Ne(Uu(l, n), [[s]]) : (Se(gr, "no valid child node found"), null);
    };
  }
});
function Il(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if ($e(n))
      switch (n.type) {
        case Ku:
          continue;
        case $i:
        case "svg":
          return Js(n);
        case Ge:
          return Il(n.children);
        default:
          return n;
      }
    return Js(n);
  }
  return null;
}
function Js(e) {
  const t = de("only-child");
  return ee("span", {
    class: t.e("content")
  }, [e]);
}
const Ng = V({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), kg = /* @__PURE__ */ V({
  ...Ng,
  props: Tl,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ae(ha, void 0);
    Mg(r);
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
    return be(() => {
      X(() => n.virtualRef, (f) => {
        f && (r.value = Pt(f));
      }, {
        immediate: !0
      }), X(r, (f, v) => {
        u?.(), u = void 0, Xe(f) && (p.forEach((g) => {
          var d;
          const h = n[g];
          h && (f.addEventListener(g.slice(2).toLowerCase(), h), (d = v?.removeEventListener) == null || d.call(v, g.slice(2).toLowerCase(), h));
        }), xr(f) && (u = X([s, a, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((d, h) => {
            Xo(g[h]) ? f.removeAttribute(d) : f.setAttribute(d, g[h]);
          });
        }, { immediate: !0 }))), Xe(v) && xr(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => v.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), dt(() => {
      if (u?.(), u = void 0, r.value && Xe(r.value)) {
        const f = r.value;
        p.forEach((v) => {
          const g = n[v];
          g && f.removeEventListener(v.slice(2).toLowerCase(), g);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (f, v) => f.virtualTriggering ? H("v-if", !0) : (_(), U(c(xg), Jt({ key: 0 }, f.$attrs, {
      "aria-controls": c(s),
      "aria-describedby": c(a),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: W(() => [
        G(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Dg = /* @__PURE__ */ ie(kg, [["__file", "trigger.vue"]]);
const mr = "focus-trap.focus-after-trapped", br = "focus-trap.focus-after-released", Bg = "focus-trap.focusout-prevented", Qs = {
  cancelable: !0,
  bubbles: !1
}, Fg = {
  cancelable: !0,
  bubbles: !1
}, ei = "focusAfterTrapped", ti = "focusAfterReleased", $l = Symbol("elFocusTrap"), ga = A(), or = A(0), ma = A(0);
let wo = 0;
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
}, ni = (e, t) => {
  for (const n of e)
    if (!zg(n, t))
      return n;
}, zg = (e, t) => {
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
}, Vg = (e) => {
  const t = Al(e), n = ni(t, e), o = ni(t.reverse(), e);
  return [n, o];
}, Hg = (e) => e instanceof HTMLInputElement && "select" in e, $t = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Xe(e) && !xr(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), ma.value = window.performance.now(), e !== n && Hg(e) && t && e.select(), Xe(e) && o && e.removeAttribute("tabindex");
  }
};
function oi(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Wg = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = oi(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = oi(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, jg = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if ($t(o, t), document.activeElement !== n)
      return;
}, ri = Wg(), Ug = () => or.value > ma.value, _o = () => {
  ga.value = "pointer", or.value = window.performance.now();
}, ai = () => {
  ga.value = "keyboard", or.value = window.performance.now();
}, Kg = () => (be(() => {
  wo === 0 && (document.addEventListener("mousedown", _o), document.addEventListener("touchstart", _o), document.addEventListener("keydown", ai)), wo++;
}), dt(() => {
  wo--, wo <= 0 && (document.removeEventListener("mousedown", _o), document.removeEventListener("touchstart", _o), document.removeEventListener("keydown", ai));
}), {
  focusReason: ga,
  lastUserFocusTimestamp: or,
  lastAutomatedFocusTimestamp: ma
}), So = (e) => new CustomEvent(Bg, {
  ...Fg,
  detail: e
}), mt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Tn = [];
const si = (e) => {
  e.code === mt.esc && Tn.forEach((t) => t(e));
}, Gg = (e) => {
  be(() => {
    Tn.length === 0 && document.addEventListener("keydown", si), ce && Tn.push(e);
  }), dt(() => {
    Tn = Tn.filter((t) => t !== e), Tn.length === 0 && ce && document.removeEventListener("keydown", si);
  });
}, qg = V({
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
    ei,
    ti,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = A();
    let o, r;
    const { focusReason: s } = Kg();
    Gg((d) => {
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
      const { code: h, altKey: b, ctrlKey: m, metaKey: C, currentTarget: O, shiftKey: $ } = d, { loop: S } = e, I = h === mt.tab && !b && !m && !C, E = document.activeElement;
      if (I && E) {
        const F = O, [T, z] = Vg(F);
        if (T && z) {
          if (!$ && E === z) {
            const P = So({
              focusReason: s.value
            });
            t("focusout-prevented", P), P.defaultPrevented || (d.preventDefault(), S && $t(T, !0));
          } else if ($ && [T, F].includes(E)) {
            const P = So({
              focusReason: s.value
            });
            t("focusout-prevented", P), P.defaultPrevented || (d.preventDefault(), S && $t(z, !0));
          }
        } else if (E === F) {
          const P = So({
            focusReason: s.value
          });
          t("focusout-prevented", P), P.defaultPrevented || d.preventDefault();
        }
      }
    };
    Qe($l, {
      focusTrapRef: n,
      onKeydown: i
    }), X(() => e.focusTrapEl, (d) => {
      d && (n.value = d);
    }, { immediate: !0 }), X([n], ([d], [h]) => {
      d && (d.addEventListener("keydown", i), d.addEventListener("focusin", p), d.addEventListener("focusout", f)), h && (h.removeEventListener("keydown", i), h.removeEventListener("focusin", p), h.removeEventListener("focusout", f));
    });
    const l = (d) => {
      t(ei, d);
    }, u = (d) => t(ti, d), p = (d) => {
      const h = c(n);
      if (!h)
        return;
      const b = d.target, m = d.relatedTarget, C = b && h.contains(b);
      e.trapped || m && h.contains(m) || (o = m), C && t("focusin", d), !a.paused && e.trapped && (C ? r = b : $t(r, !0));
    }, f = (d) => {
      const h = c(n);
      if (!(a.paused || !h))
        if (e.trapped) {
          const b = d.relatedTarget;
          !Xo(b) && !h.contains(b) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const m = So({
                focusReason: s.value
              });
              t("focusout-prevented", m), m.defaultPrevented || $t(r, !0);
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
        ri.push(a);
        const h = d.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !d.contains(h)) {
          const m = new Event(mr, Qs);
          d.addEventListener(mr, l), d.dispatchEvent(m), m.defaultPrevented || fe(() => {
            let C = e.focusStartEl;
            _e(C) || ($t(C), document.activeElement !== C && (C = "first")), C === "first" && jg(Al(d), !0), (document.activeElement === h || C === "container") && $t(d);
          });
        }
      }
    }
    function g() {
      const d = c(n);
      if (d) {
        d.removeEventListener(mr, l);
        const h = new CustomEvent(br, {
          ...Qs,
          detail: {
            focusReason: s.value
          }
        });
        d.addEventListener(br, u), d.dispatchEvent(h), !h.defaultPrevented && (s.value == "keyboard" || !Ug() || d.contains(document.activeElement)) && $t(o ?? document.body), d.removeEventListener(br, u), ri.remove(a);
      }
    }
    return be(() => {
      e.trapped && v(), X(() => e.trapped, (d) => {
        d ? v() : g();
      });
    }), dt(() => {
      e.trapped && g(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", p), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function Yg(e, t, n, o, r, s) {
  return G(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Pl = /* @__PURE__ */ ie(qg, [["render", Yg], ["__file", "focus-trap.vue"]]), Fe = "top", tt = "bottom", nt = "right", ze = "left", ba = "auto", co = [Fe, tt, nt, ze], Pn = "start", ro = "end", Zg = "clippingParents", Rl = "viewport", Un = "popper", Xg = "reference", ii = co.reduce(function(e, t) {
  return e.concat([t + "-" + Pn, t + "-" + ro]);
}, []), rr = [].concat(co, [ba]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Pn, t + "-" + ro]);
}, []), Jg = "beforeRead", Qg = "read", em = "afterRead", tm = "beforeMain", nm = "main", om = "afterMain", rm = "beforeWrite", am = "write", sm = "afterWrite", im = [Jg, Qg, em, tm, nm, om, rm, am, sm];
function wt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function gn(e) {
  var t = qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Je(e) {
  var t = qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ya(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function lm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !Je(s) || !wt(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var i = r[a];
      i === !1 ? s.removeAttribute(a) : s.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function um(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Je(r) || !wt(r) || (Object.assign(r.style, i), Object.keys(s).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var Ml = { name: "applyStyles", enabled: !0, phase: "write", fn: lm, effect: um, requires: ["computeStyles"] };
function bt(e) {
  return e.split("-")[0];
}
var fn = Math.max, jo = Math.min, Rn = Math.round;
function Nr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ll() {
  return !/^((?!chrome|android).)*safari/i.test(Nr());
}
function Mn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && Je(e) && (r = e.offsetWidth > 0 && Rn(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Rn(o.height) / e.offsetHeight || 1);
  var a = gn(e) ? qe(e) : window, i = a.visualViewport, l = !Ll() && n, u = (o.left + (l && i ? i.offsetLeft : 0)) / r, p = (o.top + (l && i ? i.offsetTop : 0)) / s, f = o.width / r, v = o.height / s;
  return { width: f, height: v, top: p, right: u + f, bottom: p + v, left: u, x: u, y: p };
}
function wa(e) {
  var t = Mn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function xl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ya(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function xt(e) {
  return qe(e).getComputedStyle(e);
}
function cm(e) {
  return ["table", "td", "th"].indexOf(wt(e)) >= 0;
}
function nn(e) {
  return ((gn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ar(e) {
  return wt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ya(e) ? e.host : null) || nn(e);
}
function li(e) {
  return !Je(e) || xt(e).position === "fixed" ? null : e.offsetParent;
}
function dm(e) {
  var t = /firefox/i.test(Nr()), n = /Trident/i.test(Nr());
  if (n && Je(e)) {
    var o = xt(e);
    if (o.position === "fixed") return null;
  }
  var r = ar(e);
  for (ya(r) && (r = r.host); Je(r) && ["html", "body"].indexOf(wt(r)) < 0; ) {
    var s = xt(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function fo(e) {
  for (var t = qe(e), n = li(e); n && cm(n) && xt(n).position === "static"; ) n = li(n);
  return n && (wt(n) === "html" || wt(n) === "body" && xt(n).position === "static") ? t : n || dm(e) || t;
}
function _a(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xn(e, t, n) {
  return fn(e, jo(t, n));
}
function fm(e, t, n) {
  var o = Xn(e, t, n);
  return o > n ? n : o;
}
function Nl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function kl(e) {
  return Object.assign({}, Nl(), e);
}
function Dl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var pm = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, kl(typeof e != "number" ? e : Dl(e, co));
};
function vm(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, i = bt(n.placement), l = _a(i), u = [ze, nt].indexOf(i) >= 0, p = u ? "height" : "width";
  if (!(!s || !a)) {
    var f = pm(r.padding, n), v = wa(s), g = l === "y" ? Fe : ze, d = l === "y" ? tt : nt, h = n.rects.reference[p] + n.rects.reference[l] - a[l] - n.rects.popper[p], b = a[l] - n.rects.reference[l], m = fo(s), C = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, O = h / 2 - b / 2, $ = f[g], S = C - v[p] - f[d], I = C / 2 - v[p] / 2 + O, E = Xn($, I, S), F = l;
    n.modifiersData[o] = (t = {}, t[F] = E, t.centerOffset = E - I, t);
  }
}
function hm(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || xl(t.elements.popper, r) && (t.elements.arrow = r));
}
var gm = { name: "arrow", enabled: !0, phase: "main", fn: vm, effect: hm, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ln(e) {
  return e.split("-")[1];
}
var mm = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function bm(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: Rn(n * r) / r || 0, y: Rn(o * r) / r || 0 };
}
function ui(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, f = e.isFixed, v = a.x, g = v === void 0 ? 0 : v, d = a.y, h = d === void 0 ? 0 : d, b = typeof p == "function" ? p({ x: g, y: h }) : { x: g, y: h };
  g = b.x, h = b.y;
  var m = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), O = ze, $ = Fe, S = window;
  if (u) {
    var I = fo(n), E = "clientHeight", F = "clientWidth";
    if (I === qe(n) && (I = nn(n), xt(I).position !== "static" && i === "absolute" && (E = "scrollHeight", F = "scrollWidth")), I = I, r === Fe || (r === ze || r === nt) && s === ro) {
      $ = tt;
      var T = f && I === S && S.visualViewport ? S.visualViewport.height : I[E];
      h -= T - o.height, h *= l ? 1 : -1;
    }
    if (r === ze || (r === Fe || r === tt) && s === ro) {
      O = nt;
      var z = f && I === S && S.visualViewport ? S.visualViewport.width : I[F];
      g -= z - o.width, g *= l ? 1 : -1;
    }
  }
  var N = Object.assign({ position: i }, u && mm), P = p === !0 ? bm({ x: g, y: h }, qe(n)) : { x: g, y: h };
  if (g = P.x, h = P.y, l) {
    var j;
    return Object.assign({}, N, (j = {}, j[$] = C ? "0" : "", j[O] = m ? "0" : "", j.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + h + "px)" : "translate3d(" + g + "px, " + h + "px, 0)", j));
  }
  return Object.assign({}, N, (t = {}, t[$] = C ? h + "px" : "", t[O] = m ? g + "px" : "", t.transform = "", t));
}
function ym(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: bt(t.placement), variation: Ln(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ui(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ui(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Bl = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: ym, data: {} }, Co = { passive: !0 };
function wm(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, i = a === void 0 ? !0 : a, l = qe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(p) {
    p.addEventListener("scroll", n.update, Co);
  }), i && l.addEventListener("resize", n.update, Co), function() {
    s && u.forEach(function(p) {
      p.removeEventListener("scroll", n.update, Co);
    }), i && l.removeEventListener("resize", n.update, Co);
  };
}
var Fl = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: wm, data: {} }, _m = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ao(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return _m[t];
  });
}
var Sm = { start: "end", end: "start" };
function ci(e) {
  return e.replace(/start|end/g, function(t) {
    return Sm[t];
  });
}
function Sa(e) {
  var t = qe(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Ca(e) {
  return Mn(nn(e)).left + Sa(e).scrollLeft;
}
function Cm(e, t) {
  var n = qe(e), o = nn(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, i = 0, l = 0;
  if (r) {
    s = r.width, a = r.height;
    var u = Ll();
    (u || !u && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return { width: s, height: a, x: i + Ca(e), y: l };
}
function Em(e) {
  var t, n = nn(e), o = Sa(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = fn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = fn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -o.scrollLeft + Ca(e), l = -o.scrollTop;
  return xt(r || n).direction === "rtl" && (i += fn(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: i, y: l };
}
function Ea(e) {
  var t = xt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function zl(e) {
  return ["html", "body", "#document"].indexOf(wt(e)) >= 0 ? e.ownerDocument.body : Je(e) && Ea(e) ? e : zl(ar(e));
}
function Jn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = zl(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = qe(o), a = r ? [s].concat(s.visualViewport || [], Ea(o) ? o : []) : o, i = t.concat(a);
  return r ? i : i.concat(Jn(ar(a)));
}
function kr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Tm(e, t) {
  var n = Mn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function di(e, t, n) {
  return t === Rl ? kr(Cm(e, n)) : gn(t) ? Tm(t, n) : kr(Em(nn(e)));
}
function Om(e) {
  var t = Jn(ar(e)), n = ["absolute", "fixed"].indexOf(xt(e).position) >= 0, o = n && Je(e) ? fo(e) : e;
  return gn(o) ? t.filter(function(r) {
    return gn(r) && xl(r, o) && wt(r) !== "body";
  }) : [];
}
function Im(e, t, n, o) {
  var r = t === "clippingParents" ? Om(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], i = s.reduce(function(l, u) {
    var p = di(e, u, o);
    return l.top = fn(p.top, l.top), l.right = jo(p.right, l.right), l.bottom = jo(p.bottom, l.bottom), l.left = fn(p.left, l.left), l;
  }, di(e, a, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Vl(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? bt(o) : null, s = o ? Ln(o) : null, a = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case Fe:
      l = { x: a, y: t.y - n.height };
      break;
    case tt:
      l = { x: a, y: t.y + t.height };
      break;
    case nt:
      l = { x: t.x + t.width, y: i };
      break;
    case ze:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? _a(r) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (s) {
      case Pn:
        l[u] = l[u] - (t[p] / 2 - n[p] / 2);
        break;
      case ro:
        l[u] = l[u] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return l;
}
function ao(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, i = n.boundary, l = i === void 0 ? Zg : i, u = n.rootBoundary, p = u === void 0 ? Rl : u, f = n.elementContext, v = f === void 0 ? Un : f, g = n.altBoundary, d = g === void 0 ? !1 : g, h = n.padding, b = h === void 0 ? 0 : h, m = kl(typeof b != "number" ? b : Dl(b, co)), C = v === Un ? Xg : Un, O = e.rects.popper, $ = e.elements[d ? C : v], S = Im(gn($) ? $ : $.contextElement || nn(e.elements.popper), l, p, a), I = Mn(e.elements.reference), E = Vl({ reference: I, element: O, placement: r }), F = kr(Object.assign({}, O, E)), T = v === Un ? F : I, z = { top: S.top - T.top + m.top, bottom: T.bottom - S.bottom + m.bottom, left: S.left - T.left + m.left, right: T.right - S.right + m.right }, N = e.modifiersData.offset;
  if (v === Un && N) {
    var P = N[r];
    Object.keys(z).forEach(function(j) {
      var re = [nt, tt].indexOf(j) >= 0 ? 1 : -1, J = [Fe, tt].indexOf(j) >= 0 ? "y" : "x";
      z[j] += P[J] * re;
    });
  }
  return z;
}
function $m(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? rr : l, p = Ln(o), f = p ? i ? ii : ii.filter(function(d) {
    return Ln(d) === p;
  }) : co, v = f.filter(function(d) {
    return u.indexOf(d) >= 0;
  });
  v.length === 0 && (v = f);
  var g = v.reduce(function(d, h) {
    return d[h] = ao(e, { placement: h, boundary: r, rootBoundary: s, padding: a })[bt(h)], d;
  }, {});
  return Object.keys(g).sort(function(d, h) {
    return g[d] - g[h];
  });
}
function Am(e) {
  if (bt(e) === ba) return [];
  var t = Ao(e);
  return [ci(e), t, ci(t)];
}
function Pm(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, p = n.boundary, f = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, d = g === void 0 ? !0 : g, h = n.allowedAutoPlacements, b = t.options.placement, m = bt(b), C = m === b, O = l || (C || !d ? [Ao(b)] : Am(b)), $ = [b].concat(O).reduce(function(ke, Ce) {
      return ke.concat(bt(Ce) === ba ? $m(t, { placement: Ce, boundary: p, rootBoundary: f, padding: u, flipVariations: d, allowedAutoPlacements: h }) : Ce);
    }, []), S = t.rects.reference, I = t.rects.popper, E = /* @__PURE__ */ new Map(), F = !0, T = $[0], z = 0; z < $.length; z++) {
      var N = $[z], P = bt(N), j = Ln(N) === Pn, re = [Fe, tt].indexOf(P) >= 0, J = re ? "width" : "height", Q = ao(t, { placement: N, boundary: p, rootBoundary: f, altBoundary: v, padding: u }), B = re ? j ? nt : ze : j ? tt : Fe;
      S[J] > I[J] && (B = Ao(B));
      var le = Ao(B), ve = [];
      if (s && ve.push(Q[P] <= 0), i && ve.push(Q[B] <= 0, Q[le] <= 0), ve.every(function(ke) {
        return ke;
      })) {
        T = N, F = !1;
        break;
      }
      E.set(N, ve);
    }
    if (F) for (var ye = d ? 3 : 1, rt = function(ke) {
      var Ce = $.find(function(K) {
        var ne = E.get(K);
        if (ne) return ne.slice(0, ke).every(function(q) {
          return q;
        });
      });
      if (Ce) return T = Ce, "break";
    }, Ve = ye; Ve > 0; Ve--) {
      var ft = rt(Ve);
      if (ft === "break") break;
    }
    t.placement !== T && (t.modifiersData[o]._skip = !0, t.placement = T, t.reset = !0);
  }
}
var Rm = { name: "flip", enabled: !0, phase: "main", fn: Pm, requiresIfExists: ["offset"], data: { _skip: !1 } };
function fi(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function pi(e) {
  return [Fe, nt, tt, ze].some(function(t) {
    return e[t] >= 0;
  });
}
function Mm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = ao(t, { elementContext: "reference" }), i = ao(t, { altBoundary: !0 }), l = fi(a, o), u = fi(i, r, s), p = pi(l), f = pi(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: p, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": f });
}
var Lm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Mm };
function xm(e, t, n) {
  var o = bt(e), r = [ze, Fe].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], i = s[1];
  return a = a || 0, i = (i || 0) * r, [ze, nt].indexOf(o) >= 0 ? { x: i, y: a } : { x: a, y: i };
}
function Nm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = rr.reduce(function(p, f) {
    return p[f] = xm(f, t.rects, s), p;
  }, {}), i = a[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var km = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Nm };
function Dm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Vl({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Hl = { name: "popperOffsets", enabled: !0, phase: "read", fn: Dm, data: {} };
function Bm(e) {
  return e === "x" ? "y" : "x";
}
function Fm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, i = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, f = n.padding, v = n.tether, g = v === void 0 ? !0 : v, d = n.tetherOffset, h = d === void 0 ? 0 : d, b = ao(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: p }), m = bt(t.placement), C = Ln(t.placement), O = !C, $ = _a(m), S = Bm($), I = t.modifiersData.popperOffsets, E = t.rects.reference, F = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, z = typeof T == "number" ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, P = { x: 0, y: 0 };
  if (I) {
    if (s) {
      var j, re = $ === "y" ? Fe : ze, J = $ === "y" ? tt : nt, Q = $ === "y" ? "height" : "width", B = I[$], le = B + b[re], ve = B - b[J], ye = g ? -F[Q] / 2 : 0, rt = C === Pn ? E[Q] : F[Q], Ve = C === Pn ? -F[Q] : -E[Q], ft = t.elements.arrow, ke = g && ft ? wa(ft) : { width: 0, height: 0 }, Ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Nl(), K = Ce[re], ne = Ce[J], q = Xn(0, E[Q], ke[Q]), he = O ? E[Q] / 2 - ye - q - K - z.mainAxis : rt - q - K - z.mainAxis, Pe = O ? -E[Q] / 2 + ye + q + ne + z.mainAxis : Ve + q + ne + z.mainAxis, He = t.elements.arrow && fo(t.elements.arrow), pt = He ? $ === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, Re = (j = N?.[$]) != null ? j : 0, Dt = B + he - Re - pt, St = B + Pe - Re, Bt = Xn(g ? jo(le, Dt) : le, B, g ? fn(ve, St) : ve);
      I[$] = Bt, P[$] = Bt - B;
    }
    if (i) {
      var Ct, vt = $ === "x" ? Fe : ze, Ft = $ === "x" ? tt : nt, Oe = I[S], Ye = S === "y" ? "height" : "width", zt = Oe + b[vt], on = Oe - b[Ft], x = [Fe, ze].indexOf(m) !== -1, oe = (Ct = N?.[S]) != null ? Ct : 0, Ze = x ? zt : Oe - E[Ye] - F[Ye] - oe + z.altAxis, Vt = x ? Oe + E[Ye] + F[Ye] - oe - z.altAxis : on, Ht = g && x ? fm(Ze, Oe, Vt) : Xn(g ? Ze : zt, Oe, g ? Vt : on);
      I[S] = Ht, P[S] = Ht - Oe;
    }
    t.modifiersData[o] = P;
  }
}
var zm = { name: "preventOverflow", enabled: !0, phase: "main", fn: Fm, requiresIfExists: ["offset"] };
function Vm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Hm(e) {
  return e === qe(e) || !Je(e) ? Sa(e) : Vm(e);
}
function Wm(e) {
  var t = e.getBoundingClientRect(), n = Rn(t.width) / e.offsetWidth || 1, o = Rn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function jm(e, t, n) {
  n === void 0 && (n = !1);
  var o = Je(t), r = Je(t) && Wm(t), s = nn(t), a = Mn(e, r, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((wt(t) !== "body" || Ea(s)) && (i = Hm(t)), Je(t) ? (l = Mn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Ca(s))), { x: a.left + i.scrollLeft - l.x, y: a.top + i.scrollTop - l.y, width: a.width, height: a.height };
}
function Um(e) {
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
function Km(e) {
  var t = Um(e);
  return im.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Gm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function qm(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var vi = { placement: "bottom", modifiers: [], strategy: "absolute" };
function hi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ta(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? vi : r;
  return function(a, i, l) {
    l === void 0 && (l = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, vi, s), modifiersData: {}, elements: { reference: a, popper: i }, attributes: {}, styles: {} }, p = [], f = !1, v = { state: u, setOptions: function(h) {
      var b = typeof h == "function" ? h(u.options) : h;
      d(), u.options = Object.assign({}, s, u.options, b), u.scrollParents = { reference: gn(a) ? Jn(a) : a.contextElement ? Jn(a.contextElement) : [], popper: Jn(i) };
      var m = Km(qm([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = m.filter(function(C) {
        return C.enabled;
      }), g(), v.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = u.elements, b = h.reference, m = h.popper;
        if (hi(b, m)) {
          u.rects = { reference: jm(b, fo(m), u.options.strategy === "fixed"), popper: wa(m) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(F) {
            return u.modifiersData[F.name] = Object.assign({}, F.data);
          });
          for (var C = 0; C < u.orderedModifiers.length; C++) {
            if (u.reset === !0) {
              u.reset = !1, C = -1;
              continue;
            }
            var O = u.orderedModifiers[C], $ = O.fn, S = O.options, I = S === void 0 ? {} : S, E = O.name;
            typeof $ == "function" && (u = $({ state: u, options: I, name: E, instance: v }) || u);
          }
        }
      }
    }, update: Gm(function() {
      return new Promise(function(h) {
        v.forceUpdate(), h(u);
      });
    }), destroy: function() {
      d(), f = !0;
    } };
    if (!hi(a, i)) return v;
    v.setOptions(l).then(function(h) {
      !f && l.onFirstUpdate && l.onFirstUpdate(h);
    });
    function g() {
      u.orderedModifiers.forEach(function(h) {
        var b = h.name, m = h.options, C = m === void 0 ? {} : m, O = h.effect;
        if (typeof O == "function") {
          var $ = O({ state: u, name: b, instance: v, options: C }), S = function() {
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
Ta();
var Ym = [Fl, Hl, Bl, Ml];
Ta({ defaultModifiers: Ym });
var Zm = [Fl, Hl, Bl, Ml, km, Rm, zm, gm, Lm], Xm = Ta({ defaultModifiers: Zm });
const Jm = ["fixed", "absolute"], Qm = se({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Y(Array),
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
    values: rr,
    default: "bottom"
  },
  popperOptions: {
    type: Y(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Jm,
    default: "absolute"
  }
}), Wl = se({
  ...Qm,
  id: String,
  style: {
    type: Y([String, Array, Object])
  },
  className: {
    type: Y([String, Array, Object])
  },
  effect: {
    type: Y(String),
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
    type: Y([String, Array, Object])
  },
  popperStyle: {
    type: Y([String, Array, Object])
  },
  referenceEl: {
    type: Y(Object)
  },
  triggerTargetEl: {
    type: Y(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Bn(["ariaLabel"])
}), e0 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, t0 = (e, t) => {
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
}, n0 = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...r0(e), ...t]
  };
  return a0(s, r?.modifiers), s;
}, o0 = (e) => {
  if (ce)
    return Pt(e);
};
function r0(e) {
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
function a0(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const s0 = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = i0(l);
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
  }), s = dn(), a = A({
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
  return X(r, (l) => {
    const u = c(s);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), X([e, t], ([l, u]) => {
    i(), !(!l || !u) && (s.value = Xm(l, u, c(r)));
  }), dt(() => {
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
function i0(e) {
  const t = Object.keys(e.elements), n = Bo(t.map((r) => [r, e.styles[r] || {}])), o = Bo(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const l0 = 0, u0 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = ae(ha, void 0), s = A(), a = A(), i = y(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = y(() => {
    var m;
    const C = c(s), O = (m = c(a)) != null ? m : l0;
    return {
      name: "arrow",
      enabled: !Ji(C),
      options: {
        element: C,
        padding: O
      }
    };
  }), u = y(() => ({
    onFirstUpdate: () => {
      d();
    },
    ...n0(e, [
      c(l),
      c(i)
    ])
  })), p = y(() => o0(e.referenceEl) || c(o)), { attributes: f, state: v, styles: g, update: d, forceUpdate: h, instanceRef: b } = s0(p, n, u);
  return X(b, (m) => t.value = m), be(() => {
    X(() => {
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
}, c0 = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = la(), s = de("popper"), a = y(() => c(t).popper), i = A(me(e.zIndex) ? e.zIndex : r()), l = y(() => [
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
      i.value = me(e.zIndex) ? e.zIndex : r();
    }
  };
}, d0 = V({
  name: "ElPopperContent"
}), f0 = /* @__PURE__ */ V({
  ...d0,
  props: Wl,
  emits: e0,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: p
    } = t0(o, n), { attributes: f, arrowRef: v, contentRef: g, styles: d, instanceRef: h, role: b, update: m } = u0(o), {
      ariaModal: C,
      arrowStyle: O,
      contentAttrs: $,
      contentClass: S,
      contentStyle: I,
      updateZIndex: E
    } = c0(o, {
      styles: d,
      attributes: f,
      role: b
    }), F = ae(Wo, void 0), T = A();
    Qe(Sl, {
      arrowStyle: O,
      arrowRef: v,
      arrowOffset: T
    }), F && Qe(Wo, {
      ...F,
      addInputId: Rt,
      removeInputId: Rt
    });
    let z;
    const N = (j = !0) => {
      m(), j && E();
    }, P = () => {
      N(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return be(() => {
      X(() => o.triggerTargetEl, (j, re) => {
        z?.(), z = void 0;
        const J = c(j || g.value), Q = c(re || g.value);
        Xe(J) && (z = X([b, () => o.ariaLabel, C, () => o.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((le, ve) => {
            Xo(B[ve]) ? J.removeAttribute(le) : J.setAttribute(le, B[ve]);
          });
        }, { immediate: !0 })), Q !== J && Xe(Q) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          Q.removeAttribute(B);
        });
      }, { immediate: !0 }), X(() => o.visible, P, { immediate: !0 });
    }), dt(() => {
      z?.(), z = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: h,
      updatePopper: N,
      contentStyle: I
    }), (j, re) => (_(), D("div", Jt({
      ref_key: "contentRef",
      ref: g
    }, c($), {
      style: c(I),
      class: c(S),
      tabindex: "-1",
      onMouseenter: (J) => j.$emit("mouseenter", J),
      onMouseleave: (J) => j.$emit("mouseleave", J)
    }), [
      ee(c(Pl), {
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
        default: W(() => [
          G(j.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var p0 = /* @__PURE__ */ ie(f0, [["__file", "content.vue"]]);
const v0 = ot($g), Oa = Symbol("elTooltip");
function gi() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return io(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const h0 = se({
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
}), g0 = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = gi(), {
    registerTimeout: a,
    cancelTimeout: i
  } = gi();
  return {
    onOpen: (p) => {
      s(() => {
        o(p);
        const f = c(n);
        me(f) && f > 0 && a(() => {
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
}, Ia = se({
  ...h0,
  ...Wl,
  appendTo: {
    type: Y([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: Y(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Bn(["ariaLabel"])
}), jl = se({
  ...Tl,
  disabled: Boolean,
  trigger: {
    type: Y([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Y(Array),
    default: () => [mt.enter, mt.numpadEnter, mt.space]
  }
}), m0 = Jo({
  type: Y(Boolean),
  default: null
}), b0 = Jo({
  type: Y(Function)
}), y0 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: m0,
    [n]: b0
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
      const v = Ae(), { emit: g } = v, d = v.props, h = y(() => ge(d[n])), b = y(() => d[e] === null), m = (E) => {
        a.value !== !0 && (a.value = !0, i && (i.value = E), ge(p) && p(E));
      }, C = (E) => {
        a.value !== !1 && (a.value = !1, i && (i.value = E), ge(f) && f(E));
      }, O = (E) => {
        if (d.disabled === !0 || ge(u) && !u())
          return;
        const F = h.value && ce;
        F && g(t, !0), (b.value || !F) && m(E);
      }, $ = (E) => {
        if (d.disabled === !0 || !ce)
          return;
        const F = h.value && ce;
        F && g(t, !1), (b.value || !F) && C(E);
      }, S = (E) => {
        vn(E) && (d.disabled && E ? h.value && g(t, !1) : a.value !== E && (E ? m() : C()));
      }, I = () => {
        a.value ? $() : O();
      };
      return X(() => d[e], S), l && v.appContext.config.globalProperties.$route !== void 0 && X(() => ({
        ...v.proxy.$route
      }), () => {
        l.value && a.value && $();
      }), be(() => {
        S(d[e]);
      }), {
        hide: $,
        show: O,
        toggle: I,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: w0,
  useModelToggleEmits: _0,
  useModelToggle: S0
} = y0("visible"), C0 = se({
  ...Cl,
  ...w0,
  ...Ia,
  ...jl,
  ...El,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), E0 = [
  ..._0,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], T0 = (e, t) => Ee(e) ? e.includes(t) : e === t, En = (e, t, n) => (o) => {
  T0(c(e), t) && n(o);
}, At = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, O0 = V({
  name: "ElTooltipTrigger"
}), I0 = /* @__PURE__ */ V({
  ...O0,
  props: jl,
  setup(e, { expose: t }) {
    const n = e, o = de("tooltip"), { controlled: r, id: s, open: a, onOpen: i, onClose: l, onToggle: u } = ae(Oa, void 0), p = A(null), f = () => {
      if (c(r) || n.disabled)
        return !0;
    }, v = it(n, "trigger"), g = At(f, En(v, "hover", i)), d = At(f, En(v, "hover", l)), h = At(f, En(v, "click", ($) => {
      $.button === 0 && u($);
    })), b = At(f, En(v, "focus", i)), m = At(f, En(v, "focus", l)), C = At(f, En(v, "contextmenu", ($) => {
      $.preventDefault(), u($);
    })), O = At(f, ($) => {
      const { code: S } = $;
      n.triggerKeys.includes(S) && ($.preventDefault(), u($));
    });
    return t({
      triggerRef: p
    }), ($, S) => (_(), U(c(Dg), {
      id: c(s),
      "virtual-ref": $.virtualRef,
      open: c(a),
      "virtual-triggering": $.virtualTriggering,
      class: L(c(o).e("trigger")),
      onBlur: c(m),
      onClick: c(h),
      onContextmenu: c(C),
      onFocus: c(b),
      onMouseenter: c(g),
      onMouseleave: c(d),
      onKeydown: c(O)
    }, {
      default: W(() => [
        G($.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var $0 = /* @__PURE__ */ ie(I0, [["__file", "trigger.vue"]]);
const A0 = se({
  to: {
    type: Y([String, Object]),
    required: !0
  },
  disabled: Boolean
}), P0 = /* @__PURE__ */ V({
  __name: "teleport",
  props: A0,
  setup(e) {
    return (t, n) => t.disabled ? G(t.$slots, "default", { key: 0 }) : (_(), U(Gu, {
      key: 1,
      to: t.to
    }, [
      G(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var R0 = /* @__PURE__ */ ie(P0, [["__file", "teleport.vue"]]);
const Ul = ot(R0), Kl = () => {
  const e = Qr(), t = ml(), n = y(() => `${e.value}-popper-container-${t.prefix}`), o = y(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, M0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, L0 = () => {
  const { id: e, selector: t } = Kl();
  return qu(() => {
    ce && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && M0(e.value);
  }), {
    id: e,
    selector: t
  };
}, x0 = V({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), N0 = /* @__PURE__ */ V({
  ...x0,
  props: Ia,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Kl(), r = de("tooltip"), s = A();
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
    } = ae(Oa, void 0), m = y(() => n.transition || `${r.namespace.value}-fade-in-linear`), C = y(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    dt(() => {
      a?.();
    });
    const O = y(() => c(C) ? !0 : c(u)), $ = y(() => n.disabled ? !1 : c(u)), S = y(() => n.appendTo || o.value), I = y(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), E = A(!0), F = () => {
      d(), Q() && $t(document.body), E.value = !0;
    }, T = () => {
      if (c(i))
        return !0;
    }, z = At(T, () => {
      n.enterable && c(p) === "hover" && v();
    }), N = At(T, () => {
      c(p) === "hover" && f();
    }), P = () => {
      var B, le;
      (le = (B = s.value) == null ? void 0 : B.updatePopper) == null || le.call(B), h?.();
    }, j = () => {
      b?.();
    }, re = () => {
      g(), a = Uv(y(() => {
        var B;
        return (B = s.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(p) !== "hover" && f();
      });
    }, J = () => {
      n.virtualTriggering || f();
    }, Q = (B) => {
      var le;
      const ve = (le = s.value) == null ? void 0 : le.popperContentRef, ye = B?.relatedTarget || document.activeElement;
      return ve?.contains(ye);
    };
    return X(() => c(u), (B) => {
      B ? E.value = !1 : a?.();
    }, {
      flush: "post"
    }), X(() => n.content, () => {
      var B, le;
      (le = (B = s.value) == null ? void 0 : B.updatePopper) == null || le.call(B);
    }), t({
      contentRef: s,
      isFocusInsideContent: Q
    }), (B, le) => (_(), U(c(Ul), {
      disabled: !B.teleported,
      to: c(S)
    }, {
      default: W(() => [
        ee(mn, {
          name: c(m),
          onAfterLeave: F,
          onBeforeEnter: P,
          onAfterEnter: re,
          onBeforeLeave: j
        }, {
          default: W(() => [
            c(O) ? Ne((_(), U(c(p0), Jt({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: s
            }, B.$attrs, {
              "aria-label": B.ariaLabel,
              "aria-hidden": E.value,
              "boundaries-padding": B.boundariesPadding,
              "fallback-placements": B.fallbackPlacements,
              "gpu-acceleration": B.gpuAcceleration,
              offset: B.offset,
              placement: B.placement,
              "popper-options": B.popperOptions,
              strategy: B.strategy,
              effect: B.effect,
              enterable: B.enterable,
              pure: B.pure,
              "popper-class": B.popperClass,
              "popper-style": [B.popperStyle, c(I)],
              "reference-el": B.referenceEl,
              "trigger-target-el": B.triggerTargetEl,
              visible: c($),
              "z-index": B.zIndex,
              onMouseenter: c(z),
              onMouseleave: c(N),
              onBlur: J,
              onClose: c(f)
            }), {
              default: W(() => [
                G(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [ut, c($)]
            ]) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var k0 = /* @__PURE__ */ ie(N0, [["__file", "content.vue"]]);
const D0 = V({
  name: "ElTooltip"
}), B0 = /* @__PURE__ */ V({
  ...D0,
  props: C0,
  emits: E0,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    L0();
    const r = hn(), s = A(), a = A(), i = () => {
      var m;
      const C = c(s);
      C && ((m = C.popperInstanceRef) == null || m.update());
    }, l = A(!1), u = A(), { show: p, hide: f, hasUpdateHandler: v } = S0({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: d } = g0({
      showAfter: it(o, "showAfter"),
      hideAfter: it(o, "hideAfter"),
      autoClose: it(o, "autoClose"),
      open: p,
      close: f
    }), h = y(() => vn(o.visible) && !v.value);
    Qe(Oa, {
      controlled: h,
      id: r,
      open: jr(l),
      trigger: it(o, "trigger"),
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
    }), X(() => o.disabled, (m) => {
      m && l.value && (l.value = !1);
    });
    const b = (m) => {
      var C;
      return (C = a.value) == null ? void 0 : C.isFocusInsideContent(m);
    };
    return Yu(() => l.value && f()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: b,
      updatePopper: i,
      onOpen: g,
      onClose: d,
      hide: f
    }), (m, C) => (_(), U(c(v0), {
      ref_key: "popperRef",
      ref: s,
      role: m.role
    }, {
      default: W(() => [
        ee($0, {
          disabled: m.disabled,
          trigger: m.trigger,
          "trigger-keys": m.triggerKeys,
          "virtual-ref": m.virtualRef,
          "virtual-triggering": m.virtualTriggering
        }, {
          default: W(() => [
            m.$slots.default ? G(m.$slots, "default", { key: 0 }) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ee(k0, {
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
          default: W(() => [
            G(m.$slots, "content", {}, () => [
              m.rawContent ? (_(), D("span", {
                key: 0,
                innerHTML: m.content
              }, null, 8, ["innerHTML"])) : (_(), D("span", { key: 1 }, Z(m.content), 1))
            ]),
            m.showArrow ? (_(), U(c(Rg), {
              key: 0,
              "arrow-offset": m.arrowOffset
            }, null, 8, ["arrow-offset"])) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var F0 = /* @__PURE__ */ ie(B0, [["__file", "tooltip.vue"]]);
const z0 = ot(F0), V0 = se({
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
    type: Y([String, Object, Array])
  },
  offset: {
    type: Y(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), H0 = V({
  name: "ElBadge"
}), W0 = /* @__PURE__ */ V({
  ...H0,
  props: V0,
  setup(e, { expose: t }) {
    const n = e, o = de("badge"), r = y(() => n.isDot ? "" : me(n.value) && me(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = y(() => {
      var a, i, l, u, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: tn(-((i = (a = n.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: tn((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: r
    }), (a, i) => (_(), D("div", {
      class: L(c(o).b())
    }, [
      G(a.$slots, "default"),
      ee(mn, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: W(() => [
          Ne(R("sup", {
            class: L([
              c(o).e("content"),
              c(o).em("content", a.type),
              c(o).is("fixed", !!a.$slots.default),
              c(o).is("dot", a.isDot),
              c(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: pe(c(s))
          }, [
            G(a.$slots, "content", { value: c(r) }, () => [
              gt(Z(c(r)), 1)
            ])
          ], 6), [
            [ut, !a.hidden && (c(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var j0 = /* @__PURE__ */ ie(W0, [["__file", "badge.vue"]]);
const U0 = ot(j0), Gl = Symbol("buttonGroupContextKey"), ql = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: s = "API" }, a) => {
  X(() => c(a), (i) => {
    i && Se(n, `[${s}] ${e} is about to be deprecated in version ${o}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
}, K0 = (e, t) => {
  ql({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, y(() => e.type === "text"));
  const n = ae(Gl, void 0), o = er("button"), { form: r } = tr(), s = uo(y(() => n?.size)), a = nr(), i = A(), l = qr(), u = y(() => e.type || n?.type || ""), p = y(() => {
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
      if (b?.type === $i) {
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
}, G0 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], q0 = ["button", "submit", "reset"], Dr = se({
  size: Qo,
  disabled: Boolean,
  type: {
    type: String,
    values: G0,
    default: ""
  },
  icon: {
    type: Lt
  },
  nativeType: {
    type: String,
    values: q0,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Lt,
    default: () => pl
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
    type: Y([String, Object]),
    default: "button"
  }
}), Y0 = {
  click: (e) => e instanceof MouseEvent
};
function Te(e, t) {
  Z0(e) && (e = "100%");
  var n = X0(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Eo(e) {
  return Math.min(1, Math.max(0, e));
}
function Z0(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function X0(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Yl(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function To(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function cn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function J0(e, t, n) {
  return {
    r: Te(e, 255) * 255,
    g: Te(t, 255) * 255,
    b: Te(n, 255) * 255
  };
}
function mi(e, t, n) {
  e = Te(e, 255), t = Te(t, 255), n = Te(n, 255);
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
function yr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Q0(e, t, n) {
  var o, r, s;
  if (e = Te(e, 360), t = Te(t, 100), n = Te(n, 100), t === 0)
    r = n, s = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a;
    o = yr(i, a, e + 1 / 3), r = yr(i, a, e), s = yr(i, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: s * 255 };
}
function bi(e, t, n) {
  e = Te(e, 255), t = Te(t, 255), n = Te(n, 255);
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
function eb(e, t, n) {
  e = Te(e, 360) * 6, t = Te(t, 100), n = Te(n, 100);
  var o = Math.floor(e), r = e - o, s = n * (1 - t), a = n * (1 - r * t), i = n * (1 - (1 - r) * t), l = o % 6, u = [n, a, s, s, i, n][l], p = [i, n, n, a, s, s][l], f = [s, s, i, n, n, a][l];
  return { r: u * 255, g: p * 255, b: f * 255 };
}
function yi(e, t, n, o) {
  var r = [
    cn(Math.round(e).toString(16)),
    cn(Math.round(t).toString(16)),
    cn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function tb(e, t, n, o, r) {
  var s = [
    cn(Math.round(e).toString(16)),
    cn(Math.round(t).toString(16)),
    cn(Math.round(n).toString(16)),
    cn(nb(o))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("");
}
function nb(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function wi(e) {
  return je(e) / 255;
}
function je(e) {
  return parseInt(e, 16);
}
function ob(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Br = {
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
function rb(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, s = null, a = !1, i = !1;
  return typeof e == "string" && (e = ib(e)), typeof e == "object" && (Tt(e.r) && Tt(e.g) && Tt(e.b) ? (t = J0(e.r, e.g, e.b), a = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Tt(e.h) && Tt(e.s) && Tt(e.v) ? (o = To(e.s), r = To(e.v), t = eb(e.h, o, r), a = !0, i = "hsv") : Tt(e.h) && Tt(e.s) && Tt(e.l) && (o = To(e.s), s = To(e.l), t = Q0(e.h, o, s), a = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Yl(n), {
    ok: a,
    format: e.format || i,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var ab = "[-\\+]?\\d+%?", sb = "[-\\+]?\\d*\\.\\d+%?", Xt = "(?:".concat(sb, ")|(?:").concat(ab, ")"), wr = "[\\s|\\(]+(".concat(Xt, ")[,|\\s]+(").concat(Xt, ")[,|\\s]+(").concat(Xt, ")\\s*\\)?"), _r = "[\\s|\\(]+(".concat(Xt, ")[,|\\s]+(").concat(Xt, ")[,|\\s]+(").concat(Xt, ")[,|\\s]+(").concat(Xt, ")\\s*\\)?"), at = {
  CSS_UNIT: new RegExp(Xt),
  rgb: new RegExp("rgb" + wr),
  rgba: new RegExp("rgba" + _r),
  hsl: new RegExp("hsl" + wr),
  hsla: new RegExp("hsla" + _r),
  hsv: new RegExp("hsv" + wr),
  hsva: new RegExp("hsva" + _r),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ib(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Br[e])
    e = Br[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = at.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = at.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = at.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = at.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = at.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = at.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = at.hex8.exec(e), n ? {
    r: je(n[1]),
    g: je(n[2]),
    b: je(n[3]),
    a: wi(n[4]),
    format: t ? "name" : "hex8"
  } : (n = at.hex6.exec(e), n ? {
    r: je(n[1]),
    g: je(n[2]),
    b: je(n[3]),
    format: t ? "name" : "hex"
  } : (n = at.hex4.exec(e), n ? {
    r: je(n[1] + n[1]),
    g: je(n[2] + n[2]),
    b: je(n[3] + n[3]),
    a: wi(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = at.hex3.exec(e), n ? {
    r: je(n[1] + n[1]),
    g: je(n[2] + n[2]),
    b: je(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Tt(e) {
  return !!at.CSS_UNIT.exec(String(e));
}
var lb = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = ob(t)), this.originalInput = t;
      var r = rb(t);
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
      return this.a = Yl(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = bi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = bi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = mi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = mi(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), yi(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), tb(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Te(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Te(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + yi(this.r, this.g, this.b, !1), n = 0, o = Object.entries(Br); n < o.length; n++) {
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
      return n.l += t / 100, n.l = Eo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Eo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Eo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Eo(n.s), new e(n);
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
function Ut(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function ub(e) {
  const t = nr(), n = de("button");
  return y(() => {
    let o = {}, r = e.color;
    if (r) {
      const s = r.match(/var\((.*?)\)/);
      s && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));
      const a = new lb(r), i = e.dark ? a.tint(20).toString() : Ut(a, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? Ut(a, 90) : a.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? Ut(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Ut(a, 90) : a.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? Ut(a, 50) : a.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? Ut(a, 80) : a.tint(80).toString());
      else {
        const l = e.dark ? Ut(a, 30) : a.tint(30).toString(), u = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
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
          const p = e.dark ? Ut(a, 50) : a.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = p, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = p;
        }
      }
    }
    return o;
  });
}
const cb = V({
  name: "ElButton"
}), db = /* @__PURE__ */ V({
  ...cb,
  props: Dr,
  emits: Y0,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = ub(o), s = de("button"), { _ref: a, _size: i, _type: l, _disabled: u, _props: p, shouldAddSpace: f, handleClick: v } = K0(o, n), g = y(() => [
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
    }), (d, h) => (_(), U(Be(d.tag), Jt({
      ref_key: "_ref",
      ref: a
    }, c(p), {
      class: c(g),
      style: c(r),
      onClick: c(v)
    }), {
      default: W(() => [
        d.loading ? (_(), D(Ge, { key: 0 }, [
          d.$slots.loading ? G(d.$slots, "loading", { key: 0 }) : (_(), U(c(xe), {
            key: 1,
            class: L(c(s).is("loading"))
          }, {
            default: W(() => [
              (_(), U(Be(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (_(), U(c(xe), { key: 1 }, {
          default: W(() => [
            d.icon ? (_(), U(Be(d.icon), { key: 0 })) : G(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : H("v-if", !0),
        d.$slots.default ? (_(), D("span", {
          key: 2,
          class: L({ [c(s).em("text", "expand")]: c(f) })
        }, [
          G(d.$slots, "default")
        ], 2)) : H("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var fb = /* @__PURE__ */ ie(db, [["__file", "button.vue"]]);
const pb = {
  size: Dr.size,
  type: Dr.type
}, vb = V({
  name: "ElButtonGroup"
}), hb = /* @__PURE__ */ V({
  ...vb,
  props: pb,
  setup(e) {
    const t = e;
    Qe(Gl, Qt({
      size: it(t, "size"),
      type: it(t, "type")
    }));
    const n = de("button");
    return (o, r) => (_(), D("div", {
      class: L(c(n).b("group"))
    }, [
      G(o.$slots, "default")
    ], 2));
  }
});
var Zl = /* @__PURE__ */ ie(hb, [["__file", "button-group.vue"]]);
const Xl = ot(fb, {
  ButtonGroup: Zl
});
ca(Zl);
var Po = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(Po || {});
const gb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Fr = se({
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
    values: il
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), mb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, bb = V({
  name: "ElTag"
}), yb = /* @__PURE__ */ V({
  ...bb,
  props: Fr,
  emits: mb,
  setup(e, { emit: t }) {
    const n = e, o = uo(), r = de("tag"), s = y(() => {
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
    return (u, p) => u.disableTransitions ? (_(), D("span", {
      key: 0,
      class: L(c(s)),
      style: pe({ backgroundColor: u.color }),
      onClick: i
    }, [
      R("span", {
        class: L(c(r).e("content"))
      }, [
        G(u.$slots, "default")
      ], 2),
      u.closable ? (_(), U(c(xe), {
        key: 0,
        class: L(c(r).e("close")),
        onClick: Me(a, ["stop"])
      }, {
        default: W(() => [
          ee(c(Vo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : H("v-if", !0)
    ], 6)) : (_(), U(mn, {
      key: 1,
      name: `${c(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: W(() => [
        R("span", {
          class: L(c(s)),
          style: pe({ backgroundColor: u.color }),
          onClick: i
        }, [
          R("span", {
            class: L(c(r).e("content"))
          }, [
            G(u.$slots, "default")
          ], 2),
          u.closable ? (_(), U(c(xe), {
            key: 0,
            class: L(c(r).e("close")),
            onClick: Me(a, ["stop"])
          }, {
            default: W(() => [
              ee(c(Vo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var wb = /* @__PURE__ */ ie(yb, [["__file", "tag.vue"]]);
const _b = ot(wb), Kt = /* @__PURE__ */ new Map();
if (ce) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Kt.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function _i(e, t) {
  let n = [];
  return Ee(t.arg) ? n = t.arg : Xe(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, i = r?.target, l = !t || !t.instance, u = !a || !i, p = e.contains(a) || e.contains(i), f = e === a, v = n.length && n.some((d) => d?.contains(a)) || n.length && n.includes(i), g = s && (s.contains(a) || s.contains(i));
    l || u || p || f || v || g || t.value(o, r);
  };
}
const Sb = {
  beforeMount(e, t) {
    Kt.has(e) || Kt.set(e, []), Kt.get(e).push({
      documentHandler: _i(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Kt.has(e) || Kt.set(e, []);
    const n = Kt.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: _i(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    Kt.delete(e);
  }
}, ht = {}, Jl = (e) => {
  if (!e)
    return { onClick: Rt, onMousedown: Rt, onMouseup: Rt };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
}, Cb = se({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: Y([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: Y([String, Number])
  }
}), Eb = {
  click: (e) => e instanceof MouseEvent
}, Tb = "overlay";
var Ob = V({
  name: "ElOverlay",
  props: Cb,
  emits: Eb,
  setup(e, { slots: t, emit: n }) {
    const o = de(Tb), r = (l) => {
      n("click", l);
    }, { onClick: s, onMousedown: a, onMouseup: i } = Jl(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? ee("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: s,
      onMousedown: a,
      onMouseup: i
    }, [G(t, "default")], Po.STYLE | Po.CLASS | Po.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Ti("div", {
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
const Ib = Ob, Ql = Symbol("dialogInjectionKey"), eu = se({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: Lt
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
}), $b = {
  close: () => !0
}, Ab = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const s = (u) => {
    const p = u.clientX, f = u.clientY, { offsetX: v, offsetY: g } = r, d = e.value.getBoundingClientRect(), h = d.left, b = d.top, m = d.width, C = d.height, O = document.documentElement.clientWidth, $ = document.documentElement.clientHeight, S = -h + v, I = -b + g, E = O - h - m + v, F = $ - b - C + g, T = (N) => {
      let P = v + N.clientX - p, j = g + N.clientY - f;
      o?.value || (P = Math.min(Math.max(P, S), E), j = Math.min(Math.max(j, I), F)), r = {
        offsetX: P,
        offsetY: j
      }, e.value && (e.value.style.transform = `translate(${tn(P)}, ${tn(j)})`);
    }, z = () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", z);
    };
    document.addEventListener("mousemove", T), document.addEventListener("mouseup", z);
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
  return be(() => {
    Ur(() => {
      n.value ? a() : i();
    });
  }), dt(() => {
    i();
  }), {
    resetPosition: l
  };
}, Pb = (...e) => (t) => {
  e.forEach((n) => {
    ge(n) ? n(t) : n.value = t;
  });
}, Rb = V({ name: "ElDialogContent" }), Mb = /* @__PURE__ */ V({
  ...Rb,
  props: eu,
  emits: $b,
  setup(e, { expose: t }) {
    const n = e, { t: o } = ua(), { Close: r } = vl, { dialogRef: s, headerRef: a, bodyId: i, ns: l, style: u } = ae(Ql), { focusTrapRef: p } = ae($l), f = y(() => [
      l.b(),
      l.is("fullscreen", n.fullscreen),
      l.is("draggable", n.draggable),
      l.is("align-center", n.alignCenter),
      { [l.m("center")]: n.center }
    ]), v = Pb(p, s), g = y(() => n.draggable), d = y(() => n.overflow), { resetPosition: h } = Ab(s, a, g, d);
    return t({
      resetPosition: h
    }), (b, m) => (_(), D("div", {
      ref: c(v),
      class: L(c(f)),
      style: pe(c(u)),
      tabindex: "-1"
    }, [
      R("header", {
        ref_key: "headerRef",
        ref: a,
        class: L([c(l).e("header"), b.headerClass, { "show-close": b.showClose }])
      }, [
        G(b.$slots, "header", {}, () => [
          R("span", {
            role: "heading",
            "aria-level": b.ariaLevel,
            class: L(c(l).e("title"))
          }, Z(b.title), 11, ["aria-level"])
        ]),
        b.showClose ? (_(), D("button", {
          key: 0,
          "aria-label": c(o)("el.dialog.close"),
          class: L(c(l).e("headerbtn")),
          type: "button",
          onClick: (C) => b.$emit("close")
        }, [
          ee(c(xe), {
            class: L(c(l).e("close"))
          }, {
            default: W(() => [
              (_(), U(Be(b.closeIcon || c(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : H("v-if", !0)
      ], 2),
      R("div", {
        id: c(i),
        class: L([c(l).e("body"), b.bodyClass])
      }, [
        G(b.$slots, "default")
      ], 10, ["id"]),
      b.$slots.footer ? (_(), D("footer", {
        key: 0,
        class: L([c(l).e("footer"), b.footerClass])
      }, [
        G(b.$slots, "footer")
      ], 2)) : H("v-if", !0)
    ], 6));
  }
});
var Lb = /* @__PURE__ */ ie(Mb, [["__file", "dialog-content.vue"]]);
const xb = se({
  ...eu,
  appendToBody: Boolean,
  appendTo: {
    type: Y([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: Y(Function)
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
}), Nb = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [Ke]: (e) => vn(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, kb = (e, t = {}) => {
  Kr(e) || nl("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || de("popup"), o = y(() => n.bm("parent", "hidden"));
  if (!ce || Ys(document.body, o.value))
    return;
  let r = 0, s = !1, a = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || s && document && (document.body.style.width = a, wh(document.body, o.value));
    }, 200);
  };
  X(e, (l) => {
    if (!l) {
      i();
      return;
    }
    s = !Ys(document.body, o.value), s && (a = document.body.style.width, yh(document.body, o.value)), r = Sh(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, p = _h(document.body, "overflowY");
    r > 0 && (u || p === "scroll") && s && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Ii(() => i());
}, Db = (e, t) => {
  var n;
  const r = Ae().emit, { nextZIndex: s } = la();
  let a = "";
  const i = hn(), l = hn(), u = A(!1), p = A(!1), f = A(!1), v = A((n = e.zIndex) != null ? n : s());
  let g, d;
  const h = er("namespace", qn), b = y(() => {
    const J = {}, Q = `--${h.value}-dialog`;
    return e.fullscreen || (e.top && (J[`${Q}-margin-top`] = e.top), e.width && (J[`${Q}-width`] = tn(e.width))), J;
  }), m = y(() => e.alignCenter ? { display: "flex" } : {});
  function C() {
    r("opened");
  }
  function O() {
    r("closed"), r(Ke, !1), e.destroyOnClose && (f.value = !1);
  }
  function $() {
    r("close");
  }
  function S() {
    d?.(), g?.(), e.openDelay && e.openDelay > 0 ? { stop: g } = Fo(() => T(), e.openDelay) : T();
  }
  function I() {
    g?.(), d?.(), e.closeDelay && e.closeDelay > 0 ? { stop: d } = Fo(() => z(), e.closeDelay) : z();
  }
  function E() {
    function J(Q) {
      Q || (p.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose(J) : I();
  }
  function F() {
    e.closeOnClickModal && E();
  }
  function T() {
    ce && (u.value = !0);
  }
  function z() {
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
  e.lockScroll && kb(u);
  function re() {
    e.closeOnPressEscape && E();
  }
  return X(() => e.modelValue, (J) => {
    J ? (p.value = !1, S(), f.value = !0, v.value = Ji(e.zIndex) ? s() : v.value++, fe(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && I();
  }), X(() => e.fullscreen, (J) => {
    t.value && (J ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), be(() => {
    e.modelValue && (u.value = !0, f.value = !0, S());
  }), {
    afterEnter: C,
    afterLeave: O,
    beforeLeave: $,
    handleClose: E,
    onModalClick: F,
    close: I,
    doClose: z,
    onOpenAutoFocus: N,
    onCloseAutoFocus: P,
    onCloseRequested: re,
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
}, Bb = V({
  name: "ElDialog",
  inheritAttrs: !1
}), Fb = /* @__PURE__ */ V({
  ...Bb,
  props: xb,
  emits: Nb,
  setup(e, { expose: t }) {
    const n = e, o = qr();
    ql({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, y(() => !!o.title));
    const r = de("dialog"), s = A(), a = A(), i = A(), {
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
      onModalClick: O,
      onOpenAutoFocus: $,
      onCloseAutoFocus: S,
      onCloseRequested: I,
      onFocusoutPrevented: E
    } = Db(n, s);
    Qe(Ql, {
      dialogRef: s,
      headerRef: a,
      bodyId: p,
      ns: r,
      rendered: g,
      style: f
    });
    const F = Jl(O), T = y(() => n.draggable && !n.fullscreen);
    return t({
      visible: l,
      dialogContentRef: i,
      resetPosition: () => {
        var N;
        (N = i.value) == null || N.resetPosition();
      }
    }), (N, P) => (_(), U(c(Ul), {
      to: N.appendTo,
      disabled: N.appendTo !== "body" ? !1 : !N.appendToBody
    }, {
      default: W(() => [
        ee(mn, {
          name: "dialog-fade",
          onAfterEnter: c(h),
          onAfterLeave: c(b),
          onBeforeLeave: c(m),
          persisted: ""
        }, {
          default: W(() => [
            Ne(ee(c(Ib), {
              "custom-mask-event": "",
              mask: N.modal,
              "overlay-class": N.modalClass,
              "z-index": c(d)
            }, {
              default: W(() => [
                R("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": N.title || void 0,
                  "aria-labelledby": N.title ? void 0 : c(u),
                  "aria-describedby": c(p),
                  class: L(`${c(r).namespace.value}-overlay-dialog`),
                  style: pe(c(v)),
                  onClick: c(F).onClick,
                  onMousedown: c(F).onMousedown,
                  onMouseup: c(F).onMouseup
                }, [
                  ee(c(Pl), {
                    loop: "",
                    trapped: c(l),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: c($),
                    onFocusAfterReleased: c(S),
                    onFocusoutPrevented: c(E),
                    onReleaseRequested: c(I)
                  }, {
                    default: W(() => [
                      c(g) ? (_(), U(Lb, Jt({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: i
                      }, N.$attrs, {
                        center: N.center,
                        "align-center": N.alignCenter,
                        "close-icon": N.closeIcon,
                        draggable: c(T),
                        overflow: N.overflow,
                        fullscreen: N.fullscreen,
                        "header-class": N.headerClass,
                        "body-class": N.bodyClass,
                        "footer-class": N.footerClass,
                        "show-close": N.showClose,
                        title: N.title,
                        "aria-level": N.headerAriaLevel,
                        onClose: c(C)
                      }), Zu({
                        header: W(() => [
                          N.$slots.title ? G(N.$slots, "title", { key: 1 }) : G(N.$slots, "header", {
                            key: 0,
                            close: c(C),
                            titleId: c(u),
                            titleClass: c(r).e("title")
                          })
                        ]),
                        default: W(() => [
                          G(N.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        N.$slots.footer ? {
                          name: "footer",
                          fn: W(() => [
                            G(N.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : H("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [ut, c(l)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var zb = /* @__PURE__ */ ie(Fb, [["__file", "dialog.vue"]]);
const Vb = ot(zb);
function Hb() {
  const e = dn(), t = A(0), n = 11, o = y(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return st(e, () => {
    var s, a;
    t.value = (a = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? a : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const tu = Symbol("ElSelectGroup"), sr = Symbol("ElSelect");
function Wb(e, t) {
  const n = ae(sr), o = ae(tu, { disabled: !1 }), r = y(() => p(Yt(n.props.modelValue), e.value)), s = y(() => {
    var g;
    if (n.props.multiple) {
      const d = Yt((g = n.props.modelValue) != null ? g : []);
      return !r.value && d.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = y(() => e.label || ($e(e.value) ? "" : e.value)), i = y(() => e.value || e.label || ""), l = y(() => e.disabled || t.groupDisabled || s.value), u = Ae(), p = (g = [], d) => {
    if ($e(e.value)) {
      const h = n.props.valueKey;
      return g && g.some((b) => Xu(Zt(b, h)) === Zt(d, h));
    } else
      return g && g.includes(d);
  }, f = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, v = (g) => {
    const d = new RegExp(gb(g), "i");
    t.visible = d.test(a.value) || e.created;
  };
  return X(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), X(() => e.value, (g, d) => {
    const { remote: h, valueKey: b } = n.props;
    if ((h ? g !== d : !Zn(g, d)) && (n.onOptionDestroy(d, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !h) {
      if (b && $e(g) && $e(d) && g[b] === d[b])
        return;
      n.setSelected();
    }
  }), X(() => o.disabled, () => {
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
const jb = V({
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
    const t = de("select"), n = hn(), o = y(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(a)),
      t.is("hovering", c(v))
    ]), r = Qt({
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
    } = Wb(e, r), { visible: f, hover: v } = Yr(r), g = Ae().proxy;
    l.onOptionCreate(g), dt(() => {
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
function Ub(e, t, n, o, r, s) {
  return Ne((_(), D("li", {
    id: e.id,
    class: L(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Me(e.selectOptionClick, ["stop"])
  }, [
    G(e.$slots, "default", {}, () => [
      R("span", null, Z(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [ut, e.visible]
  ]);
}
var $a = /* @__PURE__ */ ie(jb, [["render", Ub], ["__file", "option.vue"]]);
const Kb = V({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ae(sr), t = de("select"), n = y(() => e.props.popperClass), o = y(() => e.props.multiple), r = y(() => e.props.fitInputWidth), s = A("");
    function a() {
      var i;
      s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return be(() => {
      a(), st(e.selectRef, a);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: r
    };
  }
});
function Gb(e, t, n, o, r, s) {
  return _(), D("div", {
    class: L([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: pe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), D("div", {
      key: 0,
      class: L(e.ns.be("dropdown", "header"))
    }, [
      G(e.$slots, "header")
    ], 2)) : H("v-if", !0),
    G(e.$slots, "default"),
    e.$slots.footer ? (_(), D("div", {
      key: 1,
      class: L(e.ns.be("dropdown", "footer"))
    }, [
      G(e.$slots, "footer")
    ], 2)) : H("v-if", !0)
  ], 6);
}
var qb = /* @__PURE__ */ ie(Kb, [["render", Gb], ["__file", "select-dropdown.vue"]]);
const Yb = (e, t) => {
  const { t: n } = ua(), o = hn(), r = de("select"), s = de("input"), a = Qt({
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
    handleCompositionStart: O,
    handleCompositionUpdate: $,
    handleCompositionEnd: S
  } = wl({
    afterComposition: (w) => Ht(w)
  }), { wrapperRef: I, isFocused: E, handleBlur: F } = yl(f, {
    beforeFocus() {
      return Q.value;
    },
    afterFocus() {
      e.automaticDropdown && !T.value && (T.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(w) {
      var k, te;
      return ((k = u.value) == null ? void 0 : k.isFocusInsideContent(w)) || ((te = p.value) == null ? void 0 : te.isFocusInsideContent(w));
    },
    afterBlur() {
      T.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), T = A(!1), z = A(), { form: N, formItem: P } = tr(), { inputId: j } = pa(e, {
    formItemContext: P
  }), { valueOnClear: re, isEmptyValue: J } = hh(e), Q = y(() => e.disabled || N?.disabled), B = y(() => Ee(e.modelValue) ? e.modelValue.length > 0 : !J(e.modelValue)), le = y(() => {
    var w;
    return (w = N?.statusIcon) != null ? w : !1;
  }), ve = y(() => e.clearable && !Q.value && a.inputHovering && B.value), ye = y(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), rt = y(() => r.is("reverse", ye.value && T.value)), Ve = y(() => P?.validateState || ""), ft = y(() => hl[Ve.value]), ke = y(() => e.remote ? 300 : 0), Ce = y(() => e.remote && !a.inputValue && a.options.size === 0), K = y(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && ne.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), ne = y(() => q.value.filter((w) => w.visible).length), q = y(() => {
    const w = Array.from(a.options.values()), k = [];
    return a.optionValues.forEach((te) => {
      const we = w.findIndex((We) => We.value === te);
      we > -1 && k.push(w[we]);
    }), k.length >= w.length ? k : w;
  }), he = y(() => Array.from(a.cachedOptions.values())), Pe = y(() => {
    const w = q.value.filter((k) => !k.created).some((k) => k.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !w;
  }), He = () => {
    e.filterable && ge(e.filterMethod) || e.filterable && e.remote && ge(e.remoteMethod) || q.value.forEach((w) => {
      var k;
      (k = w.updateOption) == null || k.call(w, a.inputValue);
    });
  }, pt = uo(), Re = y(() => ["small"].includes(pt.value) ? "small" : "default"), Dt = y({
    get() {
      return T.value && !Ce.value;
    },
    set(w) {
      T.value = w;
    }
  }), St = y(() => {
    if (e.multiple && !On(e.modelValue))
      return Yt(e.modelValue).length === 0 && !a.inputValue;
    const w = Ee(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || On(w) ? !a.inputValue : !0;
  }), Bt = y(() => {
    var w;
    const k = (w = e.placeholder) != null ? w : n("el.select.placeholder");
    return e.multiple || !B.value ? k : a.selectedLabel;
  }), Ct = y(() => Rr ? null : "mouseenter");
  X(() => e.modelValue, (w, k) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", vt("")), Oe(), !Zn(w, k) && e.validateEvent && P?.validate("change").catch((te) => Se(te));
  }, {
    flush: "post",
    deep: !0
  }), X(() => T.value, (w) => {
    w ? vt(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", w);
  }), X(() => a.options.entries(), () => {
    ce && (Oe(), e.defaultFirstOption && (e.filterable || e.remote) && ne.value && Ft());
  }, {
    flush: "post"
  }), X([() => a.hoveringIndex, q], ([w]) => {
    me(w) && w > -1 ? z.value = q.value[w] || {} : z.value = {}, q.value.forEach((k) => {
      k.hover = z.value === k;
    });
  }), Ur(() => {
    a.isBeforeHide || He();
  });
  const vt = (w) => {
    a.previousQuery === w || C.value || (a.previousQuery = w, e.filterable && ge(e.filterMethod) ? e.filterMethod(w) : e.filterable && e.remote && ge(e.remoteMethod) && e.remoteMethod(w), e.defaultFirstOption && (e.filterable || e.remote) && ne.value ? fe(Ft) : fe(zt));
  }, Ft = () => {
    const w = q.value.filter((We) => We.visible && !We.disabled && !We.states.groupDisabled), k = w.find((We) => We.created), te = w[0], we = q.value.map((We) => We.value);
    a.hoveringIndex = Ma(we, k || te);
  }, Oe = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const k = Ee(e.modelValue) ? e.modelValue[0] : e.modelValue, te = Ye(k);
      a.selectedLabel = te.currentLabel, a.selected = [te];
      return;
    }
    const w = [];
    On(e.modelValue) || Yt(e.modelValue).forEach((k) => {
      w.push(Ye(k));
    }), a.selected = w;
  }, Ye = (w) => {
    let k;
    const te = Ju(w);
    for (let _n = a.cachedOptions.size - 1; _n >= 0; _n--) {
      const Wt = he.value[_n];
      if (te ? Zt(Wt.value, e.valueKey) === Zt(w, e.valueKey) : Wt.value === w) {
        k = {
          value: w,
          currentLabel: Wt.currentLabel,
          get isDisabled() {
            return Wt.isDisabled;
          }
        };
        break;
      }
    }
    if (k)
      return k;
    const we = te ? w.label : w ?? "";
    return {
      value: w,
      currentLabel: we
    };
  }, zt = () => {
    a.hoveringIndex = q.value.findIndex((w) => a.selected.some((k) => ho(k) === ho(w)));
  }, on = () => {
    a.selectionWidth = l.value.getBoundingClientRect().width;
  }, x = () => {
    a.collapseItemWidth = b.value.getBoundingClientRect().width;
  }, oe = () => {
    var w, k;
    (k = (w = u.value) == null ? void 0 : w.updatePopper) == null || k.call(w);
  }, Ze = () => {
    var w, k;
    (k = (w = p.value) == null ? void 0 : w.updatePopper) == null || k.call(w);
  }, Vt = () => {
    a.inputValue.length > 0 && !T.value && (T.value = !0), vt(a.inputValue);
  }, Ht = (w) => {
    if (a.inputValue = w.target.value, e.remote)
      Aa();
    else
      return Vt();
  }, Aa = Ov(() => {
    Vt();
  }, ke.value), Fn = (w) => {
    Zn(e.modelValue, w) || t(An, w);
  }, su = (w) => Iv(w, (k) => {
    const te = a.cachedOptions.get(k);
    return te && !te.disabled && !te.states.groupDisabled;
  }), iu = (w) => {
    if (e.multiple && w.code !== mt.delete && w.target.value.length <= 0) {
      const k = Yt(e.modelValue).slice(), te = su(k);
      if (te < 0)
        return;
      const we = k[te];
      k.splice(te, 1), t(Ke, k), Fn(k), t("remove-tag", we);
    }
  }, lu = (w, k) => {
    const te = a.selected.indexOf(k);
    if (te > -1 && !Q.value) {
      const we = Yt(e.modelValue).slice();
      we.splice(te, 1), t(Ke, we), Fn(we), t("remove-tag", k.value);
    }
    w.stopPropagation(), vo();
  }, Pa = (w) => {
    w.stopPropagation();
    const k = e.multiple ? [] : re.value;
    if (e.multiple)
      for (const te of a.selected)
        te.isDisabled && k.push(te.value);
    t(Ke, k), Fn(k), a.hoveringIndex = -1, T.value = !1, t("clear"), vo();
  }, Ra = (w) => {
    var k;
    if (e.multiple) {
      const te = Yt((k = e.modelValue) != null ? k : []).slice(), we = Ma(te, w);
      we > -1 ? te.splice(we, 1) : (e.multipleLimit <= 0 || te.length < e.multipleLimit) && te.push(w.value), t(Ke, te), Fn(te), w.created && vt(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(Ke, w.value), Fn(w.value), T.value = !1;
    vo(), !T.value && fe(() => {
      po(w);
    });
  }, Ma = (w = [], k) => On(k) ? -1 : $e(k.value) ? w.findIndex((te) => Zn(Zt(te, e.valueKey), ho(k))) : w.indexOf(k.value), po = (w) => {
    var k, te, we, We, _n;
    const Wt = Ee(w) ? w[0] : w;
    let go = null;
    if (Wt?.value) {
      const zn = q.value.filter((Tu) => Tu.value === Wt.value);
      zn.length > 0 && (go = zn[0].$el);
    }
    if (u.value && go) {
      const zn = (We = (we = (te = (k = u.value) == null ? void 0 : k.popperRef) == null ? void 0 : te.contentRef) == null ? void 0 : we.querySelector) == null ? void 0 : We.call(we, `.${r.be("dropdown", "wrap")}`);
      zn && Ch(zn, go);
    }
    (_n = m.value) == null || _n.handleScroll();
  }, uu = (w) => {
    a.options.set(w.value, w), a.cachedOptions.set(w.value, w);
  }, cu = (w, k) => {
    a.options.get(w) === k && a.options.delete(w);
  }, du = y(() => {
    var w, k;
    return (k = (w = u.value) == null ? void 0 : w.popperRef) == null ? void 0 : k.contentRef;
  }), fu = () => {
    a.isBeforeHide = !1, fe(() => {
      var w;
      (w = m.value) == null || w.update(), po(a.selected);
    });
  }, vo = () => {
    var w;
    (w = f.value) == null || w.focus();
  }, pu = () => {
    var w;
    if (T.value) {
      T.value = !1, fe(() => {
        var k;
        return (k = f.value) == null ? void 0 : k.blur();
      });
      return;
    }
    (w = f.value) == null || w.blur();
  }, vu = (w) => {
    Pa(w);
  }, hu = (w) => {
    if (T.value = !1, E.value) {
      const k = new FocusEvent("focus", w);
      fe(() => F(k));
    }
  }, gu = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : T.value = !1;
  }, La = () => {
    Q.value || (Rr && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : T.value = !T.value);
  }, mu = () => {
    if (!T.value)
      La();
    else {
      const w = q.value[a.hoveringIndex];
      w && !w.isDisabled && Ra(w);
    }
  }, ho = (w) => $e(w.value) ? Zt(w.value, e.valueKey) : w.value, bu = y(() => q.value.filter((w) => w.visible).every((w) => w.isDisabled)), yu = y(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), wu = y(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), xa = (w) => {
    if (!T.value) {
      T.value = !0;
      return;
    }
    if (!(a.options.size === 0 || ne.value === 0 || C.value) && !bu.value) {
      w === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : w === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const k = q.value[a.hoveringIndex];
      (k.isDisabled || !k.visible) && xa(w), fe(() => po(z.value));
    }
  }, _u = () => {
    if (!l.value)
      return 0;
    const w = window.getComputedStyle(l.value);
    return Number.parseFloat(w.gap || "6px");
  }, Su = y(() => {
    const w = _u();
    return { maxWidth: `${b.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - w : a.selectionWidth}px` };
  }), Cu = y(() => ({ maxWidth: `${a.selectionWidth}px` })), Eu = (w) => {
    t("popup-scroll", w);
  };
  return st(l, on), st(d, oe), st(I, oe), st(h, Ze), st(b, x), be(() => {
    Oe();
  }), {
    inputId: j,
    contentId: o,
    nsSelect: r,
    nsInput: s,
    states: a,
    isFocused: E,
    expanded: T,
    optionsArray: q,
    hoverOption: z,
    selectSize: pt,
    filteredOptionsCount: ne,
    updateTooltip: oe,
    updateTagTooltip: Ze,
    debouncedOnInputChange: Aa,
    onInput: Ht,
    deletePrevTag: iu,
    deleteTag: lu,
    deleteSelected: Pa,
    handleOptionSelect: Ra,
    scrollToOption: po,
    hasModelValue: B,
    shouldShowPlaceholder: St,
    currentPlaceholder: Bt,
    mouseEnterEventName: Ct,
    needStatusIcon: le,
    showClose: ve,
    iconComponent: ye,
    iconReverse: rt,
    validateState: Ve,
    validateIcon: ft,
    showNewOption: Pe,
    updateOptions: He,
    collapseTagSize: Re,
    setSelected: Oe,
    selectDisabled: Q,
    emptyText: K,
    handleCompositionStart: O,
    handleCompositionUpdate: $,
    handleCompositionEnd: S,
    onOptionCreate: uu,
    onOptionDestroy: cu,
    handleMenuEnter: fu,
    focus: vo,
    blur: pu,
    handleClearClick: vu,
    handleClickOutside: hu,
    handleEsc: gu,
    toggleMenu: La,
    selectOption: mu,
    getValueKey: ho,
    navigateOptions: xa,
    dropdownMenuVisible: Dt,
    showTagList: yu,
    collapseTagList: wu,
    popupScroll: Eu,
    tagStyle: Su,
    collapseTagStyle: Cu,
    popperRef: du,
    inputRef: f,
    tooltipRef: u,
    tagTooltipRef: p,
    prefixRef: v,
    suffixRef: g,
    selectRef: i,
    wrapperRef: I,
    selectionRef: l,
    scrollbarRef: m,
    menuRef: d,
    tagMenuRef: h,
    collapseItemRef: b
  };
};
var Zb = V({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ae(sr);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), i = [];
      function l(u) {
        Ee(u) && u.forEach((p) => {
          var f, v, g, d;
          const h = (f = p?.type || {}) == null ? void 0 : f.name;
          h === "ElOptionGroup" ? l(!_e(p.children) && !Ee(p.children) && ge((v = p.children) == null ? void 0 : v.default) ? (g = p.children) == null ? void 0 : g.default() : p.children) : h === "ElOption" ? i.push((d = p.props) == null ? void 0 : d.value) : Ee(p.children) && l(p.children);
        });
      }
      return a.length && l((s = a[0]) == null ? void 0 : s.children), Zn(i, o) || (o = i, n && (n.states.optionValues = i)), a;
    };
  }
});
const Xb = se({
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
  size: Qo,
  effect: {
    type: Y(String),
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
    type: Y(Object),
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
  teleported: Ia.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Lt,
    default: da
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Lt,
    default: Ah
  },
  tagType: { ...Fr.type, default: "info" },
  tagEffect: { ...Fr.effect, default: "light" },
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
    type: Y(String),
    values: rr,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: Y(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...vh,
  ...Bn(["ariaLabel"])
}), Si = "ElSelect", Jb = V({
  name: Si,
  componentName: Si,
  components: {
    ElSelectMenu: qb,
    ElOption: $a,
    ElOptions: Zb,
    ElTag: _b,
    ElScrollbar: Eg,
    ElTooltip: z0,
    ElIcon: xe
  },
  directives: { ClickOutside: Sb },
  props: Xb,
  emits: [
    Ke,
    An,
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
      return Ee(l) ? u ? l : p : u ? p : l;
    }), o = Qt({
      ...Yr(e),
      modelValue: n
    }), r = Yb(o, t), { calculatorRef: s, inputStyle: a } = Hb();
    Qe(sr, Qt({
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
function Qb(e, t, n, o, r, s) {
  const a = rn("el-tag"), i = rn("el-tooltip"), l = rn("el-icon"), u = rn("el-option"), p = rn("el-options"), f = rn("el-scrollbar"), v = rn("el-select-menu"), g = Qu("click-outside");
  return Ne((_(), D("div", {
    ref: "selectRef",
    class: L([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [ec(e.mouseEnterEventName)]: (d) => e.states.inputHovering = !0,
    onMouseleave: (d) => e.states.inputHovering = !1
  }, [
    ee(i, {
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
      default: W(() => {
        var d;
        return [
          R("div", {
            ref: "wrapperRef",
            class: L([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Me(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (_(), D("div", {
              key: 0,
              ref: "prefixRef",
              class: L(e.nsSelect.e("prefix"))
            }, [
              G(e.$slots, "prefix")
            ], 2)) : H("v-if", !0),
            R("div", {
              ref: "selectionRef",
              class: L([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? G(e.$slots, "tag", { key: 0 }, () => [
                (_(!0), D(Ge, null, Qn(e.showTagList, (h) => (_(), D("div", {
                  key: e.getValueKey(h),
                  class: L(e.nsSelect.e("selected-item"))
                }, [
                  ee(a, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: pe(e.tagStyle),
                    onClose: (b) => e.deleteTag(b, h)
                  }, {
                    default: W(() => [
                      R("span", {
                        class: L(e.nsSelect.e("tags-text"))
                      }, [
                        G(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          gt(Z(h.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (_(), U(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: W(() => [
                    R("div", {
                      ref: "collapseItemRef",
                      class: L(e.nsSelect.e("selected-item"))
                    }, [
                      ee(a, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: pe(e.collapseTagStyle)
                      }, {
                        default: W(() => [
                          R("span", {
                            class: L(e.nsSelect.e("tags-text"))
                          }, " + " + Z(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: W(() => [
                    R("div", {
                      ref: "tagMenuRef",
                      class: L(e.nsSelect.e("selection"))
                    }, [
                      (_(!0), D(Ge, null, Qn(e.collapseTagList, (h) => (_(), D("div", {
                        key: e.getValueKey(h),
                        class: L(e.nsSelect.e("selected-item"))
                      }, [
                        ee(a, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !h.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (b) => e.deleteTag(b, h)
                        }, {
                          default: W(() => [
                            R("span", {
                              class: L(e.nsSelect.e("tags-text"))
                            }, [
                              G(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                gt(Z(h.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : H("v-if", !0)
              ]) : H("v-if", !0),
              R("div", {
                class: L([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Ne(R("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
                  type: "text",
                  name: e.name,
                  class: L([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: pe(e.inputStyle),
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
                    Wn(Me((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Wn(Me((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Wn(Me(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Wn(Me(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Wn(Me(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Me(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Ic, e.states.inputValue]
                ]),
                e.filterable ? (_(), D("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: L(e.nsSelect.e("input-calculator")),
                  textContent: Z(e.states.inputValue)
                }, null, 10, ["textContent"])) : H("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (_(), D("div", {
                key: 1,
                class: L([
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
                  R("span", null, Z(e.currentPlaceholder), 1)
                ]) : (_(), D("span", { key: 1 }, Z(e.currentPlaceholder), 1))
              ], 2)) : H("v-if", !0)
            ], 2),
            R("div", {
              ref: "suffixRef",
              class: L(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (_(), U(l, {
                key: 0,
                class: L([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: W(() => [
                  (_(), U(Be(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              e.showClose && e.clearIcon ? (_(), U(l, {
                key: 1,
                class: L([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: W(() => [
                  (_(), U(Be(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : H("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (_(), U(l, {
                key: 2,
                class: L([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: W(() => [
                  (_(), U(Be(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: W(() => [
        ee(v, { ref: "menuRef" }, {
          default: W(() => [
            e.$slots.header ? (_(), D("div", {
              key: 0,
              class: L(e.nsSelect.be("dropdown", "header")),
              onClick: Me(() => {
              }, ["stop"])
            }, [
              G(e.$slots, "header")
            ], 10, ["onClick"])) : H("v-if", !0),
            Ne(ee(f, {
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
              default: W(() => [
                e.showNewOption ? (_(), U(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : H("v-if", !0),
                ee(p, null, {
                  default: W(() => [
                    G(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [ut, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (_(), D("div", {
              key: 1,
              class: L(e.nsSelect.be("dropdown", "loading"))
            }, [
              G(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (_(), D("div", {
              key: 2,
              class: L(e.nsSelect.be("dropdown", "empty"))
            }, [
              G(e.$slots, "empty", {}, () => [
                R("span", null, Z(e.emptyText), 1)
              ])
            ], 2)) : H("v-if", !0),
            e.$slots.footer ? (_(), D("div", {
              key: 3,
              class: L(e.nsSelect.be("dropdown", "footer")),
              onClick: Me(() => {
              }, ["stop"])
            }, [
              G(e.$slots, "footer")
            ], 10, ["onClick"])) : H("v-if", !0)
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
var ey = /* @__PURE__ */ ie(Jb, [["render", Qb], ["__file", "select.vue"]]);
const ty = V({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = de("select"), n = A(null), o = Ae(), r = A([]);
    Qe(tu, Qt({
      ...Yr(e)
    }));
    const s = y(() => r.value.some((u) => u.visible === !0)), a = (u) => {
      var p, f;
      return ((p = u.type) == null ? void 0 : p.name) === "ElOption" && !!((f = u.component) != null && f.proxy);
    }, i = (u) => {
      const p = Yt(u), f = [];
      return p.forEach((v) => {
        var g, d;
        a(v) ? f.push(v.component.proxy) : (g = v.children) != null && g.length ? f.push(...i(v.children)) : (d = v.component) != null && d.subTree && f.push(...i(v.component.subTree));
      }), f;
    }, l = () => {
      r.value = i(o.subTree);
    };
    return be(() => {
      l();
    }), Qv(n, l, {
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
function ny(e, t, n, o, r, s) {
  return Ne((_(), D("ul", {
    ref: "groupRef",
    class: L(e.ns.be("group", "wrap"))
  }, [
    R("li", {
      class: L(e.ns.be("group", "title"))
    }, Z(e.label), 3),
    R("li", null, [
      R("ul", {
        class: L(e.ns.b("group"))
      }, [
        G(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [ut, e.visible]
  ]);
}
var nu = /* @__PURE__ */ ie(ty, [["render", ny], ["__file", "option-group.vue"]]);
const oy = ot(ey, {
  Option: $a,
  OptionGroup: nu
}), ry = ca($a);
ca(nu);
const ay = se({
  direction: {
    type: Y(String),
    default: "horizontal"
  },
  options: {
    type: Y(Array),
    default: () => []
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  block: Boolean,
  size: Qo,
  disabled: Boolean,
  validateEvent: {
    type: Boolean,
    default: !0
  },
  id: String,
  name: String,
  ...Bn(["ariaLabel"])
}), sy = {
  [Ke]: (e) => _e(e) || me(e) || vn(e),
  [An]: (e) => _e(e) || me(e) || vn(e)
}, iy = V({
  name: "ElSegmented"
}), ly = /* @__PURE__ */ V({
  ...iy,
  props: ay,
  emits: sy,
  setup(e, { emit: t }) {
    const n = e, o = de("segmented"), r = hn(), s = uo(), a = nr(), { formItem: i } = tr(), { inputId: l, isLabeledByFormItem: u } = pa(n, {
      formItemContext: i
    }), p = A(null), f = Kv(), v = Qt({
      isInit: !1,
      width: 0,
      height: 0,
      translateX: 0,
      translateY: 0,
      focusVisible: !1
    }), g = (T) => {
      const z = d(T);
      t(Ke, z), t(An, z);
    }, d = (T) => $e(T) ? T.value : T, h = (T) => $e(T) ? T.label : T, b = (T) => !!(a.value || $e(T) && T.disabled), m = (T) => n.modelValue === d(T), C = (T) => n.options.find((z) => d(z) === T), O = (T) => [
      o.e("item"),
      o.is("selected", m(T)),
      o.is("disabled", b(T))
    ], $ = () => {
      if (!p.value)
        return;
      const T = p.value.querySelector(".is-selected"), z = p.value.querySelector(".is-selected input");
      if (!T || !z) {
        v.width = 0, v.height = 0, v.translateX = 0, v.translateY = 0, v.focusVisible = !1;
        return;
      }
      const N = T.getBoundingClientRect();
      v.isInit = !0, n.direction === "vertical" ? (v.height = N.height, v.translateY = T.offsetTop) : (v.width = N.width, v.translateX = T.offsetLeft);
      try {
        v.focusVisible = z.matches(":focus-visible");
      } catch {
      }
    }, S = y(() => [
      o.b(),
      o.m(s.value),
      o.is("block", n.block)
    ]), I = y(() => ({
      width: n.direction === "vertical" ? "100%" : `${v.width}px`,
      height: n.direction === "vertical" ? `${v.height}px` : "100%",
      transform: n.direction === "vertical" ? `translateY(${v.translateY}px)` : `translateX(${v.translateX}px)`,
      display: v.isInit ? "block" : "none"
    })), E = y(() => [
      o.e("item-selected"),
      o.is("disabled", b(C(n.modelValue))),
      o.is("focus-visible", v.focusVisible)
    ]), F = y(() => n.name || r.value);
    return st(p, $), X(f, $), X(() => n.modelValue, () => {
      var T;
      $(), n.validateEvent && ((T = i?.validate) == null || T.call(i, "change").catch((z) => Se(z)));
    }, {
      flush: "post"
    }), (T, z) => T.options.length ? (_(), D("div", {
      key: 0,
      id: c(l),
      ref_key: "segmentedRef",
      ref: p,
      class: L(c(S)),
      role: "radiogroup",
      "aria-label": c(u) ? void 0 : T.ariaLabel || "segmented",
      "aria-labelledby": c(u) ? c(i).labelId : void 0
    }, [
      R("div", {
        class: L([c(o).e("group"), c(o).m(n.direction)])
      }, [
        R("div", {
          style: pe(c(I)),
          class: L(c(E))
        }, null, 6),
        (_(!0), D(Ge, null, Qn(T.options, (N, P) => (_(), D("label", {
          key: P,
          class: L(O(N))
        }, [
          R("input", {
            class: L(c(o).e("item-input")),
            type: "radio",
            name: c(F),
            disabled: b(N),
            checked: m(N),
            onChange: (j) => g(N)
          }, null, 42, ["name", "disabled", "checked", "onChange"]),
          R("div", {
            class: L(c(o).e("item-label"))
          }, [
            G(T.$slots, "default", { item: N }, () => [
              gt(Z(h(N)), 1)
            ])
          ], 2)
        ], 2))), 128))
      ], 2)
    ], 10, ["id", "aria-label", "aria-labelledby"])) : H("v-if", !0);
  }
});
var uy = /* @__PURE__ */ ie(ly, [["__file", "segmented.vue"]]);
const cy = ot(uy), ou = ["success", "info", "warning", "error"], Ie = gl({
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
  appendTo: ce ? document.body : void 0
}), dy = se({
  customClass: {
    type: String,
    default: Ie.customClass
  },
  center: {
    type: Boolean,
    default: Ie.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ie.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ie.duration
  },
  icon: {
    type: Lt,
    default: Ie.icon
  },
  id: {
    type: String,
    default: Ie.id
  },
  message: {
    type: Y([
      String,
      Object,
      Function
    ]),
    default: Ie.message
  },
  onClose: {
    type: Y(Function),
    default: Ie.onClose
  },
  showClose: {
    type: Boolean,
    default: Ie.showClose
  },
  type: {
    type: String,
    values: ou,
    default: Ie.type
  },
  plain: {
    type: Boolean,
    default: Ie.plain
  },
  offset: {
    type: Number,
    default: Ie.offset
  },
  zIndex: {
    type: Number,
    default: Ie.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ie.grouping
  },
  repeatNum: {
    type: Number,
    default: Ie.repeatNum
  }
}), fy = {
  destroy: () => !0
}, lt = tc([]), py = (e) => {
  const t = lt.findIndex((r) => r.id === e), n = lt[t];
  let o;
  return t > 0 && (o = lt[t - 1]), { current: n, prev: o };
}, vy = (e) => {
  const { prev: t } = py(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, hy = (e, t) => lt.findIndex((o) => o.id === e) > 0 ? 16 : t, gy = V({
  name: "ElMessage"
}), my = /* @__PURE__ */ V({
  ...gy,
  props: dy,
  emits: fy,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Gh, { ns: r, zIndex: s } = cl("message"), { currentZIndex: a, nextZIndex: i } = s, l = A(), u = A(!1), p = A(0);
    let f;
    const v = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = y(() => {
      const E = n.type;
      return { [r.bm("icon", E)]: E && Ho[E] };
    }), d = y(() => n.icon || Ho[n.type] || ""), h = y(() => vy(n.id)), b = y(() => hy(n.id, n.offset) + h.value), m = y(() => p.value + b.value), C = y(() => ({
      top: `${b.value}px`,
      zIndex: a.value
    }));
    function O() {
      n.duration !== 0 && ({ stop: f } = Fo(() => {
        S();
      }, n.duration));
    }
    function $() {
      f?.();
    }
    function S() {
      u.value = !1;
    }
    function I({ code: E }) {
      E === mt.esc && S();
    }
    return be(() => {
      O(), i(), u.value = !0;
    }), X(() => n.repeatNum, () => {
      $(), O();
    }), Le(document, "keydown", I), st(l, () => {
      p.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: m,
      close: S
    }), (E, F) => (_(), U(mn, {
      name: c(r).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (T) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: W(() => [
        Ne(R("div", {
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
          style: pe(c(C)),
          role: "alert",
          onMouseenter: $,
          onMouseleave: O
        }, [
          E.repeatNum > 1 ? (_(), U(c(U0), {
            key: 0,
            value: E.repeatNum,
            type: c(v),
            class: L(c(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          c(d) ? (_(), U(c(xe), {
            key: 1,
            class: L([c(r).e("icon"), c(g)])
          }, {
            default: W(() => [
              (_(), U(Be(c(d))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          G(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (_(), D(Ge, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              R("p", {
                class: L(c(r).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), D("p", {
              key: 0,
              class: L(c(r).e("content"))
            }, Z(E.message), 3))
          ]),
          E.showClose ? (_(), U(c(xe), {
            key: 2,
            class: L(c(r).e("closeBtn")),
            onClick: Me(S, ["stop"])
          }, {
            default: W(() => [
              ee(c(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [ut, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var by = /* @__PURE__ */ ie(my, [["__file", "message.vue"]]);
let yy = 1;
const ru = (e) => {
  const t = !e || _e(e) || eo(e) || ge(e) ? { message: e } : e, n = {
    ...Ie,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (_e(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Xe(o) || (Se("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return vn(ht.grouping) && !n.grouping && (n.grouping = ht.grouping), me(ht.duration) && n.duration === 3e3 && (n.duration = ht.duration), me(ht.offset) && n.offset === 16 && (n.offset = ht.offset), vn(ht.showClose) && !n.showClose && (n.showClose = ht.showClose), n;
}, wy = (e) => {
  const t = lt.indexOf(e);
  if (t === -1)
    return;
  lt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, _y = ({ appendTo: e, ...t }, n) => {
  const o = `message_${yy++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), wy(p);
    },
    onDestroy: () => {
      xo(null, s);
    }
  }, i = ee(by, a, ge(a.message) || eo(a.message) ? {
    default: ge(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = n || xn._context, xo(i, s), e.appendChild(s.firstElementChild);
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
}, xn = (e = {}, t) => {
  if (!ce)
    return { close: () => {
    } };
  const n = ru(e);
  if (n.grouping && lt.length) {
    const r = lt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (me(ht.max) && lt.length >= ht.max)
    return { close: () => {
    } };
  const o = _y(n, t);
  return lt.push(o), o.handler;
};
ou.forEach((e) => {
  xn[e] = (t = {}, n) => {
    const o = ru(t);
    return xn({ ...o, type: e }, n);
  };
});
function Sy(e) {
  for (const t of lt)
    (!e || e === t.props.type) && t.handler.close();
}
xn.closeAll = Sy;
xn._context = null;
const Cy = fl(xn, "$message"), au = [
  "success",
  "info",
  "warning",
  "error"
], Ey = se({
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
    type: Lt
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Y([
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
    type: Y(Function),
    default: () => {
    }
  },
  onClose: {
    type: Y(Function),
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
    values: [...au, ""],
    default: ""
  },
  zIndex: Number
}), Ty = {
  destroy: () => !0
}, Oy = V({
  name: "ElNotification"
}), Iy = /* @__PURE__ */ V({
  ...Oy,
  props: Ey,
  emits: Ty,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = cl("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: i } = vl, l = A(!1);
    let u;
    const p = y(() => {
      const O = n.type;
      return O && Ho[n.type] ? o.m(O) : "";
    }), f = y(() => n.type && Ho[n.type] || n.icon), v = y(() => n.position.endsWith("right") ? "right" : "left"), g = y(() => n.position.startsWith("top") ? "top" : "bottom"), d = y(() => {
      var O;
      return {
        [g.value]: `${n.offset}px`,
        zIndex: (O = n.zIndex) != null ? O : a.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: u } = Fo(() => {
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
      O === mt.delete || O === mt.backspace ? b() : O === mt.esc ? l.value && m() : h();
    }
    return be(() => {
      h(), s(), l.value = !0;
    }), Le(document, "keydown", C), t({
      visible: l,
      close: m
    }), (O, $) => (_(), U(mn, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (S) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: W(() => [
        Ne(R("div", {
          id: O.id,
          class: L([c(o).b(), O.customClass, c(v)]),
          style: pe(c(d)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: h,
          onClick: O.onClick
        }, [
          c(f) ? (_(), U(c(xe), {
            key: 0,
            class: L([c(o).e("icon"), c(p)])
          }, {
            default: W(() => [
              (_(), U(Be(c(f))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          R("div", {
            class: L(c(o).e("group"))
          }, [
            R("h2", {
              class: L(c(o).e("title")),
              textContent: Z(O.title)
            }, null, 10, ["textContent"]),
            Ne(R("div", {
              class: L(c(o).e("content")),
              style: pe(O.title ? void 0 : { margin: 0 })
            }, [
              G(O.$slots, "default", {}, () => [
                O.dangerouslyUseHTMLString ? (_(), D(Ge, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  R("p", { innerHTML: O.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), D("p", { key: 0 }, Z(O.message), 1))
              ])
            ], 6), [
              [ut, O.message]
            ]),
            O.showClose ? (_(), U(c(xe), {
              key: 0,
              class: L(c(o).e("closeBtn")),
              onClick: Me(m, ["stop"])
            }, {
              default: W(() => [
                ee(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [ut, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var $y = /* @__PURE__ */ ie(Iy, [["__file", "notification.vue"]]);
const Uo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, zr = 16;
let Ay = 1;
const Nn = function(e = {}, t) {
  if (!ce)
    return { close: () => {
    } };
  (_e(e) || eo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Uo[n].forEach(({ vm: p }) => {
    var f;
    o += (((f = p.el) == null ? void 0 : f.offsetHeight) || 0) + zr;
  }), o += zr;
  const r = `notification_${Ay++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      Py(r, n, s);
    }
  };
  let i = document.body;
  Xe(e.appendTo) ? i = e.appendTo : _e(e.appendTo) && (i = document.querySelector(e.appendTo)), Xe(i) || (Se("ElNotification", "the appendTo option is not an HTMLElement. Falling back to document.body."), i = document.body);
  const l = document.createElement("div"), u = ee($y, a, ge(a.message) ? a.message : eo(a.message) ? () => a.message : null);
  return u.appContext = On(t) ? Nn._context : t, u.props.onDestroy = () => {
    xo(null, l);
  }, xo(u, l), Uo[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
au.forEach((e) => {
  Nn[e] = (t = {}, n) => ((_e(t) || eo(t)) && (t = {
    message: t
  }), Nn({ ...t, type: e }, n));
});
function Py(e, t, n) {
  const o = Uo[t], r = o.findIndex(({ vm: u }) => {
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
      const { el: p, component: f } = o[u].vm, v = Number.parseInt(p.style[i], 10) - a - zr;
      f.props.offset = v;
    }
}
function Ry() {
  for (const e of Object.values(Uo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Nn.closeAll = Ry;
Nn._context = null;
const My = fl(Nn, "$notify"), Ly = {
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
    o === "center" ? Cy({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0
    }) : My({
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
}, xy = {
  key: 0,
  class: "selection-hint"
}, Ny = /* @__PURE__ */ V({
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
    return (d, h) => (_(), D(
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
        i.value ? H("v-if", !0) : (_(), D(
          "div",
          xy,
          Z(d.$t("screenRecorder.dragToSelect")),
          1
          /* TEXT */
        )),
        i.value ? (_(), D(
          "div",
          {
            key: 1,
            class: "selected-region",
            style: pe(l.value)
          },
          [
            (_(), D(
              Ge,
              null,
              Qn(a, (b) => R(
                "span",
                {
                  key: b,
                  class: L(["resize-handle", b])
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
        )) : H("v-if", !0)
      ],
      32
      /* NEED_HYDRATION */
    ));
  }
}), wn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, ky = /* @__PURE__ */ wn(Ny, [["__scopeId", "data-v-f61ad013"]]), Dy = { class: "dimension" }, By = ["value"], Fy = { class: "dimension" }, zy = ["value"], Vy = ["disabled"], Hy = /* @__PURE__ */ V({
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
    return (i, l) => (_(), D(
      "div",
      {
        class: "recording-entry",
        style: pe(a.value)
      },
      [
        R("label", Dy, [
          R(
            "span",
            null,
            Z(i.$t("screenRecorder.width")),
            1
            /* TEXT */
          ),
          R("input", {
            value: i.width,
            readonly: ""
          }, null, 8, By)
        ]),
        R("label", Fy, [
          R(
            "span",
            null,
            Z(i.$t("screenRecorder.height")),
            1
            /* TEXT */
          ),
          R("input", {
            value: i.height,
            readonly: ""
          }, null, 8, zy)
        ]),
        Ne(R(
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
          [es, r.value]
        ]),
        Ne(R(
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
          [es, s.value]
        ]),
        R("button", {
          class: "primary",
          disabled: i.disabled,
          onClick: l[2] || (l[2] = (u) => i.$emit("start"))
        }, Z(i.$t("screenRecorder.start")), 9, Vy),
        R("button", {
          class: "ghost",
          onClick: l[3] || (l[3] = (u) => i.$emit("cancel"))
        }, "×")
      ],
      4
      /* STYLE */
    ));
  }
}), Wy = /* @__PURE__ */ wn(Hy, [["__scopeId", "data-v-ea3f2aa6"]]), jy = { class: "floating-control" }, Uy = { class: "time" }, Ky = /* @__PURE__ */ V({
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
    return (a, i) => (_(), D("div", jy, [
      R(
        "span",
        {
          class: L(["record-dot", { paused: a.paused }])
        },
        null,
        2
        /* CLASS */
      ),
      R(
        "span",
        Uy,
        Z(r.value),
        1
        /* TEXT */
      ),
      R(
        "button",
        { onClick: s },
        Z(a.paused ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
        1
        /* TEXT */
      ),
      R(
        "button",
        {
          class: "danger",
          onClick: i[0] || (i[0] = (l) => a.$emit("stop"))
        },
        Z(a.$t("screenRecorder.stop")),
        1
        /* TEXT */
      ),
      R(
        "button",
        {
          class: "ghost",
          onClick: i[1] || (i[1] = (l) => a.$emit("cancel"))
        },
        Z(a.$t("screenRecorder.cancel")),
        1
        /* TEXT */
      )
    ]));
  }
}), Gy = /* @__PURE__ */ wn(Ky, [["__scopeId", "data-v-934c1ee3"]]);
async function qy(e = {}) {
  return typeof e == "object" && Object.freeze(e), await M("plugin:dialog|save", { options: e });
}
const Yy = { class: "export-form" }, Zy = { class: "path-row" }, Xy = /* @__PURE__ */ V({
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
      const f = n.settings.format, v = await qy({
        title: "保存录屏",
        defaultPath: `recording.${f}`,
        filters: [
          { name: f.toUpperCase(), extensions: [f] }
        ]
      });
      v && a("savePath", v);
    };
    return (f, v) => {
      const g = cy, d = ry, h = oy, b = cg, m = Xl, C = Vb;
      return _(), U(C, {
        "model-value": f.modelValue,
        title: f.$t("screenRecorder.exportSettings"),
        width: "420px",
        "append-to-body": "",
        "onUpdate:modelValue": v[2] || (v[2] = (O) => f.$emit("update:modelValue", O))
      }, {
        footer: W(() => [
          ee(m, {
            onClick: v[0] || (v[0] = (O) => f.$emit("cancel"))
          }, {
            default: W(() => [
              gt(
                Z(f.$t("common.cancel")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          ee(m, {
            type: "primary",
            disabled: !f.settings.savePath,
            onClick: v[1] || (v[1] = (O) => f.$emit("export"))
          }, {
            default: W(() => [
              gt(
                Z(f.$t("screenRecorder.export")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])
        ]),
        default: W(() => [
          R("div", Yy, [
            R("label", null, [
              R(
                "span",
                null,
                Z(f.$t("screenRecorder.format")),
                1
                /* TEXT */
              ),
              ee(g, {
                "model-value": f.settings.format,
                options: r,
                "onUpdate:modelValue": i
              }, null, 8, ["model-value"])
            ]),
            R("label", null, [
              R(
                "span",
                null,
                Z(f.$t("screenRecorder.fps")),
                1
                /* TEXT */
              ),
              ee(h, {
                "model-value": f.settings.fps,
                "onUpdate:modelValue": l
              }, {
                default: W(() => [
                  (_(), D(
                    Ge,
                    null,
                    Qn(s, (O) => ee(d, {
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
            R("label", null, [
              R(
                "span",
                null,
                Z(f.$t("screenRecorder.quality")),
                1
                /* TEXT */
              ),
              ee(h, {
                "model-value": f.settings.quality,
                "onUpdate:modelValue": u
              }, {
                default: W(() => [
                  ee(d, {
                    label: f.$t("screenRecorder.qualityHigh"),
                    value: "high"
                  }, null, 8, ["label"]),
                  ee(d, {
                    label: f.$t("screenRecorder.qualityStandard"),
                    value: "standard"
                  }, null, 8, ["label"]),
                  ee(d, {
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
                Z(f.$t("screenRecorder.savePath")),
                1
                /* TEXT */
              ),
              R("div", Zy, [
                ee(b, {
                  "model-value": f.settings.savePath,
                  readonly: ""
                }, null, 8, ["model-value"]),
                ee(m, { onClick: p }, {
                  default: W(() => [
                    gt(
                      Z(f.$t("common.browse")),
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
}), Jy = /* @__PURE__ */ wn(Xy, [["__scopeId", "data-v-11026f25"]]), Qy = {}, ew = { class: "export-progress" };
function tw(e, t) {
  return _(), D("div", ew, [
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
      Z(e.$t("screenRecorder.exporting")),
      1
      /* TEXT */
    )
  ]);
}
const nw = /* @__PURE__ */ wn(Qy, [["render", tw], ["__scopeId", "data-v-92ef9ccc"]]), ow = { class: "recording-result" }, rw = { class: "actions" }, aw = /* @__PURE__ */ V({
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
      const s = Xl;
      return _(), D("div", ow, [
        R(
          "h3",
          null,
          Z(o.$t("screenRecorder.exportDone")),
          1
          /* TEXT */
        ),
        R(
          "p",
          null,
          Z(o.result.width) + " × " + Z(o.result.height) + " · " + Z(n.value),
          1
          /* TEXT */
        ),
        R("div", rw, [
          ee(s, {
            type: "primary",
            onClick: r[0] || (r[0] = (a) => o.$emit("open"))
          }, {
            default: W(() => [
              gt(
                Z(o.$t("screenRecorder.openFile")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          ee(s, {
            onClick: r[1] || (r[1] = (a) => o.$emit("reveal"))
          }, {
            default: W(() => [
              gt(
                Z(o.$t("screenRecorder.openFolder")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          ee(s, {
            onClick: r[2] || (r[2] = (a) => o.$emit("recordAgain"))
          }, {
            default: W(() => [
              gt(
                Z(o.$t("screenRecorder.recordAgain")),
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
}), sw = /* @__PURE__ */ wn(aw, [["__scopeId", "data-v-2c0d75b1"]]), iw = () => M("screen_recorder_get_ffmpeg_status"), lw = () => M("screen_recorder_get_background"), uw = () => M("screen_recorder_get_preview"), cw = () => M("screen_recorder_clear_background"), Ot = (e) => M("screen_recorder_set_capture_excluded", { excluded: e }), dw = () => M("screen_recorder_close_window"), fw = (e, t) => M("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), pw = () => M("screen_recorder_pause_recording"), vw = (e, t) => M("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality
}), hw = () => M("screen_recorder_stop_recording"), gw = () => M("screen_recorder_cancel_recording"), mw = (e) => M("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), Ci = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: ""
});
function bw() {
  const e = A("selecting"), t = A(Ci()), n = A(null), o = A(null), r = A(""), s = A(null), a = A(0), i = A(null), l = y(() => e.value !== "recording" || s.value === null ? a.value : a.value + Date.now() - s.value), u = () => {
    i.value !== null && (window.clearInterval(i.value), i.value = null);
  }, p = () => {
    u(), i.value = window.setInterval(() => {
      a.value = l.value, s.value = Date.now();
    }, 500);
  }, f = async () => (n.value = await iw(), n.value), v = async (O) => {
    r.value = "", o.value = null;
    const $ = n.value ?? await f();
    if (!$.available)
      throw new Error($.message || "FFmpeg unavailable");
    await fw(O, t.value), e.value = "recording", a.value = 0, s.value = Date.now(), p();
  }, g = async () => {
    e.value === "recording" && (a.value = l.value, s.value = null, u(), await pw(), e.value = "paused");
  }, d = async (O) => {
    e.value === "paused" && (await vw(O, t.value), e.value = "recording", s.value = Date.now(), p());
  }, h = async () => {
    e.value !== "recording" && e.value !== "paused" || (a.value = l.value, s.value = null, u(), await hw(), e.value = "exporting");
  }, b = async () => (e.value = "exporting", o.value = await mw(t.value), e.value = "completed", o.value), m = async () => {
    u(), await gw(), e.value = "selecting", s.value = null, a.value = 0, o.value = null;
  }, C = () => {
    e.value = "selecting", s.value = null, a.value = 0, o.value = null, r.value = "", t.value = Ci();
  };
  return Gr(() => {
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
const yw = {
  key: 6,
  class: "ffmpeg-warning"
}, Sr = 430, Oo = 92, ww = /* @__PURE__ */ V({
  __name: "index",
  setup(e) {
    const t = Li(), n = A(null), o = A(null), r = A(!1), s = A(!1), a = A("");
    let i = null;
    const {
      status: l,
      settings: u,
      ffmpegStatus: p,
      result: f,
      elapsedMs: v,
      refreshFfmpegStatus: g,
      begin: d,
      pause: h,
      resume: b,
      stop: m,
      exportFile: C,
      cancel: O,
      reset: $
    } = bw(), S = y(() => {
      if (!n.value) return { left: 36, top: 36 };
      const K = 10, ne = 470, q = 38, he = Math.min(
        Math.max(n.value.x, K),
        Math.max(K, window.innerWidth - ne - K)
      ), Pe = n.value.y + n.value.height + K, He = Pe + q <= window.innerHeight ? Pe : Math.max(K, n.value.y - q - K);
      return { left: he, top: He };
    }), I = y(
      () => s.value || l.value === "recording" || l.value === "paused"
    ), E = async () => {
      await fe(), await new Promise((K) => window.setTimeout(K, 120));
    }, F = async (K = !1) => {
      const ne = K ? 50 : 1;
      for (let q = 0; q < ne; q += 1) {
        try {
          return a.value = await lw(), !0;
        } catch {
          try {
            const he = await uw();
            he && (a.value = he);
          } catch {
          }
        }
        if (!K) break;
        await new Promise((he) => window.setTimeout(he, 100));
      }
      return !!a.value;
    }, T = async (K) => {
      const ne = await t.scaleFactor(), q = await t.outerPosition(), he = q.x / ne, Pe = q.y / ne, He = window.innerWidth, pt = window.innerHeight, Re = 12, Dt = he + K.x, St = Pe + K.y, Bt = Dt + K.width / 2, Ct = St + K.height + Re, vt = St - Oo - Re, Ft = he + He - Sr - Re, Oe = Pe + pt - Oo - Re, Ye = Math.min(
        Math.max(he + Re, Bt - Sr / 2),
        Math.max(he + Re, Ft)
      ), zt = Ct + Oo <= Pe + pt ? Ct : Math.max(Pe + Re, Math.min(vt, Oe));
      await t.setFullscreen(!1), await t.setSize(new Zr(Sr, Oo)), await t.setPosition(new Xr(Ye, zt));
    }, z = async () => {
      await t.setFullscreen(!0);
    }, N = async (K) => {
      const ne = await t.outerPosition(), q = await t.scaleFactor();
      return {
        x: K.x,
        y: K.y,
        width: K.width,
        height: K.height,
        screenX: Math.round(ne.x + K.x * q),
        screenY: Math.round(ne.y + K.y * q),
        physicalWidth: Math.max(1, Math.round(K.width * q)),
        physicalHeight: Math.max(1, Math.round(K.height * q)),
        scale: q
      };
    }, P = async (K) => {
      o.value = await N(K), l.value = "ready";
    }, j = async () => {
      if (!n.value)
        throw new Error("NO_REGION");
      return o.value = await N(n.value), o.value;
    }, re = async (K) => {
      try {
        await K();
      } catch (ne) {
        Ly.msg(ne?.message || String(ne), "error");
      }
    }, J = () => re(async () => {
      const K = await j();
      s.value = !0, await Ot(!1).catch(() => {
      }), await T(K).catch(() => {
      }), await E();
      try {
        await d(K);
      } catch (ne) {
        throw s.value = !1, await Ot(!0).catch(() => {
        }), ne;
      } finally {
        s.value = !1;
      }
    }), Q = () => re(h), B = () => re(async () => {
      const K = await j();
      await Ot(!1).catch(() => {
      }), await E(), await b(K);
    }), le = () => re(async () => {
      await m(), s.value = !1, await Ot(!0).catch(() => {
      }), await z().catch(() => {
      }), r.value = !0;
    }), ve = () => re(async () => {
      r.value = !1, await C();
    }), ye = () => re(async () => {
      r.value = !1, await O(), s.value = !1, await Ot(!0).catch(() => {
      }), await z().catch(() => {
      }), $(), n.value = null, o.value = null;
    }), rt = () => {
      s.value = !1, Ot(!0), z(), $(), n.value = null, o.value = null;
    }, Ve = async () => {
      try {
        await O();
      } catch {
      }
      await Ot(!1).catch(() => {
      }), await dw();
    }, ft = async () => {
      f.value && await M("open_file_with_default_app", { filePath: f.value.path });
    }, ke = async () => {
      f.value && await M("show_file_in_folder", { filePath: f.value.path });
    }, Ce = (K) => {
      K.key === "Escape" && (K.preventDefault(), Ve());
    };
    return be(async () => {
      i = await Jr("background-ready", () => {
        F();
      }), await F(!0), await Ot(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await g().catch(() => {
      }), window.addEventListener("keydown", Ce);
    }), Gr(() => {
      window.removeEventListener("keydown", Ce), i?.(), Ot(!1), cw();
    }), (K, ne) => (_(), D(
      "div",
      {
        class: L(["screen-recorder", { "screen-recorder--capture-surface": I.value }])
      },
      [
        !I.value && a.value ? (_(), D(
          "div",
          {
            key: 0,
            class: "screen-background",
            style: pe({ backgroundImage: `url(data:image/jpeg;base64,${a.value})` })
          },
          null,
          4
          /* STYLE */
        )) : H("v-if", !0),
        !I.value && (c(l) === "selecting" || c(l) === "ready") ? (_(), U(ky, {
          key: 1,
          modelValue: n.value,
          "onUpdate:modelValue": ne[0] || (ne[0] = (q) => n.value = q),
          locked: c(l) !== "selecting" && c(l) !== "ready",
          onComplete: P
        }, null, 8, ["modelValue", "locked"])) : H("v-if", !0),
        !I.value && n.value && (c(l) === "selecting" || c(l) === "ready") ? (_(), U(Wy, {
          key: 2,
          width: Math.round(n.value.width),
          height: Math.round(n.value.height),
          left: S.value.left,
          top: S.value.top,
          fps: c(u).fps,
          format: c(u).format,
          disabled: c(p)?.available === !1,
          "onUpdate:fps": ne[1] || (ne[1] = (q) => c(u).fps = q),
          "onUpdate:format": ne[2] || (ne[2] = (q) => c(u).format = q),
          onStart: J,
          onCancel: Ve
        }, null, 8, ["width", "height", "left", "top", "fps", "format", "disabled"])) : H("v-if", !0),
        c(l) === "recording" || c(l) === "paused" ? (_(), U(Gy, {
          key: 3,
          "elapsed-ms": c(v),
          paused: c(l) === "paused",
          onPause: Q,
          onResume: B,
          onStop: le,
          onCancel: ye
        }, null, 8, ["elapsed-ms", "paused"])) : H("v-if", !0),
        ee(Jy, {
          modelValue: r.value,
          "onUpdate:modelValue": ne[3] || (ne[3] = (q) => r.value = q),
          settings: c(u),
          "onUpdate:settings": ne[4] || (ne[4] = (q) => Kr(u) ? u.value = q : null),
          onExport: ve,
          onCancel: ye
        }, null, 8, ["modelValue", "settings"]),
        c(l) === "exporting" && !r.value ? (_(), U(nw, { key: 4 })) : H("v-if", !0),
        c(l) === "completed" && c(f) ? (_(), U(sw, {
          key: 5,
          result: c(f),
          onOpen: ft,
          onReveal: ke,
          onRecordAgain: rt
        }, null, 8, ["result"])) : H("v-if", !0),
        !I.value && c(p) && !c(p).available ? (_(), D(
          "div",
          yw,
          Z(c(p).message || K.$t("screenRecorder.ffmpegMissing")),
          1
          /* TEXT */
        )) : H("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), Sw = /* @__PURE__ */ wn(ww, [["__scopeId", "data-v-8a00faf2"]]);
export {
  Sw as default
};
