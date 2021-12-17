<template>
  <b-row style="margin-bottom: 10px" gutter="15">
    <b-col span="16">
      <div class="ex-col"></div>
    </b-col>
    <b-col span="8">
      <div class="ex-col"></div>
    </b-col>
  </b-row>
  <b-row style="margin-bottom: 10px" gutter="15">
    <b-col span="8">
      <div class="ex-col"></div>
    </b-col>
    <b-col span="8">
      <div class="ex-col"></div>
    </b-col>
    <b-col span="4">
      <div class="ex-col"></div>
    </b-col>
    <b-col span="4">
      <div class="ex-col"></div>
    </b-col>
  </b-row>
  <b-row gutter="15">
    <b-col span="8">
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
