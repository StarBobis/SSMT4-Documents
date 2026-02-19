import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  { text: 'Examples', link: '/markdown-examples' },
  { 
    text: '开发者文档', 
    activeMatch: '/developer/',
    items: [
      { 
        text: 'VitePress2.0文档', 
        link: '/developer/vitepress/project-init' 
      },
      { 
        text: 'Tauri学习笔记', 
        link: '/developer/tauri/HowToSetIcon/HowToSetIcon' 
      },
      {
        text: 'Rust 学习笔记', 
        link: '/developer/rust/简介.md'
      }
      
    ]
  }
]
