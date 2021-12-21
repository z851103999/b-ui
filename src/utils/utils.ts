export const toNumber = (val: number | string | boolean | undefined | null): number => {
  if (val == null) return 0

  if (isString(val)) {
    val = parseFloat(val)
    val = Number.isNaN(val) ? 0 : val
    return val
  }

  if (isBool(val)) return Number(val)

  return val
}

export function kebabCase(str: string): string {
  const reg = /([^-])([A-Z])/g

  return str.replace(reg, '$1-$2').replace(reg, '$1-$2').toLowerCase()
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBool = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)

export const isURL = (val: string) => /^(http)|(\.*\/)/.test(val)

export const isRem = (value: unknown) => isString(value) && value.endsWith('rem')

// example 1 || 1px
export const isPx = (value: unknown) => (isString(value) && value.endsWith('px')) || isNumber(value)

// example 1%
export const isPercent = (value: unknown) => isString(value) && value.endsWith('%')

// example 1vw
export const isVw = (value: unknown) => isString(value) && value.endsWith('vw')

// example 1vh
export const isVh = (value: unknown) => isString(value) && value.endsWith('vh')

export const toPxNum = (value: unknown): number => {
  if (isNumber(value)) {
    return value
  }
  if (isPx(value)) {
    return +(value as string).replace('px', '')
  }
  if (isVw(value)) {
    return (+(value as string).replace('vw', '') * window.innerWidth) / 100
  }
  if (isVh(value)) {
    return (+(value as string).replace('vh', '') * window.innerHeight) / 100
  }
  if (isRem(value)) {
    const num = +(value as string).replace('rem', '')
    // root fontsize 大小
    const rootFontSize = window.getComputedStyle(document.documentElement).fontSize
    return num * parseFloat(rootFontSize)
  }
  if (isString(value)) {
    return toNumber(value)
  }
  return 0
}
/**
 * 判断尺寸单位
 * @param value
 */
export const toSizeUnit = (value: unknown) => {
  if (value == null) {
    return undefined
  }
  if (isPercent(value) || isVw(value) || isVh(value) || isRem(value)) {
    return value
  }
  return `${toPxNum(value)}px`
}
