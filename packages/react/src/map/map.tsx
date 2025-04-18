import type { UnDef, Undefinable } from '@/utils'
import type { PropsWithChildren } from 'react'
import type { MapProps } from './types'
import { useEventProperties, useSetProperties } from '@/hooks'
import { toBounds, toLngLat, toLngLats } from '@/utils'
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { MapContext } from './context'

const Map = forwardRef<UnDef<T.Map>, PropsWithChildren<MapProps>>(
  (
    {
      center = [116.40769, 39.89945],
      container,
      mapStyle,
      maxBounds,
      viewport,
      zoom = 10,
      children,
      className,
      style,
      ...props
    }: PropsWithChildren<MapProps>,
    ref
  ) => {
    const [map, setMap] = useState<Undefinable<T.Map>>(undefined)

    const containerRef = useRef<HTMLDivElement>(null)
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => map)

    const useMaxBounds = useMemo(() => toBounds(maxBounds), [maxBounds])
    const useCenter = useMemo(() => toLngLat(center), [center])
    const useViewport = useMemo(() => toLngLats(viewport), [viewport])

    useEffect(() => {
      if (!readyRef.current) {
        const tmap = new T.Map(container || containerRef.current!, props)
        tmap.centerAndZoom(useCenter!, zoom)
        if (mapStyle) tmap.setStyle(mapStyle)
        readyRef.current = true
        setMap(tmap)
        // @ts-expect-error globalThis
        globalThis.map = tmap
      }
    }, [map])

    useEffect(() => {
      if (readyRef.current && useCenter) map?.panTo(useCenter)
    }, [useCenter])

    useEventProperties<T.Map, MapProps>(map, props)

    useSetProperties<T.Map, T.MapOptions>(map, {
      ...props,
      zoom,
      style: mapStyle,
      maxBounds: useMaxBounds,
      viewport: useViewport,
    })

    return (
      <div ref={containerRef} className={className} id="container" style={{ width: '100%', height: '100%', ...style }}>
        {!!map && <MapContext.Provider value={{ map }}>{children}</MapContext.Provider>}
      </div>
    )
  }
)
export default Map
