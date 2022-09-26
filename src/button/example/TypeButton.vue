<template>
  <div>
    <b-button variant="solid" color="primary">primary</b-button>
    <b-button variant="solid" color="secondary" style="margin-left: 5px">secondary</b-button>
    <b-button variant="solid" color="danger" style="margin-left: 5px">danger</b-button>
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
