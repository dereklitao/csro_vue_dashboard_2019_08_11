import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Chart from "chart.js";
import VueNativeSock from "vue-native-websocket";

Chart.defaults.global.defaultFontFamily = "Helvetica Neue";
Chart.defaults.global.defaultFontStyle = "normal";
Vue.config.productionTip = false;

Vue.use(VueNativeSock, "ws://192.168.2.2:8123/api/websocket", {
  store: store,
  format: "json"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
