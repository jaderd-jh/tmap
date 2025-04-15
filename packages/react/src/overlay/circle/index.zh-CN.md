## 覆盖物 - 圆

### 🔨 示例
```jsx
import { APILoader, Circle, Map } from '@jhqn/react-tmap'
import { useState } from 'react'

const Example = () => {
  const [visible, setVisible] = useState(true)
  const [editable, setEditable] = useState(false)
  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '隐藏' : '显示'}
      </button>
      <button onClick={() => setEditable(!editable)}>
        {editable ? '关闭编辑' : '启用编辑'}
      </button>
      <Circle
        center={[120.26195, 29.27817]}
        color="#f9ff0b"
        editable={editable}
        fillOpacity={0.25}
        opacity={1}
        radius={800}
        visible={visible}
        weight={1}
        onEdit={e => {
          window.console.log('edit', e.target.getCenter(), e.target.getRadius())
        }}
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

### Circle
| 参数        | 说明                           | 是否可控 | 类型                | 默认值    |
| ----------- | ------------------------------ | -------- | ------------------- | --------- |
| center      | 圆心经纬度坐标                 | 是       | LngLat \| Vector2   |           |
| color       | 圆边线颜色                     | 是       | string              | `#0000FF` |
| editable    | 是否启用编辑功能               | 是       | boolean             | false     |
| fillColor   | 圆填充颜色                     | 是       | string              | `#0000FF` |
| fillOpacity | 圆填充的透明度（范围0-1 之间） | 是       | string              | `#0000FF` |
| lineStyle   | 圆边线的样式                   | 是       | `solid` \| `dashed` | `solid`   |
| opacity     | 圆边线的透明度（范围0-1 之间） | 是       | number              | 0.5       |
| radius      | 圆半径（以米点单位）           | 是       | number              |           |
| visible     | 是否可见                       | 是       | boolean             | true      |
| weight      | 圆边线的宽度，以像素为单位     | 是       | number              | 3         |

### 事件
| 事件        | 说明                           | 类型                                          |
| ----------- | ------------------------------ | --------------------------------------------- |
| onClick     | 点击圆后会触发此事件           | ({type,target,lnglat,containerPoint}) => void |
| onDblClick  | 双击圆后会触发此事件           | ({type,target,lnglat,containerPoint}) => void |
| onEdit      | 发生编辑后触发                 | ({type,target }) => void                      |
| onMouseDown | 鼠标在圆上按下触发此事件       | ({type,target,lnglat,containerPoint}) => void |
| onMouseUp   | 鼠标在圆释放触发此事件         | ({type,target,lnglat,containerPoint}) => void |
| onMouseOut  | 鼠标离开圆时触发此事件         | ({type,target,lnglat,containerPoint}) => void |
| onMouseOver | 当鼠标进入圆区域时会触发此事件 | ({type,target,lnglat,containerPoint}) => void |
| onRemove    | 移除圆时触发                   | ({type,target}) => void                       |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/overlay/index.zh-CN.md#实例方法)

| 方法                | 说明                                 | 类型                                        | 值  |
| ------------------- | ------------------------------------ | ------------------------------------------- | --- |
| getType             | 叠加层类型                           | () => number                                | 8   |
| setCenter           | 设置圆的中心点                       | (lnglat:LngLat) => void                     |     |
| getCenter           | 返回圆的中心点                       | () => LngLat                                |     |
| setRadius           | 设置圆的半径                         | (radius: number) => void                    |     |
| getRadius           | 返回圆的半径                         | () => number                                |     |
| getBounds           | 返回矩形的地理区域范围               | () => LngLatBounds                          |     |
| setColor            | 设置圆边线的颜色                     | (color: string) => void                     |     |
| getColor            | 返回圆边线的颜色                     | () => string                                |     |
| setOpacity          | 设置圆边线的透明度（范围0-1之间）    | (opacity: number) => void                   |     |
| getOpacity          | 返回圆边线的透明度                   | () => number                                |     |
| setWeight           | 设置圆边线的宽度                     | (weight: number) => void                    |     |
| getWeight           | 返回圆边线的宽度                     | () => number                                |     |
| setLineStyle        | 设置圆边线是为实线或虚线             | (style: CircleOptions['lineStyle']) => void |     |
| getLineStyle        | 返回当前圆边线样式状态，实线或者虚线 | () => string                                |     |
| setFillColor        | 设置圆的填充颜色                     | (color: string) => void                     |     |
| getFillColor        | 返回圆的填充颜色                     | () => string                                |     |
| setFillOpacity      | 设置圆的填充透明度                   | (opacity: number) => void                   |     |
| getFillOpacity      | 返回圆的填充透明度                   | () => number                                |     |
| getMap              | 返回圆所在的map对象                  | () => Map                                   |     |
| addEventListener    | 添加事件监听函数                     | (event:String, handler:Function) => void    |     |
| removeEventListener | 移除事件监听函数                     | (event:String, handler:Function) => void    |     |
| enableEdit          | 启用圆编辑功能                       | () => void                                  |     |
| disableEdit         | 禁用圆编辑功能                       | () => void                                  |     |
| isEditable          | 判断是否启用圆编辑功能               | () => boolean                               |     |
