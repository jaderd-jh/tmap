import type { UnDef } from '@/utils'
import type { ControlZoomProps } from './types'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/** 地图缩放控件 */
const Zoom = forwardRef<UnDef<T.ControlZoom>, ControlZoomProps>(({ visible, offset, position, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [controlZoom, setControlZoom] = useState<T.ControlZoom>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => controlZoom)

  useInstanceVisible(controlZoom, visible)
  useInstanceAddRemove(map, controlZoom, 'control')

  useEffect(() => {
    if (!readyRef.current) {
      const instance = new T.Control.Zoom(props)
      readyRef.current = true
      setControlZoom(instance)
    }
  }, [])

  const useOffset = useMemo(() => toPoint(offset), [offset])

  useSetProperties<T.ControlZoom, T.ControlZoomOptionsExtend>(controlZoom, { position, offset: useOffset }, true)

  return <></>
})
export default Zoom
