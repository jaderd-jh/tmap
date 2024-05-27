import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import type { ControlZoomProps } from './types'
import type { UnDef } from '@/utils'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'

/** 地图缩放控件 */
const ControlZoom = forwardRef<UnDef<T.ControlZoom>, ControlZoomProps>(
  ({ visible, offset, position, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [controlZoom, setControlZoom] = useState<T.ControlZoom>()

    let init_dev = 0

    useImperativeHandle(ref, () => controlZoom)

    useInstanceVisible(controlZoom, visible)
    useInstanceAddRemove(map, controlZoom, 'control')

    useEffect(() => {
      if (init_dev === 0 && !controlZoom) {
        init_dev += 1
        const instance = new T.Control.Zoom(props)
        setControlZoom(instance)
      }
    }, [])

    const useOffset = useMemo(() => {
      return toPoint(offset)
    }, [offset])

    useSetProperties<T.ControlZoom, T.ControlZoomOptions>(controlZoom, { position, offset: useOffset }, true)

    return <></>
  }
)
export default ControlZoom
