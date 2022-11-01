import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/Home";
import Products from "@/pages/Products";
import About from "@/pages/About";
import SignIn from "@/pages/SignIn/indexsign.vue";
import SignUp from "@/pages/SignUp/indexup.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  { path: "/products-list/:id?", component: Products, name: "products" },
  { path: "/about", component: About, name: "about" },
  {
    path: "/signIn",
    component: SignIn,
    name: "signIn",
  },
  {
    path: "/signUp",
    component: SignUp,
    name: "signUp",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
