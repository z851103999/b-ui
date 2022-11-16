<template>
  <div class="demo-message">
    <b-button @click="closeBordered">show bordered</b-button>
    <b-button @click="closeShadow">close shadow</b-button>
    <b-button @click="closeShadowBorder">close shadow border</b-button>
  </div>
</template>

<script setup>
import BButton from '../../button/index'
import Message from '../index'

function closeBordered() {
  Message({
    type: 'success',
    message: 'close border',
    bordered: false,
  })
}

function closeShadow() {
  Message({
    type: 'info',
    message: 'close shadow',
    shadow: false,
  })
}

function closeShadowBorder() {
  Message({
    type: 'error',
    message: 'close shadow border',
    shadow: false,
    bordered: false,
  })
}
</script>
<style>
.demo-message > button {
  margin-right: 10px;
}
</style>
