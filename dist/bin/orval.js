#!/usr/bin/env node
'use strict';
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _chunkOEHYXMR7js = require('../chunk-OEHYXMR7.js');
_chunkOEHYXMR7js.b.call(void 0);
var _cac = require('cac');
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
var o = _cac.cac.call(void 0, 'orval');
_chunkOEHYXMR7js.e.call(void 0, {
  name: _chunkOEHYXMR7js.a.name,
  version: _chunkOEHYXMR7js.a.version,
  description: _chunkOEHYXMR7js.a.description,
});
o.version(_chunkOEHYXMR7js.a.version);
o.command(
  '[config]',
  'generate client with appropriate type-signatures from OpenAPI specs',
  { ignoreOptionDefaultValue: !0 },
)
  .option('-o, --output <path>', 'output file destination')
  .option('-i, --input <path>', 'input file (yaml or json openapi specs)')
  .option('-c, --config <path>', 'override flags by a config file')
  .option('-p, --project <name>', 'focus a project of the config')
  .option('-m, --mode <name>', 'default mode that will be used')
  .option('-c, --client <name>', 'default client that will be used')
  .option('--mock', 'activate the mock')
  .option(
    '-w, --watch [path]',
    'Watch mode, if path is not specified, it watches the input target',
  )
  .option('--clean [path]', 'Clean output directory')
  .option('--prettier [path]', 'Prettier generated files')
  .option('--tslint [path]', 'tslint generated files')
  .option('--tsconfig [path]', 'path to your tsconfig file')
  .action(async (m, t) => {
    if (
      _chunkOEHYXMR7js.c.call(void 0, t.input) &&
      _chunkOEHYXMR7js.c.call(void 0, t.output)
    ) {
      let i = await _chunkOEHYXMR7js.H.call(void 0, {
        input: t.input,
        output: {
          target: t.output,
          clean: t.clean,
          prettier: t.prettier,
          tslint: t.tslint,
          mock: t.mock,
          client: t.client,
          mode: t.mode,
          tsconfig: t.tsconfig,
        },
      });
      if (t.watch)
        _chunkOEHYXMR7js.K.call(
          void 0,
          t.watch,
          async () => {
            try {
              await _chunkOEHYXMR7js.L.call(void 0, process.cwd(), i);
            } catch (n) {
              _chunkOEHYXMR7js.d.call(
                void 0,
                _chalk2.default.red(`\u{1F6D1}  ${n}`),
              );
            }
          },
          i.input.target,
        );
      else
        try {
          await _chunkOEHYXMR7js.L.call(void 0, process.cwd(), i);
        } catch (n) {
          _chunkOEHYXMR7js.d.call(
            void 0,
            _chalk2.default.red(`\u{1F6D1}  ${n}`),
          );
        }
    } else
      await _chunkOEHYXMR7js.M.call(void 0, t.config, {
        projectName: t.project,
        watch: t.watch,
        clean: t.clean,
        prettier: t.prettier,
        tslint: t.tslint,
        mock: t.mock,
        client: t.client,
        mode: t.mode,
        tsconfig: t.tsconfig,
      });
  });
o.help();
o.parse(process.argv);
