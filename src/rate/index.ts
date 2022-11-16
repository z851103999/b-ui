import Rate from './Rate'
import type { App } from 'vue'

Rate.install = function (app: App) {
  app.component(Rate.name, Rate)
}

export const _RateComponent = Rate

export default Rate
