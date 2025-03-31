import type { UnDef } from '@/utils'
import type { MarkerClusterProps } from './types'
import { useEventProperties, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'

/** 覆盖物 - 聚合marker */
const MarkerCluster = forwardRef<UnDef<T.MarkerClusterer>, MarkerClusterProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [markerCluster, setMarkerCluster] = useState<T.MarkerClusterer>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => markerCluster)

  useEffect(() => {
    if (map && !readyRef.current) {
      const instance = new T.MarkerClusterer(map, { ...props })
      readyRef.current = true
      setMarkerCluster(instance)
    }
  }, [])

  useEffect(() => {
    return () => {
      markerCluster?.clearMarkers()
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
