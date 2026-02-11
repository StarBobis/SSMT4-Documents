import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/developer/': [
    {
      text: 'SSMT开发日志',
      items: [
        { text: '为什么选择Rust + Tauri', link: '/developer/ssmt/WhyRustAndTauri/WhyRustAndTauri' },
      ]
    },
    {
      text: 'VitePress2.0文档',
      items: [
        { text: '项目初始化', link: '/developer/vitepress/project-init' }
      ]
    },
    {
      text: 'Tauri学习笔记',
      items: [
        { text: '如何设置图标', link: '/developer/tauri/HowToSetIcon/HowToSetIcon' },
        { text: '项目初始化', link: '/developer/tauri/ProjectInit/ProjectInit' },
        { text: '第一次构建超时问题', link: '/developer/tauri/BuildTimeOutError/BuildTimeOutError' },
        { text: '构建并发布', link: '/developer/tauri/BuildAndPublish/BuildAndPublish' },
      ]
    },
    {
      text: 'Rust 学习笔记',
      items: [
        { text: '简介', link: '/developer/rust/简介.md'},
        { text: '开始', items: [
          { text: '安装 Rust', link: '/developer/rust/开始/安装 Rust.md' },
          { text: '哈喽 Rust', link: '/developer/rust/开始/哈喽 Rust.md' },
          { text: '哈喽 Cargo',link: '/developer/rust/开始/哈喽 Cargo.md'}
        ] },
        {
          text: '基础语法——猜数游戏', link: '/developer/rust/基础语法——猜数游戏/引入.md', items: [
            {text: '赋值', link: '/developer/rust/基础语法——猜数游戏/赋值.md' },
            {text: '第三方包依赖', link: '/developer/rust/基础语法——猜数游戏/第三方包依赖.md' },
            {text: '控制语句和模式匹配', link: '/developer/rust/基础语法——猜数游戏/控制语句和模式匹配.md' },
            {text: '循环与表达式', link: '/developer/rust/基础语法——猜数游戏/循环与表达式.md' },
          ]
        },
        {
          text: '编程语言常识', items: [
            {text: '强类型与弱类型, 静态类型与动态类型', link: '/developer/rust/编程语言常识/强类型与弱类型, 静态类型与动态类型.md' },
          ]
        }
      ]
    }
  ],
  '/': [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    }
  ]
}
