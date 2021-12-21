import { isArray, isNumber, isString } from '../utils/utils'
import { PropType } from 'vue'

// align
export type SpaceAlign = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'initial' | 'inherit'
// 方向
export type SpaceDirection = 'row' | 'column'
// justify
export type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'
// 大小
export type SpaceInternalSize = 'mini' | 'small' | 'normal' | 'large'

export type SpaceSize = SpaceInternalSize | number | string | [number | string, number | string]
// 尺寸验证 boolean
export const internalSizeValidator = (size: any) => ['mini', 'small', 'normal', 'large'].includes(size)

export const sizeValidator = (size: any): boolean => {
  return internalSizeValidator(size) || isArray(size) || isNumber(size) || isString(size)
}

export const justifyValidator = (justify: string): boolean => {
  return ['start', 'end', 'center', 'space-around', 'space-between'].includes(justify)
}

export const props = {
  align: {
    type: String as PropType<SpaceAlign>,
  },
  size: {
    type: [String, Number, Array] as PropType<SpaceSize>,
    default: 'normal',
    validator: sizeValidator,
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<SpaceDirection>,
    default: 'row',
  },
  justify: {
    type: String as PropType<SpaceJustify>,
    default: 'start',
    validator: justifyValidator,
  },
  inline: {
    type: Boolean,
    default: false,
  },
}
