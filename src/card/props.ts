import { PropType } from 'vue'

export type CardFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

function fitValidator(fit: string) {
  return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(fit)
}

export const props = {
  /**
   * 图片地址
   */
  src: {
    type: String,
  },
  /**
   * 填充模式，可选值 fill contain cover none scale-down
   */
  fit: {
    type: String as PropType<CardFit>,
    validator: fitValidator,
    default: 'cover',
  },
  /**
   * 图片高度
   */
  height: {
    type: [String, Number],
  },
  /**
   * 替代文本
   */
  alt: {
    type: String,
  },
  /**
   * 卡片标题
   */
  title: {
    type: String,
  },
  /**
   * 头部
   */
  header: {
    type: String,
  },
  /**
   * 卡片副标题
   */
  subtitle: {
    type: String,
  },
  /**
   * 卡片描述
   */
  description: {
    type: String,
  },
  /**
   * 卡片阴影
   */
  shadow: {
    type: Boolean,
  },
  /**
   * 点击卡片触发 event
   */
  onClick: {
    type: Function as PropType<(e: Event) => void>,
  },
}
