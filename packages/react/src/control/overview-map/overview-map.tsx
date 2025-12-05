import type { ControlOverviewMapProps } from './types'
import type { UnDef } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { isArray, toPoint } from '@/utils'

/** 缩略地图控件 */
const OverviewMap = forwardRef<UnDef<T.Control.OverviewMap>, ControlOverviewMapProps>(
  ({ visible, size = [150, 150], offset, position, buttonImage, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [controlOverviewMap, setControlOverviewMap] = useState<T.Control.OverviewMap>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => controlOverviewMap)

    useInstanceVisible(controlOverviewMap, visible)
    useInstanceAddRemove(map, controlOverviewMap, 'control')

    const useOffset = useMemo(() => toPoint(offset), [offset])

    const useSize = useMemo(() => toPoint(size), [size])

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.Control.OverviewMap({
          isOpen: true,
          size: useSize,
          position,
          ...props,
        })
        readyRef.current = true
        setControlOverviewMap(instance)
      }
    }, [])

    useEffect(() => {
      if (isArray(buttonImage) && controlOverviewMap) controlOverviewMap.setButtonImage(buttonImage[0], buttonImage[1])
    }, [buttonImage, controlOverviewMap])

    useSetProperties<T.Control.OverviewMap, T.Control.OverviewMapOptions>(controlOverviewMap, {
      position,
      ...props,
    })

    useSetProperties<T.Control.OverviewMap, T.Control.OverviewMapOptionsExtend>(
      controlOverviewMap,
      { offset: useOffset },
      true
    )

    return <></>
  }
)
export default OverviewMap
