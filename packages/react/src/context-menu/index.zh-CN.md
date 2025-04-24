## 右键菜单

### 🔨 示例

```tsx
import { APILoader, ContextMenu, Map, MapContext } from '@jhqn/react-tmap'
import { useContext, useRef } from 'react'

const Example = () => {
  const { map } = useContext(MapContext)
  const contextMenuRef = useRef<T.ContextMenu>()
  return (
    <ContextMenu ref={contextMenuRef} width={150} onOpen={e => window.console.log('onOpen', e)}>
      <ContextMenu.Item onClick={() => map?.zoomIn()}>放大</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item onClick={() => map?.zoomOut()}>缩小</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item
        onClick={lnglat => {
          window.console.log('右键坐标', `[${lnglat?.getLng()},${lnglat?.getLat()}]`)
        }}
      >
        获得右键点击处坐标
      </ContextMenu.Item>
    </ContextMenu>
  )
}

const Demo = () => {
  return (
    <APILoader style={{ width: '100%', height: '100%' }} tkey="a7a90e05a37d3f6bf76d4a9032fc9129">
      <Map center={[120.255393, 29.274522]} mapStyle="black" zoom={14}>
        <Example />
      </Map>
    </APILoader>
  )
}

export default Demo
```

## API

### ContextMenu

| 参数    | 说明                   | 是否可控 | 类型    | 默认值 |
| ------- | ---------------------- | -------- | ------- | ------ |
| width   | 菜单项的宽度           | 否       | number  | 120    |
| visible | 地图右键时是否打开菜单 | 是       | boolean | true   |

### ContextMenu.Item

| 参数     | 菜单项显示的文本 | 是否可控 | 类型   | 默认值 |
| -------- | ---------------- | -------- | ------ | ------ |
| text     | 菜单项的宽度     | 否       | string |        |
| children | 菜单项内容       | 是       | string |        |

### ContextMenu 事件

| 事件    | 说明                   | 类型                            |
| ------- | ---------------------- | ------------------------------- |
| onOpen  | 右键菜单打开时触发事件 | ({point, type, target}) => void |
| onClose | 右键菜单关闭时触发事件 | ({type, target}) => void        |

### ContextMenu.Item 事件

| 事件    | 说明           | 类型                        |
| ------- | -------------- | --------------------------- |
| onClick | 菜单项单击事件 | (lnglat?: T.LngLat) => void |

### ContextMenu 实例方法

| 方法                | 说明                                          | 类型                                       |
| ------------------- | --------------------------------------------- | ------------------------------------------ |
| addItem             | 添加菜单项                                    | (item: MenuItem) => void                   |
| getItem             | 返回指定索引位置菜单项，第一个菜单项的索引为0 | (index: number) => MenuItem                |
| removeItem          | 移除菜单项                                    | (item?: MenuItem  \| number) => void       |
| addSeparator        | 添加分隔符                                    | () => void                                 |
| removeSeparator     | 移除指定索引位置分隔符，第一个分隔符的索引为0 | (index: number) => void                    |
| getItems            | 返回所有的MenuItem，是一个数组                | () => MenuItem[]                           |
| getAllSeparator     | 返回所有分割线，是一个数组                    | () => []                                   |
| addEventListener    | 添加事件监听函数                              | (event: string, handler: function) => void |
| removeEventListener | 移除事件监听函数                              | (event: string, handler: function) => void |

### ContextMenu.Item 实例方法

| 方法    | 说明                 | 类型                   |
| ------- | -------------------- | ---------------------- |
| setText | 设置菜单项显示的文本 | (text: string) => void |
| enable  | 启用菜单项           | () => void             |
| disable | 禁用菜单项           | () => void             |
