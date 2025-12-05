import type { ControlMapTypeProps } from './types'
import type { UnDef } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'

/** 切换地图类型控件 */
const MapType = forwardRef<UnDef<T.Control.MapType>, ControlMapTypeProps>(
  ({ visible, offset, position, mapTypes }, ref) => {
    const { map } = useContext(MapContext)

    const [controlMapType, setControlMapType] = useState<T.Control.MapType>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => controlMapType)

    useInstanceVisible(controlMapType, visible)
    useInstanceAddRemove(map, controlMapType, 'control')

    const useOffset = useMemo(() => toPoint(offset), [offset])

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.Control.MapType({ mapTypes })
        readyRef.current = true
        setControlMapType(instance)
      }
    }, [])

    useSetProperties<T.Control.MapType, T.Control.MapTypeOptionsExtend>(
      controlMapType,
      { position, offset: useOffset },
      true
    )

    return <></>
  }
)
export default MapType
