import Vue from "vue";

const state = {
  LeftDrawer: true,
  devicestate: null,
  socket: {
    isConnected: false,
    message: "",
    reconnectError: false
  }
};

const getters = {
  LeftDrawer: state => state.LeftDrawer
};

const actions = {
  toggleLeftDrawer({ commit }) {
    commit("toggleLeftDrawer");
  }
};

const mutations = {
  toggleLeftDrawer(state) {
    state.LeftDrawer = !state.LeftDrawer;
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
    Vue.prototype.$socket.sendObj({
      type: "auth",
      access_token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIyOTAyOGU5ZTZiNzE0NzNjYTYwMzMwM2JiZTlhMTFlNSIsImlhdCI6MTU2NTYxODc4OCwiZXhwIjoxODgwOTc4Nzg4fQ.k1yq_MQfSyy2GV_5lcuFDn3PH5bw4NRuvydFijRXfbQ"
    });
  } else if (message.type == "auth_ok") {
    Vue.prototype.$socket.sendObj({
      id: 1,
      type: "subscribe_events",
      event_type: "state_changed"
    });
  } else if (message.type == "event" && message.id == 1) {
    console.log(message.event.data.entity_id);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
