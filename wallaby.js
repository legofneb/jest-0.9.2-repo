var babel = require('babel-core');

process.env.BABEL_ENV = 'test';

module.exports = function (w) {

  return {
    files: ['*.ts*'],

    tests: ['__tests__/*.ts*'],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony'
      }
    },

    compilers: {
        '**/*.ts*': w.compilers.typeScript({ typescript: require('typescript'), jsx: 2, module: 1 })
    },

    preprocessors: {
        '**/*.js': file => babel.transform(
                                 file.content,
                                 { sourceMap: true, presets: ['es2015', 'react'], plugins: ['jest-hoist', 'jest-unmock'] })
    },

    testFramework: 'jest',

    bootstrap: function (wallaby) {
      wallaby.testFramework.configure({
          "unmockedModulePathPatterns": [
                   "<rootDir>/node_modules/*",
                   "react",
                   "fbjs",
                   "react-dom",
                   "react-addons-test-utils",
                   "babel",
                   "core-js",
                   "sinon",
                   "TestUtils",
          ],
          "modulePathIgnorePatterns": [
          ],
          "preprocessCachingDisabled": true
      });
    }
  };
};
