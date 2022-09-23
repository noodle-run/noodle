export default {
  displayName: 'editor',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootdir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/editor',
  coverageReporters: ['text'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
