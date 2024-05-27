import type {
  CircleToolProps,
  MarkToolProps,
  PaintBrushToolProps,
  PolygonToolProps,
  PolylineToolProps,
  RectangleToolProps,
} from '@/tool'

export type MouseToolType = 'marker' | 'polygon' | 'polyline' | 'rectangle' | 'circle' | 'paint'

export interface MouseToolProps {
  /** 是否开启绘画 */
  open?: boolean
  /** 工具类型 */
  type?: MouseToolType
  /** 各工具类型传参选项 */
  toolOptions?: {
    /** 标注工具 */
    marker?: MarkToolProps
    /** 多边形工具 */
    polygon?: PolygonToolProps
    /** 折线工具 */
    polyline?: PolylineToolProps
    /** 矩形工具 */
    rectangle?: RectangleToolProps
    /** 圆形工具 */
    circle?: CircleToolProps
    /** 画笔工具 */
    paint?: PaintBrushToolProps
  }
}

export interface MouseToolRef {
  tool?: T.Tool // 当前开启的工具
  marker?: T.MarkTool
  polygon?: T.PolygonTool
  polyline?: T.PolylineTool
  rectangle?: T.RectangleTool
  circle?: T.CircleTool
  paint?: T.PaintBrushTool
}
