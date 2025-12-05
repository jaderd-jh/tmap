import type { MarkToolProps } from './types'
import type { UnDef } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useEventProperties, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toIcon } from '@/utils'

/** 地图工具 - 标注工具 */
const MarkTool = forwardRef<UnDef<T.MarkTool>, MarkToolProps>(({ icon, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [markTool, setMarkTool] = useState<T.MarkTool>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => markTool)

  useEffect(() => {
    if (map && !readyRef.current) {
      const instance = new T.MarkTool(map, { ...props, icon: toIcon(icon) })
      readyRef.current = true
      setMarkTool(instance)
    }
  }, [])

  useEffect(() => {
    return () => {
      try {
        markTool?.close()
        markTool?.clear()
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [markTool])

  useEventProperties<T.MarkTool, MarkToolProps>(markTool, props)

  useSetProperties<T.MarkTool, T.MarkToolOptions>(markTool, { pointImage: props.pointImage }, true)

  return <></>
})
export default MarkTool
