## 控件 - 地图比例尺

### 🔨 示例

```tsx
import { APILoader, Control, Map } from '@jhqn/react-tmap'
import { useRef } from 'react'

const Example = () => {
  const scaleRef = useRef<T.Control.Scale>()

  return (
    <Control.Scale
      ref={scaleRef}
      color="#fff"
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

### Control.Scale

[通用参数](/packages/react/src/control/index.zh-CN.md#control)

| 参数  | 说明                 | 是否可控 | 类型   | 默认值 |
| ----- | -------------------- | -------- | ------ | ------ |
| color | 设置比例尺控件的颜色 | 可控     | string |        |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/control/index.zh-CN.md#实例方法)

| 方法     | 说明                     | 类型                    |
| -------- | ------------------------ | ----------------------- |
| setColor | 设置设置比例尺控件的颜色 | (color: string) => void |
