module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  ignorePatterns: [
    "*.d.ts",
    "node_modules/",
    "**/*/generated/**",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "graphql"
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "comma-dangle": ["error", "never"],
    "react/jsx-filename-extension": [1, {"extensions": [".tsx"]}],
    "max-len": ["error", { "code": 140 }],
    "consistent-return": 0,
    "import/prefer-default-export": 0,
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "react/prop-types": 0,
    "react/state-in-constructor": 0,
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }],

    "graphql/template-strings": ['error', {
      env: 'apollo',
      schemaJson: require('./generated/schema.json'),
    }]
  },

  "overrides": [
    {
        "files": ["**/Data/**/*.tsx"],
        "rules": {
            "react/jsx-props-no-spreading": "off"
        }
    }
  ],

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
