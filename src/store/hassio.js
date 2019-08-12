export const authinfo = {
  type: "auth",
  access_token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIyOTAyOGU5ZTZiNzE0NzNjYTYwMzMwM2JiZTlhMTFlNSIsImlhdCI6MTU2NTYxODc4OCwiZXhwIjoxODgwOTc4Nzg4fQ.k1yq_MQfSyy2GV_5lcuFDn3PH5bw4NRuvydFijRXfbQ"
};

export var fetchStates = {
  id: 1,
  type: "get_states"
};

export var subscribe = {
  id: 2,
  type: "subscribe_events",
  event_type: "state_changed"
};
