import { defineComponent, SetupContext, toRefs } from 'vue'
import Icon from '../icon'
import { ButtonProps, buttonProps } from './button-types'
import useButton from './use-button'

import './button.less'

export default defineComponent({
  name: 'BButton',
  props: buttonProps,
  emits: ['click'],
  setup(props: ButtonProps, ctx: SetupContext) {
    const { icon, disabled, loading } = toRefs(props)
    const { classes, iconClass } = useButton(props, ctx)

    const onClick = (event: MouseEvent) => {
      if (loading.value) {
        return
      }
      ctx.emit('click', event)
    }

    return () => {
      return (
        <button class={classes.value} disabled={disabled.value} onClick={onClick}>
          {icon.value && <Icon name={icon.value} size="12px" class={iconClass.value} />}
          <span class="button-content">{ctx.slots.default?.()}</span>
        </button>
      )
    }
  },
})
