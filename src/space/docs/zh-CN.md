# 按钮

### 引入

```js
import { createApp } from 'vue'
import { BTag } from 'b-ui'

createApp().use(BTag)
```

### 垂直用法

```vue
import ColumnSpace from '../example/ColumnSpace.vue'
```

```html
<template>
  <b-space direction='column' size='large'>
    <b-button>Button1</b-button>
    <b-button>Button2</b-button>
    <b-button>Button3</b-button>
  </b-space>
</template>
```

### 间隔用法

```vue
import SizeSpace from '../example/SizeSpace.vue'
```

```html
<template>
  <b-space :size='[20, 20]'>
    <b-button>Button1</b-button>
    <b-button>Button2</b-button>
    <b-button>Button3</b-button>
  </b-space>
</template>
```

### flex定位

```vue
import FlexSpace from '../example/FlexSpace.vue'
```

```html
<template>
  <b-space justify='end'>
    <b-button>button1</b-button>
    <b-button>button1</b-button>
  </b-space>
  <b-space justify='space-around'>
    <b-button>button1</b-button>
    <b-button>button1</b-button>
  </b-space>
  <b-space justify='center'>
    <b-button>button1</b-button>
    <b-button>button1</b-button>
  </b-space>
  <b-space justify='space-between'>
    <b-button>button1</b-button>
    <b-button>button1</b-button>
  </b-space>
</template>
```

## API

### Space Props 属性

| 参数          | 说明   | 类型                                                | 可选值                                                       | 默认值    |
|-------------|------|---------------------------------------------------|-----------------------------------------------------------|--------| --
| `align`     | _垂直排列方式_ | _string_                                          | _stretch_ _center_ _start_ _end_ _baseline_               | --     |
| `justify`   | _水平排列方式_ | _string_                                          | _start_ _end_ _center_ _space-around_ _space-between_     | _start_ |
| `size`      | _间距_ | _string_ _number_ _[string丨number,string丨number]_ | _mini:[4,4]_ _small:[6,6]_ _normal:[8,12]_ _large[12,80]_ | _normal_ |
| `wrap`      | _是否超出换行_ | _boolean_                                         | --                                                        | _true_ |
| `direction` | _布局方向_ | _string_                                          | _row_ _column_                                            | _row_  |
| `inline`    | _是否为行内元素_ | _boolean_                                         | --                                                        | _flase_ |


