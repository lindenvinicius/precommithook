// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // 1) Global ignores (CI & local)
  {
    ignores: ["dist/**", "build/**", "node_modules/**", "*.min.js"],
  },

  // 2) Base JS rules
  js.configs.recommended,

  // 3) TS recommended rules
  ...tseslint.configs.recommended,

  // 4) Your project files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        // If you have a tsconfig at a subpath, point to it
        projectService: true, // auto-detects tsconfigs; use this OR set `project: "./tsconfig.json"`
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      // tighten/relax as you like
      "no-unused-vars": "off", // use TS rule instead
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  // 5) JS/TS common files
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  }
);
