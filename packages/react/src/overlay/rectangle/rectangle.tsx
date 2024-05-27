import { forwardRef } from 'react'
import { useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import type { RectangleProps } from './types'
import { toBounds } from '@/utils'
import { MapContext } from '@/map'
import type { UnDef } from '@/utils'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'

/**  覆盖物 - 矩形 */
const Rectangle = forwardRef<UnDef<T.Rectangle>, RectangleProps>(
  ({ visible, bounds, editable = false, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [rectangle, setRectangle] = useState<T.Rectangle>()

    let init_dev = 0

    useImperativeHandle(ref, () => rectangle)

    useInstanceAddRemove(map, rectangle, 'overLay')
    useInstanceVisible(rectangle, visible)

    const lngLatBounds = useMemo(() => {
      return toBounds(bounds)
    }, [bounds])

    useEffect(() => {
      if (init_dev === 0 && !rectangle && lngLatBounds) {
        init_dev += 1
        const instance = new T.Rectangle(lngLatBounds, props)
        setRectangle(instance)
      }
    }, [lngLatBounds])

    useEffect(() => {
      if (rectangle) {
        if (editable) rectangle.enableEdit()
        else rectangle.disableEdit()
      }
    }, [editable, rectangle])

    useEventProperties<T.Rectangle, RectangleProps>(rectangle, props)

    useSetProperties<T.Rectangle, T.RectangleOptions>(rectangle, { ...props, bounds: lngLatBounds })

    return <></>
  }
)
export default Rectangle
