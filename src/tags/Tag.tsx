import { defineComponent, toRefs, ref, watch, onUnmounted } from 'vue'
import { tagProps, TagProps } from './props'
import { useClass, useColor } from './hooks'
import BIcon from '../icon/index'

import './tag.less'

export default defineComponent({
  name: 'BTag',
  props: tagProps,
  emits: ['click', 'tagDelete', 'checkedChange'],
  setup(props: TagProps, { slots, emit }) {
    const { color, checked, titleContent, deletable, borderStyle } = toRefs(props)
    const tagClass = useClass(props)
    const themeColor = useColor(props)
    const tagTitle = titleContent.value || ''
    const isShow = ref(true)
    // 默认标签
    const isDefaultTag = () => !tagProps
    // 子组件点击事件
    const handleClick = () => {
      emit('click')
    }
    // 删除事件
    const handleDelete = () => {
      isShow.value = false
      emit('tagDelete')
    }

    const closeIconEl = () => {
      return deletable.value ? (
        <a class="remove-button" onClick={handleDelete}>
          {isDefaultTag() ? (
            <BIcon size="12px" name="guanbi1" color="#fff" />
          ) : (
            <BIcon size="12px" name="guanbi" color={themeColor.value} />
          )}
        </a>
      ) : null
    }
    // tag 的 check 状态改变时触发的事件
    const unWatch = watch(checked, (newVal) => {
      console.log('checkedChange')
      emit('checkedChange', newVal)
    })

    onUnmounted(() => {
      unWatch()
    })
    return () =>
      isShow.value && (
        <div class="b-tag" onClick={handleClick} v-show={isShow.value}>
          <span
            class={tagClass.value}
            style={{
              display: 'block',
              color: checked.value ? '#fff' : themeColor.value,
              backgroundColor: checked.value ? themeColor.value : !color.value ? '' : '#fff',
              border: borderStyle.value ? 'none' : '',
            }}
            title={tagTitle}
          >
            {slots.default?.()}
            {closeIconEl()}
          </span>
        </div>
      )
  },
})
