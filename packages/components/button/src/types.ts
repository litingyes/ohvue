import type { Component } from 'vue'

export interface OhButtonProps {
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Button radius
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'

  /**
   * Button color
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'

  /**
   * Button variant
   */
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'shadow'

  /**
   * Icon in Button
   */
  icon?: Component | string

  /**
   * Icon button
   */
  isIconOnly?: boolean

  /**
   * Button is loading
   */
  loading?: boolean

  /**
   * Button is disabled
   */
  disabled?: boolean
}
