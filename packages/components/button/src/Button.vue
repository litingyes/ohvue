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

const showIcon = computed(() => props.loading || props.icon)
const isDisabled = computed(() => props.loading || props.disabled)

const classes = computed(() => {
  const classes = [
    ns.b,
    ns.m(`size-${props.size}`),
    ns.m(`radius-${props.radius}`),
    ns.m(`color-${props.color}`),
    ns.m(`variant-${props.variant}`),
    ns.is('icon-only', props.isIconOnly && !!props.icon),
    ns.is('loading', props.loading),
    ns.is('disabled', isDisabled.value),
  ].filter(Boolean)

  return classes
})
</script>

<template>
  <button :class="classes" :disabled="isDisabled" :aria-label="ariaLabel" :aria-disabled="isDisabled">
    <i v-if="showIcon" :class="[ns.e('icon')]">
      <OhIcon v-if="loading" name="line-md:loading-loop" />
      <OhIcon v-else-if="isString(icon)" :name="icon" />
      <component :is="icon" />
    </i>
    <slot v-if="!icon || !isIconOnly" />
  </button>
</template>

<style lang="scss">
@use './style.scss';
</style>
