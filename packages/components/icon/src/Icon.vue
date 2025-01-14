<script lang="ts" setup>
import type { OhIconProps } from './type'

defineOptions({
  name: 'OhIcon',
})

defineProps<OhIconProps>()
</script>

<template>
  <i>
    test
    <slot />
  </i>
</template>
