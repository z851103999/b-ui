import type { Slots, VNode } from 'vue'

export function getPropsSlot(slots: Slots, props: unknown, prop = 'default'): VNode | string | undefined {
  // console.log(props,prop)
  return props[prop] ?? slots[prop]?.()
}
