<template>
  <component
    class="b-icon iconfont"
    :is="isURL(name) ? 'img' : 'i'"
    :class="[
      `${namespace}--set`,
      isURL(name) ? 'b-icon__image' : `${namespace}-${nextName}`,
      shrinking ? 'b-icon__shrinking' : null,
    ]"
    :style="{
      color,
      transaction: `transform ${toNumber(transition)}ms`,
      width: isURL(name) ? toSizeUnit(size) : null,
      height: isURL(name) ? toSizeUnit(size) : null,
      fontSize: toSizeUnit(size),
    }"
    :src="isURL(name) ? nextName : null"
    @click="onClick"
  />
</template>

<script lang="ts" setup>
import { nextTick, PropType, ref, Ref, watch } from 'vue'
import { isURL, toNumber, toSizeUnit } from '../utils/utils'

const props = defineProps({
  /**
   * 图标名称
   */
  name: {
    type: String,
  },
  /**
   * 尺寸
   */
  size: {
    type: [Number, String],
  },
  /**
   * 图标颜色
   */
  color: {
    type: String,
  },
  /**
   * 图标命名空间
   */
  namespace: {
    type: String,
    default: 'b-icon',
  },
  /**
   * 过度动画时间
   */
  transition: {
    type: [Number, String],
    default: 0,
  },
  /**
   * 点击图标触发
   */
  onClick: {
    type: Function as PropType<(event: Event) => void>,
  },
})

const nextName: Ref<string | undefined> = ref('')
const shrinking: Ref<boolean> = ref(false)

const handleNameChange = async (newName: string | undefined, oldName: string | undefined) => {
  const { transition } = props
  if (oldName == null || toNumber(transition) === 0) {
    nextName.value = newName
    return
  }
  shrinking.value = true
  await nextTick()
  setTimeout(() => {
    oldName != null && (nextName.value = newName)
    shrinking.value = false
  }, toNumber(transition))
}

watch(() => props.name, handleNameChange, {
  immediate: true,
})
</script>

<style lang="less">
@import 'icon';
</style>
