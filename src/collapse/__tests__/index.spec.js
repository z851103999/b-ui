import Collapse from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test collapse use', () => {
  const app = createApp({}).use(Collapse)
  expect(app.component(Collapse.name)).toBeTruthy()
})
