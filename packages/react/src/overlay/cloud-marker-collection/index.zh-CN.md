## 海量密集点

### 🔨 示例

```tsx
import { APILoader, CloudMarkerCollection, Map, MapContext, requireScript } from '@jhqn/react-tmap'
import { useContext, useEffect, useRef, useState } from 'react'

const Example = () => {
  const { map } = useContext(MapContext)

  const [lnglats, setLnglats] = useState<T.LngLatLike[]>()

  const cloudMarkerRef = useRef<T.CloudMarkerCollection>()

  useEffect(() => {
    requireScript('http://lbs.tianditu.gov.cn/api/js4.0/opensource/data/points-sample-data.js', 'cloud-marker-data').then(() => {
      setLnglats(window.data.data)
    })
  }, [])

  return (
    <>
      <div style={{ background: 'white', padding: 10, position: 'absolute', color: 'black', fontSize: 16, zIndex: 999 }}>
        <div onClick={() => cloudMarkerRef.current?.clear()}>清空海量点</div>
      </div>
      <CloudMarkerCollection
        ref={cloudMarkerRef}
        color="#f9ff0b"
        lnglats={lnglats}
        ShapeType={window.TDT_POINT_SHAPE_WATERDROP}
        SizeType={window.TDT_POINT_SIZE_NORMAL}
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

### CloudMarkerCollection

| 参数      | 说明             | 是否可控 | 类型                            | 默认值                        |
| --------- | ---------------- | -------- | ------------------------------- | ----------------------------- |
| color     | 海量点的颜色     | 否       | string                          | `#fa937e`                     |
| lnglats   | 点坐标集合       | 是       | LngLat[] \| Vector2[]           |                               |
| ShapeType | 海量点的预设形状 | 否       | [EnumShapeType](#enumshapetype) | window.TDT_POINT_SHAPE_CIRCLE |
| SizeType  | 海量点的预设尺寸 | 否       | [EnumSizeType](#enumsizetype)   | window.TDT_POINT_SIZE_NORMAL  |
| styles    | 点的样式         | 否       | CircleOptions                   |                               |

#### EnumShapeType
| 值                          | 说明             |
| --------------------------- | ---------------- |
| `TDT_POINT_SHAPE_CIRCLE`    | 圆形，为默认形状 |
| `TDT_POINT_SHAPE_STAR`      | 星形             |
| `TDT_POINT_SHAPE_SQUARE`    | 方形             |
| `TDT_POINT_SHAPE_RHOMBUS`   | 菱形             |
| `TDT_POINT_SHAPE_WATERDROP` | 滴状             |

#### EnumSizeType
| 值                       | 说明                            |
| ------------------------ | ------------------------------- |
| `TDT_POINT_SIZE_TINY`    | 超小，2px*2px                   |
| `TDT_POINT_SIZE_SMALLER` | 很小，4px*4px                   |
| `TDT_POINT_SIZE_SMALL`   | 小，8px*8px                     |
| `TDT_POINT_SIZE_NORMAL`  | 正常，10px*10px，海量点默认尺寸 |
| `TDT_POINT_SIZE_BIG`     | 大，16px*16px                   |
| `TDT_POINT_SIZE_BIGGER`  | 很大，20px*20px                 |
| `TDT_POINT_SIZE_HUGE`    | 超大，30px*30px                 |

### 事件

| 事件        | 说明             | 类型                                            |
| ----------- | ---------------- | ----------------------------------------------- |
| onClick     | 鼠标左键单击触发 | ({type, target,lnglat, containerPoint}) => void |
| onMouseOver | 鼠标移入触发     | ({type, target,lnglat, containerPoint}) => void |
| onMouseOut  | 鼠标移出触发     | ({type, target,lnglat, containerPoint}) => void |

### 实例方法

| 方法                | 说明                           | 类型                                       | 备注           |
| ------------------- | ------------------------------ | ------------------------------------------ | -------------- |
| clear               | 清除海量点                     | () => void                                 |                |
| setLnglats          | 设置要在地图上展示的点坐标集合 | (lnglats: Array<LngLat>) => void           |                |
| setStyles           | 海量点的样式                   | (styles: CircleOptions) => void            | 弃用，方法报错 |
| addEventListener    | 添加事件监听函数               | (event: string, handler: function) => void |                |
| removeEventListener | 移除事件监听函数               | (event: string, handler: function) => void |                |
