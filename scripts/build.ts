import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { globSync } from 'fast-glob'

function main() {
  /**
   * some components should build after someone
   * e.g. button depends on icon
   */
  const componentsOrder = ['icon', 'button']

  const toBuilds = [
    '@ohvue/utils',
    '@ohvue/theme',
    '@ohvue/composables',
    ...globSync('packages/components/**/package.json', {
      ignore: ['**/node_modules/**'],
    }).map((path) => {
      return JSON.parse(readFileSync(path, 'utf-8')).name
    }).sort((a: string, b: string) => {
      const indexOfA = componentsOrder.findIndex(item => a.includes(item))
      const indexOfB = componentsOrder.findIndex(item => b.includes(item))

      return indexOfA - indexOfB
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
