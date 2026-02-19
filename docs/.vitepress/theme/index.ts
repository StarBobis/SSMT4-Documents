// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import 'katex/dist/katex.min.css'
import './custom.css'

import DarkWatcher from '../components/DarkWatcher.vue'

export default {
    extends: DefaultTheme,

    enhanceApp(ctx) {
        // tabs 插件
        enhanceAppWithTabs(ctx.app)

        // 自定义组件
        ctx.app.component('DarkWatcher', DarkWatcher)

    },
} satisfies Theme