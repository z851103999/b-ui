<template>
  <div class="demo-message">
    <b-button  @click="open('normal')">normal</b-button>
    <b-button  @click="open('success')">success</b-button>
    <b-button  @click="open('error')">error</b-button>
    <b-button  @click="open('warning')">warning</b-button>
    <b-button  @click="open('info')">info</b-button>
  </div>
</template>

<script setup>

import BButton from '../../button/index'
import Message from "../index";

function open(type) {
  Message({
    type,
    message: '测试',
    duration: 3000,
    shadow: false
  })
}
</script>
<style>
.demo-message>button {
  margin-right: 10px;
}
</style>
