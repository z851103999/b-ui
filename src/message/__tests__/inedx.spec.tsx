import Message from '../message-service'
import { createApp, nextTick } from 'vue'
import { mount } from '@vue/test-utils'

describe('b-message', () => {
  // 渲染是否正确
  it('render correctly when using service', async () => {
    Message({
      message: 'message content'
    })
    await nextTick()
    const wrapper = mount(Message)
    expect(wrapper.find('b-message')).toBeTruthy()
  })
  // message type 类型渲染
  it('message type', async () => {
    Message({
      message: 'success type',
      type: 'success'
    })
    await nextTick()
    const wrapper = mount(Message)
    expect(wrapper.find('b-message__success')).toBeTruthy()
  })
  // 显示关闭按钮
  it('message showClose', async () => {
    Message({
      message: 'message showClose param',
      type: 'success',
      showClose: true
    })
    await nextTick()
    const wrapper = mount(Message)
    expect(wrapper.find('b-message__close')).toBeTruthy()
  })
  // onClose关闭回调
  it('close callback', async () => {
    const closeCallback = jest.fn()
    Message({
      message: 'message close callback',
      duration: 1000,
      onClose: closeCallback
    })
    await nextTick()
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    expect(closeCallback).toBeCalled()
  })
})
