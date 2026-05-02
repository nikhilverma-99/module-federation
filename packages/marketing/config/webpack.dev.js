const { merge } = require("webpack-merge");
const commonConfigs = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonDependencies = require("../package.json");

const devConfigs = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      //   shared: ["react", "react-dom"],
      shared: commonDependencies.dependencies,
    }),
  ],
};

module.exports = merge(commonConfigs, devConfigs);
