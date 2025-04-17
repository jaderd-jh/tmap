## 覆盖物 - 图像标注

### 🔨 示例
```jsx
import { APILoader, Map, Marker } from '@jhqn/react-tmap'
import { useState } from 'react'

const Example = () => {
  const [draggable, setDraggable] = useState(false)

  return (
    <>
      <div style={{ background: 'white', padding: 10, position: 'absolute', color: 'black', fontSize: 16, zIndex: 999 }}>
        <div onClick={() => setDraggable(!draggable)}>
          {draggable ? '关闭拖拽' : '启用拖拽'}
        </div>
      </div>
      <Marker
        draggable={draggable}
        icon={{
          iconUrl: 'http://api.tianditu.gov.cn/img/map/markerA.png',
          iconSize: [19, 27],
          iconAnchor: [10, 25],
        }}
        lngLat={[120.26195, 29.27817]}
        visible={true}
        onClick={e => window.console.log('onClick', e)}
        onDragEnd={e => window.console.log('onDragEnd', e)}
      />
    </>
  )
}

const Demo = () => (
  <APILoader
    style={{ width: '100%', height: '100%' }}
    tkey="a7a90e05a37d3f6bf76d4a9032fc9129"
  >
    <Map center={[120.255393, 29.274522]} mapStyle="black" zoom={14}>
      <Example />
    </Map>
  </APILoader>
)

export default Demo
```

## API

### Marker

| 参数         | 说明                           | 是否可控 | 类型                                                      | 默认值 |
| ------------ | ------------------------------ | -------- | --------------------------------------------------------- | ------ |
| draggable    | 决定注记是否可被鼠标或触摸拖动 | 是       | boolean                                                   | false  |
| icon         | 图标类用来表达注记             | 是       | Icon \| [IconExtendOptions](#iconextendoptions) \| string |        |
| lngLat       | 标注所在的地理位置坐标         | 是       | LngLat \| Vector2                                         |        |
| opacity      | 设置透明度                     | 是       | number                                                    | 1.0    |
| visible      | 是否可见                       | 是       | boolean                                                   | true   |
| zIndexOffset | 设置z-index                    | 是       | number                                                    | 0      |

#### IconExtendOptions

| 参数       | 说明                                        | 是否可控 | 类型              | 默认值        |
| ---------- | ------------------------------------------- | -------- | ----------------- | ------------- |
| iconUrl    | 请求图标图片的URL（脚本中的绝对或相对路径） | 否       | string            |               |
| iconSize   | 图标可视区域的大小                          | 否       | Point  \| Vector2 | Point(25, 41) |
| iconAnchor | 图标的定位锚点，相对于图标左上角的偏移值    | 否       | Point  \| Vector2 | Point(12, 41) |

### 事件

| 事件        | 说明                                              | 类型                                          |
| ----------- | ------------------------------------------------- | --------------------------------------------- |
| onClick     | 鼠标左键单击触发                                  | ({type,target,lnglat,containerPoint}) => void |
| onDblClick  | 鼠标左键双击触发                                  | ({type,target,lnglat,containerPoint}) => void |
| onMouseDown | 鼠标按下触发                                      | ({type,target,lnglat,containerPoint}) => void |
| onMouseUp   | 鼠标抬起触发                                      | ({type,target,lnglat,containerPoint}) => void |
| onMouseOut  | 鼠标移出触发                                      | ({type,target,lnglat,containerPoint}) => void |
| onMouseOver | 鼠标经过触发                                      | ({type,target,lnglat,containerPoint}) => void |
| onDragStart | 拖动时触发                                        | ({type,target }) => void                      |
| onDrag      | 拖动过程不断触发                                  | ({type,target,lnglat }) => void               |
| onDragEnd   | 停止拖动时触发                                    | ({type,target,lnglat }) => void               |
| onRemove    | 移除时触发（调用map.removeOverLay(marker)时触发） | ({type,target }) => void                      |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/overlay/index.zh-CN.md#实例方法)

| 方法                | 说明                           | 类型                                                                        | 值  |
| ------------------- | ------------------------------ | --------------------------------------------------------------------------- | --- |
| getType             | 叠加层类型                     | () => [OverlayType](/packages/react/src/overlay/index.zh-CN.md#overlaytype) | 2   |
| getMap              | 返回标注所在的map对象          | () => Map                                                                   |     |
| setIcon             | 设置标注所用的图标对象         | (icon: Icon) => void                                                        |     |
| getIcon             | 返回标记显示时所使用的图标对象 | () => Icon                                                                  |     |
| setLngLat           | 设置标注所在的地理位置坐标     | (lnglat: LngLat) => void                                                    |     |
| getLngLat           | 返回标注所在的地理位置坐标     | () => LngLat                                                                |     |
| setZIndexOffset     | 设置z-index                    | (num: number) => void                                                       |     |
| enableDragging      | 开启标注拖拽功能               | () => void                                                                  |     |
| disableDragging     | 关闭标注拖拽功能               | () => void                                                                  |     |
| setOpacity          | 设置标注透明度                 | (opacity: number) => void                                                   |     |
| openInfoWindow      | 打开信息窗                     | (infoWindow: InfoWindow) => void                                            |     |
| closeInfoWindow     | 关闭信息窗                     | () => void                                                                  |     |
| addEventListener    | 添加事件监听函数               | (event:String, handler:Function) => void                                    |     |
| removeEventListener | 移除事件监听函数               | (event:String, handler:Function) => void                                    |     |
