## 控件 - 版权

### 🔨 示例

```tsx
import { APILoader, Control, Map } from '@jhqn/react-tmap'
import { useRef } from 'react'

const Example = () => {
  const copyrightRef = useRef<T.Control.Copyright>()
  return (
    <Control.Copyright
      ref={copyrightRef}
      offset={[-40, -40]}
      position={window.T_ANCHOR_BOTTOM_RIGHT}
      visible={true}
    >
      <div className="text-#fff">版权所有：© 金华青鸟计算机信息技术有限公司</div>
    </Control.Copyright>
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

### Control.Copyright

[通用参数](/packages/react/src/control/index.zh-CN.md#control)

| 参数    | 说明                     | 是否可控 | 类型                               | 默认值 |
| ------- | ------------------------ | -------- | ---------------------------------- | ------ |
| bounds  | 版权信息所适用的地理区域 | 否       | LngLatBounds \| [Vector2, Vector2] |        |
| content | 版权文本信息             | 否       | string \| HTMLDivElement           |        |
| id      | 版权信息的唯一标识符     | 否       | string                             |        |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/control/index.zh-CN.md#实例方法)

| 方法                   | 说明             | 类型                                          |
| ---------------------- | ---------------- | --------------------------------------------- |
| addCopyright           | 添加一个版权信息 | (copyright: Control.CopyrightOptions) => void |
| removeCopyright        | 移除版权信息     | (copyright: Control.CopyrightOptions) => void |
| getCopyright           | 获得单个版权信息 | (id: string) => Control.CopyrightOptions      |
| getCopyrightCollection | 获得版权信息列表 | () =>  Control.Copyright[]                    |
