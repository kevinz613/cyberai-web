import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import login from '../view/login/index.vue';
import e404 from '../view/error/404.vue';
//本地静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "basic",
    component: () => import("../layout/basic.vue"),
    children: [
      {
        path: "/test", name: "test", meta: {title: "登录"},
        component: login,
      },
    ],
  },
  {
    path: "/login", name: "login", meta: {title: "登录"},
    component: login,
  },
  {
    path: "/:pathMatch(.*)*", meta: {title: "出错了"},
    component: e404,
  },
]

//创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
