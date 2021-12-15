<template>
  <div>
    <b-button size="large" style="margin-right: 5px">large</b-button>
    <b-button style="margin-right: 5px">default</b-button>
    <b-button size="medium" style="margin-right: 5px">medium</b-button>
    <b-button size="small" style="margin-right: 5px">small</b-button>
    <b-button size="tiny" style="margin-right: 5px">tiny</b-button>
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
