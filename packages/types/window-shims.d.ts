interface Window {
  /**
   * 地图类型 - 普通街道视图
   */
  readonly TMAP_NORMAL_MAP: T.MapType
  /**
   * 地图类型 - 卫星视图
   */
  readonly TMAP_SATELLITE_MAP: T.MapType
  /**
   * 地图类型 - 卫星和路网的混合视图
   */
  readonly TMAP_HYBRID_MAP: T.MapType
  /**
   * 地图类型 - 地形视图
   */
  readonly TMAP_TERRAIN_MAP: T.MapType
  /**
   * 地图类型 - 地形和路网的混合视图
   */
  readonly TMAP_TERRAIN_HYBRID_MAP: T.MapType

  /**
   * 控件 - 地图的左上角（topleft）
   * @constant
   */
  readonly T_ANCHOR_TOP_LEFT: string
  /**
   * 控件 - 地图的右上角（topright）
   * @constant
   */
  readonly T_ANCHOR_TOP_RIGHT: string
  /**
   * 控件 - 地图的左下角（bottomleft）
   * @constant
   */
  readonly T_ANCHOR_BOTTOM_LEFT: string
  /**
   * 控件 - 地图的右下角（bottomright）
   * @constant
   */
  readonly T_ANCHOR_BOTTOM_RIGHT: string

  /**
   * 海量点预设形状 - 圆形（CIRCLE）
   * @constant
   */
  readonly TDT_POINT_SHAPE_CIRCLE: string
  /**
   * 海量点预设形状 - 星形（STAR）
   * @constant
   */
  readonly TDT_POINT_SHAPE_STAR: string
  /**
   * 海量点预设形状 - 方形（SQUARE）
   * @constant
   */
  readonly TDT_POINT_SHAPE_SQUARE: string
  /**
   * 海量点预设形状 - 菱形（RHOMBUS）
   * @constant
   */
  readonly TDT_POINT_SHAPE_RHOMBUS: string
  /**
   * 海量点预设形状 - 滴状（WATERDROP）
   * @constant
   */
  readonly TDT_POINT_SHAPE_WATERDROP: string

  /**
   * 海量点预设尺寸 - 超小
   * @constant
   * @description 宽高为2px*2px
   */
  readonly TDT_POINT_SIZE_TINY: string
  /**
   * 海量点预设尺寸 - 很小
   * @constant
   * @description 宽高为4px*4px
   */
  readonly TDT_POINT_SIZE_SMALLER: string
  /**
   * 海量点预设尺寸 - 小
   * @constant
   * @description 宽高为8px*8px
   */
  readonly TDT_POINT_SIZE_SMALL: string
  /**
   * 海量点预设尺寸 - 正常
   * @constant
   * @description 宽高为10px*10px
   */
  readonly TDT_POINT_SIZE_NORMAL: string
  /**
   * 海量点预设尺寸 - 大
   * @constant
   * @description 宽高为16px*16px
   */
  readonly TDT_POINT_SIZE_BIG: string
  /**
   * 海量点预设尺寸 - 很大
   * @constant
   * @description 宽高为20px*20px
   */
  readonly TDT_POINT_SIZE_BIGGER: string
  /**
   * 海量点预设尺寸 - 超大
   * @constant
   * @description 宽高为30px*30px
   */
  readonly TDT_POINT_SIZE_HUGE: string
}
