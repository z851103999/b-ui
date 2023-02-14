<template>
  <app-type></app-type>
  <column-space />

  <app-type></app-type>
  <size-space></size-space>

  <app-type></app-type>
  <flex-space></flex-space>
</template>

<script>
import ColumnSpace from './ColumnSpace.vue'
import SizeSpace from './SizeSpace.vue'
import FlexSpace from './FlexSpace'

export default {
  components: {
    FlexSpace,
    // [Col.name]: Col,
    ColumnSpace,
    SizeSpace,
  },
}
</script>
