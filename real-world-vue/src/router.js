import Vue from "vue";
import Router from "vue-router";
import EventList from "./views/EventList.vue";
import EventShow from "./views/EventList.vue";
import EventCreate from "./views/EventList.vue";
import User from "./views/User.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/event",
      name: "event-show",
      component: EventShow
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate
    },
    {
      path: "/user/:username",
      name: "user",
      component: User,
      props: true
    }
  ]
});
