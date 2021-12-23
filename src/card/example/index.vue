<template>
  <app-type></app-type>
  <title-card />

  <app-type></app-type>
  <image-card></image-card>
</template>

<script>
import TitleCard from './TitleCard'
import ImageCard from './ImageCard.vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'

export default {
  name: 'CardExample',
  components: {
    TitleCard,
    ImageCard,
    AppType,
  },
  setup() {},
}
</script>
