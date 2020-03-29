const path = require('path');
const { pathsToModuleNameMapper: resolver } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

const moduleNameMapper = resolver(compilerOptions.paths, { prefix: '<rootDir>/' });

module.exports = {
  verbose: true,
  watch: false,
  cache: false,
  maxWorkers: 3,
  maxConcurrency: 3,
  preset: 'jest-preset-angular',
  rootDir: path.resolve('.'),
  testMatch: ['<rootDir>/**/*.spec.ts'],
  collectCoverageFrom: ['<rootDir>/projects/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  coverageReporters: ['json', 'lcovonly', 'lcov', 'text', 'html'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
      allowSyntheticDefaultImports: true
    }
  },
  bail: true,
  roots: ['<rootDir>'],
  moduleNameMapper,
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  modulePaths: ['<rootDir>']
};
