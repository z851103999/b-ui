import { defineComponent, getCurrentInstance, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { BreadcrumbItemProps, breadcrumbItemProps } from './breadcrumb-item-types'
import './breadcrumb-item.less'

export default defineComponent({
  name: 'BBreadcrumbItem',
  props: breadcrumbItemProps,
  setup(props: BreadcrumbItemProps, { slots }) {
    const separatorIcon = inject('separatorIcon')
    const linkClass = props.to ? 'is-link' : ''
    const link: any = ref(null)
    const instance = getCurrentInstance()
    const router = instance?.appContext.config.globalProperties.$router
    const handleClickLink = () => {
      if (!props.to || !router) return
      props.replace ? router.replace(props.to) : router.push(props.to)
    }

    onMounted(() => {
      link.value.addEventListener('click', handleClickLink)
    })

    onBeforeUnmount(() => {
      link.value.removeEventListener('click', handleClickLink)
    })

    return () => {
      // const renderBreadcrumbSperator = () => {
      //   return (<span class="b-breadcrumb-separator">{separatorIcon}</span>)
      // }
      return (
        <div class="b-breadcrumb-item">
          <span ref={link} class={linkClass}>
            {slots.default?.()}
          </span>
          {/* {renderBreadcrumbSperator} */}
          {/* 渲染内容变成h函数，错误原因位置 */}
          <span class="b-breadcrumb-separator">{separatorIcon}</span>
        </div>
      )
    }
  },
})
