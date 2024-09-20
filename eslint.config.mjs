import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
}, {
  rules: {
    'style/array-bracket-newline': ['error', 'consistent'],
    'style/array-bracket-spacing': ['error', 'never'],
    'style/array-element-newline': ['error', {
      ArrayExpression: 'consistent',
      ArrayPattern: {minItems: 3},
    }],
    'style/object-curly-newline': ['error', {
      consistent: true,
    }],
    'style/object-curly-spacing': ['error', 'never'],
    'style/block-spacing': ['error', 'never'],
    'style/brace-style': ['error', 'stroustrup'],
    'style/comma-dangle': ['error', 'always-multiline'],
    'style/eol-last': ['error', 'always'],
    'style/key-spacing': ['error', {beforeColon: false}],
    'style/no-tabs': 'error',
    'style/no-trailing-spaces': 'error',
    'style/function-call-spacing': ['error', 'never'],
    'style/padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    }],

    'no-console': ['warn', {allow: ['warn', 'error']}],
    'max-len': ['warn', {
      code: 160,
      ignoreUrls: true,
      ignorePattern: '^import .*',
    }],
    'curly': ['error', 'all'],

    'guard-for-in': 'error',
    'unused-imports/no-unused-vars': 'warn',

    'vue/html-indent': ['error', 4],
    'vue/script-indent': ['error', 4],
    'yaml/indent': ['error', 2],
    'jsonc/indent': ['error', 2],

    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/multi-word-component-names': ['error']
  },
})
