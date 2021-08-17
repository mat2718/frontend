const { withEnzyme } = require('jest-expo-enzyme');

module.exports = {
  projects: [addConfig(withEnzyme(require('jest-expo/android/jest-preset')))],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/src/**/*/batches/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/src/**/*.test.{ts,tsx,js,jsx}',
    '!<rootDir>/src/components/clients_old/**/*',
    '!<rootDir>/src/screens/clients-old/**/*',
    '!<rootDir>/src/assets/**/*',
    '!<rootDir>/src/types.ts',
    '!<rootDir>/src/entities/*',
  ],
  // coveragePathIgnorePatterns: [
  //   '**/__tests__/**/*.[jt]s?(x)',
  //   '**/*/clients_old/**/*',
  // ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 70,
    },
  },
};

/**
 * Returns an array with a single string that tells Babel to ignore uncompiled
 * third-party React Native libraries.
 *
 * @param {*} ignoreThese array of strings representing third-party libraries in node_modules
 * @returns array with a single string element
 */
function returnTransformIgnorePatterns(ignoreThese) {
  const defaultIgnore = [
    'react-native',
    '@react-native-community',
    'expo(nent)?',
    '@expo(nent)?/.*',
    'react-navigation',
    '@react-navigation/.*',
    '@unimodules/.*',
    'unimodules',
    'sentry-expo',
    'native-base',
    'react-native-svg',
  ];
  const allLibraries = [...defaultIgnore, ...ignoreThese];
  const start = 'node_modules/(?!(jest-)?';
  const end = ')';
  let str = start;
  for (const i in allLibraries) {
    if (+i === 0) {
      str += `${allLibraries[i]}`;
    } else {
      str += `|${allLibraries[i]}`;
    }
  }
  str += end;
  return [str];
}

/**
 * `withEnzyme` comes with a lot of useful configuration to save you time,
 * but sometimes you need a little more. This function will modify the object
 * returned by `withEnzyme` to suit the needs of our project.
 *
 * @param {*} config the object returned by `withEnzyme`
 * @returns the same object but with modified properties
 */
function addConfig(config) {
  // add extra setup file
  config.setupFilesAfterEnv.push('<rootDir>/__tests__/setup.js');

  config.testPathIgnorePatterns = [
    '/clients_old/',
    '<rootDir>/__tests__/testExample.test.js',
  ];

  /* comment this out if you want to test all files */

  config.testMatch = [
    '<rootDir>/src/screens/*train*/*.test.[jt]s?(x)',
  ];


  // third-party libraries that throw errors
  // see https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization
  const ignoreThese = [
    '@react-native-picker',
    'react-native-picker-select',
    'react-native-chart-kit',
    'react-native-calendars',
    'react-native-swipe-gestures',
    'react-native-reanimated',
    'react-native-calendar-picker',
    'expo-font',
    'expo-asset',
    'expo-constants',
    '@expo',
    '@expo/vector-icons',
    'react-native-toast-message',
  ];

  console.log(
    'transformIgnorePatterns set to: \n',
    returnTransformIgnorePatterns(ignoreThese)[0] + '\n'
  );

  config.transformIgnorePatterns = returnTransformIgnorePatterns(ignoreThese);

  config.displayName = {
    name: 'components',
    color: 'blue',
  };

  return config;
}
