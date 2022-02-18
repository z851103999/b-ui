import type { PropType, ExtractPropTypes } from 'vue'

export type tagType = 'primary' | 'success' | 'warning' | 'danger'
/** @ty/** @type {*} */
export const tagProps = {
  /**
   * 标签类型 success info warning danger
   */
  type: {
    type: String as PropType<tagType>,
    default: '',
  },
  /**
   * 标签颜色
   */
  color: {
    type: String as PropType<string>,
    default: '',
  },
  /**
   * 标签选中的初始化状态
   */
  checked: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * 标签是否可以删除
   */
  deletable: {
    type: Boolean as PropType<boolean>,
    default: false,
  } as const,
  /**
   * 设置鼠标悬浮时 title 的显示内容
   */
  titleContent: {
    type: String as PropType<string>,
    default: '',
  },
  /**
   * 关闭按钮样式 默认为X 另一个为带有圆圈X
   */
  closeStyle: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * 边框的显示与隐藏
   */
  borderStyle: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
}

export type TagProps = ExtractPropTypes<typeof tagProps>
