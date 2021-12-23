<template>
  <b-space justify="end" style="margin-bottom: 20px">
    <b-button type="primary">button1</b-button>
    <b-button type="primary">button1</b-button>
  </b-space>
  <b-space justify="space-around" style="margin-bottom: 20px">
    <b-button type="positive">button1</b-button>
    <b-button type="positive">button1</b-button>
  </b-space>
  <b-space justify="center" style="margin-bottom: 20px">
    <b-button type="negative">button1</b-button>
    <b-button type="negative">button1</b-button>
  </b-space>
  <b-space justify="space-between" style="margin-bottom: 20px">
    <b-button type="basic">button1</b-button>
    <b-button type="basic">button1</b-button>
  </b-space>
</template>

<script>
import BButton from '../../button/Button.vue'
import BSpace from '../Space'

export default {
  name: 'FlexSpace',
  components: {
    BButton,
    BSpace,
  },
}
</script>
