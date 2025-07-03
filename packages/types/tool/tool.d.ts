declare namespace T {
  class Tool<T = any> {
    /** 开启工具 */
    open: () => boolean
    /** 关闭工具 */
    close: () => void
    /** 清空工具绘制的所有图形 */
    clear: () => void
    /** 添加事件监听函数 */
    addEventListener: <E extends keyof T>(event: E, handler: T[E]) => void
    /** 移除事件监听函数 */
    removeEventListener: <E extends keyof T>(event: E, handler: T[E]) => void
  }
}
