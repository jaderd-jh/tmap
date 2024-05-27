import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import type { TileLayerTDTProps } from './types'
import { MapContext } from '@/map'
import type { UnDef } from '@/utils'
import { useEventProperties, useInstanceAddRemove, useSetProperties } from '@/hooks'

/** 图层 - 矢量图层 */
const TileLayerTDT = forwardRef<UnDef<T.TileLayerTDT>, TileLayerTDTProps>(({ url, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [tileLayerTDT, setTileLayerTDT] = useState<T.TileLayerTDT>()

  useImperativeHandle(ref, () => tileLayerTDT)

  useInstanceAddRemove(map, tileLayerTDT, 'layer')

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && !tileLayerTDT && url) {
      init_dev += 1
      const instance = new T.TileLayer.TDT(url, props)
      setTileLayerTDT(instance)
    }
  }, [url])

  useEventProperties<T.TileLayerTDT, TileLayerTDTProps>(tileLayerTDT, props)

  useSetProperties<T.TileLayerTDT, TileLayerTDTProps>(tileLayerTDT, { ...props, url })

  return <></>
})
export default TileLayerTDT
