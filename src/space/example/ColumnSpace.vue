<template>
  <b-space direction="column" size="large">
    <b-button>Button1</b-button>
    <b-button>Button2</b-button>
    <b-button>Button3</b-button>
  </b-space>
</template>

<script>
import BButton from '../../button/Button.vue'
import BSpace from '../Space'

export default {
  name: 'ColorIcon',
  components: {
    BButton,
    BSpace,
  },
}
</script>
