import Space from './Space'
import type { App } from 'vue'

Space.install = function (app: App) {
  app.component(Space.name, Space)
}

export const _SpacerComponent = Space

export default Space
