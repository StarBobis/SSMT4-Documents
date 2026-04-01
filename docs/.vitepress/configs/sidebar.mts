import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/newbie/': [
    {
      text: 'SSMT',
      items: [
        { text: 'SSMT介绍', link: '/newbie/ssmt/Index/Index' },
        { text: '下载与安装', link: '/newbie/ssmt/DownloadAndInstall/DownloadAndInstall' },
        { text: '如何创建新游戏配置', link: '/newbie/ssmt/HowToCreateNewConfig/HowToCreateNewConfig' },
        { text: '开始游戏前的配置', link: '/newbie/ssmt/ConfigBeforeStartGame/ConfigBeforeStartGame' },
        //CantUse3DmigotoInjector
        { text: '无法使用3Dmigoto注入器?', link: '/newbie/ssmt/CantUse3DmigotoInjector/CantUse3DmigotoInjector' },
        //无法注入3Dmigoto
        { text: '无法注入3Dmigoto?', link: '/newbie/ssmt/CantInject3Dmigoto/CantInject3Dmigoto' },
      ]
    },
    {
      text: 'Mod自动逆向',
      items: [
        { text: '自动逆向功能介绍', link: '/newbie/reverse/Introduction/Introduction' },
        { text: '教程: 如何激活自动逆向', link: '/newbie/reverse/HowToActivateAutoReverse/HowToActivateAutoReverse' },
        { text: '教程: 如何正确选择一键逆向选项', link: '/newbie/reverse/T003HowToUseAutoReverse/HowToChooseAutoReverseSelection' },
        { text: '教程: 一键逆向后导入 Blender', link: '/newbie/reverse/T004ImportIntoBlender/T004ImportIntoBlender' },
        { text: '教程: 筛选正确的数据类型', link: '/newbie/reverse/T005UseCorrectDataType/T005UseCorrectDataType' },
        { text: '教程: 手动逆向功能', link: '/newbie/reverse/ManualReverse/ManualReverse' },
        
        { text: '案例: 原神脸部Mod', link: '/newbie/reverse/GenshinFaceReverse/GenshinFaceReverse' },
        { text: '案例: 跨IB渲染 Mod', link: '/newbie/reverse/CrossIBReverse/CrossIBReverse' },
        { text: '案例: 使用TexFx插件的Mod', link: '/newbie/reverse/Case_DrawWithTexFx/Case_DrawWithTexFx' },
        { text: '案例: Buffer 膨胀混淆技术', link: '/newbie/reverse/BufferInflationObfuscation/BufferInflationObfuscation' },
        { text: '案例: ResourceVBList.size() 为 4 的 Mod', link: '/newbie/reverse/ResourceVBListSize4/ResourceVBListSize4' },
        { text: '案例: NPC Mod', link: '/newbie/reverse/NPCModReverseIssue/NPCModReverseIssue' },
        { text: '案例: 鸣潮 Mod', link: '/newbie/reverse/WuWaModReverseProblem/WuWaModReverseProblem' },

        { text: '骨骼: 模型绑定骨骼', link: '/newbie/reverse/BindModelToBone/BindModelToBone' },
        { text: '骨骼: 米游游戏原骨骼绑骨', link: '/newbie/reverse/HoyoGamesBone/HoyoGamesBone' },
        { text: '骨骼: 鸣潮原骨骼绑骨', link: '/newbie/reverse/WutheringWavesBone/WutheringWavesBone' },

        { text: '萌新常见问题', link: '/newbie/reverse/FAQ/FAQ' },
        { text: '其它常见问题', link: '/newbie/reverse/T006FAQ/T006FAQ' },

      ]
    }
  ],
  '/developer/': [
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
        { text: '架构', link: '/developer/tauri/架构/架构.md'},
        { text: 'Vue', items: [
          {text: '异步组件', link: '/developer/tauri/Vue/异步组件.md'}
        ]}
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
            {text: '编译型和解释型语言', link: '/developer/rust/编程语言常识/编译型和解释型语言.md'},
            {text: '栈内存与堆内存', link: '/developer/rust/编程语言常识/栈内存与堆内存.md' }
          ]
        },
        {
          text: '基本语法与数据类型', link: '/developer/rust/基本语法与基本数据类型/基本语法与基本数据类型.md'
        },
        {
          text: '函数与控制流', link: '/developer/rust/函数与控制流/函数与控制流.md'
        }
      ]
    }
  ],
  '/games/': [
    {
      text: '原神',
      items: [
        { text: '10612-4001修复方法', link: '/games/gimi/HowToSolveErrorCode/HowToSolveErrorCode' }
      ]
    },
    {
      text: '崩坏:星穹铁道',
      items: [
        { text: '无法导出完整角色体型', link: '/games/srmi/CantDumpFullBody/CantDumpFullBody' }
      ]
    },
    //D3dxIniChanges
    {
      text: '明日方舟:终末地',
      items: [
        { text: 'd3dx.ini特殊变更', link: '/games/efmi/D3dxIniChanges/D3dxIniChanges' },
        { text: '贴图通道作用', link: '/games/efmi/TextureChannels/TextureChannels' }
      ]
    },
    {
      text: '燕云十六声',
      items: [
        { text: 'YYSLS基础配置', link: '/games/yysls/BasicConfig/BasicConfig' }
      ]
    },

  ],
  '/': [
    {
      text: '前方的区域，以后再来探索吧'
    }
  ],
  '/blender/':[
    {
      text: 'Blender',
      items: [
        { text: '如何实时查看顶点数量', link: '/blender/AlwaysSeeVertexNumber/AlwaysSeeVertexNumber' },
        { text: '反细分来减少边对接顶点数', link: '/blender/JieTouBaWang/JieTouBaWang' },
        { text: '撤销次数一定要拉高', link: '/blender/MoreCtrlZSteps/MoreCtrlZSteps' },
        { text: '去掉启动时的卡片', link: '/blender/RemoveStartTips/RemoveStartTips' },
        { text: '恢复默认布局', link: '/blender/RestoreDefaultLayout/RestoreDefaultLayout' },
        { text: '如何选择一圈的边', link: '/blender/SelectEdge/SelectEdge' },
        { text: '按C刷选面或顶点', link: '/blender/SelectFaceOrVertex/SelectFaceOrVertex' },
        { text: '传递UV映射', link: '/blender/TransferUV/TransferUV' },
        { text: '决定系统使用哪个版本打开.blend文件', link: '/blender/WhichBlenderToOpen/WhichBlenderToOpen' },
      ]
    }
  ],
  '/migoto/':[
    {
      text: '3Dmigoto',
      items: [
        { text: '默认顶点数量突破问题', link: '/migoto/Extra_VertexNumberRaise/Extra_VertexNumberRaise' },
      ]
    }
  ]
}
