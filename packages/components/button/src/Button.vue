<script lang="ts" setup>
import type { OhButtonProps } from './types'
import { useComponentClass } from '@ohvue/composables'
import { computed } from 'vue'

defineOptions({
  name: 'OhButton',
})

const props = withDefaults(defineProps<OhButtonProps>(), {
  size: 'md',
  radius: 'md',
  color: 'default',
  variant: 'solid',
  isIconOnly: false,
  loading: false,
  disabled: false,
})

const ns = useComponentClass('button')

const classes = computed(() => {
  const classes = [
    ns.b,
    ns.m(`size-${props.size}`),
    ns.m(`radius-${props.radius}`),
    ns.m(`color-${props.color}`),
    ns.m(`variant-${props.variant}`),
    props.isIconOnly ? ns.is('icon-only') : '',
    props.disabled ? ns.is('disabled') : '',
  ].filter(Boolean)

  return classes
})
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<style lang="scss">
@use './style.scss';
</style>
