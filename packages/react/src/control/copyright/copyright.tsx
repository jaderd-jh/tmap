import type { UnDef } from '@/utils'
import type { ControlCopyrightProps } from './types'
import { useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toBounds, toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { renderToString } from 'react-dom/server'

/** 版权控件 */
const ControlCopyright = forwardRef<UnDef<T.ControlCopyright>, ControlCopyrightProps>(
  ({ visible, offset, position, bounds, content, children, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [controlCopyright, setControlCopyright] = useState<T.ControlCopyright>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => controlCopyright)

    useInstanceVisible(controlCopyright, visible)

    const useContent = useMemo(() => content || renderToString(children || <div />), [content, children])

    const useOffset = useMemo(() => toPoint(offset), [offset])

    const useBounds = useMemo(() => toBounds(bounds) || map?.getBounds(), [bounds])

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.Control.Copyright({ ...props, position })
        map?.addControl(instance)
        readyRef.current = true
        instance.addCopyright({ id: props.id || 'jade_tmap', content: useContent, bounds: useBounds })
        if (useOffset) instance.setOffset(useOffset)
        setControlCopyright(instance)
      }
    }, [])

    useEffect(() => {
      return () => {
        if (controlCopyright) map?.removeControl(controlCopyright)
      }
    }, [controlCopyright])

    useSetProperties<T.ControlCopyright, T.ControlCopyrightOptions>(controlCopyright, {
      position,
      offset: useOffset,
    })

    return <></>
  }
)
export default ControlCopyright
