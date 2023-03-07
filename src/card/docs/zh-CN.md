# 按钮

### 引入

```js
import { createApp } from 'vue'
import { BCard } from 'basic-ui'

createApp().use(BCard)
```

### 添加图片内容

```vue
import ImageCard from '../example/ImageCard'
```

```html
<div style="width:400px">
    <b-card class="card-demo-use-img"
      :src="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'" shadow="always">
      <template #title>Vue标题</template>
      <template #content>
        内容----------内容-------------内容
      </template>
      <template #actions>
        <div class="card-block"><b-icon name="like" /><span>12</span></div>
        <div class="card-block"><b-icon name="collection" /><span>12</span></div>
      </template>
    </b-card>
</div>
```

## API

### Card Props 属性

| 参数          | 说明         | 类型             | 默认值  |
| ------------- | ------------ | ---------------- |  ------- |
| `src`       | _图片路径_       | _string_         |  --      |
| `align`    | _操作区域对其方式，起始,尾部，拉伸对其_ | _IAlignType_       | 'start'      |
| `shadow` | _增强阴影_   | _IShadowType_          | 'hover'      |

### Card Slot 属性

| 插槽          | 说明             |
| ------------- | ---------------- |
| `avatar`       | _头像区域_     |
| `title`       |   _卡片title_             |
| `subtitle`    | _对标题的补充_   |
| `action` | _决策作用_     |

### Card 类型定义

IAlignType

```ts
type IAlignType = 'start' | 'end' | 'spaceBetween'
```

IShadowType

```ts
type IShadowType = 'always' | 'hover' | 'never'
```
