<script lang="ts" setup>
import BBadge from '../badge'
import BIcon from '../../icon'
</script>

<template>
  <b-badge status="danger" show-dot class="badge-dot-item">
    <b-icon name="feedback"></b-icon>
  </b-badge>
  <b-badge status="warning" show-dot class="badge-dot-item">
    <b-icon name="feedback"></b-icon>
  </b-badge>
  <b-badge status="waiting" show-dot class="badge-dot-item">
    <b-icon name="feedback"></b-icon>
  </b-badge>
  <b-badge status="info" show-dot class="badge-dot-item">
    <b-icon name="feedback"></b-icon>
  </b-badge>
</template>

<style>
.badge-dot-item {
  margin-right: 20px;
}
</style>
