module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.+)': '<rootDir>/src/$1',
    '@entity/(.*)$': '<rootDir>/src/components/global/core/inputs/entity/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['vue', 'js', 'ts', 'tsx', 'scss', 'json'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue,ts}', '!**/node_modules/**', '!dist/**'],
};
