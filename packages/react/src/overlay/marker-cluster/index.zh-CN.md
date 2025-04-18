## 覆盖物 - 聚合标注

### 🔨 示例
```tsx
import { APILoader, InfoWindow, Map, MapContext, MarkerCluster, requireScript, toIcon, toLngLat, toPoint } from '@jhqn/react-tmap'
import { useEffect, useMemo, useState } from 'react'

const markerClusterStyles: T.MarkerClusterStyle[] = [
  {
    url: 'http://api.tianditu.gov.cn/img/map/cluster/heart30.png',
    size: [30, 26],
    offset: toPoint([-15, -13]),
    textColor: '#fff',
    textSize: 8,
    range: [0, 50],
  },
  {
    url: 'http://api.tianditu.gov.cn/img/map/cluster/heart40.png',
    size: [42, 36],
    offset: new T.Point(-20, -17),
    textColor: '#fff',
    textSize: 10,
    range: [50, 100],
  },
  {
    url: 'http://api.tianditu.gov.cn/img/map/cluster/heart50.png',
    size: [52, 46],
    offset: new T.Point(-10, -22),
    textColor: '#fff',
    textSize: 12,
    range: [100, 200],
  },
]

const Example = () => {
  const { map } = useContext(MapContext)

  const [lnglats, setLnglats] = useState<T.Vector2[]>()

  const [curLnglat, setCurLnglat] = useState<T.Vector2>()

  useEffect(() => {
    requireScript('http://lbs.tianditu.gov.cn/api/js4.0/opensource/data/points-sample-data.js', 'cloud-marker-data').then(() => {
      setLnglats(window.data?.data.slice(800, 1300))
    })
  }, [])

  const markers = useMemo(() => {
    const markerArr: T.Marker[] = []
    lnglats?.forEach(item => {
      const lngLat = toLngLat(item)
      if (lngLat) {
        const marker = new T.Marker(lngLat, {
          icon: toIcon({
            iconUrl: 'http://api.tianditu.gov.cn/img/map/markerA.png',
            iconSize: [19, 27],
            iconAnchor: [10, 27],
          }),
          draggable: false,
        })
        // marker.addEventListener('click', () => {
        //   setCurLnglat(item)
        // })
        markerArr.push(marker)
      }
    })
    return markerArr
  }, [lnglats])

  return (
    <>
      <MarkerCluster
        markers={markers}
        styles={markerClusterStyles}
        onClick={e => {
          window.console.log('onClick', e)
          setCurLnglat([e.lnglat.getLng(), e.lnglat.getLat()])
        }}
        onClusterClick={e => window.console.log('onClusterClick', e)}
      />
      <InfoWindow
        isCustom={true}
        lngLat={curLnglat}
        offset={[0, -30]}
        open={!!curLnglat}
      >
        <div
          style={{
            backgroundColor: '#00404ecc',
            border: '1px solid #01acd2',
            borderRadius: '0.25rem',
            display: 'flex',
            padding: '0.25rem 0.75rem',
            whiteSpace: 'nowrap',
          }}
        >
          <div>{curLnglat?.join(',')}</div>
          <div
            style={{ fontSize: 20, lineHeight: '20px', marginLeft: 10, cursor: 'pointer' }}
            onClick={() => setLnglats(undefined)}
          >
            ×
          </div>
        </div>
      </InfoWindow>
    </>
  )
}

const Demo = () => (
  <APILoader style={{ width: '100%', height: '100%' }} tkey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Map center={[100.95, 35.87]} mapStyle="black" zoom={5}>
      <Example />
    </Map>
  </APILoader>
)

export default Demo
```

## API

### MarkerCluster

