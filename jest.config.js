/**
 * Jest Config
 */

// const json = require('comment-json');
// const fs = require('fs');
// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { jsWithBabel: tsjPreset } = require('ts-jest/presets');
// const tsConfig = json.parse(fs.readFileSync('tsconfig.json').toString());
// const { compilerOptions } = tsConfig;
// const config = require('./config');

// const packagesToTransform = config.dependencies.translateEsModules
//   .map(name => name.split("/")[0])
//   .join("|");

module.exports = {
  // preset: 'ts-jest/presets/js-with-babel',
  // transform: {
  // 	'^.+\\.(js|jsx)$': 'babel-jest',
  // 	'^.+\\.(ts|tsx)$': 'ts-jest',
  // 	// ...tsjPreset.transform,
  // 	'\\.njk$': '<rootDir>/lib/jest/transformers/fractal-transformer.js',
  // 	'\\.html$': 'html-loader-jest'
  // },
  testMatch: [`<rootDir>/src/**/*.test.ts`],
  // testEnvironment: 'jest-environment-jsdom-fifteen',
  // testEnvironmentOptions: {
  // 	runScripts: 'dangerously',
  // 	resources: 'usable'
  // },
  moduleDirectories: [
    "node_modules" // This is required
  ]
  // moduleNameMapper: {
  // 	...pathsToModuleNameMapper(compilerOptions.paths, {
  // 		prefix: '<rootDir>'
  // 	}),
  // 	'\\.(css|scss|sass|less)$': '<rootDir>/lib/jest/mocks/emptyMock.js',
  // 	'^vue$': '<rootDir>/node_modules/vue/dist/vue.common.prod.js'
  // },
  // moduleFileExtensions: ['ts', 'js', 'json', 'njk', 'html'],
  // reporters: [
  // 	[
  // 		'jest-junit',
  // 		{
  // 			outputDirectory: config.test.outputDirectory,
  // 			outputName: 'test.code.xml'
  // 		}
  // 	]
  // ],
  // setupFiles: ['<rootDir>/lib/jest/setup/polyfill.ts'],
  // setupFilesAfterEnv: ['<rootDir>/lib/jest/setup/afterEnv.ts'],
  // transformIgnorePatterns: [
  // 	'<rootDir>/node_modules/(?!foundation-sites|lodash-es)'
  // ],
  // coverageReporters: ['lcov', 'json', 'cobertura'],
  // collectCoverageFrom: [
  // 	'src/framework/scripts/**/*.ts',
  // 	'!src/**/*.d.ts',
  // 	'!src/**/__{fixtures,tests}__/**/*.ts'
  // ],
  // unmockedModulePathPatterns: ['<rootDir>/node_modules/nock']
};
