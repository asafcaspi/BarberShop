import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Header from "./views/Header.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/header",
      name: "header",
      component: Header
    }
  ]
});
