import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from './Icon.vue'

export default {
  title: 'Icon',
  component: Icon,
} as Meta<typeof Icon>

type Story = StoryObj<typeof Icon>

export const Basic: Story = {
  args: {
    name: 'material-symbols:arrow-upward-rounded',
    width: 32,
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'material-symbols:arrow-upward-rounded',
        'material-symbols:arrow-downward-rounded',
        'material-symbols:arrow-left-alt-rounded',
        'material-symbols:arrow-right-alt-rounded',
      ],
    },
    width: {
      control: {
        type: 'number',
        min: 16,
        max: 64,
        step: 4,
      },
    },
    color: {
      control: {
        type: 'color',
        presetColors: ['red', 'green', 'blue'],
      },
    },
    inline: {
      control: 'boolean',
    },
    ssr: {
      control: 'boolean',
    },
  },
}
