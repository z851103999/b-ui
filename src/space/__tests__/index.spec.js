import Spacer from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test space example', () => {
  const wrapper = mount()
  expect(wrapper.html()).toMatchSnapshot()
})

test('test space plugin', () => {
  const app = createApp({}).use(Spacer)
  expect(app.component(Spacer.name)).toBeTruthy()
})
