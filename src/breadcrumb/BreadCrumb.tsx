import { defineComponent, provide } from 'vue'
import { breadcrumbProps, SourceConfig } from './breadcrumb-types'
import BBreadcrumbItem from './breadcrumb-item'
import { getPropsSlot } from '../utils/props-utils'
import './breadcrumb.less'

export default defineComponent({
  name: 'BBreadcrumb',
  components: {
    BBreadcrumbItem,
  },
  props: breadcrumbProps,
  setup(props, { slots }) {
    const separatorIcon = getPropsSlot(slots, props, 'separatorIcon') ?? '/'
    // console.log(separatorIcon)
    provide('separatorIcon', separatorIcon)
    /**
     * 渲染面包屑
     * @param item
     */
    const renderBreadcrumbItemRouted = (item: SourceConfig) => {
      return (
        <b-breadcrumb-item to={`path:${item.link}`} replace={item.replace}>
          {item.title}
        </b-breadcrumb-item>
      )
    }
    /**
     * 渲染面包屑列表
     * @param source
     */
    const renderBreadItemList = (source: SourceConfig[]) => {
      return source.map((item: SourceConfig) => {
        if (!item.noNavigation && item.linkType === 'routerLink') {
          return renderBreadcrumbItemRouted(item)
        }
        return (
          <b-breadcrumb-item>
            {!item.noNavigation && (!item.linkType || item.linkType === 'hrefLink') ? (
              <a href={item.link} target={item.target ? item.target : '_self'}>
                {item.title}
              </a>
            ) : null}
            {item.noNavigation ? <span>{item.title}</span> : null}
          </b-breadcrumb-item>
        )
      })
    }

    return () => {
      return (
        <div class="b-breadcrumb">
          {props.source && props.source.length ? renderBreadItemList(props.source) : slots.default?.()}
        </div>
      )
    }
  },
})
