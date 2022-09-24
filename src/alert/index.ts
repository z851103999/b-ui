import Alert from './Alert'
import type { App } from 'vue'

Alert.install = function (app: App) {
  app.component(Alert.name, Alert)
}

export const _AlertComponent = Alert

export default Alert
