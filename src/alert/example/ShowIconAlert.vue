<template>
  <div>
    <b-alert type="success" :show-icon="true" :closeable="true">success</b-alert>
    <b-alert type="danger" :show-icon="true" :closeable="true">danger</b-alert>
    <b-alert type="warning" :show-icon="true" :closeable="true">warning</b-alert>
    <b-alert type="info" :show-icon="true" :closeable="true">info</b-alert>
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
