<template>
  <app-type></app-type>
  <b-row />
</template>

<script>
import Row from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'RowExample',
  components: {
    [Row.name]: Row,
    AppType,
  },
  setup() {
    watchLang(use)

    return {
      pack,
    }
  },
}
</script>
