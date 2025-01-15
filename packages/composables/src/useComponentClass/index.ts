import { kebabCase } from 'usexx'

export interface UseClassOptions {
  prefix?: string
}

/**
 * Quickly generate BEM-compliant class names based on component name
 *
 * @param componentName component name
 *
 * {@link https://getbem.com/}
 */
export function useComponentClass(componentName: string, options?: UseClassOptions) {
  const prefix = kebabCase(options?.prefix ?? 'oh')
  const b = `${prefix}-${kebabCase(componentName)}`

  const e = (e: string) => `${b}__${kebabCase(e)}`

  const em = (e: string, m: string) => `${b}__${kebabCase(e)}--is-${kebabCase(m)}`

  return {
    b,
    e,
    em,
  }
}
