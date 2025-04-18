## 覆盖物 - 地图

### 🔨 示例
```tsx
import { APILoader, Map } from '@jhqn/react-tmap'
import { useRef } from 'react'

const Demo = () => {
  const mapRef = useRef<T.Map>()

  return (
    <>
      <div style={{ background: 'white', padding: 10, position: 'absolute', color: 'black', fontSize: 16, zIndex: 999 }}>
        <div onClick={() => mapRef.current?.disableInertia()}>禁用地图惯性拖拽</div>
        <div onClick={() => mapRef.current?.disableScrollWheelZoom()}>禁用滚轮放大缩小</div>
        <div onClick={() => mapRef.current?.disableDoubleClickZoom()}>禁用双击放大</div>
        <div>……</div>
      </div>
      <APILoader style={{ width: '100%', height: '100%' }} tkey="a7a90e05a37d3f6bf76d4a9032fc9129">
        <Map
          ref={mapRef}
          center={[120.255393, 29.274522]}
          mapStyle="black"
          zoom={14}
          onClick={e => window.console.log(e)}
        />
      </APILoader>
    </>
  )
}

export default Demo
```

## API

### Map
| 参数       | 说明                               | 是否可控 | 类型                               | 默认值        |
| ---------- | ---------------------------------- | -------- | ---------------------------------- | ------------- |
| center     | 地图的初始化中心点                 | 是       | LngLat \| Vector2                  |               |
| maxBounds  | 地图最大视野边界                   | 是       | LngLatBounds \| [Vector2, Vector2] |               |
| maxZoom    | 地图允许展示的最大级别             | 是       | number                             |               |
| minZoom    | 地图允许展示的最小级别             | 是       | number                             |               |
| projection | 地图投影方式                       | 否       | [ProjectionType](#projectiontype)  | `EPSG:900913` |
| style      | 地图的样式                         | 是       | `black` \| `indigo`                |               |
| viewport   | 根据提供的坐标点数组，调整最佳视野 | 是       | LngLat[] \| Vector2[]              |               |
| zoom       | 地图的初始化级别                   | 是       | number                             |               |

#### ProjectionType
| 值          | 描述                                                                 |
| ----------- | -------------------------------------------------------------------- |
| EPSG:900913 | 墨卡托投影                                                           |
| EPSG:4326   | 大地平面投影，1万次/天，每次瓦片加载都消耗访问次数，极易达到访问上限 |

### 事件
| 事件            | 说明                                                        | 类型                                              |
| --------------- | ----------------------------------------------------------- | ------------------------------------------------- |
| onClick         | 左键单击地图时触发此事件                                    | ({type, target, lnglat, containerPoint}) => void  |
| onDblClick      | 鼠标双击地图时会触发此事件                                  | ({type, target, lnglat, containerPoint}) => void  |
| onContextMenu   | 右键单击地图时触发此事件                                    | ({type, target, lnglat, containerPoint}) => void  |
| onMouseMove     | 鼠标在地图区域移动过程中触发此事件                          | ({type, target, lnglat, containerPoint}) => void  |
| onMouseOver     | 鼠标移入地图区域时触发此事件                                | ({type, target, lnglat, containerPoint}) => void  |
| onMouseOut      | 鼠标移出地图区域时触发此事件                                | ({type, target, lnglat, containerPoint}) => void  |
| onMoveStart     | 地图移动开始时触发此事件                                    | ({type, target}) => void                          |
| onMove          | 地图移动过程中触发此事件                                    | ({type, target}) => void                          |
| onMoveEnd       | 地图移动结束时触发此事件                                    | ({type, target}) => void                          |
| onZoomStart     | 地图更改缩放级别开始时触发此事件                            | ({type,target}) => void                           |
| onZoomEnd       | 地图更改缩放级别结束时触发此事件                            | ({type, target}) => void                          |
| onAddOverlay    | 调用 Map.addOverLay() 添加单个覆盖物时会触发此事件          | ({type, target, addoverlay}) => void              |
| onRemoveOverlay | 调用 Map.removeOverLay() 移除单个覆盖物时会触发此事件       | ({type, target, removeoverlay}) => void           |
| onAddControl    | 调用 Map.addControl() 添加单个控件时会触发此事件            | ({type, target, addcontrol}) => void              |
| onRemoveControl | 调用 Map.removeControl() 移除单个控件时会触发此事件         | ({type, target, removecontrol}) => void           |
| onClearOverlays | 调用 Map.clearOverlays() 一次性移除全部覆盖物时会触发此事件 | ({type, target}) => void                          |
| onDragstart     | 开始拖拽地图时触发                                          | ({type, target}) => void                          |
| onDrag          | 拖拽地图过程中触发                                          | ({type, target}) => void                          |
| onDragend       | 停止拖拽地图时触发                                          | ({type, target}) => void                          |
| onLayerAdd      | 添加一个自定义地图图层时触发此事件                          | ({type, target, layer}) => void                   |
| onLayerRemove   | 移除一个自定义地图图层时触发此事件                          | ({type, target, layer}) => void                   |
| onLoad          | 调用 Map.centerAndZoom() 时触发此事件                       | ({type, target}) => void                          |
| onResize        | 地图可视区域大小发生变化时会触发此事件                      | ({type, target, newSize, oldSize}) => void        |
| onLevels        | 调用 setMinZoom 和 setMaxZoom 时会触发此事件                | ({type, target, minzoom, maxzoom }) => void       |
| onTouchStart    | 触摸开始时触发此事件，仅适用移动设备                        | ({type, target, lnglat, containerPoint }) => void |
| onTouchMove     | 触摸移动时触发此事件，仅适用移动设备                        | ({type, target, lnglat, containerPoint }) => void |
| onTouchEnd      | 触摸结束时触发此事件，仅适用移动设备                        | ({type, target, lnglat, containerPoint }) => void |
| onLongPress     | 长按事件，仅适用移动设备                                    | ({type, target, lnglat, containerPoint }) => void |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/overlay/index.zh-CN.md#实例方法)

| 方法                   | 说明                                             | 类型                                                 |
| ---------------------- | ------------------------------------------------ | ---------------------------------------------------- |
| enableDrag             | 启用地图拖拽，默认启用                           | () => void                                           |
| disableDrag            | 禁用地图拖拽                                     | () => void                                           |
| isDrag                 | 是否启用地图拖拽                                 | () => boolean                                        |
| enableScrollWheelZoom  | 启用滚轮放大缩小，默认启用                       | () => void                                           |
| disableScrollWheelZoom | 禁用滚轮放大缩小                                 | () => void                                           |
| isScrollWheelZoom      | 是否启用滚轮放大缩小                             | () => boolean                                        |
| enableDoubleClickZoom  | 启用双击放大，默认启用                           | () => void                                           |
| disableDoubleClickZoom | 禁用双击放大                                     | () => void                                           |
| isDoubleClickZoom      | 是否启用双击放大                                 | () => boolean                                        |
| enableKeyboard         | 启用键盘操作，默认启用                           | () => void                                           |
| disableKeyboard        | 禁用键盘操作                                     | () => void                                           |
| isKeyboard             | 是否启用键盘操作                                 | () => boolean                                        |
| enableInertia          | 启用地图惯性拖拽，默认启用                       | () => void                                           |
| disableInertia         | 禁用地图惯性拖拽                                 | () => void                                           |
| isInertia              | 是否启用地图惯性拖拽                             | () => boolean                                        |
| enableContinuousZoom   | 启用连续缩放效果，默认启用                       | () => void                                           |
| disableContinuousZoom  | 禁用连续缩放效果                                 | () => void                                           |
| isContinuousZoom       | 是否启用连续缩放效果                             | () => boolean                                        |
| enablePinchToZoom      | 启用双指操作缩放，默认启用                       | () => void                                           |
| disablePinchToZoom     | 禁用双指操作缩放                                 | () => void                                           |
| isPinchToZoom          | 是否启用操作缩放                                 | () => boolean                                        |
| enableAutoResize       | 启用自动适应容器尺寸变化，默认启用               | () => void                                           |
| disableAutoResize      | 禁用自动适应容器尺寸变化                         | () => void                                           |
| getCode                | 返回地图投影类型信息                             | () => string                                         |
| getBounds              | 返回地图可视区域，以地理坐标表示                 | () => LngLatBounds                                   |
| getCenter              | 返回地图当前中心点                               | () => LngLat                                         |
| getSize                | 返回地图视图的大小，以像素表示                   | () => Point                                          |
| getZoom                | 返回地图当前缩放级别                             | () => number                                         |
| getDistance            | 返回两点之间的距离（单位：米）                   | (start: LngLat, end: LngLat) => number               |
| getViewport            | 根据提供的地理区域或坐标获得最佳的地图视野       | (view: LngLat[]) => { center: LngLat; zoom: number } |
| centerAndZoom          | 初始化定位地图                                   | (lnglat: LngLat, zoom: number) => void               |
| panTo                  | 将地图的中心点变换到指定的地理坐标               | (lnglat: LngLat, zoom?: number) => void              |
| panBy                  | 将地图在水平位置上移动x像素，垂直位置上移动y像素 | (position: Point) => void                            |
| setZoom                | 将视图缩放到指定的缩放等级，中心点坐标不变       | (zoom: number) => void                               |
| zoomIn                 | 放大一级视图                                     | () => void                                           |
| zoomOut                | 缩小一级视图                                     | () => void                                           |
| checkResize            | 通知地图其容器大小已更改                         | () => void                                           |
| setMinZoom             | 设置地图最小显示级别                             | (level: number) => void                              |
| setMaxZoom             | 设置地图最大显示级别                             | (level: number) => void                              |
| setMaxBounds           | 设置地图的显示范围                               | (bounds: LngLatBounds) => void                       |
| setViewport            | 根据提供的坐标点数组设置地图视野                 | (view: LngLat[]) => void                             |
| setStyle               | 设置地图样式                                     | (style: MapStyle) => void                            |
| containerPointToLngLat | 将地图上相对于container的像素坐标转化为地理坐标  | (pixel: Point) => LngLat                             |
| lngLatToContainerPoint | 将地理坐标转化为地图上点的像素坐标               | (lnglat: LngLat) => Point                            |
| lngLatToLayerPoint     | 将地理坐标转化为地图图层上点的像素坐标           | (lnglat: LngLat) => Point                            |
| layerPointToLngLat     | 将地图图层上的像素坐标转化为地理坐标             | (pixel: Point) => LngLat                             |
| addOverLay             | 将覆盖物添加到地图中                             | (overlay: Overlay) => void                           |
| removeOverLay          | 从地图中移除覆盖物                               | (overlay: Overlay) => void                           |
| clearOverLays          | 清除地图上所有覆盖物                             | () => void                                           |
| getOverlays            | 返回地图上的所有覆盖物                           | () => Overlay[]                                      |
| getPanes               | 返回地图覆盖物容器列表                           | () => Record<string, HTMLElement>                    |
| openInfoWindow         | 在地图上打开信息窗口                             | (infowin: InfoWindow, lnglat: LngLat) => void        |
| closeInfoWindow        | 关闭在地图上打开的信息窗口                       | () => void                                           |
| addControl             | 将控件添加到地图                                 | (control: Control) => void                           |
| removeControl          | 从地图中移除控件                                 | (control: Control) => void                           |
| getContainer           | 返回地图的容器元素                               | () => HTMLElement                                    |
| getLayers              | 获取所有叠加层对象                               | () => TileLayer[]                                    |
| addLayer               | 给地图添加一个叠加层对象                         | (layer: TileLayer) => void                           |
| removeLayer            | 移除一个叠加层对象                               | (layer: TileLayer) => void                           |
| clearLayers            | 移除所有叠加层对象                               | () => void                                           |
| addContextMenu         | 添加上下文菜单                                   | (contextMenu: ContextMenu) => void                   |
| addEventListener       | 添加事件监听函数                                 | (event: string, handler: function) => void           |
| removeEventListener    | 移除事件监听函数                                 | (event: string, handler: function) => void           |
