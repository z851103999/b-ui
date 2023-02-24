import { nextTick,ref } from 'vue'
import { mount } from '@vue/test-utils'
import BSlider from '../Slider'

describe('b-slider',()=>{
  // 滑块max min是否工作
  it('Slider Max Min is working',()=>{
    const wrapper = mount(BSlider,{
    props:{
      max:50,
      min:2
    }
  })
  const max = wrapper.find('.b-max_count')
  const min = wrapper.find('.b-min_count')
  expect(min.text()).toBe('2')
    expect(max.text()).toBe('50')
  })
  // v-model 工作
  it('Slider v-model work',async()=>{
    const value = ref(5)
    const wrapper = mount({
      components:{BSlider},
      template:`
      <b-slider v-model:modelValue="modelValue" showInput></b-slider>
      `,
      setup(){
        return {
          modelValue:value
        }
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('5')
    input.setValue(10)
    await nextTick()
    expect(value.value).toBe(10)
  })
  it('slider showInput work', () => {
    const wrapper = mount(BSlider, {
      props: {
        showInput: true
      }
    })
    const dInput = wrapper.find('.b-input__out-wrap')
    expect(dInput.exists()).toBeTruthy()
  })

  // disabled
  it('slider disabled work',()=>{
    const wrapper = mount(BSlider,{
      props:{
        disabled:true
      }
    })
    const slider= wrapper.find('.b-slider__runway')
    expect(slider.classes()).toContain('disabled')
  })
  // slider
  it('slider tipsRenderer work',()=>{
    const wrapper = mount(BSlider,{
      props:{
        tipsRenderer:'null'
      }
    })
    const slider = wrapper.find('.b-slider_popover')
    expect(slider.exists()).toBe(false)
  })
  // popover
  it('slider popover work',()=>{
    const wrapper = mount(BSlider,{
      props:{
        tipsRenderer:'apple',
        modelValue:10
      }
    })
    const slider = wrapper.find('.b-slider_popover-content')
    expect(slider.text()).toBe('10 apple')
    
  })
})

