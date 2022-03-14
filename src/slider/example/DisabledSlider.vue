<template>
  <div style="padding: 20px">
    <b-slider :min="minValue" :max="maxValue" v-model:modelValue="modelValue" :disabled="disabled"></b-slider>
  </div>
</template>
<script setup>
import BSlider from '../Slider'
import { ref } from 'vue'

const minValue = ref(0)
const maxValue = ref(20)
const modelValue = ref(3)
const disabled = ref(true)
</script>
