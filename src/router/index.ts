import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import login from '@/view/login/index.vue';
import notFound from '@/view/error/404.vue';
import home from '@/view/home/index.vue';
import completions from '@/view/completions/index.vue';
import images from '@/view/images/index.vue';
import shop from '@/view/shop/index.vue';
import lottery from '@/view/lottery/index.vue';
import gallery from '@/view/gallery/index.vue';
import NProgress from 'nprogress'; // 导入 nprogress模块
import 'nprogress/nprogress.css';
import {getToken} from "@/utils/token.ts"; // 导入样式

//本地静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "basic",
    component: () => import("../layout/basic.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/", name: "home", meta: {title: "主页", requiresAuth: true},
        component: home,
      },
      {
        path: "/completions", name: "completions", meta: {title: "对话", requiresAuth: true},
        component: completions,
      },
      {
        path: "/images", name: "images", meta: {title: "绘画", requiresAuth: true},
        component: images,
      },
      {
        path: "/gallery", name: "gallery", meta: {title: "画廊", requiresAuth: true},
        component: gallery,
      },
      {
        path: "/shop", name: "shop", meta: {title: "商城", requiresAuth: true},
        component: shop,
      },
      {
        path: "/lottery", name: "lottery", meta: {title: "抽奖", requiresAuth: true},
        component: lottery,
      },
    ],
  },
  {
    path: "/login", name: "login", meta: {title: "登录"},
    component: login,
  },
  {
    path: "/:pathMatch(.*)*", meta: {title: "出错了"},
    component: notFound,
  },
]


//创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});


//配置进度条
NProgress.configure({
  easing: "ease", //动画模式
  speed: 1000, //递增进度条速度
  showSpinner: false, //是否显示加载ico
  trickleSpeed: 200, //自动递增间隔
  minimum: 0.3 //初始化时的最小化百分比
})


/**
 * 全局前置守卫 https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
 * next();放行 -- 其它的路由跳转在没放行之前都会走 router.beforeEach()
 */
router.beforeEach(async (to, from, next) => {
  NProgress.start(); // 开启进度条
  const token = getToken();
  if (token !=null) {
    // 已经登录后的操作
    next();
  } else {
    // 未登录
    if (to.meta.requiresAuth){
      //await router.push('/login');
      next();
    }else {
      next();
    }
  }
});

// 全局后置钩子
router.afterEach(() => {
  NProgress.done(); // 完成进度条
});



export default router;
