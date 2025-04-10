import type { UnDef } from '@/utils'
import type { TileLayerTDTProps } from './types'
import { useEventProperties, useInstanceAddRemove, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'

/** 图层 - 矢量图层 */
const TileLayerTDT = forwardRef<UnDef<T.TileLayerTDT>, TileLayerTDTProps>(({ url, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [tileLayerTDT, setTileLayerTDT] = useState<T.TileLayerTDT>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => tileLayerTDT)

  useInstanceAddRemove(map, tileLayerTDT, 'layer')

  useEffect(() => {
    if (!readyRef.current && url) {
      const instance = new T.TileLayer.TDT(url, props)
      readyRef.current = true
      setTileLayerTDT(instance)
    }
  }, [])

  useEventProperties<T.TileLayerTDT, TileLayerTDTProps>(tileLayerTDT, props)

  useSetProperties<T.TileLayerTDT, TileLayerTDTProps>(tileLayerTDT, { ...props, url })

  return <></>
})
export default TileLayerTDT
