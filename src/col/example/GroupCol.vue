<template>
  <b-row style="margin-bottom: 10px" gutter="15" tag="div">
    <b-col :span="24" tag="div">
      <div class="ex-col"></div>
    </b-col>
  </b-row>
  <b-row gutter="15" style="margin-bottom: 10px" tag="div">
    <b-col :span="8" tag="div">
      <div class="ex-col"></div>
    </b-col>
  </b-row>
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
.ex-col {
  border-radius: 5px;
  background-color: #0070f3;
  padding: 8pt;
}
</style>
