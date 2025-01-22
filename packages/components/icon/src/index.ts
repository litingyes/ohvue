import { withInstallComponent } from '@ohvue/utils'
import Icon from './Icon.vue'

export const OhIcon = withInstallComponent<typeof Icon>(Icon)

export default OhIcon

export * from './types'
