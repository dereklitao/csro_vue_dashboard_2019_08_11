import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true
  },
  mutations: {
    toggledrawer: function() {
      this.state.drawer = !this.state.drawer;
    }
  },
  actions: {}
});
