import { computed, defineComponent, inject, onMounted, shallowRef, Transition } from 'vue'
import OpenIcon from './collapse-open-icon'
import { CollapseItemProps, collapseItemProps } from './collapse-types'
import { SELECT_TOKEN } from './const'
import './collapse.less'

export default defineComponent({
  name: 'BCollapseItem',
  props: collapseItemProps,
  setup(props: CollapseItemProps, { slots }) {
    const collapseContent = shallowRef<HTMLElement>()
    const collapse = inject(SELECT_TOKEN, null)
    // 关闭状态处理
    const isOpen = computed(() => {
      if (props.disabled) {
        return false
      }
      if (Array.isArray(collapse?.modelValue)) {
        return Boolean(collapse?.modelValue.length) && collapse?.modelValue.includes(props.name)
      }
      return Boolean(collapse?.modelValue) && collapse?.modelValue === props.name
    })
    // 点击标题
    const handlerTitleClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!props.disabled) {
        collapse?.collapseItemClick(props.name)
      }
    }

    onMounted(() => {
      // 上下滑动
      if (collapseContent.value) {
        const dom = collapseContent.value
        if (isOpen.value) {
          dom.style.height = `${dom.offsetHeight}px`
        }
      }
    })

    const enter = (element: Element) => {
      const el = element as HTMLElement
      el.style.height = ''
      const height = el.offsetHeight
      el.style.height = '0px'
      // 需要执行一次才会生效
      el.offsetHeight
      el.style.height = `${height}px`
    }

    const leave = (element: Element) => {
      const el = element as HTMLElement
      el.style.height = '0px'
    }

    return () => {
      return (
        <div class={'b-collapse__item'}>
          <div
            class={[
              'b-collapse__item-title',
              'b-collapse--overflow-ellipsis',
              isOpen.value && 'b-collapse--open',
              props.disabled && 'b-collapse__item--disabled',
            ]}
            onClick={handlerTitleClick}
          >
            {slots.title ? slots.title() : props.title}
            <span class={'b-collapse__open-icon'}>
              <OpenIcon />
            </span>
          </div>
          <Transition name={'b-collapse-transition'} onEnter={enter} onLeave={leave}>
            {isOpen.value && (
              <div ref={collapseContent} class={'b-collapse__item-content'}>
                {slots.default?.()}
              </div>
            )}
          </Transition>
        </div>
      )
    }
  },
})
