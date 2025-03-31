import type { UnDef } from '@/utils'
import type { MarkToolProps } from './types'
import { useEventProperties, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toIcon } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'

/** 地图工具 - 标注工具 */
const MarkTool = forwardRef<UnDef<T.MarkTool>, MarkToolProps>(({ icon, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [markTool, setMarkTool] = useState<T.MarkTool>()

  useImperativeHandle(ref, () => markTool)

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && map && !markTool) {
      init_dev += 1
      const instance = new T.MarkTool(map, { ...props, icon: toIcon(icon) })
      setMarkTool(instance)
    }
    return () => {
      try {
        markTool?.close()
        // map?.clearOverLays()
        const markers = markTool?.getMarkers()
        markers?.forEach(marker => map?.removeOverLay(marker))
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [markTool])

  useEventProperties<T.MarkTool, MarkToolProps>(markTool, props)

  useSetProperties<T.MarkTool, T.MarkToolOptions>(markTool, { pointImage: props.pointImage }, true)

  return <></>
})
export default MarkTool
