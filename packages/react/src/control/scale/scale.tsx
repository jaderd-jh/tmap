import type { UnDef } from '@/utils'
import type { ControlScaleProps } from './types'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'

/** 地图比例尺控件 */
const ControlScale = forwardRef<UnDef<T.ControlScale>, ControlScaleProps>(
  ({ visible, offset, position, color, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [controlScale, setControlScale] = useState<T.ControlScale>()

    let init_dev = 0

    useImperativeHandle(ref, () => controlScale)

    useInstanceVisible(controlScale, visible)
    useInstanceAddRemove(map, controlScale, 'control')

    useEffect(() => {
      if (init_dev === 0 && !controlScale) {
        init_dev += 1
        const instance = new T.Control.Scale(props)
        setControlScale(instance)
      }
    }, [])

    const useOffset = useMemo(() => {
      return toPoint(offset)
    }, [offset])

    useSetProperties<T.ControlScale, T.ControlScaleOptions>(controlScale, { position, color, offset: useOffset }, true)

    return <></>
  }
)
export default ControlScale
