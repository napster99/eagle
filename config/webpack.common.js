const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx",
    bg: "./src/bg.ts",
    content: "./src/content.ts",
    cur: "./src/cur.ts",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../", "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Eagle",
      filename: "popup.html",
      template: "./popup.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./manifest.json", to: "./manifest.json" },
        { from: "./public/icon.png", to: "./public/icon.png" },
        { from: "./_locales", to: "./_locales" },
      ],
    }),
  ],
};
