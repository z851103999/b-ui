<script lang="ts" setup>
import BBadge from '../badge'
</script>

<template>
  <b-badge :count="644444" status="danger" class="badge-item">未读消息</b-badge>
  <b-badge :count="99" status="waiting" class="badge-item">未读消息</b-badge>
  <b-badge :count="6" status="success" class="badge-item">未读消息</b-badge>
  <b-badge :count="12" status="info" class="badge-item">未读消息</b-badge>
</template>

<style>
.badge-item {
  background-color: #f3f6f8;
  margin-right: 20px;
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 4px 8px;
}
</style>
