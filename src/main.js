import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// import strapi from "@strapi/client";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import VideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
Vue.use(VideoPlayer);

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require("./assets/img/error.png"),
  //加载时显示的GIF图
  loading: require("./assets/img/loading.gif"),
  //尝试加载几次
  attempt: 1,
});

Vue.config.productionTip = false;

//设置超时时间
axios.defaults.timeout = 5000;
//设置api地址
//全局定义axios
// axios.defaults.baseURL = "http://shkjgw.shkjem.com/api/";
axios.defaults.baseURL = "http://localhost:1337/api/";
Vue.prototype.$http = axios;

// const client = strapi({
//   baseURL: "http://localhost:1337/api",
//   auth: "0561a6d0371ae96490da04a540e49a9327f3e9886555f961f453d5e9ec77e1dc6a81470dd5d2eb4966a7613aff7d87bebff7355f50980d5369d03dc9e1a66dd53b4bdb40a4352ed0e69ced81833a36951ac87f74f3ca6b81fa030a806227d5c63c54ad3985a64fe8baf1cae982ac6a68819ad0a7c2b1b2c0a5bd3a2ca905e098",
// });
// Vue.prototype.strapi = client;

// 图片服务器地址
Vue.prototype.imgserver = "http://localhost:1337";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
