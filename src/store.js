import Vue from "vue";
import Vuex from "vuex";
import general from "@/store/general";
import airparams from "@/store/airparams";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    general,
    airparams
  }
});
