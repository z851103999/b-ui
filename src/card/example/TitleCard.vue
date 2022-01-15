<template>
  <b-card title="秋风" subtitle="秋风subtitle" :description="description"></b-card>
</template>
<script>
import BCard from '../Card'

export default {
  components: {
    BCard,
  },
  data() {
    return {
      description:
        '秋风，把果实给了我们。风一吹，葡萄成熟了，晶莹剔透，犹如紫檀色的宝石上还闪着银白色的光呢！苹果结在枝头，红彤彤的，就像一盏盏红灯笼似的，点亮自己，照耀别人；黄黄的梨子宛如一个个金灿灿的葫芦；青绿的香瓜也逐渐在人们的口中传递着，棕褐色的籽、甜津津的水让人们赞不绝口；海南蕉也随着人们的喜爱上到了树上，等待人们采摘……秋风的魔力可真大啊！',
    }
  },
}
</script>
