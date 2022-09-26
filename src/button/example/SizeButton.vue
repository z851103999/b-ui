<template>
  <div>
    <b-button size="ms" color="primary">small</b-button>
    <b-button style="margin-left: 5px" color="primary">medium</b-button>
    <b-button size="lg" style="margin-left: 5px" color="primary">large</b-button>
  </div>
</template>

<script>
import BButton from '../Button'

export default {
  name: 'SizeButton',
  components: {
    BButton,
  },
}
</script>
