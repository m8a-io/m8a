const config = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts'],
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { isolatedModules: true }]
  },
  resetMocks: true,
  testEnvironment: 'node',
  roots: ['<rootDir>/src']
}
module.exports = config
