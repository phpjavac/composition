/*
 * @Author: your name
 * @Date: 2021-09-23 10:09:30
 * @LastEditTime: 2021-09-23 10:45:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zcomposition\docs\.vuepress\config.ts
 */
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
const path = require('path')
const Async = [
  {
    text: "useRequest",
    link: "/composition/Async/useRequest/",
  },
]
const Element = [
  {
    text: "useSize",
    link: "/composition/Element/useSize/",
  },
  {
    text: "useInViewport",
    link: "/composition/Element/useInViewport/",
  },
  {
    text: 'useClickAway',
    link: '/composition/Element/useClickAway/'
  },
  {
    text: 'useFullscreen',
    link: '/composition/Element/useFullscreen/'
  },
  {
    text: 'useHover',
    link: '/composition/Element/useHover/'
  }
]
const Effect = [
  {
    text: 'useClipboard',
    link: "/composition/Effect/useClipboard/"
  },
  {
    text: 'useDebounceFn',
    link: '/composition/Effect/useDebounceFn/'
  },
  {
    text: 'useDownloader',
    link: '/composition/Effect/useDownloader/'
  },
  {
    text: 'useEffect',
    link: '/composition/Effect/useEffect/'
  },
  {
    text: 'useEventBus',
    link: '/composition/Effect/useEventBus'
  },
  {
    text: 'useKeyPress',
    link: '/composition/Effect/useKeyPress/'
  },
  {
    text: 'usePermission',
    link: '/composition/Effect/usePermission/'
  },
  {
    text: 'useThrottleFn',
    link: '/composition/Effect/useThrottleFn/'
  },
  {
    text: "useTitle",
    link: "/composition/Effect/useTitle/",
  },
]
const children = [
  {
    text: 'Async',
    children: Async
  },
  {
    text: 'Element',
    children: Element
  },
  {
    text: 'Effect',
    children: Effect
  }
];
export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-CN",
  base: "/composition/",
  title: "VueZApi",
  description: "Vue3的compositionApi's",
  alias: {
    '@lib': path.resolve(__dirname, '../../lib/'),
  },
  themeConfig: {
    logo: "/images/logo.jpg",
    navbar: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "compositionApi",
        children: children,
      },
      {
        text: "GitHub",
        link: 'https://github.com/phpjavac/composition'
      }
    ],
    sidebar: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "compositionApi",
        children: children,
      }
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '请输入内容',
          },
          '/zh/': {
            placeholder: '请输入内容',
          },
        },
        maxSuggestions: 10, // 指定搜索结果的最大条数-5
      },
    ],
  ],
});
