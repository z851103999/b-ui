<template>
  <b-rate v-model="valueReadonly"  :read="true"  />
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

    return {
      valueReadonly,
    };
	}
});
</script>