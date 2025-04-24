## 覆盖物 - 地图加载

### 🔨 示例

```jsx
import { APILoader, Map } from '@jhqn/react-tmap'

const Demo = () => {
  return (
    <APILoader style={{ width: '100%', height: '100%' }} tkey="a7a90e05a37d3f6bf76d4a9032fc9129">
      <Map center={[120.255393, 29.274522]} mapStyle="black" zoom={14} />
    </APILoader>
  )
}

export default Demo
```

## API

### APILoader

| 参数      | 说明                      | 是否可控 | 类型                             | 默认值 |
| --------- | ------------------------- | -------- | -------------------------------- | ------ |
| tkey      | 天地图密钥                | 否       | string                           |        |
| version   | 指定要加载的 JSAPI 的版本 | 否       | string                           | 4.0    |
| plugins   | 插件列表                  | 否       | [PluginsType](#pluginstype)      |        |
| className | 添加在地图最外层的 class  | 是       | string                           |        |
| style     | 添加在地图最外层的 style  | 是       | CSS.Properties<string \| number> |        |

#### PluginsType

| 值             | 描述             |
| -------------- | ---------------- |
| `D3`           | D3.js绘制图形    |
| `Heatmap`      | 热力图           |
| `CarTrack`     | 车辆轨迹跟踪动画 |
| `BufferTool`   | 缓冲区           |
| `ImageOverlay` | 图片覆盖物       |
