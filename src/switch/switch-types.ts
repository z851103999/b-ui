import { ExtractPropTypes, PropType } from 'vue'

export const switchProps = {
  size: {
    type: String as PropType<'small' | 'middle' | 'large'>,
    default: 'middle',
  },
  color: {
    type: String,
    default: undefined,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // 更改前
  beforeChange: {
    type: Function as PropType<(v: boolean) => boolean | Promise<boolean>>,
    default: undefined,
  },
  change: {
    type: Function as PropType<(v: boolean) => void>,
    default: undefined,
  },
  'onUpdate:check': {
    type: Function as PropType<(v: boolean) => void>,
    default: undefined,
  },
} as const

export type switchProps = ExtractPropTypes<typeof switchProps>
