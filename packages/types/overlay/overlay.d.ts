declare namespace T {
  type OverlayType = 1 | 2 | 3 | 4 | 5 | 6 | 8
  /** 叠加层类都直接或间接继承于此基类。如果希望在地图上显示自定义的叠加层对象类型，可以继承这一基类 */

  class OverlayEventListener<E = OverlayProtoEventsCommonProps> {
    /** 添加事件监听函数 */
    addEventListener: <U extends keyof E>(event: U, handler: E[U]) => void
    /** 移除事件监听函数 */
    removeEventListener: <U extends keyof E>(event: U, handler: E[U]) => void
  }
  class OverlayCommon<E = OverlayProtoEventsCommonProps> extends OverlayEventListener<E> {
    /** 当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法 */
    update: () => void
    /** 在地图上显示叠加层 */
    show: () => void
    /** 在地图上隐藏叠加层 */
    hide: () => void
    /** 判断叠加层是否隐藏，返回 true 表示当前叠加层是隐藏的，否则是处于显示状态 */
    isHidden: () => boolean
    /** 对OverlayOptions属性值赋值 */
    setOptions: (opt: OverlayOptions) => void
    /** 返回叠加物所在的容器的标签 */
    getElement: () => HTMLElement
    /**
     * 叠加层类型
     *  - Label：1
     *  - Marker：2;
     *  - InfoWindow：3
     *  - Polyline：4
     *  - Polygon：5
     *  - Rectangle：6
     *  - Circle：8
     */
    getType: () => OverlayType
  }
  class Overlay<E = OverlayProtoEventsCommonProps> extends OverlayCommon<E> {
    /** 构造函数时传递参数，对OverlayOptions属性值进行赋值 */
    // initialize: (...arg: any) => void
    /** 向地图上添加叠加物。当调用map.addOverLay时，API将调用此方法。自定义叠加物时需要实现此方法。自定义叠加物时需要将覆盖物对应的HTML元素返回 */
    onAdd: (map: Map) => void
    /** 移除叠加物，释放覆盖物对象所占用的内存。自定义叠加物时需要实现此方法 */
    onRemove: () => void
  }

  interface OverlayOptions {
    /**
     * 叠加层类型，对于自定义叠加层，也可以设定一个 Number 型的叠加层类型。
     *  - Label：1
     *  - Marker：2;
     *  - InfoWindow：3
     *  - Polyline：4
     *  - Polygon：5
     *  - Rectangle：6
     *  - Circle：8
     * @description 不可控
     */
    type?: OverlayType
  }

  /** ---------------- ⬇ 覆盖物公共点击事件 ---------------- */

  interface OverlayProtoEventsCommonProps<T> {
    /** 鼠标左键单击事件 */
    click?: (event: MapEvent<T>) => void
    /** 鼠标左键双击事件 */
    dblclick?: (event: MapEvent<T>) => void
    /** 鼠标按下 */
    mousedown?: (event: MapEvent<T>) => void
    /** 鼠标抬起 */
    mouseup?: (event: MapEvent<T>) => void
    /** 鼠标移出 */
    mouseout?: (event: MapEvent<T>) => void
    /** 鼠标经过 */
    mouseover?: (event: MapEvent<T>) => void
  }

  interface OverlayEventsCommonProps<T> {
    /** 鼠标左键单击事件 */
    onClick?: (event: MapEvent<T>) => void
    /** 鼠标左键双击事件 */
    onDblClick?: (event: MapEvent<T>) => void
    /** 鼠标按下 */
    onMouseDown?: (event: MapEvent<T>) => void
    /** 鼠标抬起 */
    onMouseUp?: (event: MapEvent<T>) => void
    /** 鼠标移出 */
    onMouseOut?: (event: MapEvent<T>) => void
    /** 鼠标经过 */
    onMouseOver?: (event: MapEvent<T>) => void
  }
  /** ---------------- ⬆ 覆盖物公共事件 ---------------- */
}
