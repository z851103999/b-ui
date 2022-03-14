<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item to="{ path: '/' }">Homepage</b-breadcrumb-item>
      <b-breadcrumb-item>
        <a href="/button">UI</a>
      </b-breadcrumb-item>
      <b-breadcrumb-item>
        <span>Breadcrumb</span>
      </b-breadcrumb-item>
    </b-breadcrumb>
  </div>
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
