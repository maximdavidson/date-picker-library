module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^decorators/(.*)$': '<rootDir>/src/decorators/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^providers/(.*)$': '<rootDir>/src/providers/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
  },
  testMatch: [
    '**/__tests__/**/*.js',
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
