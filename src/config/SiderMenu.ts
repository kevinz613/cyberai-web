import {MenuOption } from "naive-ui";
import {h} from 'vue'
import { ChatbubblesOutline, HomeOutline, ImageOutline} from "@vicons/ionicons5";
import {renderIcon} from "@/config/Icon.ts";
import {BrandGithub} from "@vicons/tabler";
import {BuildingShop16Regular} from "@vicons/fluent";
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
    icon: renderIcon(HomeOutline)
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
    icon: renderIcon(ChatbubblesOutline),
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
    icon: renderIcon(ImageOutline)
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
    icon: renderIcon(BuildingShop16Regular),
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

