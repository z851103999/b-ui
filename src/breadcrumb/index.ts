import type { App } from 'vue'
import BreadcrumbItem from './breadcrumb-item'
import Breadcrumb from './breadcrumb'

BreadcrumbItem.install = function (app: App) {
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

Breadcrumb.install = function (app: App) {
  app.component(Breadcrumb.name, Breadcrumb)
}

export const _BreadcrumbItemComponent = BreadcrumbItem

export const _BreadcrumbComponent = Breadcrumb

export default { BreadcrumbItem, Breadcrumb }
