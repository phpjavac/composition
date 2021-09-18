import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

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
    text: "useKeyPress",
    link: "/composition/useKeyPress",
  },
];
export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-CN",
  base: "/composition/",
  title: "VueZApi",
  description: "Vue3的compositionApi's",
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
