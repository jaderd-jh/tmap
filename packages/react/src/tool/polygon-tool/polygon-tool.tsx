import type { PolygonToolProps } from './types'
import type { UnDef } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useEventProperties, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import './index.css'

/** 地图工具 - 绘面工具 */
const PolygonTool = forwardRef<UnDef<T.PolygonTool>, PolygonToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [polygonTool, setPolygonTool] = useState<T.PolygonTool>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => polygonTool)

  useEffect(() => {
    if (map && !readyRef.current) {
      const instance = new T.PolygonTool(map, { ...props })
      readyRef.current = true
      setPolygonTool(instance)
    }
  }, [])

  useEffect(() => {
    return () => {
      try {
        polygonTool?.close()
        polygonTool?.clear() // 未开启绘制就清除会有错抛出
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
