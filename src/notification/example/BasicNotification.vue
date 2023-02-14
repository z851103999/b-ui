<template>
  <b-button @click="showComponent()">基本用法</b-button>
  <b-notification v-model="show" content="默认内容" title="标题" type="success" :duration="6000"
    >通知提示内容</b-notification
  >
</template>

<script setup>
import { ref } from 'vue'
import BButton from '../../button/button'
import BNotification from '../Notification'

const show = ref(false)
const showComponent = () => {
  show.value = true
}
</script>
