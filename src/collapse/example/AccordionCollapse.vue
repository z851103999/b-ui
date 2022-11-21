<template>
  <div>
    <b-collapse v-model="collapseAccordionValue" accordion>
      <b-collapse-item title="手风琴效果一" name="immersive">
        <div>
          手风琴效果一手风琴效果一手风琴效果一手风琴效果一手风琴效果一
        </div>
      </b-collapse-item>
      <b-collapse-item title="手风琴效果二" name="flexible">
        <div>
          手风琴效果一手风琴效果一手风琴效果一手风琴效果一手风琴效果一
        </div>
      </b-collapse-item>
      <b-collapse-item title="手风琴效果三" name="simple">
        <div>
          手风琴效果一手风琴效果一手风琴效果一手风琴效果一手风琴效果一
        </div>
      </b-collapse-item>
    </b-collapse>
  </div>
</template>
<script>
import BCollapse from "../collapse";
import BCollapseItem from '../collapse-item'
import {defineComponent, ref} from "vue";

export default defineComponent({
  components: {BCollapse, BCollapseItem},
  setup() {
    const collapseAccordionValue = ref(`immersive`)
    return {
      collapseAccordionValue
    }
  }
})
</script>
