<template>
  <div>
    <b-row style="margin-bottom: 10px" gutter="15" v-for="temp in 2" :key="temp">
      <b-col v-for="(ex, idx) in 3" :key="idx">
        <div class="ex-block"></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BCol from '../Col.tsx'
import BRow from '../../row/Row.tsx'

export default {
  name: 'ColorIcon',
  components: {
    BRow,
    BCol,
  },
}
</script>

<style scoped>
.ex-block {
  border-radius: 5px;
  background-color: #0070f3;
  padding: 8pt;
}
</style>
