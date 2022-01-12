import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err);
// };

router.beforeEach((to, from, next) => {
  next();
  // let hasToken = getUserInfo("USER_TOKEN");
  // let accessToken = util.getCookie("hw-access-token") || util.getCookie("access-token");
  // if (!accessToken) {
  //   if (to.path !== "/login") {
  //     if (hasToken) {
  //       Message.error("登陆超时，请重新登陆");
  //       removeUserInfo("USER_TOKEN");
  //     }
  //     return next({ path: "/login" });
  //   } else {
  //     next();
  //   }
  // } else {
  //   if (to.path === "/login") {
  //     return next({
  //       path: "/",
  //     });
  //   }
  //   next();
  // }
});

export default router;
