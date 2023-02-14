// Component entry, the folder where the file exists will be exposed to the user
import Notification from './Notification'
import type { App } from 'vue'

Notification.install = function (app: App) {
  app.component(Notification.name, Notification)
}

export const _NotificationComponent = Notification

export default Notification
