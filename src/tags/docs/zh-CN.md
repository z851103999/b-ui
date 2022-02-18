# 按钮

### 引入

```js
import {createApp} from 'vue'
import {BSpacer} from 'b-ui'

createApp().use(BSpacer)
```

### 基本用法

```vue
import BasicTag from '../example/BasicTag.vue'
```

```html
<template>
    <b-tag>标签一</b-tag>
    <b-tag type="primary">标签二</b-tag>
    <b-tag type="success">标签三</b-tag>
    <b-tag type="warning">标签四</b-tag>
    <b-tag type="danger">标签五</b-tag>
</template>
```

### 可被选中

```vue
import CheckedTag from '../example/CheckedTag.vue'
```

``` html
<template>
  <b-tag type="primary" :checked="isChecked" @click="tagClick">点击变化</b-tag>
</template>
```

### 可被关闭

```vue
import CloseTag from '../example/CloseTag.vue'
```

``` html
<template>
  <b-tag type="primary" :checked="isChecked" @click="tagClick">点击变化</b-tag>
</template>
```

### 标签边框

```vue
import BorderTag from '../example/BorderTag.vue'
```

```html
<template>
    <b-tag :border-style="true">tag添加属性</b-tag>
    <b-tag type="primary">默认tag是有边框的</b-tag>
    <b-tag color="red">默认tag是有边框的</b-tag>
</template>
```

## API

### Props

| 参数             | 说明                     | 类型        | 可选 值                                | 默认值     |
|----------------|------------------------|-----------|-------------------------------------|---------|
| `type`         | _可选，标签类型，指定类型color不生效_ | _string_  | `success` `info` `warning` `danger` | __      |
| `color`        | _可选，标签颜色_              | _string_  | `可选16位#xxx颜色rgba等`                  | __      |
| `titleContent` | _鼠标悬浮时候title显示内容_      | _string_  | --                                  | --      |
| `checked`      | _可选，标签选中的初始状态_         | _boolean_ | `true` `false`                      | _false_ |
| `deletable`    | _可选，设置标签是否可以删除_        | _boolean_ | `true` `false`                      | _false_ |
| `closeStyle`   | _关闭的按钮样式，false就是默认样式_  | _boolean_ | `true` `false`                      | _false_ |
| `borderStyle`  | _边框的显示与隐藏_             | _boolean_ | `true` `false`                      | _false_ |_

### Event

| 名称              | 说明                              |
|-----------------|---------------------------------|
| `click`         | `点击tag事件`                       |
| `tagDelete`     | `删除tag事件`                       |
| `checkedChange` | `tag的check状态改变出发的事件，通过参数接收最新状态` |
