import Tag from './Tag'
import type { App } from 'vue'

Tag.install = function (app: App) {
  app.component(Tag.name, Tag)
}

export const _TagsComponent = Tag

export default Tag
