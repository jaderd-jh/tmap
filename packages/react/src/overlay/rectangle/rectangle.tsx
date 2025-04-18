import type { UnDef } from '@/utils'
import type { RectangleProps } from './types'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toBounds } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/**  覆盖物 - 矩形 */
const Rectangle = forwardRef<UnDef<T.Rectangle>, RectangleProps>(
  ({ visible, bounds, editable = false, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [rectangle, setRectangle] = useState<T.Rectangle>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => rectangle)

    useInstanceAddRemove(map, rectangle, 'overLay')
    useInstanceVisible(rectangle, visible)

    const lngLatBounds = useMemo(
      () =>
        toBounds(
          bounds || [
            [0, 0],
            [0, 0],
          ]
        ),
      [bounds]
    )

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.Rectangle(lngLatBounds!, props)
        readyRef.current = true
        setRectangle(instance)
      }
    }, [])

    useEffect(() => {
      if (rectangle) {
        if (editable) rectangle.enableEdit()
        else rectangle.disableEdit()
      }
    }, [editable, rectangle])

    useEventProperties<T.Rectangle, RectangleProps>(rectangle, props)

    useSetProperties<T.Rectangle, T.RectangleOptionsExtend>(rectangle, { ...props, bounds: lngLatBounds })

    return <></>
  }
)
export default Rectangle
