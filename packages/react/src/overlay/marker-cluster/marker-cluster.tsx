import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import type { MarkerClusterProps } from './types'
import { MapContext } from '@/map'
import { useEventProperties, useSetProperties } from '@/hooks'
import type { UnDef } from '@/utils'

/** 覆盖物 - 聚合marker */
const MarkerCluster = forwardRef<UnDef<T.MarkerClusterer>, MarkerClusterProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [markerCluster, setMarkerCluster] = useState<T.MarkerClusterer>()

  useImperativeHandle(ref, () => markerCluster)

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && map && !markerCluster) {
      init_dev += 1
      const instance = new T.MarkerClusterer(map, { ...props })
      setMarkerCluster(instance)
    }
    return () => {
      try {
        markerCluster?.clearMarkers()
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [markerCluster])

  useEventProperties<T.MarkerClusterer, MarkerClusterProps>(markerCluster, props)

  useSetProperties<T.MarkerClusterer, MarkerClusterProps>(markerCluster, {
    gridSize: props.gridSize,
    maxZoom: props.maxZoom,
    styles: props.styles,
  })

  return <></>
})
export default MarkerCluster
