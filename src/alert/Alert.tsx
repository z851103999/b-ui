import { defineComponent, onMounted, ref, Transition } from 'vue'
import AlertCloseIcon from './alert-close-icon'
import AlertTypeIcon from './alert-type-icon'
import { AlertProps, alertProps } from './alert-types'

import './alert.less'

export type AlertType = 'success' | 'danger' | 'warning' | 'info' | 'simple'

export default defineComponent({
  name: 'BAlert',
  props: alertProps,
  emits: ['close'],
  setup(props: AlertProps, { emit, slots }) {
    const hide = ref(false)
    const closing = ref(false)
    const alertEl = ref()
    let dismissTimer: undefined | number
    const close = (event?: MouseEvent) => {
      dismissTimer && clearTimeout(dismissTimer)
      closing.value = true
      emit('close', event)
    }

    const afterLeave = () => {
      dismissTimer = undefined
      hide.value = true
      closing.value = false
    }

    onMounted(() => {
      if (props.dismissTime) {
        dismissTimer = window.setTimeout(() => {
          close()
        }, props.dismissTime)
      }
    })

    return () => {
      const center: string = props.center ? 'b-alert-center' : ''
      // const close = closing.value ? `b-alert-${props.type}` : ''

      return !hide.value ? (
        <Transition name="b-alert" onAfterLeave={afterLeave}>
          <div
            ref={alertEl}
            v-show={!closing.value}
            class={[
              `b-alert b-alert-${props.type} 
              ${props.cssClass} 
              ${closing.value ? 'b-alter-close' : ''}`,
              center,
            ]}
          >
            {props.showIcon !== false && props.type !== 'simple' ? (
              <span class="b-alert-icon">
                <AlertTypeIcon type={props.type} />
              </span>
            ) : null}
            <div class="b-alert-content">
              <span>{slots.default?.()}</span>
              {props.closeable ? (
                <div class="b-alert-close-icon" onClick={close}>
                  <AlertCloseIcon />
                </div>
              ) : null}
            </div>
          </div>
        </Transition>
      ) : null
    }
  },
})
