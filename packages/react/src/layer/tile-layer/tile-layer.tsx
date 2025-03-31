import type { UnDef } from '@/utils'
import type { TileLayerProps } from './types'
import { useEventProperties, useInstanceAddRemove, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'

/** 图层 - 自定义图层 */
const TileLayer = forwardRef<UnDef<T.TileLayer>, TileLayerProps>(({ url, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [tileLayer, setTileLayer] = useState<T.TileLayer>()

  useImperativeHandle(ref, () => tileLayer)

  useInstanceAddRemove(map, tileLayer, 'layer')

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && !tileLayer && url) {
      init_dev += 1
      const instance = new T.TileLayer(url, props)
      setTileLayer(instance)
    }
  }, [url])

  useEventProperties<T.TileLayer, TileLayerProps>(tileLayer, props)

  useSetProperties<T.TileLayer, TileLayerProps>(tileLayer, { ...props, url })

  return <></>
})
export default TileLayer
