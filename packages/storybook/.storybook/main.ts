import type { StorybookConfig } from '@storybook/vue3-vite'
import { resolve } from 'node:path'
import { globSync } from 'fast-glob'

const componentDir = resolve(__dirname, '../../components')
const components = globSync(`${componentDir}/*`, {
  onlyDirectories: true,
})

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',

    // exclude stories in node_modules
    ...components.map(component => `${component}/src/**/*.stories.ts`),
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-themes',
  ],
  framework: '@storybook/vue3-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: ['../public'],
}
export default config
