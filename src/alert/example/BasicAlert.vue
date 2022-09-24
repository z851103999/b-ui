<template>
  <div>
    <b-alert type="success" :show-icon="false" :closeable="false">success</b-alert>
    <b-alert type="danger" :show-icon="false" :closeable="false">danger</b-alert>
    <b-alert type="warning" :show-icon="false" :closeable="false">warning</b-alert>
    <b-alert type="info" :show-icon="false" :closeable="false">info</b-alert>
    <b-alert type="simple" :show-icon="false" :closeable="false">simple</b-alert>
  </div>
</template>

<script>
import BAlert from '../Alert'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BasicAlert',
  components: {
    BAlert,
  },
  setup() {},
})
</script>
<style>
div {
  margin-top: 3px;
}
div:nth-child(1) {
  margin-top: 0px;
}
</style>
