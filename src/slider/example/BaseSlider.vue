<template>
  <div style="padding: 20px">
    <b-slider :min="minValue" :max="maxValue"></b-slider>
  </div>
</template>
<script setup>
import BSlider from '../Slider'
import { ref } from 'vue'

const minValue = ref(0)
const maxValue = ref(20)
</script>
