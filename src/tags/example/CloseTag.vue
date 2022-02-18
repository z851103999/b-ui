<template>
  <b-tag deletable @click="handleClose">默认tag</b-tag>
  <b-tag type="primary" deletable @click="handleClose">primary-tag2</b-tag>
  <b-tag color="#dd34b0" deletable @click="handleClose">自定义tag3</b-tag>
</template>

<script setup lang="ts">
import BTag from '../../tags/index'

const handleClose = () => {
  console.log('close')
}
</script>
