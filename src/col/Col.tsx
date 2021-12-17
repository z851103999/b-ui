import { computed, CSSProperties, defineComponent, inject, PropType } from 'vue'
import './col.less'

const useDistance = (value: number) => {
  const tempDistance = 100 / 24
  if (value >= 24) return '100%'
  return `${tempDistance * value}%`
}

export default defineComponent({
  props: {
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    span: {
      type: [String, Number],
      default: 24,
    },
    offset: {
      type: [String, Number],
      default: 0,
    },
  },
  setup(props, { slots }) {
    const { gutter } = inject('ElRow', { gutter: { value: 0 } })

    const setStyle = computed(() => {
      const { span, offset } = props
      const style: CSSProperties = {
        width: useDistance(Number(span)),
        marginLeft: useDistance(Number(offset)),
        paddingLeft: `${Number(gutter.value) / 2}px`,
        paddingRight: `${Number(gutter.value) / 2}px`,
      }
      return style
    })

    return () => {
      const { tag } = props
      return (
        <tag style={setStyle.value} class="b-col">
          {slots.default?.()}
        </tag>
      )
    }
  },
})
