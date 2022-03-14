import Slider from './Slider'
import type { App } from 'vue'

Slider.install = function (app: App) {
  app.component(Slider.name, Slider)
}

export const _SliderComponent = Slider

export default Slider
