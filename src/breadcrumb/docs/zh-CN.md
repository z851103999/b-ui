# 按钮

### 引入

```js
import { BBreadcrumb,BBreadcrumbItem } from 'basic-ui'
createApp().use(BBreadcrumb,BBreadcrumbItem)
```

### 基本样式

```vue
import BasicBreadcrumb from '../example/BasicBreadcrumb.vue'
```

```html
<template>
        <b-breadcrumb>
            <b-breadcrumb-item to="{ path: '/' }">Homepage</b-breadcrumb-item>
            <b-breadcrumb-item>
                <a href="/">UI</a>
            </b-breadcrumb-item>
            <b-breadcrumb-item>
                <span>Breadcrumb</span>
            </b-breadcrumb-item>
        </b-breadcrumb>
</template>
```

### 传入source

```vue
import SourceBreadcrumb from '../example/SourceBreadcrumb.vue'
```

```html
<template>
    <div>
        <b-breadcrumb :source="source">
        </b-breadcrumb>
    </div>
</template>

<script>
    import BBreadcrumb from '../breadcrumb'
    // import BBreadcrumbItem from '../breadcrumb-item'
    import {defineComponent, reactive} from 'vue'

    export default defineComponent({
        name: 'DisabledButton',
        components: {
            BBreadcrumb,
            // BBreadcrumbItem,
        },
        setup() {
            const source = reactive([
                {title: 'ui', link: '/', linkType: 'routerLink', replace: true},
                {title:'breadcrumb 链接不能跳转只是显示',link:'/button',noNavigation: true}
            ])
            return source;

        },
    })
</script>
```

### 自定义分隔符的面包屑

```vue
import CustomizeBreadcrumb from '../example/CustomizeBreadcrumb.vue'
```

``` html
<template>
  <b-breadcrumb separator-icon=">">
    <b-breadcrumb-item>
      <a routerLink="/button">button</a>
    </b-breadcrumb-item>
    <b-breadcrumb-item>
      <span>Breadcrumb</span>
    </b-breadcrumb-item>
  </b-breadcrumb>
</template>
```

## API

### b-breadcrumb 参数

| 参数              | 说明      | 类型              | 可选值                                          | 默认值 |
|-----------------|---------|-----------------|----------------------------------------------|--| 
| `separatoricon` |      `自定义分隔符样式`    |   _string_        |  `/`    |  `/`  |
| `source`      | `面包屑根据配置的 source 按照默认渲染方式显示` | `Array<SourceConfig>`    |   --    |  `[]`  |

### b-breadcrumb-item 参数

| 参数              | 说明      | 类型              | 可选值                                          | 默认值 |
|-----------------|---------|-----------------|----------------------------------------------|--|
| `to` | `路由跳转对象,同vue-router的to`  |   _string,object_   |  --    |  --  |
| `replace` | `在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录` | _boolean_    |   --    |  _false_  |

### 接口定义

``` ts
export interface SourceConfig {
  title: string // 显示名称
  link?: string // 跳转的路径
  target?: string // 规定在何处打开链接文档
  noNavigation?: boolean // 链接是否不可跳转，一般用于当前所处位置不可跳转的配置
  linkType?: 'hrefLink' | 'routerLink' // 链接类型，默认为'hrefLink'方式
  replace: boolean // 在使用 to 进行路由跳转，启用replace将不会向history添加新记录
}
```

