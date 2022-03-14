# 滑动 Slider

### 引入

```js
import {createApp} from 'vue'
import {BSlider} from 'b-ui'

createApp().use(BSlider)
```

### 基本用法

```vue
import ColumnSpace from '../example/BaseSlider.vue'
```

``` html
<template>
  <div style="padding:20px">
    <b-slider :min="minValue" :max="maxValue"></b-slider>
  </div>
</template>
<script setup>
import BSlider from '../Slider'
import { ref } from 'vue'

const minValue = ref(0)
const maxValue = ref(20)
</script>
```

### 可以设置step步进距离

```vue
import StepSlider from '../example/StepSlider.vue'
```

```html
<template>
  <div style="padding: 20px">
    <b-slider :min="minValue" :max="maxValue" :step="step"></b-slider>
  </div>
</template>
<script setup>
import BSlider from '../Slider'
import { ref } from 'vue'

const minValue = ref(0)
const maxValue = ref(20)
const step = ref(3)
</script>
```

### 带有输入框的滑动组件

```vue
import InputSlider from '../example/InputSlider.vue'
```

```html
<template>
  <div style="padding: 20px">
    <b-slider :min="minValue" :max="maxValue" v-model:modelValue="modelValue" showInput></b-slider>
  </div>
</template>
<script setup>
import BSlider from '../Slider'
import { ref } from 'vue'

const minValue = ref(0)
const maxValue = ref(20)
const modelValue = ref(3)
</script>
```

### 禁止滑动

```vue
import DisabledSlider from '../example/DisabledSlider.vue'
```

```html
<template>
  <div style="padding: 20px">
    <b-slider :min="minValue" :max="maxValue" v-model:modelValue="modelValue" :disabled="disabled"></b-slider>
  </div>
</template>
<script setup>
import BSlider from '../Slider'
import { ref } from 'vue'

const minValue = ref(0)
const maxValue = ref(20)
const modelValue = ref(3)
const disabled = ref(true)
</script>
```

### 自定义Popover显示内容

```vue
import PoperSlider from '../example/PopverSlider.vue'
```

```html
<template>
  <div style="padding: 20px">
    <b-slider :min="minValue" :max="maxValue" v-model:modelValue="modelValue" tipsRenderer="orange"></b-slider>
  </div>
</template>
<script setup>
import BSlider from '../Slider'
import { ref } from 'vue'

const minValue = ref(0)
const maxValue = ref(20)
const modelValue = ref(3)
</script>
```

### Props

| 参数           | 说明                                                     | 类型      | 可选 值 | 默认值 |
| -------------- | -------------------------------------------------------- | --------- | ------- | ------ |
| `max`          | _可选，滑动条最大值_                                     | _number_  | -       | 100     |
| `min`          | _可选，滑动条最小值_                                     | _number_  | -       | 0     |
| `step`         | _可选，滑动输入条的步进，最值必须大于1_                  | _number_  | -       | 1     |
| `disabled`     | _可选，值为true禁止用户输入_                             | _boolean_ | -       | false     |
| `showInput`    | _可选，值为true显示输入框_                               | _boolean_ | -       | false     |
| `tipsRenderer` | _可选，渲染Popover内容的函数，传入'null'时不显示popover_ | _string_  | -       | __     |
