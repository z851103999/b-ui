# Collapse 折叠面板

### 引入

```js
import {BCollapse, BCollapseItem} from 'b-ui'
```

### 基础用法

#### 可以同时展开多个面板，面板之间不影响

```vue
import BaseCollapse from '../example/BaseCollapse.vue'
```

```html

<template>
    <div>
        <b-collapse v-model="collapseValue">
            <b-collapse-item title="Immersive" name="immersive">
                <div>
                    基础用法基础用法基础用法基础用法基础用法
                </div>
            </b-collapse-item>
            <b-collapse-item title="Flexible" name="flexible">
                <div>
                    基础用法基础用法基础用法基础用法基础用法
                </div>
                <div>
                    基础用法基础用法基础用法基础用法基础用法
                </div>
            </b-collapse-item>
            <b-collapse-item title="Simple" name="simple" disabled>
                <div>基础用法基础用法基础用法基础用法基础用法</div>
                <div>基础用法基础用法基础用法基础用法基础用法</div>
                <div>基础用法基础用法基础用法基础用法基础用法</div>
            </b-collapse-item>
        </b-collapse>
    </div>
</template>
<script>
    import {defineComponent, ref} from 'vue';
    import BCollapse from '../collapse'
    import BCollapseItem from '../collapse-item'

    export default defineComponent({
        components: {BCollapse, BCollapseItem},
        setup() {
            const collapseValue = ref(['immersive']);
            return {
                collapseValue,
            };
        },
    });
</script>
```

### 手风琴效果

#### 只能展开一个面板，通过accordion属性控制

```vue
import AccordionCollapse from '../example/AccordionCollapse.vue'
```

```html

<template>
    <div>
        <b-collapse v-model="collapseAccordionValue" accordion>
            <b-collapse-item title="手风琴效果一" name="immersive">
                <div>
                    手风琴效果一手风琴效果一手风琴效果一手风琴效果一手风琴效果一
                </div>
            </b-collapse-item>
            <b-collapse-item title="手风琴效果二" name="flexible">
                <div>
                    手风琴效果一手风琴效果一手风琴效果一手风琴效果一手风琴效果一
                </div>
            </b-collapse-item>
            <b-collapse-item title="手风琴效果三" name="simple">
                <div>
                    手风琴效果一手风琴效果一手风琴效果一手风琴效果一手风琴效果一
                </div>
            </b-collapse-item>
        </b-collapse>
    </div>
</template>
<script>
    import BCollapse from "../collapse";
    import BCollapseItem from '../collapse-item'
    import {defineComponent, ref} from "vue";

    export default defineComponent({
        components: {BCollapse, BCollapseItem},
        setup() {
            const collapseAccordionValue = ref(`immersive`)
            return {
                collapseAccordionValue
            }
        }
    })
</script>
```

## API

### BCollapse 参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------------|---------|-----------------|----------------------------------------------|--|
| `v-model` |      `自定义分隔符样式`    |   _string_        |  `/`    |  `/`  |
| `accordion`      | `面包屑根据配置的 source 按照默认渲染方式显示` | `boolean`    | -- |  `[]`  |

### BCollapseItem 参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------------|---------|-----------------|----------------------------------------------|--|
| `separatoricon` |      `自定义分隔符样式`    |   _string_        |  `/`    |  `/`  |
| `source`      | `面包屑根据配置的 source 按照默认渲染方式显示` | `Array<SourceConfig>`    | -- |  `[]`  |

