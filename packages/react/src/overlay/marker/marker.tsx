import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import type { MarkerProps } from './types'
import { MapContext } from '@/map'
import { toIcon, toLngLat } from '@/utils'
import type { UnDef } from '@/utils'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'

/**  覆盖物 - 图标标注 */
const Marker = forwardRef<UnDef<T.Marker>, MarkerProps>(
  ({ visible, icon, lngLat, draggable = false, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [marker, setMarker] = useState<T.Marker>()

    useImperativeHandle(ref, () => marker)

    useInstanceAddRemove(map, marker, 'overLay')
    useInstanceVisible(marker, visible)

    const iconInstance = useMemo(() => {
      return toIcon(icon)
    }, [icon])

    const useLngLat = useMemo(() => {
      return toLngLat(lngLat)
    }, [lngLat])

    let init_dev = 0

    useEffect(() => {
      if (init_dev === 0 && !marker && useLngLat) {
        init_dev += 1
        const instance = new T.Marker(useLngLat, { ...props, icon: iconInstance })
        setMarker(instance)
      }
    }, [useLngLat])

    useEffect(() => {
      // 将draggable设置为可控属性
      if (marker && visible !== false) {
        if (draggable) marker.enableDragging()
        else marker.disableDragging()
      }
    }, [draggable, marker])

    useEventProperties<T.Marker, MarkerProps>(marker, props)

    useSetProperties<T.Marker, T.MarkerOptions>(marker, { ...props, icon: iconInstance, lngLat: useLngLat })

    return <></>
  }
)
export default Marker
