import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OffersList from "./views/OffersList.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/create",
    name: "create",
    component: () =>
      import("../views/CreateBookView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/user/RegisterView.vue"),
  },
  {
    path: "/offersList",
    name: "offersList",
    component: OffersList,
  },
  {
    path: '/login',
    name: 'login',
    component:() => import(/*webpackChunkName: "login"*/ '../views/user/LoginView.vue')
  },
  {
    path: "editOffer/:id",
    name: "EditOffer",
    component: () =>
      import(/*webpackChunkName: "editOffer" */ "./views/EditOffer.vue"),
  },
  {
    path: '/category',
    name: 'category',
    children: [
      {
        name: 'category-list',
        path: '',
        component: () => 
          import(
            /* webpackChunkName: "category-create" */ '../views/category/CategoryList.vue'
          )
      },
      {
        name: 'category-create',
        path: 'create',
        component: () => 
          import(
            /* webpackChunkName: "category-create" */ '../views/category/CategoryCreateView.vue'
          )
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component:
    () => import(
      /* webpackChunkName: "register" */ '../views/FourOFourView.vue'
    )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const guestRouteNames = ['login', 'register'];

const routeNames = routes.flatMap(
  (route) => route.children
    ? route.children.flatMap((route) => route.name).concat(route.name)
    : route.name
);

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if ((guestRouteNames.includes(to.name)) && user) {
      next({ name: 'home' });
    }
    else if (
      !routeNames.includes(to.name)
    ) {
      next({ name: '404' })
    } else {
      next();
    }
  })
});


export default router;
