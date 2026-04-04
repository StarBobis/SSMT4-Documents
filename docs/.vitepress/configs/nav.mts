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
      },
      {
        text: 'Tools',
        link: '/newbie/tools/PaintDotNet/PaintDotNet'
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
      {
        text: '少女前线2:追放',
        link: '/games/gf2/ModelReductionAndOffset/ModelReductionAndOffset'
      },
      {
        text: '崩坏3',
        link: '/games/himi/OutlineFix/OutlineFix'
      },
      {
        text: '第五人格',
        link: '/games/identityv/NeoX3Guide/NeoX3Guide'
      },
      {
        text: 'Liar\'s Bar',
        link: '/games/liarsbar/PistolModelIssue/PistolModelIssue'
      },
      {
        text: '鸣潮',
        link: '/games/wwmi/HowToFixTextureBug/HowToFixTextureBug'
      },
      {
        text: '绝区零',
        link: '/games/zzmi/T001ExtractModel/T001ExtractModel'
      }
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
