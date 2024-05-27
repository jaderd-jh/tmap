import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import type { PaintBrushToolProps } from './types'
import { MapContext } from '@/map'
import type { UnDef } from '@/utils'

/** 地图工具 - 画笔工具 */
const PaintBrushTool = forwardRef<UnDef<T.PaintBrushTool>, PaintBrushToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [paintBrushTool, setPaintBrushTool] = useState<T.PaintBrushTool>()

  useImperativeHandle(ref, () => paintBrushTool)

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && map && !paintBrushTool) {
      init_dev += 1
      const instance = new T.PaintBrushTool(map, { ...props })
      setPaintBrushTool(instance)
    }
    return () => {
      try {
        paintBrushTool?.clear()
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [paintBrushTool])

  return <></>
})
export default PaintBrushTool
