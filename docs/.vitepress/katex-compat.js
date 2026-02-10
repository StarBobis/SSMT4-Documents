// .vitepress/katex-compat.js
import katex from 'katex'

// markdown-it-katex 的核心逻辑
const katexPlugin = (md, options = {}) => {
    const inlineRenderer = (tokens, idx) => {
        try {
            return katex.renderToString(tokens[idx].content, {
                ...options,
                displayMode: false
            })
        } catch (error) {
            return `<span style="color: red">${error.message}</span>`
        }
    }

    const blockRenderer = (tokens, idx) => {
        try {
            return `<p>${katex.renderToString(tokens[idx].content, {
                ...options,
                displayMode: true
            })}</p>`
        } catch (error) {
            return `<p style="color: red">${error.message}</p>`
        }
    }

    md.inline.ruler.after('escape', 'math_inline', (state, silent) => {
        const start = state.pos
        if (state.src.charCodeAt(start) !== 0x24 /* $ */) return false

        const nextChar = state.src.charCodeAt(start + 1)

        // Inline math: $
        const end = state.src.indexOf('$', start + 1)
        if (end === -1) return false

        if (!silent) {
            const token = state.push('math_inline', 'math', 0)
            token.content = state.src.slice(start + 1, end)
            token.block = false
        }
        state.pos = end + 1
        return true

    })

    md.renderer.rules.math_inline = inlineRenderer
    md.renderer.rules.math_block = blockRenderer
}

export default katexPlugin