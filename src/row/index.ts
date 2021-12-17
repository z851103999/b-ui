import Row from './Row.vue'
import type { App } from 'vue'

Row.install = function (app: App) {
  app.component(Row.name, Row)
}

export const _RowComponent = Row

export default Row
