'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
('use strict');
var _chunk54NON4O4js = require('./chunk-54NON4O4.js');
_chunk54NON4O4js.b.call(void 0);
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
_chunk54NON4O4js.b.call(void 0);
var c = async (t, o = process.cwd(), e) => {
  if (!t || _chunk54NON4O4js.c.call(void 0, t))
    return _chunk54NON4O4js.M.call(void 0, t, e);
  let n = await _chunk54NON4O4js.H.call(void 0, t, o, e);
  if (e != null && e.watch)
    _chunk54NON4O4js.K.call(
      void 0,
      e == null ? void 0 : e.watch,
      async () => {
        try {
          await _chunk54NON4O4js.L.call(void 0, o, n);
        } catch (a) {
          _chunk54NON4O4js.d.call(
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
      return await _chunk54NON4O4js.L.call(void 0, o, n);
    } catch (a) {
      _chunk54NON4O4js.d.call(
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
var te = c;
exports.URL_REGEX = _chunk54NON4O4js.s;
exports.VERBS_WITH_BODY = _chunk54NON4O4js.r;
exports.addDependency = _chunk54NON4O4js.v;
exports.camel = _chunk54NON4O4js.g;
exports.default = te;
exports.defineConfig = _chunk54NON4O4js.G;
exports.escape = _chunk54NON4O4js.o;
exports.generalJSTypes = _chunk54NON4O4js.p;
exports.generalJSTypesWithArray = _chunk54NON4O4js.q;
exports.generate = c;
exports.generateAxiosOptions = _chunk54NON4O4js.z;
exports.generateBodyMutatorConfig = _chunk54NON4O4js.B;
exports.generateBodyOptions = _chunk54NON4O4js.y;
exports.generateDependencyImports = _chunk54NON4O4js.w;
exports.generateFormDataAndUrlEncodedFunction = _chunk54NON4O4js.F;
exports.generateImports = _chunk54NON4O4js.t;
exports.generateMutatorConfig = _chunk54NON4O4js.D;
exports.generateMutatorImports = _chunk54NON4O4js.u;
exports.generateMutatorRequestOptions = _chunk54NON4O4js.E;
exports.generateOptions = _chunk54NON4O4js.A;
exports.generateQueryParamsAxiosConfig = _chunk54NON4O4js.C;
exports.generateVerbImports = _chunk54NON4O4js.x;
exports.getNumberWord = _chunk54NON4O4js.n;
exports.isSyntheticDefaultImportsAllow = _chunk54NON4O4js.J;
exports.kebab = _chunk54NON4O4js.i;
exports.loadTsconfig = _chunk54NON4O4js.I;
exports.pascal = _chunk54NON4O4js.f;
exports.sanitize = _chunk54NON4O4js.l;
exports.snake = _chunk54NON4O4js.h;
exports.stringify = _chunk54NON4O4js.k;
exports.toObjectString = _chunk54NON4O4js.m;
exports.upper = _chunk54NON4O4js.j;
