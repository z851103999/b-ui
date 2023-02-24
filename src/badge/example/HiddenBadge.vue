<template>
  <b-badge :hidden="isHidden" :count="6" status="danger" class="badge-item">未读消息</b-badge>
  <b-badge :hidden="isHidden" status="danger" show-dot class="badge-dot-item">
    <b-icon name="feedback"></b-icon>
  </b-badge>
  <b-button @click="hiddenNum">hidden</b-button>
</template>
<script setup lang="ts">
import BBadge from '../badge'
import { ref } from 'vue'
import BButton from '../../button/button'

const isHidden = ref(false)
const hiddenNum = () => {
  isHidden.value = !isHidden.value
}
</script>
