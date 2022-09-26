# 按钮

### 引入

```js
import { createApp } from 'vue'
import { BButton } from 'basic-ui'

createApp().use(BButton)
```

### 基本样式

```vue
import BasicButton from '../example/BasicButton.vue'
```

```html 
<b-button variant="solid">Solid</b-button>
<b-button>Outline</b-button>
<b-button variant="text">text</b-button>
```

### 主题色
```vue
import TypeButton from '../example/TypeButton.vue'
```

``` html
<b-button variant="solid" color="primary">primary</b-button>
<b-button variant="solid" color="secondary">secondary</b-button>
<b-button variant="solid" color="danger">danger</b-button>
```

### 尺寸

```vue
import SizeButton from '../example/SizeButton.vue'
```

``` html
<b-button size="ms">small</b-button>
<b-button>medium</b-button>
<b-button size="lg">large</b-button>
```

### 禁用状态
```vue
import DisabledButton from '../example/DisabledButton.vue'
```

```html
  <div>
    <b-button variant="solid">Solid</b-button>
    <b-button>Outline</b-button>
    <b-button variant="text">text</b-button>
  </div>
  <div>
    <b-button variant="solid" disabled>Solid</b-button>
    <b-button disabled>Outline</b-button>
    <b-button variant="text" disabled>text</b-button>
  </div>
```

### 图标按钮
```vue
import IconButton from '../example/IconButton.vue'
```

```html
<b-button icon="b-yingyezhizhao" variant="solid">yingyezhizhao</b-button>
```


## API

### button 属性

| 参数       | 说明    | 类型        | 默认值 | 
|--------------|------------------|----------|-------| 
| `variant` | 按钮类型  | IButtonVariant   | `outline` |
| `color` | 按钮主题  | IButtonColor   | `secondary` |
| `size` | 按钮尺寸  | IButtonSize   | `md` |
| `icon` | icon  | _string_   | -- |
| `shape` | 圆角  | IButtonShape   | -- |
| `disabled` | 是否禁用 button  | boolean   | -- |


### Button类型
#### IButtonVariant
```ts
type IButtonVariant = 'solid' | 'outline' | 'text';
```
#### IButtonSize
```ts
type IButtonSize = 'lg' | 'md' | 'sm';
```

#### IButtonColor
```ts
type IButtonColor = 'primary' | 'secondary' | 'danger';
```

#### IButtonShape
```ts
type IButtonShape = 'circle' | 'round';
```

