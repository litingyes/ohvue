import antfu from '@antfu/eslint-config'
import storybook from 'eslint-plugin-storybook'

export default antfu({
  formatters: true,
  vue: true,
  ignores: ['node_modules', 'pnpm-lock.yml'],
  rules: {
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}, ...storybook.configs['flat/recommended'])
