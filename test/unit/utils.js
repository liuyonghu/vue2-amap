// import Vue from 'Vue';
import Vue2AMap  from '../../src/lib';
// Vue.use(Vue2AMap );
// initAMap();

export function initAMap(options) {
  Vue2AMap .initAMapApiLoader({
    key: '608d75903d29ad471362f8c58c550daf',
    plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor', 'Geolocation', 'Geocoder', 'MarkerClusterer'],
    ...options
  });
}
