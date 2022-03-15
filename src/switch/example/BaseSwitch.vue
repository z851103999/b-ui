<template>
  <b-switch v-model:checked="checkedSmall" size="small"></b-switch>
  <b-switch v-model:checked="checkedMiddle" size="middle"></b-switch>
  <b-switch v-model:checked="checkedLarge" size="large" @change="change"></b-switch>
</template>
<script setup>
import BSwitch from '../Switch'
import { ref } from 'vue'

const checkedSmall = ref(false)
const checkedMiddle = ref(true)
const checkedLarge = ref(false)

function change(event) {
  if (event) {
    console.log('打开开关')
  } else {
    console.log('关闭开关')
  }
}
</script>
