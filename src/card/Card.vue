<template>
  <div :class="[`b-card`, shadow ? `b-card__shadow` : null]">
    <slot name="image">
      <img
        class="b-card__image"
        :class="{ objectFit: fit, height: toSizeUnit(height) }"
        :src="src"
        :alt="alt"
        v-if="src"
      />
    </slot>
    <slot name="title">
      <div class="b-card__title" v-if="title">{{ title }}</div>
    </slot>
    <slot name="subtitle">
      <div class="b-card__subtitle" v-if="subtitle">{{ subtitle }}</div>
    </slot>
    <slot name="description">
      <div class="b-card__description" v-if="description">{{ description }}</div>
    </slot>
    <div class="b-card__footer" v-if="$slots.extra">
      <slot name="extra" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import { toSizeUnit } from '../utils/utils'

export default defineComponent({
  name: 'Card',
  props,
  setup() {
    return {
      toSizeUnit,
    }
  },
})
</script>

<style lang="less">
@import './card.less';
</style>
