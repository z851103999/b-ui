<template>
  <b-switch v-model:checked="checkedSmall" size="small">
    <template #checkedContent>开</template>
    <template #uncheckedContent>关</template>
  </b-switch>
</template>
<script setup>
import BSwitch from '../Switch'
import { ref } from 'vue'

const checkedSmall = ref(false)
</script>
