import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import login from '@/view/login/index.vue';
import notFound from '@/view/error/404.vue';
import home from '@/view/home/index.vue';
import completions from '@/view/completions/index.vue';
import images from '@/view/images/index.vue';
import shop from '@/view/shop/index.vue';
import NProgress from "nprogress";

//本地静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "basic",
    component: () => import("../layout/basic.vue"),
    children: [
      {
        path: "/", name: "home", meta: {title: "主页"},
        component: home,
      },
      {
        path: "/completions", name: "completions", meta: {title: "对话"},
        component: completions,
      },
      {
        path: "/images", name: "images", meta: {title: "绘画"},
        component: images,
      },
      {
        path: "/shop", name: "shop", meta: {title: "商城"},
        component: shop,
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

//配置进度条
NProgress.configure({
  easing: "ease", //动画模式
  speed: 1000, //递增进度条速度
  showSpinner: false, //是否显示加载ico
  trickleSpeed: 200, //自动递增间隔
  minimum: 0.3 //初始化时的最小化百分比
})

//创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

router.beforeEach(()=>{
  NProgress.start()
});


router.afterEach(()=>{
  NProgress.done()
})





export default router;
