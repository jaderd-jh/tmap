import type { UnDef } from '@/utils'
import type { RectangleToolProps } from './types'
import { useEventProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'

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
