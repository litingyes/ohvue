import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from './Icon.vue'

export default {
  title: 'Icon',
  component: Icon,
} as Meta<typeof Icon>

type Story = StoryObj<typeof Icon>

export const Test: Story = {
  args: {
    size: 0,
    color: '',
  },
}
