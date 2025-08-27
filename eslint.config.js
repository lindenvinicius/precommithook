// eslint.config.js
import js from "@eslint/js";

export default [
  { ignores: ["dist/**", "build/**", "node_modules/**", "*.min.js"] },
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
