module.exports = {

  // Run ts via ts-jest
  transform: {'^.+\\.tsx?$': require.resolve('ts-jest')},

  // Test files
  testMatch: ['**/scan/tests/unit/**/*.spec.[jt]s?(x)'],

  // Ignore
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],

  // What files to include
  moduleFileExtensions: ['ts', 'js'],

  // Coverage
  collectCoverage: true,

  // ts-jest
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.scan.json',
      diagnostics: false
    }
  },

  // Coverage locations
  coverageDirectory: './scan/tests/coverage',

  // Environment
  testEnvironment: 'jsdom'

}
