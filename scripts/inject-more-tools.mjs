import fs from "node:fs"
import path from "node:path"
import { ANALYTICS_BEACON, MORE_TOOLS_BLOCK } from './more-tools-html.mjs'

const dist = path.resolve('dist')

function walkHtml(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) walkHtml(full, out)
    else if (ent.name.endsWith('.html')) out.push(full)
  }
  return out
}

function inject(html) {
  let out = html
  if (!out.includes('id="wf-more-tools"')) {
    out = out.replace('</body>', `${MORE_TOOLS_BLOCK}\n${ANALYTICS_BEACON}\n</body>`)
  } else if (!out.includes('static.cloudflareinsights.com/beacon.min.js')) {
    out = out.replace('</body>', `${ANALYTICS_BEACON}\n</body>`)
  }
  return out
}

const files = walkHtml(dist)
let count = 0
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8')
  const next = inject(html)
  if (next !== html) {
    fs.writeFileSync(file, next)
    count++
  }
}
console.log(`inject-more-tools: updated ${count} of ${files.length} HTML files`)