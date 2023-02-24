<script setup lang="ts">
import BBadge from '../badge'
</script>

<template>
  <b-badge :count="6" status="danger" position="top-left" class="badge-item">未读消息</b-badge>
  <b-badge :count="7" status="danger" position="top-right" class="badge-item">未读消息</b-badge>
  <b-badge :count="8" status="danger" position="bottom-left" class="badge-item">未读消息</b-badge>
  <b-badge :count="9" status="danger" position="bottom-right" class="badge-item">未读消息</b-badge>
</template>
