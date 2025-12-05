import type { ControlZoomProps } from './types'
import type { UnDef } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'

/** 地图缩放控件 */
const Zoom = forwardRef<UnDef<T.Control.Zoom>, ControlZoomProps>(({ visible, offset, position, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [controlZoom, setControlZoom] = useState<T.Control.Zoom>()
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

  useSetProperties<T.Control.Zoom, T.Control.ZoomOptionsExtend>(controlZoom, { position, offset: useOffset }, true)

  return <></>
})
export default Zoom
