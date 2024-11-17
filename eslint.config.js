import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: {
      '@stylistic': stylistic,
    },
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/*.min.js',
      '**/build/**',
      'public/**',
      '.nuxt/**',
    ],
    rules: {
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent':  ['error', 2],
      'no-console': 'warn',
      '@stylistic/semi': 'off',
      '@stylistic/block-spacing': 'error',
      '@stylistic/curly-newline': 'error',
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            consistent: true,
          },
          ObjectPattern: {
            consistent: true,
          },
          ImportDeclaration: 'never',
          ExportDeclaration: 'always',
        },
      ],
      '@stylistic/multiline-comment-style': 'off',
      '@stylistic/array-element-newline': 'off',
      '@stylistic/space-before-function-paren': 'off',
      '@eslint-community/eslint-comments/require-description': 'off', '@eslint-community/eslint-comments/disable-enable-pair': 'off',
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },
];
