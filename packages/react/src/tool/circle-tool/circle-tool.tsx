import type { UnDef } from '@/utils'
import type { CircleToolProps } from './types'
import { useEventProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'

/** 地图工具 - 画圆工具 */
const CircleTool = forwardRef<UnDef<T.CircleTool>, CircleToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [circleTool, setCircleTool] = useState<T.CircleTool>()
  const readyRef = useRef<boolean>(false) // complete

  useImperativeHandle(ref, () => circleTool)

  useEffect(() => {
    if (map && !readyRef.current) {
      const instance = new T.CircleTool(map, { ...props })
      readyRef.current = true
      setCircleTool(instance)
    }
  }, [])

  useEffect(() => {
    return () => {
      try {
        circleTool?.close()
        circleTool?.clear()
        // const circles = circleTool?.getCircles()
        // circles?.forEach(circle => map?.removeOverLay(circle))
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [circleTool])

  useEventProperties<T.CircleTool, CircleToolProps>(circleTool, props)

  return <></>
})
export default CircleTool
