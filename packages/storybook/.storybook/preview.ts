import { OhContext } from '@ohvue/context'
import { withThemeByClassName } from '@storybook/addon-themes'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { type Preview, setup } from '@storybook/vue3'

setup((app) => {
  app.use(OhContext)
})

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'desktop',
    },
  },
  decorators: [
    (story) => {
      return {
        components: { story },
        template: '<OhContext><story /></OhContext>',
      }
    },
    withThemeByClassName({
      defaultTheme: 'light',
      parentSelector: 'html',
      themes: {
        light: 'light',
        dark: 'dark',
      },
    }),
  ],
}

export default preview
