// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { nav } from './configs/nav.mts'
import { sidebar } from './configs/sidebar.mts'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import katexPlugin from './katex-compat.js'
// import strict from 'node:assert/strict'

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
      md.use(katexPlugin, {
        throwOnError: false,
        strict: false
      })
    },
    lineNumbers: true,
    math: true
  },
  vite: {
    optimizeDeps: {
      include: ['katex'],
      exclude: ['markdown-it-katex']
    },
    ssr: {
      noExternal: ['katex']
    }
  }
})