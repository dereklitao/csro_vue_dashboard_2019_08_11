import moment from "moment";

const state = {
  tempDatas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }],
  humiDatas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }],
  hchoDatas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }],
  pm1Datas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }],
  pm25Datas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }],
  pm10Datas: [{ t: moment(), y: 0.5 }, { t: moment(), y: 1 }]
};

const getters = {
  tempDatas: state => state.tempDatas,
  humiDatas: state => state.humiDatas,
  hchoDatas: state => state.hchoDatas,
  pm1Datas: state => state.pm1Datas,
  pm25Datas: state => state.pm25Datas,
  pm10Datas: state => state.pm10Datas
};

const actions = {
  tempGetHistory({ commit }, history) {
    commit("tempGetHistory", history);
  },
  humiGetHistory({ commit }, history) {
    commit("humiGetHistory", history);
  },
  hchoGetHistory({ commit }, history) {
    commit("hchoGetHistory", history);
  },
  pm1GetHistory({ commit }, history) {
    commit("pm1GetHistory", history);
  },
  pm25GetHistory({ commit }, history) {
    commit("pm25GetHistory", history);
  },
  pm10GetHistory({ commit }, history) {
    commit("pm10GetHistory", history);
  },

  tempGetNewValue({ commit }, val) {
    commit("tempGetNewValue", val);
  },
  humiGetNewValue({ commit }, val) {
    commit("humiGetNewValue", val);
  },
  hchoGetNewValue({ commit }, val) {
    commit("hchoGetNewValue", val);
  },
  pm1GetNewValue({ commit }, val) {
    commit("pm1GetNewValue", val);
  },
  pm25GetNewValue({ commit }, val) {
    commit("pm25GetNewValue", val);
  },
  pm10GetNewValue({ commit }, val) {
    commit("pm10GetNewValue", val);
  }
};

const mutations = {
  tempGetHistory(state, history) {
    console.log(state, history);
  },
  humiGetHistory(state, history) {
    console.log(state, history);
  },
  hchoGetHistory(state, history) {
    console.log(state, history);
  },
  pm1GetHistory(state, history) {
    console.log(state, history);
  },
  pm25GetHistory(state, history) {
    console.log(state, history);
  },
  pm10GetHistory(state, history) {
    console.log(state, history);
  },

  tempGetNewValue(state, val) {
    console.log(state, val);
  },
  humiGetNewValue(state, val) {
    console.log(state, val);
  },
  hchoGetNewValue(state, val) {
    console.log(state, val);
  },
  pm1GetNewValue(state, val) {
    console.log(state, val);
  },
  pm25GetNewValue(state, val) {
    console.log(state, val);
  },
  pm10GetNewValue(state, val) {
    console.log(state, val);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
