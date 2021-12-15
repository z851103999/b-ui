<template>
  <div>
    <b-button type="primary" style="margin-right: 5px">Primary</b-button>
    <b-button type="positive" style="margin-right: 5px">Positive</b-button>
    <b-button type="negative" style="margin-right: 5px">Negative</b-button>
    <b-button type="basic" style="margin-right: 5px">Basic</b-button>
  </div>
</template>

<script>
import BButton from '../Button'

export default {
  name: 'TypeButton',
  components: {
    BButton,
  },
}
</script>
