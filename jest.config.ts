import 'jest-preset-angular';

import type {Config} from 'jest';

const config: Config = {
    displayName: 'sandbox',
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    globals: {
      'ts-jest': {
          tsconfig: '<rootDir>/tsconfig.spec.json',
          stringifyContentPathRegex: '.(html|svg)$',
      },
      },
    transform: {'^.+.(ts|mjs|js|html)$': 'jest-preset-angular'},
    transformIgnorePatterns: ["node_modules/(?!.*.mjs$)"],
};

export default config;