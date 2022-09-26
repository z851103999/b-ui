import { computed } from 'vue'
import type { SetupContext } from 'vue'
import { ButtonProps, UseButtonReturnType } from './button-types'

export default function useButton(props: ButtonProps, ctx: SetupContext): UseButtonReturnType {
  const hasContent = computed(() => ctx.slots.default)
  const colorMap = {
    solid: 'primary',
    outline: 'secondary',
    text: 'secondary',
  }
  const defaultColor = colorMap[props.variant]

  const classes = computed(() => ({
    'b-btn': true,
    [`b-btn-${props.variant}`]: true,
    [`b-btn-${props.variant}-${props.color || defaultColor}`]: true,
    [`b-btn-${props.size}`]: true,
    'b-btn-icon-wrap': props.icon,
    'b-btn-icon': props.icon && !hasContent.value && props.variant !== 'solid',
  }))
  const iconClass = computed(() => {
    if (!props.icon) {
      return
    }
    const origin = 'b-icon-fix icon'
    if (hasContent.value) {
      return `${origin} clear-right-5`
    }
    return origin
  })

  return { classes, iconClass }
}
