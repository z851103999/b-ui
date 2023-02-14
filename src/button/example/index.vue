<template>
  <app-type>基本使用</app-type>
  <basic-button />

  <type-button></type-button>
</template>

<script>
import Button from '../Button'

import BasicButton from './BasicButton'
import TypeButton from './TypeButton'

export default {
  components: {
    TypeButton,
    [Button.name]: Button,
    BasicButton,
  },
}
</script>
