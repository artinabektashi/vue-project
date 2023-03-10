import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import "./views/List.vue";
import { getAuth } from "firebase/auth";
import CreateContact from "./views/CreateContact.vue";


Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/createContact",
      name: "createContact",
      component: CreateContact,
    },
    
  ],
});



export default router;

