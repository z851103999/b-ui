<template>
  <div>
    <b-alert type="success" :show-icon="true" :closeable="true" center>success</b-alert>
    <b-alert type="danger" :show-icon="true" :closeable="true" center>danger</b-alert>
    <b-alert type="warning" :show-icon="true" :closeable="true" center>warning</b-alert>
    <b-alert type="info" :show-icon="true" :closeable="true" center>info</b-alert>
    <b-alert type="simple" :show-icon="true" :closeable="true" center>simple</b-alert>
  </div>
</template>

<script>
import BAlert from '../Alert'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CenterAlert',
  components: {
    BAlert,
  },
  setup() {},
})
</script>
<style>
div:nth-child(1) {
  margin-top: 0;
}
</style>
