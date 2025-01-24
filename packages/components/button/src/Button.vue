<script lang="ts" setup>
import type { OhButtonProps } from './types'
import { useComponentClass } from '@ohvue/composables'
import { OhIcon } from '@ohvue/icon'
import { isString } from 'usexx'
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
    props.isIconOnly && props.icon ? ns.is('icon-only') : '',
    props.disabled ? ns.is('disabled') : '',
  ].filter(Boolean)

  return classes
})
</script>

<template>
  <button :class="classes" :aria-label="ariaLabel">
    <i v-if="icon" :class="ns.e('icon')">
      <OhIcon v-if="isString(icon)" :name="icon" />
      <component :is="icon" />
    </i>
    <slot v-if="!icon || !isIconOnly" />
  </button>
</template>

<style lang="scss">
@use './style.scss';
</style>
