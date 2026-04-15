import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  {
    text: 'Mod逆向',
    activeMatch: '/newbie/reverse',
    link: '/newbie/reverse/Introduction/Introduction'
  }
]
