import { withInstallComponent } from '@ohvue/utils'
import Context from './context.vue'

export const OhContext = withInstallComponent<typeof Context>(Context)

export default OhContext
