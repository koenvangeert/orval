'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
('use strict');
var _chunkE6W7RAETjs = require('./chunk-E6W7RAET.js');
_chunkE6W7RAETjs.b.call(void 0);
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
_chunkE6W7RAETjs.b.call(void 0);
var c = async (t, o = process.cwd(), e) => {
  if (!t || _chunkE6W7RAETjs.c.call(void 0, t))
    return _chunkE6W7RAETjs.M.call(void 0, t, e);
  let n = await _chunkE6W7RAETjs.H.call(void 0, t, o, e);
  if (e != null && e.watch)
    _chunkE6W7RAETjs.K.call(
      void 0,
      e == null ? void 0 : e.watch,
      async () => {
        try {
          await _chunkE6W7RAETjs.L.call(void 0, o, n);
        } catch (a) {
          _chunkE6W7RAETjs.d.call(
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
      return await _chunkE6W7RAETjs.L.call(void 0, o, n);
    } catch (a) {
      _chunkE6W7RAETjs.d.call(
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
exports.URL_REGEX = _chunkE6W7RAETjs.s;
exports.VERBS_WITH_BODY = _chunkE6W7RAETjs.r;
exports.addDependency = _chunkE6W7RAETjs.v;
exports.camel = _chunkE6W7RAETjs.g;
exports.default = te;
exports.defineConfig = _chunkE6W7RAETjs.G;
exports.escape = _chunkE6W7RAETjs.o;
exports.generalJSTypes = _chunkE6W7RAETjs.p;
exports.generalJSTypesWithArray = _chunkE6W7RAETjs.q;
exports.generate = c;
exports.generateAxiosOptions = _chunkE6W7RAETjs.z;
exports.generateBodyMutatorConfig = _chunkE6W7RAETjs.B;
exports.generateBodyOptions = _chunkE6W7RAETjs.y;
exports.generateDependencyImports = _chunkE6W7RAETjs.w;
exports.generateFormDataAndUrlEncodedFunction = _chunkE6W7RAETjs.F;
exports.generateImports = _chunkE6W7RAETjs.t;
exports.generateMutatorConfig = _chunkE6W7RAETjs.D;
exports.generateMutatorImports = _chunkE6W7RAETjs.u;
exports.generateMutatorRequestOptions = _chunkE6W7RAETjs.E;
exports.generateOptions = _chunkE6W7RAETjs.A;
exports.generateQueryParamsAxiosConfig = _chunkE6W7RAETjs.C;
exports.generateVerbImports = _chunkE6W7RAETjs.x;
exports.getNumberWord = _chunkE6W7RAETjs.n;
exports.isSyntheticDefaultImportsAllow = _chunkE6W7RAETjs.J;
exports.kebab = _chunkE6W7RAETjs.i;
exports.loadTsconfig = _chunkE6W7RAETjs.I;
exports.pascal = _chunkE6W7RAETjs.f;
exports.sanitize = _chunkE6W7RAETjs.l;
exports.snake = _chunkE6W7RAETjs.h;
exports.stringify = _chunkE6W7RAETjs.k;
exports.toObjectString = _chunkE6W7RAETjs.m;
exports.upper = _chunkE6W7RAETjs.j;