| 参数     | 说明                                   | 是否可控 | 类型                                      | 默认值 |
| -------- | -------------------------------------- | -------- | ----------------------------------------- | ------ |
| gridSize | 聚合计算时网格的像素大小               | 是       | number                                    | 60     |
| markers  | 要聚合的标注点数组                     | 否       | Marker[]                                  |        |
| maxZoom  | 最大的聚合级别，大于该级别就不进行聚合 | 是       | number                                    | 无穷大 |
| styles   | 自定义聚合后的图标风格                 | 是       | [MarkerClusterStyle](#markerclusterstyle) |        |

#### MarkerClusterStyle
| 参数      | 说明             | 是否可控 | 类型             | 默认值 |
| --------- | ---------------- | -------- | ---------------- | ------ |
| offset    | 显示图片的偏移量 | 否       | Point            |        |
| range     | marker数量区间   | 否       | [number, number] |        |
| size      | 图片大小         | 否       | [number, number] |        |
| textColor | 显示数字的颜色   | 否       | string           |        |
| textSize  | 显示文字的大小   | 否       | number           |        |
| url       | 图片地址         | 否       | string           |        |

### 事件

| 事件               | 说明                   | 类型                                             |
| ------------------ | ---------------------- | ------------------------------------------------ |
| onClusterClick     | 聚合点鼠标左键单击触发 | ({type, target, lnglat, containerPoint}) => void |
| onClusterMouseDown | 聚合点鼠标按下触发     | ({type, target, lnglat, containerPoint}) => void |
| onClusterMouseUp   | 聚合点鼠标抬起触发     | ({type, target, lnglat, containerPoint}) => void |
| onClusterMouseOut  | 聚合点鼠标移出触发     | ({type, target, lnglat, containerPoint}) => void |
| onClusterMouseOver | 聚合点鼠标经过触发     | ({type, target, lnglat, containerPoint}) => void |
| onClick            | 标注点鼠标左键单击触发 | ({type, target, lnglat, containerPoint}) => void |
| onDblClick         | 标注点鼠标左键双击触发 | ({type, target, lnglat, containerPoint}) => void |
| onMouseDown        | 标注点鼠标按下触发     | ({type, target, lnglat, containerPoint}) => void |
| onMouseUp          | 标注点鼠标抬起触发     | ({type, target, lnglat, containerPoint}) => void |
| onMouseOut         | 标注点鼠标移出触发     | ({type, target, lnglat, containerPoint}) => void |
| onMouseOver        | 标注点鼠标经过触发     | ({type, target, lnglat, containerPoint}) => void |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/overlay/index.zh-CN.md#实例方法)

| 方法                | 说明                       | 类型                                                                        | 值  |
| ------------------- | -------------------------- | --------------------------------------------------------------------------- | --- |
| getType             | 叠加层类型                 | () => [OverlayType](/packages/react/src/overlay/index.zh-CN.md#overlaytype) | 2   |
| addMarker           | 添加一个聚合的标记         | (marker: Marker) => void                                                    |     |
| addMarkers          | 添加要聚合的标记数组       | (markers: Marker[]) => void                                                 |     |
| getClustersCount    | 获取聚合的总数量           | () => void                                                                  |     |
| clearMarkers        | 从地图上彻底清除所有的标记 | () => void                                                                  |     |
| getGridSize         | 获取网格大小               | () => number                                                                |     |
| getMarkers          | 获取所有的标记数组         | () => Marker[]                                                              |     |
| getMaxZoom          | 获取聚合的最大缩放级别     | () => number                                                                |     |
| getMinClusterSize   | 获取单个聚合的最小数量     | () => number                                                                |     |
| getStyles           | 获取聚合的样式风格集合     | () => [MarkerClusterStyle[]](#markerclusterstyle)                           |     |
| removeMarker        | 删除单个标记               | (marker: Marker) => boolean                                                 |     |
| removeMarkers       | 删除一组标记               | (markers: Marker[]) => boolean                                              |     |
| setGridSize         | 设置网格大小               | (size: number) => void                                                      |     |
| setMaxZoom          | 设置聚合的最大缩放级别     | (maxZoom: number) => void                                                   |     |
| setStylesL          | 设置聚合的样式风格集合     | (styles: [MarkerClusterStyle[]](#markerclusterstyle)) => void               |     |
| addEventListener    | 添加事件监听函数           | (event: string, handler: function) => void                                  |     |
| removeEventListener | 移除事件监听函数           | (event: string, handler: function) => void                                  |     |
