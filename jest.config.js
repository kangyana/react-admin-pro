module.exports = {
  testURL: 'http://localhost:8000',
  preset: 'jest-puppeteer',
  extraSetupFiles: ['./tests/run-tests.js'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: false,
    localStorage: null,
  },
  testEnvironment: 'jsdom',
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'utils', // a utility folder
    __dirname, // the root directory
  ],
};
