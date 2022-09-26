import type { ComputedRef, ExtractPropTypes, PropType } from 'vue'

export type IButtonVariant = 'solid' | 'outline' | 'text'
export type IButtonColor = 'secondary' | 'primary' | 'danger'
export type IButtonSize = 'lg' | 'md' | 'sm' | 'xs'

export const buttonProps = {
  /**
   * 可选 按钮形态
   */
  variant: {
    type: String as PropType<IButtonVariant>,
    default: 'outline',
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'md',
  },
  color: {
    type: String as PropType<IButtonColor>,
  },
  icon: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export interface UseButtonReturnType {
  classes: ComputedRef<{ [key: string]: string | boolean }>
  iconClass: ComputedRef<string | undefined>
}
