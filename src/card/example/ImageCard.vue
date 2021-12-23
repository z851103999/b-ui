<template>
  <b-card
    title="风景"
    subtitle="公园路的风景"
    :description="description"
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
    shadow
  >
    <template #extra>
      <b-button type="primary" style="margin-right: 10px">添加按钮</b-button>
      <b-button type="warning">添加按钮</b-button>
    </template>
  </b-card>
</template>
<script>
import BCard from '../Card.vue'
import BButton from '../../button/Button'

export default {
  components: {
    BCard,
    BButton,
  },
  data() {
    return {
      description:
        '秋风，把果实给了我们。风一吹，葡萄成熟了，晶莹剔透，犹如紫檀色的宝石上还闪着银白色的光呢！苹果结在枝头，红彤彤的，就像一盏盏红灯笼似的，点亮自己，照耀别人；黄黄的梨子宛如一个个金灿灿的葫芦；青绿的香瓜也逐渐在人们的口中传递着，棕褐色的籽、甜津津的水让人们赞不绝口',
    }
  },
}
</script>
