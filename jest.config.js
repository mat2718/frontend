const {withEnzyme} = require('jest-expo-enzyme');

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
    '<rootDir>/src/**.{ts,tsx,js,jsx}',
    '<rootDir>/src/component/Header/Header.tsx',
    '<rootDir>/src/screens/Batches/Batches.tsx',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 70
    }
  },
}