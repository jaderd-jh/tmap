import type { PropsWithChildren } from 'react'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { MapContext } from './context'
import type { MapProps } from './types'
import { toLngLat } from '@/utils'
import type { UnDef, Undefinable } from '@/utils'
import { useEventProperties, useSetProperties } from '@/hooks'

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

    useImperativeHandle(ref, () => map)

    let init_dev = 0
    useEffect(() => {
      if (init_dev === 0 && !map) {
        init_dev += 1
        const tmap = new T.Map(container || containerRef.current!, { center: toLngLat(center), zoom, ...props })
        if (mapStyle) tmap.setStyle(mapStyle)
        setMap(tmap)
        // @ts-expect-error globalThis
        globalThis.map = tmap
      }
    }, [map])

    useEventProperties<T.Map, MapProps>(map, props)

    useSetProperties<T.Map, T.MapOptions>(map, { center: toLngLat(center), zoom, ...props, style: mapStyle })

    return (
      <div ref={containerRef} className={className} id="container" style={{ width: '100%', height: '100%', ...style }}>
        {!!map && <MapContext.Provider value={{ map }}>{children}</MapContext.Provider>}
      </div>
    )
  }
)
export default Map
