import example from '../example'
import Tags from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test tags example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test tags plugin', () => {
  const app = createApp({}).use(Tags)
  expect(app.component(Tags.name)).toBeTruthy()
})
