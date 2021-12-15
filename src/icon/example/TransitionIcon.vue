<template>
  <b-icon :name="name" :color="color" :transition="300" :size="30" @click="toggle" />
</template>

<script lang="ts" setup>
import BIcon from '../Icon'
import { Ref, ref } from 'vue'

const color = ref('#2979ff')

const name: Ref<string> = ref('zuozhixiang')
const toggle = () => {
  name.value = name.value === 'zuozhixiang' ? 'youzhixiang' : 'zuozhixiang'
}
</script>
