/*
 * @Author: liuyonghu
 * @Date: 2021-05-13 09:22:35
 * @LastEditTime: 2021-05-14 16:26:20
 * @LastEditors: liuyonghu
 * @Description: 
 * @FilePath: \vue2-amap\src\lib\index.js
 */
// polyfills
import './polyfills';

import upperCamelCase from 'uppercamelcase';

// 初始化接口
import {initAMapApiLoader} from './services/injected-amap-api-instance';

// 组建导入
import AMap from './components/amap.vue';
import AMapMarker from './components/amap-marker.vue';
import AMapSearchBox from './components/amap-search-box.vue';
import AMapCircle from './components/amap-circle.vue';
import AMapGroupImage from './components/amap-ground-image.vue';
import AMapInfoWindow from './components/amap-info-window.vue';
import AMapPolyline from './components/amap-polyline.vue';
import AMapPolygon from './components/amap-polygon.vue';
import AMapText from './components/amap-text.vue';
import AMapBezierCurve from './components/amap-bezier-curve.vue';
import AMapCircleMarker from './components/amap-circle-marker.vue';
import AMapEllipse from './components/amap-ellipse.vue';
import AMapRectangle from './components/amap-rectangle.vue';

// managers
import AMapManager from './managers/amap-manager';
import createCustomComponent from './adapter/custom-adapter';

let components = [
  AMap,
  AMapMarker,
  AMapSearchBox,
  AMapCircle,
  AMapGroupImage,
  AMapInfoWindow,
  AMapPolygon,
  AMapPolyline,
  AMapText,
  AMapBezierCurve,
  AMapCircleMarker,
  AMapEllipse,
  AMapRectangle
];

let Vue2AMap = {
  initAMapApiLoader,
  AMapManager
};

Vue2AMap.install = (Vue) => {
  if (Vue2AMap.installed) return;
  Vue.config.optionMergeStrategies.deferredReady = Vue.config.optionMergeStrategies.created;
  components.map(_component => {
    // register component
    Vue.component(_component.name, _component);

    // component cache
    Vue2AMap[upperCamelCase(_component.name).replace(/^El/, '')] = _component;
  });
};

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  Vue2AMap.install(Vue);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default Vue2AMap;

export {
  AMapManager,
  initAMapApiLoader,
  createCustomComponent
};
export { lazyAMapApiLoaderInstance } from './services/injected-amap-api-instance';
