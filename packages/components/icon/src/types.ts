import type { IconProps } from '@iconify/vue'

export interface OhIconProps {
  /**
   * Icon name in iconify
   *
   * {@link https://iconify.design/docs/icon-components/vue/#icon}
   */
  name: string

  /**
   * Icon width
   */
  width?: IconProps['width']

  /**
   *  Changes icon color
   *
   * {@link https://iconify.design/docs/icon-components/vue/#color}
   */
  color?: IconProps['color']

  /**
   * Adding inline property to the icon component is identical to setting style="vertical-align: -0.125em"
   *
   * {@link https://iconify.design/docs/icon-components/vue/inline.html}
   */
  inline?: IconProps['inline']

  /**
   * If enabled, it will render icon immediately
   *
   * {@link https://iconify.design/docs/icon-components/vue/#ssr-attribute}
   */
  ssr?: IconProps['ssr']
}
