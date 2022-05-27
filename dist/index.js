'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _chunk4XIYZABPjs = require('./chunk-4XIYZABP.js');
_chunk4XIYZABPjs.b.call(void 0);
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
_chunk4XIYZABPjs.b.call(void 0);
var c = async (r, o = process.cwd(), e) => {
  if (!r || _chunk4XIYZABPjs.c.call(void 0, r))
    return _chunk4XIYZABPjs.M.call(void 0, r, e);
  let n = await _chunk4XIYZABPjs.H.call(void 0, r, o, e);
  if (e != null && e.watch)
    _chunk4XIYZABPjs.K.call(
      void 0,
      e == null ? void 0 : e.watch,
      async () => {
        try {
          await _chunk4XIYZABPjs.L.call(void 0, o, n);
        } catch (a) {
          _chunk4XIYZABPjs.d.call(
            void 0,
            _chalk2.default.red(
              `\u{1F6D1}  ${
                e != null && e.projectName
                  ? `${e == null ? void 0 : e.projectName} - `
                  : ''
              }${a}`,
            ),
          );
        }
      },
      n.input.target,
    );
  else
    try {
      return await _chunk4XIYZABPjs.L.call(void 0, o, n);
    } catch (a) {
      _chunk4XIYZABPjs.d.call(
        void 0,
        _chalk2.default.red(
          `\u{1F6D1}  ${
            e != null && e.projectName
              ? `${e == null ? void 0 : e.projectName} - `
              : ''
          }${a}`,
        ),
      );
    }
};
var re = c;
exports.URL_REGEX = _chunk4XIYZABPjs.s;
exports.VERBS_WITH_BODY = _chunk4XIYZABPjs.r;
exports.addDependency = _chunk4XIYZABPjs.v;
exports.camel = _chunk4XIYZABPjs.g;
exports.default = re;
exports.defineConfig = _chunk4XIYZABPjs.G;
exports.escape = _chunk4XIYZABPjs.o;
exports.generalJSTypes = _chunk4XIYZABPjs.p;
exports.generalJSTypesWithArray = _chunk4XIYZABPjs.q;
exports.generate = c;
exports.generateAxiosOptions = _chunk4XIYZABPjs.z;
exports.generateBodyMutatorConfig = _chunk4XIYZABPjs.B;
exports.generateBodyOptions = _chunk4XIYZABPjs.y;
exports.generateDependencyImports = _chunk4XIYZABPjs.w;
exports.generateFormDataAndUrlEncodedFunction = _chunk4XIYZABPjs.F;
exports.generateImports = _chunk4XIYZABPjs.t;
exports.generateMutatorConfig = _chunk4XIYZABPjs.D;
exports.generateMutatorImports = _chunk4XIYZABPjs.u;
exports.generateMutatorRequestOptions = _chunk4XIYZABPjs.E;
exports.generateOptions = _chunk4XIYZABPjs.A;
exports.generateQueryParamsAxiosConfig = _chunk4XIYZABPjs.C;
exports.generateVerbImports = _chunk4XIYZABPjs.x;
exports.getNumberWord = _chunk4XIYZABPjs.n;
exports.isSyntheticDefaultImportsAllow = _chunk4XIYZABPjs.J;
exports.kebab = _chunk4XIYZABPjs.i;
exports.loadTsconfig = _chunk4XIYZABPjs.I;
exports.pascal = _chunk4XIYZABPjs.f;
exports.sanitize = _chunk4XIYZABPjs.l;
exports.snake = _chunk4XIYZABPjs.h;
exports.stringify = _chunk4XIYZABPjs.k;
exports.toObjectString = _chunk4XIYZABPjs.m;
exports.upper = _chunk4XIYZABPjs.j;
