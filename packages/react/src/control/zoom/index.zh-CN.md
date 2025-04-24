## 控件 - 地图缩放

### 🔨 示例

```tsx
import { APILoader, Control, Map } from '@jhqn/react-tmap'
import { useRef } from 'react'

const Example = () => {
  const zoomRef = useRef<T.Control.Zoom>()

  return (
    <Control.Zoom
      ref={zoomRef}
      offset={[-60, 80]}
      position={window.T_ANCHOR_TOP_RIGHT}
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

### Control.Zoom

[通用参数](/packages/react/src/control/index.zh-CN.md#control)

| 参数         | 说明                   | 是否可控 | 类型   | 默认值 |
| ------------ | ---------------------- | -------- | ------ | ------ |
| zoomInText   | 放大层级按钮的文字显示 | 否       | string | `+`    |
| zoomOutText  | 缩小层级按钮的文字显示 | 否       | string | `-`    |
| zoomInTitle  | 放大层级按钮的标题显示 | 否       | string | `放大` |
| zoomOutTitle | 缩小层级按钮的标题显示 | 否       | string | `缩小` |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/control/index.zh-CN.md#实例方法)
