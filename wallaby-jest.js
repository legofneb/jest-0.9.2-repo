var babel = require('babel-core');

process.env.BABEL_ENV = 'test';

module.exports = function (w) {

  return {
    files: [
      'Scripts/src/**/*.ts*',
      'Scripts/typings/**/*.ts',
      { pattern: '**/__tests__/*.ts*', ignore: true },
      '**/__mocks__/**',
      'jestGlobals.js',
    ],

    tests: [
      'Scripts/src/**/__tests__/*.ts', 'Scripts/src/**/__tests__/*.tsx'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    compilers: {
      '**/*.ts*': w.compilers.typeScript({ typescript: require('typescript'), jsx: 2, module: 1 })
    },
    preprocessors: {
        '**/*.js': file => babel.transform(
                                 file.content, 
                                 {sourceMap: true, presets: ['es2015', 'react'], plugins: ['jest-hoist', 'jest-unmock']})
    },

    bootstrap: function(wallaby) {
        wallaby.testFramework.configure({
            "unmockedModulePathPatterns": [
                  "/node_modules/",
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
                "setupTestFrameworkScriptFile": "<rootDir>/jestGlobals.js",
        });
    },

    debug: true

  };
};