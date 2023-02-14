import { defineComponent, toRefs, Transition } from 'vue'
import { notificationProps, NotificationProps } from './notification-types'
import Close from './notification-icon-close'
import TypeIcon from './notification-image'
import { useNotification, useEvent } from './use-notification'
import './notification.less'

export default defineComponent({
  name: 'BNotification',
  props: notificationProps,
  emits: ['update:modelValue', 'destroy'],
  setup(props: NotificationProps, { emit, slots }) {
    const { modelValue, title, type } = toRefs(props)
    const { classes } = useNotification(props)
    const { interrupt, removeReset, close, handleDestroy } = useEvent(props, emit)

    return () => (
      <Transition name="notification-fade" onAfterLeave={handleDestroy}>
        {modelValue.value && (
          <div class="b-notification">
            <div class={classes.value} onMouseenter={interrupt} onMouseleave={removeReset}>
              <div class="b-notification__item">
                <Close onClick={close} />
                {title.value && <TypeIcon type={type.value} />}
                <div class="b-notification__message">
                  <span class="b-notification__title">{title.value}</span>
                  <span class="b-notification__content">{slots.default?.()}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    )
  },
})
