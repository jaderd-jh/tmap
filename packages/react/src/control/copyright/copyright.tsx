import { renderToString } from 'react-dom/server'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import type { ControlCopyrightProps } from './types'
import type { UnDef } from '@/utils'
import { useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toBounds, toPoint } from '@/utils'

/** 版权控件 */
const ControlCopyright = forwardRef<UnDef<T.ControlCopyright>, ControlCopyrightProps>(
  ({ visible, offset, position, bounds, content, children, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [controlCopyright, setControlCopyright] = useState<T.ControlCopyright>()

    let init_dev = 0

    useImperativeHandle(ref, () => controlCopyright)

    useInstanceVisible(controlCopyright, visible)

    const useContent = useMemo(() => {
      return content || renderToString(children || <div />)
    }, [content, children])

    const useOffset = useMemo(() => {
      return toPoint(offset)
    }, [offset])

    const useBounds = useMemo(() => {
      return toBounds(bounds) || map?.getBounds()
    }, [bounds])

    useEffect(() => {
      if (init_dev === 0 && map && !controlCopyright) {
        init_dev += 1
        const instance = new T.Control.Copyright({ ...props, position })
        map.addControl(instance)
        instance.addCopyright({ id: props.id || 'jade_tmap', content: useContent, bounds: useBounds })
        if (useOffset) instance.setOffset(useOffset)
        setControlCopyright(instance)
      }
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
