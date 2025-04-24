## 覆盖物 - 折线

### 🔨 示例

```tsx
import { APILoader, Map, MapContext, Polyline } from '@jhqn/react-tmap'
import { useContext, useRef, useState } from 'react'

const Example = () => {
  const { map } = useContext(MapContext)

  const [editable, setEditable] = useState(false)

  const polylineRef = useRef<T.Polyline>()

  return (
    <>
      <div style={{ background: 'white', padding: 10, position: 'absolute', color: 'black', fontSize: 16, zIndex: 999 }}>
        <div onClick={() => setEditable(!editable)}>
          {editable ? '关闭编辑' : '启用编辑'}
        </div>
        <div
          onClick={() => {
            const b = polylineRef.current?.getBounds()
            const ne = b?.getNorthEast()
            const sw = b?.getSouthWest()
            window.console.log('地理范围', `[[${ne?.getLng()},${ne?.getLat()}],[${sw?.getLng()},${sw?.getLat()}]]`)
          }}
        >
          获取折现地理范围
        </div>
      </div>
      <Polyline
        ref={polylineRef}
        color="#f9ff0b"
        editable={editable}
        lngLats={[
          [120.24734, 29.27989],
          [120.24579, 29.26461],
          [120.26811, 29.26349],
          [120.26948, 29.27749],
          [120.2621, 29.28393],
          [120.2621, 29.28393],
        ]}
        opacity={1}
        visible={true}
        weight={1}
        onEdit={e => {
          window.console.log('edit', e.target.getLngLats()?.[0])
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

### Polyline

| 参数      | 说明                  | 是否可控 | 类型                  | 默认值    |
| --------- | --------------------- | -------- | --------------------- | --------- |
| color     | 折线边线颜色          | 是       | string                | `#0000FF` |
| editable  | 是否启用编辑          | 是       | boolean               | false     |
| lineStyle | 拆线的样式            | 是       | `solid` \| `dashed`   | `solid`   |
| lngLats   | 折线坐标数组          | 是       | LngLat[] \| Vector2[] |           |
| opacity   | 折线的透明度（[0-1]） | 是       | number                | 0.5       |
| visible   | 是否可见              | 是       | boolean               | true      |
| weight    | 折线宽度（px）        | 是       | number                | 3         |

### 事件

| 事件        | 说明                                                    | 类型                                             |
| ----------- | ------------------------------------------------------- | ------------------------------------------------ |
| onClick     | 鼠标左键单击触发                                        | ({type, target, lnglat, containerPoint}) => void |
| onDblClick  | 鼠标左键双击触发                                        | ({type, target, lnglat, containerPoint}) => void |
| onMouseDown | 鼠标按下触发                                            | ({type, target, lnglat, containerPoint}) => void |
| onMouseUp   | 鼠标抬起触发                                            | ({type, target, lnglat, containerPoint}) => void |
| onMouseOut  | 鼠标移出触发                                            | ({type, target, lnglat, containerPoint}) => void |
| onMouseOver | 鼠标经过触发                                            | ({type, target, lnglat, containerPoint}) => void |
| onRemove    | 移除折线时触发（调用map.removeOverLay(polyline)时触发） | ({type, target}) => void                         |
| onEdit      | 发生编辑后触发                                          | ({type, target}) => void                         |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/overlay/index.zh-CN.md#实例方法)

| 方法                | 说明                      | 类型                                                                        | 值  |
| ------------------- | ------------------------- | --------------------------------------------------------------------------- | --- |
| getType             | 叠加层类型                | () => [OverlayType](/packages/react/src/overlay/index.zh-CN.md#overlaytype) | 4   |
| setLngLats          | 设置折线的点数组          | (lnglat: LngLat[]) => void                                                  |     |
| getLngLats          | 返回折线的点数组          | () => LngLat[]                                                              |     |
| setColor            | 设置折线的颜色            | (color: string) => void                                                     |     |
| getColor            | 返回折线的颜色            | () => string                                                                |     |
| setOpacity          | 设置折线的透明度（[0,1]） | (opacity: number) => void                                                   |     |
| getOpacity          | 返回折线的透明度          | () => number                                                                |     |
| setWeight           | 设置折线的宽度            | (weight: number) => void                                                    |     |
| getWeight           | 返回折线的宽度            | () => number                                                                |     |
| setLineStyle        | 设置折线是实线还是虚线    | (style: 'solid' \| 'dashed') => void                                        |     |
| getLineStyle        | 返回当前折线的样式状态    | () => 'solid' \| 'dashed'                                                   |     |
| getBounds           | 返回折线的地理区域范围    | () => LngLatBounds                                                          |     |
| getMap              | 返回折线所在的 map 对象   | () => Map                                                                   |     |
| enableEdit          | 启用折线编辑功能          | () => void                                                                  |     |
| disableEdit         | 禁用折线编辑功能          | () => void                                                                  |     |
| isEditable          | 是否启用折线编辑功能      | () => boolean                                                               |     |
| addEventListener    | 添加事件监听函数          | (event: string, handler: function) => void                                  |     |
| removeEventListener | 移除事件监听函数          | (event: string, handler: function) => void                                  |     |
