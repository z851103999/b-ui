# 按钮

### 引入

```js
import { createApp } from 'vue'
import { BCol, BRow } from 'b-ui'

createApp().use(BCol).use(BRow) 
```

### 默认
#### row组件可以创建一个行容器
#### col组件可以创建一个列容器
```vue
import GroupCol from '../example/GroupCol.vue'
```

```html
<template>
  <b-row style='margin-bottom: 10px' gutter='15' tag='div'>
    <b-col :span='24' tag='div'>
      <div class='ex-col'></div>
    </b-col>
  </b-row>
  <b-row gutter='15' style='margin-bottom: 10px' tag='div'>
    <b-col :span='8' tag='div'>
      <div class='ex-col'></div>
    </b-col>
    <b-col :span='8' tag='div'>
      <div class='ex-col'></div>
    </b-col>
  </b-row>
</template>

<style scoped>
  .ex-col {
    border-radius: 5px;
    background-color: #0070f3;
    padding: 8pt;
  }
</style>
```

### 间距
#### 在row组件上指定子元素（列）的间距

```vue
import GroupRow from '../example/GroupRow.vue'
```

```html
<template>
  <div>
    <b-row style='margin-bottom: 10px' gutter='15' v-for='temp in 2' :key='temp' tag='div'>
      <b-col v-for='(ex, idx) in 3' :key='idx' tag='div'>
        <div class='ex-block'></div>
      </b-col>
    </b-row>
  </div>
</template>
```

### 组合
#### 使用 1/24列完成布局

```vue
import Combination from '../example/Combination.vue'
```

```html
<template>
  <b-row style='margin-bottom: 10px' gutter='15'>
    <b-col span='16'>
      <div class='ex-col'></div>
    </b-col>
    <b-col span='8'>
      <div class='ex-col'></div>
    </b-col>
  </b-row>
  <b-row style='margin-bottom: 10px' gutter='15'>
    <b-col span='8'>
      <div class='ex-col'></div>
    </b-col>
    <b-col span='8'>
      <div class='ex-col'></div>
    </b-col>
    <b-col span='4'>
      <div class='ex-col'></div>
    </b-col>
    <b-col span='4'>
      <div class='ex-col'></div>
    </b-col>
  </b-row>
  <b-row gutter='15'>
    <b-col span='8'>
      <div class='ex-col'></div>
    </b-col>
  </b-row>
</template>
```

### 对齐
#### 使用justify与align属性以不同方式对齐

```vue
import FlexCol from '../example/FlexCol.vue'
```

```html
<template>
  <b-row style='margin-bottom: 10px' gutter='15' justify='center'>
    <b-col span='16'>
      <div class='ex-col'></div>
    </b-col>
  </b-row>
  <b-row style='margin-bottom: 10px' gutter='15' justify='end'>
    <b-col span='16' justify='center'>
      <div class='ex-col'></div>
    </b-col>
  </b-row>
</template>
```

## API

### Row Props 属性

| 参数           | 说明        | 类型              | 可选值                                                   | 默认值     |
|--------------|-----------|-----------------|-------------------------------------------------------|---------| 
| `tag`       | _自定义容器元素_ | _HTMLElement_   | --                                                    | _div_   |
| `gutter`       | _子元素列的间距_ | _string number_ | --                                                    | _0_     |
| `justify`      | _水平对齐方式_  | _string_        | _start_ _end_ _center_ _space-around_ _space-between_ | _start_ |
| `align`  | _垂直对齐方式_  | _string_        | _top_ _middle_ _bottom_                               | _top_   |

### Col Props 属性

| 参数       | 说明          | 类型              | 可选值  | 默认值   |
|----------|-------------|-----------------|------|-------| 
| `tag`    | _自定义容器元素_   | _HTMLElement_   | --   | `div` |
| `span`   | _每列占据的网格大小_ | _string number_ | 0-24 | `24`  |
| `offset` | _当前列的偏移位置_  | _string number_ | --   | `0`   |


