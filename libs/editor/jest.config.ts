export default {
  displayName: 'editor',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/editor',
  coverageReporters: ['text'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
