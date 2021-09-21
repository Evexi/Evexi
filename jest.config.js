module.exports = {

  // Run ts via ts-jest
  transform: {'^.+\\.tsx?$': require.resolve('ts-jest')},

  // Test files
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)'],

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
  coverageDirectory: './tests/coverage',

  // Environment
  testEnvironment: 'jsdom'

}
