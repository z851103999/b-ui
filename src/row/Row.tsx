import { computed, CSSProperties, defineComponent, PropType, provide } from 'vue'
import './row.less'

export default defineComponent({
  props: {
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
    gutter: {
      type: [String, Number],
      default: 0,
    },
    justify: {
      type: String as PropType<'start' | 'end' | 'center' | 'space-around' | 'space-between'>,
      default: 'start',
    },
    align: {
      type: String as PropType<'top' | 'middle' | 'bottom'>,
      default: 'top',
    },
  },
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter)
    provide('ElRow', { gutter })

    const setClass = computed(() => {
      let _class = ''
      if (props.justify !== 'start') {
        _class += ` b-justify--${props.justify}`
      }
      if (props.align !== 'top') {
        _class += ` b-align--${props.align}`
      }
      return _class.trim()
    })

    const setStyle = computed(() => {
      const style: CSSProperties = {}
      if (props.gutter) {
        style.marginLeft = `-${Number(props.gutter) / 2}px`
        style.marginRight = style.marginLeft
      }
      return style
    })

    return () => {
      const { tag } = props
      return (
        <tag class={`b-row ${setClass.value}`} style={setStyle.value}>
          {slots.default?.()}
        </tag>
      )
    }
  },
})
