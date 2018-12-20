import Vue from "vue";
import Router from "vue-router";
import EventList from "@/views/EventList.vue";
import EventShow from "@/views/EventShow.vue";
import EventCreate from "@/views/EventCreate.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList,
      alias: "event-list"
    },
    {
      path: "/event-show",
      name: "event-show",
      component: EventShow
    },
    {
      path: "/event-create",
      name: "event-create",
      component: EventCreate
    }
  ]
});
