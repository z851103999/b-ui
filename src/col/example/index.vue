<template>
  <app-type></app-type>
  <group-col />

  <app-type></app-type>
  <group-row></group-row>

  <app-type></app-type>
  <combination></combination>

  <app-type></app-type>
  <flex-col></flex-col>
</template>

<script>
import GroupCol from './GroupCol.vue'
import GroupRow from './GroupRow.vue'
import Combination from './Combination.vue'
import FlexCol from './FlexCol.vue'

export default {
  name: 'ColExample',
  components: {
    // [Col.name]: Col,
    GroupCol,
    GroupRow,
    Combination,
    FlexCol,
  },
}
</script>
