const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

// 
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 
const rules = utils.styleLoaders({
  sourceMap: false,
//   extract: false
});

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules
  },
  plugins: [
    // new ExtractTextPlugin({
    //     // filename: utils.assetsPath('css/[name].[contenthash].css')
    //   filename: utils.assetsPath("[name]/styles.[contenthash].css")
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ],
  devtool: config.lib_build.productionSourceMap ? "#source-map" : false,
  output: {
    path: config.lib_build.assetsRoot,
    filename: "index.js",
    chunkFilename: "index.js",
    library: "Vue2AMap ",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  }
});

module.exports = webpackConfig;
