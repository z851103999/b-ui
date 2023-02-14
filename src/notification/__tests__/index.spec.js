import Notification from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test notification plugin', () => {
  const app = createApp({}).use(Notification)
  expect(app.component(Notification.name)).toBeTruthy()
})
