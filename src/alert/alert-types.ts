import { ExtractPropTypes } from 'vue'

export type AlertType = 'success' | 'danger' | 'warning' | 'info' | 'simple'

export const alertProps = {
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
  /**
   * 居中
   */
  center: {
    type: Boolean,
    default: false,
  },
} as const

export type AlertProps = ExtractPropTypes<typeof alertProps>
