'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _chunkOEHYXMR7js = require('./chunk-OEHYXMR7.js');
_chunkOEHYXMR7js.b.call(void 0);
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
_chunkOEHYXMR7js.b.call(void 0);
var c = async (r, o = process.cwd(), e) => {
  if (!r || _chunkOEHYXMR7js.c.call(void 0, r))
    return _chunkOEHYXMR7js.M.call(void 0, r, e);
  let n = await _chunkOEHYXMR7js.H.call(void 0, r, o, e);
  if (e != null && e.watch)
    _chunkOEHYXMR7js.K.call(
      void 0,
      e == null ? void 0 : e.watch,
      async () => {
        try {
          await _chunkOEHYXMR7js.L.call(void 0, o, n);
        } catch (a) {
          _chunkOEHYXMR7js.d.call(
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
      return await _chunkOEHYXMR7js.L.call(void 0, o, n);
    } catch (a) {
      _chunkOEHYXMR7js.d.call(
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
exports.URL_REGEX = _chunkOEHYXMR7js.s;
exports.VERBS_WITH_BODY = _chunkOEHYXMR7js.r;
exports.addDependency = _chunkOEHYXMR7js.v;
exports.camel = _chunkOEHYXMR7js.g;
exports.default = re;
exports.defineConfig = _chunkOEHYXMR7js.G;
exports.escape = _chunkOEHYXMR7js.o;
exports.generalJSTypes = _chunkOEHYXMR7js.p;
exports.generalJSTypesWithArray = _chunkOEHYXMR7js.q;
exports.generate = c;
exports.generateAxiosOptions = _chunkOEHYXMR7js.z;
exports.generateBodyMutatorConfig = _chunkOEHYXMR7js.B;
exports.generateBodyOptions = _chunkOEHYXMR7js.y;
exports.generateDependencyImports = _chunkOEHYXMR7js.w;
exports.generateFormDataAndUrlEncodedFunction = _chunkOEHYXMR7js.F;
exports.generateImports = _chunkOEHYXMR7js.t;
exports.generateMutatorConfig = _chunkOEHYXMR7js.D;
exports.generateMutatorImports = _chunkOEHYXMR7js.u;
exports.generateMutatorRequestOptions = _chunkOEHYXMR7js.E;
exports.generateOptions = _chunkOEHYXMR7js.A;
exports.generateQueryParamsAxiosConfig = _chunkOEHYXMR7js.C;
exports.generateVerbImports = _chunkOEHYXMR7js.x;
exports.getNumberWord = _chunkOEHYXMR7js.n;
exports.isSyntheticDefaultImportsAllow = _chunkOEHYXMR7js.J;
exports.kebab = _chunkOEHYXMR7js.i;
exports.loadTsconfig = _chunkOEHYXMR7js.I;
exports.pascal = _chunkOEHYXMR7js.f;
exports.sanitize = _chunkOEHYXMR7js.l;
exports.snake = _chunkOEHYXMR7js.h;
exports.stringify = _chunkOEHYXMR7js.k;
exports.toObjectString = _chunkOEHYXMR7js.m;
exports.upper = _chunkOEHYXMR7js.j;
