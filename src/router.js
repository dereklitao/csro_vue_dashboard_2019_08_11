import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("@/views/1-DashBoard.vue")
    },
    {
      path: "/rooms",
      name: "rooms",
      component: () => import("@/views/2-Rooms.vue")
    },
    {
      path: "/scenes",
      name: "scene",
      component: () => import("@/views/3-Scenes.vue")
    },
    {
      path: "/airsystem",
      name: "airsystem",
      component: () => import("@/views/4-AirSystem.vue")
    },
    {
      path: "/curtains",
      name: "curtains",
      component: () => import("@/views/5-Curtains.vue")
    },
    {
      path: "/lights",
      name: "lights",
      component: () => import("@/views/6-Lights.vue")
    }
  ]
});
