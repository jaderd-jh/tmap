import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import type { PolylineToolProps } from './types'
import { MapContext } from '@/map'
import { useEventProperties, useSetProperties } from '@/hooks'
import type { UnDef } from '@/utils'
import './index.css'

/** 地图工具 - 绘线工具 */
const PolylineTool = forwardRef<UnDef<T.PolylineTool>, PolylineToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [polylineTool, setPolylineTool] = useState<T.PolylineTool>()

  useImperativeHandle(ref, () => polylineTool)

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && map && !polylineTool) {
      init_dev += 1
      const instance = new T.PolylineTool(map, { ...props })
      setPolylineTool(instance)
    }
    return () => {
      try {
        polylineTool?.close()
        // map?.clearOverLays()
        const polylineArr = polylineTool?.getPolylines()
        polylineArr?.forEach(polyline => map?.removeOverLay(polyline))
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [polylineTool])

  useEventProperties<T.PolylineTool, PolylineToolProps>(polylineTool, props)

  useSetProperties<T.PolylineTool, PolylineToolProps>(polylineTool, { tips: props.tips }, true)

  return <></>
})
export default PolylineTool
