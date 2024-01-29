import {defineStore} from "pinia";
import htmlElementClass from "@/utils/utils.ts";

export const useSettingStore = defineStore('setting',{
  state:()=>({
    collapsed: false, //是否折叠
    globalSetting:{ //主题设置
      layoutName: "ml", //主题名称
      themeColor: "#519a73", //主题颜色
      themeModel: "light", //主题模式
      language: "zhCN", //语言
      gray: false, //灰色模式
      weak: false, //色弱模式
      isFullScreen: false, //全屏模式
      animation: "animate__slideInLeft", //类型 参考animation.css
      disableAnimation: false, //动画
      keepalive: false //是否开启缓存
  },
  }),
  actions:{
    /*更改collapse*/
    switchCollapse(isCollapsed: boolean){
      this.collapsed = isCollapsed
    },
    /*切换主题模式*/
    switchToDark(){
      this.globalSetting.themeModel = "dark"
    },
    switchToLight(){
      this.globalSetting.themeModel = "light"
    },
    /*切换灰色模式*/
    switchGray(isGray: boolean){
      htmlElementClass(isGray,"setting-gray")
      this.globalSetting.gray = isGray
    },
    /*切换色弱模式*/
    switchWeak(isWeak: boolean){
      htmlElementClass(isWeak,"setting-weak")
      this.globalSetting.gray = isWeak
    }
  }
})
