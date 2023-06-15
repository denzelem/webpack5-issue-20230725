const path = require("path")

module.exports = {
  mode: "production",
  entry: {
    light: { import: "./app/assets/light.js", layer: 'light' },
    dark: { import: "./app/assets/dark.js", layer: 'dark' },
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "public/assets"),
    clean: true,
  },
  experiments: {
    layers: true,
  },
}
