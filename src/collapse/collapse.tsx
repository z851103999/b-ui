import { defineComponent, provide, reactive, toRefs } from 'vue'
import { CollapseActiveData, CollapseContext, CollapseProps, collapseProps } from './collapse-types'
import { SELECT_TOKEN } from './const'

import './collapse.less'

export default defineComponent({
  name: 'BCollapse',
  props: collapseProps,
  emits: ['change', 'update:modelValue'],
  setup(props: CollapseProps, { slots, emit }) {
    const getLists = (data: CollapseActiveData) => {
      if (!data && data !== 0) {
        return []
      }
      return Array.isArray(data) ? data : [data]
    }
    const collapseItemClick = (name: string | number) => {
      const activeLists = [...getLists(props.modelValue)]
      const itemIndex = activeLists.indexOf(name)
      if (props.accordion) {
        let activeName = name
        if ((activeLists[0] || activeLists[0] === 0) && activeLists[0] === name) {
          activeName = ''
        }
        emit('update:modelValue', activeName)
        emit('change', activeName)
      } else {
        if (itemIndex > -1) {
          activeLists.splice(itemIndex, 1)
        } else {
          activeLists.push(name)
        }
        emit('update:modelValue', activeLists)
        emit('change', activeLists)
      }
    }
    provide(
      SELECT_TOKEN,
      reactive({
        ...toRefs(props),
        collapseItemClick,
      }) as CollapseContext
    )
    return () => {
      return <div class="b-collapse b-scrollbar">{slots.default?.()}</div>
    }
  },
})
