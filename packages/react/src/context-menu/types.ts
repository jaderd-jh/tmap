export interface ContextMenuProps extends T.ContextMenuEvents, T.ContextMenuOptions {
  /**
   * 地图右键时是否打开菜单
   * @default true
   */
  visible?: boolean
  children?: JSX.Element | JSX.Element[]
}

export interface ContextMenuItem {
  /**
   * 菜单项索引（已默认注入，不用传 ）
   */
  index?: number
  /**
   * 右键菜单实例（已默认注入，不用传 ）
   */
  contextMenu?: T.ContextMenu
  /**
   * 菜单项显示的文本
   * @description 不可控，MenuItem.setText() 失效
   */
  text?: string
  /**
   * 菜单项内容
   * @description 不支持 HTMLElement
   */
  children?: string
  /** 单击事件 */
  onClick?: (lnglat?: T.LngLat) => void
}

export interface SeparatorProps {
  /** 需要插入分隔线的菜单项索引，（已默认注入，不用传 ） */
  index?: number
  /** 菜单实例，（已默认注入，不用传 ） */
  contextMenu?: T.ContextMenu
}
