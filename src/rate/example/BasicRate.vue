<template>
  <b-rate v-model="valueReadonly" :read="true" />
  <br />
  <b-rate v-model="value" icon="coordinates"></b-rate>
</template>
<script>
import { ref, defineComponent } from 'vue'
import BRate from '../Rate'

export default defineComponent({
  components: {
    BRate,
  },
  setup() {
    const valueReadonly = ref(5)
    const value = ref(0)
    return {
      valueReadonly,
      value,
    }
  },
})
</script>
