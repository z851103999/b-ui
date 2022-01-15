<template>
  <div>
    <b-breadcrumb :source="source"></b-breadcrumb>
  </div>
</template>

<script>
import BBreadcrumb from '../breadcrumb'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'DisabledButton',
  components: {
    BBreadcrumb,
  },
  setup() {
    const source = reactive([
      { title: 'ui', link: '/', linkType: 'routerLink', replace: true },
      { title: 'Breadcrumb', link: '/breadcrumb/', noNavigation: true },
    ])
    return {
      source,
    }
  },
})
</script>
