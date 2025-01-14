import type { StorybookConfig } from '@storybook/vue3-vite'
import { resolve } from 'node:path'
import { globSync } from 'fast-glob'

// exclude stories in node_modules
function getComponentStories() {
  const componentDir = resolve(__dirname, '../../components')

  const components = globSync(`${componentDir}/*`, {
    onlyDirectories: true,
  })

  return components.map(component => `${component}/src/**/*.stories.ts`)
}

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    ...getComponentStories(),
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: ['../public'],
}
export default config
