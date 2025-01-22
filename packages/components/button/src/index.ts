import { withInstallComponent } from '@ohvue/utils'
import Button from './Button.vue'

export const OhButton = withInstallComponent<typeof Button>(Button)

export default OhButton

export * from './types'
