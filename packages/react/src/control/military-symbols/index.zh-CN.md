## 控件 - 符号标绘

### 🔨 示例

```tsx
import { APILoader, Control, Map } from '@jhqn/react-tmap'
import { useRef } from 'react'

const Example = () => {
  const militarySymbolsRef = useRef<T.Control.MilitarySymbols>()

  return (
    <Control.MilitarySymbols
      ref={militarySymbolsRef}
      offset={[-40, 90]}
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

### Control.MilitarySymbols

[通用参数](/packages/react/src/control/index.zh-CN.md#control)

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/control/index.zh-CN.md#实例方法)

| 方法        | 说明                     | 类型               |
| ----------- | ------------------------ | ------------------ |
| clearLayers | 清空控件所有绘制的符号   | () => void         |
| getLayers   | 获取控件所有绘制的图形   | () => Overlay[]    |
| close       | 关闭并清空当前绘制的图形 | (map: Map) => void |
