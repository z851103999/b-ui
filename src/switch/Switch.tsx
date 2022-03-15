import { defineComponent, renderSlot, useSlots } from 'vue'
import { switchProps } from './switch-types'
import './switch.less'

export default defineComponent({
  name: 'BSwitch',
  props: switchProps,
  emits: ['change', 'update:checked'],
  setup(props, { emit }) {
    const canChange = () => {
      if (props.disabled) {
        return Promise.resolve(false)
      }
      if (props.beforeChange) {
        const res = props.beforeChange(!props.checked)
        return typeof res === 'boolean' ? Promise.resolve(res) : res
      }

      return Promise.resolve(true)
    }
    const toggle = () => {
      canChange().then((res) => {
        if (!res) {
          return
        }
        emit('update:checked', !props.checked)
        emit('change', !props.checked)
      })
    }

    return {
      toggle,
    }
  },

  render() {
    const { size, checked, disabled, color, toggle } = this
    const outerCls = {
      'b-switch': true,
      [`b-switch-${size}`]: size,
      'b-checked': checked,
      'b-disabled': disabled,
    }
    const outerStyle = [
      `background: ${checked && !disabled ? color : ''}`,
      `border-color: ${checked && !disabled ? color : ''}`,
    ]

    const checkedContent = renderSlot(useSlots(), 'checkedContent')
    const uncheckedContent = renderSlot(useSlots(), 'uncheckedContent')
    return (
      <span class={outerCls} style={outerStyle} onClick={toggle}>
        <span class="b-switch-inner-wrapper">
          <div class="b-switch-inner">{checked ? checkedContent : uncheckedContent}</div>
          <small></small>
        </span>
      </span>
    )
  },
})
