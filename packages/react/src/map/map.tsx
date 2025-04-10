import type { UnDef, Undefinable } from '@/utils'
import type { PropsWithChildren } from 'react'
import type { MapProps } from './types'
import { useEventProperties, useSetProperties } from '@/hooks'
import { toLngLat } from '@/utils'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { MapContext } from './context'

const Map = forwardRef<UnDef<T.Map>, PropsWithChildren<MapProps>>(
  (
    {
      zoom = 10,
      center = [116.39128, 39.90714],
      mapStyle,
      container,
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

    useEffect(() => {
      if (!readyRef.current) {
        const tmap = new T.Map(container || containerRef.current!, { ...props })
        tmap.centerAndZoom(toLngLat(center)!, zoom)
        if (mapStyle) tmap.setStyle(mapStyle)
        readyRef.current = true
        setMap(tmap)
        // @ts-expect-error globalThis
        globalThis.map = tmap
      }
    }, [map])

    useEffect(() => {
      if (readyRef.current && center) map?.panTo(toLngLat(center)!)
    }, [center])

    useEventProperties<T.Map, MapProps>(map, props)

    useSetProperties<T.Map, T.MapOptions>(map, { zoom, ...props, style: mapStyle })

    return (
      <div ref={containerRef} className={className} id="container" style={{ width: '100%', height: '100%', ...style }}>
        {!!map && <MapContext.Provider value={{ map }}>{children}</MapContext.Provider>}
      </div>
    )
  }
)
export default Map
