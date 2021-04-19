module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "import/extensions": ["error", "never"],
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": [2, { ignore: [".png$", ".webp$", ".jpg$"] }],
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/alt-text": 0,
    "no-unused-vars": 1,
    "consistent-return": 0,
    "no-shadow": 0,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 0
  },
};
