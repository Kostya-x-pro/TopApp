module.exports = {
  extends: [
    "stylelint-config-standard",
  ],
  plugins: [
    "stylelint-order"
  ],
  rules: {
    "function-calc-no-invalid": null,
    "declaration-block-no-duplicate-properties": null,
    "indentation": 4,
    "color-hex-case": "upper",
    "color-hex-length": "short",
  }
};
