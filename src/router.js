import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Header from "./views/Header.vue";
import Home from "./views/Home.vue";
import Customers from "./views/Customers.vue";
import Pays from "./views/Pays.vue";
import Schdule from "./views/Schdule.vue";
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
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/customers",
      name: "customers",
      component: Customers
    },
    {
      path: "/pays",
      name: "pays",
      component: Pays
    },
    {
      path: "/schdule",
      name: "schdule",
      component: Schdule
    }
  ]
});
