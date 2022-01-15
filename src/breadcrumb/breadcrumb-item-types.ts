import { ExtractPropTypes, PropType } from 'vue'

export const breadcrumbItemProps = {
  /**
   * 路由跳转对象，同vue-router 的 to
   */
  to: {
    type: [String, Object] as PropType<string | Record<string, unknown>>,
  },
  /**
   * 在使用to进行路由跳转时，启用replace将不会像history添加记录
   */
  replace: {
    type: Boolean,
    default: false,
  },
} as const
// 这是需要保持选项道具和道具之间的关系，允许使用ctrl+click导航到道具选项。看:# 3656
export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
