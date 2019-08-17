import Vue from "vue";
import AirState from "@/store/airparams";
import { authinfo, fetchStates, subscribe, gethistory } from "./hassio";

const state = {
  showLeftDrawer: true,
  deviceOnlineCount: [12, 6],
  socket: {
    isConnected: false,
    message: "",
    reconnectError: false
  }
};

const getters = {
  deviceOnlineCount: state => state.deviceOnlineCount,
  showLeftDrawer: state => state.showLeftDrawer
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
  },
  SOCKET_ONOPEN(state, event) {
    Vue.prototype.$socket = event.currentTarget;
    state.socket.isConnected = true;
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR(state, event) {
    console.log(state, event);
  },
  SOCKET_ONMESSAGE(state, message) {
    state.socket.message = message;
    receiveMessage(message);
  },
  SOCKET_RECONNECT(state, count) {
    console.log(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  }
};

function receiveMessage(message) {
  if (message.type == "auth_required") {
    Vue.prototype.$socket.sendObj(authinfo);
  } else if (message.type == "auth_ok") {
    Vue.prototype.$socket.sendObj(fetchStates);
    Vue.prototype.$socket.sendObj(subscribe);
    Vue.prototype.$socket.sendObj(gethistory);
  } else if (message.type == "event" && message.id == 2) {
    if (message.event.data.entity_id.indexOf("sensor.airmon") === 0) {
      updateAirParams(message.event.data);
    }
  } else if (message.type == "result" && message.id == 1) {
    state.deviceOnlineCount = [0, 0];
    message.result.forEach(device => {
      if (device.state == "unavailable") {
        state.deviceOnlineCount[1] += 1;
      } else {
        state.deviceOnlineCount[0] += 1;
      }
    });
  }
}

function updateAirParams(data) {
  if (data.entity_id.indexOf("airmon_pm1_") != -1) {
    AirState.state.pmDatas = [
      data.new_state.state,
      AirState.state.pmDatas[1],
      AirState.state.pmDatas[2]
    ];
    console.log("PM1");
  } else if (data.entity_id.indexOf("airmon_pm2d5_") != -1) {
    AirState.state.pmDatas = [
      AirState.state.pmDatas[0],
      data.new_state.state,
      AirState.state.pmDatas[2]
    ];
    console.log("PM25");
  } else if (data.entity_id.indexOf("airmon_pm10_") != -1) {
    AirState.state.pmDatas = [
      AirState.state.pmDatas[0],
      AirState.state.pmDatas[1],
      data.new_state.state
    ];
    console.log("PM10");
  }
  console.log(data.entity_id);
}

export default {
  state,
  getters,
  actions,
  mutations
};
