"use strict";

import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || "/api/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkMjU1M2VlMWYxMGM0MGJjYmI3MDAzMjMzNDgxNjUwMyIsImlhdCI6MTU2NTcwNjk4MiwiZXhwIjoxODgxMDY2OTgyfQ.9b_dxQ49Id7lq3dnqKBqT8y0ygFcPCCCrRVT9zAxj9I";
axios.defaults.headers.post["Content-Type"] = "application/json";

let config = {
  //baseURL: process.env.baseURL || process.env.apiUrl || "http://baidu.com",
  // timeout: 60 * 1000, // Timeout
  //withCredentials: false // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
