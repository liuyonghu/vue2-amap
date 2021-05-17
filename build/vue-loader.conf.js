/*
 * @Author: liuyonghu
 * @Date: 2021-05-13 09:22:35
 * @LastEditTime: 2021-05-17 12:18:07
 * @LastEditors: liuyonghu
 * @Description: 
 * @FilePath: \vue2-amap\build\vue-loader.conf.js
 */
var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production' && process.env.LIB_ENV !== 'lib'
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    // extract: isProduction
  })
}
