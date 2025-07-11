const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  // Set the mode to 'development' for readable output and debugging,
  // or 'production' for minified code.
  mode: "development",

  // The entry point of your application. Webpack will start bundling from here.
  entry: "./main.ts",

  // Where to output the bundled code.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Enable source maps for easier debugging.
  devtool: "inline-source-map",

  // Define how to handle different types of modules.
  module: {
    rules: [
      {
        // Use ts-loader for any files ending in .ts or .tsx.
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          // Speeds up compilation by offloading type checking to ForkTsCheckerWebpackPlugin.
          transpileOnly: true,
        },
      },
    ],
  },

  // Resolve file extensions. This allows you to import modules without specifying their extension.
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  // Plugins to enhance the build process.
  plugins: [
    // Runs TypeScript type checking in a separate process to speed up compilation.
    new ForkTsCheckerWebpackPlugin(),
    // Cleans the output directory (dist) before each build.
    new CleanWebpackPlugin(),
    // Generates an HTML file and automatically injects the bundled JavaScript.
    new HtmlWebpackPlugin({
      title: "TypeScript Project",
    }),
  ],
};