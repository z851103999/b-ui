<template>
  <b-button @click="showComponent()">基本用法</b-button>
</template>

<script setup>
import { ref } from 'vue'
import BButton from '../../button/button'
import NotificationService from '../notification-service'

const show = ref(false)
const showComponent = () => {
  NotificationService.open({
    title: '消息标题',
    content: '通知狂消息内容',
    duration: 5000,
    type: 'success',
    onClose: () => {
      console.log('closed')
    },
  })
}
</script>
