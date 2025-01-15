<script lang="ts" setup>
import type { OhIconProps } from './type'
import { Icon } from '@iconify/vue'

import { useComponentClass } from '@ohvue/composables'

defineOptions({
  name: 'OhIcon',
})

withDefaults(defineProps<OhIconProps>(), {
  width: 20,
  color: 'currentcolor',
  inline: true,
  ssr: false,
})

const ns = useComponentClass('icon')
</script>

<template>
  <Icon
    :class="ns.b"
    :icon="name"
    :inline="inline"
    :width="width"
    :color="color"
    :ssr="ssr"
  />
</template>
