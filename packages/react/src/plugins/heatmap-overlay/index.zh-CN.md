## 开源插件 - 热力图

### 🔨 示例

```tsx
import { APILoader, HeatmapOverlay, Map, requireScript } from '@jhqn/react-tmap'
import { useEffect, useRef, useState } from 'react'

const Example = () => {
  const heatmapOverlayRef = useRef<T.HeatmapOverlay>()

  const [heatmapData, setHeatmapData] = useState<{ lng: number; lat: number; count: number }[]>([])

  useEffect(() => {
    requireScript('https://a.amap.com/jsapi_demos/static/resource/heatmapData.js', 'heatmap-data').then(() => {
      if (Array.isArray(window.heatmapData)) setHeatmapData(window.heatmapData)
    })
  }, [])

  return (
    <HeatmapOverlay
      ref={heatmapOverlayRef}
      dataSet={{ data: heatmapData, max: 300 }}
      radius={40}
      visible={true}
    />
  )
}

const Demo = () => {
  return (
    <APILoader
      plugins={['Heatmap']}
      style={{ width: '100%', height: '100%' }}
      tkey="a7a90e05a37d3f6bf76d4a9032fc9129"
    >
      <Map center={[116.40769, 39.89945]} mapStyle="black" zoom={11}>
        <Example />
      </Map>
    </APILoader>
  )
}

export default Demo
```

## API

### HeatmapOverlay

| 参数       | 说明             | 是否可控 | 类型                              | 默认值                            |
| ---------- | ---------------- | -------- | --------------------------------- | --------------------------------- |
| dataSet    | 热力图渲染的数据 | 是       | [DataSetOptions](#datasetoptions) |                                   |
| gradient   | 颜色梯度变化     | 否       | Record<number, string>            | [颜色梯度默认值](#颜色梯度默认值) |
| latField   | 纬度字段名称     | 否       | string                            | `lat`                             |
| lngField   | 经度字段名称     | 否       | string                            | `lng`                             |
| opacity    | 透明度           | 否       | number                            | 0.6                               |
| options    | 热力图配置项     | 是       | HeatmapOverlayOptions             |                                   |
| radius     | 缓冲半径         | 否       | number                            | 40                                |
| valueField | 权重字段名称     | 否       | string                            | `count`                           |
| visible    | 是否可见         | 是       | boolean                           | true                              |

#### DataSetOptions

| 参数 | 说明             | 类型                        |
| ---- | ---------------- | --------------------------- |
| max  | 最大值的渲染颜色 | number                      |
| data | 渲染数据         | [DataSetItem](#datasetitem) |

#### DataSetItem

| 参数  | 说明 | 类型   | 备注                                     |
| ----- | ---- | ------ | ---------------------------------------- |
| lat   | 纬度 | number | 可通过 latField 设置自定义纬度字段名称   |
| lng   | 经度 | number | 可通过 lngField 设置自定义经度字段名称   |
| count | 权重 | number | 可通过 valueField 设置自定义权重字段名称 |

#### 颜色梯度默认值

```json
{ "0.25": "rgb(0,0,255)", "0.55": "rgb(0,255,0)", "0.85": "yellow", "1.0": "rgb(255,0,0)" }
```

### 实例方法

| 方法         | 说明                           | 类型                                                 |
| ------------ | ------------------------------ | ---------------------------------------------------- |
| setDataSet   | 热力图渲染的数据               | (dataSet: [DataSetOptions](#datasetoptions)) => void |
| addDataPoint | 增加一个渲染的数据             | (lng: number, lat: number, count: number) => void    |
| Toggle       | 更改热力图的展现或者关闭       | () => boolean                                        |
| setOptions   | 设置ImageOverlay的覆盖地理范围 | (options: HeatmapOverlayOptions) => void             |
