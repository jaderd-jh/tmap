import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import type { ControlOverviewMapProps } from './types'
import { type UnDef, isArray } from '@/utils'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'

/** 缩略地图控件 */
const ControlOverviewMap = forwardRef<UnDef<T.ControlOverviewMap>, ControlOverviewMapProps>(
  ({ visible, size = [150, 150], offset, position, buttonImage, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [controlOverviewMap, setControlOverviewMap] = useState<T.ControlOverviewMap>()

    let init_dev = 0

    useImperativeHandle(ref, () => controlOverviewMap)

    useInstanceVisible(controlOverviewMap, visible)
    useInstanceAddRemove(map, controlOverviewMap, 'control')

    const useOffset = useMemo(() => {
      return toPoint(offset)
    }, [offset])

    const useSize = useMemo(() => {
      return toPoint(size)
    }, [size])

    useEffect(() => {
      if (init_dev === 0 && !controlOverviewMap) {
        init_dev += 1
        const instance = new T.Control.OverviewMap({
          isOpen: true,
          size: useSize,
          position,
          ...props,
        })
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
export default ControlOverviewMap
