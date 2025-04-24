## 控件 - 缩略地图

### 🔨 示例

```tsx
import { APILoader, Control, Map } from '@jhqn/react-tmap'
import { useRef } from 'react'

const Example = () => {
  const overviewMapRef = useRef<T.Control.OverviewMap>()

  return (
    <Control.OverviewMap
      ref={overviewMapRef}
      offset={[-40, -40]}
      position={window.T_ANCHOR_BOTTOM_RIGHT}
      visible={true}
    />
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

### Control.OverviewMap

[通用参数](/packages/react/src/control/index.zh-CN.md#control)

| 参数            | 说明                                 | 是否可控 | 类型             | 默认值 |
| --------------- | ------------------------------------ | -------- | ---------------- | ------ |
| borderColor     | 鹰眼地图和主地图之间空隙的背景颜色   | 是       | string           |        |
| buttonImage     | 鹰眼地图在打开和关闭状态下的按钮图片 | 是       | [string, string] |        |
| isOpen          | 缩略地图添加到地图后的窗口开合状态   | 否       | boolean          | true   |
| rectBackColor   | 鹰眼地图上的矩形框背景颜色           | 是       | string           |        |
| rectBorderColor | 鹰眼地图上的矩形框边框颜色           | 是       | string           |        |
| size            | 缩略地图控件的大小                   | 否       | Point \| Vector2 |        |

### 事件

| 事件         | 说明                                 | 类型                           |
| ------------ | ------------------------------------ | ------------------------------ |
| onViewChange | 鹰眼视图控件的开合状态变化时触发事件 | (e: {isOpen: boolean}) => void |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/control/index.zh-CN.md#实例方法)

| 方法                | 说明                                   | 类型                                        |
| ------------------- | -------------------------------------- | ------------------------------------------- |
| setButtonImage      | 设置鹰眼地图打开和关闭状态下的两张图片 | (imgOpen: string, imgClose: string) => void |
| setBorderColor      | 设置鹰眼地图和主地图之间空隙的背景颜色 | (color: string) => void                     |
| setRectBorderColor  | 设置鹰眼地图上的矩形框边框颜色         | (color: string) => void                     |
| setRectBackColor    | 设置鹰眼地图上的矩形框背景颜色         | (color: string) => void                     |
| changeView          | 切换鹰眼地图的开-合状态                | () => void                                  |
| isOpen              | 返回该鹰眼的视图是否被打开             | () => boolean                               |
| getMiniMap          | 返回该鹰眼的地图对象                   | () => Map                                   |
| addEventListener    | 添加事件监听函数                       | (event: string, handler: function) => void  |
| removeEventListener | 移除事件监听函数                       | (event: string, handler: function) => void  |
