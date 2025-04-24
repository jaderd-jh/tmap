## 开源插件 - 图片覆盖物

### 🔨 示例

```tsx
import { APILoader, ImageOverlay, Map } from '@jhqn/react-tmap'
import { useRef } from 'react'

const Example = () => {
  const imageOverlayRef = useRef<T.ImageOverlay>()

  return (
    <ImageOverlay
      ref={imageOverlayRef}
      bounds={[[120.26974, 29.28041], [120.27169, 29.27814]]}
      imageUrl="http://api.tianditu.gov.cn/img/map/markerA.png"
      visible={true}
    />
  )
}

const Demo = () => {
  return (
    <APILoader
      plugins={['ImageOverlay']}
      style={{ width: '100%', height: '100%' }}
      tkey="a7a90e05a37d3f6bf76d4a9032fc9129"
    >
      <Map center={[120.255393, 29.274522]} mapStyle="black" zoom={14}>
        <Example />
      </Map>
    </APILoader>
  )
}

export default Demo
```

## API

### ImageOverlay

| 参数     | 说明                   | 是否可控 | 类型                               | 默认值 |
| -------- | ---------------------- | -------- | ---------------------------------- | ------ |
| alt      | 无法显示图像时替代文本 | 否       | string                             |        |
| bounds   | 图片覆盖地理范围       | 是       | LngLatBounds \| [Vector2, Vector2] |        |
| imageUrl | 图片url                | 是       | string                             |        |
| opacity  | 图片的透明度           | 是       | number                             |        |
| visible  | 是否可见               | 是       | boolean                            | true   |

### 实例方法

| 方法        | 说明                           | 类型                           |
| ----------- | ------------------------------ | ------------------------------ |
| getOpacity  | 获取图片透明度值               | () => number                   |
| setOpacity  | 设置图片透明度                 | (opacity: number) => void      |
| getBounds   | 获取ImageOverlay的覆盖地理范围 | () => LngLatBounds             |
| setBounds   | 设置ImageOverlay的覆盖地理范围 | (bounds: LngLatBounds) => void |
| getImageUrl | 获取图片url                    | () => string                   |
| setImageUrl | 设置图片url                    | (url: string) => void          |
