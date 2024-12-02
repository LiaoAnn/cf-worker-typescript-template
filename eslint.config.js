import { Linter } from 'eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules/', 'dist/', 'build/'], // 忽略檔案
  },
  {
    languageOptions: {
      parser: typescriptParser, // 使用 @typescript-eslint 的解析器
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // 確保 Prettier 問題被視為錯誤
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
