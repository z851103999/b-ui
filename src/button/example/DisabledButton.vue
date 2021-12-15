<template>
  <div>
    <b-button style="margin-right: 5px">Disabled</b-button>
    <b-button disabled style="margin-right: 5px">Disabled</b-button>
    <b-button type="primary" style="margin-right: 5px">Disabled</b-button>
    <b-button disabled type="primary">Disabled</b-button>
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
