## 控件 - 切换地图类型

### 🔨 示例

```tsx
import { APILoader, Control, Map } from '@jhqn/react-tmap'
import { useRef } from 'react'

const mapTypes = [
  {
    title: '地图',
    icon: 'http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png',
    layer: window.TMAP_NORMAL_MAP,
  },
  {
    title: '卫星',
    icon: 'http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellite.png',
    layer: window.TMAP_SATELLITE_MAP,
  },
  {
    title: '卫星混合',
    icon: 'http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png',
    layer: window.TMAP_HYBRID_MAP,
  },
  {
    title: '地形',
    icon: 'http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrain.png',
    layer: window.TMAP_TERRAIN_MAP,
  },
  {
    title: '地形混合',
    icon: 'http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrainpoi.png',
    layer: window.TMAP_TERRAIN_HYBRID_MAP,
  },
]

const Example = () => {
  const mapTypeRef = useRef<T.Control.MapType>()

  return (
    <Control.MapType
      ref={mapTypeRef}
      mapTypes={mapTypes}
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

### Control.MapType

[通用参数](/packages/react/src/control/index.zh-CN.md#control)

| 参数     | 说明         | 是否可控 | 类型          | 默认值 |
| -------- | ------------ | -------- | ------------- | ------ |
| mapTypes | 地图图层类型 | 否       | MapTypeItem[] |        |

#### MapTypeItem

| 参数  | 说明                                              | 是否可控 | 类型      |
| ----- | ------------------------------------------------- | -------- | --------- |
| title | 地图控件上所要显示的图层名称                      | 否       | string    |
| icon  | 地图控件上所要显示的图层图标（默认图标大小80x80） | 否       | string    |
| layer | 地图类型对象                                      | 否       | T.MapType |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/control/index.zh-CN.md#实例方法)
