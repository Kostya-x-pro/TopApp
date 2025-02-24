module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-order-config-standard"
  ],
  plugins: [
    "stylelint-order"
  ],
  rules: {
    "declaration-block-no-duplicate-properties": null,
    "indentation": "tab",
    "color-hex-case": "upper",
    "color-hex-length": "short",
    "order/properties-alphabetical-order": true
  }
};
