import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import type { RectangleToolProps } from './types'
import { MapContext } from '@/map'
import { useEventProperties } from '@/hooks'
import type { UnDef } from '@/utils'

/** 地图工具 - 绘制矩形工具 */
const RectangleTool = forwardRef<UnDef<T.RectangleTool>, RectangleToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [rectangleTool, setRectangleTool] = useState<T.RectangleTool>()

  useImperativeHandle(ref, () => rectangleTool)

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && map && !rectangleTool) {
      init_dev += 1
      const instance = new T.RectangleTool(map, { ...props })
      setRectangleTool(instance)
    }
    return () => {
      try {
        rectangleTool?.close()
        // map?.clearOverLays()
        const rectangles = rectangleTool?.getRectangles()
        rectangles?.forEach(rectangle => map?.removeOverLay(rectangle))
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [rectangleTool])

  useEventProperties<T.RectangleTool, RectangleToolProps>(rectangleTool, props)

  return <></>
})
export default RectangleTool
