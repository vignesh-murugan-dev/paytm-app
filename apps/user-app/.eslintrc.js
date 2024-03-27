/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: '@typescript-eslint/parser',
  project: './tsconfig.json',
  tsconfigRootDir: __dirname,
  parserOptions: {
    project: true,
  },
};
