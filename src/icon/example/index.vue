<template>
  <app-type />
  <size-icon />

  <app-type />
  <transtion-icon />
</template>

<script lang="ts">
import SizeIcon from './SizeIcon.vue'
import TranstionIcon from './TransitionIcon.vue'

export default {
  name: 'SizeIcon',
  components: {
    TranstionIcon,
    SizeIcon,
  },
}
</script>
