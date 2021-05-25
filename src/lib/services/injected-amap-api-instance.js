/*
 * @Author: liuyonghu
 * @Date: 2021-05-13 09:22:35
 * @LastEditTime: 2021-05-25 17:27:42
 * @LastEditors: liuyonghu
 * @Description:
 * @FilePath: \vue2-amap\src\lib\services\injected-amap-api-instance.js
 */
let lazyAMapApiLoaderInstance = null;
import AMapAPILoader from "./lazy-amap-api-loader";
import Vue from "vue";
export const initAMapApiLoader = config => {
  if (Vue.prototype.$isServer) return;
  // if (lazyAMapApiLoaderInstance) throw new Error('You has already initial your lazyAMapApiLoaderInstance, just import it');
  if (lazyAMapApiLoaderInstance) return;
  if (!lazyAMapApiLoaderInstance)
    lazyAMapApiLoaderInstance = new AMapAPILoader(config);
  lazyAMapApiLoaderInstance.load();
};
export { lazyAMapApiLoaderInstance };
