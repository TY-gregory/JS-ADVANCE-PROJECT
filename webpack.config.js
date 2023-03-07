/*const Path = require("path");

module.exports = {
  entry: "/src/js/script.js",

  output: {
    path: Path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  plugins: [],
  devServer: {},
  mode: "production",
};*/

const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    script: "/src/js/script.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: { rules: [] },
  plugins: [
    new HtmlWebpackPlugin({
      title: "LIFE-QUALITY-APP",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  devServer: {
    port: 5000,
    open: true,
    static: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "production",
};
