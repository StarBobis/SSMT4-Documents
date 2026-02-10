// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { nav } from './configs/nav.mts'
import { sidebar } from './configs/sidebar.mts'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import katexPlugin from './katex-compat.js'

export default defineConfig({
  base: "/SSMT4-Documents/",
  title: "SSMT4-Documents",
  description: "Documents for SSMT4",

  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    }
  },

  markdown: {
    config: (md) => {
      md.use(tabsMarkdownPlugin)
      md.use(katexPlugin)
    },
    lineNumbers: true,
    math: false  // 关闭内置的数学公式，使用我们的 katex
  },

  // 添加 Bun 兼容性配置
  vite: {
    optimizeDeps: {
      include: ['katex'],
      exclude: ['markdown-it-katex']  // 排除原始模块
    },
    ssr: {
      noExternal: ['katex']  // 确保 katex 在 SSR 中正常工作
    }
  }
})