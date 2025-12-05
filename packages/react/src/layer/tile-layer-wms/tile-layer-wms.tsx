import type { TileLayerWMSProps } from './types'
import type { UnDef } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useEventProperties, useInstanceAddRemove, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'

/** 图层 - 叠加WMS地图图块层 */
const TileLayerWMS = forwardRef<UnDef<T.TileLayerWMS>, TileLayerWMSProps>(({ url = '', ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [tileLayerWMS, setTileLayerWMS] = useState<T.TileLayerWMS>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => tileLayerWMS)

  useInstanceAddRemove(map, tileLayerWMS, 'layer')

  useEffect(() => {
    if (!readyRef.current) {
      const instance = new T.TileLayer.WMS(url, props)
      readyRef.current = true
      setTileLayerWMS(instance)
    }
  }, [])

  useEventProperties<T.TileLayerWMS, TileLayerWMSProps>(tileLayerWMS, props)

  useSetProperties<T.TileLayerWMS, TileLayerWMSProps>(tileLayerWMS, { ...props, url })

  return <></>
})
export default TileLayerWMS
