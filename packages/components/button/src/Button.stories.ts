import type { Meta, StoryObj } from '@storybook/vue3'
import OhButton from '.'
import Button from './Button.vue'

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Basic: Story = {
  render: args => ({
    components: { OhButton },
    setup() {
      return { args }
    },
    template: '<OhButton v-bind="args">Button</OhButton>',
  }),
  args: {
    size: 'md',
    radius: 'md',
    color: 'primary',
    variant: 'solid',
  },
  argTypes: {
    size: {
      control: 'select',
      options: [
        'sm',
        'md',
        'lg',
      ],
    },
    radius: {
      control: 'select',
      options: [
        'none',
        'sm',
        'md',
        'lg',
        'full',
      ],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'primary',
        'success',
        'warning',
        'danger',
      ],
    },
    variant: {
      control: 'select',
      options: [
        'solid',
        'bordered',
        'light',
        'flat',
        'ghost',
        'shadow',
      ],
    },
    icon: {
      control: 'select',
      options: [
        'material-symbols:download',
        'material-symbols:upload',
      ],
    },
    isIconOnly: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}
