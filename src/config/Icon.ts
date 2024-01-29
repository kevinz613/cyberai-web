import {Component, h} from "vue";
import {NIcon} from "naive-ui";

/*渲染带颜色的icon*/
const renderColorIcon = (icon: Component,color:string) => {
  return () => h(NIcon, {color}, { default: () => h(icon,color) })
}

/*渲染不带颜色的icon*/
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export {
  renderColorIcon,
  renderIcon
}

