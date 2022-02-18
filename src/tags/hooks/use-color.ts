import { computed } from 'vue'
import { TagProps } from '../props'

export default function (props: TagProps) {
  return computed(() => {
    const { color, type } = props
    if (!type && color) return color
    const typeMap = {
      primary: '#5e7ce0',
      success: '#50d4ab',
      warning: '#fac20a',
      danger: '#f66f6a',
    }
    return typeMap[type]
  })
}
