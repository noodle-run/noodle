export default {
  displayName: 'ui',
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
  coverageDirectory: '../../coverage/libs/stitches',
  coverageReporters: ['text'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
