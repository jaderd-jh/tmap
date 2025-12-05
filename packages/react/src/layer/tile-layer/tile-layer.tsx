import type { TileLayerProps } from './types'
import type { UnDef } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useEventProperties, useInstanceAddRemove, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'

/** 图层 - 自定义图层 */
const TileLayer = forwardRef<UnDef<T.TileLayer>, TileLayerProps>(({ url, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [tileLayer, setTileLayer] = useState<T.TileLayer>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => tileLayer)

  useInstanceAddRemove(map, tileLayer, 'layer')

  useEffect(() => {
    if (!readyRef.current && url) {
      const instance = new T.TileLayer(url, props)
      readyRef.current = true
      setTileLayer(instance)
    }
  }, [])

  useEventProperties<T.TileLayer, TileLayerProps>(tileLayer, props)

  useSetProperties<T.TileLayer, TileLayerProps>(tileLayer, { ...props, url })

  return <></>
})
export default TileLayer
