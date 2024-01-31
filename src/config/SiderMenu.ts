import {MenuOption } from "naive-ui";
import {h} from 'vue'
import {renderIcon, renderMyIcon} from "@/config/Icon.ts";
import {BrandGithub} from "@vicons/tabler";
import {RouterLink} from "vue-router";

export const menuOptions: MenuOption[] = [
  {
    label: ()=>h(
      RouterLink,
      {
        to:{
          name:'home'
        }
      },
      {default:()=>'主页'}
    ),
    key: 'cyber-home',
    icon: renderMyIcon('src/assets/icon/home.svg')
  },
  {
    label: ()=>h(
      RouterLink,
      {
        to:{
          name:'completions'
        }
      },
      {default:()=>'对话'}
    ),
    key: 'cyber-completions',
    icon: renderMyIcon('src/assets/icon/completions.svg'),
  },
  {
    label: ()=>h(
      RouterLink,
      {
        to:{
          name:'images'
        }
      },
      {default:()=>'绘画'}
    ),
    key: 'cyber-images',
    icon: renderMyIcon('src/assets/icon/image.svg')
  },
  {
    label: ()=>h(
      RouterLink,
      {
        to:{
          name:'gallery'
        }
      },
      {default:()=>'画廊'}
    ),
    key: 'cyber-gallery',
    icon: renderMyIcon('src/assets/icon/gallery.svg')
  },
  {
    label: ()=>h(
      RouterLink,
      {
        to:{
          name:'shop'
        }
      },
      {default:()=>'商城'}
    ),
    key: 'cyber-shop',
    icon: renderMyIcon('src/assets/icon/shop.svg'),
  },
  {
    label: ()=>h(
      RouterLink,
      {
        to:{
          name:'lottery'
        }
      },
      {default:()=>'抽奖'}
    ),
    key: 'cyber-lottery',
    icon: renderMyIcon('src/assets/icon/lottery3.svg'),
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://github.com/fuzhizhuang/cyberai-web',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '项目地址'
      ),
    key: 'cyber-project-web-address',
    icon: renderIcon(BrandGithub),
  },
]

