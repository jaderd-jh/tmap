declare namespace T {
  /** 在地图容器中，创建一个可以随意画线的画笔工具 */
  class PaintBrushTool extends Tool {
    /**
     * 创建一个可以随意画线的画笔工具
     * @param opts 详见MarkerClusterOptions类
     */
    constructor(map: Map, opts?: PaintBrushToolOptions)

    /** 获取所有笔迹  */
    getLayers: () => Polyline[]
  }

  interface PaintBrushToolOptions {
    /**
     * 保持工具的连续可用性（不可控）
     * @default false
     */
    keepdrawing?: boolean
    /** 画笔留下笔迹的样式（不可控），default:{color:"blue",weight:10,opacity:0.5} */
    style?: Partial<{ color: string; weight: number; opacity: number }>
  }
}
