## 覆盖物 - 图像标注

### 🔨 示例
```jsx
import { APILoader, Map, Marker } from '@jhqn/react-tmap'
import { useState } from 'react'

const Example = () => {
  const [visible, setVisible] = useState(true)
  const [draggable, setDraggable] = useState(false)

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '隐藏' : '显示'}
      </button>
      <button onClick={() => setDraggable(!draggable)}>
        {draggable ? '关闭拖拽' : '启用拖拽'}
      </button>
      <Marker
        draggable={draggable}
        icon={{
          iconUrl: 'http://api.tianditu.gov.cn/img/map/markerA.png',
          iconSize: [19, 27],
          iconAnchor: [10, 25],
        }}
        lngLat={[120.26195, 29.27817]}
        visible={visible}
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

| 事件        | 说明                                 | 类型                                          |
| ----------- | ------------------------------------ | --------------------------------------------- |
| onClick     | 点击标注图标后会触发此事件           | ({type,target,lnglat,containerPoint}) => void |
| onDblClick  | 双击标注图标后会触发此事件           | ({type,target,lnglat,containerPoint}) => void |
| onMouseDown | 鼠标在标注图标上按下触发此事件       | ({type,target,lnglat,containerPoint}) => void |
| onMouseUp   | 鼠标在标注图标释放触发此事件         | ({type,target,lnglat,containerPoint}) => void |
| onMouseOut  | 鼠标离开标注图标时触发此事件         | ({type,target,lnglat,containerPoint}) => void |
| onMouseOver | 当鼠标进入标注图标区域时会触发此事件 | ({type,target,lnglat,containerPoint}) => void |
| onDragStart | 当用户拖动标注图标时触发             | ({type,target }) => void                      |
| onDrag      | 当用户拖动标注图标时不断触发         | ({type,target,lnglat }) => void               |
| onDragEnd   | 当用户停止拖动标注图标时触发         | ({type,target,lnglat }) => void               |
| onRemove    | 移除标注图标时触发                   | ({type,target }) => void                      |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/overlay/index.zh-CN.md#实例方法)

| 方法                | 说明                           | 类型                                     | 值  |
| ------------------- | ------------------------------ | ---------------------------------------- | --- |
| getType             | 叠加层类型                     | () => number                             | 2   |
| getMap              | 返回标注所在的map对象          | () => Map                                |     |
| setIcon             | 设置标注所用的图标对象         | (icon: Icon) => void                     |     |
| getIcon             | 返回标记显示时所使用的图标对象 | () => Icon                               |     |
| setLngLat           | 设置标注所在的地理位置坐标     | (lnglat: LngLat) => void                 |     |
| getLngLat           | 返回标注所在的地理位置坐标     | () => LngLat                             |     |
| setZIndexOffset     | 设置z-index                    | (num: number) => void                    |     |
| enableDragging      | 开启标注拖拽功能               | () => void                               |     |
| disableDragging     | 关闭标注拖拽功能               | () => void                               |     |
| setOpacity          | 设置标注透明度                 | (opacity: number) => void                |     |
| openInfoWindow      | 打开信息窗                     | (infoWindow: InfoWindow) => void         |     |
| closeInfoWindow     | 关闭信息窗                     | () => void                               |     |
| addEventListener    | 添加事件监听函数               | (event:String, handler:Function) => void |     |
| removeEventListener | 移除事件监听函数               | (event:String, handler:Function) => void |     |
