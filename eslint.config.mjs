import { defineFlatConfig } from "eslint-define-config";
import globals from "globals";

// --- ESLint 公式が提供する JavaScript 用の推奨ルールセット ---
import js from "@eslint/js";

// --- React 関連プラグイン ---
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

// --- TypeScript 関連プラグインとパーサー ---
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

// --- Prettier との競合を無効化するための設定 ---
import prettier from "eslint-config-prettier";

// --- Import プラグイン ---
import importPlugin from "eslint-plugin-import";

export default defineFlatConfig([
  {
    // この設定を適用するファイルの指定
    files: ["**/*.{js,jsx,ts,tsx}"],

    // 無視したいパスがあれば指定
    ignores: [
      "node_modules/*",
      "dist/**/*",
      "build",
      "tailwind.config.js",
      "eslint.config.js",
      "postcss.config.js",
      "src/external/open-api.d.ts",
      ".storybook/*",
      "public/mockServiceWorker.js",
    ],

    /**
     * 言語オプション (parser / ecmaVersion / sourceType / jsx など)
     */
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        React: "readonly",
        process: "readonly",
        ...globals.jest,
      },
    },

    /**
     * settings
     */
    settings: {
      react: {
        version: "detect",
      },
      // import/resolver の設定 (TS + Node)
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    /**
     * プラグインを定義
     */
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": ts,
      import: importPlugin,
    },

    /**
     * ルールを定義
     */
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...prettier.rules,
      ...importPlugin.configs.recommended.rules,

      // 既存のカスタムルールはそのまま維持
      "no-use-before-define": "off",
      "linebreak-style": ["error", "unix"],
      quotes: [
        "error",
        "single",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      semi: ["error", "always"],
      "prefer-template": ["error"],
      "no-restricted-imports": ["error", { patterns: ["./", "../"] }],
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": "error",
      eqeqeq: ["error", "always"],
      "no-console": "warn",
      "object-shorthand": "error",
      "arrow-body-style": ["error"],
      "no-else-return": ["error"],
      "consistent-return": ["error"],
      "no-unneeded-ternary": ["error"],
      "prefer-object-spread": ["error"],
      "class-methods-use-this": ["error"],
      "no-plusplus": ["error"],
      "no-param-reassign": ["error", { props: false }],
      "react/jsx-no-constructed-context-values": ["error"],
      "react/self-closing-comp": ["error"],
      "react/no-array-index-key": ["error"],
      "react/jsx-props-no-spreading": ["error"],
      "react/jsx-curly-brace-presence": ["error"],
      "react/button-has-type": ["error"],
      "react/jsx-no-useless-fragment": ["error"],
      "react-hooks/exhaustive-deps": ["error"],
      "@typescript-eslint/no-use-before-define": ["error"],
      "@typescript-eslint/dot-notation": ["error"],
      "@typescript-eslint/no-shadow": ["error"],
      "import/newline-after-import": ["error"],
      "import/no-duplicates": ["error"],
      "import/no-cycle": ["error"],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // naming-convention
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase"],
        },
        {
          selector: "variable",
          types: ["function"],
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "variable",
          types: ["boolean"],
          prefix: ["is", "has", "should"],
          format: ["PascalCase"],
        },
        {
          selector: "parameter",
          format: ["camelCase"],
        },
        {
          selector: "memberLike",
          format: ["camelCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "method",
          format: ["camelCase"],
        },
        {
          selector: "property",
          format: null,
        },
      ],

      "react/require-default-props": "off",
      "no-underscore-dangle": "off",
      "prefer-destructuring": "off",
      "react/destructuring-assignment": ["error", "never"],
      "react/function-component-definition": [
        1,
        { namedComponents: "arrow-function" },
      ],
      "import/prefer-default-export": "off",
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "react/jsx-sort-props": [
        "error",
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
]);
