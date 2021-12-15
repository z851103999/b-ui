import type { App } from 'vue'
import Button from './Button.vue'
import Buttons from './Buttons.vue'

Button.install = function (app: App) {
  app.component(Button.name, Button)
  app.component(Buttons.name, Buttons)
}

export const _ButtonComponent = Button

export default Button
