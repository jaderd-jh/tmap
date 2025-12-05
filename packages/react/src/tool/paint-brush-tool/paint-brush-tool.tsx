import type { PaintBrushToolProps } from './types'
import type { UnDef } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { MapContext } from '@/map'

/** 地图工具 - 画笔工具 */
const PaintBrushTool = forwardRef<UnDef<T.PaintBrushTool>, PaintBrushToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [paintBrushTool, setPaintBrushTool] = useState<T.PaintBrushTool>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => paintBrushTool)

  useEffect(() => {
    if (map && !readyRef.current) {
      const instance = new T.PaintBrushTool(map, { ...props })
      readyRef.current = true
      setPaintBrushTool(instance)
    }
  }, [])

  useEffect(() => {
    return () => {
      try {
        paintBrushTool?.close()
        paintBrushTool?.clear()
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [paintBrushTool])

  return <></>
})
export default PaintBrushTool
