import Vue from "vue";

const state = {
  humiDatas: [
    56,
    58,
    63,
    62,
    58,
    61,
    62,
    58,
    61,
    65,
    56,
    58,
    61,
    59,
    58,
    61,
    62,
    59,
    61,
    59,
    56,
    58,
    63,
    58,
    58,
    61,
    61,
    58,
    61,
    62
  ],
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
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30"
  ],
  humiLabels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30"
  ],
  pmDatas: [37, 60, 72]
};

const getters = {
  tempDatas: state => state.tempDatas,
  tempLabels: state => state.tempLabels,
  humiDatas: state => state.humiDatas,
  humiLabels: state => state.humiLabels,
  pmDatas: state => state.pmDatas
};

const actions = {
  pm25update({ commit }, pm25obj) {
    commit("PM25_UPDATE", pm25obj);
  }
};

const mutations = {
  PM25_UPDATE(state, pm25obj) {
    console.log(state, pm25obj);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
