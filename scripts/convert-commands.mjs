#!/usr/bin/env node
/**
 * Converts commands/*.toml → claude-commands/*.md
 * Run: node scripts/convert-commands.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs'

const commandsDir = 'commands'
const outputDir = 'claude-commands'

mkdirSync(outputDir, { recursive: true })

for (const file of readdirSync(commandsDir).filter(f => f.endsWith('.toml'))) {
  const content = readFileSync(`${commandsDir}/${file}`, 'utf-8')
  const name = file.replace('.toml', '')

  const promptMatch = content.match(/prompt\s*=\s*"""\s*([\s\S]*?)"""/)
  const prompt = promptMatch?.[1]?.trim() ?? ''

  writeFileSync(`${outputDir}/${name}.md`, prompt + '\n')
  console.log(`  ${name}.toml → ${name}.md`)
}
