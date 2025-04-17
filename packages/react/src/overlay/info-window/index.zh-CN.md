## 信息窗

### 🔨 示例

#### 基础用法
```jsx
import { APILoader, InfoWindow, Map } from '@jhqn/react-tmap'
import { useState } from 'react'

const Example = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <div style={{ background: 'white', padding: 10, position: 'absolute', color: 'black', fontSize: 16, zIndex: 999 }}>
        <div onClick={() => setOpen(!open)}>
          {open ? '隐藏' : '显示'}
        </div>
      </div>
      <InfoWindow
        content="<p>标题</p><p>内容内容</p>"
        lngLat={[120.260173, 29.28412]}
        open={open}
        onClose={() => setOpen(false)}
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

#### 支持 ReactNode
```jsx
import { APILoader, InfoWindow, Map } from '@jhqn/react-tmap'
import { useState } from 'react'

const Example = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <button onClick={() => setOpen(!open)}>
        {open ? '隐藏' : '显示'}
      </button>
      <InfoWindow
        isCustom={true}
        lngLat={[120.260173, 29.28412]}
        open={open}
      >
        <div
          style={{
            backgroundColor: '#00404ecc',
            border: '1px solid #01acd2',
            borderRadius: '0.25rem',
            padding: '0.25rem 0.75rem',
            display: 'flex',
          }}
        >
          支持 ReactNode
          <div
            style={{ fontSize: 20, lineHeight: '20px', marginLeft: 10 }}
            onClick={() => setOpen(false)}
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
    <Map center={[120.255393, 29.274522]} mapStyle="black" zoom={14}>
      <Example />
    </Map>
  </APILoader>
)

export default Demo
```

## API

### InfoWindow
| 参数           | 说明                                                   | 是否可控 | 类型                   | 默认值     |
| -------------- | ------------------------------------------------------ | -------- | ---------------------- | ---------- |
| autoPan        | 信息窗口打开时地图自动移动                             | 否       | boolean                | false      |
| autoPanPadding | 地图自动平移产生后窗口和地图视图的边缘间距             | 否       | Point                  | Point(5,5) |
| closeButton    | 是否显示关闭按钮                                       | 否       | boolean                | true       |
| closeOnClick   | 是否开启点击地图关闭信息窗口                           | 否       | boolean                | false      |
| content        | 信息浮窗显示内容，优先级高于children                   | 是       | string  \| HTMLElement |            |
| children       | 渲染内容                                               |          | ReactNode              |            |
| isCustom       | 是否开启自定义浮窗（开启后信息窗关闭按钮需要自行实现） | 否       | boolean                | false      |
| lngLat         | 信息浮窗所指向的地理位置坐标                           | 是       | LngLat \| Vector2      |            |
| maxHeight      | 弹出框的最大高度，超出滚动                             | 否       | number                 | null       |
| maxWidth       | 弹出框的最大宽度                                       | 否       | number                 | 300        |
| minWidth       | 弹出框的最小宽度                                       | 否       | number                 | 50         |
| open           | 是否打开信息窗（地图仅可同时展示一个信息窗体）         | 是       | boolean                | false      |
| offset         | 弹出窗口位置的补偿值                                   | 是       | Point \| Vector2       | Point(0,7) |

### 事件
| 事件         | 说明                                                        | 类型                             |
| ------------ | ----------------------------------------------------------- | -------------------------------- |
| onClickClose | 点击信息窗的关闭按钮时触发                                  | ({type, target}) => void         |
| onClose      | 信息窗被关闭时触发（若开启自定义浮窗，此事件无效）          | ({type, target, lnglat}) => void |
| onOpen       | 信息窗被打开时触发                                          | ({type, target, lnglat}) => void |
| onRemove     | 移除信息窗时触发（调用map.removeOverLay(infoWindow)时触发） | ({type,target}) => void          |

### 实例方法

| 方法                | 说明                                           | 类型                                                                        | 值  |
| ------------------- | ---------------------------------------------- | --------------------------------------------------------------------------- | --- |
| getType             | 叠加层类型                                     | () => [OverlayType](/packages/react/src/overlay/index.zh-CN.md#overlaytype) | 3   |
| setLngLat           | 设置或改变信息浮窗所指向的地理位置坐标         | (lnglat: LngLat) => void                                                    |     |
| getLngLat           | 返回信息浮窗所指向的地理位置坐标               | () => LngLat                                                                |     |
| setOffset           | 设置信息浮窗显示时向右下角偏移量（像素）       | (point: Point) => void                                                      |     |
| getOffset           | 返回信息浮窗显示时向右下角偏移量               | () => Point                                                                 |     |
| isOpen              | 返回信息窗口的打开状态                         | () => boolean                                                               |     |
| setContent          | 设置信息浮窗的显示HTML内容                     | (content: string \| HTMLElement) => void                                    |     |
| getContent          | 返回信息浮窗的显示HTML内容                     | () => string \| HTMLElement                                                 |     |
| update              | 重绘信息窗口，当信息窗口内容发生变化时进行调用 | () => void                                                                  |     |
| closeInfoWindow     | 关闭信息浮窗                                   | () => void                                                                  |     |
| addEventListener    | 添加事件监听函数                               | (event:String, handler:Function) => void                                    |     |
| removeEventListener | 移除事件监听函数                               | (event:String, handler:Function) => void                                    |     |
