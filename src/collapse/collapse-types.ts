import { ExtractPropTypes, PropType } from 'vue'

export type CollapseActiveData = number | string | Array<number | string>
export const collapseProps = {
  // 绑定面板
  modelValue: {
    type: [String, Number, Array] as PropType<CollapseActiveData>,
    default: '',
    required: true,
  },
  // 手风琴
  accordion: {
    type: Boolean,
    default: false,
  },
} as const

export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export const collapseItemProps = {
  // 面板标识
  name: {
    type: [String, Number] as PropType<string | number>,
    default: '',
    required: true,
  },
  // 面板标题
  title: {
    type: String,
    default: '',
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

export interface CollapseContext extends CollapseProps {
  collapseItemClick: (name: string | number) => void
}
