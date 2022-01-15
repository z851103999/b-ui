# 按钮

### 引入

```js
import { createApp } from 'vue'
import { BCard } from 'basic-ui'

createApp().use(BCard)
```

### 基本样式

```vue
import TitleCard from '../example/TitleCard'
```

```html
<b-card title='秋风' subtitle='秋风subtitle' :description='description'></b-card>
```

### 添加图片内容

```vue
import ImageCard from '../example/ImageCard'
```

```html
<template>
  <b-card
    title='风景'
    subtitle='公园路的风景'
    :description='description'
    src='https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp'
    shadow
  >
    <template #extra>
      <b-button type='primary' style='margin-right: 10px'>添加按钮</b-button>
      <b-button type='warning'>添加按钮</b-button>
    </template>
  </b-card>
</template>
```

## API

### Card Props 属性

| 参数            | 说明      | 类型              | 可选值                                          | 默认值     |
|---------------|---------|-----------------|----------------------------------------------|---------| 
| `title`       | _标题_    | _string_        | --                                           | --      |
| `subtitle`    | _卡片副标题_ | _string_        | --                                           | --      |
| `description` | _卡片描述_  | _string_        | --                                           | --      |
| `src`         | _图片地址_  | _string_        | --                                           | --      |
| `fit`         | _填充模式_  | _string_        | _fill_ _contain_ _cover_ _none_ _scale-down_ | _cover_ |
| `alt`         | _替代文本_  | _string_        | --                                           | --      |
| `height`      | _图片高度_  | _string丨number_ | --                                           | --      |
| `shadow`      | _是否阴影_  | _boolean_       | --                                           | _flase_ |

### Card Slot 属性

| 插槽            | 说明        | 参数  | 
|---------------|-----------|-----|
| `image`       | _自定义图片_   | --  | 
| `title`       | _自定义标题_   | --  | 
| `subtitle`    | _自定义副标题_  | --  | 
| `description` | _自定义描述_   | --  | 
| `extra`       | _自定义底部内容_ | --  | 
