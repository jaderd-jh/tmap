import type { UnDef } from '@/utils'
import type { HeatmapOverlayProps } from './types'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'

/**  开源插件 - 热力图 */
const HeatmapOverlay = forwardRef<UnDef<T.HeatmapOverlay>, HeatmapOverlayProps>(
  ({ visible, dataSet, options, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [heatmapOverlay, setHeatmapOverlay] = useState<T.HeatmapOverlay>()

    let init_dev = 0

    useImperativeHandle(ref, () => heatmapOverlay)

    useInstanceAddRemove(map, heatmapOverlay, 'overLay')
    useInstanceVisible(heatmapOverlay, visible)

    const isSupportCanvas = () => {
      const elem = document.createElement('canvas')
      return !!(elem.getContext && elem.getContext('2d'))
    }

    useEffect(() => {
      if (init_dev === 0 && !heatmapOverlay && dataSet) {
        if (isSupportCanvas()) {
          init_dev += 1
          const instance = new T.HeatmapOverlay(props)
          setHeatmapOverlay(instance)
        } else {
          window.console.error('热力图目前只支持有canvas支持的浏览器，您所使用的浏览器不能使用热力图功能')
        }
      }
    }, [dataSet])

    useSetProperties<T.HeatmapOverlay, T.HeatmapOverlayOptions>(heatmapOverlay, { dataSet, options }, true)

    return <></>
  }
)
export default HeatmapOverlay
