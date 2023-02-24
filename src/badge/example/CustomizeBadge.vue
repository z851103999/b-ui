<template>
  <b-badge :count="6 - 6" status="success" style="margin-right: 20px">
    <d-icon name="notice" />
  </b-badge>
  <b-badge :count="6 - 6" status="success" style="margin-right: 20px" :offset="[-10, 0]">
    <d-icon name="notice" />
  </b-badge>
</template>
<script setup lang="ts">
import BBadge from '../badge'
</script>
