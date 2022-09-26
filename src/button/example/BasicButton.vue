<template>
  <div>
    <b-button variant="solid">Solid</b-button>
    <b-button style="margin-left: 5px">Outline</b-button>
    <b-button style="margin-left: 5px" variant="text">text</b-button>
  </div>
</template>

<script>
import BButton from '../Button'

export default {
  name: 'DisabledButton',
  components: {
    BButton,
  },
}
</script>
