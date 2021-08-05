const {withEnzyme} = require('jest-expo-enzyme');

const addSetup = (config) => {
  config.setupFilesAfterEnv.push('<rootDir>/__tests__/setup.js');
  config.testMatch = [
    '<rootDir>/src/component/Clients/ClientScreen.test.js',
  ];
  config.transformIgnorePatterns.push(
    // 'node_modules/(?!(jest-)?(react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-native-picker-select)/)',
    // '<rootDir>/node_modules/',
    
  );
  // config.preset = 'react-native';
  return config;
}

module.exports = {
  projects: [
    addSetup(withEnzyme(require('jest-expo/android/jest-preset'))),
  ],
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '<rootDir>/src/**.{ts,tsx,js,jsx}',
  //   '<rootDir>/src/component/Header/Header.tsx',
  //   '<rootDir>/src/screens/Batches/Batches.tsx',
  // ],
  // coverageDirectory: 'coverage',
  // coverageThreshold: {
  //   global: {
  //     statements: 70
  //   }
  // },
}
