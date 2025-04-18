import type { UnDef } from '@/utils'
import type { CircleProps } from './types'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toLngLat } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/**  覆盖物 - 圆 */
const Circle = forwardRef<UnDef<T.Circle>, CircleProps>(
  ({ visible, center, radius, editable = false, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [circle, setCircle] = useState<T.Circle>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => circle)

    useInstanceAddRemove(map, circle, 'overLay')
    useInstanceVisible(circle, visible)

    const lngLatCenter = useMemo(() => toLngLat(center || [0, 0])!, [center])

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.Circle(lngLatCenter, radius || 0, props)
        readyRef.current = true
        setCircle(instance)
      }
    }, [])

    useEffect(() => {
      if (circle) {
        if (editable) circle.enableEdit()
        else circle.disableEdit()
      }
    }, [editable, circle])

    useEventProperties<T.Circle, CircleProps>(circle, props)

    useSetProperties<T.Circle, T.CircleOptionsExtend>(circle, { ...props, center: lngLatCenter, radius })

    return <></>
  }
)
export default Circle
