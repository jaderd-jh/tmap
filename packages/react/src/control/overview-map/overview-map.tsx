import type { UnDef } from '@/utils'
import type { ControlOverviewMapProps } from './types'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { isArray, toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/** 缩略地图控件 */
const OverviewMap = forwardRef<UnDef<T.ControlOverviewMap>, ControlOverviewMapProps>(
  ({ visible, size = [150, 150], offset, position, buttonImage, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [controlOverviewMap, setControlOverviewMap] = useState<T.ControlOverviewMap>()
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

    useSetProperties<T.ControlOverviewMap, T.ControlOverviewMapOptions>(controlOverviewMap, {
      position,
      ...props,
    })

    useSetProperties<T.ControlOverviewMap, T.ControlOverviewMapOptions>(controlOverviewMap, { offset: useOffset }, true)

    return <></>
  }
)
export default OverviewMap
