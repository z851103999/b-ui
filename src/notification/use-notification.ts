import { computed, watch } from 'vue'
import type { ComputedRef } from 'vue'
import { NotificationProps, EmitEventFn, VoidFn } from './notification-types'

export function useNotification(props: NotificationProps): { classes: ComputedRef<Record<string, boolean>> } {
  const classes = computed(() => ({
    'b-notification-item-container': true,
    [`b-notification-message-${props.type}`]: true,
  }))

  return { classes }
}

export function useEvent(
  props: NotificationProps,
  emit: EmitEventFn
): { interrupt: VoidFn; removeReset: VoidFn; close: VoidFn; handleDestroy: VoidFn } {
  let timer: any = null
  let timestamp: number
  // 关闭
  const close = () => {
    clearTimeout(timer)
    timer = null
    props.onClose?.()
    emit('update:modelValue', false)
  }
  // 中断
  const interrupt = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  // 移除重置
  const removeReset = () => {
    if (!props.modelValue) {
      const remainTime = props.duration - (Date.now() - timestamp)
      timer = setTimeout(close, remainTime)
    }
  }
  // 处理销毁
  const handleDestroy = () => {
    emit('destroy')
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        timestamp = Date.now()
        if (props.duration) {
          timer = setTimeout(close, props.duration)
        }
      }
    }
  )

  return { interrupt, removeReset, close, handleDestroy }
}
