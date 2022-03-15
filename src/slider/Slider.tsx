import { defineComponent, ref, computed, onMounted } from 'vue'
import { sliderProps } from './slider-types'
import './slider.less'

export default defineComponent({
  name: 'BSlider',
  props: sliderProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    let isClick = true
    // 开始位置
    let startPosition = 0
    let startX = 0

    const popoverShow = ref(false)
    // 滑块轨道
    const sliderRunway = ref<HTMLDivElement | null>(null)
    // 输入值
    const inputValue = ref<number>(props.modelValue)
    // 当前位置
    const currentPosition = ref<number>(0)
    // 新位置
    const newPosition = ref<number>(0)
    // 当前的位置以百分比显示
    const percentDisplay = ref<string>('')
    /**
     * 输入框
     * @returns
     */
    const renderShowInput = () => {
      return props.showInput ? (
        <div class="b-input__out-wrap">
          <input onInput={handleOnInput} value={inputValue.value + ''}></input>
        </div>
      ) : (
        ''
      )
    }
    // 当传入modelValue时用以定位button的位置
    if (props.modelValue > props.max) {
      percentDisplay.value = '100%'
    } else if (props.modelValue < props.min) {
      percentDisplay.value = '0%'
    } else {
      percentDisplay.value = ((props.modelValue - props.min) * 100) / (props.max - props.min) + '%'
    }
    // 一挂载就进行当前位置的计算，以后的移动基于当前的位置移动
    onMounted(() => {
      const sliderWidth = sliderRunway.value?.clientWidth
      if (sliderWidth) {
        currentPosition.value = (sliderWidth * (inputValue.value - props.min)) / (props.max - props.min)
      }
    })
    /**
     * 鼠标按下处理事件
     * @param event
     * @returns
     */
    function handleButtonMousedown(event: MouseEvent) {
      popoverShow.value = true
      // props.disabled状态是不能点击拖拽的
      if (props.disabled) return
      // 阻止默认事件
      event.preventDefault()
      dragStart(event)
      // 当鼠标开始移动时，进行坐标计算
      window.addEventListener('mousemove', onDragging)
      // 当鼠标抬起时，停止计算
      window.addEventListener('mouseup', onDragEnd)
    }
    /**
     * 开始拖动
     * @param event
     */
    function dragStart(event: MouseEvent) {
      // 防止mouseup触发父元素的click事件
      isClick = false
      // 获取当前的x坐标值
      startX = event.clientX
      // 把当前值给startPosition，以便后面再重新拖拽时,会以当前的位置计算偏移
      startPosition = currentPosition.value
      newPosition.value = startPosition
    }

    /**
     *
     * @param event 鼠标事件
     * currentPosition:当前移动的X的坐标
     * offset:当前x坐标减去初始x坐标的偏移
     *
     */
    function onDragging(event: MouseEvent) {
      popoverShow.value = true
      const currentX = event.clientX
      const pxOffset = currentX - startX
      // 移动的x方向上的偏移+初始位置等于新位置
      newPosition.value = startPosition + pxOffset
      setPosition(newPosition.value)
    }
    /**
     * 拖动停止
     */
    function onDragEnd() {
      popoverShow.value = false
      // 防止mouseup后立即执行click事件，mouseup后
      // 会立即执行click,但是isClick=true 是100ms才出发，因此不会执行click事件，就跳出来了
      setTimeout(() => {
        isClick = true
      }, 100)
      window.removeEventListener('mousemove', onDragging)
      window.removeEventListener('mouseup', onDragEnd)
    }
    /**
     * 设置位置
     * @param newPosition
     * @returns
     */
    function setPosition(newPosition: number) {
      // 获取slider的实际长度的像素
      const sliderWidth = Math.round((sliderRunway.value as HTMLInputElement).clientWidth)
      if (newPosition < 0) {
        newPosition = 0
      }
      // 计算slider的实际像素每段的长度
      const LengthPerStep = sliderWidth / ((props.max - props.min) / props.step)
      // 计算实际位移的取整段数
      const steps = Math.round(newPosition / LengthPerStep)
      // 实际的偏移像素
      const value: number = steps * LengthPerStep
      // 要是刚好划过半段切刚好超出最大长度的情况进行限定
      if (Math.round(value) >= sliderWidth) {
        currentPosition.value = sliderWidth
        inputValue.value = props.max
        percentDisplay.value = '100%'
        emit('update:modelValue', props.max)
        return
      }
      // 向左偏移百分比的值
      percentDisplay.value = Math.round((value * 100) / sliderWidth) + '%'
      // 更新输入框的值
      inputValue.value = Math.round((value * (props.max - props.min)) / sliderWidth) + props.min
      // 设置当前所在的位置
      currentPosition.value = newPosition
      emit('update:modelValue', inputValue.value)
    }

    /**
     * 在轨道鼠标按下
     * @param event
     */
    function handleRunwayMousedown(event: any) {
      if (!props.disabled && isClick) {
        startX = event.target.getBoundingClientRect().left
        const currentX = event.clientX
        setPosition(currentX - startX)
        handleButtonMousedown(event)
      } else {
        /* eslint-disable no-alert, no-empty */
      }
    }

    /**
     * 输入框内的值
     * @param event
     * @returns
     */
    /* eslint-disable no-alert, radix */
    function handleOnInput(event: Event) {
      inputValue.value = parseInt((event.target as HTMLInputElement).value)
      if (!inputValue.value) {
        inputValue.value = props.min
        percentDisplay.value = '0%'
      } else {
        if (inputValue.value < props.min || inputValue.value > props.max) {
          return
        }
        const re = /^(?:[1-9]?\d|100)$/
        if (re.test(`${inputValue.value}`)) {
          percentDisplay.value = ((inputValue.value - props.min) * 100) / (props.max - props.min) + '%'
          emit('update:modelValue', inputValue.value)
        }
      }
    }

    /**
     * 添加disable禁用类
     */
    const disableClass = computed(() => {
      return props.disabled ? ' disabled' : ''
    })
    /**
     * 弹出框
     */
    const popover = () => {
      return (
        <div class="b-slider_popover" style={{ left: percentDisplay.value, opacity: popoverShow.value ? 1 : 0 }}>
          <div class="b-slider_popover-arrow"></div>
          <div class="b-slider_popover-content">{inputValue.value + ' ' + props.tipsRenderer}</div>
        </div>
      )
    }
    return () => (
      /* eslint-disable no-alert, no-return-assign */
      <div class="b-slider">
        {/* 整个的长度 */}
        <div
          ref={sliderRunway}
          class={'b-slider__runway' + disableClass.value}
          onMousedown={handleRunwayMousedown}
          onMouseout={() => (popoverShow.value = false)}
        >
          {/* 滑动后左边的进度条 */}
          <div class={'b-slider__bar' + disableClass.value} style={{ width: percentDisplay.value }}></div>
          <div
            class={'b-slider__button' + disableClass.value}
            style={{ left: percentDisplay.value }}
            onMousedown={handleButtonMousedown}
            onMouseenter={() => (popoverShow.value = true)}
            onMouseout={() => (popoverShow.value = false)}
          ></div>
          {props.tipsRenderer === 'null' ? '' : popover()}
        </div>
        <span class="b-min_count">{props.min}</span>
        <span class="b-max_count">{props.max}</span>
        {renderShowInput()}
      </div>
    )
  },
})
