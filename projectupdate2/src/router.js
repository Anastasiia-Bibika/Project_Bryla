import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/Home";
import MyProducts from "@/pages/Products";
import About from "@/pages/About";
import SignIn from "@/pages/SignIn/indexsign.vue";
import SignUp from "@/pages/SignUp/indexup.vue";
import AddArtCard from "./components/components/AddArtCard";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  { path: "/products-list/:id?", component: MyProducts, name: "art" },
  { path: "/about", component: About, name: "about" },
  { path: "/add/:id?", component: AddArtCard, name: "add" },
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
