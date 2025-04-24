declare namespace T {
  class MenuItem {
    /**
     * 创建一个菜单项。当菜单项被点击时，系统将会以当前菜单弹出的地理坐标点作为参数调用回调函数callback
     * @param text 菜单项显示的文字
     * @param callback 点击菜单时的回调函数
     */
    // eslint-disable-next-line ts/no-unsafe-function-type
    constructor(text: string, callback: Function)

    /** 设置菜单项显示的文本 */
    setText: (text: string) => void
    /** 启用菜单项 */
    enable: () => void
    /** 禁用菜单项 */
    disable: () => void
  }

  /** ------------------ ⬇ 补充类型 ------------------ */
  interface MenuItemOptionsExtend {
    /**
     * 菜单项显示的文本
     * @description 可控
     */
    text: string
  }
  /** ------------------ ⬆ 补充类型 ------------------ */
}
