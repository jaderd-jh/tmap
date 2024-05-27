declare namespace T {
  /** 此类是表示一个图层容器，用于存储T.Overlay的继承的图层 */
  class LayerGroup {
    /**
     * 构建一个存储图层的容器。
     * @param layers 叠加层数组
     */
    constructor(layers: Overlay[])
    /** 从容器中增加一个图层 */
    addLayer(layer: Overlay): void
    /** 从容器中移除一个图层 */
    removeLayer(layer: Overlay): void
    /** 判断图层是否在容器中 */
    hasLayer(layer: Overlay): boolean
    /** 得到容器中的所有图层 */
    getLayers(): Overlay[]
    /** 清除容器中的所有图层 */
    clearLayers(): void
    /** 设置容器Z值 */
    setZIndex(): void
    /** 通过ID获取其对应的图层 */
    getLayer(id: string): Overlay
    /** 获取容器中存在图层的唯一ID */
    getLayerId(layer: Overlay): string
  }
}
