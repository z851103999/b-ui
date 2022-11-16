import { defineComponent } from 'vue'
import Icon from '../icon'

export default defineComponent({
  emits: ['click'],
  setup(props, { emit }) {
    return () => (
      <div class="b-message__icon--close" onClick={(e) => emit('click', e)}>
        <Icon name="close" size="14" />
      </div>
    )
  },
})
