import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import type { PolygonToolProps } from './types'
import { MapContext } from '@/map'
import { useEventProperties, useSetProperties } from '@/hooks'
import type { UnDef } from '@/utils'
import './index.css'

/** 地图工具 - 绘面工具 */
const PolygonTool = forwardRef<UnDef<T.PolygonTool>, PolygonToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [polygonTool, setPolygonTool] = useState<T.PolygonTool>()

  useImperativeHandle(ref, () => polygonTool)

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && map && !polygonTool) {
      init_dev += 1
      const instance = new T.PolygonTool(map, { ...props })
      setPolygonTool(instance)
    }
    return () => {
      try {
        polygonTool?.close()
        // map?.clearOverLays()
        const polygons = polygonTool?.getPolygons()
        polygons?.forEach(polygon => map?.removeOverLay(polygon))
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [polygonTool])

  useEventProperties<T.PolygonTool, PolygonToolProps>(polygonTool, props)

  useSetProperties<T.PolygonTool, PolygonToolProps>(polygonTool, { tips: props.tips }, true)

  return <></>
})
export default PolygonTool
