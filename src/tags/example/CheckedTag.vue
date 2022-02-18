<template>
  <b-tag type="primary" :checked="isChecked" @click="tagClick">点击变化</b-tag>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BTag from '../../tags/index'

const isChecked = ref<boolean>(true)
const tagClick = () => {
  isChecked.value = !isChecked.value
}
</script>
