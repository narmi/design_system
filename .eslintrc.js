module.exports = {
  parser: "@babel/eslint-parser",
  plugins: ["jest", "jsx-a11y"],
  settings: {
    react: { version: "detect" },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:json/recommended",
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
    "jest/globals": true,
  },
  rules: {
    /**
     * Temporarily disabled rules.
     *
     * This allows us to introduce linting without 100+
     * code changes. We can enable rules and fix their errors
     * one at a time until no rules are disabled.
     */
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
};