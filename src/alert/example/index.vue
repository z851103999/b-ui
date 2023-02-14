<template>
  <app-type>基本使用</app-type>
  <alert />
  <ShowIconAlertVue />
</template>

<script>
import Alert from './Alert.tsx'
import ShowIconAlertVue from './ShowIconAlert.vue'

export default {
  components: {
    Alert,
    ShowIconAlertVue,
  },
}
</script>
