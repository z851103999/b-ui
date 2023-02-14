<template>
  <app-type></app-type>
  <b-row />
</template>

<script>
import Row from '..'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'RowExample',
  components: {
    [Row.name]: Row,
  },
  setup() {
    watchLang(use)

    return {
      pack,
    }
  },
}
</script>
