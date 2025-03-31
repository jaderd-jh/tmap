import type { UnDef } from '@/utils'
import type { ControlMapTypeProps } from './types'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'

/** 切换地图类型控件 */
const ControlMapType = forwardRef<UnDef<T.ControlMapType>, ControlMapTypeProps>(
  ({ visible, offset, position, mapTypes }, ref) => {
    const { map } = useContext(MapContext)

    const [controlMapType, setControlMapType] = useState<T.ControlMapType>()

    let init_dev = 0

    useImperativeHandle(ref, () => controlMapType)

    useInstanceVisible(controlMapType, visible)
    useInstanceAddRemove(map, controlMapType, 'control')

    const useOffset = useMemo(() => {
      return toPoint(offset)
    }, [offset])

    useEffect(() => {
      if (init_dev === 0 && !controlMapType) {
        init_dev += 1
        const instance = new T.Control.MapType(mapTypes)
        setControlMapType(instance)
      }
    }, [])

    useSetProperties<T.ControlMapType, T.ControlMapTypeOptions>(controlMapType, { position, offset: useOffset }, true)

    return <></>
  }
)
export default ControlMapType
