import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Chart from "chart.js";

Chart.defaults.global.defaultFontFamily = "Helvetica Neue";
Chart.defaults.global.defaultFontStyle = "normal";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
