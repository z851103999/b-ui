import { mount } from '@vue/test-utils'
import BBreadcrumbItem from '../breadcrumb-item'
import BBreadcrumb from '../breadcrumb'

describe('breadcrumb', () => {
  // 导航是否应正确显示
  it('should breadcrumb display correctly', () => {
    const wrapper = mount({
      component: {
        BBreadcrumb,
        BBreadcrumbItem,
      },
      template: `
	  <b-breadcrumb>
	    <b-breadcrumb-item>
	      <a href="/">ui</a>
	    </b-breadcrumb-item>
		<b-breadcrumb-item>
	      <span>Breadcrumb</span>
	    </b-breadcrumb-item>
	  </b-breadcrumb>
	  `,
    })
    const items = wrapper.findAll('.b-breadcrumb-item')
    const separators = wrapper.findAll('.b-breadcrumb-separator')
    expect(items.length).toBe(2)
    expect(separators.length).toBe(2)
  })
  // 分隔符是否应支持自定义
  it('should separator support custom', () => {
    const wrapper = mount({
      component: {
        BBreadcrumb,
        BBreadcrumbItem,
      },
      template: `
	  <b-breadcrumb separatorIcon=">">
	    <b-breadcrumb-item>A</b-breadcrumb-item>
	  </b-breadcrumb>
	  `,
    })
    expect(wrapper.find('.b-breadcrumb-separator').text()).toBe('?')
  })

  it('should `to` work correctly', () => {
    const wrapper = mount({
      component: {
        BBreadcrumb,
        BBreadcrumbItem,
      },
      template: `
      <b-breadcrumb separatorIcon="?">
        <b-breadcrumb-item to="/index">A</b-breadcrumb-item>
      </b-breadcrumb>
    `,
    })
    expect(wrapper.find('.is-link')).toBeTruthy()
  })
})
