<template>
  <div>
    <b-alert type="success" :show-icon="true" :closeable="true" :dismiss-time="10000">10秒后消失</b-alert>
  </div>
</template>

<script>
import BAlert from '../Alert'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DismissTImeAlert',
  components: {
    BAlert,
  },
  setup() {},
})
</script>
