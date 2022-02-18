<template>
  <app-type></app-type>
  <basic-tag></basic-tag>
  <checked-tag></checked-tag>
  <close-tag></close-tag>
  <border-tag></border-tag>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import BasicTag from './BasicTag.vue'
import CheckedTag from './CheckedTag.vue'
import CloseTag from './CloseTag.vue'
import BorderTag from './BorderTag.vue'

export default {
  name: 'Spacer',
  components: {
    // [Col.name]: Col,
    AppType,
    BasicTag,
    CheckedTag,
    CloseTag,
    BorderTag,
  },
}
</script>
