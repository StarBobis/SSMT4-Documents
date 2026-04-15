import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

  '/newbie/reverse/': [
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

        //WhyNoFaceModel
        { text: 'Mod逆向后缺少脸部模型?', link: '/newbie/reverse/WhyNoFaceModel/WhyNoFaceModel' },


      ]
    }
  ],


  '/': [
    {
      text: '前方的区域，以后再来探索吧'
    }
  ],

 
}
