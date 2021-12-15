<template>
  <app-type>基本使用</app-type>
  <type-button />

  <app-type>修改大小</app-type>
  <size-button />

  <app-type>禁用</app-type>
  <disabled-button />

  <app-type>loading</app-type>
  <loading-button></loading-button>

  <!--  <app-type></app-type>-->
  <!--  <icon-button></icon-button>-->
</template>

<script>
import Button from '../Button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import TypeButton from './TypeButton'
import SizeButton from './SizeButton'
import DisabledButton from './DisabledButton'
import LoadingButton from './LoadingButton'

export default {
  components: {
    DisabledButton,
    TypeButton,
    SizeButton,
    [Button.name]: Button,
    AppType,
    LoadingButton,
    // IconButton
  },
}
</script>
