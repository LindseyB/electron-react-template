var path = require("path");

module.exports = {
  context: path.join(__dirname, "/src"),
  entry: "./entry.js",
  mode: "development",
  target: "electron-renderer",

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/build"),
    publicPath: "http://localhost:8080/build/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
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
