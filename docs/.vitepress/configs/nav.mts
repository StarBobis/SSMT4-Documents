import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  {
    text: '新手教程',
    activeMatch: '/newbie/',
    items: [
      {
        text: 'SSMT',
        link: '/newbie/ssmt/Index/Index'
      },
      {
        text: 'Reverse',
        link: '/newbie/reverse/Introduction/Introduction'
      },
      {
        text: '3Dmigoto',
        link: '/migoto/Extra_VertexNumberRaise/Extra_VertexNumberRaise'
      },
      {
        text: 'Blender',
        link: '/blender/AlwaysSeeVertexNumber/AlwaysSeeVertexNumber'
      }
    ]
  },
  {
    text: '游戏配置',
    activeMatch: '/games/',
    items: [
      {
        text: '原神',
        link: '/games/gimi/HowToSolveErrorCode/HowToSolveErrorCode'
      },
      {
        text: '崩坏:星穹铁道',
        link: '/games/srmi/CantDumpFullBody/CantDumpFullBody'
      },
      {
        text: '明日方舟:终末地',
        link: '/games/efmi/D3dxIniChanges/D3dxIniChanges'
      },
      {
        text: '燕云十六声',
        link: '/games/yysls/BasicConfig/BasicConfig'
      },
    ]
  },
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
