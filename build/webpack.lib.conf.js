const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

//
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

//

const rules = utils.styleLoaders({
  sourceMap: false
  //   extract: false
});
const plugins =
  process.env.NODE_ENV == "development"
    ? []
    : [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          },
          sourceMap: true
        })
      ];
const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules
  },
  plugins: plugins,
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
