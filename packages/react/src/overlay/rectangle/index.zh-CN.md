## 覆盖物 - 矩形

### 🔨 示例
```tsx
import { APILoader, Map, MapContext, Rectangle } from '@jhqn/react-tmap'
import { useContext, useRef, useState } from 'react'

const Example = () => {
  const { map } = useContext(MapContext)

  const [editable, setEditable] = useState(false)

  const rectangleRef = useRef<T.Rectangle>()

  return (
    <>
      <div style={{ background: 'white', padding: 10, position: 'absolute', color: 'black', fontSize: 16, zIndex: 999 }}>
        <div onClick={() => setEditable(!editable)}>
          {editable ? '关闭编辑' : '启用编辑'}
        </div>
        <div
          onClick={() => {
            const b = rectangleRef.current?.getBounds()
            const ne = b?.getNorthEast()
            const sw = b?.getSouthWest()
            window.console.log('地理范围', `[[${ne?.getLng()},${ne?.getLat()}],[${sw?.getLng()},${sw?.getLat()}]]`)
          }}
        >
          获取矩形地理范围
        </div>
      </div>
      <Rectangle
        ref={rectangleRef}
        bounds={[[120.24582, 29.28315], [120.27956, 29.27229]]}
        color="#ff8484"
        editable={editable}
        fillOpacity={0.25}
        opacity={1}
        visible={true}
        weight={1}
        onEdit={e => {
          window.console.log('edit', e.target.getBounds())
        }}
      />
    </>
  )
}

const Demo = () => (
  <APILoader style={{ width: '100%', height: '100%' }} tkey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Map center={[120.255393, 29.274522]} mapStyle="black" zoom={14}>
      <Example />
    </Map>
  </APILoader>
)

export default Demo
```

## API

### Rectangle

| 参数        | 说明                                    | 是否可控 | 类型                               | 默认值    |
| ----------- | --------------------------------------- | -------- | ---------------------------------- | --------- |
| color       | 矩形边线颜色                            | 是       | string                             | `#0000FF` |
| editable    | 是否启用编辑                            | 是       | boolean                            | false     |
| fillColor   | 矩形填充颜色                            | 是       | string                             | `#0000FF` |
| fillOpacity | 矩形填充的透明度（[0-1]）               | 是       | number                             | 0.2       |
| lineStyle   | 矩形边线的样式                          | 是       | `solid` \| `dashed`                | `solid`   |
| bounds      | 矩形显示范围（[西南角坐标,东北角坐标]） | 是       | LngLatBounds \| [Vector2, Vector2] |           |
| opacity     | 矩形边线的透明度（[0-1]）               | 是       | number                             | 0.5       |
| visible     | 是否可见                                | 是       | boolean                            | true      |
| weight      | 矩形边线的宽度（px）                    | 是       | number                             | 3         |

### 事件

| 事件        | 说明                                                     | 类型                                             |
| ----------- | -------------------------------------------------------- | ------------------------------------------------ |
| onClick     | 鼠标左键单击触发                                         | ({type, target, lnglat, containerPoint}) => void |
| onDblClick  | 鼠标左键双击触发                                         | ({type, target, lnglat, containerPoint}) => void |
| onMouseDown | 鼠标按下触发                                             | ({type, target, lnglat, containerPoint}) => void |
| onMouseUp   | 鼠标抬起触发                                             | ({type, target, lnglat, containerPoint}) => void |
| onMouseOut  | 鼠标移出触发                                             | ({type, target, lnglat, containerPoint}) => void |
| onMouseOver | 鼠标经过触发                                             | ({type, target, lnglat, containerPoint}) => void |
| onRemove    | 移除折线时触发（调用map.removeOverLay(rectangle)时触发） | ({type, target}) => void                         |
| onEdit      | 发生编辑后触发                                           | ({type, target}) => void                         |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/overlay/index.zh-CN.md#实例方法)

| 方法                | 说明                          | 类型                                                                        | 值  |
| ------------------- | ----------------------------- | --------------------------------------------------------------------------- | --- |
| getType             | 叠加层类型                    | () => [OverlayType](/packages/react/src/overlay/index.zh-CN.md#overlaytype) | 6   |
| setBounds           | 设置矩形的显示范围            | (bounds: LngLatBounds) => void                                              |     |
| getBounds           | 返回矩形的地理区域范围        | () => LngLatBounds                                                          |     |
| setColor            | 设置矩形边线的颜色            | (color: string) => void                                                     |     |
| getColor            | 返回矩形边线的颜色            | () => string                                                                |     |
| setOpacity          | 设置矩形边线的透明度（[0,1]） | (opacity: number) => void                                                   |     |
| getOpacity          | 返回矩形边线的透明度          | () => number                                                                |     |
| setWeight           | 设置矩形边线的宽度            | (weight: number) => void                                                    |     |
| getWeight           | 返回矩形边线的宽度            | () => number                                                                |     |
| setLineStyle        | 设置矩形边线是为实线或虚线    | (style: 'solid' \| 'dashed') => void                                        |     |
| getLineStyle        | 返回当前矩形边线样式状态      | () => 'solid' \| 'dashed'                                                   |     |
| setFillColor        | 设置矩形的填充颜              | (color: string) => void                                                     |     |
| getFillColor        | 返回矩形的填充颜色            | () => string                                                                |     |
| setFillOpacity      | 设置矩形的填充透明度（[0,1]） | (opacity: number) => void                                                   |     |
| getFillOpacity      | 返回矩形的填充透明度          | () => number                                                                |     |
| getMap              | 返回矩形所在的 map 对象       | () => Map                                                                   |     |
| enableEdit          | 启用矩形编辑功能              | () => void                                                                  |     |
| disableEdit         | 禁用矩形编辑功能              | () => void                                                                  |     |
| isEditable          | 是否启用矩形编辑功能          | () => boolean                                                               |     |
| addEventListener    | 添加事件监听函数              | (event: string, handler: function) => void                                  |     |
| removeEventListener | 移除事件监听函数              | (event: string, handler: function) => void                                  |     |
