<template>
  <b-switch v-model:checked="checkedSmall" size="small" :disabled="true"></b-switch>
</template>
<script setup>
import BSwitch from '../Switch'
import { ref } from 'vue'

const checkedSmall = ref(false)
</script>
