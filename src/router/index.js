import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home.vue');
const Category = () => import('../views/category/Category.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Proflie = () => import('../views/proflie/Proflie.vue');
const Detail = () => import('../views/detail/Detail.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: '/home'
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/proflie",
    component: Proflie
  },
  {
    // 动态绑定一个id
    path: "/detail/:iid",
    component: Detail
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err);
};
export default router;
