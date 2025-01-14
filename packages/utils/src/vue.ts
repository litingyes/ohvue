import type { App, Component, Plugin } from 'vue'

export type ComponentWithInstall<T extends Component> = T & Plugin

export function withInstallComponent<T extends Component>(main: T, subs?: Component[]) {
  // @ts-expect-error install
  main.install = (app: App) => {
    const components = [main, ...(subs || [])]
    components.forEach((component) => {
      app.component(component.name!, component)
    })
  }

  return main as ComponentWithInstall<T>
}
