<template>
  <b-rate v-model="valueReadonly"  :allow-half="true" @change="change" />
</template>
<script>
import { ref, defineComponent } from 'vue';
import BRate from '../Rate'

export default defineComponent({
	components: {
		BRate
	},
  setup() {
    const valueReadonly = ref(5);

    const change = (val) => {
      console.log(val);
    };


    return {
      valueReadonly,
      change
    };
	}
});
</script>