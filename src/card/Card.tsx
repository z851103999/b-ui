import { computed, defineComponent, toRefs } from 'vue'
import { cardProps, CardProps } from './card-types'
import './card.less'

export default defineComponent({
  name: 'BCard',
  props: cardProps,
  setup(props: CardProps, { slots }) {
    const { align, src } = toRefs(props)
    const alignClass = computed(() => {
      return {
        'b-card__actions': true,
        [`b-card__action-align-${align.value}`]: align.value !== 'start',
      }
    })
    return () => (
      <div class={['card-container', 'b-card', `b-card__shadow-${props.shadow}`]}>
        {slots.default?.()}
        <div class="b-card__header">
          {slots.avatar?.() ? <div class="b-card__avatar">{slots.avatar?.()}</div> : ''}
          <div>
            <div class={'b-card__title'}>{slots.title?.()}</div>
            <div class={`b-card__subtitle`}>{slots.subtitle?.()}</div>
          </div>
        </div>
        {src.value !== '' ? <img src={src.value} alt="" class="b-card__meta" /> : ''}
        <div class="b-card__content">{slots.content?.()}</div>
        <div class={alignClass.value}>{slots.actions ? slots.actions?.() : ''}</div>
      </div>
    )
  },
})
