<template>
  <app-type></app-type>
  <column-space />

  <app-type></app-type>
  <size-space></size-space>

  <app-type></app-type>
  <flex-space></flex-space>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import ColumnSpace from './ColumnSpace.vue'
import SizeSpace from './SizeSpace.vue'
import FlexSpace from './FlexSpace'

export default {
  name: 'Spacer',
  components: {
    FlexSpace,
    // [Col.name]: Col,
    AppType,
    ColumnSpace,
    SizeSpace,
  },
}
</script>
