const { withEnzyme } = require('jest-expo-enzyme');

const addSetup = (config) => {
  config.setupFilesAfterEnv.push('<rootDir>/__tests__/setup.js');
  config.transformIgnorePatterns = [
    'node_modules/(?!(jest-)?(react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@react-native-picker|react-native-picker-select|react-native-chart-kit|react-native-calendars|react-native-swipe-gestures|expo-font|expo-asset|expo-constants)/)',
  ];
  return config;
};

module.exports = {
  projects: [addSetup(withEnzyme(require('jest-expo/android/jest-preset')))],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{tsx,ts,jsx,js}',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 70,
    },
  },
};
