<script setup>
import Collapse from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type></app-type>
  <b-collapse/>
</template>
    