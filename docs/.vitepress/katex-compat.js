// .vitepress/katex-compat.js
import katex from 'katex'

const katexPlugin = (md, options = {}) => {
    // 行内公式渲染器
    const inlineRenderer = (tokens, idx) => {
        try {
            return katex.renderToString(tokens[idx].content, {
                ...options,
                displayMode: false
            })
        } catch (error) {
            return `<span style="color: red">KaTeX错误: ${error.message}</span>`
        }
    }

    // 块级公式渲染器
    const blockRenderer = (tokens, idx) => {
        try {
            return katex.renderToString(tokens[idx].content, {
                ...options,
                displayMode: true
            })
        } catch (error) {
            return `<p style="color: red">KaTeX错误: ${error.message}</p>`
        }
    }

    // 检测行内公式 $...$
    md.inline.ruler.after('escape', 'math_inline', (state, silent) => {
        const start = state.pos
        
        // 必须是 $ 开头
        if (state.src.charCodeAt(start) !== 0x24) return false
        
        // 检查是不是 $$ 开头（块级公式）
        if (state.src.charCodeAt(start + 1) === 0x24) return false
        
        let pos = start + 1
        let found = false
        
        // 寻找匹配的 $
        while (pos < state.src.length) {
            // 找到 $
            if (state.src.charCodeAt(pos) === 0x24) {
                // 确保不是 $$ 的情况
                if (pos + 1 < state.src.length && state.src.charCodeAt(pos + 1) === 0x24) {
                    pos += 2
                    continue
                }
                found = true
                break
            }
            pos++
        }
        
        if (!found) return false
        
        if (!silent) {
            const token = state.push('math_inline', 'math', 0)
            token.content = state.src.slice(start + 1, pos)
            token.block = false
        }
        
        state.pos = pos + 1
        return true
    })

    // 检测块级公式 $$...$$
    md.block.ruler.before('fence', 'math_block', (state, startLine, endLine, silent) => {
        const pos = state.bMarks[startLine] + state.tShift[startLine]
        const max = state.eMarks[startLine]
        
        // 必须至少有两个字符且是 $$ 开头
        if (pos + 2 > max || state.src.slice(pos, pos + 2) !== '$$') {
            return false
        }
        
        // 寻找结束的 $$
        let nextLine = startLine
        let found = false
        let endPos = 0
        
        while (nextLine < endLine) {
            const lineStart = state.bMarks[nextLine] + state.tShift[nextLine]
            const lineEnd = state.eMarks[nextLine]
            const lineContent = state.src.slice(lineStart, lineEnd)
            
            // 查找 $$（不能是行首，除非是开始行）
            if (nextLine > startLine) {
                const endIndex = lineContent.indexOf('$$')
                if (endIndex !== -1) {
                    found = true
                    endPos = lineStart + endIndex
                    break
                }
            }
            nextLine++
        }
        
        if (!found) return false
        
        if (!silent) {
            const token = state.push('math_block', 'math', 0)
            token.content = state.src.slice(pos + 2, endPos).trim()
            token.block = true
            token.map = [startLine, nextLine]
            token.markup = '$$'
        }
        
        state.line = nextLine + 1
        return true
    })

    // 注册渲染器
    md.renderer.rules.math_inline = inlineRenderer
    md.renderer.rules.math_block = blockRenderer
}

export default katexPlugin