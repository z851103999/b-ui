# Alert 提示

## 引入

```js
import { BAlert } from 'basic-ui'
createApp().use(BAlert)
```

### 基本用法

#### 基础

```vue
import BAlert from '../example/BasicAlert.vue'
```

```html
<template>
  <b-alert type="success" :show-icon="false" :closeable="false">success</b-alert>
  <b-alert type="danger" :show-icon="false" :closeable="false">danger</b-alert>
  <b-alert type="warning" :show-icon="false" :closeable="false">warning</b-alert>
  <b-alert type="info" :show-icon="false" :closeable="false">info</b-alert>
  <b-alert type="simple" :show-icon="false" :closeable="false">simple</b-alert>
</template>
```

### 可关闭的提示

```vue
import ShowIconAlert from '../example/ShowIconAlert.vue'
```

```html
<template>
  <b-alert type="success" :show-icon="false" :closeable="false">success</b-alert>
  <b-alert type="danger" :show-icon="false" :closeable="false">danger</b-alert>
  <b-alert type="warning" :show-icon="false" :closeable="false">warning</b-alert>
  <b-alert type="info" :show-icon="false" :closeable="false">info</b-alert>
  <b-alert type="simple" :show-icon="false" :closeable="false">simple</b-alert>
</template>
```

### 居中

```vue
import CenterAlert from '../example/CenterAlert.vue'
```

```html
<b-alert type="success" :show-icon="true" :closeable="true" center>success</b-alert>
<b-alert type="danger" :show-icon="true" :closeable="true" center>danger</b-alert>
<b-alert type="warning" :show-icon="true" :closeable="true" center>warning</b-alert>
<b-alert type="info" :show-icon="true" :closeable="true" center>info</b-alert>
<b-alert type="simple" :show-icon="true" :closeable="true" center>simple</b-alert>
```

### 自动关闭

```vue
import DismissTimeAlert from '../example/DismissTimeAlert.vue'
```

```html
<template>
  <b-alert type="success" :show-icon="true" :closeable="true" dismiss-time="10000">10秒消失</b-alert>
</template>
```

### b-alert 参数

| 参数              | 说明      | 类型              | 可选值                                          | 默认值 |
|-----------------|---------|-----------------|----------------------------------------------|--|
| `type` |      `必选，制定警告提示的样式`    |   _AlertType_        |  `/`    |  `info`  |
| `css-class` |      `可选，自定义css`    |   _string_        |  `/`    |  `/`  |
| `closeable` |      `可选，默认显示关闭按钮`    |   _boolean_        |  `/`    |  `true`  |
| `dismiss-time` |      `可选，自动关闭 alert 的延迟时间ms`    |   _number_        |  `/`    |  `info`  |
| `show-icon` |      `可选，是否使用默认的类型图标`    |   _boolean_        |  `/`    |  `true`  |
| `center`    | `可选 居中对齐`                     |   _boolean_        |  `--` |  `false`   |

### AlertType

``` ts
type AlertType = 'success' | 'danger' | 'warning' | 'info' | 'simple';
```
