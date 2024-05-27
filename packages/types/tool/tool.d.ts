declare namespace T {
  class Tool<E = any> {
    /** 开启工具 */
    open: () => boolean
    /** 关闭工具 */
    close: () => void
    /** 清空工具绘制的所有图形 */
    clear: () => void
    /** 添加事件监听函数 */
    addEventListener: <U extends keyof E>(event: U, handler: E[U]) => void
    /** 移除事件监听函数 */
    removeEventListener: <U extends keyof E>(event: U, handler: E[U]) => void
  }
}
