const tsc = require('typescript');
const babelJest = require('babel-jest');

process.env.BABEL_ENV = 'test';

module.exports = {
    process(src, path) {
        if (path.indexOf('node_modules') > -1) {
            return src;
        }

        if (path.endsWith('.ts') || path.endsWith('.tsx')) {
            src = tsc.transpile(
                src,
                {
                    module: tsc.ModuleKind.CommonJS,
                    jsx: tsc.JsxEmit.React
                }
            );
        }

        src = babelJest.process(src, path);

        return src;
    }
}