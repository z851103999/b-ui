import { computed } from 'vue'
import { TagProps } from '../props'

export default function (props: TagProps) {
  return computed(() => {
    const { type, color, deletable } = props
    return `b-tag b-tag-${type || (color ? 'colorful' : '') || 'default'} ${deletable ? 'b-tag-deletable' : ''}`
  })
}
