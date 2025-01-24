import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { globSync } from 'fast-glob'

function main() {
  const toBuilds = [
    '@ohvue/utils',
    '@ohvue/theme',
    '@ohvue/composables',
    ...globSync('packages/components/**/package.json', {
      ignore: ['**/node_modules/**'],
    }).map((path) => {
      return JSON.parse(readFileSync(path, 'utf-8')).name
    }),
    '@ohvue/storybook',
    'ohvue',
  ]

  toBuilds.forEach((name) => {
    execSync(`pnpm --filter ${name} build`, {
      stdio: 'inherit',
    })
  })
}

main()
