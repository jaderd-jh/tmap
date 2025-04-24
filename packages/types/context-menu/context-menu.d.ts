declare namespace T {
  class ContextMenu {
    /**
     * 创建一个右键菜单实例
     * @param opts 右键菜单的属性对象，请参考 ContextMenuOptions
     */
    constructor(opts: ContextMenuOptions)

    /** 添加菜单项 */
    addItem: (item: MenuItem) => void
    /** 返回指定索引位置的菜单项，第一个菜单项的索引为0 */
    getItem: (index: number) => MenuItem
    /** 移除菜单项 */
    removeItem: (item?: MenuItem | number) => void
    /** 添加分隔符 */
    addSeparator: () => void
    /** 移除指定索引位置的分隔符，第一个分隔符的索引为0 */
    removeSeparator: (index: number) => void
    /** 返回所有的MenuItem，是一个数组 */
    getItems: () => MenuItem[]
    /** 返回所有分割线，是一个数组 */
    getAllSeparator: () => any[]
    /** 添加事件监听函数 */
    addEventListener: <U extends keyof ContextMenuProtoEvents>(event: U, handler: E[U]) => void
    /** 移除事件监听函数 */
    removeEventListener: <U extends keyof ContextMenuProtoEvents>(event: U, handler: E[U]) => void
  }
  interface ContextMenuOptions {
    /**
     * 指定此菜单项的宽度，菜单以最长的菜单项宽度为准
     * @description 不可控
     * @default 120
     */
    width?: number
  }

  interface ContextMenuEvent extends MapEventBase<ContextMenu> {
    /** 菜单开启时的像素坐标点 */
    point: LngLat
  }

  /** 事件 */
  interface ContextMenuProtoEvents {
    /** 右键菜单打开时触发事件 */
    open?: (event: ContextMenuEvent) => void
    /** 右键菜单关闭时触发事件 */
    close?: (event: MapEventBase) => void
  }
  interface ContextMenuEvents {
    /** 右键菜单打开时触发事件 */
    onOpen?: (event: ContextMenuEvent) => void
    /** 右键菜单关闭时触发事件 */
    onClose?: (event: MapEventBase) => void
  }
}
