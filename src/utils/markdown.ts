// ── Syntax highlighter ────────────────────────────────────────────────────────

const KEYWORDS: Record<string, boolean> = {
  'const': true, 'let': true, 'var': true, 'await': true, 'async': true,
  'function': true, 'return': true, 'if': true, 'else': true, 'import': true,
  'from': true, 'new': true, 'try': true, 'catch': true, 'throw': true,
  'class': true, 'extends': true, 'export': true, 'default': true,
  'typeof': true, 'instanceof': true, 'of': true, 'in': true, 'for': true,
  'while': true, 'switch': true, 'case': true, 'break': true, 'this': true,
  'static': true, 'type': true, 'interface': true,
}

const BUILTINS: Record<string, boolean> = {
  'true': true, 'false': true, 'null': true, 'undefined': true,
}

const isIdentStart = (c: string): boolean =>
  (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c === '_' || c === '$'

const isIdentPart = (c: string): boolean =>
  isIdentStart(c) || (c >= '0' && c <= '9')

const span = (cls: string, content: string): string =>
  '<span class="hl-' + cls + '">' + content + '</span>'

const highlightCode = (code: string): string => {
  let result = ''
  let i = 0

  while (i < code.length) {
    // Line comment
    if (code[i] === '/' && code[i + 1] === '/') {
      let j = i
      while (j < code.length && code[j] !== '\n') j++
      result += span('comment', escapeHtml(code.slice(i, j)))
      i = j
      continue
    }

    // String literals — single quote, double quote, backtick
    if (code[i] === '"' || code[i] === "'" || code[i] === '`') {
      const quote = code[i]
      let j = i + 1
      while (j < code.length) {
        if (code[j] === '\\') { j += 2; continue }
        if (code[j] === quote) { j++; break }
        j++
      }
      result += span('string', escapeHtml(code.slice(i, j)))
      i = j
      continue
    }

    // Number
    if (code[i] >= '0' && code[i] <= '9') {
      let j = i
      while (j < code.length && ((code[j] >= '0' && code[j] <= '9') || code[j] === '.')) j++
      result += span('number', escapeHtml(code.slice(i, j)))
      i = j
      continue
    }

    // Identifier — keyword, builtin, function call, or plain
    if (isIdentStart(code[i])) {
      let j = i
      while (j < code.length && isIdentPart(code[j])) j++
      const word = code.slice(i, j)

      // Peek past whitespace to detect a following '('
      let k = j
      while (k < code.length && (code[k] === ' ' || code[k] === '\t')) k++
      const isCall = code[k] === '('

      if (KEYWORDS[word]) {
        result += span('keyword', escapeHtml(word))
      } else if (BUILTINS[word]) {
        result += span('builtin', escapeHtml(word))
      } else if (isCall) {
        result += span('function', escapeHtml(word))
      } else {
        result += escapeHtml(word)
      }

      i = j
      continue
    }

    // Everything else — punctuation, operators, whitespace
    result += escapeHtml(code[i])
    i++
  }

  return result
}

// ── Markdown parser ───────────────────────────────────────────────────────────

const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const parseInline = (text: string): string =>
  escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')

const parseMarkdown = (md: string): string => {
  const lines = md.split('\n')
  let html = ''
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Fenced code block
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim()
      i++
      let code = ''
      while (i < lines.length && !lines[i].startsWith('```')) {
        code += lines[i] + '\n'
        i++
      }
      html += '<pre><code class="lang-' + lang + '">' + highlightCode(code.trimEnd()) + '</code></pre>'
      i++
      continue
    }

    // Headings
    if (line.startsWith('### ')) {
      html += '<h3>' + parseInline(line.slice(4)) + '</h3>'
    } else if (line.startsWith('## ')) {
      html += '<h2>' + parseInline(line.slice(3)) + '</h2>'
    } else if (line.startsWith('# ')) {
      html += '<h1>' + parseInline(line.slice(2)) + '</h1>'
    }

    // Unordered list — collect consecutive items
    else if (line.startsWith('- ')) {
      html += '<ul>'
      while (i < lines.length && lines[i].startsWith('- ')) {
        html += '<li>' + parseInline(lines[i].slice(2)) + '</li>'
        i++
      }
      html += '</ul>'
      continue
    }

    // Blank line
    else if (line.trim() === '') {
      i++
      continue
    }

    // Paragraph
    else {
      html += '<p>' + parseInline(line) + '</p>'
    }

    i++
  }

  return html
}

export default parseMarkdown
