import { defineComponent, onMounted, reactive, ref, SetupContext, watch } from 'vue'
import { RateProps, rateProps } from './rateProps'
import BIcon from '../icon/Icon.vue'

import './rate.less'

export default defineComponent({
  name: 'BRate',
  components: {
    BIcon,
  },
  props: rateProps,
  emits: ['change', 'update:modelValue'],
  setup(props: RateProps, ctx: SetupContext) {
    const totalLevelArray = ref<{ width: string }[]>([])
    const chooseValue = ref(0)

    /**
     * @description 根据mouseMove，mouseLeave,select等操作，改变颜色与是否选中
     * @param start
     * @param end
     * @param width
     */
    const setChange = (start: number, end: number, width: string) => {
      for (let i = start; i < end; i++) {
        totalLevelArray.value[i].width = width
      }
    }

    /**
     * 初始化设置
     * @returns
     */
    const initRating = () => {
      if (!props.modelValue) {
        return
      }
      chooseValue.value = props.modelValue - 1
      const halfStar = chooseValue.value % 1
      const intCurrentLevel = Math.floor(chooseValue.value)
      setChange(0, intCurrentLevel + 1, '100%')

      if (halfStar > 0) {
        totalLevelArray.value[intCurrentLevel + 1].width = halfStar * 100 + '%'
        setChange(intCurrentLevel + 2, props.count, '0')
      } else {
        setChange(intCurrentLevel + 1, props.count, '0')
      }
    }

    const initLevelArray = () => {
      totalLevelArray.value = []
      for (let i = 0; i < props.count; i++) {
        totalLevelArray.value.push({ width: '0' })
      }
    }

    watch([() => props.modelValue, () => props.count], () => {
      initLevelArray()
      initRating()
    })

    onMounted(() => {
      initLevelArray()
      initRating()
    })
    // 当前元素是否半选
    const isSemiSelected = (e: MouseEvent): boolean => {
      const target = e.target as HTMLElement
      return props.allowHalf && e.offsetX * 2 <= target.clientWidth
    }

    /**
     * @description 切换悬停
     * @param e
     * @param index
     * @param reset
     * @returns
     */
    const hoverToggle = (e: any, index: number, reset = false) => {
      if (props.read) {
        return
      }
      setChange(0, index, '100%')
      const width = isSemiSelected(e) ? '50%' : '100%'
      setChange(index, index + 1, width)
      setChange(index + 1, props.count, '0')
    }
    /**
     * 鼠标离开组件重置选择状态
     */
    const onMouseleave = () => {
      initRating()
    }

    /**
     * @description 选择值
     * @param e
     * @param index
     * @returns
     */
    const selectValue = (e: MouseEvent, index: number) => {
      if (props.read) {
        return
      }

      setChange(0, index, '100%')
      // 判断是否是半选模式
      if (isSemiSelected(e)) {
        setChange(index, index + 1, '50%')
        chooseValue.value = index - 0.5
      } else {
        setChange(index, index + 1, '100%')
        chooseValue.value = index
      }
      setChange(index + 1, props.count, '0')

      props.onChange && props.onChange(chooseValue.value + 1)
      props.onTouched && props.onTouched()
      ctx.emit('update:modelValue', chooseValue.value + 1)
    }

    return {
      totalLevelArray,
      chooseValue,
      hoverToggle,
      selectValue,
      onMouseleave,
    }
  },
  render() {
    const { totalLevelArray, icon, character, read, type, color, hoverToggle, selectValue, onMouseleave } = this

    return (
      <div class="b-star-container" onMouseleave={onMouseleave}>
        {totalLevelArray.map((item, index) => (
          <div
            class={`b-star-align b-pointer ${read ? 'b-only-read' : ''}`}
            key={index}
            onMouseover={(e) => hoverToggle(e, index)}
            onClick={(e) => selectValue(e, index)}
          >
            {icon && !character && (
              <span class="b-star-color">
                <b-icon name={icon} />
              </span>
            )}
            {character && !icon && <span class="b-star-color">{character}</span>}
            {!icon && !character && (
              <span class="b-star-color">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns-xlink="http://www.w3.org/1999/xlink"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill="#E3E5E9" id="Mask">
                      <polygon points="8 12.7603585 3.67376208 14.3147912 3.81523437 9.71994835 1 6.0857977 5.41367261 4.80046131 8 1 10.5863274 4.80046131 15 6.0857977 12.1847656 9.71994835 12.3262379 14.3147912"></polygon>
                    </g>
                  </g>
                </svg>
              </span>
            )}
            {icon && !character && (
              <span class={`b-star-color-active b-active-star b-star-color-${type}`} style={{ width: item.width }}>
                <b-icon name={icon} color={color} />
              </span>
            )}
            {character && !icon && (
              <span
                class={`b-star-color-active b-active-star b-star-color-${type}`}
                style={{ color, width: item.width }}
              >
                {character}
              </span>
            )}
            {!character && !icon && (
              <span
                class={`b-star-color-active b-active-star b-star-color-${type}`}
                style={{ color, width: item.width }}
              >
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns-xlink="http://www.w3.org/1999/xlink"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Mask">
                      <polygon points="8 12.7603585 3.67376208 14.3147912 3.81523437 9.71994835 1 6.0857977 5.41367261 4.80046131 8 1 10.5863274 4.80046131 15 6.0857977 12.1847656 9.71994835 12.3262379 14.3147912"></polygon>
                    </g>
                  </g>
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    )
  },
})
