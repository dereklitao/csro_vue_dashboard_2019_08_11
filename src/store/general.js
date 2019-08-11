const state = {
  showLeftDrawer: true,
  deviceOnlineCount: [12, 6],
  temperatureData: [
    [25.4, 24.8, 25.6, 28.9, 30.5, 33.2, 12.4, 12.5, 21.0, 12.5],
    [16.5, 12.6, 18.6, 12.5, 13.5, 20.3, 25.6, 28.9, 30.5, 33.2],
    [26.5, 16.6, 13.6, 22.5, 15.5, 22.3, 15.6, 18.9, 32.5, 30.2]
  ]
};

const getters = {
  deviceOnlineCount: state => state.deviceOnlineCount,
  showLeftDrawer: state => state.showLeftDrawer,
  temperatureData: state => state.temperatureData
};

const actions = {};

const mutations = {
  toggleShowLeftDrawer(state) {
    state.showLeftDrawer = !state.showLeftDrawer;
  },
  changePieData(state) {
    state.deviceOnlineCount = [
      Math.floor(Math.random() * (50 - 5 + 1)) + 5,
      Math.floor(Math.random() * (50 - 5 + 1)) + 5
    ];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
