import { ExtractPropTypes, PropType } from 'vue'

type RateStatusType = PropType<'success' | 'warning' | 'error'>

export const rateProps = {
  modelValue: {
    type: Number,
  },
  /**
   * 只读模式
   */
  read: {
    type: Boolean,
    default: false,
  },
  /**
   * 设置等级数
   */
  count: {
    type: Number,
    default: 5,
  },
  /**
   * 当前评分的类型
   */
  type: {
    type: String as RateStatusType,
    default: '',
  },
  /**
   * 星星的颜色
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 图标库内图标
   */
  icon: {
    type: String,
    default: '',
  },
  /**
   * 自定义图标
   */
  character: {
    type: String,
    default: '',
  },
  /**
   * 是否允许半选
   */
  allowHalf: {
    type: Boolean,
    default: false,
  },
  /**
   * 数值改变触发
   */
  onChange: {
    type: Function as PropType<(value: number) => void>,
    default: undefined,
  },
  onTouched: {
    type: Function as PropType<() => void>,
    default: undefined,
  },
} as const

export type RateProps = ExtractPropTypes<typeof rateProps>
