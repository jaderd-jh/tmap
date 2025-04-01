import type { UnDef } from '@/utils'
import type { RectangleToolProps } from './types'
import { useEventProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'

/** 地图工具 - 绘制矩形工具 */
const RectangleTool = forwardRef<UnDef<T.RectangleTool>, RectangleToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [rectangleTool, setRectangleTool] = useState<T.RectangleTool>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => rectangleTool)

  useEffect(() => {
    if (map && !readyRef.current) {
      const instance = new T.RectangleTool(map, { ...props })
      readyRef.current = true
      setRectangleTool(instance)
    }
  }, [])

  useEffect(() => {
    return () => {
      try {
        rectangleTool?.close()
        rectangleTool?.clear()
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [rectangleTool])

  useEventProperties<T.RectangleTool, RectangleToolProps>(rectangleTool, props)

  return <></>
})
export default RectangleTool
