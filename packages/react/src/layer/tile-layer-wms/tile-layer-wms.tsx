import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import type { TileLayerWMSProps } from './types'
import { MapContext } from '@/map'
import type { UnDef } from '@/utils'
import { useEventProperties, useInstanceAddRemove, useSetProperties } from '@/hooks'

/** 图层 - 叠加WMS地图图块层 */
const TileLayerWMS = forwardRef<UnDef<T.TileLayerWMS>, TileLayerWMSProps>(({ url, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [tileLayerWMS, setTileLayerWMS] = useState<T.TileLayerWMS>()

  useImperativeHandle(ref, () => tileLayerWMS)

  useInstanceAddRemove(map, tileLayerWMS, 'layer')

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && !tileLayerWMS && url) {
      init_dev += 1
      const instance = new T.TileLayer.WMS(url, props)
      setTileLayerWMS(instance)
    }
  }, [url])

  useEventProperties<T.TileLayerWMS, TileLayerWMSProps>(tileLayerWMS, props)

  useSetProperties<T.TileLayerWMS, TileLayerWMSProps>(tileLayerWMS, { ...props, url })

  return <></>
})
export default TileLayerWMS
