var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: path.join(__dirname, "/src"),
  entry: "./entry.js",
  mode: "development",

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/build"),
    publicPath: "http://localhost:8080/build/",
  },

  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
