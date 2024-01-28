import { createApp } from 'vue'
import './style.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
// app
import App from './App.vue'
// 路由
import router from "./router";

const app = createApp(App);
app.use(router)
app.mount('#app')
