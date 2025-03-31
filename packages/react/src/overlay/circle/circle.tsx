import type { UnDef } from '@/utils'
import type { CircleProps } from './types'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toLngLat } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'

/**  覆盖物 - 圆 */
const Circle = forwardRef<UnDef<T.Circle>, CircleProps>(
  ({ visible, center, radius, editable = false, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [circle, setCircle] = useState<T.Circle>()

    let init_dev = 0

    useImperativeHandle(ref, () => circle)

    useInstanceAddRemove(map, circle, 'overLay')
    useInstanceVisible(circle, visible)

    const lngLatCenter = useMemo(() => {
      return toLngLat(center)
    }, [center])

    useEffect(() => {
      if (init_dev === 0 && !circle && radius && !!lngLatCenter) {
        init_dev += 1
        const instance = new T.Circle(lngLatCenter, radius, props)
        setCircle(instance)
      }
    }, [lngLatCenter, radius])

    useEffect(() => {
      if (circle) {
        if (editable) circle.enableEdit()
        else circle.disableEdit()
      }
    }, [editable, circle])

    useEventProperties<T.Circle, CircleProps>(circle, props)

    useSetProperties<T.Circle, T.CircleOptions>(circle, { ...props, center: lngLatCenter, radius })

    return <></>
  }
)
export default Circle
