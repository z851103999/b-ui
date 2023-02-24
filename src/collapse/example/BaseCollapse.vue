<template>
  <div>
    <b-collapse v-model="collapseValue">
      <b-collapse-item title="Immersive" name="immersive">
        <div>基础用法基础用法基础用法基础用法基础用法</div>
      </b-collapse-item>
      <b-collapse-item title="Flexible" name="flexible">
        <div>基础用法基础用法基础用法基础用法基础用法</div>
        <div>基础用法基础用法基础用法基础用法基础用法</div>
      </b-collapse-item>
      <b-collapse-item title="Simple" name="simple" disabled>
        <div>基础用法基础用法基础用法基础用法基础用法</div>
        <div>基础用法基础用法基础用法基础用法基础用法</div>
        <div>基础用法基础用法基础用法基础用法基础用法</div>
      </b-collapse-item>
    </b-collapse>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import BCollapse from '../collapse'
import BCollapseItem from '../collapse-item'

export default defineComponent({
  components: { BCollapse, BCollapseItem },
  setup() {
    const collapseValue = ref(['immersive'])
    return {
      collapseValue,
    }
  },
})
</script>
