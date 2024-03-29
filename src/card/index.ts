import type { App } from 'vue'
import Card from './Card'

Card.install = function (app: App) {
  app.component(Card.name, Card)
}

export const _CardComponent = Card

export default Card
