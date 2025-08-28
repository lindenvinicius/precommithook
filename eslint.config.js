// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  // Ignore common build artifacts
  { ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/*.d.ts'] },

  // JavaScript / JSX
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // TypeScript / TSX (uses typescript-eslint's recommended flat config)
  ...tseslint.configs.recommended,

  // Ensure TS files use the TS parser & common globals
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
  },
];
