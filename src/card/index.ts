import type { App } from 'vue'
import Card from './card.vue'

Card.install = function (app: App) {
  app.component(Card.name, Card)
}

export const _ButtonComponent = Card

export default Card
