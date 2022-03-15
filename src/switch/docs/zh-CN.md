# 滑动 Slider

### 引入

```js
import {createApp} from 'vue'
import {BSwitch} from 'b-ui'

createApp().use(BSwitch)
```

### 基本用法

#### 大小

```vue
import BaseSwitch from '../example/BaseSwitch.vue'
```

```html
<template>
  <b-switch v-model:checked="checkedSmall" size="small"></b-switch>
  <b-switch v-model:checked="checkedMiddle" size="middle"></b-switch>
  <b-switch v-model:checked="checkedLarge" size="large" @change="change"></b-switch>
</template>
<script setup>
import BSwitch from '../Switch'
import { ref } from 'vue'

const checkedSmall = ref(false)
const checkedMiddle = ref(true)
const checkedLarge = ref(false)

function change(event) {
  if (event) {
    console.log('打开开关')
  } else {
    console.log('关闭开关')
  }
}
</script>
```

### disabled 禁用

```vue
import DisabledSwitch from '../example/DisabledSwitch.vue'
```

```html
<template>
  <b-switch v-model:checked="checkedSmall" size="small" :disabled="true"></b-switch>
</template>
<script setup>
import BSwitch from '../Switch'
import { ref } from 'vue'

const checkedSmall = ref(false)
</script>
```

### 自定义样式

```vue
import CustomSwitch from '../example/CustomSwitch.vue'
```

```html
<template>
  <b-switch v-model:checked="checkedSmall" size="small">
    <template #checkedContent>开</template>
    <template #uncheckedContent>关</template>
  </b-switch>
</template>
<script setup>
import BSwitch from '../Switch'
import { ref } from 'vue'

const checkedSmall = ref(false)
</script>
```

## API

### Props

| 参数             | 说明                     | 类型        | 可选 值                                | 默认值     |
|----------------|------------------------|-----------|-------------------------------------|---------|
| `size`         | _可选，开关尺寸大小_       | _string_  | `small` `middle` `large`            | `middle`      |
| `color`         | _可选，自定义打开颜色_       | _string_  | --           | --     |
| `checked`         | _可选，是否打开_       | _boolean_  |     `boolean`     | `false`      |
| `disabled`         | _可选，是否禁用开关_       | _boolean_  |     `boolean`        | `false`      |
| `checkedContent`         | _可选，打开说明_       | _string_ _HTMLElement_  |             |       |
| `uncheckedContent`         | _可选，关闭说明_       | _string_  _HTMLElement_  |             |       |

### Event

| 参数             | 说明                     | 类型        |
|----------------|------------------------|-----------|
| `change`       | _可选，开关打开返回true，关闭时false_       | `EventEmitter<boolean>`  |
