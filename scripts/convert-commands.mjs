#!/usr/bin/env node
/**
 * Converts commands/*.toml → commands/*.md (in-place, removes .toml files)
 * Run: node scripts/convert-commands.mjs
 */
import { readFileSync, writeFileSync, unlinkSync, readdirSync } from 'fs'

const commandsDir = 'commands'

for (const file of readdirSync(commandsDir).filter(f => f.endsWith('.toml'))) {
  const content = readFileSync(`${commandsDir}/${file}`, 'utf-8')
  const name = file.replace('.toml', '')

  const promptMatch = content.match(/prompt\s*=\s*"""\s*([\s\S]*?)"""/)
  const prompt = promptMatch?.[1]?.trim() ?? ''

  writeFileSync(`${commandsDir}/${name}.md`, prompt + '\n')
  unlinkSync(`${commandsDir}/${file}`)
  console.log(`  ${name}.toml → ${name}.md`)
}
