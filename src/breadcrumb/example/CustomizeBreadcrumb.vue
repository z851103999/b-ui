<template>
  <b-breadcrumb separator-icon=">">
    <b-breadcrumb-item>
      <a routerLink="/button">button</a>
    </b-breadcrumb-item>
    <b-breadcrumb-item>
      <span>Breadcrumb</span>
    </b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
import BBreadcrumb from '../breadcrumb'
import BBreadcrumbItem from '../breadcrumb-item'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DisabledButton',
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
  },
  setup() {},
})
</script>
