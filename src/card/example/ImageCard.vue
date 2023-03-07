<template>
  <div style="width: 400px">
    <b-card
      class="card-demo-use-img"
      :src="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
      shadow="always"
    >
      <template #title>Vue标题</template>
      <template #content> 内容----------内容-------------内容 </template>
      <template #actions>
        <div class="card-block"><b-icon name="like" /><span>12</span></div>
        <div class="card-block"><b-icon name="collection" /><span>12</span></div>
      </template>
    </b-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BCard from '../Card'
import BIcon from '../../icon/Icon.vue'

export default defineComponent({
  components: {
    BCard,
    BIcon,
  },
})
</script>

<style lang="less">
.card-demo-use-img {
  cursor: pointer;

  .icon {
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }

  .icon + span {
    vertical-align: middle;
  }

  .card-block {
    margin-right: 16px;

    i {
      cursor: pointer;
      font-size: 16px;
      margin-right: 2px;
      vertical-align: middle;
    }

    i + span {
      vertical-align: middle;
    }
  }
}
</style>
