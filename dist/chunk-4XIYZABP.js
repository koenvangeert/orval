'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Ci = Object.create;
var Ft = Object.defineProperty,
  Di = Object.defineProperties,
  qi = Object.getOwnPropertyDescriptor,
  Fi = Object.getOwnPropertyDescriptors,
  Vi = Object.getOwnPropertyNames,
  mt = Object.getOwnPropertySymbols,
  Ni = Object.getPrototypeOf,
  Vt = Object.prototype.hasOwnProperty,
  fn = Object.prototype.propertyIsEnumerable;
var un = (e, t, r) =>
    t in e
      ? Ft(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  $ = (e, t) => {
    for (var r in t || (t = {})) Vt.call(t, r) && un(e, r, t[r]);
    if (mt) for (var r of mt(t)) fn.call(t, r) && un(e, r, t[r]);
    return e;
  },
  w = (e, t) => Di(e, Fi(t));
var U = ((e) =>
  typeof require != 'undefined'
    ? require
    : typeof Proxy != 'undefined'
    ? new Proxy(e, {
        get: (t, r) => (typeof require != 'undefined' ? require : t)[r],
      })
    : e)(function (e) {
  if (typeof require != 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var we = (e, t) => {
  var r = {};
  for (var n in e) Vt.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && mt)
    for (var n of mt(e)) t.indexOf(n) < 0 && fn.call(e, n) && (r[n] = e[n]);
  return r;
};
var Ui = (e, t) => () => (e && (t = e((e = 0))), t);
var v = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Wi = (e, t, r, n) => {
  if ((t && typeof t == 'object') || typeof t == 'function')
    for (let o of Vi(t))
      !Vt.call(e, o) &&
        o !== r &&
        Ft(e, o, {
          get: () => t[o],
          enumerable: !(n = qi(t, o)) || n.enumerable,
        });
  return e;
};
var le = (e, t, r) => (
  (r = e != null ? Ci(Ni(e)) : {}),
  Wi(
    t || !e || !e.__esModule
      ? Ft(r, 'default', { value: e, enumerable: !0 })
      : r,
    e,
  )
);
var c = Ui(() => {});
var mr = v((ab, Uo) => {
  c();
  var _p = Object.prototype;
  function zp(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || _p;
    return e === r;
  }
  Uo.exports = zp;
});
var Bo = v((pb, Wo) => {
  c();
  function Kp(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  Wo.exports = Kp;
});
var _o = v((mb, Qo) => {
  c();
  var Lp = Bo(),
    Hp = Lp(Object.keys, Object);
  Qo.exports = Hp;
});
var Ko = v((cb, zo) => {
  c();
  var Yp = mr(),
    Jp = _o(),
    Xp = Object.prototype,
    Zp = Xp.hasOwnProperty;
  function em(e) {
    if (!Yp(e)) return Jp(e);
    var t = [];
    for (var r in Object(e)) Zp.call(e, r) && r != 'constructor' && t.push(r);
    return t;
  }
  zo.exports = em;
});
var cr = v((lb, Lo) => {
  c();
  var tm =
    typeof global == 'object' && global && global.Object === Object && global;
  Lo.exports = tm;
});
var ce = v((ub, Ho) => {
  c();
  var rm = cr(),
    nm = typeof self == 'object' && self && self.Object === Object && self,
    om = rm || nm || Function('return this')();
  Ho.exports = om;
});
var lr = v((fb, Yo) => {
  c();
  var sm = ce(),
    im = sm.Symbol;
  Yo.exports = im;
});
var es = v((gb, Zo) => {
  c();
  var Jo = lr(),
    Xo = Object.prototype,
    am = Xo.hasOwnProperty,
    pm = Xo.toString,
    et = Jo ? Jo.toStringTag : void 0;
  function mm(e) {
    var t = am.call(e, et),
      r = e[et];
    try {
      e[et] = void 0;
      var n = !0;
    } catch (e2) {}
    var o = pm.call(e);
    return n && (t ? (e[et] = r) : delete e[et]), o;
  }
  Zo.exports = mm;
});
var rs = v((db, ts) => {
  c();
  var cm = Object.prototype,
    lm = cm.toString;
  function um(e) {
    return lm.call(e);
  }
  ts.exports = um;
});
var tt = v((yb, ss) => {
  c();
  var ns = lr(),
    fm = es(),
    gm = rs(),
    dm = '[object Null]',
    ym = '[object Undefined]',
    os = ns ? ns.toStringTag : void 0;
  function hm(e) {
    return e == null
      ? e === void 0
        ? ym
        : dm
      : os && os in Object(e)
      ? fm(e)
      : gm(e);
  }
  ss.exports = hm;
});
var ur = v((hb, is) => {
  c();
  function bm(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  is.exports = bm;
});
var fr = v((bb, as) => {
  c();
  var Om = tt(),
    $m = ur(),
    xm = '[object AsyncFunction]',
    Sm = '[object Function]',
    wm = '[object GeneratorFunction]',
    Tm = '[object Proxy]';
  function Rm(e) {
    if (!$m(e)) return !1;
    var t = Om(e);
    return t == Sm || t == wm || t == xm || t == Tm;
  }
  as.exports = Rm;
});
var ms = v((Ob, ps) => {
  c();
  var jm = ce(),
    Pm = jm['__core-js_shared__'];
  ps.exports = Pm;
});
var us = v(($b, ls) => {
  c();
  var gr = ms(),
    cs = (function () {
      var e = /[^.]+$/.exec((gr && gr.keys && gr.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function vm(e) {
    return !!cs && cs in e;
  }
  ls.exports = vm;
});
var dr = v((xb, fs) => {
  c();
  var Em = Function.prototype,
    Mm = Em.toString;
  function Im(e) {
    if (e != null) {
      try {
        return Mm.call(e);
      } catch (e3) {}
      try {
        return e + '';
      } catch (e4) {}
    }
    return '';
  }
  fs.exports = Im;
});
var ds = v((Sb, gs) => {
  c();
  var Am = fr(),
    Gm = us(),
    km = ur(),
    Cm = dr(),
    Dm = /[\\^$.*+?()[\]{}|]/g,
    qm = /^\[object .+?Constructor\]$/,
    Fm = Function.prototype,
    Vm = Object.prototype,
    Nm = Fm.toString,
    Um = Vm.hasOwnProperty,
    Wm = RegExp(
      '^' +
        Nm.call(Um)
          .replace(Dm, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function Bm(e) {
    if (!km(e) || Gm(e)) return !1;
    var t = Am(e) ? Wm : qm;
    return t.test(Cm(e));
  }
  gs.exports = Bm;
});
var hs = v((wb, ys) => {
  c();
  function Qm(e, t) {
    return e == null ? void 0 : e[t];
  }
  ys.exports = Qm;
});
var Ve = v((Tb, bs) => {
  c();
  var _m = ds(),
    zm = hs();
  function Km(e, t) {
    var r = zm(e, t);
    return _m(r) ? r : void 0;
  }
  bs.exports = Km;
});
var $s = v((Rb, Os) => {
  c();
  var Lm = Ve(),
    Hm = ce(),
    Ym = Lm(Hm, 'DataView');
  Os.exports = Ym;
});
var Ss = v((jb, xs) => {
  c();
  var Jm = Ve(),
    Xm = ce(),
    Zm = Jm(Xm, 'Map');
  xs.exports = Zm;
});
var Ts = v((Pb, ws) => {
  c();
  var ec = Ve(),
    tc = ce(),
    rc = ec(tc, 'Promise');
  ws.exports = rc;
});
var js = v((vb, Rs) => {
  c();
  var nc = Ve(),
    oc = ce(),
    sc = nc(oc, 'Set');
  Rs.exports = sc;
});
var vs = v((Eb, Ps) => {
  c();
  var ic = Ve(),
    ac = ce(),
    pc = ic(ac, 'WeakMap');
  Ps.exports = pc;
});
var Ds = v((Mb, Cs) => {
  c();
  var yr = $s(),
    hr = Ss(),
    br = Ts(),
    Or = js(),
    $r = vs(),
    ks = tt(),
    Ne = dr(),
    Es = '[object Map]',
    mc = '[object Object]',
    Ms = '[object Promise]',
    Is = '[object Set]',
    As = '[object WeakMap]',
    Gs = '[object DataView]',
    cc = Ne(yr),
    lc = Ne(hr),
    uc = Ne(br),
    fc = Ne(Or),
    gc = Ne($r),
    ve = ks;
  ((yr && ve(new yr(new ArrayBuffer(1))) != Gs) ||
    (hr && ve(new hr()) != Es) ||
    (br && ve(br.resolve()) != Ms) ||
    (Or && ve(new Or()) != Is) ||
    ($r && ve(new $r()) != As)) &&
    (ve = function (e) {
      var t = ks(e),
        r = t == mc ? e.constructor : void 0,
        n = r ? Ne(r) : '';
      if (n)
        switch (n) {
          case cc:
            return Gs;
          case lc:
            return Es;
          case uc:
            return Ms;
          case fc:
            return Is;
          case gc:
            return As;
        }
      return t;
    });
  Cs.exports = ve;
});
var Ct = v((Ib, qs) => {
  c();
  function dc(e) {
    return e != null && typeof e == 'object';
  }
  qs.exports = dc;
});
var Vs = v((Ab, Fs) => {
  c();
  var yc = tt(),
    hc = Ct(),
    bc = '[object Arguments]';
  function Oc(e) {
    return hc(e) && yc(e) == bc;
  }
  Fs.exports = Oc;
});
var Bs = v((Gb, Ws) => {
  c();
  var Ns = Vs(),
    $c = Ct(),
    Us = Object.prototype,
    xc = Us.hasOwnProperty,
    Sc = Us.propertyIsEnumerable,
    wc = Ns(
      (function () {
        return arguments;
      })(),
    )
      ? Ns
      : function (e) {
          return $c(e) && xc.call(e, 'callee') && !Sc.call(e, 'callee');
        };
  Ws.exports = wc;
});
var _s = v((kb, Qs) => {
  c();
  var Tc = Array.isArray;
  Qs.exports = Tc;
});
var xr = v((Cb, zs) => {
  c();
  var Rc = 9007199254740991;
  function jc(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Rc;
  }
  zs.exports = jc;
});
var Ls = v((Db, Ks) => {
  c();
  var Pc = fr(),
    vc = xr();
  function Ec(e) {
    return e != null && vc(e.length) && !Pc(e);
  }
  Ks.exports = Ec;
});
var Ys = v((qb, Hs) => {
  c();
  function Mc() {
    return !1;
  }
  Hs.exports = Mc;
});
var ei = v((rt, Ue) => {
  c();
  var Ic = ce(),
    Ac = Ys(),
    Zs = typeof rt == 'object' && rt && !rt.nodeType && rt,
    Js = Zs && typeof Ue == 'object' && Ue && !Ue.nodeType && Ue,
    Gc = Js && Js.exports === Zs,
    Xs = Gc ? Ic.Buffer : void 0,
    kc = Xs ? Xs.isBuffer : void 0,
    Cc = kc || Ac;
  Ue.exports = Cc;
});
var ri = v((Fb, ti) => {
  c();
  var Dc = tt(),
    qc = xr(),
    Fc = Ct(),
    Vc = '[object Arguments]',
    Nc = '[object Array]',
    Uc = '[object Boolean]',
    Wc = '[object Date]',
    Bc = '[object Error]',
    Qc = '[object Function]',
    _c = '[object Map]',
    zc = '[object Number]',
    Kc = '[object Object]',
    Lc = '[object RegExp]',
    Hc = '[object Set]',
    Yc = '[object String]',
    Jc = '[object WeakMap]',
    Xc = '[object ArrayBuffer]',
    Zc = '[object DataView]',
    el = '[object Float32Array]',
    tl = '[object Float64Array]',
    rl = '[object Int8Array]',
    nl = '[object Int16Array]',
    ol = '[object Int32Array]',
    sl = '[object Uint8Array]',
    il = '[object Uint8ClampedArray]',
    al = '[object Uint16Array]',
    pl = '[object Uint32Array]',
    G = {};
  G[el] = G[tl] = G[rl] = G[nl] = G[ol] = G[sl] = G[il] = G[al] = G[pl] = !0;
  G[Vc] =
    G[Nc] =
    G[Xc] =
    G[Uc] =
    G[Zc] =
    G[Wc] =
    G[Bc] =
    G[Qc] =
    G[_c] =
    G[zc] =
    G[Kc] =
    G[Lc] =
    G[Hc] =
    G[Yc] =
    G[Jc] =
      !1;
  function ml(e) {
    return Fc(e) && qc(e.length) && !!G[Dc(e)];
  }
  ti.exports = ml;
});
var oi = v((Vb, ni) => {
  c();
  function cl(e) {
    return function (t) {
      return e(t);
    };
  }
  ni.exports = cl;
});
var ii = v((nt, We) => {
  c();
  var ll = cr(),
    si = typeof nt == 'object' && nt && !nt.nodeType && nt,
    ot = si && typeof We == 'object' && We && !We.nodeType && We,
    ul = ot && ot.exports === si,
    Sr = ul && ll.process,
    fl = (function () {
      try {
        var e = ot && ot.require && ot.require('util').types;
        return e || (Sr && Sr.binding && Sr.binding('util'));
      } catch (e5) {}
    })();
  We.exports = fl;
});
var ci = v((Nb, mi) => {
  c();
  var gl = ri(),
    dl = oi(),
    ai = ii(),
    pi = ai && ai.isTypedArray,
    yl = pi ? dl(pi) : gl;
  mi.exports = yl;
});
var wr = v((Ub, li) => {
  c();
  var hl = Ko(),
    bl = Ds(),
    Ol = Bs(),
    $l = _s(),
    xl = Ls(),
    Sl = ei(),
    wl = mr(),
    Tl = ci(),
    Rl = '[object Map]',
    jl = '[object Set]',
    Pl = Object.prototype,
    vl = Pl.hasOwnProperty;
  function El(e) {
    if (e == null) return !0;
    if (
      xl(e) &&
      ($l(e) ||
        typeof e == 'string' ||
        typeof e.splice == 'function' ||
        Sl(e) ||
        Tl(e) ||
        Ol(e))
    )
      return !e.length;
    var t = bl(e);
    if (t == Rl || t == jl) return !e.size;
    if (wl(e)) return !hl(e).length;
    for (var r in e) if (vl.call(e, r)) return !1;
    return !0;
  }
  li.exports = El;
});
var Bi = 'orval',
  Qi = 'A swagger client generator for typescript',
  _i = '6.8.1',
  zi = 'MIT',
  Ki = ['dist'],
  Li = { orval: 'dist/bin/orval.js' },
  Hi = 'dist/index.js',
  Yi = [
    'rest',
    'client',
    'swagger',
    'open-api',
    'fetch',
    'data fetching',
    'code-generation',
    'angular',
    'react',
    'react-query',
    'svelte',
    'svelte-query',
    'vue',
    'vue-query',
    'msw',
    'mock',
    'axios',
    'vue-query',
    'vue',
    'swr',
  ],
  Ji = { name: 'Victor Bury', email: 'bury.victor@gmail.com' },
  Xi = { type: 'git', url: 'https://github.com/anymaniax/orval' },
  Zi = {
    build:
      'tsup ./src/bin/orval.ts ./src/index.ts --minify --clean --dts --splitting',
    dev: "tsup ./src/bin/orval.ts ./src/index.ts --clean --watch src --onSuccess 'yarn generate-api-2'",
    lint: 'eslint src/**/*.ts',
    test: 'vitest --global test.ts',
    format: 'prettier --write .',
    'format:staged': 'pretty-quick --staged',
    prerelease: 'yarn build && cd ./tests && yarn generate && yarn build',
    release: 'dotenv release-it',
    postrelease: 'yarn build && yarn update-samples',
    'generate-api':
      'node ./dist/bin/orval.js --config ./samples/react-query/basic/orval.config.ts --watch',
    'generate-api-2':
      'node ./dist/bin/orval.js --config /Users/koen.vangeert/workspaces/collibra/data-privacy-policy-enforcement/frontend/orval.config.ts --watch',
    prepare: 'husky install && cd ./samples/react-query/basic && yarn',
    commitlint: 'commitlint',
    'update-samples': 'zx ./scripts/update-samples.mjs',
  },
  ea = {
    '@commitlint/cli': '^16.2.1',
    '@commitlint/config-conventional': '^16.2.1',
    '@faker-js/faker': '^6.1.1',
    '@release-it/conventional-changelog': '^4.2.0',
    '@types/chalk': '^2.2.0',
    '@types/commander': '^2.12.2',
    '@types/fs-extra': '^9.0.12',
    '@types/inquirer': '^8.2.0',
    '@types/lodash.get': '^4.4.6',
    '@types/lodash.omit': '^4.5.6',
    '@types/lodash.omitby': '^4.6.6',
    '@types/lodash.uniq': '^4.5.6',
    '@types/lodash.uniqby': '^4.7.6',
    '@types/lodash.uniqwith': '^4.5.6',
    '@types/micromatch': '^4.0.2',
    '@types/node': '^17.0.21',
    '@types/prettier': '^2.4.4',
    '@types/request': '^2.48.8',
    '@types/validator': '^13.7.1',
    '@typescript-eslint/eslint-plugin': '^5.14.0',
    '@typescript-eslint/parser': '^5.14.0',
    'dotenv-cli': '^4.0.0',
    eslint: '^8.10.0',
    'eslint-config-prettier': '^8.5.0',
    'eslint-plugin-prettier': '^4.0.0',
    husky: '^7.0.2',
    'lint-staged': '^12.3.5',
    'npm-run-all': '^4.1.5',
    prettier: '2.6.2',
    'pretty-quick': '^3.1.3',
    'release-it': '^14.12.5',
    rimraf: '^3.0.2',
    tsup: '^5.12.0',
    typescript: '^4.6.2',
    vitest: '^0.6.0',
    zx: '^5.2.0',
  },
  ta = {
    '@apidevtools/swagger-parser': '^10.0.3',
    acorn: '^8.7.0',
    cac: '^6.7.12',
    chalk: '^4.1.2',
    chokidar: '^3.5.3',
    'compare-versions': '^4.1.3',
    cuid: '^2.1.8',
    debug: '^4.3.3',
    esbuild: '^0.14.25',
    esutils: '2.0.3',
    execa: '^5.1.1',
    'find-up': '5.0.0',
    'fs-extra': '^10.0.1',
    globby: '11.0.4',
    'ibm-openapi-validator': '^0.57.4',
    inquirer: '^8.2.0',
    'lodash.get': '^4.4.2',
    'lodash.omit': '^4.5.0',
    'lodash.omitby': '^4.6.0',
    'lodash.uniq': '^4.5.0',
    'lodash.uniqby': '^4.7.0',
    'lodash.uniqwith': '^4.5.0',
    micromatch: '^4.0.4',
    'openapi3-ts': '^2.0.2',
    swagger2openapi: '^7.0.8',
    tsconfck: '^1.2.0',
    upath: '^2.0.1',
    url: '^0.11.0',
    validator: '^13.7.0',
  },
  Nt = (exports.a = {
    name: Bi,
    description: Qi,
    version: _i,
    license: zi,
    files: Ki,
    bin: Li,
    main: Hi,
    keywords: Yi,
    author: Ji,
    repository: Xi,
    scripts: Zi,
    devDependencies: ea,
    dependencies: ta,
  });
c();
var W = {
    ANGULAR: 'angular',
    AXIOS: 'axios',
    AXIOS_FUNCTIONS: 'axios-functions',
    REACT_QUERY: 'react-query',
    SVELTE_QUERY: 'svelte-query',
    VUE_QUERY: 'vue-query',
  },
  me = {
    SINGLE: 'single',
    SPLIT: 'split',
    TAGS: 'tags',
    TAGS_SPLIT: 'tags-split',
  },
  ee = {
    POST: 'post',
    PUT: 'put',
    GET: 'get',
    PATCH: 'patch',
    DELETE: 'delete',
    HEAD: 'head',
  };
c();
var _upath = require('upath');
var k = (e) => Boolean(e.$ref),
  gn = (e) => !_upath.extname.call(void 0, e);
function C(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function D(e) {
  return typeof e == 'string';
}
function dn(e) {
  return typeof e == 'number';
}
function L(e) {
  return typeof e == 'boolean';
}
function _(e) {
  return typeof e == 'function';
}
function ct(e) {
  return typeof e > 'u';
}
function yn(e) {
  return typeof e === null;
}
var hn = (e) => Object.values(ee).includes(e);
c();
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
var _readline = require('readline');
var _readline2 = _interopRequireDefault(_readline);
var F = console.log,
  fu = (exports.e = ({ name: e, version: t, description: r }) =>
    F(
      `\u{1F37B} Start ${_chalk2.default.cyan.bold(e)} ${_chalk2.default.green(
        `v${t}`,
      )}${r ? ` - ${r}` : ''}`,
    )),
  xn = (e) => F(_chalk2.default.red(e));
var Sn = (e) =>
    F(
      `\u{1F389} ${
        e ? `${_chalk2.default.green(e)} - ` : ''
      }Your OpenAPI spec has been converted into ready to use orval!`,
    ),
  wn = (e) => {
    F(_chalk2.default.yellow('(!) Warnings')),
      e.forEach((t) =>
        F(
          _chalk2.default.yellow(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  Tn = (e) => {
    F(_chalk2.default.red('(!) Errors')),
      e.forEach((t) =>
        F(
          _chalk2.default.red(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  Ut = { silent: 0, error: 1, warn: 2, info: 3 },
  On,
  $n,
  Wt = 0;
function na() {
  let e = process.stdout.rows - 2,
    t =
      e > 0
        ? `
`.repeat(e)
        : '';
  console.log(t),
    _readline2.default.cursorTo(process.stdout, 0, 0),
    _readline2.default.clearScreenDown(process.stdout);
}
function H(e = 'info', t = {}) {
  let { prefix: r = '[vite]', allowClearScreen: n = !0 } = t,
    o = Ut[e],
    s = n && process.stdout.isTTY && !process.env.CI ? na : () => {};
  function a(l, m, u = {}) {
    if (o >= Ut[l]) {
      let g = l === 'info' ? 'log' : l,
        d = () => {
          if (u.timestamp) {
            let f =
              l === 'info'
                ? _chalk2.default.cyan.bold(r)
                : l === 'warn'
                ? _chalk2.default.yellow.bold(r)
                : _chalk2.default.red.bold(r);
            return `${_chalk2.default.dim(
              new Date().toLocaleTimeString(),
            )} ${f} ${m}`;
          } else return m;
        };
      l === On && m === $n
        ? (Wt++, s(), console[g](d(), _chalk2.default.yellow(`(x${Wt + 1})`)))
        : ((Wt = 0), ($n = m), (On = l), u.clear && s(), console[g](d()));
    }
  }
  let i = new Set(),
    p = {
      hasWarned: !1,
      info(l, m) {
        a('info', l, m);
      },
      warn(l, m) {
        (p.hasWarned = !0), a('warn', l, m);
      },
      warnOnce(l, m) {
        i.has(l) || ((p.hasWarned = !0), a('warn', l, m), i.add(l));
      },
      error(l, m) {
        (p.hasWarned = !0), a('error', l, m);
      },
      clearScreen(l) {
        o >= Ut[l] && s();
      },
    };
  return p;
}
c();
var Bt = function (e, t) {
    return (
      (t = t || ''), e.replace(/(^|-)/g, '$1\\u' + t).replace(/,/g, '\\u' + t)
    );
  },
  lt = Bt('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
  ut = 'a-z' + Bt('DF-F6,F8-FF', '00'),
  Ke = 'A-Z' + Bt('C0-D6,D8-DE', '00'),
  oa = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
  ue = {
    capitalize: new RegExp('(^|[' + lt + '])([' + ut + '])', 'g'),
    pascal: new RegExp('(^|[' + lt + '])+([' + ut + Ke + '])', 'g'),
    fill: new RegExp('[' + lt + ']+(.|$)', 'g'),
    sentence: new RegExp(
      '(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + ut + '])',
      'g',
    ),
    improper: new RegExp('\\b(' + oa + ')\\b', 'g'),
    relax: new RegExp(
      '([^' + Ke + '])([' + Ke + ']*)([' + Ke + '])(?=[^' + Ke + ']|$)',
      'g',
    ),
    upper: new RegExp('^[^' + ut + ']+$'),
    hole: /[^\s]\s[^\s]/,
    apostrophe: /'/g,
    room: new RegExp('[' + lt + ']'),
  },
  sa = (e) => e.replace(ue.apostrophe, ''),
  Rn = String.prototype.toUpperCase,
  Qt = String.prototype.toLowerCase,
  ft = (e, t, r = !1) => (
    t != null &&
      (e = e.replace(ue.fill, function (n, o) {
        return o ? t + o : '';
      })),
    r && (e = sa(e)),
    e
  ),
  ia = (e) => Qt.call(e.charAt(0)) + e.slice(1),
  aa = (e, t, r, n) => t + ' ' + (r ? r + ' ' : '') + n,
  _t = (e, t = !1, r = !1, n = !1) => {
    if (
      ((e = e == null ? '' : e + ''),
      !n && ue.upper.test(e) && (e = Qt.call(e)),
      !t && !ue.hole.test(e))
    ) {
      var o = ft(e, ' ');
      ue.hole.test(o) && (e = o);
    }
    return !r && !ue.room.test(e) && (e = e.replace(ue.relax, aa)), e;
  },
  jn = (e, t, r) => ft(Qt.call(_t(e, !!t)), t, r),
  x = (exports.f = (e) =>
    ft(
      _t(e, !1, !0).replace(ue.pascal, (t, r, n) => Rn.call(n)),
      '',
      !0,
    )),
  j = (exports.g = (e) => ia(x(e))),
  du = (exports.h = (e) => jn(e, '_', !0)),
  Te = (exports.i = (e) => jn(e, '-', !0)),
  yu = (exports.j = (e, t, r) => ft(Rn.call(_t(e, !!t, !1, !0)), t, r));
c();
var _esutils = require('esutils');
var _lodashget = require('lodash.get');
var _lodashget2 = _interopRequireDefault(_lodashget);
var re = (e) => {
    if (!(ct(e) || yn(e)))
      return D(e)
        ? `'${e}'`
        : dn(e) || L(e) || _(e)
        ? `${e}`
        : Array.isArray(e)
        ? `[${e.map(re).join(', ')}]`
        : Object.entries(e).reduce((t, [r, n], o, s) => {
            let a = re(n);
            return s.length === 1
              ? `{ ${r}: ${a}, }`
              : o
              ? s.length - 1 === o
                ? t + `${r}: ${a}, }`
                : t + `${r}: ${a}, `
              : `{ ${r}: ${a}, `;
          }, '');
  },
  V = (exports.l = (e, t) => {
    let {
        whitespace: r = '',
        underscore: n = '',
        dot: o = '',
        dash: s = '',
        es5keyword: a = !1,
      } = t != null ? t : {},
      i = e.replace(/[^\w\s.-]/g, '');
    return (
      r !== !0 && (i = i.replace(/[\s]/g, r)),
      n !== !0 && (i = i.replace(/['_']/g, n)),
      o !== !0 && (i = i.replace(/[.]/g, o)),
      s !== !0 && (i = i.replace(/[-]/g, s)),
      a && (i = _esutils.keyword.isKeywordES5(i, !0) ? `_${i}` : i),
      i
    );
  }),
  z = (exports.m = (e, t) =>
    e.length
      ? (t ? e.map((n) => _lodashget2.default.call(void 0, n, t)) : e).join(`,
    `) + ','
      : ''),
  ca = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  },
  gt = (exports.n = (e) =>
    e
      .toString()
      .split('')
      .reduce((r, n) => r + ca[n], '')),
  dt = (exports.o = (e, t = "'") => e.replace(t, `\\${t}`));
c();
var la = ['number', 'string', 'null', 'unknown', 'undefined', 'object', 'blob'],
  Me = (exports.q = la.reduce(
    (e, t) => (e.push(t, `Array<${t}>`, `${t}[]`), e),
    [],
  )),
  se = (exports.r = [ee.POST, ee.PUT, ee.PATCH, ee.DELETE]),
  wu = (exports.s =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
c();
var _lodashuniq = require('lodash.uniq');
var _lodashuniq2 = _interopRequireDefault(_lodashuniq);
var _lodashuniqwith = require('lodash.uniqwith');
var _lodashuniqwith2 = _interopRequireDefault(_lodashuniqwith);
c();
var _acorn = require('acorn');
var _fsextra = require('fs-extra');
c();
var _esbuild = require('esbuild');
var _fs = require('fs');
var _fs2 = _interopRequireDefault(_fs);
var _globby = require('globby');
var _globby2 = _interopRequireDefault(_globby);
var _micromatch = require('micromatch');
var _micromatch2 = _interopRequireDefault(_micromatch);
var _path = require('path');
var _path2 = _interopRequireDefault(_path);
c();
var _debug = require('debug');
var _debug2 = _interopRequireDefault(_debug);
var Pn = process.env.ORVAL_DEBUG_FILTER,
  zt = process.env.DEBUG;
function vn(e, t = {}) {
  let r = _debug2.default.call(void 0, e),
    { onlyWhenFocused: n } = t,
    o = typeof n == 'string' ? n : e;
  return (s, ...a) => {
    (Pn && !s.includes(Pn)) ||
      (n && !(zt != null && zt.includes(o))) ||
      r(s, ...a);
  };
}
var A = (
    e = '',
    { backupFilename: t = 'filename', extension: r = '.ts' } = {},
  ) => {
    let n = gn(e),
      o = n ? _upath.join.call(void 0, e, t + r) : e,
      s = o.replace(/\.[^/.]+$/, ''),
      a = _upath.dirname.call(void 0, o),
      i = _upath.basename.call(void 0, o, r[0] !== '.' ? `.${r}` : r);
    return {
      path: o,
      pathWithoutExtension: s,
      extension: r,
      isDirectory: n,
      dirname: a,
      filename: i,
    };
  },
  An = vn('orval:file-load'),
  Lt = new Map();
async function yt(e, t) {
  let {
      root: r = process.cwd(),
      isDefault: n = !0,
      defaultFileName: o,
      logLevel: s,
      alias: a,
      tsconfig: i,
      load: p = !0,
    } = t != null ? t : {},
    l = Date.now(),
    m,
    u = !1,
    g = !1;
  if (e) (m = _path2.default.resolve(e)), (u = e.endsWith('.ts'));
  else if (o) {
    let h = _path2.default.resolve(r, `${o}.js`);
    if ((_fs2.default.existsSync(h) && (m = h), !m)) {
      let y = _path2.default.resolve(r, `${o}.mjs`);
      _fs2.default.existsSync(y) && ((m = y), (g = !0));
    }
    if (!m) {
      let y = _path2.default.resolve(r, `${o}.ts`);
      _fs2.default.existsSync(y) && ((m = y), (u = !0));
    }
  }
  m ||
    (e
      ? H(s).error(_chalk2.default.red(`File not found => ${e}`))
      : o
      ? H(s).error(_chalk2.default.red(`File not found => ${o}.{js,mjs,ts}`))
      : H(s).error(_chalk2.default.red('File not found')),
    process.exit(1));
  let d = _upath.normalizeSafe.call(void 0, m),
    f = Lt.get(m);
  if (f) return w($({ path: d }, f), { cached: !0 });
  try {
    let h;
    if (!h && !u && !g)
      try {
        delete U.cache[U.resolve(m)],
          (h = U(m)),
          An(`cjs loaded in ${Date.now() - l}ms`);
      } catch (y) {
        if (
          !new RegExp(
            [
              'Cannot use import statement',
              'Must use import to load ES Module',
              'Unexpected token',
              'Unexpected identifier',
            ].join('|'),
          ).test(y.message)
        )
          throw y;
      }
    if (!h) {
      let { code: y } = await ba(
        m,
        g,
        r || _upath.dirname.call(void 0, d),
        a,
        i == null ? void 0 : i.compilerOptions,
      );
      p ? (h = await Oa(m, y, n)) : (h = y),
        An(`bundled file loaded in ${Date.now() - l}ms`);
    }
    return Lt.set(m, { file: h }), { path: d, file: h };
  } catch (h) {
    return Lt.set(m, { error: h }), { path: d, error: h };
  }
}
async function ba(e, t = !1, r, n, o) {
  let s = await _esbuild.build.call(void 0, {
      absWorkingDir: process.cwd(),
      entryPoints: [e],
      outfile: 'out.js',
      write: !1,
      platform: 'node',
      bundle: !0,
      format: t ? 'esm' : 'cjs',
      sourcemap: 'inline',
      metafile: !0,
      target: 'es6',
      minifyWhitespace: !0,
      plugins: [
        ...(n || (o == null ? void 0 : o.paths)
          ? [
              {
                name: 'aliasing',
                setup(i) {
                  i.onResolve({ filter: /^[\w@][^:]/ }, async ({ path: p }) => {
                    if (n) {
                      let l = Object.keys(n),
                        m = l.find(
                          (u) =>
                            p.startsWith(u) ||
                            _micromatch2.default.isMatch(p, l),
                        );
                      if (m) {
                        let u = _micromatch2.default.scan(m),
                          g = _micromatch2.default.scan(n[m]),
                          d = _upath.resolve.call(void 0, r, g.base),
                          f = u.base
                            ? p.replace(u.base, d)
                            : _upath.joinSafe.call(void 0, d, p),
                          y = _upath.extname.call(void 0, f) ? f : `${f}.ts`;
                        return _fs2.default.existsSync(y)
                          ? { path: y }
                          : void 0;
                      }
                    }
                    if (o != null && o.paths) {
                      let l = Object.keys(o == null ? void 0 : o.paths),
                        m = l.find(
                          (u) =>
                            p.startsWith(u) ||
                            _micromatch2.default.isMatch(p, l),
                        );
                      if (m) {
                        let u = _micromatch2.default.scan(m),
                          g = _micromatch2.default.scan(
                            o == null ? void 0 : o.paths[m][0],
                          ),
                          d = _upath.resolve.call(void 0, r, g.base),
                          f = u.base
                            ? p.replace(u.base, d)
                            : _upath.joinSafe.call(void 0, d, p),
                          y = _upath.extname.call(void 0, f) ? f : `${f}.ts`;
                        return _fs2.default.existsSync(y)
                          ? { path: y }
                          : void 0;
                      }
                    }
                  });
                },
              },
            ]
          : []),
        {
          name: 'externalize-deps',
          setup(i) {
            i.onResolve({ filter: /.*/ }, (p) => {
              let l = p.path;
              if (l[0] !== '.' && !_path2.default.isAbsolute(l))
                return { external: !0 };
            });
          },
        },
        {
          name: 'replace-import-meta',
          setup(i) {
            i.onLoad({ filter: /\.[jt]s$/ }, async (p) => {
              let l = await _fs2.default.promises.readFile(p.path, 'utf8');
              return {
                loader: p.path.endsWith('.ts') ? 'ts' : 'js',
                contents: l
                  .replace(
                    /\bimport\.meta\.url\b/g,
                    JSON.stringify(`file://${p.path}`),
                  )
                  .replace(
                    /\b__dirname\b/g,
                    JSON.stringify(_path2.default.dirname(p.path)),
                  )
                  .replace(/\b__filename\b/g, JSON.stringify(p.path)),
              };
            });
          },
        },
      ],
    }),
    { text: a } = s.outputFiles[0];
  return {
    code: a,
    dependencies: s.metafile ? Object.keys(s.metafile.inputs) : [],
  };
}
async function Oa(e, t, r) {
  let n = _path2.default.extname(e),
    o = U.extensions[n];
  (U.extensions[n] = (i, p) => {
    p === e ? i._compile(t, p) : o(i, p);
  }),
    delete U.cache[U.resolve(e)];
  let s = U(e),
    a = r && s.__esModule ? s.default : s;
  return (U.extensions[n] = o), a;
}
async function Ht(e, t) {
  let r = await _globby2.default.call(void 0, e, { cwd: t, absolute: !0 });
  await Promise.all(r.map((n) => _fs2.default.promises.unlink(n)));
}
c();
c();
var Yt = (e) =>
  e.toLowerCase().includes('.yaml') || e.toLowerCase().includes('.yml')
    ? 'yaml'
    : 'json';
c();
var _isURL = require('validator/lib/isURL');
var _isURL2 = _interopRequireDefault(_isURL);
var xa = /^https?:\/\/\w+(\.\w+)*(:[0-9]+)?(\/.*)?$/,
  fe = (e) => _isURL2.default.call(void 0, e) || xa.test(e);
var ne = (e, t) => {
    let r = _upath.relative.call(void 0, e, t);
    return _upath.normalizeSafe.call(void 0, `.${_upath.sep}${r}`);
  },
  ht = (e, t) => {
    if (fe(e)) {
      let r = new URL(t);
      return e
        .replace(r.origin, '')
        .replace(A(r.pathname).dirname, '')
        .replace(`.${Yt(e)}`, '');
    }
    return (
      '/' +
      _upath.normalize
        .call(void 0, _upath.relative.call(void 0, A(t).dirname, e))
        .split('../')
        .join('')
        .replace(`.${Yt(e)}`, '')
    );
  };
var Ae = 'BodyType',
  Dn = (e, t) => {
    let r = A(e),
      n = A(t.path),
      { pathWithoutExtension: o } = A(ne(r.dirname, n.path));
    return o;
  },
  Ot = async ({
    output: e,
    mutator: t,
    name: r,
    workspace: n,
    tsconfig: o,
  }) => {
    var h;
    if (!t || !e) return;
    let s = t.default,
      a = t.name ? t.name : `${r}Mutator`,
      i = t.path,
      p = await _fsextra.readFile.call(void 0, i, 'utf8'),
      l =
        p.includes('export type ErrorType') ||
        p.includes('export interface ErrorType'),
      m =
        p.includes(`export type ${Ae}`) || p.includes(`export interface ${Ae}`),
      u = t.default ? `${x(r)}ErrorType` : 'ErrorType',
      g = t.default ? `${x(r)}${Ae}` : Ae,
      { file: d, cached: f } = await yt(i, {
        isDefault: !1,
        root: n,
        alias: t.alias,
        tsconfig: o,
        load: !1,
      });
    if (d) {
      let y = s ? 'default' : t.name,
        O = Pa(d, y);
      O ||
        (H().error(
          _chalk2.default.red(
            `Your mutator file doesn't have the ${y} exported function`,
          ),
        ),
        process.exit(1));
      let S = Dn(e, t);
      return $(
        {
          name: a,
          path: S,
          default: s,
          hasErrorType: l,
          errorTypeName: u,
          hasSecondArg: O.numberOfParams > 1,
          hasThirdArg: O.numberOfParams > 2,
          isHook:
            !!(
              (h = t == null ? void 0 : t.name) != null && h.startsWith('use')
            ) && !O.numberOfParams,
        },
        m ? { bodyTypeName: g } : {},
      );
    } else {
      let y = Dn(e, t);
      return (
        f ||
          H().warn(
            _chalk2.default.yellow('Failed to parse provided mutator function'),
          ),
        $(
          {
            name: a,
            path: y,
            default: s,
            hasSecondArg: !1,
            hasThirdArg: !1,
            isHook: !1,
            hasErrorType: l,
            errorTypeName: u,
          },
          m ? { bodyTypeName: g } : {},
        )
      );
    }
  },
  Pa = (e, t) => {
    var r, n;
    try {
      let o = _acorn.Parser.parse(e, { ecmaVersion: 6 }),
        s =
          (r = o == null ? void 0 : o.body) == null
            ? void 0
            : r.find((i) => {
                var p, l, m, u, g, d, f;
                if (i.type === 'ExpressionStatement')
                  return ((m =
                    (l =
                      (p = i.expression.arguments) == null ? void 0 : p[1]) ==
                    null
                      ? void 0
                      : l.properties) != null &&
                    m.some((h) => {
                      var y;
                      return ((y = h.key) == null ? void 0 : y.name) === t;
                    })) ||
                    ((g =
                      (u = i.expression.left) == null ? void 0 : u.property) ==
                    null
                      ? void 0
                      : g.name) === t
                    ? !0
                    : (f =
                        (d = i.expression.right) == null
                          ? void 0
                          : d.properties) == null
                    ? void 0
                    : f.some((h) => h.key.name === t);
              });
      if (!s) return;
      if (s.expression.type === 'AssignmentExpression') {
        if (
          s.expression.right.type === 'FunctionExpression' ||
          s.expression.right.type === 'ArrowFunctionExpression'
        )
          return { numberOfParams: s.expression.right.params.length };
        if (s.expression.right.name) return bt(o, s.expression.right.name);
        let i =
          (n = s.expression.right) == null
            ? void 0
            : n.properties.find((p) => p.key.name === t);
        return i.value.name
          ? bt(o, i.value.name)
          : i.value.type === 'FunctionExpression' ||
            i.value.type === 'ArrowFunctionExpression'
          ? { numberOfParams: i.value.params.length }
          : void 0;
      }
      let a = s.expression.arguments[1].properties.find((i) => {
        var p;
        return ((p = i.key) == null ? void 0 : p.name) === t;
      });
      return bt(o, a.value.body.name);
    } catch (e6) {
      return;
    }
  },
  bt = (e, t) => {
    var o;
    let r =
      (o = e == null ? void 0 : e.body) == null
        ? void 0
        : o.find((s) => {
            if (s.type === 'VariableDeclaration')
              return s.declarations.find((a) => a.id.name === t);
            if (s.type === 'FunctionDeclaration' && s.id.name === t) return s;
          });
    if (!r) return;
    if (r.type === 'FunctionDeclaration')
      return { numberOfParams: r.params.length };
    let n = r.declarations.find((s) => s.id.name === t);
    return n.init.name
      ? bt(e, n.init.name)
      : { numberOfParams: n.init.params.length };
  };
var Vn = ({ imports: e = [], target: t, isRootKey: r, specsName: n }) =>
    e.length
      ? _lodashuniqwith2.default
          .call(
            void 0,
            e,
            (o, s) =>
              o.name === s.name &&
              o.default === s.default &&
              o.specKey === s.specKey,
          )
          .sort()
          .map(({ specKey: o, name: s, values: a, alias: i }) => {
            if (o) {
              let p = o !== t ? n[o] : '';
              return !r && o
                ? `import ${a ? '' : 'type '}{ ${s}${
                    i ? ` as ${i}` : ''
                  } } from '../${_upath.join.call(void 0, p, j(s))}';`
                : `import ${a ? '' : 'type '}{ ${s}${
                    i ? ` as ${i}` : ''
                  } } from './${_upath.join.call(void 0, p, j(s))}';`;
            }
            return `import ${a ? '' : 'type '}{ ${s}${
              i ? ` as ${i}` : ''
            } } from './${j(s)}';`;
          }).join(`
`)
      : '',
  B = (exports.u = (e, t) => {
    let r = _lodashuniqwith2.default
      .call(void 0, e, (n, o) => n.name === o.name && n.default === o.default)
      .map(
        (n) =>
          `import ${
            n.default
              ? `${n.name}${
                  n.hasErrorType || n.bodyTypeName
                    ? `, { ${
                        n.hasErrorType ? `ErrorType as ${n.errorTypeName}` : ''
                      }${n.hasErrorType && n.bodyTypeName ? ',' : ''} ${
                        n.bodyTypeName ? `${Ae} as ${n.bodyTypeName}` : ''
                      } }`
                    : ''
                }`
              : `{ ${n.name}${n.hasErrorType ? `, ${n.errorTypeName}` : ''}${
                  n.bodyTypeName ? `, ${n.bodyTypeName}` : ''
                } }`
          } from '${t ? '../' : ''}${n.path}'`,
      ).join(`
`);
    return r
      ? r +
          `
`
      : '';
  }),
  Ea = (exports.v = ({
    implementation: e,
    exports: t,
    dependency: r,
    specsName: n,
    hasSchemaDir: o,
    isAllowSyntheticDefaultImports: s,
  }) => {
    let a = t.filter((p) => e.includes(p.alias || p.name));
    if (!a.length) return;
    let i = a.reduce((p, l) => {
      var u, g, d;
      let m = o && l.specKey ? l.specKey : 'default';
      return (
        (p[m] = {
          values:
            ((u = p[m]) == null ? void 0 : u.values) ||
            (l.values && (s || !l.syntheticDefaultImport)) ||
            !1,
          deps: [
            ...((d = (g = p[m]) == null ? void 0 : g.deps) != null ? d : []),
            l,
          ],
        }),
        p
      );
    }, {});
    return Object.entries(i).map(([p, { values: l, deps: m }]) => {
      let u = m.find((y) => y.default && (s || !y.syntheticDefaultImport)),
        g = s ? void 0 : m.find((y) => y.syntheticDefaultImport),
        d = _lodashuniq2.default.call(
          void 0,
          m
            .filter((y) => !y.default && !y.syntheticDefaultImport)
            .map(({ name: y, alias: O }) => (O ? `${y} as ${O}` : y)),
        ).join(`,
  `),
        f = '',
        h = g ? `import * as ${g.name} from '${r}';` : '';
      if (h) {
        if (m.length === 1) return h;
        f += `${h}
`;
      }
      return (
        (f += `import ${l ? '' : 'type '}${
          u ? `${u.name}${d ? ',' : ''}` : ''
        }${
          d
            ? `{
  ${d}
}`
            : ''
        } from '${r}${p !== 'default' && n[p] ? `/${n[p]}` : ''}'`),
        f
      );
    }).join(`
`);
  }),
  $t = (exports.w = (e, t, r, n, o) => {
    let s = t
      .map((a) =>
        Ea(
          w($({}, a), {
            implementation: e,
            specsName: r,
            hasSchemaDir: n,
            isAllowSyntheticDefaultImports: o,
          }),
        ),
      )
      .filter(Boolean).join(`
`);
    return s
      ? s +
          `
`
      : '';
  }),
  ge = (exports.x = ({ response: e, body: t, queryParams: r, params: n }) => [
    ...e.imports,
    ...t.imports,
    ...(r ? [{ name: r.schema.name }] : []),
    ...n.flatMap(({ imports: o }) => o),
  ]);
c();
var Ma = (e, t, r) =>
    t && e.formData
      ? `
      formData,`
      : r && e.formUrlEncoded
      ? `
      formUrlEncoded,`
      : e.implementation
      ? `
      ${e.implementation},`
      : '',
  Ia = (exports.z = (e, t, r) => {
    var s;
    let n = r !== !1;
    if (!t && !e.isBlob) return n ? 'options' : '';
    let o = '';
    return (
      t &&
        (o += `
        params,`),
      e.isBlob &&
        (!C(r) || !r.hasOwnProperty('responseType')) &&
        (o += `
        responseType: 'blob',`),
      C(r) &&
        (o += `
 ${(s = re(r)) == null ? void 0 : s.slice(1, -1)}`),
      n &&
        (o += `
    ...options`),
      o
    );
  }),
  de = (exports.A = ({
    route: e,
    body: t,
    queryParams: r,
    response: n,
    verb: o,
    requestOptions: s,
    isFormData: a,
    isFormUrlEncoded: i,
    isAngular: p,
  }) => {
    let l = se.includes(o),
      m = l ? Ma(t, a, i) : '',
      u = Ia(n, r == null ? void 0 : r.schema, s);
    return o === ee.DELETE
      ? m
        ? `
      \`${e}\`,{${p ? 'body' : 'data'}:${m} ${u === 'options' ? `...${u}` : u}}
    `
        : `
      \`${e}\`,${u === 'options' ? u : `{${u}}`}
    `
      : `
      \`${e}\`,${l ? m || 'undefined,' : ''}${u === 'options' ? u : `{${u}}`}
    `;
  }),
  Aa = (exports.B = (e, t, r) =>
    t && e.formData
      ? `,
       data: formData`
      : r && e.formUrlEncoded
      ? `,
       data: formUrlEncoded`
      : e.implementation
      ? `,
      data: ${e.implementation}`
      : ''),
  Ga = (exports.C = (e, t) => {
    if (!t && !e.isBlob) return '';
    let r = ',';
    return (
      t &&
        (r += `
        params,`),
      e.isBlob &&
        (r += `
        responseType: 'blob',`),
      r
    );
  }),
  ye = (exports.D = ({
    route: e,
    body: t,
    queryParams: r,
    response: n,
    verb: o,
    isFormData: s,
    isFormUrlEncoded: a,
    isBodyVerb: i,
    hasSignal: p,
  }) => {
    let l = i ? Aa(t, s, a) : '',
      m = Ga(n, r == null ? void 0 : r.schema),
      u = t.contentType
        ? `,
      headers: {'Content-Type': '${t.contentType}'}`
        : '';
    return `{url: \`${e}\`, method: '${o}'${
      !i && p ? ', signal' : ''
    }${u}${l}${m}
    }`;
  }),
  he = (exports.E = (e, t) => {
    var r, n;
    return t
      ? C(e)
        ? `{${(n = re(e)) == null ? void 0 : n.slice(1, -1)} ...options}`
        : 'options'
      : C(e)
      ? (r = re(e)) == null
        ? void 0
        : r.slice(1, -1)
      : '';
  }),
  be = (exports.F = ({
    body: e,
    formData: t,
    formUrlEncoded: r,
    isFormData: n,
    isFormUrlEncoded: o,
  }) =>
    n && e.formData
      ? t
        ? `const formData = ${t.name}(${e.implementation})`
        : e.formData
      : o && e.formUrlEncoded
      ? r
        ? `const formUrlEncoded = ${r.name}(${e.implementation})`
        : e.formUrlEncoded
      : '');
c();
c();
var _url = require('url');
var _url2 = _interopRequireDefault(_url);
var Le = {
    schemas: '',
    responses: 'Response',
    parameters: 'Parameter',
    requestBodies: 'Body',
  },
  qa = new RegExp('~1', 'g'),
  Ge = async (e, t) => {
    let [r, n] = e.split('#'),
      o = n
        .slice(1)
        .split('/')
        .map((p) => p.replace(qa, '/')),
      s = _lodashget2.default.call(
        void 0,
        t.override,
        [...o.slice(0, 2), 'suffix'],
        '',
      ),
      a = o[o.length - 1];
    if (!r) return { name: x(a) + s, originalName: a, refPaths: o };
    let i = fe(t.specKey)
      ? _url2.default.resolve(t.specKey, r)
      : _upath.resolve.call(void 0, A(t.specKey).dirname, r);
    return { name: x(a) + s, originalName: a, specKey: i, refPaths: o };
  };
c();
var _inquirer = require('inquirer');
var _inquirer2 = _interopRequireDefault(_inquirer);
c();
var _https = require('https');
var _https2 = _interopRequireDefault(_https);
var Nn = (e, t) =>
  new Promise((r, n) => {
    let o = _https2.default.request(e, (s) => {
      let a = '';
      s.on('data', (i) => (a += i.toString())),
        s.on('error', n),
        s.on('end', () => {
          let i = {
            status: s.statusCode,
            headers: s.headers,
            body: JSON.parse(a),
          };
          s.statusCode && s.statusCode >= 200 && s.statusCode <= 299
            ? r(i)
            : n(i);
        });
    });
    o.on('error', n), t && o.write(t, 'binary'), o.end();
  });
var Ba = ({ accessToken: e, repo: t, owner: r, branch: n, path: o }) => {
    let s = JSON.stringify({
      query: `query {
      repository(name: "${t}", owner: "${r}") {
        object(expression: "${n}:${o}") {
          ... on Blob {
            text
          }
        }
      }
    }`,
    });
    return [
      {
        method: 'POST',
        hostname: 'api.github.com',
        path: '/graphql',
        headers: {
          'content-type': 'application/json',
          'user-agent': 'orval-importer',
          authorization: `bearer ${e}`,
          'Content-Length': s.length,
        },
      },
      s,
    ];
  },
  Qa = async (e) => {
    if (await _fsextra.pathExists.call(void 0, e))
      return _fsextra.readFile.call(void 0, e, 'utf-8');
    {
      let t = await _inquirer2.default.prompt([
        {
          type: 'input',
          name: 'githubToken',
          message:
            'Please provide a GitHub token with `repo` rules checked (https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)',
        },
        {
          type: 'confirm',
          name: 'saveToken',
          message:
            'Would you like to store your token for the next time? (stored in your node_modules)',
        },
      ]);
      return (
        t.saveToken &&
          (await _fsextra.outputFile.call(void 0, e, t.githubToken)),
        t.githubToken
      );
    }
  },
  _a = async (e) => {
    var l, m, u, g;
    let t = _upath.join.call(void 0, __dirname, '.githubToken'),
      r = await Qa(t),
      [n] = e.split('github.com/').slice(-1),
      [o, s, , a, ...i] = n.split('/'),
      p = i.join('/');
    try {
      let { body: d } = await Nn(
        ...Ba({ accessToken: r, repo: s, owner: o, branch: a, path: p }),
      );
      return (
        (l = d.errors) != null &&
          l.length &&
          ((m = d.errors) == null
            ? void 0
            : m.some((h) => (h == null ? void 0 : h.type) === 'NOT_FOUND')) &&
          (
            await _inquirer2.default.prompt([
              {
                type: 'confirm',
                name: 'removeToken',
                message:
                  "Your token doesn't have the correct permissions, should we remove it?",
              },
            ])
          ).removeToken &&
          (await _fsextra.unlink.call(void 0, t)),
        (g = (u = d.data) == null ? void 0 : u.repository) == null
          ? void 0
          : g.object.text
      );
    } catch (d) {
      throw d.body
        ? (d.body.message === 'Bad credentials' &&
            (
              await _inquirer2.default.prompt([
                {
                  type: 'confirm',
                  name: 'removeToken',
                  message:
                    "Your token doesn't have the correct permissions, should we remove it?",
                },
              ])
            ).removeToken &&
            (await _fsextra.unlink.call(void 0, t)),
          d.body.message || `Oups... \u{1F37B}. ${d}`)
        : `Oups... \u{1F37B}. ${d}`;
    }
  },
  Wn = {
    order: 199,
    canRead(e) {
      return e.url.includes('github.com');
    },
    read(e) {
      return _a(e.url);
    },
  };
c();
var xt = (e) => e && typeof e == 'object';
function Pe(e, t) {
  return !xt(t) || !xt(e)
    ? e
    : Object.entries(t).reduce((r, [n, o]) => {
        let s = r[n];
        return (
          Array.isArray(s) && Array.isArray(o)
            ? (r[n] = [...s, ...o])
            : xt(s) && xt(o)
            ? (r[n] = Pe(s, o))
            : (r[n] = o),
          r
        );
      }, e);
}
c();
var Bn = ({ title: e, description: t, version: r }) => [
  `Generated by ${Nt.name} v${Nt.version} \u{1F37A}`,
  'Do not edit manually.',
  ...(e ? [e] : []),
  ...(t ? [t] : []),
  ...(r ? [`OpenAPI spec version: ${r}`] : []),
];
c();
var _findup = require('find-up');
var _findup2 = _interopRequireDefault(_findup);
var Qn = async (e, t = process.cwd()) => {
  if (!e) {
    let n = await _findup2.default.call(void 0, ['package.json'], { cwd: t });
    return n ? await Promise.resolve().then(() => le(U(n))) : void 0;
  }
  let r = ie(e, t);
  if (_fsextra.existsSync.call(void 0, r))
    return await Promise.resolve().then(() => le(U(r)));
};
c();
var _tsconfck = require('tsconfck');
var zn = async (e, t = process.cwd()) => {
    var r, n;
    if (ct(e)) {
      let o = await _findup2.default.call(
        void 0,
        ['tsconfig.json', 'jsconfig.json'],
        { cwd: t },
      );
      return o ? (await _tsconfck.parse.call(void 0, o)).tsconfig : void 0;
    }
    if (D(e)) {
      let o = ie(e, t);
      if (_fsextra.existsSync.call(void 0, o)) {
        let s = await _tsconfck.parse.call(void 0, o);
        return (
          ((n =
            (r = s.referenced) == null
              ? void 0
              : r.find(({ tsconfigFile: i }) => i === o)) == null
            ? void 0
            : n.tsconfig) || s.tsconfig
        );
      }
      return;
    }
    if (C(e)) return e;
  },
  Y = (exports.J = (e) => {
    var t, r, n;
    return e
      ? !!((n =
          (t = e == null ? void 0 : e.compilerOptions) == null
            ? void 0
            : t.allowSyntheticDefaultImports) != null
          ? n
          : (r = e == null ? void 0 : e.compilerOptions) == null
          ? void 0
          : r.esModuleInterop)
      : !0;
  });
function pg(e) {
  return e;
}
var Ln = async (e, t = process.cwd(), r = {}) => {
    var y,
      O,
      S,
      T,
      P,
      R,
      I,
      E,
      q,
      J,
      X,
      Z,
      Ee,
      it,
      Be,
      Qe,
      _e,
      ze,
      at,
      pt,
      Mr,
      Ir,
      Ar,
      Gr,
      kr,
      Cr,
      Dr,
      qr,
      Fr,
      Vr,
      Nr,
      Ur,
      Wr,
      Br,
      Qr,
      _r,
      zr,
      Kr,
      Lr,
      Hr,
      Yr,
      Jr,
      Xr,
      Zr,
      en,
      tn,
      rn,
      nn,
      on,
      sn,
      an,
      pn,
      mn,
      cn,
      ln;
    let n = await (_(e) ? e() : e);
    n.input ||
      (H().error(_chalk2.default.red('Config require an input')),
      process.exit(1)),
      n.output ||
        (H().error(_chalk2.default.red('Config require an output')),
        process.exit(1));
    let o = D(n.input) ? { target: n.input } : n.input,
      s = D(n.output) ? { target: n.output } : n.output;
    typeof ((O = (y = s.override) == null ? void 0 : y.angular) == null
      ? void 0
      : O.provideInRoot) < 'u' &&
      console.warn('provideInRoot is deprecated, use provideIn instead');
    let a = ie(s.workspace || '', t),
      { clean: i, prettier: p, client: l, mode: m, mock: u, tslint: g } = r,
      d = await zn(s.tsconfig || r.tsconfig, t),
      f = await Qn(s.packageJson || r.packageJson, t),
      h = {
        input: {
          target: Ja(o.target, t),
          validation: o.validation || !1,
          override: {
            transformer: ie(
              (S = o.override) == null ? void 0 : S.transformer,
              t,
            ),
          },
          converterOptions: (T = o.converterOptions) != null ? T : {},
          parserOptions: Pe(Ya, (P = o.parserOptions) != null ? P : {}),
        },
        output: {
          target: ie(s.target, a),
          schemas: ie(s.schemas, a),
          workspace: s.workspace ? a : void 0,
          client:
            (I = (R = s.client) != null ? R : l) != null
              ? I
              : W.AXIOS_FUNCTIONS,
          mode: Xa((E = s.mode) != null ? E : m),
          mock: (J = (q = s.mock) != null ? q : u) != null ? J : !1,
          clean: (Z = (X = s.clean) != null ? X : i) != null ? Z : !1,
          prettier: (it = (Ee = s.prettier) != null ? Ee : p) != null ? it : !1,
          tslint: (Qe = (Be = s.tslint) != null ? Be : g) != null ? Qe : !1,
          tsconfig: d,
          packageJson: f,
          override: w($({}, s.override), {
            operations: Kn(
              (ze = (_e = s.override) == null ? void 0 : _e.operations) != null
                ? ze
                : {},
              a,
            ),
            tags: Kn(
              (pt = (at = s.override) == null ? void 0 : at.tags) != null
                ? pt
                : {},
              a,
            ),
            mutator: Ce(a, (Mr = s.override) == null ? void 0 : Mr.mutator),
            formData:
              (kr = L((Ir = s.override) == null ? void 0 : Ir.formData)
                ? (Gr = s.override) == null
                  ? void 0
                  : Gr.formData
                : Ce(a, (Ar = s.override) == null ? void 0 : Ar.formData)) !=
              null
                ? kr
                : !0,
            formUrlEncoded:
              (Fr = L((Cr = s.override) == null ? void 0 : Cr.formUrlEncoded)
                ? (qr = s.override) == null
                  ? void 0
                  : qr.formUrlEncoded
                : Ce(
                    a,
                    (Dr = s.override) == null ? void 0 : Dr.formUrlEncoded,
                  )) != null
                ? Fr
                : !0,
            header:
              ((Vr = s.override) == null ? void 0 : Vr.header) === !1
                ? !1
                : _((Nr = s.override) == null ? void 0 : Nr.header)
                ? (Ur = s.override) == null
                  ? void 0
                  : Ur.header
                : Bn,
            requestOptions:
              (Br = (Wr = s.override) == null ? void 0 : Wr.requestOptions) !=
              null
                ? Br
                : !0,
            components: {
              schemas: $(
                { suffix: Le.schemas },
                (zr =
                  (_r = (Qr = s.override) == null ? void 0 : Qr.components) ==
                  null
                    ? void 0
                    : _r.schemas) != null
                  ? zr
                  : {},
              ),
              responses: $(
                { suffix: Le.responses },
                (Hr =
                  (Lr = (Kr = s.override) == null ? void 0 : Kr.components) ==
                  null
                    ? void 0
                    : Lr.responses) != null
                  ? Hr
                  : {},
              ),
              parameters: $(
                { suffix: Le.parameters },
                (Xr =
                  (Jr = (Yr = s.override) == null ? void 0 : Yr.components) ==
                  null
                    ? void 0
                    : Jr.parameters) != null
                  ? Xr
                  : {},
              ),
              requestBodies: $(
                { suffix: Le.requestBodies },
                (tn =
                  (en = (Zr = s.override) == null ? void 0 : Zr.components) ==
                  null
                    ? void 0
                    : en.requestBodies) != null
                  ? tn
                  : {},
              ),
            },
            query: $(
              { useQuery: !0 },
              (nn = (rn = s.override) == null ? void 0 : rn.query) != null
                ? nn
                : {},
            ),
            angular: {
              provideIn:
                (cn =
                  (mn =
                    (sn = (on = s.override) == null ? void 0 : on.angular) ==
                    null
                      ? void 0
                      : sn.provideIn) != null
                    ? mn
                    : (pn = (an = s.override) == null ? void 0 : an.angular) ==
                      null
                    ? void 0
                    : pn.provideInRoot) != null
                  ? cn
                  : 'root',
            },
            useDates: ((ln = s.override) == null ? void 0 : ln.useDates) || !1,
          }),
        },
      };
    return (
      h.input.target ||
        (H().error(_chalk2.default.red('Config require an input target')),
        process.exit(1)),
      !h.output.target &&
        !h.output.schemas &&
        (H().error(
          _chalk2.default.red('Config require an output target or schemas'),
        ),
        process.exit(1)),
      h
    );
  },
  Ya = { validate: !0, resolve: { github: Wn } },
  Ce = (e, t) => {
    var r;
    return C(t)
      ? (t.path ||
          (H().error(_chalk2.default.red('Mutator need a path')),
          process.exit(1)),
        w($({}, t), {
          path: _upath.resolve.call(void 0, e, t.path),
          default: (r = t.default || !t.name) != null ? r : !1,
        }))
      : D(t)
      ? { path: _upath.resolve.call(void 0, e, t), default: !0 }
      : t;
  },
  Ja = (e, t) => (D(e) && !fe(e) ? ie(e, t) : e),
  ie = (e, t) => (D(e) ? _upath.resolve.call(void 0, t, e) : e),
  Kn = (e, t) =>
    Object.fromEntries(
      Object.entries(e).map((l) => {
        var [r, m] = l,
          u = m,
          {
            transformer: n,
            mutator: o,
            formData: s,
            formUrlEncoded: a,
            requestOptions: i,
          } = u,
          p = we(u, [
            'transformer',
            'mutator',
            'formData',
            'formUrlEncoded',
            'requestOptions',
          ]);
        var g, d;
        return [
          r,
          w(
            $(
              $($({}, p), n ? { transformer: ie(n, t) } : {}),
              o ? { mutator: Ce(t, o) } : {},
            ),
            {
              formData: (g = L(s) ? s : Ce(t, s)) != null ? g : !0,
              formUrlEncoded: (d = L(a) ? a : Ce(t, a)) != null ? d : !0,
              requestOptions: i != null ? i : !0,
            },
          ),
        ];
      }),
    ),
  Xa = (e) =>
    e
      ? Object.values(me).includes(e)
        ? e
        : (H().warn(
            _chalk2.default.yellow(`Unknown the provided mode => ${e}`),
          ),
          me.SINGLE)
      : me.SINGLE;
c();
var Hn = async (e, t, r = '.') => {
  if (!e) return;
  let { watch: n } = await Promise.resolve().then(() => le(U('chokidar'))),
    o = ['**/{.git,node_modules}/**'],
    s =
      typeof e == 'boolean'
        ? r
        : Array.isArray(e)
        ? e.filter((i) => typeof i == 'string')
        : e;
  F(
    `Watching for changes in ${
      Array.isArray(s) ? s.map((i) => '"' + i + '"').join(' | ') : '"' + s + '"'
    }`,
  ),
    n(s, { ignorePermissionErrors: !0, ignored: o }).on('all', async (i, p) => {
      F(`Change detected: ${i} ${p}`);
      try {
        await t();
      } catch (l) {
        F(_chalk2.default.red(l));
      }
    });
};
c();
c();
var _swaggerparser = require('@apidevtools/swagger-parser');
var _swaggerparser2 = _interopRequireDefault(_swaggerparser);
var _console = require('console');
c();
var _lodashomit = require('lodash.omit');
var _lodashomit2 = _interopRequireDefault(_lodashomit);
c();
var M = (e, t, r) =>
  e.reduce(async (n, ...o) => t(await n, ...o), Promise.resolve(r));
c();
var _swagger2openapi = require('swagger2openapi');
var _swagger2openapi2 = _interopRequireDefault(_swagger2openapi);
var Yn = async (e, t = {}, r) => {
  try {
    return new Promise((n) => {
      !e.openapi && e.swagger === '2.0'
        ? _swagger2openapi2.default.convertObj(e, t, (o, s) => {
            o
              ? (F(
                  _chalk2.default.yellow(`${r}
=> ${o}`),
                ),
                n(e))
              : n(s.openapi);
          })
        : n(e);
    });
  } catch (n) {
    throw `Oups... \u{1F37B}.
Path: ${r}
Parsing Error: ${n}`;
  }
};
c();
var St = async (e, t = process.cwd(), r = !0) => {
  if (!e) return e;
  try {
    if (D(e)) {
      let n = _upath.resolve.call(void 0, t, e),
        o = await Promise.resolve().then(() => le(U(n)));
      return r && C(o) && o.default ? o.default : o;
    }
    return Promise.resolve(e);
  } catch (n) {
    throw `Oups... \u{1F37B}. Path: ${e} => ${n}`;
  }
};
c();
c();
var Jn = (e) => /[^{]*{[\w_-]*}.*/.test(e),
  Xn = (e) => {
    let t = e.match(/([^{]*){?([\w_-]*)}?(.*)/);
    if (!(t != null && t.length)) return e;
    let r = t[1],
      n = V(j(t[2]), { es5keyword: !0, underscore: !0, dash: !0, dot: !0 }),
      o = Jn(t[3]) ? Xn(t[3]) : t[3];
    return Jn(e) ? `${r}\${${n}}${o}` : `${r}${n}${o}`;
  },
  Zn = (e) =>
    e
      .split('/')
      .reduce(
        (r, n, o) =>
          !n && !o ? r : n.includes('{') ? `${r}/${Xn(n)}` : `${r}/${n}`,
        '',
      );
c();
var N = async (e, t, r = []) => {
  var p;
  if ((p = e == null ? void 0 : e.schema) != null && p.$ref) {
    let l = await N(e == null ? void 0 : e.schema, t, r);
    return { schema: w($({}, e), { schema: l.schema }), imports: r };
  }
  if (!k(e)) return { schema: e, imports: r };
  let {
      name: n,
      originalName: o,
      specKey: s,
      refPaths: a,
    } = await Ge(e.$ref, t),
    i = _lodashget2.default.call(void 0, t.specs[s || t.specKey], a);
  if (!i) throw `Oups... \u{1F37B}. Ref not found: ${e.$ref}`;
  return N(i, w($({}, t), { specKey: s || t.specKey }), [
    ...r,
    { name: n, specKey: s, schemaName: o },
  ]);
};
c();
c();
var op = [
    {
      exports: [
        { name: 'HttpClient', values: !0 },
        { name: 'HttpHeaders' },
        { name: 'HttpParams' },
        { name: 'HttpContext' },
      ],
      dependency: '@angular/common/http',
    },
    {
      exports: [{ name: 'Injectable', values: !0 }],
      dependency: '@angular/core',
    },
    { exports: [{ name: 'Observable', values: !0 }], dependency: 'rxjs' },
  ],
  eo = [],
  to = () => op,
  ro = (e) => {
    let t = V(e);
    return `${x(t)}Service`;
  },
  no = ({
    title: e,
    isRequestOptions: t,
    isMutator: r,
    isGlobalMutator: n,
    provideInRoot: o,
    provideIn: s,
  }) => `
${
  t && !n
    ? `type HttpClientOptions = {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
};`
    : ''
}

${
  t && r
    ? `// eslint-disable-next-line
    type ThirdParameter<T extends (...args: any) => any> = T extends (
  config: any,
  httpClient: any,
  args: infer P,
) => any
  ? P
  : never;`
    : ''
}

@Injectable(${s ? `{ providedIn: '${L(s) ? 'root' : s}' }` : ''})
export class ${e} {
  constructor(
    private http: HttpClient,
  ) {}`,
  oo = () => `};

${eo.join(`
`)}`,
  sp = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: a,
      override: i,
      formData: p,
      formUrlEncoded: l,
    },
    { route: m },
  ) => {
    let u = (i == null ? void 0 : i.requestOptions) !== !1,
      g = (i == null ? void 0 : i.formData) !== !1,
      d = (i == null ? void 0 : i.formUrlEncoded) !== !1,
      f = se.includes(a),
      h = be({
        formData: p,
        formUrlEncoded: l,
        body: o,
        isFormData: g,
        isFormUrlEncoded: d,
      }),
      y = r.definition.success || 'unknown';
    if ((eo.push(`export type ${x(t)}ClientResult = NonNullable<${y}>`), n)) {
      let S = ye({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: g,
          isFormUrlEncoded: d,
          hasSignal: !1,
          isBodyVerb: f,
        }),
        T = u ? he(i == null ? void 0 : i.requestOptions, n.hasThirdArg) : '';
      return ` ${t}<TData = ${y}>(
    ${z(s, 'implementation')}
 ${
   u && n.hasThirdArg ? `options?: ThirdParameter<typeof ${n.name}>` : ''
 }) {${h}
      return ${n.name}<TData>(
      ${S},
      this.http,
      ${T});
    }
  `;
    }
    let O = de({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: i == null ? void 0 : i.requestOptions,
      isFormData: g,
      isFormUrlEncoded: d,
      isAngular: !0,
    });
    return ` ${t}<TData = ${y}>(
    ${z(s, 'implementation')} ${
      u
        ? `options?: HttpClientOptions
`
        : ''
    }  ): Observable<TData>  {${h}
    return this.http.${a}<TData>(${O});
  }
`;
  },
  so = (e, t) => {
    let r = ge(e);
    return { implementation: sp(e, t), imports: r };
  };
c();
var ip = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
      ],
      dependency: 'axios',
    },
  ],
  wt = new Map(),
  Zt = (e) => [...(e ? [] : ip)],
  ap = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: a,
      override: i,
      formData: p,
      formUrlEncoded: l,
    },
    { route: m, context: u },
  ) => {
    let g = (i == null ? void 0 : i.requestOptions) !== !1,
      d = (i == null ? void 0 : i.formData) !== !1,
      f = (i == null ? void 0 : i.formUrlEncoded) !== !1,
      h = Y(u.tsconfig),
      y = be({
        formData: p,
        formUrlEncoded: l,
        body: o,
        isFormData: d,
        isFormUrlEncoded: f,
      }),
      O = se.includes(a);
    if (n) {
      let T = ye({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: f,
          isBodyVerb: O,
          hasSignal: !0,
        }),
        P = g ? he(i == null ? void 0 : i.requestOptions, n.hasSecondArg) : '';
      return (
        wt.set(
          t,
          (R) =>
            `export type ${x(t)}Result = NonNullable<Awaited<ReturnType<${
              R ? `ReturnType<typeof ${R}>['${t}']` : `typeof ${t}`
            }>>>`,
        ),
        `const ${t} = (
    ${z(s, 'implementation')}
 ${g && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
          O
            ? `
`
            : `signal?: AbortSignal
`
        }) => {${y}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${T},
      ${P});
    }
  `
      );
    }
    let S = de({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: i == null ? void 0 : i.requestOptions,
      isFormData: d,
      isFormUrlEncoded: f,
    });
    return (
      wt.set(
        t,
        () =>
          `export type ${x(t)}Result = AxiosResponse<${
            r.definition.success || 'unknown'
          }>`,
      ),
      `const ${t} = <TData = AxiosResponse<${
        r.definition.success || 'unknown'
      }>>(
    ${z(s, 'implementation')} ${
        g
          ? `options?: AxiosRequestConfig
`
          : ''
      } ): Promise<TData> => {${y}
    return axios${h ? '' : '.default'}.${a}(${S});
  }
`
    );
  },
  er = (e) => {
    let t = V(e);
    return `get${x(t)}`;
  },
  tr = ({ title: e, isRequestOptions: t, isMutator: r, noFunction: n }) => `
${
  t && r
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}
  ${
    n
      ? ''
      : `export const ${e} = () => {
`
  }`,
  rr = ({
    operationNames: e,
    title: t,
    noFunction: r,
    hasMutator: n,
    hasAwaitedType: o,
  }) => {
    let s = `return {${e.join(',')}}};
`,
      a = e
        .map((p) => {
          var l;
          return wt.has(p)
            ? (l = wt.get(p)) == null
              ? void 0
              : l(r || !t ? void 0 : t)
            : '';
        })
        .filter(Boolean),
      i =
        n && !o
          ? `
type AwaitedInput<T> = PromiseLike<T> | T;

    type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
          : '';
    return (
      a.length &&
        (i += a.join(`
`)),
      r ? i : s + i
    );
  },
  nr = (e, t) => {
    let r = ge(e);
    return { implementation: ap(e, t), imports: r };
  };
c();
c();
c();
c();
var io = {
  email: 'faker.internet.email()',
  zipCode: 'faker.address.zipCode()',
  city: 'faker.address.city()',
  streetName: 'faker.address.streetName()',
  country: 'faker.address.country()',
  date: 'faker.date.recent()',
  iban: 'faker.finance.iban()',
  userName: 'faker.internet.userName()',
  firstName: 'faker.name.firstName()',
  lastName: 'faker.name.lastName()',
  jobTitle: 'faker.name.jobTitle()',
  gender: 'faker.name.gender()',
  phoneNumber: 'faker.phone.phoneNumber()',
  url: 'faker.internet.url()',
};
c();
c();
var ao = (e, t, r) => {
  var a, i, p, l;
  let n = Object.entries(
      (i = (a = t.specs[r].components) == null ? void 0 : a.schemas) != null
        ? i
        : [],
    ).reduce((m, [u, g]) => ((m[u] = g), m), {}),
    o = Object.entries(
      (l = (p = t.specs[r].components) == null ? void 0 : p.responses) != null
        ? l
        : [],
    ).reduce((m, [u, g]) => {
      var d, f;
      return (
        (m[u] = k(g)
          ? g
          : (f = (d = g.content) == null ? void 0 : d['application/json']) ==
            null
          ? void 0
          : f.schema),
        m
      );
    }, {}),
    s = $($({}, n), o);
  return w($({}, s[e]), { specKey: r });
};
var pp = (e) => e[0] === '/' && e[e.length - 1] === '/',
  Tt = (e = {}, t) => {
    let r = Object.entries(e).find(
      ([n]) =>
        !!(
          (pp(n) && new RegExp(n.slice(1, n.length - 1)).test(t.name)) ||
          `#.${n}` === (t.path ? t.path : `#.${t.name}`)
        ),
    );
    if (!!r)
      return {
        value: Ye(r[1], t.nullable),
        imports: [],
        name: t.name,
        overrided: !0,
      };
  },
  Ye = (e, t) => (t ? `faker.random.arrayElement([${e}, null])` : e),
  Oe = async ({
    schema: e,
    mockOptions: t,
    operationId: r,
    tags: n,
    combine: o,
    context: s,
    imports: a,
  }) => {
    if (k(e)) {
      let { name: p, specKey: l } = await Ge(
          e.$ref,
          w($({}, s), { specKey: e.specKey || s.specKey }),
        ),
        m = w($({}, ao(p, s, l || e.specKey || s.specKey)), {
          name: p,
          path: e.path,
          isRef: !0,
          specKey: l || e.specKey,
        }),
        u = await He({
          item: m,
          mockOptions: t,
          operationId: r,
          tags: n,
          combine: o,
          context: s,
          imports: a,
        });
      return w($({}, u), { type: m.type });
    }
    let i = await He({
      item: e,
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: a,
    });
    return w($({}, i), { type: e.type });
  };
c();
var _cuid = require('cuid');
var _cuid2 = _interopRequireDefault(_cuid);
c();
var po = (e = '', t) => {
  var r;
  return e ? ((r = e.match(new RegExp(t, 'g'))) != null ? r : []).length : 0;
};
c();
var mo = async ({
  item: e,
  items: t,
  isOneOf: r,
  mockOptions: n,
  operationId: o,
  tags: s,
  combine: a,
  context: i,
  imports: p,
}) => {
  var g;
  let l = [],
    m = [...((g = a == null ? void 0 : a.properties) != null ? g : [])];
  return {
    value: await M(
      t,
      async (d, f, h, y) => {
        var S;
        let O = await Oe({
          schema: w($({}, f), {
            name: e.name,
            path: e.path ? e.path : '#',
            specKey: e.specKey,
          }),
          combine: r ? void 0 : { properties: m },
          mockOptions: n,
          operationId: o,
          tags: s,
          context: i,
          imports: p,
        });
        return (
          (l = [...l, ...O.imports]),
          (m = [...m, ...((S = O.properties) != null ? S : [])]),
          !h && !a
            ? O.enums || r
              ? y.length === 1
                ? `faker.random.arrayElement([${O.value}])`
                : `faker.random.arrayElement([${O.value},`
              : y.length === 1
              ? O.type !== 'object'
                ? `${O.value}`
                : `{${O.value}}`
              : `{${O.value},`
            : y.length - 1 === h
            ? O.enums || r
              ? d + O.value + (a ? '' : '])')
              : d + O.value + (a ? '' : '}')
            : O.value
            ? d + O.value + ','
            : d
        );
      },
      '',
    ),
    imports: l,
    name: e.name,
    properties: m,
  };
};
c();
var De = (e) => (_esutils.keyword.isIdentifierNameES5(e) ? e : `'${e}'`);
var co = async ({
  item: e,
  mockOptions: t,
  operationId: r,
  tags: n,
  combine: o,
  context: s,
  imports: a,
}) => {
  if (k(e))
    return Oe({
      schema: w($({}, e), {
        name: e.name,
        path: e.path ? `${e.path}.${e.name}` : e.name,
        specKey: e.specKey,
      }),
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: a,
    });
  if (e.allOf || e.oneOf || e.anyOf)
    return mo({
      item: e,
      items: e.allOf || e.oneOf || e.anyOf,
      isOneOf: !!(e.oneOf || e.anyOf),
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: a,
    });
  if (e.properties) {
    let i = o ? '' : '{',
      p = [],
      l = [];
    return (
      (i += (
        await Promise.all(
          Object.entries(e.properties).map(async ([m, u]) => {
            if (o != null && o.properties.includes(m)) return;
            let g =
              (t == null ? void 0 : t.required) ||
              (Array.isArray(e.required) ? e.required : []).includes(m);
            if (po(e.path, `\\.${m}\\.`) >= 1) return;
            let d = await Oe({
              schema: w($({}, u), {
                name: m,
                path: e.path ? `${e.path}.${m}` : `#.${m}`,
                specKey: e.specKey,
              }),
              mockOptions: t,
              operationId: r,
              tags: n,
              context: s,
              imports: p,
            });
            (p = [...p, ...d.imports]), (l = [...l, m]);
            let f = De(m);
            return !g && !d.overrided
              ? `${f}: faker.random.arrayElement([${d.value}, undefined])`
              : `${f}: ${d.value}`;
          }),
        )
      )
        .filter(Boolean)
        .join(', ')),
      (i += o ? '' : '}'),
      { value: i, imports: p, name: e.name, properties: l }
    );
  }
  if (e.additionalProperties) {
    if (L(e.additionalProperties))
      return { value: '{}', imports: [], name: e.name };
    let i = await Oe({
      schema: w($({}, e.additionalProperties), {
        name: e.name,
        path: e.path ? `${e.path}.#` : '#',
        specKey: e.specKey,
      }),
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: a,
    });
    return w($({}, i), {
      value: `{
        '${_cuid2.default.call(void 0)}': ${i.value}
      }`,
    });
  }
  return { value: '{}', imports: [], name: e.name };
};
var He = async ({
  item: e,
  imports: t,
  mockOptions: r,
  operationId: n,
  tags: o,
  combine: s,
  context: a,
}) => {
  var g, d, f, h;
  let i = Tt(
    (d = (g = r == null ? void 0 : r.operations) == null ? void 0 : g[n]) ==
      null
      ? void 0
      : d.properties,
    e,
  );
  if (i) return i;
  let p = Object.entries(
      (f = r == null ? void 0 : r.tags) != null ? f : {},
    ).reduce((y, [O, S]) => (o.includes(O) ? Pe(y, S) : y), {}),
    l = Tt(p == null ? void 0 : p.properties, e);
  if (l) return l;
  let m = Tt(r == null ? void 0 : r.properties, e);
  if (m) return m;
  let u = $($({}, io), (h = r == null ? void 0 : r.format) != null ? h : {});
  if (e.format && u[e.format])
    return {
      value: Ye(u[e.format], e.nullable),
      imports: [],
      name: e.name,
      overrided: !1,
    };
  switch (e.type) {
    case 'number':
    case 'integer':
      return {
        value: Ye('faker.datatype.number()', e.nullable),
        imports: [],
        name: e.name,
      };
    case 'boolean':
      return { value: 'faker.datatype.boolean()', imports: [], name: e.name };
    case 'array': {
      if (!e.items) return { value: [], imports: [], name: e.name };
      let {
        value: y,
        enums: O,
        imports: S,
        name: T,
      } = await Oe({
        schema: w($({}, e.items), {
          name: e.name,
          path: e.path ? `${e.path}.[]` : '#.[]',
          specKey: e.specKey,
        }),
        combine: s,
        mockOptions: r,
        operationId: n,
        tags: o,
        context: a,
        imports: t,
      });
      if (O) {
        if (!k(e.items)) return { value: y, imports: S, name: e.name };
        let P = t.find((I) => T.replace('[]', '') === I.name);
        return {
          value: `faker.random.arrayElements(Object.values(${
            (P == null ? void 0 : P.name) || T
          }))`,
          imports: P ? [...S, w($({}, P), { values: !0 })] : S,
          name: e.name,
        };
      }
      return {
        value: `[...Array(faker.datatype.number({min: 1, max: 10}))].map(() => (${y}))`,
        imports: S,
        name: e.name,
      };
    }
    case 'string': {
      let y = 'faker.random.word()',
        O = [];
      if (e.enum) {
        let S = "['" + e.enum.map((T) => dt(T)).join("','") + "']";
        e.isRef &&
          ((S = `Object.values(${e.name})`),
          (O = [{ name: e.name, values: !0 }])),
          (y = `faker.random.arrayElement(${S})`);
      }
      return {
        value: Ye(y, e.nullable),
        enums: e.enum,
        name: e.name,
        imports: O,
      };
    }
    case 'object':
    default:
      return co({
        item: e,
        mockOptions: r,
        operationId: n,
        tags: o,
        combine: s,
        context: a,
        imports: t,
      });
  }
};
var Rt = (e, t) =>
    Object.entries(_(e) ? e(t) : e).reduce((r, [n, o]) => {
      let s = _(o) ? `(${o})()` : re(o);
      return (
        (r[n] =
          s == null
            ? void 0
            : s.replace(/import_faker.defaults|import_faker.faker/g, 'faker')),
        r
      );
    }, {}),
  lp = (e, t) => {
    var r, n, o;
    return $(
      $(
        $(
          $(
            {
              required:
                (r = t == null ? void 0 : t.mock) == null ? void 0 : r.required,
            },
            (n = t == null ? void 0 : t.mock) != null && n.properties
              ? { properties: Rt(t.mock.properties, e) }
              : {},
          ),
          (o = t == null ? void 0 : t.mock) != null && o.format
            ? { format: Rt(t.mock.format, e) }
            : {},
        ),
        t != null && t.operations
          ? {
              operations: Object.entries(t.operations).reduce((s, [a, i]) => {
                var p;
                return (
                  (p = i.mock) != null &&
                    p.properties &&
                    (s[a] = { properties: Rt(i.mock.properties, e) }),
                  s
                );
              }, {}),
            }
          : {},
      ),
      t != null && t.tags
        ? {
            tags: Object.entries(t.tags).reduce((s, [a, i]) => {
              var p;
              return (
                (p = i.mock) != null &&
                  p.properties &&
                  (s[a] = { properties: Rt(i.mock.properties, e) }),
                s
              );
            }, {}),
          }
        : {},
    );
  },
  up = (e) => {
    let t = e.endsWith('[]');
    switch (t ? e.slice(0, -2) : e) {
      case 'number':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.datatype.number())'
          : 'faker.datatype.number().toString()';
      case 'string':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.random.word())'
          : 'faker.random.word()';
      default:
        return 'undefined';
    }
  },
  fp = ({
    operationId: e,
    tags: t,
    response: r,
    mockOptionsWithoutFunc: n,
    transformer: o,
    context: s,
  }) =>
    M(
      r.types.success,
      async (a, { value: i, originalSchema: p, imports: l }) => {
        if (!i || Me.includes(i)) {
          let g = up(i);
          return a.definitions.push(o ? o(g, r.definition.success) : g), a;
        }
        if (!p) return a;
        let m = await N(p, s),
          u = await He({
            item: $(
              $({ name: i }, m.schema),
              r.imports.length ? { specKey: r.imports[0].specKey } : {},
            ),
            imports: l,
            mockOptions: n,
            operationId: e,
            tags: t,
            context: s,
          });
        return (
          a.imports.push(...u.imports),
          a.definitions.push(
            o ? o(u.value, r.definition.success) : u.value.toString(),
          ),
          a
        );
      },
      { definitions: [], imports: [] },
    ),
  lo = async ({
    operationId: e,
    tags: t,
    response: r,
    override: n,
    transformer: o,
    context: s,
  }) => {
    let a = lp(s.specs[s.specKey], n),
      { definitions: i, imports: p } = await fp({
        operationId: e,
        tags: t,
        response: r,
        mockOptionsWithoutFunc: a,
        transformer: o,
        context: s,
      });
    return { definition: '[' + i.join(', ') + ']', definitions: i, imports: p };
  },
  uo = (e, t) => {
    var o, s, a;
    let r =
        (a =
          (s =
            (o = t == null ? void 0 : t.operations) == null ? void 0 : o[e]) ==
          null
            ? void 0
            : s.mock) == null
          ? void 0
          : a.data,
      n = _(r) ? `(${r})()` : re(r);
    return n == null
      ? void 0
      : n.replace(/import_faker.defaults|import_faker.faker/g, 'faker');
  };
var gp = (e) =>
    e
      .split('')
      .reduce(
        (t, r) => (r === '{' ? t + ':' : r === '}' ? t + '' : t + V(r)),
        '',
      ),
  dp = (e, t = '*') =>
    e
      .split('/')
      .reduce(
        (n, o) => (o ? (o.includes('{') ? `${n}/${gp(o)}` : `${n}/${o}`) : n),
        t,
      ),
  yp = [
    { exports: [{ name: 'rest', values: !0 }], dependency: 'msw' },
    { exports: [{ name: 'faker', values: !0 }], dependency: '@faker-js/faker' },
  ],
  $e = (e, t, r, n, o) => $t(e, [...yp, ...t], r, n, o),
  fo = async (
    { operationId: e, response: t, verb: r, tags: n },
    { pathRoute: o, override: s, context: a },
  ) => {
    var f;
    let {
        definitions: i,
        definition: p,
        imports: l,
      } = await lo({
        operationId: e,
        tags: n,
        response: t,
        override: s,
        context: a,
      }),
      m = dp(o, (f = s == null ? void 0 : s.mock) == null ? void 0 : f.baseUrl),
      u = uo(e, s),
      g = '';
    u
      ? (g = u)
      : i.length > 1
      ? (g = `faker.random.arrayElement(${p})`)
      : i[0] && (g = i[0]);
    let d = t.contentTypes.includes('text/plain') ? 'text' : 'json';
    return {
      implementation: {
        function:
          g && g !== 'undefined'
            ? `export const get${x(e)}Mock = () => (${g})

`
            : '',
        handler: `rest.${r}('${m}', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),${
            g && g !== 'undefined'
              ? `
ctx.${d}(get${x(e)}Mock()),`
              : ''
          }
        )
      }),`,
      },
      imports: l,
    };
  };
c();
var _lodashomitby = require('lodash.omitby');
var _lodashomitby2 = _interopRequireDefault(_lodashomitby);
c();
var ae = { PARAM: 'param', BODY: 'body', QUERY_PARAM: 'queryParam' };
var sr = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  bp = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryStoreResult' },
        { name: 'UseInfiniteQueryStoreResult' },
        { name: 'QueryKey' },
      ],
      dependency: '@sveltestack/svelte-query',
    },
  ],
  go = (e) => [...(e ? [] : sr), ...bp],
  Op = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'react-query',
    },
  ],
  yo = (e) => [...(e ? [] : sr), ...Op],
  $p = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
      ],
      dependency: 'vue-query',
    },
    {
      exports: [
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'vue-query/types',
    },
    {
      exports: [{ name: 'UseQueryReturnType' }],
      dependency: 'vue-query/lib/vue/useBaseQuery',
    },
  ],
  ho = (e) => [...(e ? [] : sr), ...$p],
  xp = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: a,
      formData: i,
      formUrlEncoded: p,
      override: l,
    },
    { route: m, context: u },
  ) => {
    let g = (l == null ? void 0 : l.requestOptions) !== !1,
      d = (l == null ? void 0 : l.formData) !== !1,
      f = (l == null ? void 0 : l.formUrlEncoded) !== !1,
      h = Y(u.tsconfig),
      y = se.includes(a),
      O = be({
        formData: i,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: f,
      });
    if (n) {
      let T = ye({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: f,
          isBodyVerb: y,
          hasSignal: !0,
        }),
        P =
          (n == null ? void 0 : n.bodyTypeName) && o.definition
            ? z(s, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${o.definition}`),
                `$1: ${n.bodyTypeName}<${o.definition}>`,
              )
            : z(s, 'implementation'),
        R = g ? he(l == null ? void 0 : l.requestOptions, n.hasSecondArg) : '';
      return n.isHook
        ? `export const use${x(t)}Hook = () => {
        const ${t} = ${n.name}<${r.definition.success || 'unknown'}>();

        return (
    ${P}
${
  y
    ? ''
    : `signal?: AbortSignal,
`
} ${
            g && n.hasSecondArg
              ? `options?: SecondParameter<typeof ${n.name}>`
              : ''
          }) => {${O}
        return ${t}(
          ${T},
          ${R});
        }
      }
    `
        : `export const ${t} = (
    ${P}
 ${g && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>,` : ''}${
            y
              ? `
`
              : `signal?: AbortSignal
`
          }) => {${O}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${T},
      ${R});
    }
  `;
    }
    let S = de({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: l == null ? void 0 : l.requestOptions,
      isFormData: d,
      isFormUrlEncoded: f,
    });
    return `export const ${t} = (
    ${z(s, 'implementation')} ${
      g
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${O}
    return axios${h ? '' : '.default'}.${a}(${S});
  }
`;
  },
  or = { INFINITE: 'infiniteQuery', QUERY: 'query' },
  Sp = ['getNextPageParam', 'getPreviousPageParam'],
  wp = ({ params: e, options: t, type: r }) => {
    var o;
    if (t === !1) return '';
    let n = C(t)
      ? ` ${
          (o = re(
            _lodashomitby2.default.call(
              void 0,
              t,
              (s, a) => !!(r !== or.INFINITE && Sp.includes(a)),
            ),
          )) == null
            ? void 0
            : o.slice(1, -1)
        }`
      : '';
    return e.length
      ? `{${
          !C(t) || !t.hasOwnProperty('enabled')
            ? `enabled: !!(${e.map(({ name: s }) => s).join(' && ')}),`
            : ''
        }${n} ...queryOptions}`
      : t
      ? `{${n} ...queryOptions}`
      : 'queryOptions';
  },
  bo = ({
    operationName: e,
    definitions: t,
    mutator: r,
    isRequestOptions: n,
    type: o,
  }) => {
    let s = r == null ? void 0 : r.isHook,
      a = o
        ? `Use${x(o)}Options<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${x(e)}Hook>` : `typeof ${e}`
          }>>, TError, TData>`
        : `UseMutationOptions<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${x(e)}Hook>` : `typeof ${e}`
          }>>, TError,${t ? `{${t}}` : 'TVariables'}, TContext>`;
    return n
      ? `options?: { ${o ? 'query' : 'mutation'}?:${a}, ${
          r
            ? r != null && r.hasSecondArg
              ? `request?: SecondParameter<typeof ${r.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        }}
`
      : `${o ? 'queryOptions' : 'mutationOptions'}?: ${a}`;
  },
  Tp = ({ outputClient: e, type: t, isMutatorHook: r, operationName: n }) => {
    switch (e) {
      case W.SVELTE_QUERY:
        return `Use${x(t)}StoreResult<Awaited<ReturnType<${
          r ? `ReturnType<typeof use${x(n)}Hook>` : `typeof ${n}`
        }>>, TError, TData, QueryKey>`;
      case W.VUE_QUERY:
        return ` UseQueryReturnType<TData, TError, Use${x(
          t,
        )}Result<TData, TError>>`;
      case W.REACT_QUERY:
      default:
        return ` Use${x(t)}Result<TData, TError>`;
    }
  },
  Rp = ({
    queryOption: { name: e, queryParam: t, options: r, type: n },
    operationName: o,
    queryProps: s,
    queryKeyFnName: a,
    properties: i,
    params: p,
    props: l,
    mutator: m,
    isRequestOptions: u,
    response: g,
    outputClient: d,
  }) => {
    let f = t
        ? l
            .map(({ name: S }) =>
              S === 'params' ? `{ ${t}: pageParam, ...params }` : S,
            )
            .join(',')
        : i,
      h = Tp({
        outputClient: d,
        type: n,
        isMutatorHook: m == null ? void 0 : m.isHook,
        operationName: o,
      }),
      y = `AxiosError<${g.definition.errors || 'unknown'}>`;
    m &&
      (y = m.hasErrorType
        ? `${m.default ? x(o) : ''}ErrorType<${
            g.definition.errors || 'unknown'
          }>`
        : g.definition.errors || 'unknown');
    let O =
      m != null && m.isHook
        ? `ReturnType<typeof use${x(o)}Hook>`
        : `typeof ${o}`;
    return `
export type ${x(e)}QueryResult = NonNullable<Awaited<ReturnType<${O}>>>
export type ${x(e)}QueryError = ${y}

export const ${j(
      `use-${e}`,
    )} = <TData = Awaited<ReturnType<${O}>>, TError = ${y}>(
 ${s} ${bo({
      operationName: o,
      definitions: '',
      mutator: m,
      isRequestOptions: u,
      type: n,
    })}
  ): ${h} & { queryKey: QueryKey } => {

  ${
    u
      ? `const {query: queryOptions${
          m
            ? m.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  const queryKey = queryOptions?.queryKey ?? ${a}(${i});

  ${m != null && m.isHook ? `const ${o} =  use${x(o)}Hook()` : ''}

  const queryFn: QueryFunction<Awaited<ReturnType<${
    m != null && m.isHook ? `ReturnType<typeof use${x(o)}Hook>` : `typeof ${o}`
  }>>> = (${
      t && l.some(({ type: S }) => S === 'queryParam')
        ? '{ signal, pageParam }'
        : '{ signal }'
    }) => ${o}(${f}${f ? ', ' : ''}${
      u
        ? m
          ? m.hasSecondArg
            ? 'requestOptions, signal'
            : 'signal'
          : '{ signal, ...axiosOptions }'
        : ''
    });

  const query = ${j(`use-${n}`)}<Awaited<ReturnType<${
      m != null && m.isHook
        ? `ReturnType<typeof use${x(o)}Hook>`
        : `typeof ${o}`
    }>>, TError, TData>(queryKey, queryFn, ${wp({
      params: p,
      options: r,
      type: n,
    })})

  return {
    queryKey,
    ...query
  }
}
`;
  },
  jp = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: a,
      mutator: i,
      response: p,
      operationId: l,
    },
    { route: m, override: { operations: u = {} }, context: g },
    d,
  ) => {
    var R;
    let f = a == null ? void 0 : a.query,
      h = (a == null ? void 0 : a.requestOptions) !== !1,
      y = (R = u[l]) == null ? void 0 : R.query;
    if (
      o === ee.GET ||
      (y == null ? void 0 : y.useInfinite) ||
      (y == null ? void 0 : y.useQuery)
    ) {
      let I = n
          .map(({ name: X, type: Z }) => (Z === ae.BODY ? r.implementation : X))
          .join(','),
        E = [
          ...(f != null && f.useInfinite
            ? [
                {
                  name: j(`${t}-infinite`),
                  options: f == null ? void 0 : f.options,
                  type: or.INFINITE,
                  queryParam: f == null ? void 0 : f.useInfiniteQueryParam,
                },
              ]
            : []),
          ...((!(f != null && f.useQuery) && !(f != null && f.useInfinite)) ||
          (f == null ? void 0 : f.useQuery)
            ? [
                {
                  name: t,
                  options: f == null ? void 0 : f.options,
                  type: or.QUERY,
                },
              ]
            : []),
        ],
        q = j(`get-${t}-queryKey`),
        J = z(n, 'implementation');
      return `export const ${q} = (${J}) => [\`${m}\`${
        e ? ', ...(params ? [params]: [])' : ''
      }${r.implementation ? `, ${r.implementation}` : ''}];

    ${E.reduce(
      (X, Z) =>
        X +
        Rp({
          queryOption: Z,
          operationName: t,
          queryProps: J,
          queryKeyFnName: q,
          properties: I,
          params: s,
          props: n,
          mutator: i,
          isRequestOptions: h,
          response: p,
          outputClient: d,
        }),
      '',
    )}
`;
    }
    let O = n
        .map(({ definition: I, type: E }) =>
          E === ae.BODY
            ? i != null && i.bodyTypeName
              ? `data: ${i.bodyTypeName}<${r.definition}>`
              : `data: ${r.definition}`
            : I,
        )
        .join(';'),
      S = n
        .map(({ name: I, type: E }) => (E === ae.BODY ? 'data' : I))
        .join(','),
      T = `AxiosError<${p.definition.errors || 'unknown'}>`;
    i &&
      (T = i.hasErrorType
        ? `${i.default ? x(t) : ''}ErrorType<${
            p.definition.errors || 'unknown'
          }>`
        : p.definition.errors || 'unknown');
    let P =
      i != null && i.isHook
        ? `ReturnType<typeof use${x(t)}Hook>`
        : `typeof ${t}`;
    return `
    export type ${x(t)}MutationResult = NonNullable<Awaited<ReturnType<${P}>>>
    ${
      r.definition
        ? `export type ${x(t)}MutationBody = ${
            i != null && i.bodyTypeName
              ? `${i.bodyTypeName}<${r.definition}>`
              : r.definition
          }`
        : ''
    }
    export type ${x(t)}MutationError = ${T}

    export const ${j(`use-${t}`)} = <TError = ${T},
    ${O ? '' : 'TVariables = void,'}
    TContext = unknown>(${bo({
      operationName: t,
      definitions: O,
      mutator: i,
      isRequestOptions: h,
    })}) => {
      ${
        h
          ? `const {mutation: mutationOptions${
              i
                ? i != null && i.hasSecondArg
                  ? ', request: requestOptions'
                  : ''
                : ', axios: axiosOptions'
            }} = options ?? {}`
          : ''
      }

      ${i != null && i.isHook ? `const ${t} =  use${x(t)}Hook()` : ''}


      const mutationFn: MutationFunction<Awaited<ReturnType<${P}>>, ${
      O ? `{${O}}` : 'TVariables'
    }> = (${S ? 'props' : ''}) => {
          ${S ? `const {${S}} = props ?? {}` : ''};

          return  ${t}(${S}${S ? ',' : ''}${
      h
        ? i
          ? i != null && i.hasSecondArg
            ? 'requestOptions'
            : ''
          : 'axiosOptions'
        : ''
    })
        }

      return useMutation<Awaited<ReturnType<typeof ${t}>>, TError, ${
      O ? `{${O}}` : 'TVariables'
    }, TContext>(mutationFn, mutationOptions)
    }
    `;
  },
  jt = () => '',
  Pt = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
${
  e && t
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}`,
  vt = () => '',
  Et = (e, t, r) => {
    let n = ge(e),
      o = xp(e, t),
      s = jp(e, t, r);
    return {
      implementation: `${o}

${s}`,
      imports: n,
    };
  };
c();
var Pp = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  vp = [
    {
      exports: [
        { name: 'useSwr', values: !0, default: !0 },
        { name: 'SWRConfiguration' },
        { name: 'Key' },
      ],
      dependency: 'swr',
    },
  ],
  Oo = (e) => [...(e ? [] : Pp), ...vp],
  Ep = (
    {
      queryParams: e,
      operationName: t,
      response: r,
      mutator: n,
      body: o,
      props: s,
      verb: a,
      formData: i,
      formUrlEncoded: p,
      override: l,
    },
    { route: m, context: u },
  ) => {
    let g = (l == null ? void 0 : l.requestOptions) !== !1,
      d = (l == null ? void 0 : l.formData) !== !1,
      f = (l == null ? void 0 : l.formUrlEncoded) !== !1,
      h = se.includes(a),
      y = Y(u.tsconfig),
      O = be({
        formData: i,
        formUrlEncoded: p,
        body: o,
        isFormData: d,
        isFormUrlEncoded: f,
      });
    if (n) {
      let T = ye({
          route: m,
          body: o,
          queryParams: e,
          response: r,
          verb: a,
          isFormData: d,
          isFormUrlEncoded: f,
          hasSignal: !1,
          isBodyVerb: h,
        }),
        P = g ? he(l == null ? void 0 : l.requestOptions, n.hasSecondArg) : '';
      return `export const ${t} = (
    ${z(s, 'implementation')}
 ${
   g && n.hasSecondArg ? `options?: SecondParameter<typeof ${n.name}>` : ''
 }) => {${O}
      return ${n.name}<${r.definition.success || 'unknown'}>(
      ${T},
      ${P});
    }
  `;
    }
    let S = de({
      route: m,
      body: o,
      queryParams: e,
      response: r,
      verb: a,
      requestOptions: l == null ? void 0 : l.requestOptions,
      isFormData: d,
      isFormUrlEncoded: f,
    });
    return `export const ${t} = (
    ${z(s, 'implementation')} ${
      g
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${r.definition.success || 'unknown'}>> => {${O}
    return axios${y ? '' : '.default'}.${a}(${S});
  }
`;
  },
  Mp = ({ operationName: e, mutator: t, isRequestOptions: r }) => {
    let n = `SWRConfiguration<Awaited<ReturnType<typeof ${e}>>, TError> & {swrKey: Key}`;
    return r
      ? `options?: { swr?:${n}, ${
          t
            ? t != null && t.hasSecondArg
              ? `request?: SecondParameter<typeof ${t.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        } }
`
      : `swrOptions?: ${n}`;
  },
  Ip = ({
    operationName: e,
    swrProps: t,
    swrKeyFnName: r,
    properties: n,
    params: o,
    mutator: s,
    isRequestOptions: a,
    response: i,
  }) => {
    let p = n,
      l = o.length
        ? `const isEnable = !!(${o.map(({ name: u }) => u).join(' && ')})
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? ${r}(${n}) : null);`
        : `const swrKey = swrOptions?.swrKey ?? (() => ${r}(${n}))`,
      m = `AxiosError<${i.definition.errors || 'unknown'}>`;
    return (
      s &&
        (m = s.hasErrorType
          ? `ErrorType<${i.definition.errors || 'unknown'}>`
          : i.definition.errors || 'unknown'),
      `
export type ${x(e)}QueryResult = NonNullable<Awaited<ReturnType<typeof ${e}>>>
export type ${x(e)}QueryError = ${m}

export const ${j(`use-${e}`)} = <TError = ${m}>(
 ${t} ${Mp({ operationName: e, mutator: s, isRequestOptions: a })}
  ) => {

  ${
    a
      ? `const {swr: swrOptions${
          s
            ? s != null && s.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  ${l}
  const swrFn = () => ${e}(${p}${p ? ', ' : ''}${
        a
          ? s
            ? s != null && s.hasSecondArg
              ? 'requestOptions'
              : ''
            : 'axiosOptions'
          : ''
      });

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
`
    );
  },
  Ap = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: a,
      mutator: i,
      response: p,
    },
    { route: l },
  ) => {
    let m = (a == null ? void 0 : a.requestOptions) !== !1;
    if (o !== ee.GET) return '';
    let u = n
        .map(({ name: f, type: h }) => (h === ae.BODY ? r.implementation : f))
        .join(','),
      g = j(`get-${t}-key`),
      d = z(n, 'implementation');
    return `export const ${g} = (${d}) => [\`${l}\`${
      e ? ', ...(params ? [params]: [])' : ''
    }${r.implementation ? `, ${r.implementation}` : ''}];

    ${Ip({
      operationName: t,
      swrProps: d,
      swrKeyFnName: g,
      properties: u,
      params: s,
      props: n,
      mutator: i,
      isRequestOptions: m,
      response: p,
    })}
`;
  },
  $o = () => '',
  xo = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `
  ${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
  ${
    e && t
      ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
      : ''
  }`,
  So = () => '',
  wo = (e, t) => {
    let r = ge(e),
      n = Ep(e, t),
      o = Ap(e, t);
    return {
      implementation: `${n}

${o}`,
      imports: r,
    };
  };
var Je = W.AXIOS,
  To = {
    axios: { client: nr, header: tr, dependencies: Zt, footer: rr, title: er },
    'axios-functions': {
      client: (e, t) => {
        let { implementation: r, imports: n } = nr(e, t);
        return { implementation: 'export ' + r, imports: n };
      },
      header: (e) => tr(w($({}, e), { noFunction: !0 })),
      dependencies: Zt,
      footer: (e) => rr(w($({}, e), { noFunction: !0 })),
      title: er,
    },
    angular: {
      client: so,
      header: no,
      dependencies: to,
      footer: oo,
      title: ro,
    },
    'react-query': {
      client: Et,
      header: Pt,
      dependencies: yo,
      footer: vt,
      title: jt,
    },
    'svelte-query': {
      client: Et,
      header: Pt,
      dependencies: go,
      footer: vt,
      title: jt,
    },
    'vue-query': {
      client: Et,
      header: Pt,
      dependencies: ho,
      footer: vt,
      title: jt,
    },
    swr: { client: wo, header: xo, dependencies: Oo, footer: So, title: $o },
  },
  Xe = (e) => {
    let t = _(e) ? e(To) : To[e];
    if (!t) throw `Oups... \u{1F37B}. Client not found: ${e}`;
    return t;
  },
  xe = (e = Je, t, r, n, o, s, a) => {
    let { dependencies: i } = Xe(e);
    return $t(t, [...i(a), ...r], n, o, s);
  },
  Mt = ({
    outputClient: e = Je,
    isRequestOptions: t,
    title: r,
    customTitleFunc: n,
    isGlobalMutator: o,
    isMutator: s,
    provideInRoot: a,
    provideIn: i,
    hasAwaitedType: p,
  }) => {
    let l = Ro(e, r, n),
      { header: m } = Xe(e);
    return {
      implementation: m({
        title: l.implementation,
        isRequestOptions: t,
        isGlobalMutator: o,
        isMutator: s,
        provideInRoot: a,
        provideIn: i,
        hasAwaitedType: p,
      }),
      implementationMSW: `export const ${l.implementationMSW} = () => [
`,
    };
  },
  It = ({
    outputClient: e = Je,
    operationNames: t,
    title: r,
    customTitleFunc: n,
    hasMutator: o,
    hasAwaitedType: s,
  }) => {
    let a = Ro(e, r, n),
      { footer: i } = Xe(e),
      p;
    try {
      _(e)
        ? ((p = i(t)),
          console.warn(
            '[WARN] Passing an array of strings for operations names to the footer function is deprecated and will be removed in a future major release. Please pass them in an object instead: { operationNames: string[] }.',
          ))
        : (p = i({
            operationNames: t,
            title: a.implementation,
            hasMutator: o,
            hasAwaitedType: s,
          }));
    } catch (e7) {
      p = i({
        operationNames: t,
        title: a.implementation,
        hasMutator: o,
        hasAwaitedType: s,
      });
    }
    return {
      implementation: p,
      implementationMSW: `]
`,
    };
  },
  Ro = (e = Je, t, r) => {
    let { title: n } = Xe(e);
    if (r) {
      let o = r(t);
      return { implementation: n(o), implementationMSW: `get${x(o)}MSW` };
    }
    return { implementation: n(t), implementationMSW: `get${x(t)}MSW` };
  },
  Gp = async (e, t) =>
    t.mock
      ? _(t.mock)
        ? t.mock(e, t)
        : fo(e, t)
      : { implementation: { function: '', handler: '' }, imports: [] },
  jo = (e = Je, t, r) =>
    M(
      t,
      async (n, o) => {
        let { client: s } = Xe(e),
          a = s(o, r, e),
          i = await Gp(o, r);
        return (
          (n[o.operationId] = {
            implementation: o.doc + a.implementation,
            imports: a.imports,
            implementationMSW: i.implementation,
            importsMSW: i.imports,
            tags: o.tags,
            mutator: o.mutator,
            formData: o.formData,
            formUrlEncoded: o.formUrlEncoded,
            operationName: o.operationName,
          }),
          n
        );
      },
      {},
    );
c();
c();
var kp = '\\*/',
  ir = '*\\/',
  ar = new RegExp(kp, 'g');
function Q({ description: e, deprecated: t, summary: r }, n = !1) {
  var l;
  let o = (
      Array.isArray(e)
        ? e.filter((m) => !m.includes('eslint-disable'))
        : [e || '']
    ).map((m) => m.replace(ar, ir)),
    s = [e, t, r].reduce((m, u) => (u ? m + 1 : m), 0);
  if (!s) return '';
  let a = s === 1 && n,
    i = Array.isArray(e)
      ? (l = e.find((m) => m.includes('eslint-disable'))) == null
        ? void 0
        : l.replace(ar, ir)
      : void 0,
    p = `${
      i
        ? `/* ${i} */
`
        : ''
    }/**`;
  return (
    e &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` ${o.join(`
 * `)}`)),
    t &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ' @deprecated')),
    r &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` @summary ${r.replace(ar, ir)}`)),
    (p += a
      ? ' '
      : `
 ${n ? '  ' : ''}`),
    (p += `*/
`),
    p
  );
}
c();
c();
var _lodashuniqby = require('lodash.uniqby');
var _lodashuniqby2 = _interopRequireDefault(_lodashuniqby);
c();
var Ze = async (e, t, r, n) => {
  let { schema: o, imports: s } = await N(t, r),
    a = k(t) ? s[0].name : e,
    i = n ? 'formUrlEncoded' : 'formData',
    p = n
      ? `const ${i} = new URLSearchParams();
`
      : `const ${i} = new FormData();
`;
  if (o.type === 'object' && o.properties) {
    let l = await M(
      Object.entries(o.properties),
      async (m, [u, g]) => {
        var h;
        let { schema: d } = await N(g, r),
          f = '';
        return (
          d.type === 'object' || d.type === 'array'
            ? (f = `${i}.append('${u}', JSON.stringify(${j(a)}${
                u.includes('-') ? `['${u}']` : `.${u}`
              }))
`)
            : d.type === 'number' ||
              d.type === 'integer' ||
              d.type === 'boolean'
            ? (f = `${i}.append('${u}', ${j(a)}${
                u.includes('-') ? `['${u}']` : `.${u}`
              }.toString())
`)
            : (f = `${i}.append('${u}', ${j(a)}${
                u.includes('-') ? `['${u}']` : `.${u}`
              })
`),
          (h = o.required) != null && h.includes(u)
            ? m + f
            : m +
              `if(${j(a)}${
                u.includes('-') ? `['${u}']` : `.${u}`
              } !== undefined) {
 ${f} }
`
        );
      },
      '',
    );
    return `${p}${l}`;
  }
  return o.type === 'array'
    ? `${p}${i}.append('data', JSON.stringify(${j(a)}))
`
    : o.type === 'number' || o.type === 'boolean'
    ? `${p}${i}.append('data', ${j(a)}.toString())
`
    : `${p}${i}.append('data', ${j(a)})
`;
};
c();
c();
var qe = (e, t, r) => {
    let n = `export type ${r} = typeof ${r}[keyof typeof ${r}];
`,
      o = At(e, t);
    return (
      (n += `

`),
      (n += `// eslint-disable-next-line @typescript-eslint/no-redeclare
`),
      (n += `export const ${r} = {
${o}} as const;
`),
      n
    );
  },
  At = (e, t) =>
    [...new Set(e.split(' | '))].reduce((r, n) => {
      if (n === 'null') return r;
      let o = t === 'number',
        a =
          !Number.isNaN(Number(n.slice(1, -1))) || o
            ? Dp(o ? n.toString() : n.slice(1, -1))
            : V(n, { underscore: '_', whitespace: '_', dash: '-' });
      return (
        r +
        `  ${_esutils.keyword.isIdentifierNameES5(a) ? a : `'${a}'`}: ${n},
`
      );
    }, ''),
  Dp = (e) =>
    e[0] === '-'
      ? `NUMBER_MINUS_${e.slice(1)}`
      : e[0] === '+'
      ? `NUMBER_PLUS_${e.slice(1)}`
      : `NUMBER_${e}`;
c();
c();
c();
var Po = async ({ schema: e, name: t, context: r }) => {
  if (e.items) {
    let n = await pe({ schema: e.items, propName: t + 'Item', context: r });
    return {
      value: `${n.value}[]`,
      imports: n.imports,
      schemas: n.schemas,
      isEnum: !1,
      type: 'array',
      isRef: !1,
    };
  } else throw new Error('All arrays must have an `items` key define');
};
c();
c();
var qp = { allOf: '&', oneOf: '|', anyOf: '|' },
  Fp = ({ resolvedData: e, separator: t }) => {
    let r = e.isEnum.every((n) => n);
    if (t === 'oneOf') {
      let n = e.values.find((o) => o.endsWith('OneOf'));
      return e.values
        .filter((o) => !o.endsWith('OneOf'))
        .map((o) => (n ? `${o} & ${n}` : o))
        .join(' | ');
    }
    return e.values.join(` ${r ? '|' : qp[t]} `);
  },
  Gt = async ({ name: e, items: t, separator: r, context: n, nullable: o }) => {
    let s = await M(
        t,
        async (p, l) => {
          let m = e ? e + x(r) : void 0;
          m && p.schemas.length && (m = m + x(gt(p.schemas.length + 1)));
          let u = await pe({
            schema: l,
            propName: m,
            combined: !0,
            context: n,
          });
          return (
            p.values.push(u.value),
            p.imports.push(...u.imports),
            p.schemas.push(...u.schemas),
            p.isEnum.push(u.isEnum),
            p.types.push(u.type),
            p.isRef.push(u.isRef),
            p
          );
        },
        {
          values: [],
          imports: [],
          schemas: [],
          isEnum: [],
          isRef: [],
          types: [],
        },
      ),
      a = s.isEnum.every((p) => p),
      i = Fp({ resolvedData: s, separator: r });
    if (a && e && t.length > 1) {
      let p = `

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ${x(e)} = ${Vp(s, e)}`;
      return {
        value: `typeof ${x(e)}[keyof typeof ${x(e)}] ${o};` + p,
        imports: s.imports.map((l) => w($({}, l), { values: !0 })),
        schemas: s.schemas,
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    }
    return {
      value: i + o,
      imports: s.imports,
      schemas: s.schemas,
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  },
  Vp = ({ values: e, isRef: t, types: r }, n) =>
    e.length === 1
      ? t[0]
        ? e[0]
        : `{${At(e[0], r[0])}} as const`
      : `{${e
          .map((s, a) => (t[a] ? `...${s},` : At(s, r[a])))
          .join('')}} as const`;
var vo = async ({ item: e, name: t, context: r, nullable: n }) => {
  var o, s;
  if (k(e)) {
    let { name: a, specKey: i } = await Ge(e.$ref, r);
    return {
      value: a + n,
      imports: [{ name: a, specKey: i }],
      schemas: [],
      isEnum: !1,
      type: 'object',
      isRef: !0,
    };
  }
  if (e.allOf)
    return Gt({
      items: e.properties
        ? [...e.allOf, _lodashomit2.default.call(void 0, e, 'allOf')]
        : e.allOf,
      name: t,
      separator: 'allOf',
      context: r,
      nullable: n,
    });
  if (e.oneOf)
    return Gt({
      items: e.properties
        ? [...e.oneOf, _lodashomit2.default.call(void 0, e, 'oneOf')]
        : e.oneOf,
      name: t,
      separator: 'oneOf',
      context: r,
      nullable: n,
    });
  if (e.anyOf)
    return Gt({
      items: e.properties
        ? [...e.anyOf, _lodashomit2.default.call(void 0, e, 'anyOf')]
        : e.anyOf,
      name: t,
      separator: 'anyOf',
      context: r,
      nullable: n,
    });
  if (e.properties && Object.entries(e.properties).length > 0)
    return M(
      Object.entries(e.properties),
      async (a, [i, p], l, m) => {
        var O, S, T;
        let u = (Array.isArray(e.required) ? e.required : []).includes(i),
          g = t ? x(t) + x(i) : void 0;
        !!(
          (T =
            (S = (O = r.specs[r.target]) == null ? void 0 : O.components) ==
            null
              ? void 0
              : S.schemas) != null && T[g || '']
        ) && (g = g + 'Property');
        let f = await pe({ schema: p, propName: g, context: r }),
          h = e.readOnly || p.readOnly;
        l || (a.value += '{');
        let y = Q(p, !0);
        if (
          (a.imports.push(...f.imports),
          (a.value += `
  ${y ? `${y}  ` : ''}${h ? 'readonly ' : ''}${De(i)}${u ? '' : '?'}: ${
            f.value
          };`),
          a.schemas.push(...f.schemas),
          m.length - 1 === l)
        ) {
          if (e.additionalProperties)
            if (L(e.additionalProperties))
              a.value += `
  [key: string]: any;
 }`;
            else {
              let P = await oe({
                schema: e.additionalProperties,
                name: t,
                context: r,
              });
              a.value += `
  [key: string]: ${P.value};
}`;
            }
          else
            a.value += `
}`;
          a.value += n;
        }
        return a;
      },
      {
        imports: [],
        schemas: [],
        value: '',
        isEnum: !1,
        type: 'object',
        isRef: !1,
        schema: {},
      },
    );
  if (e.additionalProperties) {
    if (L(e.additionalProperties))
      return {
        value: '{ [key: string]: any }' + n,
        imports: [],
        schemas: [],
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    let a = await oe({ schema: e.additionalProperties, name: t, context: r });
    return {
      value: `{[key: string]: ${a.value}}` + n,
      imports: (o = a.imports) != null ? o : [],
      schemas: (s = a.schemas) != null ? s : [],
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  }
  return {
    value: e.type === 'object' ? '{ [key: string]: any }' : 'unknown' + n,
    imports: [],
    schemas: [],
    isEnum: !1,
    type: 'object',
    isRef: !1,
  };
};
var kt = async ({ item: e, name: t, context: r }) => {
  let n = e.nullable ? ' | null' : '';
  switch ((!e.type && e.items && (e.type = 'array'), e.type)) {
    case 'number':
    case 'integer': {
      let a = 'number',
        i = !1;
      return (
        e.enum && ((a = e.enum.join(' | ')), (i = !0)),
        {
          value: a + n,
          isEnum: i,
          type: 'number',
          schemas: [],
          imports: [],
          isRef: !1,
        }
      );
    }
    case 'boolean':
      return {
        value: 'boolean' + n,
        type: 'boolean',
        isEnum: !1,
        schemas: [],
        imports: [],
        isRef: !1,
      };
    case 'array': {
      let o = await Po({ schema: e, name: t, context: r }),
        { value: a } = o,
        i = we(o, ['value']);
      return $({ value: a + n }, i);
    }
    case 'string': {
      let a = 'string',
        i = !1;
      return (
        e.enum &&
          ((a = `'${e.enum
            .map((p) => (D(p) ? dt(p) : p))
            .filter(Boolean)
            .join("' | '")}'`),
          (i = !0)),
        e.format === 'binary' && (a = 'Blob'),
        r.override.useDates &&
          (e.format === 'date' || e.format === 'date-time') &&
          (a = 'Date'),
        {
          value: a + n,
          isEnum: i,
          type: 'string',
          imports: [],
          schemas: [],
          isRef: !1,
        }
      );
    }
    case 'object':
    default: {
      let s = await vo({ item: e, name: t, context: r, nullable: n }),
        { value: a } = s,
        i = we(s, ['value']);
      return $({ value: a }, i);
    }
  }
};
var oe = async ({ schema: e, name: t, context: r }) => {
  if (k(e)) {
    let { schema: o, imports: s } = await N(e, r),
      { name: a, specKey: i, schemaName: p } = s[0],
      l = i || (r.specKey !== r.target ? r.specKey : void 0);
    return {
      value: a,
      imports: [{ name: a, specKey: l, schemaName: p }],
      type: (o == null ? void 0 : o.type) || 'object',
      schemas: [],
      isEnum: !!(o != null && o.enum),
      originalSchema: o,
      isRef: !0,
    };
  }
  let n = await kt({ item: e, name: t, context: r });
  return w($({}, n), { originalSchema: e, isRef: !1 });
};
var pe = async ({ schema: e, propName: t, combined: r = !1, context: n }) => {
  var a, i;
  let o = await oe({ schema: e, name: t, context: n }),
    s = Q((a = o.originalSchema) != null ? a : {});
  if (
    t &&
    !o.isEnum &&
    (o == null ? void 0 : o.type) === 'object' &&
    new RegExp(/{|&|\|/).test(o.value)
  )
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [
        ...o.schemas,
        {
          name: t,
          model: `${s}export type ${t} = ${o.value};
`,
          imports: o.imports,
        },
      ],
      isEnum: !1,
      type: 'object',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  if (t && o.isEnum && !r && !o.isRef) {
    let p = qe(o.value, o.type, t);
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [...o.schemas, { name: t, model: s + p, imports: o.imports }],
      isEnum: !1,
      type: 'enum',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  }
  return r && ((i = o.originalSchema) == null ? void 0 : i.oneOf)
    ? w($({}, o), {
        value: o.originalSchema.properties ? `${o.value}OneOf` : '',
      })
    : o;
};
var Eo = ['multipart/form-data'],
  Mo = ['application/x-www-form-urlencoded'],
  Up = async ({ mediaType: e, propName: t, context: r }) =>
    e.schema ? await pe({ schema: e.schema, propName: t, context: r }) : void 0,
  Fe = async (e, t, r, n = 'unknown') => {
    let o = await Promise.all(
      e
        .filter(([s, a]) => Boolean(a))
        .map(async ([s, a]) => {
          var i, p;
          if (k(a)) {
            let {
                schema: l,
                imports: [{ name: m, specKey: u, schemaName: g }],
              } = await N(a, r),
              [d, f] =
                (p = Object.entries((i = l.content) != null ? i : {})[0]) !=
                null
                  ? p
                  : [],
              h = Eo.includes(d),
              y = Mo.includes(d);
            if ((!h && !y) || !(f != null && f.schema))
              return [
                {
                  value: m,
                  imports: [{ name: m, specKey: u, schemaName: g }],
                  schemas: [],
                  type: 'unknown',
                  isEnum: !1,
                  isRef: !0,
                  originalSchema: f == null ? void 0 : f.schema,
                  key: s,
                  contentType: d,
                },
              ];
            let O = h
                ? await Ze(
                    m,
                    f == null ? void 0 : f.schema,
                    w($({}, r), { specKey: u || r.specKey }),
                  )
                : void 0,
              S = y
                ? await Ze(
                    m,
                    f == null ? void 0 : f.schema,
                    w($({}, r), { specKey: u || r.specKey }),
                    !0,
                  )
                : void 0;
            return [
              {
                value: m,
                imports: [{ name: m, specKey: u, schemaName: g }],
                schemas: [],
                type: 'unknown',
                isEnum: !1,
                formData: O,
                formUrlEncoded: S,
                isRef: !0,
                originalSchema: f == null ? void 0 : f.schema,
                key: s,
                contentType: d,
              },
            ];
          }
          return a.content
            ? (
                await Promise.all(
                  Object.entries(a.content).map(async ([m, u], g, d) => {
                    let f = s ? x(t) + x(s) : void 0;
                    f && d.length > 1 && (f = f + x(gt(g + 1)));
                    let h = await Up({ mediaType: u, propName: f, context: r });
                    if (!h) return;
                    let y = Eo.includes(m),
                      O = Mo.includes(m);
                    if ((!y && !O) || !f)
                      return w($({}, h), { contentType: m });
                    let S = y ? await Ze(f, u.schema, r) : void 0,
                      T = O ? await Ze(f, u.schema, r, !0) : void 0;
                    return w($({}, h), {
                      formData: S,
                      formUrlEncoded: T,
                      contentType: m,
                    });
                  }),
                )
              )
                .filter((m) => m)
                .map((m) => w($({}, m), { key: s }))
            : [
                {
                  value: n,
                  imports: [],
                  schemas: [],
                  type: n,
                  isEnum: !1,
                  key: s,
                  isRef: !1,
                  contentType: 'application/json',
                },
              ];
        }),
    );
    return _lodashuniqby2.default.call(
      void 0,
      o.flatMap((s) => s),
      'value',
    );
  };
var Io = async (e, t, r) => {
  let n = await Fe([[r.override.components.requestBodies.suffix, e]], t, r),
    o = n.flatMap(({ imports: u }) => u),
    s = n.flatMap(({ schemas: u }) => u),
    a = n.map(({ value: u }) => u).join(' | '),
    i =
      Me.includes(a.toLowerCase()) || n.length > 1
        ? j(t) + r.override.components.requestBodies.suffix
        : j(a),
    p = n.length === 1 ? n[0].formData : void 0,
    l = n.length === 1 ? n[0].formUrlEncoded : void 0,
    m = n.length === 1 ? n[0].contentType : void 0;
  return {
    definition: a,
    implementation: i,
    imports: o,
    schemas: s,
    formData: p || '',
    formUrlEncoded: l || '',
    contentType: m || '',
  };
};
c();
var Ao = (e, t, r) =>
  e.operationId
    ? e.operationId
    : x(
        [
          r,
          ...t
            .split('/')
            .map((n) =>
              V(n, { dash: !0, underscore: '-', dot: '-', whitespace: '-' }),
            ),
        ].join('-'),
      );
c();
var Go = async ({ parameters: e = [], context: t }) =>
  M(
    e,
    async (r, n) => {
      if (k(n)) {
        let { schema: o, imports: s } = await N(n, t);
        (o.in === 'path' || o.in === 'query') &&
          r[o.in].push({ parameter: o, imports: s });
      } else
        (n.in === 'query' || n.in === 'path') &&
          r[n.in].push({ parameter: n, imports: [] });
      return r;
    },
    { path: [], query: [] },
  );
c();
var Wp = (e) => {
    let t,
      r = [],
      n = /\{(.*?)\}/g;
    for (; (t = n.exec(e)) !== null; ) r.push(t[1]);
    return r;
  },
  ko = ({ route: e, pathParams: t = [], operationId: r, context: n }) => {
    let o = Wp(e);
    return Promise.all(
      o.map(async (s) => {
        let a = t.find(
          ({ parameter: f }) =>
            V(j(f.name), { es5keyword: !0, underscore: !0, dash: !0 }) === s,
        );
        if (!a)
          throw new Error(
            `The path params ${s} can't be found in parameters (${r})`,
          );
        let { name: i, required: p = !1, schema: l } = a.parameter,
          m = V(j(i), { es5keyword: !0 });
        if (!l)
          return {
            name: m,
            definition: `${m}${p ? '' : '?'}: unknown`,
            implementation: `${m}${p ? '' : '?'}: unknown`,
            default: !1,
            required: p,
            imports: [],
          };
        let u = await oe({
            schema: l,
            context: $(
              $({}, n),
              a.imports.length ? { specKey: a.imports[0].specKey } : {},
            ),
          }),
          g = `${m}${!p || u.originalSchema.default ? '?' : ''}: ${u.value}`,
          d = `${m}${!p && !u.originalSchema.default ? '?' : ''}${
            u.originalSchema.default
              ? `= ${re(u.originalSchema.default)}`
              : `: ${u.value}`
          }`;
        return {
          name: m,
          definition: g,
          implementation: d,
          default: u.originalSchema.default,
          required: p,
          imports: u.imports,
        };
      }),
    );
  };
c();
c();
var Co = (e) =>
  e.sort((t, r) =>
    t.default
      ? 1
      : r.default
      ? -1
      : t.required && r.required
      ? 0
      : t.required
      ? -1
      : r.required
      ? 1
      : 0,
  );
var Do = ({ body: e, queryParams: t, params: r }) => {
  let n = {
      name: e.implementation,
      definition: `${e.implementation}: ${e.definition}`,
      implementation: `${e.implementation}: ${e.definition}`,
      default: !1,
      required: !0,
      type: ae.BODY,
    },
    o = {
      name: 'params',
      definition: `params?: ${t == null ? void 0 : t.name}`,
      implementation: `params?: ${t == null ? void 0 : t.name}`,
      default: !1,
      required: !1,
      type: ae.QUERY_PARAM,
    },
    s = [
      ...r.map((i) => w($({}, i), { type: ae.PARAM })),
      ...(e.definition ? [n] : []),
      ...(t ? [o] : []),
    ];
  return Co(s);
};
c();
var Bp = (e, t, r) =>
    Promise.all(
      e.map(async ({ parameter: n, imports: o }) => {
        let { name: s, required: a, schema: i, content: p } = n,
          {
            value: l,
            imports: m,
            isEnum: u,
            type: g,
            schemas: d,
            isRef: f,
          } = await oe({
            schema: i || p['application/json'].schema,
            context: r,
            name: x(t) + x(s),
          }),
          h = De(s);
        if (o.length)
          return {
            definition: `${h}${!a || i.default ? '?' : ''}: ${o[0].name}`,
            imports: o,
            schemas: [],
          };
        if (u && !f) {
          let O = x(t) + x(s),
            S = qe(l, g, O);
          return {
            definition: `${h}${!a || i.default ? '?' : ''}: ${O}`,
            imports: [{ name: O }],
            schemas: [...d, { name: O, model: S, imports: m }],
          };
        }
        return {
          definition: `${h}${!a || i.default ? '?' : ''}: ${l}`,
          imports: m,
          schemas: d,
        };
      }),
    ),
  qo = async ({ queryParams: e = [], operationName: t, context: r }) => {
    if (!e.length) return;
    let n = await Bp(e, t, r),
      o = n.flatMap(({ imports: l }) => l),
      s = n.flatMap(({ schemas: l }) => l),
      a = `${x(t)}Params`,
      i = n.map(({ definition: l }) => l).join('; ');
    return {
      schema: {
        name: a,
        model: `export type ${a} = { ${i} };
`,
        imports: o,
      },
      deps: s,
    };
  };
c();
var Fo = async (e, t, r) => {
  if (!e)
    return {
      imports: [],
      definition: { success: '', errors: '' },
      isBlob: !1,
      types: { success: [], errors: [] },
      schemas: [],
      contentTypes: [],
    };
  let n = await Fe(Object.entries(e), t, r, 'void'),
    o = n.reduce(
      (m, u) => (
        u.key.startsWith('2') ? m.success.push(u) : m.errors.push(u), m
      ),
      { success: [], errors: [] },
    ),
    s = n.flatMap(({ imports: m }) => m),
    a = n.flatMap(({ schemas: m }) => m),
    i = [...new Set(n.map(({ contentType: m }) => m))],
    p = o.success
      .map(({ value: m, formData: u }) => (u ? 'Blob' : m))
      .join(' | '),
    l = o.errors.map(({ value: m }) => m).join(' | ');
  return {
    imports: s,
    definition: { success: p || 'unknown', errors: l || 'unknown' },
    isBlob: p === 'Blob',
    types: o,
    contentTypes: i,
    schemas: a,
  };
};
var Qp = async ({
    verb: e,
    output: t,
    operation: r,
    route: n,
    verbParameters: o = [],
    context: s,
  }) => {
    var _e;
    let {
        responses: a,
        requestBody: i,
        parameters: p,
        tags: l = [],
        deprecated: m,
        description: u,
        summary: g,
      } = r,
      d = Ao(r, n, e),
      f = t.override.operations[r.operationId],
      h = Object.entries(t.override.tags).reduce(
        (ze, [at, pt]) => (l.includes(at) ? Pe(ze, pt) : ze),
        {},
      ),
      y = $($($({}, t.override), h), f),
      O =
        (f == null ? void 0 : f.operationName) ||
        ((_e = t.override) == null ? void 0 : _e.operationName),
      S = O ? O(r, n, e) : j(d),
      T = V(S, { es5keyword: !0 }),
      P = await Fo(a, T, s),
      R = await Io(i, T, s),
      I = await Go({ parameters: [...o, ...(p != null ? p : [])], context: s }),
      E = await qo({ queryParams: I.query, operationName: T, context: s }),
      q = await ko({
        route: n,
        pathParams: I.path,
        operationId: d,
        context: s,
      }),
      J = Do({
        body: R,
        queryParams: E == null ? void 0 : E.schema,
        params: q,
      }),
      X = await Ot({
        output: t.target,
        name: T,
        mutator: y == null ? void 0 : y.mutator,
        workspace: s.workspace,
        tsconfig: s.tsconfig,
      }),
      Z =
        D(y == null ? void 0 : y.formData) || C(y == null ? void 0 : y.formData)
          ? await Ot({
              output: t.target,
              name: T,
              mutator: y.formData,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      Ee =
        D(y == null ? void 0 : y.formUrlEncoded) ||
        C(y == null ? void 0 : y.formUrlEncoded)
          ? await Ot({
              output: t.target,
              name: T,
              mutator: y.formUrlEncoded,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      it = Q({ description: u, deprecated: m, summary: g }),
      Be = {
        verb: e,
        tags: l,
        summary: r.summary,
        operationId: d,
        operationName: T,
        response: P,
        body: R,
        queryParams: E,
        params: q,
        props: J,
        mutator: X,
        formData: Z,
        formUrlEncoded: Ee,
        override: y,
        doc: it,
      },
      Qe = await St(y == null ? void 0 : y.transformer, s.workspace);
    return Qe ? Qe(Be) : Be;
  },
  Vo = ({ verbs: e, output: t, route: r, context: n }) =>
    M(
      Object.entries(e),
      async (o, [s, a]) => {
        if (hn(s)) {
          let i = await Qp({
            verb: s,
            output: t,
            verbParameters: e.parameters,
            route: r,
            operation: a,
            context: n,
          });
          o.push(i);
        }
        return o;
      },
      [],
    );
var No = async ({ output: e, context: t }) =>
  M(
    Object.entries(t.specs[t.specKey].paths),
    async (r, [n, o]) => {
      let s = Zn(n),
        a = o,
        i = t;
      if (k(o)) {
        let { schema: u, imports: g } = await N(o, t);
        (a = u), (i = $($({}, t), g.length ? { specKey: g[0].specKey } : {}));
      }
      let p = await Vo({ verbs: a, output: e, route: s, context: i }),
        l = p.reduce(
          (u, { queryParams: g, body: d, response: f }) => (
            g && u.push(g.schema, ...g.deps),
            u.push(...d.schemas),
            u.push(...f.schemas),
            u
          ),
          [],
        ),
        m = await jo(e.client, p, {
          route: s,
          pathRoute: n,
          override: e.override,
          context: i,
          mock: !!e.mock,
        });
      return (
        r.schemas.push(...l), (r.operations = $($({}, r.operations), m)), r
      );
    },
    { operations: {}, schemas: [] },
  );
c();
var ui = le(wr());
var Tr = (e = {}, t, r) =>
  (0, ui.default)(e)
    ? Promise.resolve([])
    : M(
        Object.entries(e),
        async (n, [o, s]) => {
          let a = await Fe([[r, s]], o, t, 'void'),
            i = a.flatMap(({ imports: d }) => d),
            p = a.flatMap(({ schemas: d }) => d),
            l = a.map(({ value: d }) => d).join(' | '),
            m = `${x(o)}${r}`,
            g = `${Q(s)}export type ${m} = ${l || 'unknown'};
`;
          return (
            n.push(...p),
            m !== l && n.push({ name: m, model: g, imports: i }),
            n
          );
        },
        [],
      );
c();
var fi = (e = {}, t, r) =>
  M(
    Object.entries(e),
    async (n, [o, s]) => {
      let a = `${x(o)}${r}`,
        { schema: i, imports: p } = await N(s, t);
      if (i.in !== 'query') return n;
      if (!i.schema || p.length)
        return (
          n.push({
            name: a,
            imports: p.length
              ? [
                  {
                    name: p[0].name,
                    specKey: p[0].specKey,
                    schemaName: p[0].schemaName,
                  },
                ]
              : [],
            model: `export type ${a} = ${p.length ? p[0].name : 'unknown'};
`,
          }),
          n
        );
      let l = await pe({ schema: i.schema, propName: a, context: t }),
        u = `${Q(s)}export type ${a} = ${l.value || 'unknown'};
`;
      return (
        n.push(...l.schemas),
        a !== l.value && n.push({ name: a, model: u, imports: l.imports }),
        n
      );
    },
    [],
  );
c();
var di = le(wr());
c();
var gi = async ({ name: e, schema: t, context: r, suffix: n }) => {
  var p;
  let o = await kt({ item: t, name: e, context: r }),
    s = o.value === '{}',
    a = '';
  (a += Q(t)),
    s &&
      (r.tslint
        ? (a += `// tslint:disable-next-line:no-empty-interface
`)
        : (a += `// eslint-disable-next-line @typescript-eslint/no-empty-interface
`)),
    !Me.includes(o.value) &&
    !((p = r == null ? void 0 : r.override) != null && p.useTypeOverInterfaces)
      ? (a += `export interface ${e} ${o.value}
`)
      : (a += `export type ${e} = ${o.value};
`);
  let i = o.imports.filter((l) => l.name !== e);
  return [...o.schemas, { name: e, model: a, imports: i }];
};
var yi = async (e = {}, t, r) =>
  (0, di.default)(e)
    ? []
    : M(
        Object.entries(e),
        async (o, [s, a]) => {
          let i = x(s) + r;
          if (
            (!a.type || a.type === 'object') &&
            !a.allOf &&
            !a.oneOf &&
            !a.anyOf &&
            !k(a) &&
            !a.nullable
          )
            return (
              o.push(
                ...(await gi({ name: i, schema: a, context: t, suffix: r })),
              ),
              o
            );
          {
            let p = await oe({ schema: a, name: i, context: t }),
              l = '',
              m = p.imports;
            if (((l += Q(a)), p.isEnum && !p.isRef))
              l += qe(p.value, p.type, i);
            else if (i === p.value && p.isRef) {
              let u = p.imports.find((g) => g.name === i);
              if (!u)
                l += `export type ${i} = ${p.value};
`;
              else {
                let g =
                  u != null && u.specKey
                    ? `${x(ht(u.specKey, t.specKey))}${p.value}`
                    : `${p.value}Bis`;
                (l += `export type ${i} = ${g};
`),
                  (m = m.map((d) =>
                    d.name === i ? w($({}, d), { alias: g }) : d,
                  ));
              }
            } else
              l += `export type ${i} = ${p.value};
`;
            return o.push(...p.schemas, { name: i, model: l, imports: m }), o;
          }
        },
        [],
      );
c();
var _ibmopenapivalidator = require('ibm-openapi-validator');
var _ibmopenapivalidator2 = _interopRequireDefault(_ibmopenapivalidator);
var hi = async (e) => {
  let { errors: t, warnings: r } = await _ibmopenapivalidator2.default.call(
    void 0,
    e,
  );
  r.length && wn(r), t.length && Tn(t);
};
var Al = async ({ specs: e, input: t, workspace: r }) => {
    var o;
    let n =
      (o = t.override) != null && o.transformer
        ? await St(t.override.transformer, r)
        : void 0;
    return M(
      Object.entries(e),
      async (s, [a, i]) => {
        let p = await Yn(i, t.converterOptions, a),
          l = n ? n(p) : p;
        return t.validation && (await hi(l)), (s[a] = l), s;
      },
      {},
    );
  },
  Rr = async ({ data: e, input: t, output: r, target: n, workspace: o }) => {
    var p;
    let s = await Al({ specs: e, input: t, workspace: o }),
      a = await M(
        Object.entries(s),
        async (l, [m, u]) => {
          var S, T, P, R, I, E;
          let g = {
              specKey: m,
              target: n,
              workspace: o,
              specs: s,
              override: r.override,
              tslint: r.tslint,
              tsconfig: r.tsconfig,
              packageJson: r.packageJson,
            },
            d = await yi(
              u.openapi
                ? (P = u.components) == null
                  ? void 0
                  : P.schemas
                : $(
                    $(
                      {},
                      _lodashomit2.default.call(void 0, u, [
                        'openapi',
                        'info',
                        'servers',
                        'paths',
                        'components',
                        'security',
                        'tags',
                        'externalDocs',
                      ]),
                    ),
                    (T = (S = u.components) == null ? void 0 : S.schemas) !=
                      null
                      ? T
                      : {},
                  ),
              g,
              r.override.components.schemas.suffix,
            ),
            f = await Tr(
              (R = u.components) == null ? void 0 : R.responses,
              g,
              r.override.components.responses.suffix,
            ),
            h = await Tr(
              (I = u.components) == null ? void 0 : I.requestBodies,
              g,
              r.override.components.requestBodies.suffix,
            ),
            y = await fi(
              (E = u.components) == null ? void 0 : E.parameters,
              g,
              r.override.components.parameters.suffix,
            ),
            O = [...d, ...f, ...h, ...y];
          return O.length && (l[m] = O), l;
        },
        {},
      ),
      i = await No({
        output: r,
        context: {
          specKey: n,
          target: n,
          workspace: o,
          specs: s,
          override: r.override,
          tslint: r.tslint,
          tsconfig: r.tsconfig,
          packageJson: r.packageJson,
        },
      });
    return w($({}, i), {
      schemas: w($({}, a), {
        [n]: [...((p = a[n]) != null ? p : []), ...i.schemas],
      }),
      target: n,
      info: s[n].info,
    });
  };
var Dl = async (e, o, n) => {
    var s = o,
      { validate: t } = s,
      r = we(s, ['validate']);
    if (t)
      try {
        await _swaggerparser2.default.validate(e);
      } catch (i) {
        if ((i == null ? void 0 : i.name) === 'ParserError') throw i;
        _console.log.call(void 0, `\u26A0\uFE0F  ${_chalk2.default.yellow(i)}`);
      }
    let a = (await _swaggerparser2.default.resolve(e, r)).values();
    return n
      ? a
      : Object.fromEntries(
          Object.entries(a).map(([i, p]) => [
            _upath.resolve.call(void 0, i),
            p,
          ]),
        );
  },
  Oi = async (e, t) => {
    let { input: r, output: n } = t;
    if (C(r.target))
      return Rr({
        data: { [e]: r.target },
        input: r,
        output: n,
        target: e,
        workspace: e,
      });
    let o = fe(r.target),
      s = await Dl(r.target, r.parserOptions, o);
    return Rr({ data: s, input: r, output: n, target: r.target, workspace: e });
  };
c();
var _execa = require('execa');
var _execa2 = _interopRequireDefault(_execa);
c();
var Ul = ({
    schema: { imports: e, model: t },
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let a = s;
    return (
      (a += Vn({ imports: e, target: r, isRootKey: n, specsName: o })),
      (a += e.length
        ? `

`
        : `
`),
      (a += t),
      a
    );
  },
  jr = (e, t) => _upath.join.call(void 0, e, `/${t}.ts`);
var Wl = async ({
    path: e,
    schema: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let a = j(t.name);
    try {
      await _fsextra.outputFile.call(
        void 0,
        jr(e, a),
        Ul({ schema: t, target: r, isRootKey: n, specsName: o, header: s }),
      );
      let i = jr(e, 'index'),
        l = (await _fsextra.readFile.call(void 0, i)).toString();
      !l.includes(`export * from './${a}'`) &&
        !l.includes(`export * from "./${a}"`) &&
        (await _fsextra.appendFile.call(
          void 0,
          jr(e, 'index'),
          `export * from './${a}';
`,
        ));
    } catch (i) {
      throw `Oups... \u{1F37B}. An Error occurred while writing schema ${a} => ${i}`;
    }
  },
  xi = async ({
    schemaPath: e,
    schemas: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => (
    await _fsextra.ensureFile.call(
      void 0,
      _upath.join.call(void 0, e, '/index.ts'),
    ),
    Promise.all(
      t.map((a) =>
        Wl({
          path: e,
          schema: a,
          target: r,
          isRootKey: n,
          specsName: o,
          header: s,
        }),
      ),
    )
  );
c();
c();
var Bl = (e, t) =>
    e +
    `${t}
`,
  Se = (e) =>
    Object.values(e)
      .flatMap((r) => r)
      .sort((r, n) => (r.imports.some((o) => o.name === n.name) ? 1 : -1))
      .reduce((r, { model: n }) => Bl(r, n), '');
c();
var _compareversions = require('compare-versions');
var Dt = (e, t, r) => {
  let n = Object.values(e).map(({ operationName: a }) => a),
    o = (r == null ? void 0 : r.client) === W.ANGULAR,
    s = Object.values(e).reduce(
      (a, i, p, l) => {
        var m, u, g;
        if (
          (a.imports.push(...i.imports),
          a.importsMSW.push(...i.importsMSW),
          (a.implementation +=
            i.implementation +
            `
`),
          (a.implementationMSW.function += i.implementationMSW.function),
          (a.implementationMSW.handler += i.implementationMSW.handler),
          i.mutator && a.mutators.push(i.mutator),
          i.formData && a.formData.push(i.formData),
          i.formUrlEncoded && a.formUrlEncoded.push(i.formUrlEncoded),
          p === l.length - 1)
        ) {
          let d = a.mutators.some((S) => (o ? S.hasThirdArg : S.hasSecondArg)),
            f =
              (g =
                (u = (m = r.packageJson) == null ? void 0 : m.dependencies) ==
                null
                  ? void 0
                  : u.typescript) != null
                ? g
                : '4.4.0',
            h = _compareversions.compare.call(void 0, f, '4.5.0', '>='),
            y = Mt({
              outputClient: r.client,
              isRequestOptions: r.override.requestOptions !== !1,
              isMutator: d,
              isGlobalMutator: !!r.override.mutator,
              title: x(t.title),
              customTitleFunc: r.override.title,
              provideInRoot: !!r.override.angular.provideIn,
              provideIn: r.override.angular.provideIn,
              hasAwaitedType: h,
            });
          (a.implementation = y.implementation + a.implementation),
            (a.implementationMSW.handler =
              y.implementationMSW + a.implementationMSW.handler);
          let O = It({
            outputClient: r == null ? void 0 : r.client,
            operationNames: n,
            title: x(t.title),
            customTitleFunc: r.override.title,
            hasMutator: !!a.mutators.length,
            hasAwaitedType: h,
          });
          (a.implementation += O.implementation),
            (a.implementationMSW.handler += O.implementationMSW);
        }
        return a;
      },
      {
        imports: [],
        implementation: '',
        implementationMSW: { function: '', handler: '' },
        importsMSW: [],
        mutators: [],
        formData: [],
        formUrlEncoded: [],
      },
    );
  return w($({}, s), {
    implementationMSW:
      s.implementationMSW.function + s.implementationMSW.handler,
  });
};
var Si = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let { path: a, dirname: i } = A(n.target, { backupFilename: j(r.title) }),
      {
        imports: p,
        importsMSW: l,
        implementation: m,
        implementationMSW: u,
        mutators: g,
        formData: d,
        formUrlEncoded: f,
      } = Dt(e, r, n),
      h = s,
      y = n.schemas ? ne(i, A(n.schemas).dirname) : void 0,
      O = Y(n.tsconfig);
    return (
      (h += xe(
        n.client,
        m,
        y
          ? [
              {
                exports: p.filter((S) => !l.some((T) => S.name === T.name)),
                dependency: y,
              },
            ]
          : [],
        o,
        !!n.schemas,
        O,
        !!n.override.mutator,
      )),
      n.mock &&
        (h += $e(
          u,
          y ? [{ exports: l, dependency: y }] : [],
          o,
          !!n.schemas,
          O,
        )),
      g && (h += B(g)),
      d && (h += B(d)),
      f && (h += B(f)),
      n.schemas || (h += Se(t)),
      (h += `

${m}`),
      n.mock &&
        ((h += `

`),
        (h += u)),
      await _fsextra.outputFile.call(void 0, a, h),
      [a]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while writing file => ${a}`;
  }
};
c();
var wi = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let {
        filename: a,
        dirname: i,
        extension: p,
      } = A(n.target, { backupFilename: j(r.title) }),
      {
        imports: l,
        implementation: m,
        implementationMSW: u,
        importsMSW: g,
        mutators: d,
        formData: f,
        formUrlEncoded: h,
      } = Dt(e, r, n),
      y = s,
      O = s,
      S = n.schemas ? ne(i, A(n.schemas).dirname) : './' + a + '.schemas',
      T = Y(n.tsconfig);
    (y += xe(
      n.client,
      m,
      [{ exports: l, dependency: S }],
      o,
      !!n.schemas,
      T,
      !!n.override.mutator,
    )),
      (O += $e(u, [{ exports: g, dependency: S }], o, !!n.schemas, T));
    let P = n.schemas
      ? void 0
      : _upath.join.call(void 0, i, a + '.schemas' + p);
    if (P) {
      let q = s + Se(t);
      await _fsextra.outputFile.call(
        void 0,
        _upath.join.call(void 0, i, a + '.schemas' + p),
        q,
      );
    }
    d && (y += B(d)),
      f && (y += B(f)),
      h && (y += B(h)),
      (y += `
${m}`),
      (O += `
${u}`);
    let R = a + (W.ANGULAR === n.client ? '.service' : '') + p,
      I = _upath.join.call(void 0, i, R);
    await _fsextra.outputFile.call(void 0, _upath.join.call(void 0, i, R), y);
    let E = n.mock ? _upath.join.call(void 0, i, a + '.msw' + p) : void 0;
    return (
      E && (await _fsextra.outputFile.call(void 0, E, O)),
      [I, ...(P ? [P] : []), ...(E ? [E] : [])]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while splitting => ${a}`;
  }
};
c();
c();
var Kl = (e) => w($({}, e), { tags: e.tags.length ? e.tags : ['default'] }),
  Ll = (e, t) =>
    t.tags.reduce((r, n) => {
      var s, a, i;
      let o = r[n];
      return (
        (r[n] = o
          ? {
              implementation: o.implementation + t.implementation,
              imports: [...o.imports, ...t.imports],
              importsMSW: [...o.importsMSW, ...t.importsMSW],
              implementationMSW: {
                function:
                  o.implementationMSW.function + t.implementationMSW.function,
                handler:
                  o.implementationMSW.handler + t.implementationMSW.handler,
              },
              mutators: t.mutator
                ? [...((s = o.mutators) != null ? s : []), t.mutator]
                : o.mutators,
              formData: t.formData
                ? [...((a = o.formData) != null ? a : []), t.formData]
                : o.formData,
              formUrlEncoded: t.formUrlEncoded
                ? [
                    ...((i = o.formUrlEncoded) != null ? i : []),
                    t.formUrlEncoded,
                  ]
                : o.formUrlEncoded,
            }
          : {
              imports: t.imports,
              importsMSW: t.importsMSW,
              mutators: t.mutator ? [t.mutator] : [],
              formData: t.formData ? [t.formData] : [],
              formUrlEncoded: t.formUrlEncoded ? [t.formUrlEncoded] : [],
              implementation: t.implementation,
              implementationMSW: {
                function: t.implementationMSW.function,
                handler: t.implementationMSW.handler,
              },
            }),
        r
      );
    }, e),
  qt = (e, t) => {
    let r = t.client === W.ANGULAR,
      n = Object.values(e)
        .map(Kl)
        .reduce((o, s, a, i) => {
          let p = Ll(o, s);
          return a === i.length - 1
            ? Object.entries(p).reduce((l, [m, u]) => {
                var S, T, P, R, I;
                let g = !!(
                    (S = u.mutators) != null &&
                    S.some((E) => (r ? E.hasThirdArg : E.hasSecondArg))
                  ),
                  d = Object.values(e)
                    .filter(({ tags: E }) => E.includes(m))
                    .map(({ operationName: E }) => E),
                  f =
                    (R =
                      (P =
                        (T = t.packageJson) == null
                          ? void 0
                          : T.dependencies) == null
                        ? void 0
                        : P.typescript) != null
                      ? R
                      : '4.4.0',
                  h = _compareversions.compare.call(void 0, f, '4.5.0', '>='),
                  y = It({
                    outputClient: t == null ? void 0 : t.client,
                    operationNames: d,
                    title: x(m),
                    customTitleFunc: t.override.title,
                    hasMutator: !!((I = u.mutators) != null && I.length),
                    hasAwaitedType: h,
                  }),
                  O = Mt({
                    outputClient: t.client,
                    isRequestOptions: t.override.requestOptions !== !1,
                    isMutator: g,
                    isGlobalMutator: !!t.override.mutator,
                    title: x(m),
                    customTitleFunc: t.override.title,
                    provideInRoot: !!t.override.angular.provideIn,
                    provideIn: t.override.angular.provideIn,
                    hasAwaitedType: h,
                  });
                return (
                  (l[m] = {
                    implementation:
                      O.implementation + u.implementation + y.implementation,
                    implementationMSW: {
                      function: u.implementationMSW.function,
                      handler:
                        O.implementationMSW +
                        u.implementationMSW.handler +
                        y.implementationMSW,
                    },
                    imports: u.imports,
                    importsMSW: u.importsMSW,
                    mutators: u.mutators,
                    formData: u.formData,
                    formUrlEncoded: u.formUrlEncoded,
                  }),
                  l
                );
              }, {})
            : p;
        }, {});
    return Object.entries(n).reduce(
      (o, [s, a]) => (
        (o[s] = w($({}, a), {
          implementationMSW:
            a.implementationMSW.function + a.implementationMSW.handler,
        })),
        o
      ),
      {},
    );
  };
var Ti = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: a,
      dirname: i,
      extension: p,
    } = A(n.target, { backupFilename: j(r.title) }),
    l = qt(e, n),
    m = Y(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(l).map(async ([g, d]) => {
        try {
          let {
              imports: f,
              implementation: h,
              implementationMSW: y,
              importsMSW: O,
              mutators: S,
              formData: T,
              formUrlEncoded: P,
            } = d,
            R = s,
            I = s,
            E = n.schemas
              ? '../' + ne(i, A(n.schemas).dirname)
              : '../' + a + '.schemas';
          (R += xe(
            n.client,
            h,
            [{ exports: f, dependency: E }],
            o,
            !!n.schemas,
            m,
            !!n.override.mutator,
          )),
            (I += $e(y, [{ exports: O, dependency: E }], o, !!n.schemas, m));
          let q = n.schemas
            ? void 0
            : _upath.join.call(void 0, i, a + '.schemas' + p);
          if (q) {
            let Ee = s + Se(t);
            await _fsextra.outputFile.call(void 0, q, Ee);
          }
          S && (R += B(S, !0)),
            T && (R += B(T, !0)),
            P && (R += B(P)),
            (R += `
${h}`),
            (I += `
${y}`);
          let J = Te(g) + (W.ANGULAR === n.client ? '.service' : '') + p,
            X = _upath.join.call(void 0, i, Te(g), J);
          await _fsextra.outputFile.call(void 0, X, R);
          let Z = n.mock
            ? _upath.join.call(void 0, i, Te(g), Te(g) + '.msw' + p)
            : void 0;
          return (
            Z && (await _fsextra.outputFile.call(void 0, Z, I)),
            [X, ...(q ? [q] : []), ...(Z ? [Z] : [])]
          );
        } catch (f) {
          throw `Oups... \u{1F37B}. An Error occurred while splitting tag ${g} => ${f}`;
        }
      }),
    )
  ).flatMap((g) => g);
};
c();
var Pi = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: a,
      dirname: i,
      extension: p,
    } = A(n.target, { backupFilename: j(r.title) }),
    l = qt(e, n),
    m = Y(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(l).map(async ([g, d]) => {
        try {
          let {
              imports: f,
              implementation: h,
              implementationMSW: y,
              importsMSW: O,
              mutators: S,
              formData: T,
              formUrlEncoded: P,
            } = d,
            R = s,
            I = n.schemas ? ne(i, A(n.schemas).dirname) : './' + a + '.schemas';
          (R += xe(
            n.client,
            h,
            [
              {
                exports: f.filter((J) => !O.some((X) => J.name === X.name)),
                dependency: I,
              },
            ],
            o,
            !!n.schemas,
            m,
            !!n.override.mutator,
          )),
            n.mock &&
              (R += $e(y, [{ exports: O, dependency: I }], o, !!n.schemas, m));
          let E = n.schemas
            ? void 0
            : _upath.join.call(void 0, i, a + '.schemas' + p);
          if (E) {
            let J = s + Se(t);
            await _fsextra.outputFile.call(void 0, E, J);
          }
          S && (R += B(S)),
            T && (R += B(T)),
            P && (R += B(P)),
            (R += `

`),
            (R += h),
            n.mock &&
              ((R += `

`),
              (R += y));
          let q = _upath.join.call(void 0, i, `${Te(g)}${p}`);
          return (
            await _fsextra.outputFile.call(void 0, q, R), [q, ...(E ? [E] : [])]
          );
        } catch (f) {
          throw `Oups... \u{1F37B}. An Error occurred while writing tag ${g} => ${f}`;
        }
      }),
    )
  ).flatMap((g) => g);
};
var ru = (e, t) => {
    if (!e) return '';
    let r = e(t);
    return Array.isArray(r) ? Q({ description: r }) : r;
  },
  Mi = async ({ operations: e, schemas: t, target: r, info: n }, o, s, a) => {
    let { output: i } = s,
      p = a || n.title,
      l = Object.keys(t).reduce((g, d) => {
        let h = ht(d, r).slice(1).split('/').join('-');
        return (g[d] = h), g;
      }, {}),
      m = ru(i.override.header, n);
    if (i.schemas) {
      let g = i.schemas;
      await Promise.all(
        Object.entries(t).map(([d, f]) => {
          let h = r === d,
            y = h ? g : _upath.join.call(void 0, g, l[d]);
          return xi({
            schemaPath: y,
            schemas: f,
            target: r,
            specsName: l,
            isRootKey: h,
            header: m,
          });
        }),
      );
    }
    let u = [];
    if (i.target)
      switch (i.mode) {
        case me.SPLIT:
          u = await wi({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: l,
            header: m,
          });
          break;
        case me.TAGS:
          u = await Pi({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: l,
            header: m,
          });
          break;
        case me.TAGS_SPLIT:
          u = await Ti({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: l,
            header: m,
          });
          break;
        case me.SINGLE:
        default:
          u = await Si({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: l,
            header: m,
          });
          break;
      }
    if (i.workspace) {
      let g = i.workspace,
        d = u
          .filter((h) => !h.endsWith('.msw.ts'))
          .map((h) => ne(g, A(h).pathWithoutExtension));
      i.schemas && d.push(ne(g, A(i.schemas).dirname));
      let f = _upath.join.call(void 0, g, '/index.ts');
      if (await _fsextra.pathExists.call(void 0, f)) {
        let h = await _fsextra.readFile.call(void 0, f, 'utf8'),
          y = d.filter((O) => !h.includes(O));
        await _fsextra.appendFile.call(
          void 0,
          f,
          _lodashuniq2.default
            .call(void 0, y)
            .map((O) => `export * from '${O}';`).join(`
`) +
            `
`,
        );
      } else
        await _fsextra.outputFile.call(
          void 0,
          f,
          _lodashuniq2.default
            .call(void 0, d)
            .map((h) => `export * from '${h}';`).join(`
`) +
            `
`,
        );
      u = [f, ...u];
    }
    if (i.prettier)
      try {
        await _execa2.default.call(void 0, 'prettier', [
          '--write',
          ...(i.schemas ? [A(i.schemas).dirname] : []),
          ...u,
        ]);
      } catch (e8) {
        _console.log.call(
          void 0,
          _chalk2.default.yellow(
            `\u26A0\uFE0F  ${p ? `${p} - ` : ''}Prettier not found`,
          ),
        );
      }
    Sn(p);
  };
c();
var Ii = (e) => {
  xn(e), process.exit(1);
};
var Gi = async (e, t, r) => {
    if (t.output.clean) {
      let o = Array.isArray(t.output.clean) ? t.output.clean : [];
      t.output.target &&
        (await Ht(['**/*', '!**/*.d.ts', ...o], A(t.output.target).dirname)),
        t.output.schemas &&
          (await Ht(['**/*', '!**/*.d.ts', ...o], A(t.output.schemas).dirname)),
        F(`${r ? `${r}: ` : ''}Cleaning output folder`);
    }
    let n = await Oi(e, t);
    await Mi(n, e, t, r);
  },
  ki = async (e, t, r) => {
    if (r) {
      let n = e[r];
      if (n)
        try {
          await Gi(t, n, r);
        } catch (o) {
          F(_chalk2.default.red(`\u{1F6D1}  ${r ? `${r} - ` : ''}${o}`));
        }
      else Ii('Project not found');
      return;
    }
    return M(
      Object.entries(e),
      async (n, [o, s]) => {
        try {
          n.push(await Gi(t, s, o));
        } catch (a) {
          F(_chalk2.default.red(`\u{1F6D1}  ${o ? `${o} - ` : ''}${a}`));
        }
        return n;
      },
      [],
    );
  },
  wx = (exports.M = async (e, t) => {
    let {
      path: r,
      file: n,
      error: o,
    } = await yt(e, { defaultFileName: 'orval.config' });
    if (!n) throw `failed to load from ${r} => ${o}`;
    let s = _upath.dirname.call(void 0, r),
      a = await (_(n) ? n() : n),
      i = await M(
        Object.entries(a),
        async (l, [m, u]) => ((l[m] = await Ln(u, s, t)), l),
        {},
      ),
      p = Object.entries(i)
        .filter(
          ([l]) =>
            (t == null ? void 0 : t.projectName) === void 0 ||
            l === (t == null ? void 0 : t.projectName),
        )
        .map(([, { input: l }]) => l.target)
        .filter((l) => D(l));
    (t == null ? void 0 : t.watch) && p.length
      ? Hn(
          t == null ? void 0 : t.watch,
          () => ki(i, s, t == null ? void 0 : t.projectName),
          p,
        )
      : await ki(i, s, t == null ? void 0 : t.projectName);
  });
exports.a = Nt;
exports.b = c;
exports.c = D;
exports.d = F;
exports.e = fu;
exports.f = x;
exports.g = j;
exports.h = du;
exports.i = Te;
exports.j = yu;
exports.k = re;
exports.l = V;
exports.m = z;
exports.n = gt;
exports.o = dt;
exports.p = la;
exports.q = Me;
exports.r = se;
exports.s = wu;
exports.t = Vn;
exports.u = B;
exports.v = Ea;
exports.w = $t;
exports.x = ge;
exports.y = Ma;
exports.z = Ia;
exports.A = de;
exports.B = Aa;
exports.C = Ga;
exports.D = ye;
exports.E = he;
exports.F = be;
exports.G = pg;
exports.H = Ln;
exports.I = zn;
exports.J = Y;
exports.K = Hn;
exports.L = Gi;
exports.M = wx;
