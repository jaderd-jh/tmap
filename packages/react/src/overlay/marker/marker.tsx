import type { UnDef } from '@/utils'
import type { MarkerProps } from './types'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toIcon, toLngLat } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/**  覆盖物 - 图标标注 */
const Marker = forwardRef<UnDef<T.Marker>, MarkerProps>(
  ({ visible, icon, lngLat, draggable = false, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [marker, setMarker] = useState<T.Marker>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => marker)

    useInstanceAddRemove(map, marker, 'overLay')
    useInstanceVisible(marker, visible)

    const iconInstance = useMemo(() => toIcon(icon), [icon])

    const useLngLat = useMemo(() => toLngLat(lngLat || [0, 0])!, [lngLat])

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.Marker(useLngLat, { ...props, icon: iconInstance })
        readyRef.current = true
        setMarker(instance)
      }
    }, [])

    useEffect(() => {
      // 将draggable设置为可控属性
      if (marker && visible !== false) {
        if (draggable) marker.enableDragging()
        else marker.disableDragging()
      }
    }, [draggable, marker])

    useEventProperties<T.Marker, MarkerProps>(marker, props)

    useSetProperties<T.Marker, T.MarkerOptionsExtend>(marker, { ...props, icon: iconInstance, lngLat: useLngLat })

    return <></>
  }
)
export default Marker
