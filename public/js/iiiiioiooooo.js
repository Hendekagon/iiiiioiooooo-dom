function aa() {
  return function(a) {
    return a
  }
}
function e(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var k, ca = this;
function l(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function ga(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function ha(a, b) {
  null != a && this.append.apply(this, arguments)
}
ha.prototype.ua = "";
ha.prototype.append = function(a, b, c) {
  this.ua += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.ua += arguments[d]
    }
  }
  return this
};
ha.prototype.toString = e("ua");
var ia = {}, ja;
function p(a) {
  return null != a && !1 !== a
}
function ka(a) {
  return p(a) ? !1 : !0
}
function s(a, b) {
  return a[l(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null
}
function la(a) {
  return null == a ? null : a.constructor
}
function u(a, b) {
  var c = la(b), c = p(p(c) ? c.mb : c) ? c.lb : l(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function ma(a) {
  var b = a.lb;
  return p(b) ? b : "" + w(a)
}
var na = {}, oa = {};
function qa(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  b = qa[l(null == a ? null : a)];
  if(!b && (b = qa._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a)
}
var ra = {};
function sa(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  c = sa[l(null == a ? null : a)];
  if(!c && (c = sa._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var ta = {}, x = function() {
  function a(a, b, c) {
    if(a ? a.O : a) {
      return a.O(a, b, c)
    }
    var g;
    g = x[l(null == a ? null : a)];
    if(!g && (g = x._, !g)) {
      throw u("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.r : a) {
      return a.r(a, b)
    }
    var c;
    c = x[l(null == a ? null : a)];
    if(!c && (c = x._, !c)) {
      throw u("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(d, c, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}(), ua = {};
function y(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  b = y[l(null == a ? null : a)];
  if(!b && (b = y._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a)
}
function va(a) {
  if(a ? a.M : a) {
    return a.M(a)
  }
  var b;
  b = va[l(null == a ? null : a)];
  if(!b && (b = va._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var wa = {}, xa = {}, ya = function() {
  function a(a, b, c) {
    if(a ? a.P : a) {
      return a.P(a, b, c)
    }
    var g;
    g = ya[l(null == a ? null : a)];
    if(!g && (g = ya._, !g)) {
      throw u("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.U : a) {
      return a.U(a, b)
    }
    var c;
    c = ya[l(null == a ? null : a)];
    if(!c && (c = ya._, !c)) {
      throw u("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}(), Aa = {};
function Ba(a, b, c) {
  if(a ? a.ea : a) {
    return a.ea(a, b, c)
  }
  var d;
  d = Ba[l(null == a ? null : a)];
  if(!d && (d = Ba._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var Ca = {}, Da = {};
function Ea(a) {
  if(a ? a.Va : a) {
    return a.Va(a)
  }
  var b;
  b = Ea[l(null == a ? null : a)];
  if(!b && (b = Ea._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function Fa(a) {
  if(a ? a.Wa : a) {
    return a.Wa(a)
  }
  var b;
  b = Fa[l(null == a ? null : a)];
  if(!b && (b = Fa._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
function Ga(a) {
  if(a ? a.wa : a) {
    return a.wa(a)
  }
  var b;
  b = Ga[l(null == a ? null : a)];
  if(!b && (b = Ga._, !b)) {
    throw u("IStack.-peek", a);
  }
  return b.call(null, a)
}
function Ha(a) {
  if(a ? a.xa : a) {
    return a.xa(a)
  }
  var b;
  b = Ha[l(null == a ? null : a)];
  if(!b && (b = Ha._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a)
}
var Ia = {};
function Ja(a, b, c) {
  if(a ? a.Ya : a) {
    return a.Ya(a, b, c)
  }
  var d;
  d = Ja[l(null == a ? null : a)];
  if(!d && (d = Ja._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function Ka(a) {
  if(a ? a.pb : a) {
    return a.state
  }
  var b;
  b = Ka[l(null == a ? null : a)];
  if(!b && (b = Ka._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var Ma = {};
function Na(a) {
  if(a ? a.D : a) {
    return a.D(a)
  }
  var b;
  b = Na[l(null == a ? null : a)];
  if(!b && (b = Na._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var Oa = {};
function Pa(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  c = Pa[l(null == a ? null : a)];
  if(!c && (c = Pa._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var Qa = {}, Ra = function() {
  function a(a, b, c) {
    if(a ? a.L : a) {
      return a.L(a, b, c)
    }
    var g;
    g = Ra[l(null == a ? null : a)];
    if(!g && (g = Ra._, !g)) {
      throw u("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.K : a) {
      return a.K(a, b)
    }
    var c;
    c = Ra[l(null == a ? null : a)];
    if(!c && (c = Ra._, !c)) {
      throw u("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}();
function Sa(a, b) {
  if(a ? a.t : a) {
    return a.t(a, b)
  }
  var c;
  c = Sa[l(null == a ? null : a)];
  if(!c && (c = Sa._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function Ta(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  b = Ta[l(null == a ? null : a)];
  if(!b && (b = Ta._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a)
}
var Ua = {};
function Va(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var b;
  b = Va[l(null == a ? null : a)];
  if(!b && (b = Va._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var Wa = {}, Xa = {}, Ya = {};
function Za(a) {
  if(a ? a.Xa : a) {
    return a.Xa(a)
  }
  var b;
  b = Za[l(null == a ? null : a)];
  if(!b && (b = Za._, !b)) {
    throw u("IReversible.-rseq", a);
  }
  return b.call(null, a)
}
function z(a, b) {
  if(a ? a.kb : a) {
    return a.kb(0, b)
  }
  var c;
  c = z[l(null == a ? null : a)];
  if(!c && (c = z._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function $a(a) {
  if(a ? a.tb : a) {
    return null
  }
  var b;
  b = $a[l(null == a ? null : a)];
  if(!b && (b = $a._, !b)) {
    throw u("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var ab = {};
function bb(a, b, c) {
  if(a ? a.u : a) {
    return a.u(a, b, c)
  }
  var d;
  d = bb[l(null == a ? null : a)];
  if(!d && (d = bb._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function cb(a, b, c) {
  if(a ? a.jb : a) {
    return a.jb(a, b, c)
  }
  var d;
  d = cb[l(null == a ? null : a)];
  if(!d && (d = cb._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function eb(a, b, c) {
  if(a ? a.ib : a) {
    return a.ib(a, b, c)
  }
  var d;
  d = eb[l(null == a ? null : a)];
  if(!d && (d = eb._, !d)) {
    throw u("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c)
}
function fb(a) {
  if(a ? a.Ba : a) {
    return a.Ba(a)
  }
  var b;
  b = fb[l(null == a ? null : a)];
  if(!b && (b = fb._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function gb(a, b) {
  if(a ? a.ya : a) {
    return a.ya(a, b)
  }
  var c;
  c = gb[l(null == a ? null : a)];
  if(!c && (c = gb._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function hb(a) {
  if(a ? a.Ea : a) {
    return a.Ea(a)
  }
  var b;
  b = hb[l(null == a ? null : a)];
  if(!b && (b = hb._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function ib(a, b, c) {
  if(a ? a.qa : a) {
    return a.qa(a, b, c)
  }
  var d;
  d = ib[l(null == a ? null : a)];
  if(!d && (d = ib._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function jb(a) {
  if(a ? a.cb : a) {
    return a.cb()
  }
  var b;
  b = jb[l(null == a ? null : a)];
  if(!b && (b = jb._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function kb(a) {
  if(a ? a.Ha : a) {
    return a.Ha(a)
  }
  var b;
  b = kb[l(null == a ? null : a)];
  if(!b && (b = kb._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function lb(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  b = lb[l(null == a ? null : a)];
  if(!b && (b = lb._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function mb(a) {
  this.xb = a;
  this.q = 0;
  this.f = 1073741824
}
mb.prototype.kb = function(a, b) {
  return this.xb.append(b)
};
mb.prototype.tb = ba(null);
function nb(a) {
  var b = new ha, c = new mb(b);
  a.u(a, c, A([ob, !0, pb, !0, qb, !1, rb, !1]));
  $a(c);
  return"" + w(b)
}
function B(a, b, c, d, f) {
  this.na = a;
  this.name = b;
  this.oa = c;
  this.ja = d;
  this.R = f;
  this.f = 2154168321;
  this.q = 4096
}
k = B.prototype;
k.u = function(a, b) {
  return z(b, this.oa)
};
k.w = function(a) {
  var b = this.ja;
  return null != b ? b : this.ja = a = sb.a ? sb.a(C.c ? C.c(a.na) : C.call(null, a.na), C.c ? C.c(a.name) : C.call(null, a.name)) : sb.call(null, C.c ? C.c(a.na) : C.call(null, a.na), C.c ? C.c(a.name) : C.call(null, a.name))
};
k.G = function(a, b) {
  return new B(this.na, this.name, this.oa, this.ja, b)
};
k.D = e("R");
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return ya.b(c, this, null);
      case 3:
        return ya.b(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
k.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
k.t = function(a, b) {
  return b instanceof B ? this.oa === b.oa : !1
};
k.toString = e("oa");
var tb = function() {
  function a(a, b) {
    var c = null != a ? [w(a), w("/"), w(b)].join("") : b;
    return new B(a, b, c, null, null)
  }
  function b(a) {
    return a instanceof B ? a : c.a(null, a)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function E(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.f & 8388608) ? b : a.Ib) ? !0 : !1 : !1;
  if(b) {
    return a.F(a)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new ub(a, 0)
  }
  if(s(Ua, a)) {
    return Va(a)
  }
  if(t) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null
}
function F(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.f & 64) ? b : a.va) ? !0 : !1 : !1;
  if(b) {
    return a.I(a)
  }
  a = E(a);
  return null == a ? null : y(a)
}
function G(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.f & 64) ? b : a.va) ? !0 : !1 : !1;
    if(b) {
      return a.M(a)
    }
    a = E(a);
    return null != a ? va(a) : vb
  }
  return vb
}
function H(a) {
  if(null == a) {
    a = null
  }else {
    var b;
    b = a ? ((b = a.f & 128) ? b : a.Da) ? !0 : !1 : !1;
    a = b ? a.Q(a) : E(G(a))
  }
  return a
}
var wb = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : Sa(a, b)
  }
  var b = null, c = function() {
    function a(b, d, m) {
      var n = null;
      2 < arguments.length && (n = I(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, n)
    }
    function c(a, d, f) {
      for(;;) {
        if(p(b.a(a, d))) {
          if(H(f)) {
            a = d, d = F(f), f = H(f)
          }else {
            return b.a(d, F(f))
          }
        }else {
          return!1
        }
      }
    }
    a.i = 2;
    a.g = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.g = c.g;
  b.c = ba(!0);
  b.a = a;
  b.e = c.e;
  return b
}();
Ta["null"] = ba(0);
wa["null"] = !0;
oa["null"] = !0;
qa["null"] = ba(0);
Ga["null"] = ba(null);
Ha["null"] = ba(null);
Sa["null"] = function(a, b) {
  return null == b
};
Oa["null"] = !0;
Pa["null"] = ba(null);
Ma["null"] = !0;
Na["null"] = ba(null);
Ca["null"] = !0;
Date.prototype.t = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
Ta.number = function(a) {
  return Math.floor(a) % 2147483647
};
Sa.number = function(a, b) {
  return a === b
};
Ta["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
Ma["function"] = !0;
Na["function"] = ba(null);
na["function"] = !0;
Ta._ = function(a) {
  return a[da] || (a[da] = ++ea)
};
function xb(a) {
  return a + 1
}
var yb = function() {
  function a(a, b, c, d) {
    for(var n = qa(a);;) {
      if(d < n) {
        c = b.a ? b.a(c, x.a(a, d)) : b.call(null, c, x.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = qa(a), n = 0;;) {
      if(n < d) {
        c = b.a ? b.a(c, x.a(a, n)) : b.call(null, c, x.a(a, n)), n += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = qa(a);
    if(0 === c) {
      return b.o ? b.o() : b.call(null)
    }
    for(var d = x.a(a, 0), n = 1;;) {
      if(n < c) {
        d = b.a ? b.a(d, x.a(a, n)) : b.call(null, d, x.a(a, n)), n += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, h, g, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, g);
      case 4:
        return a.call(this, d, h, g, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.j = a;
  return d
}(), zb = function() {
  function a(a, b, c, d) {
    for(var n = a.length;;) {
      if(d < n) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, n = 0;;) {
      if(n < d) {
        c = b.a ? b.a(c, a[n]) : b.call(null, c, a[n]), n += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.o ? b.o() : b.call(null)
    }
    for(var d = a[0], n = 1;;) {
      if(n < c) {
        d = b.a ? b.a(d, a[n]) : b.call(null, d, a[n]), n += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, h, g, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, g);
      case 4:
        return a.call(this, d, h, g, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.j = a;
  return d
}();
function Ab(a) {
  if(a) {
    var b = a.f & 2;
    a = (b ? b : a.ob) ? !0 : a.f ? !1 : s(oa, a)
  }else {
    a = s(oa, a)
  }
  return a
}
function Bb(a) {
  if(a) {
    var b = a.f & 16;
    a = (b ? b : a.hb) ? !0 : a.f ? !1 : s(ta, a)
  }else {
    a = s(ta, a)
  }
  return a
}
function ub(a, b) {
  this.d = a;
  this.k = b;
  this.q = 0;
  this.f = 166199550
}
k = ub.prototype;
k.w = function(a) {
  return Cb.c ? Cb.c(a) : Cb.call(null, a)
};
k.Q = function() {
  return this.k + 1 < this.d.length ? new ub(this.d, this.k + 1) : null
};
k.B = function(a, b) {
  return J.a ? J.a(b, a) : J.call(null, b, a)
};
k.Xa = function(a) {
  var b = a.J(a);
  return 0 < b ? new Db(a, b - 1, null) : vb
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return zb.j(this.d, b, this.d[this.k], this.k + 1)
};
k.L = function(a, b, c) {
  return zb.j(this.d, b, c, this.k)
};
k.F = aa();
k.J = function() {
  return this.d.length - this.k
};
k.I = function() {
  return this.d[this.k]
};
k.M = function() {
  return this.k + 1 < this.d.length ? new ub(this.d, this.k + 1) : K.o ? K.o() : K.call(null)
};
k.t = function(a, b) {
  return Eb.a ? Eb.a(a, b) : Eb.call(null, a, b)
};
k.r = function(a, b) {
  var c = b + this.k;
  return c < this.d.length ? this.d[c] : null
};
k.O = function(a, b, c) {
  a = b + this.k;
  return a < this.d.length ? this.d[a] : c
};
var Fb = function() {
  function a(a, b) {
    return b < a.length ? new ub(a, b) : null
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}(), I = function() {
  function a(a, b) {
    return Fb.a(a, b)
  }
  function b(a) {
    return Fb.a(a, 0)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function Db(a, b, c) {
  this.Ga = a;
  this.k = b;
  this.l = c;
  this.q = 0;
  this.f = 32374862
}
k = Db.prototype;
k.w = function(a) {
  return Cb.c ? Cb.c(a) : Cb.call(null, a)
};
k.B = function(a, b) {
  return J.a ? J.a(b, a) : J.call(null, b, a)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a ? L.a(b, a) : L.call(null, b, a)
};
k.L = function(a, b, c) {
  return L.b ? L.b(b, c, a) : L.call(null, b, c, a)
};
k.F = aa();
k.J = function() {
  return this.k + 1
};
k.I = function() {
  return x.a(this.Ga, this.k)
};
k.M = function() {
  return 0 < this.k ? new Db(this.Ga, this.k - 1, null) : vb
};
k.t = function(a, b) {
  return Eb.a ? Eb.a(a, b) : Eb.call(null, a, b)
};
k.G = function(a, b) {
  return new Db(this.Ga, this.k, b)
};
k.D = e("l");
function Gb(a) {
  for(;;) {
    var b = H(a);
    if(null != b) {
      a = b
    }else {
      return F(a)
    }
  }
}
Sa._ = function(a, b) {
  return a === b
};
var Hb = function() {
  function a(a, b) {
    return null != a ? sa(a, b) : K.c ? K.c(b) : K.call(null, b)
  }
  var b = null, c = function() {
    function a(b, d, m) {
      var n = null;
      2 < arguments.length && (n = I(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, n)
    }
    function c(a, d, f) {
      for(;;) {
        if(p(f)) {
          a = b.a(a, d), d = F(f), f = H(f)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.i = 2;
    a.g = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}();
function N(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.f & 2) ? b : a.ob) ? !0 : !1 : !1;
    if(b) {
      a = a.J(a)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(s(oa, a)) {
            a = qa(a)
          }else {
            if(t) {
              a: {
                a = E(a);
                for(b = 0;;) {
                  if(Ab(a)) {
                    a = b + qa(a);
                    break a
                  }
                  a = H(a);
                  b += 1
                }
                a = void 0
              }
            }else {
              a = null
            }
          }
        }
      }
    }
  }else {
    a = 0
  }
  return a
}
var Ib = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return E(a) ? F(a) : c
      }
      if(Bb(a)) {
        return x.b(a, b, c)
      }
      if(E(a)) {
        a = H(a), b -= 1
      }else {
        return t ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(E(a)) {
          return F(a)
        }
        throw Error("Index out of bounds");
      }
      if(Bb(a)) {
        return x.a(a, b)
      }
      if(E(a)) {
        var c = H(a), g = b - 1;
        a = c;
        b = g
      }else {
        if(t) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}(), O = function() {
  function a(a, b, c) {
    if(null != a) {
      if(function() {
        var b;
        b = a ? ((b = a.f & 16) ? b : a.hb) ? !0 : !1 : !1;
        return b
      }()) {
        return a.O(a, Math.floor(b), c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(s(ta, a)) {
        return x.a(a, b)
      }
      if(t) {
        if(function() {
          var b;
          b = a ? ((b = a.f & 64) ? b : a.va) ? !0 : a.f ? !1 : s(ua, a) : s(ua, a);
          return b
        }()) {
          return Ib.b(a, Math.floor(b), c)
        }
        throw Error([w("nth not supported on this type "), w(ma(la(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(function() {
      var b;
      b = a ? ((b = a.f & 16) ? b : a.hb) ? !0 : !1 : !1;
      return b
    }()) {
      return a.r(a, Math.floor(b))
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(s(ta, a)) {
      return x.a(a, b)
    }
    if(t) {
      if(function() {
        var b;
        b = a ? ((b = a.f & 64) ? b : a.va) ? !0 : a.f ? !1 : s(ua, a) : s(ua, a);
        return b
      }()) {
        return Ib.a(a, Math.floor(b))
      }
      throw Error([w("nth not supported on this type "), w(ma(la(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}(), Q = function() {
  function a(a, b, c) {
    if(null != a) {
      var g;
      g = a ? ((g = a.f & 256) ? g : a.Ca) ? !0 : !1 : !1;
      a = g ? a.P(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(xa, a) ? ya.b(a, b, c) : t ? c : null
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    null == a ? c = null : (c = a ? ((c = a.f & 256) ? c : a.Ca) ? !0 : !1 : !1, c = c ? a.U(a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(xa, a) ? ya.a(a, b) : null);
    return c
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}(), R = function() {
  function a(a, b, c) {
    return null != a ? Ba(a, b, c) : Jb.a ? Jb.a(b, c) : Jb.call(null, b, c)
  }
  var b = null, c = function() {
    function a(b, d, m, n) {
      var q = null;
      3 < arguments.length && (q = I(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, m, q)
    }
    function c(a, d, f, n) {
      for(;;) {
        if(a = b.b(a, d, f), p(n)) {
          d = F(n), f = F(H(n)), n = H(H(n))
        }else {
          return a
        }
      }
    }
    a.i = 3;
    a.g = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var n = F(a);
      a = G(a);
      return c(b, d, n, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, f, h);
      default:
        return c.e(b, f, h, I(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 3;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b
}();
function Kb(a) {
  var b = "function" == l(a);
  return b ? b : a ? p(p(null) ? null : a.nb) ? !0 : a.Za ? !1 : s(na, a) : s(na, a)
}
var Mb = function Lb(b, c) {
  return function() {
    var c = Kb(b);
    c && (c = b ? ((c = b.f & 262144) ? c : b.Lb) ? !0 : b.f ? !1 : s(Oa, b) : s(Oa, b), c = !c);
    return c
  }() ? Lb(function() {
    "undefined" === typeof ja && (ja = {}, ja = function(b, c, h, g) {
      this.l = b;
      this.$a = c;
      this.zb = h;
      this.wb = g;
      this.q = 0;
      this.f = 393217
    }, ja.mb = !0, ja.lb = "cljs.core/t4564", ja.ub = function(b) {
      return z(b, "cljs.core/t4564")
    }, ja.prototype.call = function() {
      function b(d, g) {
        d = this;
        var m = null;
        1 < arguments.length && (m = I(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, m)
      }
      function c(b, d) {
        return S.a ? S.a(b.$a, d) : S.call(null, b.$a, d)
      }
      b.i = 1;
      b.g = function(b) {
        var d = F(b);
        b = G(b);
        return c(d, b)
      };
      b.e = c;
      return b
    }(), ja.prototype.apply = function(b, c) {
      b = this;
      return b.call.apply(b, [b].concat(c.slice()))
    }, ja.prototype.nb = !0, ja.prototype.D = e("wb"), ja.prototype.G = function(b, c) {
      return new ja(this.l, this.$a, this.zb, c)
    });
    return new ja(c, b, Lb, null)
  }(), c) : Pa(b, c)
};
function T(a) {
  var b;
  b = a ? ((b = a.f & 131072) ? b : a.rb) ? !0 : a.f ? !1 : s(Ma, a) : s(Ma, a);
  return b ? Na(a) : null
}
var Nb = {}, Ob = 0, C = function() {
  function a(a, b) {
    var c = "string" == typeof a;
    (c ? b : c) ? (255 < Ob && (Nb = {}, Ob = 0), c = Nb[a], "number" !== typeof c && (c = ga(a), Nb[a] = c, Ob += 1)) : c = Ta(a);
    return c
  }
  function b(a) {
    return c.a(a, !0)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function Pb(a) {
  if(a) {
    var b = a.f & 16777216;
    a = (b ? b : a.Jb) ? !0 : a.f ? !1 : s(Wa, a)
  }else {
    a = s(Wa, a)
  }
  return a
}
function Qb(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.f & 1024;
      a = (b ? b : a.Fb) ? !0 : a.f ? !1 : s(Ca, a)
    }else {
      a = s(Ca, a)
    }
  }
  return a
}
function Rb(a) {
  if(a) {
    var b = a.f & 16384;
    a = (b ? b : a.Kb) ? !0 : a.f ? !1 : s(Ia, a)
  }else {
    a = s(Ia, a)
  }
  return a
}
function Sb(a) {
  if(a) {
    var b = a.q & 512;
    a = (b ? b : a.Bb) ? !0 : !1
  }else {
    a = !1
  }
  return a
}
function Tb(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Ub = {};
function Vb(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.f & 64;
      a = (b ? b : a.va) ? !0 : a.f ? !1 : s(ua, a)
    }else {
      a = s(ua, a)
    }
  }
  return a
}
function Wb(a) {
  return p(a) ? !0 : !1
}
function Xb(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(la(a) === la(b)) {
    var c;
    c = a ? ((c = a.q & 2048) ? c : a.fb) ? !0 : !1 : !1;
    return c ? a.gb(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Yb = function() {
  function a(a, b, c, g) {
    for(;;) {
      var m = Xb(O.a(a, g), O.a(b, g)), n = 0 === m;
      if(n ? g + 1 < c : n) {
        g += 1
      }else {
        return m
      }
    }
  }
  function b(a, b) {
    var h = N(a), g = N(b);
    return h < g ? -1 : h > g ? 1 : t ? c.j(a, b, h, 0) : null
  }
  var c = null, c = function(c, f, h, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 4:
        return a.call(this, c, f, h, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.j = a;
  return c
}(), L = function() {
  function a(a, b, c) {
    for(c = E(c);;) {
      if(c) {
        b = a.a ? a.a(b, F(c)) : a.call(null, b, F(c)), c = H(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = E(b);
    return c ? Zb.b ? Zb.b(a, F(c), H(c)) : Zb.call(null, a, F(c), H(c)) : a.o ? a.o() : a.call(null)
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}(), Zb = function() {
  function a(a, b, c) {
    var g;
    g = c ? ((g = c.f & 524288) ? g : c.sb) ? !0 : !1 : !1;
    return g ? c.L(c, a, b) : c instanceof Array ? zb.b(c, a, b) : "string" === typeof c ? zb.b(c, a, b) : s(Qa, c) ? Ra.b(c, a, b) : t ? L.b(a, b, c) : null
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.f & 524288) ? c : b.sb) ? !0 : !1 : !1;
    return c ? b.K(b, a) : b instanceof Array ? zb.a(b, a) : "string" === typeof b ? zb.a(b, a) : s(Qa, b) ? Ra.a(b, a) : t ? L.a(a, b) : null
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}();
function $b(a) {
  return a - 1
}
function ac(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.c ? Math.floor.c((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.c ? Math.ceil.c((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2)
}
function bc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function cc(a, b) {
  for(var c = b, d = E(a);;) {
    var f = d;
    if(p(f ? 0 < c : f)) {
      c -= 1, d = H(d)
    }else {
      return d
    }
  }
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var m = null;
      1 < arguments.length && (m = I(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, m)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(p(c)) {
            var d = a.append(b.c(F(c))), f = H(c);
            a = d;
            c = f
          }else {
            return a.toString()
          }
        }
      }.call(null, new ha(b.c(a)), d)
    }
    a.i = 1;
    a.g = function(a) {
      var b = F(a);
      a = G(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, I(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 1;
  b.g = c.g;
  b.o = ba("");
  b.c = a;
  b.e = c.e;
  return b
}();
function Eb(a, b) {
  return Wb(Pb(b) ? function() {
    for(var c = E(a), d = E(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(wb.a(F(c), F(d))) {
        c = H(c), d = H(d)
      }else {
        return t ? !1 : null
      }
    }
  }() : null)
}
function sb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Cb(a) {
  return Zb.b(function(a, c) {
    return sb(a, C.a(c, !1))
  }, C.a(F(a), !1), H(a))
}
function dc(a) {
  var b = 0;
  for(a = E(a);;) {
    if(a) {
      var c = F(a), b = (b + (C.c(ec.c ? ec.c(c) : ec.call(null, c)) ^ C.c(fc.c ? fc.c(c) : fc.call(null, c)))) % 4503599627370496;
      a = H(a)
    }else {
      return b
    }
  }
}
function gc(a, b, c, d, f) {
  this.l = a;
  this.ta = b;
  this.fa = c;
  this.count = d;
  this.m = f;
  this.q = 0;
  this.f = 65937646
}
k = gc.prototype;
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Cb(a)
};
k.Q = function() {
  return 1 === this.count ? null : this.fa
};
k.B = function(a, b) {
  return new gc(this.l, b, a, this.count + 1, null)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a(b, a)
};
k.L = function(a, b, c) {
  return L.b(b, c, a)
};
k.F = aa();
k.J = e("count");
k.wa = e("ta");
k.xa = function(a) {
  return a.M(a)
};
k.I = e("ta");
k.M = function() {
  return 1 === this.count ? vb : this.fa
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new gc(b, this.ta, this.fa, this.count, this.m)
};
k.D = e("l");
function hc(a) {
  this.l = a;
  this.q = 0;
  this.f = 65937614
}
k = hc.prototype;
k.w = ba(0);
k.Q = ba(null);
k.B = function(a, b) {
  return new gc(this.l, b, null, 1, null)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a(b, a)
};
k.L = function(a, b, c) {
  return L.b(b, c, a)
};
k.F = ba(null);
k.J = ba(0);
k.wa = ba(null);
k.xa = function() {
  throw Error("Can't pop empty list");
};
k.I = ba(null);
k.M = function() {
  return vb
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new hc(b)
};
k.D = e("l");
var vb = new hc(null);
function ic(a) {
  var b;
  b = a ? ((b = a.f & 134217728) ? b : a.Hb) ? !0 : a.f ? !1 : s(Ya, a) : s(Ya, a);
  return b ? Za(a) : Zb.b(Hb, vb, a)
}
var K = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof ub) {
      b = a.d
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.I(a)), a = a.Q(a)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var f = vb;;) {
      if(0 < a) {
        var h = a - 1, f = f.B(f, b[a - 1]);
        a = h
      }else {
        return f
      }
    }
  }
  a.i = 0;
  a.g = function(a) {
    a = E(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function jc(a, b, c, d) {
  this.l = a;
  this.ta = b;
  this.fa = c;
  this.m = d;
  this.q = 0;
  this.f = 65929452
}
k = jc.prototype;
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Cb(a)
};
k.Q = function() {
  return null == this.fa ? null : Va(this.fa)
};
k.B = function(a, b) {
  return new jc(null, b, a, this.m)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a(b, a)
};
k.L = function(a, b, c) {
  return L.b(b, c, a)
};
k.F = aa();
k.I = e("ta");
k.M = function() {
  return null == this.fa ? vb : this.fa
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new jc(b, this.ta, this.fa, this.m)
};
k.D = e("l");
function J(a, b) {
  var c = null == b;
  c || (c = b ? ((c = b.f & 64) ? c : b.va) ? !0 : !1 : !1);
  return c ? new jc(null, a, b, null) : new jc(null, a, E(b), null)
}
Ta.string = function(a) {
  return ga(a)
};
function V(a, b, c, d) {
  this.na = a;
  this.name = b;
  this.ia = c;
  this.ja = d;
  this.f = 2153775105;
  this.q = 4096
}
k = V.prototype;
k.u = function(a, b) {
  return z(b, [w(":"), w(this.ia)].join(""))
};
k.w = function() {
  null == this.ja && (this.ja = sb(C.c(this.na), C.c(this.name)) + 2654435769);
  return this.ja
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var f;
        null == c ? f = null : (f = c ? ((f = c.f & 256) ? f : c.Ca) ? !0 : c.f ? !1 : s(xa, c) : s(xa, c), f = f ? ya.b(c, this, null) : null);
        return f;
      case 3:
        return null == c ? f = d : (f = c ? ((f = c.f & 256) ? f : c.Ca) ? !0 : c.f ? !1 : s(xa, c) : s(xa, c), f = f ? ya.b(c, this, d) : null), f
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
k.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
k.t = function(a, b) {
  return b instanceof V ? this.ia === b.ia : !1
};
k.toString = function() {
  return[w(":"), w(this.ia)].join("")
};
var lc = function() {
  function a(a, b) {
    return new V(a, b, [w(p(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null)
  }
  function b(a) {
    return a instanceof V ? new V(null, a, a, null) : a instanceof B ? new V(null, kc.c ? kc.c(a) : kc.call(null, a), kc.c ? kc.c(a) : kc.call(null, a), null) : t ? new V(null, a, a, null) : null
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function mc(a) {
  var b = a.x;
  if(a.ab) {
    return b
  }
  a.x = b.o ? b.o() : b.call(null);
  a.ab = !0;
  return a.x
}
function nc(a, b, c, d) {
  this.l = a;
  this.ab = b;
  this.x = c;
  this.m = d;
  this.q = 0;
  this.f = 32374988
}
k = nc.prototype;
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Cb(a)
};
k.Q = function(a) {
  return Va(a.M(a))
};
k.B = function(a, b) {
  return J(b, a)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a(b, a)
};
k.L = function(a, b, c) {
  return L.b(b, c, a)
};
k.F = function(a) {
  return E(mc(a))
};
k.I = function(a) {
  return F(mc(a))
};
k.M = function(a) {
  return G(mc(a))
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new nc(b, this.ab, this.x, this.m)
};
k.D = e("l");
function oc(a, b) {
  this.Fa = a;
  this.end = b;
  this.q = 0;
  this.f = 2
}
oc.prototype.J = e("end");
oc.prototype.add = function(a) {
  this.Fa[this.end] = a;
  return this.end += 1
};
oc.prototype.ba = function() {
  var a = new pc(this.Fa, 0, this.end);
  this.Fa = null;
  return a
};
function pc(a, b, c) {
  this.d = a;
  this.s = b;
  this.end = c;
  this.q = 0;
  this.f = 524306
}
k = pc.prototype;
k.K = function(a, b) {
  return zb.j(this.d, b, this.d[this.s], this.s + 1)
};
k.L = function(a, b, c) {
  return zb.j(this.d, b, c, this.s)
};
k.cb = function() {
  if(this.s === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new pc(this.d, this.s + 1, this.end)
};
k.r = function(a, b) {
  return this.d[this.s + b]
};
k.O = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.s : a) ? this.d[this.s + b] : c
};
k.J = function() {
  return this.end - this.s
};
var qc = function() {
  function a(a, b, c) {
    return new pc(a, b, c)
  }
  function b(a, b) {
    return new pc(a, b, a.length)
  }
  function c(a) {
    return new pc(a, 0, a.length)
  }
  var d = null, d = function(d, h, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.b = a;
  return d
}();
function rc(a, b, c, d) {
  this.ba = a;
  this.ca = b;
  this.l = c;
  this.m = d;
  this.f = 31850732;
  this.q = 1536
}
k = rc.prototype;
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Cb(a)
};
k.Q = function() {
  if(1 < qa(this.ba)) {
    return new rc(jb(this.ba), this.ca, this.l, null)
  }
  var a = Va(this.ca);
  return null == a ? null : a
};
k.B = function(a, b) {
  return J(b, a)
};
k.toString = function() {
  return nb(this)
};
k.F = aa();
k.I = function() {
  return x.a(this.ba, 0)
};
k.M = function() {
  return 1 < qa(this.ba) ? new rc(jb(this.ba), this.ca, this.l, null) : null == this.ca ? vb : this.ca
};
k.eb = function() {
  return null == this.ca ? null : this.ca
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new rc(this.ba, this.ca, b, this.m)
};
k.D = e("l");
k.Ha = e("ba");
k.Aa = function() {
  return null == this.ca ? vb : this.ca
};
function sc(a, b) {
  return 0 === qa(a) ? b : new rc(a, b, null, null)
}
function tc(a) {
  for(var b = [];;) {
    if(E(a)) {
      b.push(F(a)), a = H(a)
    }else {
      return b
    }
  }
}
function uc(a, b) {
  if(Ab(a)) {
    return N(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? E(c) : h;
    if(p(h)) {
      c = H(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var wc = function vc(b) {
  return null == b ? null : null == H(b) ? E(F(b)) : t ? J(F(b), vc(H(b))) : null
}, xc = function() {
  function a(a, b) {
    return new nc(null, !1, function() {
      var c = E(a);
      return c ? Sb(c) ? sc(kb(c), d.a(lb(c), b)) : J(F(c), d.a(G(c), b)) : b
    }, null)
  }
  function b(a) {
    return new nc(null, !1, function() {
      return a
    }, null)
  }
  function c() {
    return new nc(null, !1, ba(null), null)
  }
  var d = null, f = function() {
    function a(c, d, f) {
      var h = null;
      2 < arguments.length && (h = I(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, h)
    }
    function b(a, c, f) {
      return function v(a, b) {
        return new nc(null, !1, function() {
          var c = E(a);
          return c ? Sb(c) ? sc(kb(c), v(lb(c), b)) : J(F(c), v(G(c), b)) : p(b) ? v(F(b), H(b)) : null
        }, null)
      }(d.a(a, c), f)
    }
    a.i = 2;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = G(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), d = function(d, g, m) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return f.e(d, g, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = 2;
  d.g = f.g;
  d.o = c;
  d.c = b;
  d.a = a;
  d.e = f.e;
  return d
}(), yc = function() {
  function a(a, b, c, d) {
    return J(a, J(b, J(c, d)))
  }
  function b(a, b, c) {
    return J(a, J(b, c))
  }
  var c = null, d = function() {
    function a(c, d, f, q, r) {
      var v = null;
      4 < arguments.length && (v = I(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, q, v)
    }
    function b(a, c, d, f, h) {
      return J(a, J(c, J(d, J(f, wc(h)))))
    }
    a.i = 4;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var f = F(a);
      a = H(a);
      var r = F(a);
      a = G(a);
      return b(c, d, f, r, a)
    };
    a.e = b;
    return a
  }(), c = function(c, h, g, m, n) {
    switch(arguments.length) {
      case 1:
        return E(c);
      case 2:
        return J(c, h);
      case 3:
        return b.call(this, c, h, g);
      case 4:
        return a.call(this, c, h, g, m);
      default:
        return d.e(c, h, g, m, I(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = 4;
  c.g = d.g;
  c.c = function(a) {
    return E(a)
  };
  c.a = function(a, b) {
    return J(a, b)
  };
  c.b = b;
  c.j = a;
  c.e = d.e;
  return c
}();
function zc(a, b, c) {
  var d = E(c);
  if(0 === b) {
    return a.o ? a.o() : a.call(null)
  }
  c = y(d);
  var f = va(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c)
  }
  var d = y(f), h = va(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var f = y(h), g = va(h);
  if(3 === b) {
    return a.b ? a.b(c, d, f) : a.b ? a.b(c, d, f) : a.call(null, c, d, f)
  }
  var h = y(g), m = va(g);
  if(4 === b) {
    return a.j ? a.j(c, d, f, h) : a.j ? a.j(c, d, f, h) : a.call(null, c, d, f, h)
  }
  g = y(m);
  m = va(m);
  if(5 === b) {
    return a.p ? a.p(c, d, f, h, g) : a.p ? a.p(c, d, f, h, g) : a.call(null, c, d, f, h, g)
  }
  a = y(m);
  var n = va(m);
  if(6 === b) {
    return a.X ? a.X(c, d, f, h, g, a) : a.X ? a.X(c, d, f, h, g, a) : a.call(null, c, d, f, h, g, a)
  }
  var m = y(n), q = va(n);
  if(7 === b) {
    return a.pa ? a.pa(c, d, f, h, g, a, m) : a.pa ? a.pa(c, d, f, h, g, a, m) : a.call(null, c, d, f, h, g, a, m)
  }
  var n = y(q), r = va(q);
  if(8 === b) {
    return a.Ta ? a.Ta(c, d, f, h, g, a, m, n) : a.Ta ? a.Ta(c, d, f, h, g, a, m, n) : a.call(null, c, d, f, h, g, a, m, n)
  }
  var q = y(r), v = va(r);
  if(9 === b) {
    return a.Ua ? a.Ua(c, d, f, h, g, a, m, n, q) : a.Ua ? a.Ua(c, d, f, h, g, a, m, n, q) : a.call(null, c, d, f, h, g, a, m, n, q)
  }
  var r = y(v), D = va(v);
  if(10 === b) {
    return a.Ia ? a.Ia(c, d, f, h, g, a, m, n, q, r) : a.Ia ? a.Ia(c, d, f, h, g, a, m, n, q, r) : a.call(null, c, d, f, h, g, a, m, n, q, r)
  }
  var v = y(D), P = va(D);
  if(11 === b) {
    return a.Ja ? a.Ja(c, d, f, h, g, a, m, n, q, r, v) : a.Ja ? a.Ja(c, d, f, h, g, a, m, n, q, r, v) : a.call(null, c, d, f, h, g, a, m, n, q, r, v)
  }
  var D = y(P), M = va(P);
  if(12 === b) {
    return a.Ka ? a.Ka(c, d, f, h, g, a, m, n, q, r, v, D) : a.Ka ? a.Ka(c, d, f, h, g, a, m, n, q, r, v, D) : a.call(null, c, d, f, h, g, a, m, n, q, r, v, D)
  }
  var P = y(M), U = va(M);
  if(13 === b) {
    return a.La ? a.La(c, d, f, h, g, a, m, n, q, r, v, D, P) : a.La ? a.La(c, d, f, h, g, a, m, n, q, r, v, D, P) : a.call(null, c, d, f, h, g, a, m, n, q, r, v, D, P)
  }
  var M = y(U), pa = va(U);
  if(14 === b) {
    return a.Ma ? a.Ma(c, d, f, h, g, a, m, n, q, r, v, D, P, M) : a.Ma ? a.Ma(c, d, f, h, g, a, m, n, q, r, v, D, P, M) : a.call(null, c, d, f, h, g, a, m, n, q, r, v, D, P, M)
  }
  var U = y(pa), za = va(pa);
  if(15 === b) {
    return a.Na ? a.Na(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U) : a.Na ? a.Na(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U) : a.call(null, c, d, f, h, g, a, m, n, q, r, v, D, P, M, U)
  }
  var pa = y(za), La = va(za);
  if(16 === b) {
    return a.Oa ? a.Oa(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa) : a.Oa ? a.Oa(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa) : a.call(null, c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa)
  }
  var za = y(La), db = va(La);
  if(17 === b) {
    return a.Pa ? a.Pa(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za) : a.Pa ? a.Pa(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za) : a.call(null, c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za)
  }
  var La = y(db), Hc = va(db);
  if(18 === b) {
    return a.Qa ? a.Qa(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za, La) : a.Qa ? a.Qa(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za, La) : a.call(null, c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za, La)
  }
  db = y(Hc);
  Hc = va(Hc);
  if(19 === b) {
    return a.Ra ? a.Ra(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za, La, db) : a.Ra ? a.Ra(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za, La, db) : a.call(null, c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za, La, db)
  }
  var Wd = y(Hc);
  va(Hc);
  if(20 === b) {
    return a.Sa ? a.Sa(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za, La, db, Wd) : a.Sa ? a.Sa(c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za, La, db, Wd) : a.call(null, c, d, f, h, g, a, m, n, q, r, v, D, P, M, U, pa, za, La, db, Wd)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, f) {
    b = yc.j(b, c, d, f);
    c = a.i;
    return a.g ? (d = uc(b, c + 1), d <= c ? zc(a, d, b) : a.g(b)) : a.apply(a, tc(b))
  }
  function b(a, b, c, d) {
    b = yc.b(b, c, d);
    c = a.i;
    return a.g ? (d = uc(b, c + 1), d <= c ? zc(a, d, b) : a.g(b)) : a.apply(a, tc(b))
  }
  function c(a, b, c) {
    b = yc.a(b, c);
    c = a.i;
    if(a.g) {
      var d = uc(b, c + 1);
      return d <= c ? zc(a, d, b) : a.g(b)
    }
    return a.apply(a, tc(b))
  }
  function d(a, b) {
    var c = a.i;
    if(a.g) {
      var d = uc(b, c + 1);
      return d <= c ? zc(a, d, b) : a.g(b)
    }
    return a.apply(a, tc(b))
  }
  var f = null, h = function() {
    function a(c, d, f, h, g, P) {
      var M = null;
      5 < arguments.length && (M = I(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, g, M)
    }
    function b(a, c, d, f, h, g) {
      c = J(c, J(d, J(f, J(h, wc(g)))));
      d = a.i;
      return a.g ? (f = uc(c, d + 1), f <= d ? zc(a, f, c) : a.g(c)) : a.apply(a, tc(c))
    }
    a.i = 5;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var f = F(a);
      a = H(a);
      var h = F(a);
      a = H(a);
      var g = F(a);
      a = G(a);
      return b(c, d, f, h, g, a)
    };
    a.e = b;
    return a
  }(), f = function(f, m, n, q, r, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, m);
      case 3:
        return c.call(this, f, m, n);
      case 4:
        return b.call(this, f, m, n, q);
      case 5:
        return a.call(this, f, m, n, q, r);
      default:
        return h.e(f, m, n, q, r, I(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.i = 5;
  f.g = h.g;
  f.a = d;
  f.b = c;
  f.j = b;
  f.p = a;
  f.e = h.e;
  return f
}(), Ac = function() {
  function a(a, b) {
    return!wb.a(a, b)
  }
  var b = null, c = function() {
    function a(c, d, m) {
      var n = null;
      2 < arguments.length && (n = I(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, n)
    }
    function b(a, c, d) {
      return ka(S.j(wb, a, c, d))
    }
    a.i = 2;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = G(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.g = c.g;
  b.c = ba(!1);
  b.a = a;
  b.e = c.e;
  return b
}();
function Bc(a, b) {
  for(;;) {
    if(null == E(b)) {
      return!0
    }
    if(p(a.c ? a.c(F(b)) : a.call(null, F(b)))) {
      var c = a, d = H(b);
      a = c;
      b = d
    }else {
      return t ? !1 : null
    }
  }
}
function Cc(a) {
  for(var b = Dc;;) {
    if(E(a)) {
      var c = b.c ? b.c(F(a)) : b.call(null, F(a));
      if(p(c)) {
        return c
      }
      a = H(a)
    }else {
      return null
    }
  }
}
function Dc(a) {
  return a
}
function Ec() {
  var a = Fc;
  return function() {
    var b = null, c = function() {
      function b(a, d, m) {
        var n = null;
        2 < arguments.length && (n = I(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, n)
      }
      function c(b, d, f) {
        return ka(S.j(a, b, d, f))
      }
      b.i = 2;
      b.g = function(a) {
        var b = F(a);
        a = H(a);
        var d = F(a);
        a = G(a);
        return c(b, d, a)
      };
      b.e = c;
      return b
    }(), b = function(b, f, h) {
      switch(arguments.length) {
        case 0:
          return ka(a.o ? a.o() : a.call(null));
        case 1:
          return ka(a.c ? a.c(b) : a.call(null, b));
        case 2:
          return ka(a.a ? a.a(b, f) : a.call(null, b, f));
        default:
          return c.e(b, f, I(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.i = 2;
    b.g = c.g;
    return b
  }()
}
var Gc = function() {
  function a(a, b, c) {
    return function() {
      var d = null, n = function() {
        function d(a, b, c, f) {
          var h = null;
          3 < arguments.length && (h = I(Array.prototype.slice.call(arguments, 3), 0));
          return m.call(this, a, b, c, h)
        }
        function m(d, n, q, r) {
          return a.c ? a.c(b.c ? b.c(S.p(c, d, n, q, r)) : b.call(null, S.p(c, d, n, q, r))) : a.call(null, b.c ? b.c(S.p(c, d, n, q, r)) : b.call(null, S.p(c, d, n, q, r)))
        }
        d.i = 3;
        d.g = function(a) {
          var b = F(a);
          a = H(a);
          var c = F(a);
          a = H(a);
          var d = F(a);
          a = G(a);
          return m(b, c, d, a)
        };
        d.e = m;
        return d
      }(), d = function(d, m, v, D) {
        switch(arguments.length) {
          case 0:
            return a.c ? a.c(b.c ? b.c(c.o ? c.o() : c.call(null)) : b.call(null, c.o ? c.o() : c.call(null))) : a.call(null, b.c ? b.c(c.o ? c.o() : c.call(null)) : b.call(null, c.o ? c.o() : c.call(null)));
          case 1:
            return a.c ? a.c(b.c ? b.c(c.c ? c.c(d) : c.call(null, d)) : b.call(null, c.c ? c.c(d) : c.call(null, d))) : a.call(null, b.c ? b.c(c.c ? c.c(d) : c.call(null, d)) : b.call(null, c.c ? c.c(d) : c.call(null, d)));
          case 2:
            return a.c ? a.c(b.c ? b.c(c.a ? c.a(d, m) : c.call(null, d, m)) : b.call(null, c.a ? c.a(d, m) : c.call(null, d, m))) : a.call(null, b.c ? b.c(c.a ? c.a(d, m) : c.call(null, d, m)) : b.call(null, c.a ? c.a(d, m) : c.call(null, d, m)));
          case 3:
            return a.c ? a.c(b.c ? b.c(c.b ? c.b(d, m, v) : c.call(null, d, m, v)) : b.call(null, c.b ? c.b(d, m, v) : c.call(null, d, m, v))) : a.call(null, b.c ? b.c(c.b ? c.b(d, m, v) : c.call(null, d, m, v)) : b.call(null, c.b ? c.b(d, m, v) : c.call(null, d, m, v)));
          default:
            return n.e(d, m, v, I(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.i = 3;
      d.g = n.g;
      return d
    }()
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, f, h) {
          var g = null;
          3 < arguments.length && (g = I(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, f, g)
        }
        function d(c, g, m, n) {
          return a.c ? a.c(S.p(b, c, g, m, n)) : a.call(null, S.p(b, c, g, m, n))
        }
        c.i = 3;
        c.g = function(a) {
          var b = F(a);
          a = H(a);
          var c = F(a);
          a = H(a);
          var f = F(a);
          a = G(a);
          return d(b, c, f, a)
        };
        c.e = d;
        return c
      }(), c = function(c, g, r, v) {
        switch(arguments.length) {
          case 0:
            return a.c ? a.c(b.o ? b.o() : b.call(null)) : a.call(null, b.o ? b.o() : b.call(null));
          case 1:
            return a.c ? a.c(b.c ? b.c(c) : b.call(null, c)) : a.call(null, b.c ? b.c(c) : b.call(null, c));
          case 2:
            return a.c ? a.c(b.a ? b.a(c, g) : b.call(null, c, g)) : a.call(null, b.a ? b.a(c, g) : b.call(null, c, g));
          case 3:
            return a.c ? a.c(b.b ? b.b(c, g, r) : b.call(null, c, g, r)) : a.call(null, b.b ? b.b(c, g, r) : b.call(null, c, g, r));
          default:
            return d.e(c, g, r, I(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.i = 3;
      c.g = d.g;
      return c
    }()
  }
  var c = null, d = function() {
    function a(c, d, f, q) {
      var r = null;
      3 < arguments.length && (r = I(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, f, r)
    }
    function b(a, c, d, f) {
      var h = ic(yc.j(a, c, d, f));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d)
        }
        function b(a) {
          a = S.a(F(h), a);
          for(var c = H(h);;) {
            if(c) {
              a = F(c).call(null, a), c = H(c)
            }else {
              return a
            }
          }
        }
        a.i = 0;
        a.g = function(a) {
          a = E(a);
          return b(a)
        };
        a.e = b;
        return a
      }()
    }
    a.i = 3;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var f = F(a);
      a = G(a);
      return b(c, d, f, a)
    };
    a.e = b;
    return a
  }(), c = function(c, h, g, m) {
    switch(arguments.length) {
      case 0:
        return Dc;
      case 1:
        return c;
      case 2:
        return b.call(this, c, h);
      case 3:
        return a.call(this, c, h, g);
      default:
        return d.e(c, h, g, I(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = 3;
  c.g = d.g;
  c.o = function() {
    return Dc
  };
  c.c = aa();
  c.a = b;
  c.b = a;
  c.e = d.e;
  return c
}(), Ic = function() {
  function a(a, b, c, d) {
    return function() {
      function f(a) {
        var b = null;
        0 < arguments.length && (b = I(Array.prototype.slice.call(arguments, 0), 0));
        return r.call(this, b)
      }
      function r(f) {
        return S.p(a, b, c, d, f)
      }
      f.i = 0;
      f.g = function(a) {
        a = E(a);
        return r(a)
      };
      f.e = r;
      return f
    }()
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = I(Array.prototype.slice.call(arguments, 0), 0));
        return f.call(this, b)
      }
      function f(d) {
        return S.j(a, b, c, d)
      }
      d.i = 0;
      d.g = function(a) {
        a = E(a);
        return f(a)
      };
      d.e = f;
      return d
    }()
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = I(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b)
      }
      function d(c) {
        return S.b(a, b, c)
      }
      c.i = 0;
      c.g = function(a) {
        a = E(a);
        return d(a)
      };
      c.e = d;
      return c
    }()
  }
  var d = null, f = function() {
    function a(c, d, f, h, v) {
      var D = null;
      4 < arguments.length && (D = I(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, h, D)
    }
    function b(a, c, d, f, h) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = I(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c)
        }
        function g(b) {
          return S.p(a, c, d, f, xc.a(h, b))
        }
        b.i = 0;
        b.g = function(a) {
          a = E(a);
          return g(a)
        };
        b.e = g;
        return b
      }()
    }
    a.i = 4;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var f = F(a);
      a = H(a);
      var h = F(a);
      a = G(a);
      return b(c, d, f, h, a)
    };
    a.e = b;
    return a
  }(), d = function(d, g, m, n, q) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, m);
      case 4:
        return a.call(this, d, g, m, n);
      default:
        return f.e(d, g, m, n, I(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = 4;
  d.g = f.g;
  d.a = c;
  d.b = b;
  d.j = a;
  d.e = f.e;
  return d
}(), Jc = function() {
  function a(a, b, c, f) {
    return new nc(null, !1, function() {
      var q = E(b), r = E(c), v = E(f);
      return(q ? r ? v : r : q) ? J(a.b ? a.b(F(q), F(r), F(v)) : a.call(null, F(q), F(r), F(v)), d.j(a, G(q), G(r), G(v))) : null
    }, null)
  }
  function b(a, b, c) {
    return new nc(null, !1, function() {
      var f = E(b), q = E(c);
      return(f ? q : f) ? J(a.a ? a.a(F(f), F(q)) : a.call(null, F(f), F(q)), d.b(a, G(f), G(q))) : null
    }, null)
  }
  function c(a, b) {
    return new nc(null, !1, function() {
      var c = E(b);
      if(c) {
        if(Sb(c)) {
          for(var f = kb(c), q = N(f), r = new oc(Array(q), 0), v = 0;;) {
            if(v < q) {
              var D = a.c ? a.c(x.a(f, v)) : a.call(null, x.a(f, v));
              r.add(D);
              v += 1
            }else {
              break
            }
          }
          return sc(r.ba(), d.a(a, lb(c)))
        }
        return J(a.c ? a.c(F(c)) : a.call(null, F(c)), d.a(a, G(c)))
      }
      return null
    }, null)
  }
  var d = null, f = function() {
    function a(c, d, f, h, v) {
      var D = null;
      4 < arguments.length && (D = I(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, h, D)
    }
    function b(a, c, f, h, g) {
      return d.a(function(b) {
        return S.a(a, b)
      }, function P(a) {
        return new nc(null, !1, function() {
          var b = d.a(E, a);
          return Bc(Dc, b) ? J(d.a(F, b), P(d.a(G, b))) : null
        }, null)
      }(Hb.e(g, h, I([f, c], 0))))
    }
    a.i = 4;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var f = F(a);
      a = H(a);
      var h = F(a);
      a = G(a);
      return b(c, d, f, h, a)
    };
    a.e = b;
    return a
  }(), d = function(d, g, m, n, q) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, m);
      case 4:
        return a.call(this, d, g, m, n);
      default:
        return f.e(d, g, m, n, I(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = 4;
  d.g = f.g;
  d.a = c;
  d.b = b;
  d.j = a;
  d.e = f.e;
  return d
}(), Lc = function Kc(b, c) {
  return new nc(null, !1, function() {
    if(0 < b) {
      var d = E(c);
      return d ? J(F(d), Kc(b - 1, G(d))) : null
    }
    return null
  }, null)
};
function Mc(a, b) {
  return new nc(null, !1, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        var d = E(d), f = 0 < c;
        if(p(f ? d : f)) {
          c -= 1, d = G(d)
        }else {
          c = d;
          break a
        }
      }
      c = void 0
    }
    return c
  }, null)
}
var Nc = function() {
  function a(a, b) {
    return Lc(a, c.c(b))
  }
  function b(a) {
    return new nc(null, !1, function() {
      return J(a, c.c(a))
    }, null)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}(), Pc = function Oc(b, c) {
  return J(c, new nc(null, !1, function() {
    return Oc(b, b.c ? b.c(c) : b.call(null, c))
  }, null))
}, Qc = function() {
  function a(a, c) {
    return new nc(null, !1, function() {
      var h = E(a), g = E(c);
      return(h ? g : h) ? J(F(h), J(F(g), b.a(G(h), G(g)))) : null
    }, null)
  }
  var b = null, c = function() {
    function a(b, d, m) {
      var n = null;
      2 < arguments.length && (n = I(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, n)
    }
    function c(a, d, f) {
      return new nc(null, !1, function() {
        var c = Jc.a(E, Hb.e(f, d, I([a], 0)));
        return Bc(Dc, c) ? xc.a(Jc.a(F, c), S.a(b, Jc.a(G, c))) : null
      }, null)
    }
    a.i = 2;
    a.g = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}(), Sc = function Rc(b, c) {
  return new nc(null, !1, function() {
    var d = E(c);
    if(d) {
      if(Sb(d)) {
        for(var f = kb(d), h = N(f), g = new oc(Array(h), 0), m = 0;;) {
          if(m < h) {
            if(p(b.c ? b.c(x.a(f, m)) : b.call(null, x.a(f, m)))) {
              var n = x.a(f, m);
              g.add(n)
            }
            m += 1
          }else {
            break
          }
        }
        return sc(g.ba(), Rc(b, lb(d)))
      }
      f = F(d);
      d = G(d);
      return p(b.c ? b.c(f) : b.call(null, f)) ? J(f, Rc(b, d)) : Rc(b, d)
    }
    return null
  }, null)
};
function Tc(a, b) {
  var c;
  null != a ? (c = a ? ((c = a.q & 4) ? c : a.Db) ? !0 : !1 : !1, c ? (c = Zb.b(gb, fb(a), b), c = hb(c)) : c = Zb.b(sa, a, b)) : c = Zb.b(Hb, vb, b);
  return c
}
var Uc = function() {
  function a(a, b, c, m) {
    return new nc(null, !1, function() {
      var n = E(m);
      if(n) {
        var q = Lc(a, n);
        return a === N(q) ? J(q, d.j(a, b, c, Mc(b, n))) : K.e(I([Lc(a, xc.a(q, c))], 0))
      }
      return null
    }, null)
  }
  function b(a, b, c) {
    return new nc(null, !1, function() {
      var m = E(c);
      if(m) {
        var n = Lc(a, m);
        return a === N(n) ? J(n, d.b(a, b, Mc(b, m))) : null
      }
      return null
    }, null)
  }
  function c(a, b) {
    return d.b(a, a, b)
  }
  var d = null, d = function(d, h, g, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, g);
      case 4:
        return a.call(this, d, h, g, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.j = a;
  return d
}(), Vc = function() {
  function a(a, b, c) {
    var g = Ub;
    for(b = E(b);;) {
      if(b) {
        var m = a, n = void 0;
        n = m ? ((n = m.f & 256) ? n : m.Ca) ? !0 : m.f ? !1 : s(xa, m) : s(xa, m);
        if(n) {
          a = Q.b(a, F(b), g);
          if(g === a) {
            return c
          }
          b = H(b)
        }else {
          return c
        }
      }else {
        return a
      }
    }
  }
  function b(a, b) {
    return c.b(a, b, null)
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}(), Xc = function Wc(b, c, d) {
  var f = O.b(c, 0, null);
  c = cc(c, 1);
  return p(c) ? R.b(b, f, Wc(Q.a(b, f), c, d)) : R.b(b, f, d)
}, Yc = function() {
  function a(a, b, c, d, h, v) {
    var D = O.b(b, 0, null);
    b = cc(b, 1);
    return p(b) ? R.b(a, D, f.X(Q.a(a, D), b, c, d, h, v)) : R.b(a, D, c.j ? c.j(Q.a(a, D), d, h, v) : c.call(null, Q.a(a, D), d, h, v))
  }
  function b(a, b, c, d, h) {
    var v = O.b(b, 0, null);
    b = cc(b, 1);
    return p(b) ? R.b(a, v, f.p(Q.a(a, v), b, c, d, h)) : R.b(a, v, c.b ? c.b(Q.a(a, v), d, h) : c.call(null, Q.a(a, v), d, h))
  }
  function c(a, b, c, d) {
    var h = O.b(b, 0, null);
    b = cc(b, 1);
    return p(b) ? R.b(a, h, f.j(Q.a(a, h), b, c, d)) : R.b(a, h, c.a ? c.a(Q.a(a, h), d) : c.call(null, Q.a(a, h), d))
  }
  function d(a, b, c) {
    var d = O.b(b, 0, null);
    b = cc(b, 1);
    return p(b) ? R.b(a, d, f.b(Q.a(a, d), b, c)) : R.b(a, d, c.c ? c.c(Q.a(a, d)) : c.call(null, Q.a(a, d)))
  }
  var f = null, h = function() {
    function a(c, d, f, h, g, P, M) {
      var U = null;
      6 < arguments.length && (U = I(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, f, h, g, P, U)
    }
    function b(a, c, d, h, g, m, M) {
      var U = O.b(c, 0, null);
      c = cc(c, 1);
      return p(c) ? R.b(a, U, S.e(f, Q.a(a, U), c, d, h, I([g, m, M], 0))) : R.b(a, U, S.e(d, Q.a(a, U), h, g, m, I([M], 0)))
    }
    a.i = 6;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var f = F(a);
      a = H(a);
      var h = F(a);
      a = H(a);
      var g = F(a);
      a = H(a);
      var M = F(a);
      a = G(a);
      return b(c, d, f, h, g, M, a)
    };
    a.e = b;
    return a
  }(), f = function(f, m, n, q, r, v, D) {
    switch(arguments.length) {
      case 3:
        return d.call(this, f, m, n);
      case 4:
        return c.call(this, f, m, n, q);
      case 5:
        return b.call(this, f, m, n, q, r);
      case 6:
        return a.call(this, f, m, n, q, r, v);
      default:
        return h.e(f, m, n, q, r, v, I(arguments, 6))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.i = 6;
  f.g = h.g;
  f.b = d;
  f.j = c;
  f.p = b;
  f.X = a;
  f.e = h.e;
  return f
}();
function Zc(a, b) {
  this.n = a;
  this.d = b
}
function $c(a) {
  return new Zc(a.n, a.d.slice())
}
function ad(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function bd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Zc(a, Array(32));
    d.d[0] = c;
    c = d;
    b -= 5
  }
}
var dd = function cd(b, c, d, f) {
  var h = $c(d), g = b.h - 1 >>> c & 31;
  5 === c ? h.d[g] = f : (d = d.d[g], b = null != d ? cd(b, c - 5, d, f) : bd(null, c - 5, f), h.d[g] = b);
  return h
};
function ed(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function fd(a, b) {
  var c = 0 <= b;
  if(c ? b < a.h : c) {
    if(b >= ad(a)) {
      return a.N
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.d[b >>> d & 31], d = f
      }else {
        return c.d
      }
    }
  }else {
    return ed(b, a.h)
  }
}
var hd = function gd(b, c, d, f, h) {
  var g = $c(d);
  if(0 === c) {
    g.d[f & 31] = h
  }else {
    var m = f >>> c & 31;
    b = gd(b, c - 5, d.d[m], f, h);
    g.d[m] = b
  }
  return g
}, jd = function id(b, c, d) {
  var f = b.h - 2 >>> c & 31;
  if(5 < c) {
    b = id(b, c - 5, d.d[f]);
    if((c = null == b) ? 0 === f : c) {
      return null
    }
    d = $c(d);
    d.d[f] = b;
    return d
  }
  return 0 === f ? null : t ? (d = $c(d), d.d[f] = null, d) : null
};
function kd(a, b, c, d, f, h) {
  this.l = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.N = f;
  this.m = h;
  this.q = 4;
  this.f = 167668511
}
k = kd.prototype;
k.Ba = function() {
  return new ld(this.h, this.shift, md.c ? md.c(this.root) : md.call(null, this.root), nd.c ? nd.c(this.N) : nd.call(null, this.N))
};
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Cb(a)
};
k.U = function(a, b) {
  return a.O(a, b, null)
};
k.P = function(a, b, c) {
  return a.O(a, b, c)
};
k.ea = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.h : d) {
    return ad(a) <= b ? (a = this.N.slice(), a[b & 31] = c, new kd(this.l, this.h, this.shift, this.root, a, null)) : new kd(this.l, this.h, this.shift, hd(a, this.shift, this.root, b, c), this.N, null)
  }
  if(b === this.h) {
    return a.B(a, c)
  }
  if(t) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.h), w("]")].join(""));
  }
  return null
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.r(this, c);
      case 3:
        return this.O(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
k.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
k.B = function(a, b) {
  if(32 > this.h - ad(a)) {
    var c = this.N.slice();
    c.push(b);
    return new kd(this.l, this.h + 1, this.shift, this.root, c, null)
  }
  var d = this.h >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Zc(null, Array(32));
    d.d[0] = this.root;
    var f = bd(null, this.shift, new Zc(null, this.N));
    d.d[1] = f
  }else {
    d = dd(a, this.shift, this.root, new Zc(null, this.N))
  }
  return new kd(this.l, this.h + 1, c, d, [b], null)
};
k.Xa = function(a) {
  return 0 < this.h ? new Db(a, this.h - 1, null) : vb
};
k.Va = function(a) {
  return a.r(a, 0)
};
k.Wa = function(a) {
  return a.r(a, 1)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return yb.a(a, b)
};
k.L = function(a, b, c) {
  return yb.b(a, b, c)
};
k.F = function(a) {
  return 0 === this.h ? null : 32 > this.h ? I.c(this.N) : t ? od.b ? od.b(a, 0, 0) : od.call(null, a, 0, 0) : null
};
k.J = e("h");
k.wa = function(a) {
  return 0 < this.h ? a.r(a, this.h - 1) : null
};
k.xa = function(a) {
  if(0 === this.h) {
    throw Error("Can't pop empty vector");
  }
  if(1 === this.h) {
    return Pa(pd, this.l)
  }
  if(1 < this.h - ad(a)) {
    return new kd(this.l, this.h - 1, this.shift, this.root, this.N.slice(0, -1), null)
  }
  if(t) {
    var b = fd(a, this.h - 2);
    a = jd(a, this.shift, this.root);
    a = null == a ? qd : a;
    var c = this.h - 1, d = 5 < this.shift;
    return(d ? null == a.d[1] : d) ? new kd(this.l, c, this.shift - 5, a.d[0], b, null) : new kd(this.l, c, this.shift, a, b, null)
  }
  return null
};
k.Ya = function(a, b, c) {
  return a.ea(a, b, c)
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new kd(b, this.h, this.shift, this.root, this.N, this.m)
};
k.D = e("l");
k.r = function(a, b) {
  return fd(a, b)[b & 31]
};
k.O = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.r(a, b) : c
};
var qd = new Zc(null, Array(32)), pd = new kd(null, 0, 5, qd, [], 0);
function W(a) {
  var b = a.length;
  if(32 > b) {
    return new kd(null, b, 5, qd, a, null)
  }
  for(var c = a.slice(0, 32), d = 32, f = fb(new kd(null, 32, 5, qd, c, null));;) {
    if(d < b) {
      c = d + 1, f = gb(f, a[d]), d = c
    }else {
      return hb(f)
    }
  }
}
function rd(a, b, c, d, f, h) {
  this.C = a;
  this.W = b;
  this.k = c;
  this.s = d;
  this.l = f;
  this.m = h;
  this.f = 32243948;
  this.q = 1536
}
k = rd.prototype;
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Cb(a)
};
k.Q = function(a) {
  return this.s + 1 < this.W.length ? (a = od.j ? od.j(this.C, this.W, this.k, this.s + 1) : od.call(null, this.C, this.W, this.k, this.s + 1), null == a ? null : a) : a.eb(a)
};
k.B = function(a, b) {
  return J(b, a)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return yb.a(sd.b ? sd.b(this.C, this.k + this.s, N(this.C)) : sd.call(null, this.C, this.k + this.s, N(this.C)), b)
};
k.L = function(a, b, c) {
  return yb.b(sd.b ? sd.b(this.C, this.k + this.s, N(this.C)) : sd.call(null, this.C, this.k + this.s, N(this.C)), b, c)
};
k.F = aa();
k.I = function() {
  return this.W[this.s]
};
k.M = function(a) {
  return this.s + 1 < this.W.length ? (a = od.j ? od.j(this.C, this.W, this.k, this.s + 1) : od.call(null, this.C, this.W, this.k, this.s + 1), null == a ? vb : a) : a.Aa(a)
};
k.eb = function() {
  var a = this.W.length, a = this.k + a < qa(this.C) ? od.b ? od.b(this.C, this.k + a, 0) : od.call(null, this.C, this.k + a, 0) : null;
  return null == a ? null : a
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return od.p ? od.p(this.C, this.W, this.k, this.s, b) : od.call(null, this.C, this.W, this.k, this.s, b)
};
k.Ha = function() {
  return qc.a(this.W, this.s)
};
k.Aa = function() {
  var a = this.W.length, a = this.k + a < qa(this.C) ? od.b ? od.b(this.C, this.k + a, 0) : od.call(null, this.C, this.k + a, 0) : null;
  return null == a ? vb : a
};
var od = function() {
  function a(a, b, c, d, n) {
    return new rd(a, b, c, d, n, null)
  }
  function b(a, b, c, d) {
    return new rd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new rd(a, fd(a, b), b, c, null, null)
  }
  var d = null, d = function(d, h, g, m, n) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, g);
      case 4:
        return b.call(this, d, h, g, m);
      case 5:
        return a.call(this, d, h, g, m, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.j = b;
  d.p = a;
  return d
}();
function td(a, b, c, d, f) {
  this.l = a;
  this.T = b;
  this.start = c;
  this.end = d;
  this.m = f;
  this.q = 0;
  this.f = 32400159
}
k = td.prototype;
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Cb(a)
};
k.U = function(a, b) {
  return a.O(a, b, null)
};
k.P = function(a, b, c) {
  return a.O(a, b, c)
};
k.ea = function(a, b, c) {
  var d = this, f = d.start + b;
  return ud.p ? ud.p(d.l, R.b(d.T, f, c), d.start, function() {
    var a = d.end, b = f + 1;
    return a > b ? a : b
  }(), null) : ud.call(null, d.l, R.b(d.T, f, c), d.start, function() {
    var a = d.end, b = f + 1;
    return a > b ? a : b
  }(), null)
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.r(this, c);
      case 3:
        return this.O(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
k.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
k.B = function(a, b) {
  return ud.p ? ud.p(this.l, Ja(this.T, this.end, b), this.start, this.end + 1, null) : ud.call(null, this.l, Ja(this.T, this.end, b), this.start, this.end + 1, null)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return yb.a(a, b)
};
k.L = function(a, b, c) {
  return yb.b(a, b, c)
};
k.F = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : J(x.a(a.T, d), new nc(null, !1, function() {
      return c(d + 1)
    }, null))
  }(a.start)
};
k.J = function() {
  return this.end - this.start
};
k.wa = function() {
  return x.a(this.T, this.end - 1)
};
k.xa = function() {
  if(this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return ud.p ? ud.p(this.l, this.T, this.start, this.end - 1, null) : ud.call(null, this.l, this.T, this.start, this.end - 1, null)
};
k.Ya = function(a, b, c) {
  return a.ea(a, b, c)
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return ud.p ? ud.p(b, this.T, this.start, this.end, this.m) : ud.call(null, b, this.T, this.start, this.end, this.m)
};
k.D = e("l");
k.r = function(a, b) {
  var c = 0 > b;
  return(c ? c : this.end <= this.start + b) ? ed(b, this.end - this.start) : x.a(this.T, this.start + b)
};
k.O = function(a, b, c) {
  return((a = 0 > b) ? a : this.end <= this.start + b) ? c : x.b(this.T, this.start + b, c)
};
function ud(a, b, c, d, f) {
  for(;;) {
    if(b instanceof td) {
      var h = b.start + c, g = b.start + d;
      b = b.T;
      c = h;
      d = g
    }else {
      var m = N(b);
      if(function() {
        var a = 0 > c;
        return a || (a = 0 > d) ? a : (a = c > m) ? a : d > m
      }()) {
        throw Error("Index out of bounds");
      }
      return new td(a, b, c, d, f)
    }
  }
}
var sd = function() {
  function a(a, b, c) {
    return ud(null, a, b, c, null)
  }
  function b(a, b) {
    return c.b(a, b, N(a))
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c
}();
function md(a) {
  return new Zc({}, a.d.slice())
}
function nd(a) {
  var b = Array(32);
  Tb(a, 0, b, 0, a.length);
  return b
}
var wd = function vd(b, c, d, f) {
  d = b.root.n === d.n ? d : new Zc(b.root.n, d.d.slice());
  var h = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var g = d.d[h];
    b = null != g ? vd(b, c - 5, g, f) : bd(b.root.n, c - 5, f)
  }
  d.d[h] = b;
  return d
};
function ld(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.N = d;
  this.f = 275;
  this.q = 88
}
k = ld.prototype;
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.U(this, c);
      case 3:
        return this.P(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
k.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
k.U = function(a, b) {
  return a.O(a, b, null)
};
k.P = function(a, b, c) {
  return a.O(a, b, c)
};
k.r = function(a, b) {
  if(this.root.n) {
    return fd(a, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
k.O = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.r(a, b) : c
};
k.J = function() {
  if(this.root.n) {
    return this.h
  }
  throw Error("count after persistent!");
};
function xd(a, b, c, d) {
  if(a.root.n) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.h : b
    }()) {
      if(ad(b) <= c) {
        a.N[c & 31] = d
      }else {
        var f = function g(b, f) {
          var q = a.root.n === f.n ? f : new Zc(a.root.n, f.d.slice());
          if(0 === b) {
            q.d[c & 31] = d
          }else {
            var r = c >>> b & 31, v = g(b - 5, q.d[r]);
            q.d[r] = v
          }
          return q
        }.call(null, a.shift, a.root);
        a.root = f
      }
      return b
    }
    if(c === a.h) {
      return b.ya(b, d)
    }
    if(t) {
      throw Error([w("Index "), w(c), w(" out of bounds for TransientVector of length"), w(a.h)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
}
k.qa = function(a, b, c) {
  return xd(a, a, b, c)
};
k.ya = function(a, b) {
  if(this.root.n) {
    if(32 > this.h - ad(a)) {
      this.N[this.h & 31] = b
    }else {
      var c = new Zc(this.root.n, this.N), d = Array(32);
      d[0] = b;
      this.N = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = bd(this.root.n, this.shift, c);
        this.root = new Zc(this.root.n, d);
        this.shift = f
      }else {
        this.root = wd(a, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return a
  }
  throw Error("conj! after persistent!");
};
k.Ea = function(a) {
  if(this.root.n) {
    this.root.n = null;
    a = this.h - ad(a);
    var b = Array(a);
    Tb(this.N, 0, b, 0, a);
    return new kd(null, this.h, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function yd() {
  this.q = 0;
  this.f = 2097152
}
yd.prototype.t = ba(!1);
var zd = new yd;
function Ad(a, b) {
  return Wb(Qb(b) ? N(a) === N(b) ? Bc(Dc, Jc.a(function(a) {
    return wb.a(Q.b(b, F(a), zd), F(H(a)))
  }, a)) : null : null)
}
function Bd(a, b) {
  var c = a.d;
  if(b instanceof V) {
    a: {
      for(var d = c.length, f = b.ia, h = 0;;) {
        if(d <= h) {
          c = -1;
          break a
        }
        var g = c[h], m = g instanceof V;
        if(m ? f === g.ia : m) {
          c = h;
          break a
        }
        if(t) {
          h += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if((d = "string" == typeof b) ? d : "number" === typeof b) {
      a: {
        d = c.length;
        for(f = 0;;) {
          if(d <= f) {
            c = -1;
            break a
          }
          if(b === c[f]) {
            c = f;
            break a
          }
          if(t) {
            f += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof B) {
        a: {
          d = c.length;
          f = b.oa;
          for(h = 0;;) {
            if(d <= h) {
              c = -1;
              break a
            }
            g = c[h];
            if((m = g instanceof B) ? f === g.oa : m) {
              c = h;
              break a
            }
            if(t) {
              h += 2
            }else {
              c = null;
              break a
            }
          }
          c = void 0
        }
      }else {
        if(null == b) {
          a: {
            d = c.length;
            for(f = 0;;) {
              if(d <= f) {
                c = -1;
                break a
              }
              if(null == c[f]) {
                c = f;
                break a
              }
              if(t) {
                f += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(t) {
            a: {
              d = c.length;
              for(f = 0;;) {
                if(d <= f) {
                  c = -1;
                  break a
                }
                if(wb.a(b, c[f])) {
                  c = f;
                  break a
                }
                if(t) {
                  f += 2
                }else {
                  c = null;
                  break a
                }
              }
              c = void 0
            }
          }else {
            c = null
          }
        }
      }
    }
  }
  return c
}
function Cd(a, b, c) {
  this.d = a;
  this.k = b;
  this.R = c;
  this.q = 0;
  this.f = 32374990
}
k = Cd.prototype;
k.w = function(a) {
  return Cb(a)
};
k.Q = function() {
  return this.k < this.d.length - 2 ? new Cd(this.d, this.k + 2, this.R) : null
};
k.B = function(a, b) {
  return J(b, a)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a(b, a)
};
k.L = function(a, b, c) {
  return L.b(b, c, a)
};
k.F = aa();
k.J = function() {
  return(this.d.length - this.k) / 2
};
k.I = function() {
  return W([this.d[this.k], this.d[this.k + 1]])
};
k.M = function() {
  return this.k < this.d.length - 2 ? new Cd(this.d, this.k + 2, this.R) : vb
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new Cd(this.d, this.k, b)
};
k.D = e("R");
function Dd(a, b, c, d) {
  this.l = a;
  this.h = b;
  this.d = c;
  this.m = d;
  this.q = 4;
  this.f = 16123663
}
k = Dd.prototype;
k.Ba = function() {
  return new Ed({}, this.d.length, this.d.slice())
};
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = dc(a)
};
k.U = function(a, b) {
  return a.P(a, b, null)
};
k.P = function(a, b, c) {
  a = Bd(a, b);
  return-1 === a ? c : this.d[a + 1]
};
k.ea = function(a, b, c) {
  var d = Bd(a, b);
  if(-1 === d) {
    if(this.h < Fd) {
      d = a.d;
      a = d.length;
      for(var f = Array(a + 2), h = 0;;) {
        if(h < a) {
          f[h] = d[h], h += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new Dd(this.l, this.h + 1, f, null)
    }
    return Pa(Ba(Tc(Gd, a), b, c), this.l)
  }
  return c === this.d[d + 1] ? a : t ? (b = this.d.slice(), b[d + 1] = c, new Dd(this.l, this.h, b, null)) : null
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.U(this, c);
      case 3:
        return this.P(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
k.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
k.B = function(a, b) {
  return Rb(b) ? a.ea(a, x.a(b, 0), x.a(b, 1)) : Zb.b(sa, a, b)
};
k.toString = function() {
  return nb(this)
};
k.F = function() {
  return 0 <= this.d.length - 2 ? new Cd(this.d, 0, null) : null
};
k.J = e("h");
k.t = function(a, b) {
  return Ad(a, b)
};
k.G = function(a, b) {
  return new Dd(b, this.h, this.d, this.m)
};
k.D = e("l");
var Hd = new Dd(null, 0, [], null), Fd = 8;
function A(a) {
  return new Dd(null, a.length / 2, a, null)
}
function Ed(a, b, c) {
  this.ra = a;
  this.ma = b;
  this.d = c;
  this.q = 56;
  this.f = 258
}
k = Ed.prototype;
k.qa = function(a, b, c) {
  if(p(this.ra)) {
    var d = Bd(a, b);
    if(-1 === d) {
      if(this.ma + 2 <= 2 * Fd) {
        return this.ma += 2, this.d.push(b), this.d.push(c), a
      }
      a = Id.a ? Id.a(this.ma, this.d) : Id.call(null, this.ma, this.d);
      return ib(a, b, c)
    }
    c !== this.d[d + 1] && (this.d[d + 1] = c);
    return a
  }
  throw Error("assoc! after persistent!");
};
k.ya = function(a, b) {
  if(p(this.ra)) {
    var c;
    c = b ? ((c = b.f & 2048) ? c : b.qb) ? !0 : b.f ? !1 : s(Da, b) : s(Da, b);
    if(c) {
      return a.qa(a, ec.c ? ec.c(b) : ec.call(null, b), fc.c ? fc.c(b) : fc.call(null, b))
    }
    c = E(b);
    for(var d = a;;) {
      var f = F(c);
      if(p(f)) {
        c = H(c), d = d.qa(d, ec.c ? ec.c(f) : ec.call(null, f), fc.c ? fc.c(f) : fc.call(null, f))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
k.Ea = function() {
  if(p(this.ra)) {
    return this.ra = !1, new Dd(null, ac(this.ma), this.d, null)
  }
  throw Error("persistent! called twice");
};
k.U = function(a, b) {
  return a.P(a, b, null)
};
k.P = function(a, b, c) {
  if(p(this.ra)) {
    return a = Bd(a, b), -1 === a ? c : this.d[a + 1]
  }
  throw Error("lookup after persistent!");
};
k.J = function() {
  if(p(this.ra)) {
    return ac(this.ma)
  }
  throw Error("count after persistent!");
};
function Id(a, b) {
  for(var c = fb(Gd), d = 0;;) {
    if(d < a) {
      c = ib(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Jd() {
  this.da = !1
}
function Kd(a, b) {
  var c;
  a === b ? c = !0 : (c = a === b ? !0 : ((c = a instanceof V) ? b instanceof V : c) ? a.ia === b.ia : !1, c = c ? !0 : t ? wb.a(a, b) : null);
  return c
}
var Ld = function() {
  function a(a, b, c, g, m) {
    a = a.slice();
    a[b] = c;
    a[g] = m;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = null, c = function(c, f, h, g, m) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, h);
      case 5:
        return a.call(this, c, f, h, g, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.p = a;
  return c
}(), Md = function() {
  function a(a, b, c, g, m, n) {
    a = a.sa(b);
    a.d[c] = g;
    a.d[m] = n;
    return a
  }
  function b(a, b, c, g) {
    a = a.sa(b);
    a.d[c] = g;
    return a
  }
  var c = null, c = function(c, f, h, g, m, n) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, f, h, g);
      case 6:
        return a.call(this, c, f, h, g, m, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.X = a;
  return c
}();
function Nd(a, b, c) {
  this.n = a;
  this.A = b;
  this.d = c
}
k = Nd.prototype;
k.Z = function(a, b, c, d, f, h) {
  var g = 1 << (c >>> b & 31), m = bc(this.A & g - 1);
  if(0 === (this.A & g)) {
    var n = bc(this.A);
    if(2 * n < this.d.length) {
      a = this.sa(a);
      b = a.d;
      h.da = !0;
      a: {
        for(c = 2 * (n - m), h = 2 * m + (c - 1), n = 2 * (m + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[n] = b[h];
          n -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * m] = d;
      b[2 * m + 1] = f;
      a.A |= g;
      return a
    }
    if(16 <= n) {
      m = Array(32);
      m[c >>> b & 31] = Od.Z(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.A >>> d & 1) && (m[d] = null != this.d[f] ? Od.Z(a, b + 5, C.c(this.d[f]), this.d[f], this.d[f + 1], h) : this.d[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Pd(a, n + 1, m)
    }
    return t ? (b = Array(2 * (n + 4)), Tb(this.d, 0, b, 0, 2 * m), b[2 * m] = d, b[2 * m + 1] = f, Tb(this.d, 2 * m, b, 2 * (m + 1), 2 * (n - m)), h.da = !0, a = this.sa(a), a.d = b, a.A |= g, a) : null
  }
  n = this.d[2 * m];
  g = this.d[2 * m + 1];
  return null == n ? (n = g.Z(a, b + 5, c, d, f, h), n === g ? this : Md.j(this, a, 2 * m + 1, n)) : Kd(d, n) ? f === g ? this : Md.j(this, a, 2 * m + 1, f) : t ? (h.da = !0, Md.X(this, a, 2 * m, null, 2 * m + 1, Qd.pa ? Qd.pa(a, b + 5, n, g, c, d, f) : Qd.call(null, a, b + 5, n, g, c, d, f))) : null
};
k.za = function() {
  return Rd.c ? Rd.c(this.d) : Rd.call(null, this.d)
};
k.sa = function(a) {
  if(a === this.n) {
    return this
  }
  var b = bc(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  Tb(this.d, 0, c, 0, 2 * b);
  return new Nd(a, this.A, c)
};
k.Y = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), g = bc(this.A & h - 1);
  if(0 === (this.A & h)) {
    var m = bc(this.A);
    if(16 <= m) {
      g = Array(32);
      g[b >>> a & 31] = Od.Y(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.A >>> c & 1) && (g[c] = null != this.d[d] ? Od.Y(a + 5, C.c(this.d[d]), this.d[d], this.d[d + 1], f) : this.d[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Pd(null, m + 1, g)
    }
    a = Array(2 * (m + 1));
    Tb(this.d, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Tb(this.d, 2 * g, a, 2 * (g + 1), 2 * (m - g));
    f.da = !0;
    return new Nd(null, this.A | h, a)
  }
  m = this.d[2 * g];
  h = this.d[2 * g + 1];
  return null == m ? (m = h.Y(a + 5, b, c, d, f), m === h ? this : new Nd(null, this.A, Ld.b(this.d, 2 * g + 1, m))) : Kd(c, m) ? d === h ? this : new Nd(null, this.A, Ld.b(this.d, 2 * g + 1, d)) : t ? (f.da = !0, new Nd(null, this.A, Ld.p(this.d, 2 * g, null, 2 * g + 1, Qd.X ? Qd.X(a + 5, m, h, b, c, d) : Qd.call(null, a + 5, m, h, b, c, d)))) : null
};
k.la = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.A & f)) {
    return d
  }
  var h = bc(this.A & f - 1), f = this.d[2 * h], h = this.d[2 * h + 1];
  return null == f ? h.la(a + 5, b, c, d) : Kd(c, f) ? h : t ? d : null
};
var Od = new Nd(null, 0, []);
function Pd(a, b, c) {
  this.n = a;
  this.h = b;
  this.d = c
}
k = Pd.prototype;
k.Z = function(a, b, c, d, f, h) {
  var g = c >>> b & 31, m = this.d[g];
  if(null == m) {
    return a = Md.j(this, a, g, Od.Z(a, b + 5, c, d, f, h)), a.h += 1, a
  }
  b = m.Z(a, b + 5, c, d, f, h);
  return b === m ? this : Md.j(this, a, g, b)
};
k.za = function() {
  return Sd.c ? Sd.c(this.d) : Sd.call(null, this.d)
};
k.sa = function(a) {
  return a === this.n ? this : new Pd(a, this.h, this.d.slice())
};
k.Y = function(a, b, c, d, f) {
  var h = b >>> a & 31, g = this.d[h];
  if(null == g) {
    return new Pd(null, this.h + 1, Ld.b(this.d, h, Od.Y(a + 5, b, c, d, f)))
  }
  a = g.Y(a + 5, b, c, d, f);
  return a === g ? this : new Pd(null, this.h, Ld.b(this.d, h, a))
};
k.la = function(a, b, c, d) {
  var f = this.d[b >>> a & 31];
  return null != f ? f.la(a + 5, b, c, d) : d
};
function Td(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Kd(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Ud(a, b, c, d) {
  this.n = a;
  this.ga = b;
  this.h = c;
  this.d = d
}
k = Ud.prototype;
k.Z = function(a, b, c, d, f, h) {
  if(c === this.ga) {
    b = Td(this.d, this.h, d);
    if(-1 === b) {
      if(this.d.length > 2 * this.h) {
        return a = Md.X(this, a, 2 * this.h, d, 2 * this.h + 1, f), h.da = !0, a.h += 1, a
      }
      c = this.d.length;
      b = Array(c + 2);
      Tb(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.da = !0;
      h = this.h + 1;
      a === this.n ? (this.d = b, this.h = h, a = this) : a = new Ud(this.n, this.ga, h, b);
      return a
    }
    return this.d[b + 1] === f ? this : Md.j(this, a, b + 1, f)
  }
  return(new Nd(a, 1 << (this.ga >>> b & 31), [null, this, null, null])).Z(a, b, c, d, f, h)
};
k.za = function() {
  return Rd.c ? Rd.c(this.d) : Rd.call(null, this.d)
};
k.sa = function(a) {
  if(a === this.n) {
    return this
  }
  var b = Array(2 * (this.h + 1));
  Tb(this.d, 0, b, 0, 2 * this.h);
  return new Ud(a, this.ga, this.h, b)
};
k.Y = function(a, b, c, d, f) {
  return b === this.ga ? (a = Td(this.d, this.h, c), -1 === a ? (a = this.d.length, b = Array(a + 2), Tb(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.da = !0, new Ud(null, this.ga, this.h + 1, b)) : wb.a(this.d[a], d) ? this : new Ud(null, this.ga, this.h, Ld.b(this.d, a + 1, d))) : (new Nd(null, 1 << (this.ga >>> a & 31), [null, this])).Y(a, b, c, d, f)
};
k.la = function(a, b, c, d) {
  a = Td(this.d, this.h, c);
  return 0 > a ? d : Kd(c, this.d[a]) ? this.d[a + 1] : t ? d : null
};
var Qd = function() {
  function a(a, b, c, g, m, n, q) {
    var r = C.c(c);
    if(r === m) {
      return new Ud(null, r, 2, [c, g, n, q])
    }
    var v = new Jd;
    return Od.Z(a, b, r, c, g, v).Z(a, b, m, n, q, v)
  }
  function b(a, b, c, g, m, n) {
    var q = C.c(b);
    if(q === g) {
      return new Ud(null, q, 2, [b, c, m, n])
    }
    var r = new Jd;
    return Od.Y(a, q, b, c, r).Y(a, g, m, n, r)
  }
  var c = null, c = function(c, f, h, g, m, n, q) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, f, h, g, m, n);
      case 7:
        return a.call(this, c, f, h, g, m, n, q)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.X = b;
  c.pa = a;
  return c
}();
function Vd(a, b, c, d, f) {
  this.l = a;
  this.$ = b;
  this.k = c;
  this.aa = d;
  this.m = f;
  this.q = 0;
  this.f = 32374860
}
k = Vd.prototype;
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Cb(a)
};
k.B = function(a, b) {
  return J(b, a)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a(b, a)
};
k.L = function(a, b, c) {
  return L.b(b, c, a)
};
k.F = aa();
k.I = function() {
  return null == this.aa ? W([this.$[this.k], this.$[this.k + 1]]) : F(this.aa)
};
k.M = function() {
  return null == this.aa ? Rd.b ? Rd.b(this.$, this.k + 2, null) : Rd.call(null, this.$, this.k + 2, null) : Rd.b ? Rd.b(this.$, this.k, H(this.aa)) : Rd.call(null, this.$, this.k, H(this.aa))
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new Vd(b, this.$, this.k, this.aa, this.m)
};
k.D = e("l");
var Rd = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new Vd(null, a, b, null, null)
          }
          var g = a[b + 1];
          if(p(g) && (g = g.za(), p(g))) {
            return new Vd(null, a, b + 2, g, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new Vd(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.b(a, 0, null)
  }
  var c = null, c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.b = a;
  return c
}();
function Xd(a, b, c, d, f) {
  this.l = a;
  this.$ = b;
  this.k = c;
  this.aa = d;
  this.m = f;
  this.q = 0;
  this.f = 32374860
}
k = Xd.prototype;
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Cb(a)
};
k.B = function(a, b) {
  return J(b, a)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a(b, a)
};
k.L = function(a, b, c) {
  return L.b(b, c, a)
};
k.F = aa();
k.I = function() {
  return F(this.aa)
};
k.M = function() {
  return Sd.j ? Sd.j(null, this.$, this.k, H(this.aa)) : Sd.call(null, null, this.$, this.k, H(this.aa))
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new Xd(b, this.$, this.k, this.aa, this.m)
};
k.D = e("l");
var Sd = function() {
  function a(a, b, c, g) {
    if(null == g) {
      for(g = b.length;;) {
        if(c < g) {
          var m = b[c];
          if(p(m) && (m = m.za(), p(m))) {
            return new Xd(a, b, c + 1, m, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new Xd(a, b, c, g, null)
    }
  }
  function b(a) {
    return c.j(null, a, 0, null)
  }
  var c = null, c = function(c, f, h, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, f, h, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.j = a;
  return c
}();
function Yd(a, b, c, d, f, h) {
  this.l = a;
  this.h = b;
  this.root = c;
  this.S = d;
  this.V = f;
  this.m = h;
  this.q = 4;
  this.f = 16123663
}
k = Yd.prototype;
k.Ba = function() {
  return new Zd({}, this.root, this.h, this.S, this.V)
};
k.w = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = dc(a)
};
k.U = function(a, b) {
  return a.P(a, b, null)
};
k.P = function(a, b, c) {
  return null == b ? this.S ? this.V : c : null == this.root ? c : t ? this.root.la(0, C.c(b), b, c) : null
};
k.ea = function(a, b, c) {
  if(null == b) {
    var d = this.S;
    return(d ? c === this.V : d) ? a : new Yd(this.l, this.S ? this.h : this.h + 1, this.root, !0, c, null)
  }
  d = new Jd;
  c = (null == this.root ? Od : this.root).Y(0, C.c(b), b, c, d);
  return c === this.root ? a : new Yd(this.l, d.da ? this.h + 1 : this.h, c, this.S, this.V, null)
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.U(this, c);
      case 3:
        return this.P(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
k.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
k.B = function(a, b) {
  return Rb(b) ? a.ea(a, x.a(b, 0), x.a(b, 1)) : Zb.b(sa, a, b)
};
k.toString = function() {
  return nb(this)
};
k.F = function() {
  if(0 < this.h) {
    var a = null != this.root ? this.root.za() : null;
    return this.S ? J(W([null, this.V]), a) : a
  }
  return null
};
k.J = e("h");
k.t = function(a, b) {
  return Ad(a, b)
};
k.G = function(a, b) {
  return new Yd(b, this.h, this.root, this.S, this.V, this.m)
};
k.D = e("l");
var Gd = new Yd(null, 0, null, !1, null, 0);
function $d(a, b) {
  for(var c = a.length, d = 0, f = fb(Gd);;) {
    if(d < c) {
      var h = d + 1, f = ib(f, a[d], b[d]), d = h
    }else {
      return hb(f)
    }
  }
}
function Zd(a, b, c, d, f) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.S = d;
  this.V = f;
  this.q = 56;
  this.f = 258
}
k = Zd.prototype;
k.qa = function(a, b, c) {
  return ae(a, b, c)
};
k.ya = function(a, b) {
  var c;
  a: {
    if(a.n) {
      c = b ? ((c = b.f & 2048) ? c : b.qb) ? !0 : b.f ? !1 : s(Da, b) : s(Da, b);
      if(c) {
        c = ae(a, ec.c ? ec.c(b) : ec.call(null, b), fc.c ? fc.c(b) : fc.call(null, b));
        break a
      }
      c = E(b);
      for(var d = a;;) {
        var f = F(c);
        if(p(f)) {
          c = H(c), d = ae(d, ec.c ? ec.c(f) : ec.call(null, f), fc.c ? fc.c(f) : fc.call(null, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    c = void 0
  }
  return c
};
k.Ea = function(a) {
  if(a.n) {
    a.n = null, a = new Yd(null, a.count, a.root, a.S, a.V, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
k.U = function(a, b) {
  return null == b ? this.S ? this.V : null : null == this.root ? null : this.root.la(0, C.c(b), b)
};
k.P = function(a, b, c) {
  return null == b ? this.S ? this.V : c : null == this.root ? c : this.root.la(0, C.c(b), b, c)
};
k.J = function() {
  if(this.n) {
    return this.count
  }
  throw Error("count after persistent!");
};
function ae(a, b, c) {
  if(a.n) {
    if(null == b) {
      a.V !== c && (a.V = c), a.S || (a.count += 1, a.S = !0)
    }else {
      var d = new Jd;
      b = (null == a.root ? Od : a.root).Z(a.n, 0, C.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.da && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var Jb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = E(a), f = fb(Gd);;) {
      if(b) {
        a = H(H(b));
        var h = F(b), b = F(H(b)), f = ib(f, h, b), b = a
      }else {
        return hb(f)
      }
    }
  }
  a.i = 0;
  a.g = function(a) {
    a = E(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function be(a, b) {
  this.v = a;
  this.R = b;
  this.q = 0;
  this.f = 32374988
}
k = be.prototype;
k.w = function(a) {
  return Cb(a)
};
k.Q = function() {
  var a = this.v;
  if(a) {
    var b = a.f & 128, a = (b ? b : a.Da) ? !0 : a.f ? !1 : s(wa, a)
  }else {
    a = s(wa, a)
  }
  a = a ? this.v.Q(this.v) : H(this.v);
  return null == a ? null : new be(a, this.R)
};
k.B = function(a, b) {
  return J(b, a)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a(b, a)
};
k.L = function(a, b, c) {
  return L.b(b, c, a)
};
k.F = aa();
k.I = function() {
  var a = this.v.I(this.v);
  return a.Va(a)
};
k.M = function() {
  var a = this.v;
  if(a) {
    var b = a.f & 128, a = (b ? b : a.Da) ? !0 : a.f ? !1 : s(wa, a)
  }else {
    a = s(wa, a)
  }
  a = a ? this.v.Q(this.v) : H(this.v);
  return null != a ? new be(a, this.R) : vb
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new be(this.v, b)
};
k.D = e("R");
function ce(a) {
  return(a = E(a)) ? new be(a, null) : null
}
function ec(a) {
  return Ea(a)
}
function de(a, b) {
  this.v = a;
  this.R = b;
  this.q = 0;
  this.f = 32374988
}
k = de.prototype;
k.w = function(a) {
  return Cb(a)
};
k.Q = function() {
  var a = this.v;
  if(a) {
    var b = a.f & 128, a = (b ? b : a.Da) ? !0 : a.f ? !1 : s(wa, a)
  }else {
    a = s(wa, a)
  }
  a = a ? this.v.Q(this.v) : H(this.v);
  return null == a ? null : new de(a, this.R)
};
k.B = function(a, b) {
  return J(b, a)
};
k.toString = function() {
  return nb(this)
};
k.K = function(a, b) {
  return L.a(b, a)
};
k.L = function(a, b, c) {
  return L.b(b, c, a)
};
k.F = aa();
k.I = function() {
  var a = this.v.I(this.v);
  return a.Wa(a)
};
k.M = function() {
  var a = this.v;
  if(a) {
    var b = a.f & 128, a = (b ? b : a.Da) ? !0 : a.f ? !1 : s(wa, a)
  }else {
    a = s(wa, a)
  }
  a = a ? this.v.Q(this.v) : H(this.v);
  return null != a ? new de(a, this.R) : vb
};
k.t = function(a, b) {
  return Eb(a, b)
};
k.G = function(a, b) {
  return new de(this.v, b)
};
k.D = e("R");
function ee() {
  var a = E(fe);
  return a ? new de(a, null) : null
}
function fc(a) {
  return Fa(a)
}
var ge = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return p(Cc(a)) ? Zb.a(function(a, b) {
      return Hb.a(p(a) ? a : Hd, b)
    }, a) : null
  }
  a.i = 0;
  a.g = function(a) {
    a = E(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function he(a, b) {
  for(var c = Hd, d = E(b);;) {
    if(d) {
      var f = F(d), h = Q.b(a, f, ia.vb), c = Ac.a(h, ia.vb) ? R.b(c, f, h) : c, d = H(d)
    }else {
      return c
    }
  }
}
function ie(a) {
  for(var b = pd;;) {
    if(H(a)) {
      b = Hb.a(b, F(a)), a = H(a)
    }else {
      return E(b)
    }
  }
}
function kc(a) {
  var b;
  b = a ? ((b = a.q & 4096) ? b : a.Gb) ? !0 : !1 : !1;
  if(b) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function je(a, b) {
  for(var c = fb(Hd), d = E(a), f = E(b);;) {
    var h = d;
    if(h ? f : h) {
      var h = F(d), g = F(f), c = ib(c, h, g), d = H(d), f = H(f)
    }else {
      hb(c);
      break
    }
  }
}
var le = function ke(b, c) {
  return new nc(null, !1, function() {
    var d = E(c);
    return d ? p(b.c ? b.c(F(d)) : b.call(null, F(d))) ? J(F(d), ke(b, G(d))) : null : null
  }, null)
};
function me(a, b, c, d, f, h, g) {
  z(a, c);
  E(g) && (b.b ? b.b(F(g), a, h) : b.call(null, F(g), a, h));
  c = E(H(g));
  g = null;
  for(var m = 0, n = 0;;) {
    if(n < m) {
      var q = g.r(g, n);
      z(a, d);
      b.b ? b.b(q, a, h) : b.call(null, q, a, h);
      n += 1
    }else {
      if(c = E(c)) {
        g = c, Sb(g) ? (c = kb(g), n = lb(g), g = c, m = N(c), c = n) : (c = F(g), z(a, d), b.b ? b.b(c, a, h) : b.call(null, c, a, h), c = H(g), g = null, m = 0), n = 0
      }else {
        break
      }
    }
  }
  return z(a, f)
}
var ne = function() {
  function a(a, d) {
    var f = null;
    1 < arguments.length && (f = I(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, f)
  }
  function b(a, b) {
    for(var f = E(b), h = null, g = 0, m = 0;;) {
      if(m < g) {
        var n = h.r(h, m);
        z(a, n);
        m += 1
      }else {
        if(f = E(f)) {
          h = f, Sb(h) ? (f = kb(h), g = lb(h), h = f, n = N(f), f = g, g = n) : (n = F(h), z(a, n), f = H(h), h = null, g = 0), m = 0
        }else {
          return null
        }
      }
    }
  }
  a.i = 1;
  a.g = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a)
  };
  a.e = b;
  return a
}(), oe = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function pe(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return oe[a]
  })), w('"')].join("")
}
var re = function qe(b, c, d) {
  if(null == b) {
    return z(c, "nil")
  }
  if(void 0 === b) {
    return z(c, "#\x3cundefined\x3e")
  }
  if(t) {
    p(function() {
      var c = Q.a(d, qb);
      return p(c) ? (c = b ? ((c = b.f & 131072) ? c : b.rb) ? !0 : b.f ? !1 : s(Ma, b) : s(Ma, b), p(c) ? T(b) : c) : c
    }()) && (z(c, "^"), qe(T(b), c, d), z(c, " "));
    if(null == b) {
      return z(c, "nil")
    }
    if(b.mb) {
      return b.ub(c)
    }
    if(function() {
      var c;
      c = b ? ((c = b.f & 2147483648) ? c : b.H) ? !0 : !1 : !1;
      return c
    }()) {
      return b.u(b, c, d)
    }
    if(function() {
      var c = la(b) === Boolean;
      return c ? c : "number" === typeof b
    }()) {
      return z(c, "" + w(b))
    }
    if(b instanceof Array) {
      return me(c, qe, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if("string" == typeof b) {
      return p(pb.call(null, d)) ? z(c, pe(b)) : z(c, b)
    }
    if(Kb(b)) {
      return ne.e(c, I(["#\x3c", "" + w(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var f = function(b, c) {
        for(var d = "" + w(b);;) {
          if(N(d) < c) {
            d = [w("0"), w(d)].join("")
          }else {
            return d
          }
        }
      };
      return ne.e(c, I(['#inst "', "" + w(b.getUTCFullYear()), "-", f(b.getUTCMonth() + 1, 2), "-", f(b.getUTCDate(), 2), "T", f(b.getUTCHours(), 2), ":", f(b.getUTCMinutes(), 2), ":", f(b.getUTCSeconds(), 2), ".", f(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return p(b instanceof RegExp) ? ne.e(c, I(['#"', b.source, '"'], 0)) : function() {
      var c;
      c = b ? ((c = b.f & 2147483648) ? c : b.H) ? !0 : b.f ? !1 : s(ab, b) : s(ab, b);
      return c
    }() ? bb(b, c, d) : t ? ne.e(c, I(["#\x3c", "" + w(b), "\x3e"], 0)) : null
  }
  return null
}, se = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = A([ob, !0, pb, !0, qb, !1, rb, !1]), f = null == a;
    if(f ? f : ka(E(a))) {
      b = ""
    }else {
      var f = w, h = new ha, g = new mb(h);
      a: {
        re(F(a), g, b);
        a = E(H(a));
        for(var m = null, n = 0, q = 0;;) {
          if(q < n) {
            var r = m.r(m, q);
            z(g, " ");
            re(r, g, b);
            q += 1
          }else {
            if(a = E(a)) {
              m = a, Sb(m) ? (a = kb(m), n = lb(m), m = a, r = N(a), a = n, n = r) : (r = F(m), z(g, " "), re(r, g, b), a = H(m), m = null, n = 0), q = 0
            }else {
              break a
            }
          }
        }
      }
      $a(g);
      b = "" + f(h)
    }
    return b
  }
  a.i = 0;
  a.g = function(a) {
    a = E(a);
    return b(a)
  };
  a.e = b;
  return a
}();
be.prototype.H = !0;
be.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
ub.prototype.H = !0;
ub.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
td.prototype.H = !0;
td.prototype.u = function(a, b, c) {
  return me(b, re, "[", " ", "]", c, a)
};
rc.prototype.H = !0;
rc.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
Dd.prototype.H = !0;
Dd.prototype.u = function(a, b, c) {
  return me(b, function(a) {
    return me(b, re, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
nc.prototype.H = !0;
nc.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
Db.prototype.H = !0;
Db.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
Vd.prototype.H = !0;
Vd.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
rd.prototype.H = !0;
rd.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
Yd.prototype.H = !0;
Yd.prototype.u = function(a, b, c) {
  return me(b, function(a) {
    return me(b, re, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
kd.prototype.H = !0;
kd.prototype.u = function(a, b, c) {
  return me(b, re, "[", " ", "]", c, a)
};
gc.prototype.H = !0;
gc.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
Cd.prototype.H = !0;
Cd.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
hc.prototype.H = !0;
hc.prototype.u = function(a, b) {
  return z(b, "()")
};
jc.prototype.H = !0;
jc.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
Xd.prototype.H = !0;
Xd.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
de.prototype.H = !0;
de.prototype.u = function(a, b, c) {
  return me(b, re, "(", " ", ")", c, a)
};
kd.prototype.fb = !0;
kd.prototype.gb = function(a, b) {
  return Yb.a(a, b)
};
td.prototype.fb = !0;
td.prototype.gb = function(a, b) {
  return Yb.a(a, b)
};
function te(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.yb = c;
  this.bb = d;
  this.f = 2153938944;
  this.q = 2
}
k = te.prototype;
k.w = function(a) {
  return a[da] || (a[da] = ++ea)
};
k.jb = function(a, b, c) {
  for(var d = E(this.bb), f = null, h = 0, g = 0;;) {
    if(g < h) {
      var m = f.r(f, g), n = O.b(m, 0, null), m = O.b(m, 1, null);
      m.j ? m.j(n, a, b, c) : m.call(null, n, a, b, c);
      g += 1
    }else {
      if(d = E(d)) {
        Sb(d) ? (f = kb(d), d = lb(d), n = f, h = N(f), f = n) : (f = F(d), n = O.b(f, 0, null), m = O.b(f, 1, null), m.j ? m.j(n, a, b, c) : m.call(null, n, a, b, c), d = H(d), f = null, h = 0), g = 0
      }else {
        return null
      }
    }
  }
};
k.ib = function(a, b, c) {
  return a.bb = R.b(this.bb, b, c)
};
k.u = function(a, b, c) {
  z(b, "#\x3cAtom: ");
  re(this.state, b, c);
  return z(b, "\x3e")
};
k.D = e("l");
k.pb = e("state");
k.t = function(a, b) {
  return a === b
};
var ve = function() {
  function a(a) {
    return new te(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var m = null;
      1 < arguments.length && (m = I(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, m)
    }
    function b(a, c) {
      var d = Vb(c) ? S.a(Jb, c) : c, f = Q.a(d, ue), d = Q.a(d, qb);
      return new te(a, d, f, null)
    }
    a.i = 1;
    a.g = function(a) {
      var c = F(a);
      a = G(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, I(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 1;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b
}();
function we(a, b) {
  var c = a.yb;
  if(p(c) && !p(c.c ? c.c(b) : c.call(null, b))) {
    throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(se.e(I([K(new B(null, "validate", "validate", 1233162959, null), new B(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  cb(a, c, b);
  return b
}
var xe = function() {
  function a(a, b, c, d, f) {
    return we(a, b.j ? b.j(a.state, c, d, f) : b.call(null, a.state, c, d, f))
  }
  function b(a, b, c, d) {
    return we(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return we(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return we(a, b.c ? b.c(a.state) : b.call(null, a.state))
  }
  var f = null, h = function() {
    function a(c, d, f, h, g, P) {
      var M = null;
      5 < arguments.length && (M = I(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, g, M)
    }
    function b(a, c, d, f, h, g) {
      return we(a, S.e(c, a.state, d, f, h, I([g], 0)))
    }
    a.i = 5;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var f = F(a);
      a = H(a);
      var h = F(a);
      a = H(a);
      var g = F(a);
      a = G(a);
      return b(c, d, f, h, g, a)
    };
    a.e = b;
    return a
  }(), f = function(f, m, n, q, r, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, m);
      case 3:
        return c.call(this, f, m, n);
      case 4:
        return b.call(this, f, m, n, q);
      case 5:
        return a.call(this, f, m, n, q, r);
      default:
        return h.e(f, m, n, q, r, I(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.i = 5;
  f.g = h.g;
  f.a = d;
  f.b = c;
  f.j = b;
  f.p = a;
  f.e = h.e;
  return f
}();
var ye, ze, Ae, Be;
function Ce() {
  return ca.navigator ? ca.navigator.userAgent : null
}
Be = Ae = ze = ye = !1;
var De;
if(De = Ce()) {
  var Ee = ca.navigator;
  ye = 0 == De.indexOf("Opera");
  ze = !ye && -1 != De.indexOf("MSIE");
  Ae = !ye && -1 != De.indexOf("WebKit");
  Be = !ye && !Ae && "Gecko" == Ee.product
}
var Fe = ye, Ge = ze, He = Be, Ie = Ae, Je;
a: {
  var Ke = "", Le;
  if(Fe && ca.opera) {
    var Me = ca.opera.version, Ke = "function" == typeof Me ? Me() : Me
  }else {
    if(He ? Le = /rv\:([^\);]+)(\)|;)/ : Ge ? Le = /MSIE\s+([^\);]+)(\)|;)/ : Ie && (Le = /WebKit\/(\S+)/), Le) {
      var Ne = Le.exec(Ce()), Ke = Ne ? Ne[1] : ""
    }
  }
  if(Ge) {
    var Oe, Pe = ca.document;
    Oe = Pe ? Pe.documentMode : void 0;
    if(Oe > parseFloat(Ke)) {
      Je = String(Oe);
      break a
    }
  }
  Je = Ke
}
var Qe = {};
function Re(a) {
  var b;
  if(!(b = Qe[a])) {
    b = 0;
    for(var c = fa(String(Je)).split("."), d = fa(String(a)).split("."), f = Math.max(c.length, d.length), h = 0;0 == b && h < f;h++) {
      var g = c[h] || "", m = d[h] || "", n = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
      do {
        var r = n.exec(g) || ["", "", ""], v = q.exec(m) || ["", "", ""];
        if(0 == r[0].length && 0 == v[0].length) {
          break
        }
        b = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == v[2].length) ? -1 : (0 == r[2].length) > (0 == v[2].length) ? 1 : 0) || (r[2] < v[2] ? -1 : r[2] > v[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Qe[a] = 0 <= b
  }
  return b
}
;Ge && Re("9");
!Ie || Re("528");
He && Re("1.9b") || Ge && Re("8") || Fe && Re("9.5") || Ie && Re("528");
He && !Re("8") || Ge && Re("9");
var Se = new V(null, "backspace", "backspace"), rb = new V(null, "dup", "dup"), Te = new V(null, "break", "break"), Ue = new V(null, "submit", "submit"), Ve = new V(null, "unload", "unload"), We = new V(null, "qwe", "qwe"), Xe = new V(null, "DOMFocusOut", "DOMFocusOut"), X = new V(null, "r", "r"), Ye = new V(null, "help", "help"), Ze = new V(null, "pnodes", "pnodes"), $e = new V(null, "delete", "delete"), af = new V(null, "leftbracket", "leftbracket"), bf = new V(null, "default", "default"), cf = 
new V(null, "vector", "vector"), df = new V(null, "alt", "alt"), ef = new V(null, "dragstart", "dragstart"), ff = new V(null, "ppath", "ppath"), gf = new V(null, "context", "context"), hf = new V(null, "cut", "cut"), jf = new V(null, "conj", "conj"), kf = new V(null, "tab", "tab"), lf = new V(null, "losecapture", "losecapture"), mf = new V(null, "map", "map"), nf = new V(null, "div", "div"), of = new V("zip", "branch?", "zip/branch?"), pf = new V(null, "mousedown", "mousedown"), qf = new V(null, 
"z", "z"), rf = new V(null, "touchmove", "touchmove"), sf = new V(null, "touchcancel", "touchcancel"), tf = new V(null, "keypress", "keypress"), uf = new V(null, "y", "y"), vf = new V(null, "paste", "paste"), wf = new V(null, "inc", "inc"), xf = new V(null, "mouseover", "mouseover"), yf = new V(null, "content", "content"), zf = new V(null, "scrolllock", "scrolllock"), Af = new V(null, "home", "home"), Bf = new V(null, "namespaces", "namespaces"), Cf = new V(null, "key", "key"), Df = new V(null, "class", 
"class"), Ef = new V(null, "x", "x"), Ff = new V(null, "propertychange", "propertychange"), Gf = new V(null, "test", "test"), Hf = new V(null, "test1", "test1"), If = new V(null, "a", "a"), Jf = new V(null, "rightbracket", "rightbracket"), Kf = new V(null, "6", "6"), Lf = new V(null, "test3", "test3"), Mf = new V(null, "action", "action"), Nf = new V(null, "capslock", "capslock"), Of = new V(null, "changed?", "changed?"), Pf = new V(null, "leftmeta", "leftmeta"), Qf = new V(null, "pageshow", "pageshow"), 
Rf = new V(null, "7", "7"), Sf = new V(null, "popstate", "popstate"), Tf = new V(null, "test2", "test2"), Uf = new V(null, "4", "4"), Vf = new V(null, "c", "c"), Wf = new V(null, "contextmenu", "contextmenu"), Xf = new V(null, "resize", "resize"), Yf = new V(null, "mouseout", "mouseout"), Zf = new V(null, "5", "5"), $f = new V(null, "dragover", "dragover"), ob = new V(null, "flush-on-newline", "flush-on-newline"), ag = new V(null, "click", "click"), bg = new V(null, "b", "b"), cg = new V(null, "error", 
"error"), dg = new V(null, "end", "end"), eg = new V(null, "selectstart", "selectstart"), fg = new V(null, "cons", "cons"), gg = new V(null, "f", "f"), hg = new V(null, "semicolon", "semicolon"), ig = new V(null, "pagedown", "pagedown"), jg = new V(null, "load", "load"), kg = new V(null, "numlock", "numlock"), lg = new V(null, "style", "style"), mg = new V(null, "touchend", "touchend"), ng = new V(null, "1", "1"), og = new V("iiiiioiooooo.ui", "apostrophe", "iiiiioiooooo.ui/apostrophe"), pg = new V(null, 
"g", "g"), qg = new V(null, "blur", "blur"), rg = new V(null, "change", "change"), sg = new V(null, "0", "0"), tg = new V(null, "3", "3"), ug = new V(null, "d", "d"), vg = new V(null, "wer", "wer"), wg = new V(null, "update-display", "update-display"), xg = new V(null, "hashchange", "hashchange"), yg = new V(null, "2", "2"), zg = new V(null, "equals", "equals"), Ag = new V(null, "e", "e"), Bg = new V(null, "mouseleave", "mouseleave"), Cg = new V(null, "enter", "enter"), Dg = new V(null, "tilde", 
"tilde"), Eg = new V(null, "focus", "focus"), Fg = new V(null, "as", "as"), Gg = new V(null, "forwardslash", "forwardslash"), Hg = new V(null, "version", "version"), Ig = new V(null, "keydown", "keydown"), Jg = new V(null, "ctrl", "ctrl"), Y = new V(null, "l", "l"), Kg = new V(null, "k", "k"), Lg = new V(null, "connect", "connect"), Mg = new V(null, "pageup", "pageup"), Ng = new V(null, "j", "j"), Z = new V(null, "added", "added"), Og = new V(null, "mouseup", "mouseup"), Pg = new V(null, "m", "m"), 
Qg = new V(null, "touchstart", "touchstart"), Rg = new V(null, "i", "i"), Sg = new V(null, "dragleave", "dragleave"), Tg = new V(null, "n", "n"), Ug = new V(null, "clojure.core", "clojure.core"), Vg = new V(null, "dec", "dec"), Wg = new V(null, "h", "h"), Xg = new V(null, "drop", "drop"), Yg = new V(null, "comma", "comma"), Zg = new V(null, "shift", "shift"), $g = new V(null, "o", "o"), ah = new V("zip", "make-node", "zip/make-node"), bh = new V(null, "pagehide", "pagehide"), ch = new V(null, "space", 
"space"), dh = new V(null, "right", "right"), eh = new V(null, "modify", "modify"), fh = new V(null, "message", "message"), gh = new V(null, "left", "left"), hh = new V(null, "keymap", "keymap"), ih = new V(null, "juxt", "juxt"), jh = new V(null, "keyup", "keyup"), kh = new V(null, "keypath", "keypath"), t = new V(null, "else", "else"), pb = new V(null, "readably", "readably"), lh = new V(null, "9", "9"), mh = new V(null, "mouseenter", "mouseenter"), nh = new V(null, "list", "list"), oh = new V(null, 
"insert", "insert"), ue = new V(null, "validator", "validator"), qb = new V(null, "meta", "meta"), ph = new V(null, "8", "8"), qh = new V(null, "rightmeta", "rightmeta"), rh = new V(null, "v", "v"), sh = new V(null, "mousemove", "mousemove"), th = new V(null, "backslash", "backslash"), uh = new V(null, "keycode", "keycode"), vh = new V(null, "poi", "poi"), wh = new V(null, "unknown", "unknown"), xh = new V(null, "open", "open"), yh = new V(null, "w", "w"), zh = new V(null, "scroll", "scroll"), Ah = 
new V(null, "input", "input"), Bh = new V(null, "modified", "modified"), Ch = new V(null, "t", "t"), Dh = new V(null, "deactivate", "deactivate"), Eh = new V(null, "dot", "dot"), Fh = new V(null, "u", "u"), Gh = new V(null, "down", "down"), Hh = new V(null, "esc", "esc"), Ih = new V(null, "copy", "copy"), Jh = new V(null, "q", "q"), Kh = new V(null, "up", "up"), Lh = new V(null, "DOMFocusIn", "DOMFocusIn"), Mh = new V(null, "selected", "selected"), Nh = new V(null, "select", "select"), Oh = new V(null, 
"classes", "classes"), Ph = new V(null, "minus", "minus"), Qh = new V(null, "dblclick", "dblclick"), Rh = new V(null, "p", "p"), Sh = new V(null, "event", "event"), Th = new V(null, "s", "s"), Uh = new V(null, "dragenter", "dragenter"), Vh = new V("zip", "children", "zip/children"), Wh = new V(null, "readystatechange", "readystatechange");
function Xh(a) {
  return Mb(W([a, null]), A([ah, function(a, c) {
    return Mb(hb(Zb.b(gb, fb(pd), c)), T(a))
  }, Vh, E, of, Rb]))
}
function $(a) {
  return a.c ? a.c(0) : a.call(null, 0)
}
function Yh(a) {
  return of.call(null, T(a)).call(null, $(a))
}
function Zh(a) {
  if(p(Yh(a))) {
    return Vh.call(null, T(a)).call(null, $(a))
  }
  throw"called children on a leaf node";
}
function $h(a, b, c) {
  return ah.call(null, T(a)).call(null, b, c)
}
function ai(a) {
  if(p(Yh(a))) {
    var b = O.b(a, 0, null), c = O.b(a, 1, null), d = Zh(a), f = O.b(d, 0, null), h = cc(d, 1);
    return p(d) ? Mb(W([f, A([Y, pd, Ze, p(c) ? Hb.a(Ze.call(null, c), b) : W([b]), ff, c, X, h])]), T(a)) : null
  }
  return null
}
function bi(a) {
  var b = O.b(a, 0, null), c = O.b(a, 1, null), d = Vb(c) ? S.a(Jb, c) : c, c = Q.a(d, Y), f = Q.a(d, ff), h = Q.a(d, Ze), g = Q.a(d, X), d = Q.a(d, Of);
  return p(h) ? (h = Ga(h), Mb(p(d) ? W([$h(a, h, xc.a(c, J(b, g))), p(f) ? R.b(f, Of, !0) : f]) : W([h, f]), T(a))) : null
}
function ci(a) {
  var b = O.b(a, 0, null), c = O.b(a, 1, null), c = Vb(c) ? S.a(Jb, c) : c, d = Q.a(c, Y), f = Q.a(c, X), h = O.b(f, 0, null), g = cc(f, 1);
  return p(p(c) ? f : c) ? Mb(W([h, R.e(c, Y, Hb.a(d, b), I([X, g], 0))]), T(a)) : null
}
function di(a) {
  var b = O.b(a, 0, null), c = O.b(a, 1, null), c = Vb(c) ? S.a(Jb, c) : c, d = Q.a(c, Y), f = Q.a(c, X);
  return p(p(c) ? f : c) ? Mb(W([Gb(f), R.e(c, Y, S.j(Hb, d, b, ie(f)), I([X, null], 0))]), T(a)) : a
}
function ei(a) {
  var b = O.b(a, 0, null), c = O.b(a, 1, null), c = Vb(c) ? S.a(Jb, c) : c, d = Q.a(c, Y), f = Q.a(c, X);
  return p(p(c) ? E(d) : c) ? Mb(W([Ga(d), R.e(c, Y, Ha(d), I([X, J(b, f)], 0))]), T(a)) : null
}
function fi(a) {
  var b = O.b(a, 0, null), c = O.b(a, 1, null), c = Vb(c) ? S.a(Jb, c) : c, d = Q.a(c, Y), f = Q.a(c, X);
  return p(p(c) ? E(d) : c) ? Mb(W([F(d), R.e(c, Y, pd, I([X, xc.e(G(d), W([b]), I([f], 0))], 0))]), T(a)) : a
}
function gi(a, b) {
  var c = O.b(a, 0, null), d = O.b(a, 1, null), d = Vb(d) ? S.a(Jb, d) : d, f = Q.a(d, X);
  if(null == d) {
    throw"Insert at top";
  }
  return Mb(W([c, R.e(d, X, J(b, f), I([Of, !0], 0))]), T(a))
}
function hi(a, b) {
  O.b(a, 0, null);
  var c = O.b(a, 1, null);
  return Mb(W([b, R.b(c, Of, !0)]), T(a))
}
function ii(a, b) {
  return hi(a, $h(a, $(a), xc.a(Zh(a), W([b]))))
}
function ji(a) {
  if(wb.a(dg, a.c ? a.c(1) : a.call(null, 1))) {
    return a
  }
  var b;
  b = Yh(a);
  b = p(b) ? ai(a) : b;
  if(p(b)) {
    return b
  }
  b = ci(a);
  if(p(b)) {
    return b
  }
  for(;;) {
    if(p(bi(a))) {
      b = ci(bi(a));
      if(p(b)) {
        return b
      }
      a = bi(a)
    }else {
      return W([$(a), dg])
    }
  }
}
function ki(a) {
  var b = ei(a);
  if(p(b)) {
    for(a = b;;) {
      if(b = Yh(a), b = p(b) ? ai(a) : b, p(b)) {
        a = di(b)
      }else {
        return a
      }
    }
  }else {
    return bi(a)
  }
}
function Fc(a) {
  return wb.a(dg, a.c ? a.c(1) : a.call(null, 1))
}
function li(a) {
  O.b(a, 0, null);
  var b = O.b(a, 1, null), b = Vb(b) ? S.a(Jb, b) : b, c = Q.a(b, Y), d = Q.a(b, ff), f = Q.a(b, Ze), h = Q.a(b, X);
  if(null == b) {
    throw"Remove at top";
  }
  if(0 < N(c)) {
    for(a = Mb(W([Ga(c), R.e(b, Y, Ha(c), I([Of, !0], 0))]), T(a));;) {
      if(b = Yh(a), b = p(b) ? ai(a) : b, p(b)) {
        a = di(b)
      }else {
        return a
      }
    }
  }else {
    return Mb(W([$h(a, Ga(f), h), p(d) ? R.b(d, Of, !0) : d]), T(a))
  }
}
;function mi(a) {
  var b;
  b = a ? ((b = a.f & 33554432) ? b : a.Eb) ? !0 : a.f ? !1 : s(Xa, a) : s(Xa, a);
  return b ? nh : a instanceof B ? "" + w(a) : Rb(a) ? cf : Qb(a) ? mf : bf ? wh : null
}
var oi = function ni(b, c, d, f) {
  return Zb.b(function(f, g) {
    return 0 < c ? Hb.a(f, p(p(g) ? Yh(g) : g) ? p(function() {
      var b;
      b = (b = null == T($(g))) ? b : xh.call(null, T($(g)));
      return p(b) ? ka(ah.call(null, T($(g)))) : b
    }()) ? d.a ? d.a(mi($(ai(g))), ni(b, c - 1, d, ai(g))) : d.call(null, mi($(ai(g))), ni(b, c - 1, d, ai(g))) : d.b ? d.b(mi($(ai(g))), null, null) : d.call(null, mi($(ai(g))), null, null) : d.c ? d.c($(g)) : d.call(null, $(g))) : f
  }, pd, Lc(b, le(Dc, Pc(ci, f))))
};
function pi(a) {
  return Mb(W([a, null]), A([ah, function(a, c) {
    return Mb(c, ge.e(I([function() {
      var c = T(a);
      return p(c) ? c : Hd
    }(), A([xh, !0])], 0)))
  }, Vh, function(a) {
    return Qb(a) ? E(a) : a
  }, of, function(a) {
    var c = Vb(a);
    return c ? c : (c = Qb(a)) ? c : Rb(a)
  }]))
}
var qi = function() {
  function a(a, b, c, m, n) {
    var q = null == b;
    return(q ? q : wb.a($(a), $(n))) ? m : d.b(p(c) ? c : b, J(p(c) ? dh : Gh, m), n)
  }
  function b(a, b, c) {
    return d.p(a, bi(a), ei(a), b, c)
  }
  function c(a, b) {
    return d.p(b, bi(b), ei(b), pd, a)
  }
  var d = null, d = function(d, h, g, m, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, g);
      case 5:
        return a.call(this, d, h, g, m, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.p = a;
  return d
}(), ri = function() {
  function a(a, b) {
    return p(b) ? c.c(b) : a
  }
  function b(a) {
    return c.a(a, bi(a))
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function si(a, b) {
  return ri.c(p(a) ? ii(b, Mb(a, ge.e(I([T(a), A([xh, !1, Hg, N(b) + 1])], 0)))) : b)
}
function ti(a) {
  return Yc.b(a, W([kh]), function(a) {
    return sd.b(a, 0, N(a) - 1)
  })
}
function ui(a, b) {
  return R.b(b, kh, W([hh]))
}
function vi(a, b) {
  return b
}
var wi = function() {
  function a(a, b) {
    return p(b) ? hi(a, Mb($(a), Yc.b(b, W([xh]), ka))) : a
  }
  function b(a) {
    return c.a(a, T($(a)))
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function xi(a) {
  return function(b) {
    var c = a.c ? a.c(b) : a.call(null, b);
    return p(c) ? c : b
  }
}
function yi(a) {
  return function(b) {
    var c;
    c = (c = null == T($(b))) ? c : xh.call(null, T($(b)));
    return p(c) ? a.c ? a.c(b) : a.call(null, b) : b
  }
}
function zi(a) {
  return function(b) {
    var c;
    p(b) ? (c = T($(b)), c = Q.b(c, of, Ub) === Ub ? !1 : !0) : c = b;
    return p(c) ? a.c ? a.c($(b)) : a.call(null, $(b)) : a.c ? a.c(b) : a.call(null, b)
  }
}
function Ai(a, b) {
  return R.b(Yc.b(a, W([Eg]), xi(zi(b))), Mf, Nh)
}
var Bi = function() {
  function a(a, b) {
    return c.c(R.b(Yc.b(a, W([Eg]), xi(zi(b))), Mf, eh))
  }
  function b(a) {
    return R.b(a, Bh, Eg.call(null, a))
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function Ci(a, b) {
  return Ai(b, ei)
}
function Di(a, b) {
  return Ai(b, ci)
}
function Ei(a, b) {
  return Ai(b, bi)
}
function Fi(a, b) {
  return Ai(b, yi(ai))
}
function Gi(a, b) {
  return Ai(b, yi(ji))
}
function Hi(a, b) {
  return Ai(b, ki)
}
function Ii(a, b) {
  var c = Yc.b(b, W([Eg]), xi(wi));
  return wb.a(T($(Eg.call(null, c))), T($(Eg.call(null, b)))) ? R.b(c, Mf, Nh) : R.e(c, Mf, eh, I([Bh, Eg.call(null, c)], 0))
}
function Ji(a, b) {
  return Bi.a(b, li)
}
function Ki(a, b) {
  return Bi.a(b, function(a) {
    var b = O.b(a, 0, null), f = O.b(a, 1, null), f = Vb(f) ? S.a(Jb, f) : f, h = Q.a(f, Y);
    if(null == f) {
      throw"Insert at top";
    }
    return Mb(W([b, R.e(f, Y, Hb.a(h, "node"), I([Of, !0], 0))]), T(a))
  })
}
function Li(a, b) {
  return Bi.a(b, function(a) {
    return gi(a, "node")
  })
}
function Mi(a, b) {
  return Ai(b, di)
}
function Ni(a, b) {
  return Ai(b, fi)
}
function Oi(a, b) {
  return Ai(b, ri)
}
function Pi(a, b) {
  return R.e(Yc.b(b, W([Eg]), function(a) {
    return hi(bi(a), $(a))
  }), Mf, eh, I([Bh, bi(Eg.call(null, b))], 0))
}
function Qi(a, b) {
  return R.b(Yc.b(b, W([Eg]), function(a) {
    var b = $(a), f;
    f = kc($(a));
    f = hb(Zb.b(gb, fb(pd), f));
    return hi(a, $h(a, b, Zh(Xh(f))))
  }), Mf, eh)
}
function Ri(a, b) {
  return R.b(Yc.b(b, W([Eg]), function(a) {
    return hi(a, tb.c(S.a(w, Zh(a))))
  }), Mf, eh)
}
function Si(a, b) {
  return Yc.b(b, W([Eg]), ri)
}
function Ti(a, b) {
  return R.b(b, Eg, a)
}
var Ui = function() {
  function a(a, b) {
    return F(Sc(Gc.a(Ic.a(wb, a), $), le(Ec(), Pc(ji, b))))
  }
  function b(a) {
    return function(b, h) {
      return Ai(h, Ic.a(c, a))
    }
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function Vi(a, b) {
  var c = Vc.b(b, Hb.a(kh.call(null, b), Cf.call(null, b)), vi).call(null, a, ti(b));
  return si(p(c) ? c : a, a)
}
function Wi(a) {
  return $(di(ai(ri.c(a))))
}
var Xi = function() {
  function a(a) {
    return si(R.e(Wi(a), Eg, ji(ji(gf.call(null, Wi(a)))), I([Mh, W([ji(ji(ji(ji(gf.call(null, Wi(a)))))), ji(ji(ji(ji(gf.call(null, Wi(a)))))), ci(ci(ai(ci(ai(ci(ai(gf.call(null, Wi(a))))))))), ci(ci(ci(ai(ci(ai(ci(ai(gf.call(null, Wi(a))))))))))]), We, 2, vg, "arse"], 0)), a)
  }
  function b(a, b) {
    return f.b(si(R.e(a, gf, bi(Ui.a(Hf, b)), I([Eg, bi(di(ai(b))), Mh, W([3, 4]), We, 1, vh, "qwe"], 0)), b), Wi(b), null)
  }
  function c(a) {
    return f.a(Wi(a), a)
  }
  function d() {
    return f.c(pi(W([Mb($d([We, Ye, gf, Bf, Gf, Hf, Lf, Mf, Tf, Eg, Ig, hh, jh, kh, Mh], [0, W(["iiiiioiooooo Clojure structure editor (barely functioning sketch of)", "This is an experiment in making a functional code editor.", "https://www.youtube.com/watch?v\x3d2Op3QLzMgSY\x26feature\x3dplayer_detailpage#t\x3d2077s", "Lecture 1A | MIT 6.001 Structure and Interpretation, 1986 - 35m25s", "\n          The idea here is to manipulate code\n          at the expression level, not at the text level.\n          This is very primitive right now,\n          it doesn't do much yet, just testing ideas, everything will change, or it will be abandoned.\n          Works best in Chrome, keyboard-only! doesn't work on mobile browsers.\n          Plan: SVG view,\n          make as front-end for Session REPL. What can you do now ? Navigate the code and do basic editing.\n          "]), 
    "poi", A([Ug, A([Vf, A([$g, A([Tg, A([Th, fg, Vf, ih, Ng, jf])])]), wf, xb, Vg, $b])]), Mb(K(new B(null, "+", "+", -1640531484, null), 1, 3), A([xh, !0])), Mb(K(K(new B(null, "fn", "fn", -1640528255, null), W([new B(null, "x", "x", -1640531407, null)]), K(new B(null, "list", "list", -1637209513, null), K(new B(null, "rest", "rest", -1637034611, null), new B(null, "x", "x", -1640531407, null)), K(new B(null, "cons", "cons", -1637472022, null), K(new B(null, "read-string", "read-string", 641340897, 
    null), K(new B(null, "first", "first", -1543091095, null), new B(null, "x", "x", -1640531407, null))), W([new B(null, "x", "x", -1640531407, null)])))), K(new B(null, "quote", "quote", -1532577739, null), W(["quote", new B(null, "fn", "fn", -1640528255, null), W([new B(null, "x", "x", -1640531407, null)]), K(new B(null, "list", "list", -1637209513, null), K(new B(null, "rest", "rest", -1637034611, null), new B(null, "x", "x", -1640531407, null)), K(new B(null, "cons", "cons", -1637472022, null), 
    K(new B(null, "read-string", "read-string", 641340897, null), K(new B(null, "first", "first", -1543091095, null), new B(null, "x", "x", -1640531407, null))), W([new B(null, "x", "x", -1640531407, null)])))]))), A([xh, !0])), Mb(K(W([new B(null, "+", "+", -1640531484, null), new B(null, "-", "-", -1640531482, null), new B(null, "/", "/", -1640531480, null), new B(null, "*", "*", -1640531485, null)]), W([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), pd), A([xh, !0])), Nh, Mb(K(K(new B(null, "defn", "defn", -1637452094, 
    null), new B(null, "zipper", "zipper", 1952642069, null), "Creates a new zipper structure.\n\n  branch? is a fn that, given a node, returns true if can have\n  children, even if it currently doesn't.\n\n  children is a fn that, given a branch node, returns a seq of its\n  children.\n\n  make-node is a fn that, given an existing node and a seq of\n  children, returns a new branch node with the supplied children.\n  root is the root node.", A([Z, "1.0"]), W([new B(null, "branch?", "branch?", -1502803818, 
    null), new B(null, "children", "children", 18995128, null), new B(null, "make-node", "make-node", -420558790, null), new B(null, "root", "root", -1637025125, null)]), Mb(W([new B(null, "root", "root", -1637025125, null), null]), A([ah, new B(null, "make-node", "make-node", -420558790, null), Vh, new B(null, "children", "children", 18995128, null), of, new B(null, "branch?", "branch?", -1502803818, null)]))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "seq-zip", "seq-zip", 340540012, 
    null), "Returns a zipper for nested sequences, given a root sequence", A([Z, "1.0"]), W([new B(null, "root", "root", -1637025125, null)]), K(new B(null, "zipper", "zipper", 1952642069, null), new B(null, "seq?", "seq?", -1637004935, null), new B(null, "identity", "identity", -1776293257, null), K(new B(null, "fn", "fn", -1640528255, null), W([new B(null, "node", "node", -1637144645, null), new B(null, "children", "children", 18995128, null)]), K(new B(null, "with-meta", "with-meta", -774206363, 
    null), new B(null, "children", "children", 18995128, null), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "node", "node", -1637144645, null)))), new B(null, "root", "root", -1637025125, null))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "vector-zip", "vector-zip", -1623241392, null), "Returns a zipper for nested vectors, given a root vector", A([Z, "1.0"]), W([new B(null, "root", "root", -1637025125, null)]), K(new B(null, "zipper", "zipper", 1952642069, null), 
    new B(null, "vector?", "vector?", -1302740715, null), new B(null, "seq", "seq", -1640417768, null), K(new B(null, "fn", "fn", -1640528255, null), W([new B(null, "node", "node", -1637144645, null), new B(null, "children", "children", 18995128, null)]), K(new B(null, "with-meta", "with-meta", -774206363, null), K(new B(null, "vec", "vec", -1640414899, null), new B(null, "children", "children", 18995128, null)), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "node", "node", -1637144645, 
    null)))), new B(null, "root", "root", -1637025125, null))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "xml-zip", "xml-zip", 707506724, null), "Returns a zipper for xml elements (as from xml/parse),\n  given a root element", A([Z, "1.0"]), W([new B(null, "root", "root", -1637025125, null)]), K(new B(null, "zipper", "zipper", 1952642069, null), K(new B(null, "complement", "complement", 2113019871, null), new B(null, "string?", "string?", 772676615, null)), K(new B(null, "comp", 
    "comp", -1637472056, null), new B(null, "seq", "seq", -1640417768, null), yf), K(new B(null, "fn", "fn", -1640528255, null), W([new B(null, "node", "node", -1637144645, null), new B(null, "children", "children", 18995128, null)]), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "node", "node", -1637144645, null), yf, K(new B(null, "and", "and", -1640434800, null), new B(null, "children", "children", 18995128, null), K(new B(null, "apply", "apply", -1547502297, null), new B(null, 
    "vector", "vector", 1834048252, null), new B(null, "children", "children", 18995128, null))))), new B(null, "root", "root", -1637025125, null))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "node", "node", -1637144645, null), "Returns the node at loc", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "loc", "loc", -1640424199, null), 0)), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "branch?", "branch?", -1502803818, null), "Returns true if the node at loc is a branch", 
    A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(K(of, K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null))), K(new B(null, "node", "node", -1637144645, null), new B(null, "loc", "loc", -1640424199, null)))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "children", "children", 18995128, null), "Returns a seq of the children of node at loc, which must be a branch", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, 
    null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "branch?", "branch?", -1502803818, null), new B(null, "loc", "loc", -1640424199, null)), K(K(Vh, K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null))), K(new B(null, "node", "node", -1637144645, null), new B(null, "loc", "loc", -1640424199, null))), K(new B(null, "throw", "throw", -1530191713, null), K(new B(null, "Exception.", "Exception.", -961310824, null), "called children on a leaf node")))), 
    K(new B(null, "defn", "defn", -1637452094, null), new B(null, "make-node", "make-node", -420558790, null), "Returns a new branch node, given an existing node and new\n  children. The loc is only used to supply the constructor.", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null), new B(null, "node", "node", -1637144645, null), new B(null, "children", "children", 18995128, null)]), K(K(ah, K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null))), 
    new B(null, "node", "node", -1637144645, null), new B(null, "children", "children", 18995128, null))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "path", "path", -1637098018, null), "Returns a seq of nodes leading to this loc", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(Ze, K(new B(null, "loc", "loc", -1640424199, null), 1))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "lefts", "lefts", -1537680635, null), "Returns a seq of the left siblings of this loc", 
    A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "seq", "seq", -1640417768, null), K(Y, K(new B(null, "loc", "loc", -1640424199, null), 1)))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "rights", "rights", 1723333520, null), "Returns a seq of the right siblings of this loc", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(X, K(new B(null, "loc", "loc", -1640424199, null), 1))), K(new B(null, "defn", "defn", -1637452094, null), 
    new B(null, "down", "down", -1637441957, null), "Returns the loc of the leftmost child of the node at this loc, or\n  nil if no children", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "when", "when", -1636883213, null), K(new B(null, "branch?", "branch?", -1502803818, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "let", "let", -1640424492, null), W([W([new B(null, "node", "node", -1637144645, null), new B(null, "path", "path", -1637098018, 
    null)]), new B(null, "loc", "loc", -1640424199, null), W([new B(null, "c", "c", -1640531428, null), new B(null, "\x26", "\x26", -1640531489, null), new B(null, "cnext", "cnext", -1545725041, null), Fg, new B(null, "cs", "cs", -1640528343, null)]), K(new B(null, "children", "children", 18995128, null), new B(null, "loc", "loc", -1640424199, null))]), K(new B(null, "when", "when", -1636883213, null), new B(null, "cs", "cs", -1640528343, null), K(new B(null, "with-meta", "with-meta", -774206363, 
    null), W([new B(null, "c", "c", -1640531428, null), A([Y, pd, Ze, K(new B(null, "if", "if", -1640528170, null), new B(null, "path", "path", -1637098018, null), K(new B(null, "conj", "conj", -1637472031, null), K(Ze, new B(null, "path", "path", -1637098018, null)), new B(null, "node", "node", -1637144645, null)), W([new B(null, "node", "node", -1637144645, null)])), ff, new B(null, "path", "path", -1637098018, null), X, new B(null, "cnext", "cnext", -1545725041, null)])]), K(new B(null, "meta", 
    "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null))))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "up", "up", -1640527788, null), "Returns the loc of the parent of the node at this loc, or nil if at\n  the top", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "let", "let", -1640424492, null), W([W([new B(null, "node", "node", -1637144645, null), A([new B(null, "l", "l", -1640531419, null), Y, new B(null, "ppath", "ppath", 
    -1533663666, null), ff, new B(null, "pnodes", "pnodes", 1670926842, null), Ze, new B(null, "r", "r", -1640531413, null), X, new B(null, "changed?", "changed?", -208114236, null), Of, Fg, new B(null, "path", "path", -1637098018, null)])]), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "when", "when", -1636883213, null), new B(null, "pnodes", "pnodes", 1670926842, null), K(new B(null, "let", "let", -1640424492, null), W([new B(null, "pnode", "pnode", -1533710293, null), K(new B(null, 
    "peek", "peek", -1637094636, null), new B(null, "pnodes", "pnodes", 1670926842, null))]), K(new B(null, "with-meta", "with-meta", -774206363, null), K(new B(null, "if", "if", -1640528170, null), new B(null, "changed?", "changed?", -208114236, null), W([K(new B(null, "make-node", "make-node", -420558790, null), new B(null, "loc", "loc", -1640424199, null), new B(null, "pnode", "pnode", -1533710293, null), K(new B(null, "concat", "concat", 1299640525, null), new B(null, "l", "l", -1640531419, null), 
    K(new B(null, "cons", "cons", -1637472022, null), new B(null, "node", "node", -1637144645, null), new B(null, "r", "r", -1640531413, null)))), K(new B(null, "and", "and", -1640434800, null), new B(null, "ppath", "ppath", -1533663666, null), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "ppath", "ppath", -1533663666, null), Of, !0))]), W([new B(null, "pnode", "pnode", -1533710293, null), new B(null, "ppath", "ppath", -1533663666, null)])), K(new B(null, "meta", "meta", -1637183554, 
    null), new B(null, "loc", "loc", -1640424199, null))))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "root", "root", -1637025125, null), "zips all the way up and returns the root node, reflecting any\n changes.", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "\x3d", "\x3d", -1640531466, null), dg, K(new B(null, "loc", "loc", -1640424199, null), 1)), K(new B(null, "node", "node", -1637144645, null), 
    new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "let", "let", -1640424492, null), W([new B(null, "p", "p", -1640531415, null), K(new B(null, "up", "up", -1640527788, null), new B(null, "loc", "loc", -1640424199, null))]), K(new B(null, "if", "if", -1640528170, null), new B(null, "p", "p", -1640531415, null), K(new B(null, "recur", "recur", -1532142362, null), new B(null, "p", "p", -1640531415, null)), K(new B(null, "node", "node", -1637144645, null), new B(null, "loc", "loc", -1640424199, 
    null)))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "right", "right", -1532019755, null), "Returns the loc of the right sibling of the node at this loc, or nil", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "let", "let", -1640424492, null), W([W([new B(null, "node", "node", -1637144645, null), A([new B(null, "l", "l", -1640531419, null), Y, W([new B(null, "r", "r", -1640531413, null), new B(null, "\x26", "\x26", -1640531489, null), new B(null, 
    "rnext", "rnext", -1531872226, null), Fg, new B(null, "rs", "rs", -1640527878, null)]), X, Fg, new B(null, "path", "path", -1637098018, null)])]), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "when", "when", -1636883213, null), K(new B(null, "and", "and", -1640434800, null), new B(null, "path", "path", -1637098018, null), new B(null, "rs", "rs", -1640527878, null)), K(new B(null, "with-meta", "with-meta", -774206363, null), W([new B(null, "r", "r", -1640531413, null), K(new B(null, 
    "assoc", "assoc", -1547409970, null), new B(null, "path", "path", -1637098018, null), Y, K(new B(null, "conj", "conj", -1637472031, null), new B(null, "l", "l", -1640531419, null), new B(null, "node", "node", -1637144645, null)), X, new B(null, "rnext", "rnext", -1531872226, null))]), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null)))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "rightmost", "rightmost", 1086064984, null), "Returns the loc of the rightmost sibling of the node at this loc, or self", 
    A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "let", "let", -1640424492, null), W([W([new B(null, "node", "node", -1637144645, null), A([new B(null, "l", "l", -1640531419, null), Y, new B(null, "r", "r", -1640531413, null), X, Fg, new B(null, "path", "path", -1637098018, null)])]), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "and", "and", -1640434800, null), new B(null, "path", "path", -1637098018, 
    null), new B(null, "r", "r", -1640531413, null)), K(new B(null, "with-meta", "with-meta", -774206363, null), W([K(new B(null, "last", "last", -1637217201, null), new B(null, "r", "r", -1640531413, null)), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "path", "path", -1637098018, null), Y, K(new B(null, "apply", "apply", -1547502297, null), new B(null, "conj", "conj", -1637472031, null), new B(null, "l", "l", -1640531419, null), new B(null, "node", "node", -1637144645, null), 
    K(new B(null, "butlast", "butlast", -1399430576, null), new B(null, "r", "r", -1640531413, null))), X, null)]), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null))), new B(null, "loc", "loc", -1640424199, null)))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "left", "left", -1637213760, null), "Returns the loc of the left sibling of the node at this loc, or nil", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, 
    "let", "let", -1640424492, null), W([W([new B(null, "node", "node", -1637144645, null), A([new B(null, "l", "l", -1640531419, null), Y, new B(null, "r", "r", -1640531413, null), X, Fg, new B(null, "path", "path", -1637098018, null)])]), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "when", "when", -1636883213, null), K(new B(null, "and", "and", -1640434800, null), new B(null, "path", "path", -1637098018, null), K(new B(null, "seq", "seq", -1640417768, null), new B(null, "l", "l", 
    -1640531419, null))), K(new B(null, "with-meta", "with-meta", -774206363, null), W([K(new B(null, "peek", "peek", -1637094636, null), new B(null, "l", "l", -1640531419, null)), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "path", "path", -1637098018, null), Y, K(new B(null, "pop", "pop", -1640420342, null), new B(null, "l", "l", -1640531419, null)), X, K(new B(null, "cons", "cons", -1637472022, null), new B(null, "node", "node", -1637144645, null), new B(null, "r", "r", -1640531413, 
    null)))]), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null)))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "leftmost", "leftmost", 78641603, null), "Returns the loc of the leftmost sibling of the node at this loc, or self", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "let", "let", -1640424492, null), W([W([new B(null, "node", "node", -1637144645, null), A([new B(null, "l", "l", -1640531419, 
    null), Y, new B(null, "r", "r", -1640531413, null), X, Fg, new B(null, "path", "path", -1637098018, null)])]), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "and", "and", -1640434800, null), new B(null, "path", "path", -1637098018, null), K(new B(null, "seq", "seq", -1640417768, null), new B(null, "l", "l", -1640531419, null))), K(new B(null, "with-meta", "with-meta", -774206363, null), W([K(new B(null, "first", "first", -1543091095, 
    null), new B(null, "l", "l", -1640531419, null)), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "path", "path", -1637098018, null), Y, pd, X, K(new B(null, "concat", "concat", 1299640525, null), K(new B(null, "rest", "rest", -1637034611, null), new B(null, "l", "l", -1640531419, null)), W([new B(null, "node", "node", -1637144645, null)]), new B(null, "r", "r", -1640531413, null)))]), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null))), 
    new B(null, "loc", "loc", -1640424199, null)))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "insert-left", "insert-left", -1790098348, null), "Inserts the item as the left sibling of the node at this loc,\n without moving", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null), new B(null, "item", "item", -1637288756, null)]), K(new B(null, "let", "let", -1640424492, null), W([W([new B(null, "node", "node", -1637144645, null), A([new B(null, "l", "l", -1640531419, 
    null), Y, Fg, new B(null, "path", "path", -1637098018, null)])]), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "nil?", "nil?", -1637150201, null), new B(null, "path", "path", -1637098018, null)), K(new B(null, "throw", "throw", -1530191713, null), K(new B(null, "new", "new", -1640422567, null), new B(null, "Exception", "Exception", 1845062120, null), "Insert at top")), K(new B(null, "with-meta", "with-meta", -774206363, null), W([new B(null, 
    "node", "node", -1637144645, null), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "path", "path", -1637098018, null), Y, K(new B(null, "conj", "conj", -1637472031, null), new B(null, "l", "l", -1640531419, null), new B(null, "item", "item", -1637288756, null)), Of, !0)]), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null)))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "insert-right", "insert-right", -1976474687, 
    null), "Inserts the item as the right sibling of the node at this loc,\n  without moving", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null), new B(null, "item", "item", -1637288756, null)]), K(new B(null, "let", "let", -1640424492, null), W([W([new B(null, "node", "node", -1637144645, null), A([new B(null, "r", "r", -1640531413, null), X, Fg, new B(null, "path", "path", -1637098018, null)])]), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "if", "if", -1640528170, 
    null), K(new B(null, "nil?", "nil?", -1637150201, null), new B(null, "path", "path", -1637098018, null)), K(new B(null, "throw", "throw", -1530191713, null), K(new B(null, "new", "new", -1640422567, null), new B(null, "Exception", "Exception", 1845062120, null), "Insert at top")), K(new B(null, "with-meta", "with-meta", -774206363, null), W([new B(null, "node", "node", -1637144645, null), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "path", "path", -1637098018, null), X, K(new B(null, 
    "cons", "cons", -1637472022, null), new B(null, "item", "item", -1637288756, null), new B(null, "r", "r", -1640531413, null)), Of, !0)]), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null)))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "replace", "replace", -546034579, null), "Replaces the node at this loc, without moving", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null), new B(null, "node", "node", -1637144645, null)]), 
    K(new B(null, "let", "let", -1640424492, null), W([W([new B(null, "_", "_", -1640531432, null), new B(null, "path", "path", -1637098018, null)]), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "with-meta", "with-meta", -774206363, null), W([new B(null, "node", "node", -1637144645, null), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "path", "path", -1637098018, null), Of, !0)]), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, 
    null))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "edit", "edit", -1637423165, null), "Replaces the node at this loc with the value of (f node args)", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null), new B(null, "f", "f", -1640531425, null), new B(null, "\x26", "\x26", -1640531489, null), new B(null, "args", "args", -1637528938, null)]), K(new B(null, "replace", "replace", -546034579, null), new B(null, "loc", "loc", -1640424199, null), K(new B(null, "apply", 
    "apply", -1547502297, null), new B(null, "f", "f", -1640531425, null), K(new B(null, "node", "node", -1637144645, null), new B(null, "loc", "loc", -1640424199, null)), new B(null, "args", "args", -1637528938, null)))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "insert-child", "insert-child", -1990355263, null), "Inserts the item as the leftmost child of the node at this loc,\n  without moving", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null), new B(null, "item", 
    "item", -1637288756, null)]), K(new B(null, "replace", "replace", -546034579, null), new B(null, "loc", "loc", -1640424199, null), K(new B(null, "make-node", "make-node", -420558790, null), new B(null, "loc", "loc", -1640424199, null), K(new B(null, "node", "node", -1637144645, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "cons", "cons", -1637472022, null), new B(null, "item", "item", -1637288756, null), K(new B(null, "children", "children", 18995128, null), new B(null, 
    "loc", "loc", -1640424199, null)))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "append-child", "append-child", -1428875678, null), "Inserts the item as the rightmost child of the node at this loc,\n  without moving", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null), new B(null, "item", "item", -1637288756, null)]), K(new B(null, "replace", "replace", -546034579, null), new B(null, "loc", "loc", -1640424199, null), K(new B(null, "make-node", "make-node", -420558790, 
    null), new B(null, "loc", "loc", -1640424199, null), K(new B(null, "node", "node", -1637144645, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "concat", "concat", 1299640525, null), K(new B(null, "children", "children", 18995128, null), new B(null, "loc", "loc", -1640424199, null)), W([new B(null, "item", "item", -1637288756, null)]))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "next", "next", -1637153620, null), "Moves to the next loc in the hierarchy, depth-first. When reaching\n  the end, returns a distinguished loc detectable via end?. If already\n  at the end, stays there.", 
    A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "\x3d", "\x3d", -1640531466, null), dg, K(new B(null, "loc", "loc", -1640424199, null), 1)), new B(null, "loc", "loc", -1640424199, null), K(new B(null, "or", "or", -1640527972, null), K(new B(null, "and", "and", -1640434800, null), K(new B(null, "branch?", "branch?", -1502803818, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "down", "down", -1637441957, 
    null), new B(null, "loc", "loc", -1640424199, null))), K(new B(null, "right", "right", -1532019755, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "loop", "loop", -1637203875, null), W([new B(null, "p", "p", -1640531415, null), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "up", "up", -1640527788, null), new B(null, "p", "p", -1640531415, null)), K(new B(null, "or", "or", -1640527972, null), K(new B(null, "right", 
    "right", -1532019755, null), K(new B(null, "up", "up", -1640527788, null), new B(null, "p", "p", -1640531415, null))), K(new B(null, "recur", "recur", -1532142362, null), K(new B(null, "up", "up", -1640527788, null), new B(null, "p", "p", -1640531415, null)))), W([K(new B(null, "node", "node", -1637144645, null), new B(null, "p", "p", -1640531415, null)), dg])))))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "prev", "prev", -1637082132, null), "Moves to the previous loc in the hierarchy, depth-first. If already\n  at the root, returns nil.", 
    A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "if-let", "if-let", 1461176100, null), W([new B(null, "lloc", "lloc", -1637206771, null), K(new B(null, "left", "left", -1637213760, null), new B(null, "loc", "loc", -1640424199, null))]), K(new B(null, "loop", "loop", -1637203875, null), W([new B(null, "loc", "loc", -1640424199, null), new B(null, "lloc", "lloc", -1637206771, null)]), K(new B(null, "if-let", "if-let", 1461176100, null), W([new B(null, "child", "child", 
    -1545900331, null), K(new B(null, "and", "and", -1640434800, null), K(new B(null, "branch?", "branch?", -1502803818, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "down", "down", -1637441957, null), new B(null, "loc", "loc", -1640424199, null)))]), K(new B(null, "recur", "recur", -1532142362, null), K(new B(null, "rightmost", "rightmost", 1086064984, null), new B(null, "child", "child", -1545900331, null))), new B(null, "loc", "loc", -1640424199, null))), K(new B(null, "up", 
    "up", -1640527788, null), new B(null, "loc", "loc", -1640424199, null)))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "end?", "end?", -1637413763, null), "Returns true if loc represents the end of a depth-first walk", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "\x3d", "\x3d", -1640531466, null), dg, K(new B(null, "loc", "loc", -1640424199, null), 1))), K(new B(null, "defn", "defn", -1637452094, null), new B(null, "remove", "remove", 1719824957, 
    null), "Removes the node at loc, returning the loc that would have preceded\n  it in a depth-first walk.", A([Z, "1.0"]), W([new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "let", "let", -1640424492, null), W([W([new B(null, "node", "node", -1637144645, null), A([new B(null, "l", "l", -1640531419, null), Y, new B(null, "ppath", "ppath", -1533663666, null), ff, new B(null, "pnodes", "pnodes", 1670926842, null), Ze, new B(null, "rs", "rs", -1640527878, null), X, Fg, new B(null, "path", 
    "path", -1637098018, null)])]), new B(null, "loc", "loc", -1640424199, null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "nil?", "nil?", -1637150201, null), new B(null, "path", "path", -1637098018, null)), K(new B(null, "throw", "throw", -1530191713, null), K(new B(null, "new", "new", -1640422567, null), new B(null, "Exception", "Exception", 1845062120, null), "Remove at top")), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "pos?", "pos?", -1637084636, null), 
    K(new B(null, "count", "count", -1545680184, null), new B(null, "l", "l", -1640531419, null))), K(new B(null, "loop", "loop", -1637203875, null), W([new B(null, "loc", "loc", -1640424199, null), K(new B(null, "with-meta", "with-meta", -774206363, null), W([K(new B(null, "peek", "peek", -1637094636, null), new B(null, "l", "l", -1640531419, null)), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "path", "path", -1637098018, null), Y, K(new B(null, "pop", "pop", -1640420342, null), 
    new B(null, "l", "l", -1640531419, null)), Of, !0)]), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null)))]), K(new B(null, "if-let", "if-let", 1461176100, null), W([new B(null, "child", "child", -1545900331, null), K(new B(null, "and", "and", -1640434800, null), K(new B(null, "branch?", "branch?", -1502803818, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "down", "down", -1637441957, null), new B(null, "loc", "loc", -1640424199, 
    null)))]), K(new B(null, "recur", "recur", -1532142362, null), K(new B(null, "rightmost", "rightmost", 1086064984, null), new B(null, "child", "child", -1545900331, null))), new B(null, "loc", "loc", -1640424199, null))), K(new B(null, "with-meta", "with-meta", -774206363, null), W([K(new B(null, "make-node", "make-node", -420558790, null), new B(null, "loc", "loc", -1640424199, null), K(new B(null, "peek", "peek", -1637094636, null), new B(null, "pnodes", "pnodes", 1670926842, null)), new B(null, 
    "rs", "rs", -1640527878, null)), K(new B(null, "and", "and", -1640434800, null), new B(null, "ppath", "ppath", -1533663666, null), K(new B(null, "assoc", "assoc", -1547409970, null), new B(null, "ppath", "ppath", -1533663666, null), Of, !0))]), K(new B(null, "meta", "meta", -1637183554, null), new B(null, "loc", "loc", -1640424199, null))))))), K(new B(null, "comment", "comment", -690132968, null), K(new B(null, "load-file", "load-file", -297538628, null), "/Users/rich/dev/clojure/src/zip.clj"), 
    K(new B(null, "refer", "refer", -1532139975, null), K(new B(null, "quote", "quote", -1532577739, null), new B(null, "zip", "zip", -1640410918, null))), K(new B(null, "def", "def", -1640432194, null), new B(null, "data", "data", -1637455517, null), K(new B(null, "quote", "quote", -1532577739, null), W([W([new B(null, "a", "a", -1640531430, null), new B(null, "*", "*", -1640531485, null), new B(null, "b", "b", -1640531429, null)]), new B(null, "+", "+", -1640531484, null), W([new B(null, "c", "c", 
    -1640531428, null), new B(null, "*", "*", -1640531485, null), new B(null, "d", "d", -1640531427, null)])]))), K(new B(null, "def", "def", -1640432194, null), new B(null, "dz", "dz", -1640528305, null), K(new B(null, "vector-zip", "vector-zip", -1623241392, null), new B(null, "data", "data", -1637455517, null))), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "down", "down", -1637441957, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "right", "right", 
    -1532019755, null), K(new B(null, "down", "down", -1637441957, null), new B(null, "dz", "dz", -1640528305, null)))))), K(new B(null, "lefts", "lefts", -1537680635, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "down", "down", -1637441957, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "down", "down", -1637441957, null), new B(null, "dz", "dz", -1640528305, null))))))), K(new B(null, "rights", 
    "rights", 1723333520, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "down", "down", -1637441957, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "down", "down", -1637441957, null), new B(null, "dz", "dz", -1640528305, null))))))), K(new B(null, "up", "up", -1640527788, null), K(new B(null, "up", "up", -1640527788, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "down", 
    "down", -1637441957, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "down", "down", -1637441957, null), new B(null, "dz", "dz", -1640528305, null)))))))), K(new B(null, "path", "path", -1637098018, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "down", "down", -1637441957, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, "right", "right", -1532019755, null), K(new B(null, 
    "down", "down", -1637441957, null), new B(null, "dz", "dz", -1640528305, null))))))), K(new B(null, "-\x3e", "-\x3e", -1640530070, null), new B(null, "dz", "dz", -1640528305, null), new B(null, "down", "down", -1637441957, null), new B(null, "right", "right", -1532019755, null), new B(null, "right", "right", -1532019755, null), new B(null, "down", "down", -1637441957, null), new B(null, "right", "right", -1532019755, null)), K(new B(null, "-\x3e", "-\x3e", -1640530070, null), new B(null, "dz", 
    "dz", -1640528305, null), new B(null, "down", "down", -1637441957, null), new B(null, "right", "right", -1532019755, null), new B(null, "right", "right", -1532019755, null), new B(null, "down", "down", -1637441957, null), new B(null, "right", "right", -1532019755, null), K(new B(null, "replace", "replace", -546034579, null), K(new B(null, "quote", "quote", -1532577739, null), new B(null, "/", "/", -1640531480, null))), new B(null, "root", "root", -1637025125, null)), K(new B(null, "-\x3e", "-\x3e", 
    -1640530070, null), new B(null, "dz", "dz", -1640528305, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), K(new B(null, "edit", "edit", -1637423165, null), new B(null, "str", "str", -1640417302, null)), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), K(new B(null, "replace", "replace", -546034579, null), K(new B(null, "quote", "quote", -1532577739, 
    null), new B(null, "/", "/", -1640531480, null))), new B(null, "root", "root", -1637025125, null)), K(new B(null, "-\x3e", "-\x3e", -1640530070, null), new B(null, "dz", "dz", -1640528305, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", 
    "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "remove", "remove", 1719824957, null), new B(null, "root", "root", -1637025125, null)), K(new B(null, "-\x3e", "-\x3e", -1640530070, null), new B(null, "dz", "dz", -1640528305, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, 
    null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "remove", "remove", 1719824957, null), K(new B(null, "insert-right", "insert-right", -1976474687, null), K(new B(null, "quote", "quote", -1532577739, null), new B(null, "e", "e", -1640531426, null))), new B(null, "root", "root", -1637025125, 
    null)), K(new B(null, "-\x3e", "-\x3e", -1640530070, null), new B(null, "dz", "dz", -1640528305, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, 
    "next", "next", -1637153620, null), new B(null, "remove", "remove", 1719824957, null), new B(null, "up", "up", -1640527788, null), K(new B(null, "append-child", "append-child", -1428875678, null), K(new B(null, "quote", "quote", -1532577739, null), new B(null, "e", "e", -1640531426, null))), new B(null, "root", "root", -1637025125, null)), K(new B(null, "end?", "end?", -1637413763, null), K(new B(null, "-\x3e", "-\x3e", -1640530070, null), new B(null, "dz", "dz", -1640528305, null), new B(null, 
    "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "next", "next", -1637153620, null), new B(null, "remove", "remove", 1719824957, null), new B(null, "next", "next", 
    -1637153620, null))), K(new B(null, "-\x3e", "-\x3e", -1640530070, null), new B(null, "dz", "dz", -1640528305, null), new B(null, "next", "next", -1637153620, null), new B(null, "remove", "remove", 1719824957, null), new B(null, "next", "next", -1637153620, null), new B(null, "remove", "remove", 1719824957, null), new B(null, "root", "root", -1637025125, null)), K(new B(null, "loop", "loop", -1637203875, null), W([new B(null, "loc", "loc", -1640424199, null), new B(null, "dz", "dz", -1640528305, 
    null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "end?", "end?", -1637413763, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "root", "root", -1637025125, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "recur", "recur", -1532142362, null), K(new B(null, "next", "next", -1637153620, null), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "\x3d", "\x3d", -1640531466, null), K(new B(null, "quote", "quote", -1532577739, null), 
    new B(null, "*", "*", -1640531485, null)), K(new B(null, "node", "node", -1637144645, null), new B(null, "loc", "loc", -1640424199, null))), K(new B(null, "replace", "replace", -546034579, null), new B(null, "loc", "loc", -1640424199, null), K(new B(null, "quote", "quote", -1532577739, null), new B(null, "/", "/", -1640531480, null))), new B(null, "loc", "loc", -1640424199, null)))))), K(new B(null, "loop", "loop", -1637203875, null), W([new B(null, "loc", "loc", -1640424199, null), new B(null, 
    "dz", "dz", -1640528305, null)]), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "end?", "end?", -1637413763, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "root", "root", -1637025125, null), new B(null, "loc", "loc", -1640424199, null)), K(new B(null, "recur", "recur", -1532142362, null), K(new B(null, "next", "next", -1637153620, null), K(new B(null, "if", "if", -1640528170, null), K(new B(null, "\x3d", "\x3d", -1640531466, null), K(new B(null, "quote", "quote", 
    -1532577739, null), new B(null, "*", "*", -1640531485, null)), K(new B(null, "node", "node", -1637144645, null), new B(null, "loc", "loc", -1640424199, null))), K(new B(null, "remove", "remove", 1719824957, null), new B(null, "loc", "loc", -1640424199, null)), new B(null, "loc", "loc", -1640424199, null)))))))), A([xh, !0])), "hi", A([bf, function(a, b) {
      return si(Yc.b(b, W([kh]), function(a) {
        return Hb.a(a, Cf.call(null, b))
      }), a)
    }]), $d([Se, bf, df, kf, sg, Jg, Wg, Zg, ch, dh, gh, Gh, Kh], [A([Se, Ji]), vi, A([gh, A([gh, Ci]), dh, A([dh, Di]), Kh, A([Kh, Ri]), Gh, A([Gh, Qi]), df, vi]), A([kf, Ti]), A([sg, Si]), A([gh, A([gh, Ki]), dh, A([dh, Li]), df, A([dh, A([dh, Mi]), gh, A([gh, Ni]), Kh, A([Kh, Oi]), df, vi]), Kh, A([Kh, Pi]), Jg, vi]), A([Wg, Ti]), A([Zg, vi]), A([ch, Ii]), A([dh, Gi, ch, A([ch, Gi])]), A([gh, Hi]), A([Gh, Fi]), A([Kh, Ei])]), A([Hh, ui, bf, Vi]), W([hh]), W([7])]), A([xh, !0]))])))
  }
  var f = null, f = function(f, g, m) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, f);
      case 2:
        return b.call(this, f, g);
      case 3:
        return a.call(this, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.o = d;
  f.c = c;
  f.a = b;
  f.b = a;
  return f
}(), Yi = function() {
  function a(a, b, c, d) {
    return d.a ? d.a(a, b) : d.call(null, a, b)
  }
  function b(a, b, c) {
    return d.j(a, ge.e(I([b, c], 0)), c, wb.a(c, he(b, ce(c))) ? Dc : Vc.b(b, W([Sh.call(null, c), Cf.call(null, c)]), Vc.b(b, W([Sh.call(null, c), bf]), Dc)))
  }
  function c(a, b) {
    return d.b(a, Wi(a), b)
  }
  var d = null, d = function(d, h, g, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, g);
      case 4:
        return a.call(this, d, h, 0, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.j = a;
  return d
}();
function Zi(a, b) {
  return xe.a(a, function(a) {
    return Yi.a(a, b)
  })
}
;var $i = function() {
  function a(a, b) {
    return S.a(w, Mc(1, Qc.a(Nc.c(a), b)))
  }
  function b(a) {
    return S.a(w, a)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function aj(a, b) {
  for(var c = 0;;) {
    if(c = a.indexOf(b, c), 0 <= c) {
      var d;
      d = void 0;
      d = (d = 0 === c) ? d : " " === a.charAt(c - 1);
      if(p(d)) {
        var f = a.length;
        d = c + b.length;
        d = d <= f ? (f = d === f) ? f : " " === a.charAt(d) : null
      }
      if(d) {
        return c
      }
      c += b.length
    }else {
      return null
    }
  }
}
var cj = function() {
  function a(a, b) {
    var c = bj(a), g, m = kc(b);
    g = fa(m);
    if(E(g)) {
      if(m = c.classList, p(m)) {
        g = E(g.split(/\s+/));
        for(var n = null, q = 0, r = 0;;) {
          if(r < q) {
            var v = n.r(n, r);
            m.add(v);
            r += 1
          }else {
            if(g = E(g)) {
              n = g, Sb(n) ? (g = kb(n), r = lb(n), n = g, q = N(g), g = r) : (g = F(n), m.add(g), g = H(n), n = null, q = 0), r = 0
            }else {
              break
            }
          }
        }
      }else {
        for(m = c.className, g = E(g.split(/\s+/)), n = null, r = q = 0;;) {
          if(r < q) {
            v = n.r(n, r), p(aj(m, v)) || (c.className = "" === m ? v : [w(m), w(" "), w(v)].join("")), r += 1
          }else {
            if(g = E(g)) {
              n = g, Sb(n) ? (g = kb(n), r = lb(n), n = g, q = N(g), g = r) : (g = F(n), p(aj(m, g)) || (c.className = "" === m ? g : [w(m), w(" "), w(g)].join("")), g = H(n), n = null, q = 0), r = 0
            }else {
              break
            }
          }
        }
      }
    }
    return c
  }
  var b = null, c = function() {
    function a(b, d, m) {
      var n = null;
      2 < arguments.length && (n = I(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, n)
    }
    function c(a, d, f) {
      a = bj(a);
      d = E(Hb.a(f, d));
      f = null;
      for(var n = 0, q = 0;;) {
        if(q < n) {
          var r = f.r(f, q);
          b.a(a, r);
          q += 1
        }else {
          if(d = E(d)) {
            f = d, Sb(f) ? (d = kb(f), q = lb(f), f = d, n = N(d), d = q) : (d = F(f), b.a(a, d), d = H(f), f = null, n = 0), q = 0
          }else {
            break
          }
        }
      }
      return a
    }
    a.i = 2;
    a.g = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}(), dj = function() {
  function a(a, b) {
    var c = bj(a), g = kc(b), m = c.classList;
    if(p(m)) {
      m.remove(g)
    }else {
      m = c.className;
      a: {
        for(var n = m;;) {
          var q = n.length, r = aj(n, g);
          if(p(r)) {
            var v = r + g.length, n = "" + w(v < q ? [w(n.substring(0, r)), w(n.substr(v + 1))].join("") : n.substring(0, r - 1))
          }else {
            g = n;
            break a
          }
        }
        g = void 0
      }
      m !== g && (c.className = g)
    }
    return c
  }
  var b = null, c = function() {
    function a(b, d, m) {
      var n = null;
      2 < arguments.length && (n = I(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, n)
    }
    function c(a, d, f) {
      a = bj(a);
      d = E(Hb.a(f, d));
      f = null;
      for(var n = 0, q = 0;;) {
        if(q < n) {
          var r = f.r(f, q);
          b.a(a, r);
          q += 1
        }else {
          if(d = E(d)) {
            f = d, Sb(f) ? (d = kb(f), n = lb(f), f = d, r = N(d), d = n, n = r) : (r = F(f), b.a(a, r), d = H(f), f = null, n = 0), q = 0
          }else {
            return null
          }
        }
      }
    }
    a.i = 2;
    a.g = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, I(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b
}();
function ej(a) {
  return"string" === typeof a ? a : $i.a(" ", Jc.a(function(a) {
    var c = O.b(a, 0, null);
    a = O.b(a, 1, null);
    return[w(kc(c)), w(":"), w(kc(a)), w(";")].join("")
  }, a))
}
var fj = function() {
  function a(a, b, c) {
    if(p(c)) {
      if(Kb(c)) {
        return a = bj(a), a[kc(b)] = c, a
      }
      a = bj(a);
      a.setAttribute(kc(b), b === lg ? ej(c) : c);
      return a
    }
    return null
  }
  function b(a, b) {
    return c.b(bj(a), b, "true")
  }
  var c = null, d = function() {
    function a(c, d, f, q) {
      var r = null;
      3 < arguments.length && (r = I(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, f, r)
    }
    function b(a, d, f, h) {
      var r = N(h), v;
      if(v = "number" === typeof r) {
        if(v = !isNaN(r)) {
          v = (v = Infinity !== r) ? parseFloat(r) === parseInt(r, 10) : v
        }
      }
      if(!v) {
        throw Error([w("Argument must be an integer: "), w(r)].join(""));
      }
      if(0 !== (r & 1)) {
        throw Error([w("Assert failed: "), w(se.e(I([K(new B(null, "even?", "even?", -1543640034, null), K(new B(null, "count", "count", -1545680184, null), new B(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
      }
      a = bj(a);
      d = E(J(W([d, f]), Uc.a(2, h)));
      f = null;
      for(r = h = 0;;) {
        if(r < h) {
          var D = f.r(f, r);
          v = O.b(D, 0, null);
          D = O.b(D, 1, null);
          c.b(a, v, D);
          r += 1
        }else {
          if(d = E(d)) {
            Sb(d) ? (h = kb(d), d = lb(d), f = h, h = N(h)) : (h = F(d), f = O.b(h, 0, null), h = O.b(h, 1, null), c.b(a, f, h), d = H(d), f = null, h = 0), r = 0
          }else {
            break
          }
        }
      }
      return a
    }
    a.i = 3;
    a.g = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var f = F(a);
      a = G(a);
      return b(c, d, f, a)
    };
    a.e = b;
    return a
  }(), c = function(c, h, g, m) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, h);
      case 3:
        return a.call(this, c, h, g);
      default:
        return d.e(c, h, g, I(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = 3;
  c.g = d.g;
  c.a = b;
  c.b = a;
  c.e = d.e;
  return c
}();
var gj = {};
function hj(a) {
  if(a ? a.ka : a) {
    return a.ka(a)
  }
  var b;
  b = hj[l(null == a ? null : a)];
  if(!b && (b = hj._, !b)) {
    throw u("PElement.-elem", a);
  }
  return b.call(null, a)
}
function ij(a, b) {
  var c = a.indexOf("#", b), d = a.indexOf(".", b), f = Math.min(c, d);
  return 0 > f ? Math.max(c, d) : f
}
function jj(a) {
  var b = kc(a), c = ij(b, 0);
  a = document.createElement(0 < c ? b.substring(0, c) : 0 === c ? "div" : t ? b : null);
  if(0 <= c) {
    for(b = b.substring(c);;) {
      var c = ij(b, 1), d = 0 <= c ? b.substring(0, c) : b, f = d.charAt(0);
      if(wb.a("#", f)) {
        a.setAttribute("id", d.substring(1))
      }else {
        if(wb.a(".", f)) {
          cj.a(a, d.substring(1))
        }else {
          if(t) {
            throw Error([w("No matching clause: "), w(d.charAt(0))].join(""));
          }
        }
      }
      if(0 <= c) {
        b = b.substring(c)
      }else {
        break
      }
    }
  }
  return a
}
var kj = function() {
  function a(a, b) {
    if(b ? p(p(null) ? null : b.ha) || (b.Za ? 0 : s(gj, b)) : s(gj, b)) {
      return a.appendChild(hj(b)), a
    }
    if(Vb(b)) {
      for(var h = E(b), g = null, m = 0, n = 0;;) {
        if(n < m) {
          var q = g.r(g, n);
          c.a(a, q);
          n += 1
        }else {
          if(h = E(h)) {
            g = h, Sb(g) ? (h = kb(g), n = lb(g), g = h, m = N(h), h = n) : (h = F(g), c.a(a, h), h = H(g), g = null, m = 0), n = 0
          }else {
            break
          }
        }
      }
      return a
    }
    if(null == b) {
      h = a
    }else {
      if(t) {
        throw[w("Don't know how to make node from: "), w(se.e(I([b], 0)))].join("");
      }
      h = null
    }
    return h
  }
  function b(a) {
    return c.a(document.createDocumentFragment(), a)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function bj(a) {
  return(a ? p(p(null) ? null : a.ha) || (a.Za ? 0 : s(gj, a)) : s(gj, a)) ? hj(a) : kj.c(a)
}
gj.string = !0;
hj.string = function(a) {
  return a instanceof V ? jj(a) : document.createTextNode("" + w(a))
};
gj.number = !0;
hj.number = function(a) {
  return document.createTextNode("" + w(a))
};
kd.prototype.ha = !0;
kd.prototype.ka = function(a) {
  var b = O.b(a, 0, null), c = O.b(a, 1, null);
  a = cc(a, 2);
  var b = jj(b), d = Qb(c), d = (d ? c ? p(p(null) ? null : c.ha) || (c.Za ? 0 : s(gj, c)) : s(gj, c) : !d) ? null : c, c = p(d) ? a : J(c, a);
  a = E(d);
  for(var d = null, f = 0, h = 0;;) {
    if(h < f) {
      var g = d.r(d, h), m = O.b(g, 0, null), g = O.b(g, 1, null), n = m;
      if(wb.a(Oh, n)) {
        for(var m = E(g), g = null, q = n = 0;;) {
          if(q < n) {
            var r = g.r(g, q);
            cj.a(b, r);
            q += 1
          }else {
            if(m = E(m)) {
              g = m, Sb(g) ? (m = kb(g), q = lb(g), g = m, n = N(m), m = q) : (m = F(g), cj.a(b, m), m = H(g), g = null, n = 0), q = 0
            }else {
              break
            }
          }
        }
      }else {
        wb.a(Df, n) ? cj.a(b, g) : t && fj.b(b, m, g)
      }
      h += 1
    }else {
      if(a = E(a)) {
        if(Sb(a)) {
          f = kb(a), a = lb(a), d = f, f = N(f)
        }else {
          f = F(a);
          d = O.b(f, 0, null);
          f = O.b(f, 1, null);
          h = d;
          if(wb.a(Oh, h)) {
            for(d = E(f), f = null, m = h = 0;;) {
              if(m < h) {
                g = f.r(f, m), cj.a(b, g), m += 1
              }else {
                if(d = E(d)) {
                  f = d, Sb(f) ? (d = kb(f), m = lb(f), f = d, h = N(d), d = m) : (d = F(f), cj.a(b, d), d = H(f), f = null, h = 0), m = 0
                }else {
                  break
                }
              }
            }
          }else {
            wb.a(Df, h) ? cj.a(b, f) : t && fj.b(b, d, f)
          }
          a = H(a);
          d = null;
          f = 0
        }
        h = 0
      }else {
        break
      }
    }
  }
  b.appendChild(bj(c));
  return b
};
Document.prototype.ha = !0;
Document.prototype.ka = aa();
Text.prototype.ha = !0;
Text.prototype.ka = aa();
DocumentFragment.prototype.ha = !0;
DocumentFragment.prototype.ka = aa();
HTMLElement.prototype.ha = !0;
HTMLElement.prototype.ka = aa();
try {
  Window.prototype.ha = !0, Window.prototype.ka = aa()
}catch(lj) {
  if(lj instanceof ReferenceError) {
    console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)")
  }else {
    if(t) {
      throw lj;
    }
  }
}
;function mj(a) {
  return Array.prototype.slice.call(a)
}
;var oj = function nj(b) {
  var c;
  c = null == b ? !1 : b ? ((c = b.f & 8) ? c : b.Cb) ? !0 : b.f ? !1 : s(ra, b) : s(ra, b);
  b = c ? $i.a(" ", Jc.a(nj, b)) : ((c = "string" === typeof b) ? c : b instanceof V) ? kc(b) : null;
  return b
};
Tc(Hd, Jc.a(function(a) {
  var b = O.b(a, 0, null);
  a = O.b(a, 1, null);
  return W([b, A([a, function(a) {
    return function(b) {
      var f = b.relatedTarget, h;
      h = b.Mb;
      h = p(h) ? h : b.currentTarget;
      p(f) && (f = bj(f), h = bj(h), f = p(h.contains) ? h.contains(f) : p(h.compareDocumentPosition) ? 0 != (h.compareDocumentPosition(f) & 16) : null);
      return p(f) ? null : a.c ? a.c(b) : a.call(null, b)
    }
  }])])
}, A([mh, xf, Bg, Yf])));
Ge || Ie && Re("525");
ve.c(W([0, 0]));
$d([Ue, ef, hf, lf, rf, sf, vf, Qf, Wf, Yf, $f, ag, jg, mg, xg, Eg, Ig, Lg, Xg, bh, fh, Ih, Lh, Uh], [pf, Sf, Xf, tf, Qg, jh, Ff, zh, Ye, Xe, sh, Qh, qg, Wh, Ve, xf, Dh, Ah, rg, Og, cg, Sg, Nh, eg]);
var pj = $d([65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], [If, bg, Vf, ug, Ag, gg, pg, Wg, Rg, Ng, Kg, Y, Pg, Tg, $g, Rh, Jh, X, Th, Ch, Fh, rh, yh, Ef, uf, qf]), qj = $d([48, 49, 50, 51, 52, 53, 54, 55, 56, 57], [sg, ng, yg, tg, Uf, Zf, Kf, Rf, ph, lh]), fe = ge.e(I([$d([32, 192, 33, 34, 35, 36, 37, 38, 39, 8, 40, 9, 107, 13, 45, 109, 46, 16, 144, 17, 145, 18, 19, 20, 186, 27, 59, 91, 187, 219, 188, 220, 93, 189, 221, 190, 222, 191], [ch, 
Dg, Mg, ig, dg, Af, gh, Kh, dh, Se, Gh, kf, zg, Cg, oh, Ph, $e, Zg, kg, Jg, zf, df, Te, Nf, hg, Hh, hg, Pf, zg, af, Yg, th, qh, Ph, Jf, Eh, og, Gg]), pj, qj], 0));
je(ce(fe), Jc.a(function(a) {
  return lc.c([w(kc(a)), w("-up")].join(""))
}, ee()));
je(ce(fe), Jc.a(function(a) {
  return lc.c([w(kc(a)), w("-down")].join(""))
}, ee()));
var rj = function() {
  function a(a, b, c, d) {
    return console.log(a, b, c, d)
  }
  function b(a, b, c) {
    return console.log(a, b, c)
  }
  function c(a, b) {
    return console.log(a, b)
  }
  var d = null, f = function() {
    function a(c) {
      var d = null;
      0 < arguments.length && (d = I(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, d)
    }
    function b(a) {
      return console.log(a)
    }
    a.i = 0;
    a.g = function(a) {
      a = E(a);
      return b(a)
    };
    a.e = b;
    return a
  }(), d = function(d, g, m, n) {
    var q = n;
    switch(arguments.length) {
      default:
        return f.e(d, g, m, I(arguments, 4));
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, m);
      case 4:
        return a.call(this, d, g, m, q)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = 4;
  d.g = f.g;
  d.e = f.e;
  d.a = c;
  d.b = b;
  d.j = a;
  return d
}();
function sj(a) {
  var b = Kb(a);
  b && (b = a ? ((b = a.f & 512) ? b : a.Ab) ? !0 : a.f ? !1 : s(Aa, a) : s(Aa, a), b = !b);
  return b ? a.name.replace("_", "-") : bf ? "" + w(a) : null
}
var tj = function() {
  function a(a) {
    return W([nf, A([Df, [w("branch folded "), w(a)].join("")])])
  }
  function b(a, b) {
    return S.b(Hb, W([nf, A([Df, [w("branch "), w(a)].join("")])]), b)
  }
  function c(a) {
    return Hb.a(W([nf, A([Df, [w("leaf "), w(Kb(a) ? "fn " : "string" === typeof a ? "string " : null)].join("")])]), sj(a))
  }
  function d() {
    return W([nf, A([Df, "sexp"])])
  }
  var f = null, f = function(f, g, m) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, f);
      case 2:
        return b.call(this, f, g);
      case 3:
        return a.call(this, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.o = d;
  f.c = c;
  f.a = b;
  f.b = a;
  return f
}();
function uj(a) {
  return[w("#root \x3e div:first-child "), w(S.a(w, Jc.a(A([Gh, " \x3e div:first-child ", dh, " + div"]), a)))].join("")
}
var vj = function() {
  function a(a, b) {
    rj.a("\x3e\x3e\x3e ", b);
    return[w(a), w(b)].join("")
  }
  function b(a) {
    return c.a("#root \x3e div:first-child ", S.a(w, Jc.a(A([Gh, " \x3e div:first-child ", dh, " + div"]), a)))
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}(), wj = function() {
  function a(a, b) {
    rj.a("replace: ", vj.c(qi.a(a, b)));
    var c = document.querySelector(oj(vj.c(qi.a(a, b)))), g = F(oi(64, 64, tj, b)), g = bj(g), c = bj(c);
    if(!p(c.parentNode)) {
      throw Error([w("Assert failed: "), w(se.e(I([K(new B(null, ".-parentNode", ".-parentNode", 499016324, null), new B(null, "elem", "elem", -1637415608, null))], 0)))].join(""));
    }
    c.parentNode.replaceChild(g, c);
    return b
  }
  function b(a) {
    return c.a(a, a)
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}(), xj = function() {
  function a(a, b, c, d) {
    rj.b("selectors: ", b, c);
    rj.b("  node: ", S.a(w, Lc(64, "" + w($(Eg.call(null, a))))), "" + w(T($(Eg.call(null, a)))));
    Gb(Jc.a(function(a) {
      return dj.a ? dj.a(a, "selected") : dj.call(null, a, "selected")
    }, mj(document.getElementsByClassName("selected"))));
    Gb(Jc.a(function(a) {
      return dj.a ? dj.a(a, "selected-parent") : dj.call(null, a, "selected-parent")
    }, mj(document.getElementsByClassName("selected-parent"))));
    a = E(c);
    b = null;
    for(var n = c = 0;;) {
      if(n < c) {
        var q = b.r(b, n);
        p(q) && (cj.a ? cj.a(q, "selected") : cj.call(null, q, "selected"));
        n += 1
      }else {
        if(a = E(a)) {
          b = a, Sb(b) ? (a = kb(b), n = lb(b), b = a, c = N(a), a = n) : (a = F(b), p(a) && (cj.a ? cj.a(a, "selected") : cj.call(null, a, "selected")), a = H(b), b = null, c = 0), n = 0
        }else {
          break
        }
      }
    }
    return p(d) ? cj.a ? cj.a(d, "selected") : cj.call(null, d, "selected") : null
  }
  function b(a, b) {
    return d.j(a, b, mj(document.querySelectorAll(oj(b))), document.querySelector(oj(uj(qi.a(gf.call(null, a), Eg.call(null, a))))))
  }
  function c(a) {
    return d.a(a, Jc.a(Gc.a(uj, Ic.a(qi, gf.call(null, a))), Mh.call(null, a)))
  }
  var d = null, d = function(d, h, g, m) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 4:
        return a.call(this, d, h, g, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.j = a;
  return d
}(), yj = A([Nh, xj, eh, function(a) {
  rj.b("modified: ", $(Bh.call(null, a)), "" + w(qi.a(gf.call(null, a), Bh.call(null, a))));
  wj.a(gf.call(null, a), p(Bh.call(null, a)) ? Bh.call(null, a) : gf.call(null, a));
  return xj.c(a)
}]);
function zj() {
  var a = Aj();
  return Yi.j(a, Wi(a), null, function(a, c) {
    return si(Xc(c, W([hh, Ag, Ag]), function(a, b) {
      return Bi.a(b, function(a) {
        rj.a("evaluating! ", "" + w($(a)));
        return gi(a, "qwe")
      })
    }), a)
  })
}
function Aj() {
  var a = Xi.o();
  return Yi.j(a, Wi(a), null, function(a, c) {
    return si(Xc(c, W([hh, Zg, Gg, Gg]), function(a, b) {
      rj.a("meta: ", "" + w(T($(Eg.call(null, b)))));
      return b
    }), a)
  })
}
var Bj = function() {
  function a(a, b) {
    rj.c("make ui");
    window.onkeydown = function(a) {
      a.preventDefault();
      return Zi(b, A([Cf, fe.c ? fe.c(a.keyCode) : fe.call(null, a.keyCode), uh, a.keyCode, Sh, Ig]))
    };
    window.onkeyup = function(a) {
      return Zi(b, A([Cf, fe.c ? fe.c(a.keyCode) : fe.call(null, a.keyCode), uh, a.keyCode, Sh, jh]))
    };
    wj.c(gf.call(null, Wi(Ka(b))));
    return eb(b, wg, function(a, b, c, d) {
      a = Wi(d);
      return Mf.call(null, a).call(null, yj).call(null, a)
    })
  }
  function b(a) {
    return c.a(a, ve.c(zj()))
  }
  var c = null, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, 0, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
rj.c("huhhh");
window.onload = Bj;

//@ sourceMappingURL=./public/js/main.js.map