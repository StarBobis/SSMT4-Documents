// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import 'katex/dist/katex.min.css'

import DarkWatcher from '../components/DarkWatcher.vue'

// export default {
//   ...DefaultTheme,
//   enhanceApp({ app }) {
//     app.component('DarkWatcher', DarkWatcher)
//   }
// }


export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
        app.component('DarkWatcher', DarkWatcher)
    },
} satisfies Theme

