import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import type { CircleToolProps } from './types'
import { MapContext } from '@/map'
import { useEventProperties } from '@/hooks'
import type { UnDef } from '@/utils'

/** 地图工具 - 画圆工具 */
const CircleTool = forwardRef<UnDef<T.CircleTool>, CircleToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [circleTool, setCircleTool] = useState<T.CircleTool>()

  useImperativeHandle(ref, () => circleTool)

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && map && !circleTool) {
      init_dev += 1
      const instance = new T.CircleTool(map, { ...props })
      setCircleTool(instance)
    }
    return () => {
      try {
        circleTool?.close()
        // map?.clearOverLays()
        const circles = circleTool?.getCircles()
        circles?.forEach(circle => map?.removeOverLay(circle))
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [circleTool])

  useEventProperties<T.CircleTool, CircleToolProps>(circleTool, props)

  return <></>
})
export default CircleTool
