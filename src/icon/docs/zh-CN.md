# 按钮

### 引入

```js
import { createApp } from 'vue'
import { BIcon } from 'basic-ui'

createApp().use(BIcon)
```

### 基本样式

```vue
import TypeButton from '../example/SizeIcon.vue'
```

```html
<b-icon name='b-yingyezhizhao'></b-icon>
<b-icon name='yingyezhizhao' :size='26'></b-icon>
```

### 图标颜色

```vue
import TypeButton from '../example/SizeIcon.vue'
```

```html
<b-icon name='b-yingyezhizhao'></b-icon>
<b-icon name='yingyezhizhao' :size='26'></b-icon>
```

### transition

```vue
import TransitionIcon from '../example/TransitionIcon.vue'
```

```html
<b-icon name='b-yingyezhizhao'></b-icon>
<b-icon name='yingyezhizhao' :size='26'></b-icon>
```

## API

### icon 属性

| 参数           | 说明               | 类型       | 默认值      | 
|--------------|------------------|----------|----------| 
| `name`       | 图标名称             | _string_ | --       |
| `size`       | 尺寸               | _string_ | --       |
| `color`      | 颜色               | _string_ | --       |
| `namespace`  | 图标的命名空间，可扩展自定义图标 | _string_ | --       |
| `transition` | 过度动画时间（毫米）       | _string_ | _number_ | `0` |

### icon 事件

| 参数      | 说明      | 类型            | 默认值     | 
|---------|---------|---------------|---------| 
| `click` | 点击图标时触发 | _event:Event_ | --      |


