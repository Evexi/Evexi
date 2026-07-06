// Splits an app's docs.md into sections keyed by their level-1 heading and
// returns a lookup so each test can reference its documentation by title.
// Headings inside fenced code blocks are ignored.
export const parseDocs = (md: string) => {
  const sections: Record<string, string> = {}

  let title: string | undefined
  let lines: string[] = []
  let inFence = false

  const flush = () => {
    if (title) sections[title] = lines.join('\n').trim()
  }

  for (const line of md.split('\n')) {
    if (line.trimStart().startsWith('```')) inFence = !inFence

    const heading = inFence ? null : line.match(/^# (.+)$/)
    if (heading) {
      flush()
      title = heading[1].trim()
      lines = [line]
    } else {
      lines.push(line)
    }
  }
  flush()

  return (name: string): string | undefined => {
    const section = sections[name]
    if (!section) console.warn(`docs.md has no "# ${name}" section`)
    return section
  }
}
