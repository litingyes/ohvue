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

  const m = (m: string, isValid = true) => isValid ? `${b}--${kebabCase(m)}` : undefined

  const is = (state: string, isValid = true) => isValid ? `${b}--is-${kebabCase(state)}` : undefined

  const em = (e: string, m: string, isValid = true) => isValid ? `${b}__${kebabCase(e)}--${kebabCase(m)}` : undefined
  const eis = (e: string, state: string, isValid = true) => isValid ? `${b}__${kebabCase(e)}--is-${kebabCase(state)}` : undefined

  return {
    b,
    e,
    m,
    is,

    em,
    eis,
  }
}
