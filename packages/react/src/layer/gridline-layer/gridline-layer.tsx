import type { UnDef } from '@/utils'
import type { GridlineLayerProps } from './types'
import { useEventProperties, useInstanceAddRemove, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'

/** 图层 - 网格图层 */
const GridlineLayer = forwardRef<UnDef<T.GridlineLayer>, GridlineLayerProps>((props, ref) => {
  const { map } = useContext(MapContext)

  const [gridlineLayer, setGridlineLayer] = useState<T.GridlineLayer>()

  useImperativeHandle(ref, () => gridlineLayer)

  useInstanceAddRemove(map, gridlineLayer, 'layer')

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && !gridlineLayer) {
      init_dev += 1
      const instance = new T.GridlineLayer({ ...props })
      setGridlineLayer(instance)
    }
  }, [])

  useEventProperties<T.GridlineLayer, GridlineLayerProps>(gridlineLayer, props)

  useSetProperties<T.GridlineLayer, GridlineLayerProps>(gridlineLayer, {
    zIndex: props.zIndex,
    opacity: props.opacity,
  })

  return <></>
})
export default GridlineLayer
