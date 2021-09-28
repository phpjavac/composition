import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
const path = require('path')
const children = [
  {
    text: "useRequest",
    link: "/composition/useRequest",
  },
  {
    text: "useSize",
    link: "/composition/useSize",
  },
  {
    text: "useDownloader",
    link: "/composition/useDownloader/"
  },
  {
    text: "useClickAway",
    link: "/composition/useClickAway/"
  },
  {
    text: "useFullscreen",
    link: "/composition/useFullscreen",
  },
  {
    text: "useHover",
    link: "/composition/useHover",
  },
  {
    text: "useDebounceFn",
    link: "/composition/useDebounceFn",
  },
  {
    text: "useThrottleFn",
    link: "/composition/useThrottleFn",
  },
  {
    text: "useInViewport",
    link: "/composition/useInViewport",
  },
  {
    text: "useClipboard",
    link: "/composition/useClipboard",
  },
  {
    text: "usePermission",
    link: "/composition/usePermission",
  },
  {
    text: "useKeyPress",
    link: "/composition/useKeyPress",
  },
  {
    text: "useEffect",
    link: "/composition/useEffect",
  },
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
    ],
    sidebar: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "compositionApi",
        children: children,
      },
    ],

  },
});
