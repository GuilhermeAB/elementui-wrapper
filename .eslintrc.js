module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'vue',
    'import',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'space-before-function-paren': ['error', 'always'],
    'no-undef': 0,
    'object-shorthand': ['error', 'never'],
    'func-names': ['error', 'never'],
    indent: ['error', 4],
    semi: [2, 'always'],
    'max-len': ['error', { code: 500 }],
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'global-require': 0,
    'no-plusplus': ['off'],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'prefer-rest-params': 0,
    'import/no-unresolved': 2,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-shadow': ['error', { allow: ['state'] }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  },
  overrides: [
    // TEST
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    // VUE
    {
      files: ['*.vue', '**/*.vue', '**/*.js', '*.js'],
      rules: {
        '@typescript-eslint/**': 0,
        indent: 0,
        'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
        'vue/html-indent': ['error', 2, { baseIndent: 1 }],
        'vue/html-quotes': ['error', 'single'],
        'vue/singleline-html-element-content-newline': 2,
        'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: { max: 1 } }],
        'vue/html-closing-bracket-newline': 2,
        'vue/attributes-order': ['error', { order: ['DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT'] }],
        'vue/prop-name-casing': 0,
        'vue/require-prop-types': 'error',
        'vue/require-default-prop': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/attribute-hyphenation': 'error',
        'vue/no-template-shadow': 'error',
        'vue/name-property-casing': 'error',
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'vue/html-end-tags': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/this-in-template': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
      },
    },
    // TYPESCRIPT
    {
      files: ['**/*.ts', '**/*.tsx', '*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/all',
        'plugin:vue/strongly-recommended',
      ],
      plugins: [
        '@typescript-eslint',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        project: './tsconfig.json',
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-type-alias': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/no-magic-numbers': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: { delimiter: 'comma', requireLast: true },
          singleline: { delimiter: 'comma', requireLast: true },
        }],
        'vue/prop-name-casing': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-require-imports': 0,
      },
    },
  ],
};
