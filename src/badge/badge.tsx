import { computed, defineComponent } from 'vue'
import { BadgeProps, badgeProps } from './badge-types'
import './badge.less'

type IStyleMap = Pick<BadgeProps, 'bgColor' | 'textColor'>

export default defineComponent({
  name: 'BBadge',
  props: badgeProps,
  setup(props: BadgeProps, ctx) {
    const className = computed(() => {
      return [
        'b-badge',
        props.showDot ? 'b-badge--dot' : 'b-badge--count',
        props.status && `b-badge--${props.status}`,
        ctx.slots.default && props.position && `b-badge--${props.position}`,
        ctx.slots.default && `b-badge--fixed`,
        props.hidden ? 'b-badge--hidden' : 'b-badge--show',
      ].join(' ')
    })
    const style = computed(() => {
      const styleMap: IStyleMap = {
        bgColor: 'background',
        textColor: 'color',
      }
      const ret = (Object.keys(styleMap) as (keyof IStyleMap)[]).reduce((result, key) => {
        if (props[key]) {
          result[styleMap[key] as string] = props[key]
        }
        return result
      }, {} as { [key: string]: unknown })
      if (ctx.slots.default && props.offset) {
        const [x, y]: Array<number> = props.offset
        const [yName, xName] = props.position.split('-')
        ret[yName] = y + 'px'
        ret[xName] = x + 'px'
      }

      return ret
    })

    const text = computed(() => {
      if (props.showDot) {
        return
      }
      if (typeof props.count === 'number' && typeof props.maxCount === 'number') {
        return props.count > props.maxCount ? `${props.maxCount}+` : props.count
      }
      return props.count
    })
    return () => {
      return (
        <div class={'b-badge'}>
          {ctx.slots.default?.()}
          <div class={className.value} style={style.value}>
            {text.value}
          </div>
        </div>
      )
    }
  },
})
