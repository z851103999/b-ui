<template>
  <button :class="classObject" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue'
import { ButtonSize, ButtonType } from './props'

// eslint-disable-next-line no-undef
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
    type: String as PropType<ButtonType>,
  },
  shape: {
    type: String as PropType<'circle'>,
  },
  size: {
    type: String as PropType<ButtonSize>,
  },
})
// eslint-disable-next-line no-undef
const emits = defineEmits(['click'])

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

const clickHandler = (e: Event) => {
  emits('click', e)
}
</script>

<style lang="less">
@import './button.less';
</style>
