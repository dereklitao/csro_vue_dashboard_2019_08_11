import Vue from "vue";

const state = {
  tempDatas: [
    22.2,
    23.5,
    22.6,
    24.6,
    25.3,
    26.1,
    24.5,
    28.5,
    30.2,
    29.8,
    36.2,
    23.5,
    22.6,
    24.6,
    25.3,
    26.1,
    28.5,
    28.5,
    30.2,
    29.8,
    28.2,
    24.5,
    26.6,
    24.6,
    25.3,
    26.1,
    24.5,
    28.5,
    30.2,
    29.8
  ],
  tempLabels: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
};

const getters = {
  tempDatas: state => state.tempDatas,
  tempLabels: state => state.tempLabels
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
