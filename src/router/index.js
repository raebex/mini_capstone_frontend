import Vue from "vue";
import VueRouter from "vue-router";
import ProductsIndex from "../views/ProductsIndex.vue";
import ProductsShow from "../views/ProductsShow.vue";
import ProductsNew from "../views/ProductsNew.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "products-index",
    component: ProductsIndex,
  },
  {
    path: "/products/new",
    name: "products-new",
    component: ProductsNew,
  },
  {
    path: "/products/:id",
    name: "products-show",
    component: ProductsShow,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
