# 消息

### 引入

```js
import { Message } from 'b-ui'
```

### 基础用法

#### 共有四种Message样式 normal,success,error,warning,info

```vue
import BaseMessage from '../example/BaseMessage.vue'
```

```html
<template>
  <div class="demo-message">
    <b-button @click="open('normal')">normal</b-button>
    <b-button @click="open('success')">success</b-button>
    <b-button @click="open('error')">error</b-button>
    <b-button @click="open('warning')">warning</b-button>
    <b-button @click="open('info')">info</b-button>
  </div>
</template>

<script setup>

import BButton from '../../button/index'
import Message from "../index";

function open(type) {
  Message({
    type,
    message: '测试',
    duration: 90000,
    shadow: false
  })
}
</script>
```

### 关闭消息提示

#### 默认Message不可以被人工关闭，想要关闭,你可以吧showClose设置为true，吧duration设置为0就不会自动关闭了

```vue
import ShowCloseMessage from '../example/ShowCloseMessage.vue'
```

```html
<template>
  <div class="demo-message">
  <b-button @click="closeIcon()">show Icon icon</b-button>
  <b-button @click="notClose()">not close</b-button>
  </div>
</template>

<script setup>

import BButton from '../../button/index'
import Message from "../index";

function closeIcon() {
 Message({
  type: 'success',
  message: '显示关闭按钮',
  showClose:true
  })
}

function notClose() {
 Message({
  type: 'info',
  message: '必须手动关闭，duration:0 showClose:true',
  showClose: true,
  duration:0
 })
}

</script>
<style>
.demo-message>button {
  margin-right: 10px;
}
</style>
```

### 阴影和边框设置

#### 设置bordered为false来关闭message的边框

#### 设置shadow 为false来关闭message的阴影

```vue
import ShadowMessage from '../example/ShadowMessage.vue'
```

```html
<template>
 <div class="demo-message">
  <b-button @click="closeBordered">show bordered</b-button>
  <b-button @click="closeShadow">close shadow</b-button>
  <b-button @click="closeShadowBorder">close shadow border</b-button>
 </div>
</template>

<script setup>

import BButton from '../../button/index'
import Message from "../index";

function closeBordered() {
 Message({
  type: 'success',
  message: 'close border',
  bordered: false
 })
}

function closeShadow() {
 Message({
  type: 'info',
  message: 'close shadow',
  shadow: false
 })
}

function closeShadowBorder() {
 Message({
  type: 'error',
  message: 'close shadow border',
  shadow: false,
  bordered: false
 })
}

</script>
<style>
.demo-message>button {
 margin-right: 10px;
}
</style>
```

## API

### message 属性

| 参数       | 说明    | 类型        | 默认值 |
|--------------|------------------|----------|-------|
| `message` | 消息文字  | _String_   | - |
| `type` | 消息内容类型  | _MessageType_   | `normal` |
| `showClose` | 可关闭按钮  | _Boolean_   | `false` |
| `duration` | 超时时间  | _Number_   | 3000 |
| `shadow` | 展示阴影  | _Boolean_   | true |
| `bordered` | 展示边框  | _Boolean_   | true |
| `on-close` | 消息关闭的回调  | _()=>void_   | -- |

#### Message类型定义

```ts
type MessageTypes = "normal" | "success" | "error" | "warning" | "info"
```
