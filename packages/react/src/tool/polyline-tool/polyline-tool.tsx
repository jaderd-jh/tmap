import type { UnDef } from '@/utils'
import type { PolylineToolProps } from './types'
import { useEventProperties, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import './index.css'

/** 地图工具 - 绘线工具 */
const PolylineTool = forwardRef<UnDef<T.PolylineTool>, PolylineToolProps>(({ ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [polylineTool, setPolylineTool] = useState<T.PolylineTool>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => polylineTool)

  useEffect(() => {
    if (map && !readyRef.current) {
      const instance = new T.PolylineTool(map, { ...props })
      readyRef.current = true
      setPolylineTool(instance)
    }
  }, [])

  useEffect(() => {
    return () => {
      try {
        polylineTool?.close()
        polylineTool?.clear() // 未开启绘制就清除会有错抛出
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
