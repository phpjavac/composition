import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-CN",
  base:'/composition/',
  title: "zComposition",
  description: "zComposition文档",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    sidebar: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "compositionApi",
        children: [
          {
            text: "useRequest",
            link: "/composition/useRequest",
          },
          {
            text: "useSize",
            link: "/composition/useSize",
          },
          {
            text: "useFullscreen",
            link: "/composition/useFullscreen",
          },
        ],
      },
    ],
  },
});
