## 覆盖物 - 文本标注

### 🔨 示例
```tsx
import { APILoader, Label, Map, MapContext, toPoint } from '@jhqn/react-tmap'
import { useContext, useRef } from 'react'

const Example = () => {
  const { map } = useContext(MapContext)

  const labelRef = useRef<T.Label>()

  return (
    <>
      <div style={{ background: 'white', padding: 10, position: 'absolute', color: 'black', fontSize: 16, zIndex: 999 }}>
        <div onClick={() => labelRef.current?.setBorderLine(0)}>无边框</div>
        <div onClick={() => {
          // labelRef.current?.setOffset(new T.Point(10, 10))
          labelRef.current?.setOffset(toPoint([10, 10]))
        }}
        >
          设置偏移量
        </div>
      </div>
      <Label
        ref={labelRef}
        backgroundColor="#ffffff20"
        borderColor="#ffffff90"
        borderLine={1}
        fontColor="#fff"
        label="文本标注"
        lngLat={[120.26195, 29.27817]}
        offset={[-10, 0]}
        visible={true}
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

### Label

| 参数            | 说明                                        | 是否可控 | 类型              | 默认值      |
| --------------- | ------------------------------------------- | -------- | ----------------- | ----------- |
| backgroundColor | 文本的背景色                                | 是       | string            |             |
| borderColor     | 文本的边框颜色                              | 是       | string            |             |
| borderLine      | 文本的边框线宽                              | 是       | number            |             |
| children        | 渲染内容，只能是string类型不支持HTMLElement | 是       | string            |             |
| fontColor       | 文本的字体颜色                              | 是       | string            |             |
| fontSize        | 文本内容字体大小                            | 是       | number            |             |
| label           | 文本标注的内容，优先级高于children          | 是       | string            |             |
| lngLat          | 文本标注的地理位置坐标                      | 是       | LngLat \| Vector2 | LngLat(0,0) |
| offset          | 文本标注的位置偏移值                        | 是       | Point \| Vector2  |             |
| opacity         | 透明度                                      | 是       | number            |             |
| title           | 文本的提示内容                              | 是       | string            |             |
| visible         | 是否可见                                    | 是       | boolean           | true        |
| zindex          | z-index                                     | 是       | number            |             |

### 事件

| 事件        | 说明                                               | 类型                                             |
| ----------- | -------------------------------------------------- | ------------------------------------------------ |
| onClick     | 鼠标左键单击触发                                   | ({type, target, lnglat, containerPoint}) => void |
| onDblClick  | 鼠标左键双击触发                                   | ({type, target, lnglat, containerPoint}) => void |
| onMouseDown | 鼠标按下触发                                       | ({type, target, lnglat, containerPoint}) => void |
| onMouseUp   | 鼠标抬起触发                                       | ({type, target, lnglat, containerPoint}) => void |
| onMouseOut  | 鼠标移出触发                                       | ({type, target, lnglat, containerPoint}) => void |
| onRemove    | 移除圆时触发（调用map.removeOverLay(label)时触发） | ({type, target}) => void                         |

### 实例方法

继承实例方法：[通用实例方法](/packages/react/src/overlay/index.zh-CN.md#实例方法)

| 方法                | 说明                       | 类型                                                                        | 值  |
| ------------------- | -------------------------- | --------------------------------------------------------------------------- | --- |
| getType             | 叠加层类型                 | () => [OverlayType](/packages/react/src/overlay/index.zh-CN.md#overlaytype) | 1   |
| getLngLat           | 返回文本所在的地理位置坐标 | () => LngLat                                                                |     |
| setLngLat           | 设置文本所在的地理位置坐标 | (lnglat: LngLat) => void                                                    |     |
| setOffset           | 设置文本的偏移值           | (offset: Point) => void                                                     |     |
| getOffset           | 返回文本的偏移值           | () => Point                                                                 |     |
| setLabel            | 设置文本的内容             | (content: string) => void                                                   |     |
| getLabel            | 返回文本的内容             | () => string                                                                |     |
| setTitle            | 设置文本的提示内容         | (title: string) => void                                                     |     |
| getTitle            | 返回文本的提示内容         | () => string                                                                |     |
| setZindex           | 设置z-index                | (zIndex:number) => void                                                     |     |
| setFontSize         | 设置文本内容字体大小       | (size: number) => void                                                      |     |
| getFontSize         | 返回文本内容字体大小       | () => number                                                                |     |
| setFontColor        | 设置文本的文本的字体颜色   | (color: string) => void                                                     |     |
| getFontColor        | 返回文本的字体颜色         | () => string                                                                |     |
| setBackgroundColor  | 设置文本的背景色           | (color: string) => void                                                     |     |
| getBackgroundColor  | 返回文本的背景色           | () => string                                                                |     |
| setBorderLine       | 设置文本的边框线宽         | (width: number) => void                                                     |     |
| getBorderLine       | 返回文本的边框线宽         | () => number                                                                |     |
| setBorderColor      | 设置文本的边框颜色         | (color: string) => void                                                     |     |
| getBorderColor      | 返回文本的边框颜色         | () => string                                                                |     |
| setOpacity          | 设置文本的显示不透明度     | (opacity: number) => void                                                   |     |
| getOpacity          | 返回文本的显示透明度       | () => number                                                                |     |
| addEventListener    | 添加事件监听函数           | (event: string, handler: function) => void                                  |     |
| removeEventListener | 移除事件监听函数           | (event: string, handler: function) => void                                  |     |
