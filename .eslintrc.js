module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint", "prettier"],
  env: {
    jest: true
  },
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"]
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    },
    node: {
      tryExtensions: [".ts", ".js"]
    }
  },
  rules: {
    "no-console": "off",

    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",

    "node/no-unsupported-features/es-syntax": "off",

    "prettier/prettier": "error"
  }
}
