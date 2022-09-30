<template>
  <b-rate v-model="value1" type="success" :count="5" icon="coordinates" />
  <br />
  <b-rate v-model="value1" type="warning" :count="5" icon="coordinates" />
  <br />
  <b-rate v-model="value1" type="error" :count="5" icon="coordinates" />
</template>
<script>
import { ref, defineComponent } from 'vue';
import BRate from '../Rate'

export default defineComponent({
  components: {
    BRate
  },
  setup() {
    const value1 = ref(3.5);
    const value2 = ref(2);
    const value3 = ref(3);

    return {
      value1,
      value2,
      value3,
    };
  },
});
</script>