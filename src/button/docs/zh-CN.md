# 按钮

### 引入

```js
import { createApp } from 'vue'
import { BButton } from 'basic-ui'

createApp().use(BButton)
```

### 基本样式

```vue
import TypeButton from '../example/TypeButton.vue'
```

```html
<b-button type='primary'>Primary</b-button>
<b-button type='positive'>Positive</b-button>
<b-button type='negative'>Negative</b-button>
<b-button type='basic'>Basic</b-button>
```

### 大小
```vue
import SizeButton from '../example/SizeButton.vue'
```

```html
<b-button size='large'>large</b-button>
<b-button>default</b-button>
<b-button size='meduim'>medium</b-button>
<b-button size='small'>small</b-button>
<b-button size='tiny'>tiny</b-button>
```

### 禁用

```vue
import DisabledButton from '../example/DisabledButton.vue'
```

```html
<b-button>Disabled</b-button>
<b-button disabled>Disabled</b-button>
<b-button type='primary'>Disabled</b-button>
<b-button disabled type='primary'>Disabled</b-button>
```

### loading

```vue
import LoadingButton from '../example/LoadingButton.vue'
```

```html
<b-button loading>Disabled</b-button>
```


## API

### button 属性

| 参数         | 说明                                                     | 类型        | 默认值     | 
|------------|--------------------------------------------------------|-----------|---------| 
| `type`     | 按钮类型，可设置primary,position,negative,basic                | _string_  | --      |
| `shape`    | 按钮形状，可设置circle或者省略                                     | _string_  | --      |
| `size`     | 按钮大小，可设置为mini,tiny,small,medium,large,big,huge,massive | _string_  | --      |
| `active`   | 设置按钮的活动状态                                              | _boolean_ | `false` |
| `disabled` | 设置按钮的禁用状态                                              | _boolean_  | `false` |
| `loading`  | 设置按钮的加载状态                                              | _boolean_  | `false` |

### buttons 属性

| 参数     | 说明                                                    | 类型        | 默认值     | 
|--------|-------------------------------------------------------|-----------|---------| 
| `type` | 按钮类型，可设置primary,position,negative,basic               | _string_  | --      |
| `size` | 按钮大小，可设置mini,tiny,small,medium,large,big,huge,massive | _string_  | --      |

