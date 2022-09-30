# 评分 Rate

### 引入

```js
import {createApp} from 'vue'
import {BRate} from 'b-ui'

createApp().use(BRate)
```

### 基本用法

#### 基础

```vue
import BasicRate from '../example/BasicRate.vue'
```

```html
<template>
  <b-rate :read="true" v-model="valueReadonly"></b-rate>
</template>
<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
 components: {
  BRate
 },
  setup() {
    const valueReadonly = ref(5);

    return {
      valueReadonly,
    };
 }
});
</script>
```

#### 动态模式

```vue
import DynamicRate from '../example/DynamicRate.vue'
```

```html
<template>
  <b-rate :read="true" v-model="valueReadonly"></b-rate>
</template>
<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
 components: {
  BRate
 },
  setup() {
    const valueReadonly = ref(5);

    return {
      valueReadonly,
    };
 }
});
</script>
```

### 自定义图标

#### 基础

```vue
import TypeRate from '../example/TypeRate.vue'
```

```html
<template>
  <b-rate v-model="value1" type="success" :count="5" icon="coordinates" />
  <br />
  <b-rate v-model="value1" type="warning" :count="5" icon="coordinates" />
  <br />
  <b-rate v-model="value1" type="error" :count="5" icon="coordinates" />
</template>

```

### b-alert 参数

| 参数         | 说明                         | 类型             | 默认值  |
| ------------ | ---------------------------- | ---------------- | ------- |
| `read`       | `设置是否味只读模式`         | _boolean_        | `false` |
| `count`      | `设置总星数`                 | _number_         | `5`     |
| `type`       | `图标类型，不同类型不同颜色` | _RateStatusType_ | --      |
| `color`      | `图标颜色`                   | _string_         | --      |
| `icon`       | `图标icon`                   | _string_         | --      |
| `character`  | `空心图标样式`               | _string_         | --      |
| `allow-half` | `动态模式下是否允许半选`     | _boolean_        | --      |

### RateStatusType

``` ts
type RateStatusType = 'success' | 'warning' | 'error';
```
