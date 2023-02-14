import { defineComponent } from 'vue'
import Icon from '../icon'
/**
 * 关闭
 */
export default defineComponent({
  emits: ['click'],
  setup(props, { emit }) {
    return () => (
      <div class="b-notification__icon-close" onClick={(e) => emit('click', e)}>
        <Icon name="close" size="14px" />
      </div>
    )
  },
})
