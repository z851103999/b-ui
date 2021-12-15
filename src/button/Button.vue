<template>
  <button :class="classObject" @click="clickHandler">
    <slot> </slot>
  </button>
</template>

<script setup lang="ts">
import { PropType, defineProps, computed, defineEmits } from 'vue'
import { ISize, IType } from '../utils/type'

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<IType>,
  },
  shape: {
    type: String as PropType<'circle'>,
  },
  size: {
    type: String as PropType<ISize>,
  },
})
const classObject = computed(() => {
  return [
    'b button',
    { action: props.active },
    props.type,
    { loading: props.loading },
    { disabled: props.disabled },
    props.shape,
    props.size,
  ]
})

const emits = defineEmits(['click'])

const clickHandler = (e: Event) => {
  emits('click', e)
}
</script>

<style lang="less">
@import './button.less';
</style>
