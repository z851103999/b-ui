import Collapse from './Collapse'
import CollapseItem from './collapse-item'
import type { App } from 'vue'

Collapse.install = function (app: App) {
  app.component(Collapse.name, Collapse)
  app.component(CollapseItem.name, CollapseItem)
}

export const _CollapseComponent = Collapse
export const _CollapseItemComponent = CollapseItem

export default { Collapse, CollapseItem }
