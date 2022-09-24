import { defineComponent, onMounted, ref, Transition } from 'vue'
import AlertCloseIcon from './alert-close-icon'
import AlertTypeIcon from './alert-type-icon'

import './alert.less'

export type AlertType = 'success' | 'danger' | 'warning' | 'info' | 'simple'

export default defineComponent({
  name: 'BAlert',
  props: {
    /**
     *  警告类型
     */
    type: {
      type: String as () => AlertType,
      default: 'info',
    },
    /**
     * 自定义class
     */
    cssClass: {
      type: String,
      default: '',
    },
    /**
     * 可选关闭按钮
     */
    closeable: {
      type: Boolean,
      default: true,
    },
    /**
     * 可选 默认类型图标
     */
    showIcon: {
      type: Boolean,
      default: true,
    },
    /**
     * 自动关闭alert的延时时间 ms
     */
    dismissTime: {
      type: Number,
      default: 0,
    },
  },
  emits: ['close'],
  setup(props, { emit, slots }) {
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
      return !hide.value ? (
        <Transition name="b-alert" onAfterLeave={afterLeave}>
          <div
            ref={alertEl}
            v-show={!closing.value}
            class={`b-alert b-alert-${props.type} 
              ${props.cssClass} 
              ${closing.value ? 'b-alter-close' : ''}`}
          >
            {/* 是否显示提示图标 */}
            {props.showIcon !== false && props.type !== 'simple' ? (
              <span class="b-alert-icon">
                <AlertTypeIcon type={props.type}></AlertTypeIcon>
              </span>
            ) : null}
            {/* 关闭图标情况下 */}
            {props.closeable ? (
              <div class="b-close" onClick={close}>
                <AlertCloseIcon />
              </div>
            ) : null}
            {slots.default?.()}
          </div>
        </Transition>
      ) : null
    }
  },
})
