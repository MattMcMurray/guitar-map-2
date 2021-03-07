module.exports = {
  roots: ['<rootDir>'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  name: 'live',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/apps/live',
  moduleNameMapper: {
    '^components/(.*)': ['<rootDir>/components/$1'],
    '^model/(.*)': ['<rootDir>/model/$1'],
    '^styles/(.*)': ['<rootDir>/styles/$1'],
    '^util/(.*)': ['<rootDir>/util/$1'],
  },
};
