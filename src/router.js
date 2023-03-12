import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import "./views/List.vue";
import { getAuth } from "firebase/auth";
import CreateContact from "./views/CreateContact.vue";
import OffersList from "./views/OffersList.vue";
import OffersDetails from "./views/OffersDetails.vue";


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
    {
      path: "/offersList",
      name: "offersList",
      component: OffersList,
    },
    {
      path: "/offersDetails/:id",
      name: "offersDetails",
      component: OffersDetails,
    },
    {
      path: "/userProfile",
      name: "userProfile",
      meta: { isAuthenticated: true },
      component: UserProfile,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      // meta: { isAdmin: true },
      children: [
        {
          path: "list",
          name: "list",
          component: List,
        },
        {
          path: "contactsList",
          name: "contactsList",
          component: ContactsList,
        },
        {
          path: "viewContact/:id",
          name: "ViewContact",
          component: () =>
            import(
              /*webpackChunkName: "viewContact" */ "./views/ViewContact.vue"
            ),
        },
        {
          path: "editOffer/:id",
          name: "EditOffer",
          component: () =>
            import(/*webpackChunkName: "editOffer" */ "./views/EditOffer.vue"),
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(
    (record) => record.meta.isAdmin || record.meta.isAuthenticated
  );
  const user = await getAuth().currentUser;

  if (requiresAuth && !user) {
   
      next("/admin/list");
   

    next("/");
  } else {
    next();
  }
});

export default router;

