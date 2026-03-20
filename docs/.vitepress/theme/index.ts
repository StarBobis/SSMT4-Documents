// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import 'katex/dist/katex.min.css'
import EffectSwitch from './components/EffectSwitch.vue'
import GoogleTranslate from './components/GoogleTranslate.vue'
import { h } from 'vue'

import DarkWatcher from '../components/DarkWatcher.vue'

export default {
    extends: DefaultTheme,

    Layout() {
        return h(DefaultTheme.Layout, null, {
            'nav-bar-content-after': () => [h(EffectSwitch), h(GoogleTranslate)]
        })
    },

    enhanceApp(ctx) {
        // tabs 插件
        enhanceAppWithTabs(ctx.app)

        // 自定义组件
        ctx.app.component('DarkWatcher', DarkWatcher)

    },
} satisfies Theme