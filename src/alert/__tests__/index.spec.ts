import Alert from '../Alert'
import { h } from 'vue'
import { mount } from '@vue/test-utils'

describe('alert basic', () => {
  /**是否创建了组件 */
  it('should create alert component', () => {
    const wrapper = mount(Alert)
    expect(wrapper.find('.b-alert').exists()).toBe(true)
  })
  /**
   * 组件内内容是否显示正常
   */
  it('should alert show content correct', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: h('span', {}, 'success')
      }
    })
    expect(wrapper.find('.b-alert').text()).toBe('success')
  })
})

describe('alert type', () => {
  /**
   * alert success 类型正确显示
   */
  it('alert should has success type', () => {
    const wrapper = mount(Alert, {
      props: {
        type: 'success'
      }
    })
    expect(wrapper.find('.b-icon-success').exists()).toBe(true)
  })
  /**
  * alert warning 类型正确显示
  */
  it('alert should has warning type', () => {
    const wrapper = mount(Alert, {
      props: {
        type: 'warning'
      }
    })
    expect(wrapper.find('.b-icon-warning').exists()).toBe(true)
  })
  /**
  * alert info 类型正确显示
  */
  it('alert should has info type', () => {
    const wrapper = mount(Alert, {
      props: {
        type: 'info'
      }
    })
    expect(wrapper.find('.b-icon-info').exists()).toBe(true)
  })
})
/**
 * Alert Props cssClass
 */
describe('alert cssClass', () => {
  it('alert should append cssClass', () => {
    const wrapper = mount(Alert, {
      props: {
        cssClass: 'cssClass',
      },
    })
    expect(wrapper.find('.cssClass').exists()).toBe(true)
  })
})
/**
 * Alert Props showIcon
 */
describe('alert icon', () => {
  it('alert should show icon', () => {
    const wrapper = mount(Alert)
    expect(wrapper.find('.b-alert-icon').exists()).toBe(true)
  })
  it('alert should not show icon', () => {
    const wrapper = mount(Alert, {
      props: {
        showIcon: false
      }
    })
    expect(wrapper.find('.b-alert-icon').exists()).toBe(false)
  })
})

describe('alert dismiss', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  // 3000ms 消失
  it('alert should not dismiss before 3000ms', async () => {
    const wrapper = mount(Alert, {
      props: {
        dismissTime: 3000
      }
    })
    expect(wrapper.find('.b-alert').exists()).toBe(true)
    await wrapper.find('.b-alert-close-icon').trigger('click')
    // 时间倒计时器
    jest.advanceTimersByTime(2000)
    expect(wrapper.find('.b-alert').exists()).toBe(true)
    setTimeout(() => {
      expect(wrapper.find('.b-alert').exists()).toBe(false)
    },0)
  })
})
