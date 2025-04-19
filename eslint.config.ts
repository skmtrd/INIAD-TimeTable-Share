import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import gitignore from 'eslint-config-flat-gitignore';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  globalIgnores([
    'src/app/api/**/frourio.server.ts',
    'src/app/api/**/frourio.client.ts',
    'src/app/api/**/frourio.ts',
    'src/components/ui/**',
  ]),
  { files: ['**/*.{ts,tsx}'] },
  gitignore({ files: ['./.gitignore'] }),
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.es2020 },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      eqeqeq: 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      semi: ['error', 'always'],
      'no-restricted-imports': ['error', { patterns: ['./', '../'] }],
      'react/prop-types': 'off',
      'no-console': 'warn',
      'arrow-body-style': ['error'],
      'no-else-return': ['error'],
      'consistent-return': ['error'],
      'no-unneeded-ternary': ['error'],
      'prefer-object-spread': ['error'],
      'class-methods-use-this': ['error'],
      'no-plusplus': ['error'],
      'react/jsx-no-constructed-context-values': ['error'],
      'react/self-closing-comp': ['error'],
      'react/no-array-index-key': ['error'],
      'react/jsx-props-no-spreading': ['error'],
      'react/jsx-curly-brace-presence': ['error'],
      'react/button-has-type': ['error'],
      'react/jsx-no-useless-fragment': ['error'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-shadow': ['error'],
      'import/newline-after-import': ['error'],
      'import/no-duplicates': ['error'],
      'import/no-cycle': ['error'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'no-underscore-dangle': 'off',
      'prefer-destructuring': 'off',
      'react/destructuring-assignment': ['error', 'never'],
      'react/function-component-definition': [1, { namedComponents: 'arrow-function' }],
      'import/prefer-default-export': 'off',
      'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
    },
  },
  {
    files: ['tests/**/*.{ts,tsx}'],
    plugins: {
      'testing-library': testingLibrary,
    },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      'testing-library/no-unnecessary-act': 'error',
      'no-restricted-syntax': [
        'error',
        { selector: 'OptionalChain', message: 'Optional chaining (?.) is not allowed.' },
      ],
    },
  },
  prettierConfig
);
