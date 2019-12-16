module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import"
  ],
  ignorePatterns: [
    "*.d.ts",
    "node_modules/",
    "src/resolvers/types.ts",
    "src/services/endpoints.ts",
  ],

  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "arrow-body-style": ["error", "always"],
    "max-len": ["error", { "code": 140 }],
    "comma-dangle": ["error", "never"],
    "array-callback-return": 0,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }]
  },

  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "ts": {
        "alwaysTryTypes": true // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      "ts": {
        "directory": "./tsconfig.json"
      },
    }
  }
};
