import { withEnzyme } from 'jest-expo-enzyme';

const addSetup = (config) => {
    config.setupFilesAfterEnv.push('<rootDir>/__tests__/setup.js');
    return config;
}

module.exports = {
    projects: [
        addSetup(withEnzyme(require('jest-expo/android/jest-preset'))),
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/src/**{.ts,.tsx,.js,.jsx}',
    ],
    coverageDirectory: 'coverage',
    coverageThreshold: {
      global: {
        statements: 70
      }
    }
}