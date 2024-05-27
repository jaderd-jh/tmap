declare namespace T {
  /** 此类是地图API的核心类，用来实例化一个地图 */
  class Map {
    /**
     * 构造函数
     * 在指定的容器内创建地图实例，之后需要调用Map.centerAndZoom()方法对地图进行初始化。未进行初始化的地图将不能进行任何操作。
     * @param container 用于显示地图的DIV对象
     * @param opts 地图属性对象，请参考MapOptions
     */
    constructor(container: string | HTMLElement, opts?: MapOptions)

    /** -------------- ⬇ 配置方法 -------------- */
    /** 启用地图拖拽，默认启用 */
    enableDrag: () => void
    /** 禁用地图拖拽 */
    disableDrag: () => void
    /** 是否启用地图拖拽，true表示启用，false表示禁止 */
    isDrag: () => boolean
    /** 启用滚轮放大缩小，默认启用 */
    enableScrollWheelZoom: () => void
    /** 禁用滚轮放大缩小 */
    disableScrollWheelZoom: () => void
    /** 是否启用滚轮放大缩小，true表示启用，false表示禁止 */
    isScrollWheelZoom: () => boolean
    /** 启用双击放大，默认启用 */
    enableDoubleClickZoom: () => void
    /** 禁用双击放大 */
    disableDoubleClickZoom: () => void
    /** 是否启用双击放大，true表示启用，false表示禁止 */
    isDoubleClickZoom: () => boolean
    /** 启用键盘操作，默认启用 */
    enableKeyboard: () => void
    /** 禁用键盘操作 */
    disableKeyboard: () => void
    /** 是否启用键盘操作，true表示启用，false表示禁止 */
    isKeyboard: () => boolean
    /** 启用地图惯性拖拽，默认启用 */
    enableInertia: () => void
    /** 禁用地图惯性拖拽 */
    disableInertia: () => void
    /** 是否启用地图惯性拖拽，true表示启用，false表示禁止 */
    isInertia: () => boolean
    /** 启用连续缩放效果，默认启用 */
    enableContinuousZoom: () => void
    /** 禁用连续缩放效果 */
    disableContinuousZoom: () => void
    /** 是否启用连续缩放效果，true表示启用，false表示禁止 */
    isContinuousZoom: () => boolean
    /** 启用双指操作缩放，默认启用 */
    enablePinchToZoom: () => void
    /** 禁用双指操作缩放 */
    disablePinchToZoom: () => void
    /** 是否启用操作缩放，true表示启用，false表示禁止 */
    isPinchToZoom: () => boolean
    /** 启用自动适应容器尺寸变化，默认启用 */
    enableAutoResize: () => void
    /** 禁用自动适应容器尺寸变化 */
    disableAutoResize: () => void
    /** -------------- ⬆ 配置方法 -------------- */

    /** -------------- ⬇ 获取地图状态方法 -------------- */
    /** 返回地图投影类型信息 */
    getCode: () => string
    /** 返回地图可视区域，以地理坐标表示 */
    getBounds: () => LngLatBounds
    /** 返回地图当前中心点 */
    getCenter: () => LngLat
    /** 返回地图视图的大小，以像素表示 */
    getSize: () => Point
    /** 返回地图当前缩放级别 */
    getZoom: () => number
    /**
     * 返回两点之间的距离，单位是米
     * @param start 起点地理坐标
     * @param end 终点地理坐标
     */
    getDistance: (start: LngLat, end: LngLat) => number
    /** 根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别 */
    getViewport: (view: Array<LngLat>) => { center: LngLat; zoom: number }
    /** -------------- ⬆ 获取地图状态方法 -------------- */

    /** -------------- ⬇ 修改地图状态方法 -------------- */
    /** 初始化定位地图 */
    centerAndZoom: (lnglat: LngLat, zoom: number) => void
    /**
     * 将地图的中心点变换到指定的地理坐标，如果同时指定了缩放等级，则同时缩放到指定的等级
     * @param lnglat 地图的中心点地理坐标
     * @param zoom 地图的比例尺级别
     */
    panTo: (lnglat: LngLat, zoom?: number) => void
    /**
     * 将地图在水平位置上移动x像素，垂直位置上移动y像素
     * @param position  像素坐标
     */
    panBy: (position: Point) => void
    /**
     * 将视图缩放到指定的缩放等级，中心点坐标不变
     * @param zoom 地图显示级别
     */
    setZoom: (zoom: number) => void
    /** 放大一级视图 */
    zoomIn: () => void
    /** 缩小一级视图 */
    zoomOut: () => void
    /** 通知地图其容器大小已更改。在更改了容器对象的大小后调用此方法，以便地图能够调整自己适合于新的大小 */
    checkResize: () => void
    /**
     * 设置地图最小显示级别
     * @param level  地图显示最小级别
     */
    setMinZoom: (level: number) => void
    /**
     * 设置地图最大显示级别
     * @param level 地图最大显示级别
     */
    setMaxZoom: (level: number) => void
    /**
     * 设置地图的显示范围
     * @param bounds  地图坐标范围LngLatBounds
     */
    setMaxBounds: (bounds: LngLatBounds) => void
    /** 根据提供的坐标点数组设置地图视野，调整后的视野会保证包含提供的坐标点 */
    setViewport: (view: LngLat[]) => void
    /**
     * 设置地图样式
     * @param style  地图的样式，分别为black，indigo
     */
    setStyle: (style: MapStyle) => void
    /** -------------- ⬆ 修改地图状态方法 -------------- */

    /** -------------- ⬇ 坐标变换 -------------- */
    /** 将地图上相对于container的像素坐标转化为地理坐标，参数是Point，返回值类型是LngLat。 pixel参数是像素对象 */
    containerPointToLngLat: (pixel: Point) => LngLat
    /** 将地理坐标转化为地图上点的像素坐标，相对于container左上角，参数是LngLat，返回值是Point */
    lngLatToContainerPoint: (lnglat: LngLat) => Point
    /** 将地理坐标转化为地图图层上点的像素坐标，相对于地图图层左上角，参数是LngLat，返回值是Point */
    lngLatToLayerPoint: (lnglat: LngLat) => Point
    /**
      返回给定地图上点的地理坐标系。将地图上相对于地图图层的像素坐标转化为地理坐标，参数是Point，返回值类型是LngLat。pixel参数是像素对象
     */
    layerPointToLngLat: (pixel: Point) => LngLat
    /** -------------- ⬆ 坐标变换 -------------- */

    /** -------------- ⬇ 覆盖物方法 -------------- */
    /**
     * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
     * @param overlay  覆盖物对象
     */
    addOverLay: (overlay: Overlay) => void
    /** 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用 */
    removeOverLay: (overlay: Overlay) => void
    /** 清除地图上所有覆盖物 */
    clearOverLays: () => void
    /** 返回地图上的所有覆盖物 */
    getOverlays: () => Overlay[]
    /** 返回地图覆盖物容器列表 */
    getPanes: () => Record<string, HTMLElement>
    /**
     * 在地图上打开信息窗口
     * @param infowin 信息窗口对象InfoWindow
     * @param lnglat 在地图上打开的地理位置坐标
     */
    openInfoWindow: (infowin: InfoWindow, lnglat: LngLat) => void
    /** 关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭 */
    closeInfoWindow: () => void
    /** -------------- ⬆ 覆盖物方法 -------------- */

    /** -------------- ⬇ 控件方法 -------------- */
    /**
     * 将控件添加到地图，一个控件实例只能向地图中添加一次
     * @param control 控件对象
     */
    addControl: (control: Control) => void
    /** 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用 */
    removeControl: (control: Control) => void
    /** 返回地图的容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器 */
    getContainer: () => HTMLElement
    /** -------------- ⬆ 控件方法 -------------- */

    /** -------------- ⬇ 地图图层方法 -------------- */
    /** 获取所有叠加层对象，可以自己判断需要移除哪些叠加层 */
    getLayers: () => Array<TileLayer>
    /**
     * 给地图添加一个叠加层对象
     * @param layer TileLayer对象
     */
    addLayer: (layer: TileLayer) => void
    /** 移除一个叠加层对象 */
    removeLayer: (layer: TileLayer) => void
    /** 移除所有叠加层对象 */
    clearLayers: () => void
    addContextMenu: (cContextMenu: ContextMenu) => void
    /** 添加事件监听函数 */
    addEventListener: <U extends keyof T.MapProtoEvents>(event: U, handler: E[U]) => void
    /** 移除事件监听函数 */
    removeEventListener: <U extends keyof T.MapProtoEvents>(event: U, handler: E[U]) => void
    /** -------------- ⬆ 地图图层方法 -------------- */
  }

  type MapStyle = 'black' | 'indigo'

  interface MapOptions {
    /**
     * 指定地图的投影方式（不可控），目前支持的地图投影方式有：EPSG:900913(墨卡托投影)，EPSG:4326(大地平面投影)
     * @description 墨卡托投影 EPSG:900913 和 大地平面投影 EPSG:4326（1万次/天）每次瓦片加载都消耗访问次数，极易达到访问上限
     * @default EPSG:900913
     */
    projection?: string | null
    /** 地图允许展示的最小级别（可控） */
    minZoom?: number | null
    /** 地图允许展示的最大级别（可控） */
    maxZoom?: number | null
    /**
     * 设置地图视野（可控）
     * @description 当这个选项被设置后，地图被限制在给定的地理边界内，当用户平移将地图拖动到视图以外的范围时会出现弹回的效果，并且也不允许缩小视图到给定范围以外的区域（这取决于地图的尺寸）。使用setMaxBounds方法可以动态地设置这种约束
     */
    maxBounds?: LngLatBounds | null
    /** 地图的初始化中心点（可控） */
    center?: LngLat | null
    /** 地图的初始化级别（可控） */
    zoom?: number

    /** ------------------ ⬇ 补充类型 ------------------ */

    /** 地图视野（可控） */
    viewport?: LngLat[]
    /** 地图的样式，分别为black，indigo（可控） */
    style?: MapStyle

    /** ------------------ ⬆ 补充类型 ------------------ */
  }

  /** 地图事件 */

  interface MapEventBase<T> {
    /** 事件类型 */
    type: string
    /**
     * 发生事件的目标对象，不同类型返回target不同
     */
    target: T
  }

  interface MapEvent<T = any> extends MapEventBase<T> {
    /** 经纬度坐标 */
    lnglat: LngLat
    /** x、y坐标 */
    containerPoint?: Point
  }
  interface MapProtoEvents {
    /** 左键单击地图时触发此事件 */
    click: (e: MapEvent) => void
    /** 鼠标双击地图时会触发此事件 */
    dblclick: (e: MapEvent) => void
    /** 右键单击地图时触发此事件 */
    contextmenu: (e: MapEvent) => void
    /** 鼠标在地图区域移动过程中触发此事件 */
    mousemove: (e: MapEvent) => void
    /** 鼠标移入地图区域时触发此事件 */
    mouseover: (e: MapEvent) => void
    /** 鼠标移出地图区域时触发此事件 */
    mouseout: (e: MapEvent) => void
    /** 地图移动开始时触发此事件 */
    movestart: (e: MapEventBase) => void
    /** 地图移动过程中触发此事件 */
    move: (e: MapEventBase) => void
    /** 地图移动结束时触发此事件 */
    moveend: (e: MapEventBase) => void
    /** 地图更改缩放级别开始时触发触发此事件 */
    zoomstart: (e: MapEventBase) => void
    /** 地图更改缩放级别结束时触发触发此事件 */
    zoomend: (e: MapEventBase) => void
    /** 当使用Map.addOverLay()方法向地图中添加单个覆盖物时会触发此事件 */
    addoverlay: (e: MapEventBase & { addoverlay: Overlay }) => void
    /** 当使用Map.removeOverLay()方法移除单个覆盖物时会触发此事件 */
    removeoverlay: (e: MapEventBase & { removeoverlay: Overlay }) => void
    /** 当使用Map.addControl()方法向地图中添加单个控件时会触发此事件 */
    addcontrol: (e: MapEventBase & { addcontrol: Control }) => void
    /** 当使用Map.removeControl()方法移除单个控件时会触发此事件 */
    removecontrol: (e: MapEventBase & { removecontrol: Control }) => void
    /** 当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件 */
    clearoverlays: (e: MapEventBase) => void
    /** 开始拖拽地图时触发 */
    dragstart: (e: MapEventBase) => void
    /** 拖拽地图过程中触发 */
    drag: (e: MapEventBase) => void
    /** 停止拖拽地图时触发 */
    dragend: (e: MapEventBase) => void
    /** 添加一个自定义地图图层时触发此事件 */
    layeradd: (e: MapEventBase & { layer: TileLayer }) => void
    /** 移除一个自定义地图图层时触发此事件 */
    layerremove: (e: MapEventBase & { layer: TileLayer }) => void
    /** 调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图瓦片 */
    load: (e: MapEventBase) => void
    /** 地图可视区域大小发生变化时会触发此事件 */
    resize: (e: MapEventBase & { newSize: Point; oldSize: Point }) => void
    /** 调用setMinZoom和setMaxZoom时会触发此事件 */
    levels: (e: MapEventBase & { minZoom: number; maxZoom: number }) => void
    /** 触摸开始时触发此事件，仅适用移动设备 */
    touchstart: (e: MapEvent) => void
    /** 触摸移动时触发此事件，仅适用移动设备 */
    touchmove: (e: MapEvent) => void
    /** 触摸结束时触发此事件，仅适用移动设备 */
    touchend: (e: MapEvent) => void
    /** 长按事件，仅适用移动设备 */
    longpress: (e: MapEvent) => void
  }

  interface MapEvents {
    /** 左键单击地图时触发此事件 */
    onClick: (e: MapEvent) => void
    /** 鼠标双击地图时会触发此事件 */
    onDblClick: (e: MapEvent) => void
    /** 右键单击地图时触发此事件 */
    onContextMenu: (e: MapEvent) => void
    /** 鼠标在地图区域移动过程中触发此事件 */
    onMouseMove: (e: MapEvent) => void
    /** 鼠标移入地图区域时触发此事件 */
    onMouseOver: (e: MapEvent) => void
    /** 鼠标移出地图区域时触发此事件 */
    onMouseOut: (e: MapEvent) => void
    /** 地图移动开始时触发此事件 */
    onMoveStart: (e: MapEventBase) => void
    /** 地图移动过程中触发此事件 */
    onMove: (e: MapEventBase) => void
    /** 地图移动结束时触发此事件 */
    onMoveEnd: (e: MapEventBase) => void
    /** 地图更改缩放级别开始时触发触发此事件 */
    onZoomStart: (e: MapEventBase) => void
    /** 地图更改缩放级别结束时触发触发此事件 */
    onZoomEnd: (e: MapEventBase) => void
    /** 当使用Map.addOverLay()方法向地图中添加单个覆盖物时会触发此事件 */
    onAddOverlay: (e: MapEventBase & { addoverlay: Overlay }) => void
    /** 当使用Map.removeOverLay()方法移除单个覆盖物时会触发此事件 */
    onRemoveOverlay: (e: MapEventBase & { removeoverlay: Overlay }) => void
    /** 当使用Map.addControl()方法向地图中添加单个控件时会触发此事件 */
    onAddControl: (e: MapEventBase & { addcontrol: Control }) => void
    /** 当使用Map.removeControl()方法移除单个控件时会触发此事件 */
    onRemoveControl: (e: MapEventBase & { removecontrol: Control }) => void
    /** 当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件 */
    onClearOverlays: (e: MapEventBase) => void
    /** 开始拖拽地图时触发 */
    onDragstart: (e: MapEventBase) => void
    /** 拖拽地图过程中触发 */
    onDrag: (e: MapEventBase) => void
    /** 停止拖拽地图时触发 */
    onDragend: (e: MapEventBase) => void
    /** 添加一个自定义地图图层时触发此事件 */
    onLayerAdd: (e: MapEventBase & { layer: TileLayer }) => void
    /** 移除一个自定义地图图层时触发此事件 */
    onLayerRemove: (e: MapEventBase & { layer: TileLayer }) => void
    /** 调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图瓦片 */
    onLoad: (e: MapEventBase) => void
    /** 地图可视区域大小发生变化时会触发此事件 */
    onResize: (e: MapEventBase & { newSize: Point; oldSize: Point }) => void
    /** 调用setMinZoom和setMaxZoom时会触发此事件 */
    onLevels: (e: MapEventBase & { minZoom: number; maxZoom: number }) => void
    /** 触摸开始时触发此事件，仅适用移动设备 */
    onTouchStart: (e: MapEvent) => void
    /** 触摸移动时触发此事件，仅适用移动设备 */
    onTouchMove: (e: MapEvent) => void
    /** 触摸结束时触发此事件，仅适用移动设备 */
    onTouchEnd: (e: MapEvent) => void
    /** 长按事件，仅适用移动设备 */
    onLongPress: (e: MapEvent) => void
  }

  interface MapEventListener<E> {
    /** 添加事件监听函数 */
    addEventListener: <U extends keyof E>(event: U, handler: E[U]) => void
    /** 移除事件监听函数 */
    removeEventListener: <U extends keyof E>(event: U, handler: E[U]) => void
  }
}
