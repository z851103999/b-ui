import { nextTick,ref } from 'vue'
import { mount } from '@vue/test-utils'
import BSwitch from '../Switch'

describe('b-switch',()=>{
  // 是否正常运行
  it(`switch render work`,async()=>{
    const checked = ref(false)
    const wrapper = mount({
      components:{BSwitch},
      template:`
      <b-switch v-model:checked="checked"></b-switch>
      `,
      setup(){
        return checked
      }
    })
    expect(wrapper.classes()).toContain('b-switch');
    expect(wrapper.classes()).toContain('b-checked')

    checked.value = true;
    await nextTick()
    expect(wrapper.classes()).toContain('b-checked')
  })
  // disabled 禁用
  it(`switch disabled work`,async()=>{
    const onChange = jest.fn()
    const wrapper = mount(BSwitch,{
      props:{
        disabled:true,
        onChange
      }
    })
    expect(wrapper.classes()).toContain(`b-disabled`)

    await wrapper.trigger('click')
    // 调用
    expect(onchange).toBeCalledTimes(0)

    await wrapper.setProps({
      disabled:false
    })

    expect(wrapper.classes()).not.toContain('b-disabled')
    expect(onChange).toBeCalledTimes(1)
  })
  // 验证size
  it(`switch size work`,async ()=>{
    const wrapper = mount(BSwitch,{
      props:{
        size:'small'
      }
    })
    expect(wrapper.classes()).toContain('b-switch-sm')
    await wrapper.setProps({
      props:{
        size:'large'
      }
    })
    expect(wrapper.classes()).not.toContain(`b-switch-sm`)
    expect(wrapper.classes()).toContain(`b-switch-lg`)
  })
  it(`switch beforeChange work`,async ()=>{
    const beforeChange = jest.fn(()=>false)
    const onChange = jest.fn()
    const wrapper= mount(BSwitch,{
      props:{
        beforeChange,
        onChange
      }
    })
    await wrapper.trigger('click')
    expect(beforeChange).toBeCalledTimes(1)
    expect(onChange).toBeCalledTimes(0)

    beforeChange.mockReturnValue(true)
    await wrapper.trigger(`click`)
    expect(beforeChange).toBeCalledTimes(2)
    expect(onChange).toBeCalledTimes(1)
  })
  it(`switch slot work`,async ()=>{
    const isChecked = ref(false)
    const wrapper = mount({
      components:{BSwitch},
      template:`
      <b-switch :checked="isChecked">
        <template v-slot:checkedContent>开</template>
        <template v-slot:uncheckedContent>开</template>
      </b-switch>
      `,
      setup(){
        return{
          isChecked
        }
      }
    })
    expect(wrapper.text()).toBe('关')
    isChecked.value = true
    await nextTick()
    expect(wrapper.text()).toBe('开')
  })
})

