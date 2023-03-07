import Card from '../Card'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'


describe('card', () => {
  it('should render correctly', async () => {
    const wrapper = mount(Card);
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render correctly', async () => {
    const wrapper = mount({
      
    })
  })
})
