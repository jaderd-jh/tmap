export interface ContextMenuProps extends T.ContextMenuEvents, T.ContextMenuOptions {
  /** 地图右键是否打开菜单，默认打开 */
  visible?: boolean
  children?: JSX.Element | JSX.Element[]
}

export interface ContextMenuItem {
  /** 菜单项显示的文本 */
  text?: string
  /** 右键菜单实例 */
  contextMenu?: T.ContextMenu
  /** 菜单项内容 */
  children?: string
  /** 单击事件 */
  onClick?: (lnglat?: T.LngLat) => void
  /** 菜单项索引 */
  index?: number
}

export interface SeparatorProps {
  /** 需要插入分隔线的菜单项索引，（已默认注入，不用传 ） */
  index?: number
  /** 菜单实例，（已默认注入，不用传 ） */
  contextMenu?: T.ContextMenu
}
