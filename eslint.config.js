import {
  configs as tsEslintConfig,
  plugin as tsEslintPlugin,
  parser as tsEslintParser,
} from 'typescript-eslint';
import eslintPluginVue from 'eslint-plugin-vue';
import nuxtEslintPlugin from '@nuxt/eslint-plugin';
import vueEslintParser from 'vue-eslint-parser';

import stylisticEslintPlugin from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // prettierRecommended,
  ...tsEslintConfig.recommended,
  ...eslintPluginVue.configs['flat/essential'],
  {
    ignores: [
      '**/dist/**',
      '**/*.min.js',
      '**/build/**',
      'public/**',
      '.nuxt/**',
      '.output/**',
      '.gitlab/**',
    ],
  },
  {
    plugins: {
      nuxt: nuxtEslintPlugin,
      vue: eslintPluginVue,
      'typescript-eslint': tsEslintPlugin,
      '@stylistic': stylisticEslintPlugin,
    },
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsEslintParser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    rules: {
      'max-len': ['error', {
        'code': 120,
        'ignoreComments': true,
        'ignoreUrls': true,
      }],
      'no-console': 'warn',
      '@stylistic/semi': 'off',
      '@stylistic/block-spacing': 'error',
      '@stylistic/curly-newline': 'error',
      '@stylistic/object-curly-newline': 'off',
      '@stylistic/multiline-comment-style': 'off',
      '@stylistic/array-element-newline': 'off',
      '@stylistic/space-before-function-paren': 'off',
      '@eslint-community/eslint-comments/require-description': 'off',
      '@eslint-community/eslint-comments/disable-enable-pair': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
];
