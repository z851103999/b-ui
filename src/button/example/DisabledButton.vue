<template>
  <div>
    <b-button variant="solid">Solid</b-button>
    <b-button style="margin-left: 5px">Outline</b-button>
    <b-button style="margin-left: 5px" variant="text">text</b-button>
  </div>
  <div style="margin-top: 10px">
    <b-button variant="solid" disabled>Solid</b-button>
    <b-button style="margin-left: 5px" disabled>Outline</b-button>
    <b-button style="margin-left: 5px" variant="text" disabled>text</b-button>
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
