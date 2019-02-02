module.exports = {
  setupTestFrameworkScriptFile: './jest.setup.js',
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(tsx?|jsx?)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'html'],
}
