# 全局通知 Notification

### 引入

```js
import { createApp } from 'vue'
import { BNotification } from 'b-ui'

createApp().use(BNotification)
```

### 基本用法

#### 基础

```vue
import BasicNotification from '../example/BasicNotification.vue'
```

```html
<template>
 <b-button @click="showComponent()">基本用法</b-button>
 <b-notification v-model="show" title="标题" type="info" :duration="6000">通知提示内容</b-notification>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false)
const showComponent = () => {
 show.value = true
}

</script>
```

#### 回调使用

```vue
import ClickNotification from '../example/ClickNotification.vue'
```

```html
<template>
    <b-button @click="showComponent()">回调使用</b-button>
</template>

<script setup>
    import {ref} from 'vue'
    import NotificationService from '../notification-service'

    const show = ref(false)
    const showComponent = () => {
        NotificationService.open({
            title: '消息标题',
            content: '通知狂消息内容',
            onClose: () => {
                console.log('closed')
            }
        })
    }
</script>
```

### b-notification 参数

| 参数         | 说明                         | 类型                 | 默认值      |
|------------| ---------------------------- |--------------------|----------|
| `v-model`  | `组件调用必选，控制是否显示` | _boolean_          | `false`  |
| `content`  | `可选，消息内容`             | _string_           | --       |
| `title`    | `可选，设置消息标题`         | _string_           | --       |
| `type`     | `可选，设置消息类型`         | _NotificationType_ | 'normal' |
| `duration` | `可选，设置超时时间`         | _number_           | '3000'   |
| `on-close` | `可选，设置消息关闭时的回调`         | _()=>void_         | --       |


### Notification 插槽

| 插槽名       | 说明                         |
| ---------- | ---------------------------- |
| `default`  | `默认插槽，组件方式使用时有效` |

### 类型定义

### NotificationType
```ts
type NotificationType = 'normal' | 'success' | 'error' | 'warning' | 'info';
```
