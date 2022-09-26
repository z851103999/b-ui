import { mount } from "@vue/test-utils";
import Button from '../button'

describe('b-button', ()=>{
  it('variant',()=>{
    const wrapper = mount(Button,{
      props:{
        variant:'outline'
      }
    })
    expect(wrapper.find('.b-btn').classes()).toContain('b-btn-outline');
  })

  it('size',()=>{
    const wrapper = mount(Button,{
      props:{
        size:'sm'
      }
    })
    expect(wrapper.find('.b-btn-sm').exists()).toBeTruthy()
  })

  it('disabled',async ()=>{
    const handleClick = jest.fn()
    const wrapper = mount(Button,{
      props:{
        disabled:true,
        onClick:handleClick
      }
    })
    await wrapper.trigger('click')
    expect(handleClick).not.toBeCalled()
  })

  it('slot',()=>{
    const btnTextMock = 'button'
    const wrapper = mount(Button,{
      slots:{
        default:btnTextMock
      }
    })
    expect(wrapper.text()).toEqual(btnTextMock);
  })
});
