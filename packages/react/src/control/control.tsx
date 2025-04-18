import { Copyright } from './copyright'
import { MapType } from './map-type'
import { MilitarySymbols } from './military-symbols'
import { OverviewMap } from './overview-map'
import { Scale } from './scale'
import { Zoom } from './zoom'

export interface ControlProps {
  /** 版权控件 */
  Copyright: typeof Copyright
  /** 切换地图类型控件 */
  MapType: typeof MapType
  /** 符号标绘控件 */
  MilitarySymbols: typeof MilitarySymbols
  /** 缩略地图控件 */
  OverviewMap: typeof OverviewMap
  /** 地图比例尺控件 */
  Scale: typeof Scale
  /** 地图缩放控件 */
  Zoom: typeof Zoom
}

export const Control = {} as ControlProps

Control.Copyright = Copyright
Control.MapType = MapType
Control.MilitarySymbols = MilitarySymbols
Control.OverviewMap = OverviewMap
Control.Scale = Scale
Control.Zoom = Zoom
