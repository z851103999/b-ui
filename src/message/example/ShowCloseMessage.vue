<template>
  <div class="demo-message">
		<b-button @click="closeIcon()">show Icon icon</b-button>
		<b-button @click="notClose()">not close</b-button>
  </div>
</template>

<script setup>

import BButton from '../../button/index'
import Message from "../index";

function closeIcon() {
	Message({
		type: 'success',
		message: '显示关闭按钮',
		showClose:true
  })
}

function notClose() {
	Message({
		type: 'info',
		message: '必须手动关闭，duration:0 showClose:true',
		showClose: true,
		duration:0
	})
}

</script>
<style>
.demo-message>button {
  margin-right: 10px;
}
</style>
