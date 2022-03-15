import Switch from './Switch'
import type { App } from 'vue'

Switch.install = function (app: App) {
  app.component(Switch.name, Switch)
}

export const _SwitchComponent = Switch

export default Switch
