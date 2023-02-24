# Badge 徽章

## 引入

```js
import { BBadge } from 'b-ui'
createApp().use(BBadge)
```

### 基本样式

```vue
import BasicBadge from '../example/BasicBadge.vue'
```

```html
<template>
    <b-badge :count="6" status="danger" class="badge-item">未读消息</b-badge>
    <b-badge :count="6" status="waiting" class="badge-item">未读消息</b-badge>
    <b-badge :count="6" status="success" class="badge-item">未读消息</b-badge>
    <b-badge :count="6" status="info" class="badge-item">未读消息</b-badge>
</template>

<style>
    .badge-item {
        background-color: #f3f6f8;
        margin-right: 20px;
        margin-bottom: 8px;
        border-radius: 10px;
        padding: 4px 8px;
        font-size: 14px;
    }
</style>
```

### 点状

```vue
import PunctuateBadge from "../example/PunctateBadge.vue";
```

```html
<template>
    <b-badge status="danger" show-dot class="badge-dot-item">
        <b-icon name="feedback"></b-icon>
    </b-badge>
    <b-badge status="warning" show-dot class="badge-dot-item">
        <b-icon name="feedback"></b-icon>
    </b-badge>
    <b-badge status="waiting" show-dot class="badge-dot-item">
        <b-icon name="feedback"></b-icon>
    </b-badge>
    <b-badge status="info" show-dot class="badge-dot-item">
        <b-icon name="feedback"></b-icon>
    </b-badge>
</template>

<style>
    .badge-dot-item {
        margin-right: 20px;
    }
</style>
```
### 位置

```vue
import PositionBadge from "../example/PositionBadge.vue";
```

```html
<b-badge :count="6" status="danger" position="top-left" class="badge-item">未读消息</b-badge>
<b-badge :count="7" status="danger" position="top-right" class="badge-item">未读消息</b-badge>
<b-badge :count="8" status="danger" position="bottom-left" class="badge-item">未读消息</b-badge>
<b-badge :count="9" status="danger" position="bottom-right" class="badge-item">未读消息</b-badge>
```

### 距离

```vue
import CustomizeBadge from "../example/CustomizeBadge.vue";
```

```html
<template>
    <b-badge :count="6-6" status="success" style="margin-right: 20px">
        <d-icon name="notice" />
    </b-badge>
    <b-badge :count="6-6" status="success" style="margin-right: 20px" :offset="[-10,0]">
        <d-icon name="notice" />
    </b-badge>
</template>
```

### 隐藏

```vue
import HiddenBadge from "../example/HiddenBadge.vue";
```

```html
<template>
    <b-badge :hidden="isHidden" :count="6" status="danger" class="badge-item">未读消息</b-badge>
    <b-badge :hidden="isHidden" status="danger" show-dot class="badge-dot-item">
        <b-icon name="feedback"></b-icon>
    </b-badge>
    <b-button @click="hiddenNum">hidden</b-button>
</template>
<script setup lang="ts">
    import BBadge from "../badge";
    import {ref} from "vue";
    import BButton from "../../button/button";

    const isHidden =ref(false);
    const hiddenNum = () => {
        isHidden.value = !isHidden.value
    }
</script>

```

## API

### Badge参数
| 参数         | 类型                | 默认          | 说明                        |
|------------|-------------------|-------------|---------------------------|
| count      | number            | --          | 可选：数目                     |
| max-count  | number            | 99          | 可选：最大显示数字 count>max-count |
| show-dot   | boolean           | false       | 可选：点状徽章 有无包裹              |
| status     | BadgeStatusType   | 'info'      | 可选：状态色                    |
| position   | BadgePositionType | 'top-right' | 可选：位置                     |
| bg-color   | string            | --          | 可选：自定义徽标色，status设置无效      |
| text-color | string            | --          | 可选：自定义徽标文字颜色              |
| offset     | [number,number]   | --          | 可选：位置xy轴                  |
| hidden     | boolean           | false       | 可选是否显示徽章                  |

### 接口定义

BadgeStatusType
```ts
type BadgeStatusType = 'danger' | 'warning' | 'waiting' | 'success' | 'info' | 'common';
```
BadgePositionType 
```ts
type BadgePositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
```
