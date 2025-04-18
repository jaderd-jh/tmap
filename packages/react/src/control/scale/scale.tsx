import type { UnDef } from '@/utils'
import type { ControlScaleProps } from './types'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/** 地图比例尺控件 */
const Scale = forwardRef<UnDef<T.ControlScale>, ControlScaleProps>(
  ({ visible, offset, position, color, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [controlScale, setControlScale] = useState<T.ControlScale>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => controlScale)

    useInstanceVisible(controlScale, visible)
    useInstanceAddRemove(map, controlScale, 'control')

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.Control.Scale(props)
        readyRef.current = true
        setControlScale(instance)
      }
    }, [])

    const useOffset = useMemo(() => toPoint(offset), [offset])

    useSetProperties<T.ControlScale, T.ControlScaleOptionsExtend>(
      controlScale,
      { position, color, offset: useOffset },
      true
    )

    return <></>
  }
)
export default Scale
