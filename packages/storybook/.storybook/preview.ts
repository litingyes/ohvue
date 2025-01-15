import type { Preview } from '@storybook/vue3'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      values: [
        { name: 'Dark', value: '#030712' },
        { name: 'Light', value: '#f9fafb' },
      ],
      default: 'Light',
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'desktop',
    },
  },
}

export default preview
