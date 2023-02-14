import { computed, defineComponent, PropType, toRefs } from 'vue'
import { SuccessIcon, WarningIcon, InfoIcon, ErrorIcon } from './notification-icons'
import { NotificationType } from './notification-types'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<NotificationType>,
      default: 'normal',
    },
  },
  setup(props) {
    const { type } = toRefs(props)
    const classes = computed(() => ({
      'b-notification__image': true,
      [`b-notification__image-${type.value}`]: true,
    }))
    return () => (
      <span class={classes.value}>
        {type.value &&
          type.value !== 'normal' &&
          ((type.value === 'success' && <SuccessIcon />) ||
            (type.value === 'info' && <InfoIcon />) ||
            (type.value === 'warning' && <WarningIcon />) ||
            (type.value === 'error' && <ErrorIcon />))}
      </span>
    )
  },
})
