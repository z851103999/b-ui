import { ExtractPropTypes } from 'vue'

export const sliderProps = {
  /**
   * 可选值，为true时禁止用户输入
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 可选值，最大值
   */
  max: {
    type: Number,
    default: 100,
  },
  /**
   * 可选值，最小值
   */
  min: {
    type: Number,
    default: 0,
  },
  /**
   *
   */
  modelValue: {
    type: Number,
    default: 0,
  },
  /**
   * 可选值，为true现实输入框
   */
  showInput: {
    type: Boolean,
    default: false,
  },
  /**
   * 可选值，滑动输入条的步长
   */
  step: {
    type: Number,
    default: 1,
  },
  /**
   * 可选，渲染Popover内容的函数，传入null不显示Popover弹出窗口
   */
  tipsRenderer: {
    type: String,
    default: '',
  },
} as const

export type SliderProps = ExtractPropTypes<typeof sliderProps>
