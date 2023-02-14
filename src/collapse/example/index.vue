<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import { use } from './locale'

watchLang(use)
</script>

<template>
  <app-type></app-type>
  <b-collapse />
</template>
