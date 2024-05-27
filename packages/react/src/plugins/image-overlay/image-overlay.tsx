import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import type { ImageOverlayProps } from './types'
import type { UnDef } from '@/utils'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toBounds } from '@/utils'

/**  开源插件 - 图片覆盖物 */
const ImageOverlay = forwardRef<UnDef<T.ImageOverlay>, ImageOverlayProps>(
  ({ visible, bounds, imageUrl, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [imageOverlay, setImageOverlay] = useState<T.ImageOverlay>()

    let init_dev = 0

    useImperativeHandle(ref, () => imageOverlay)

    useInstanceAddRemove(map, imageOverlay, 'overLay')
    useInstanceVisible(imageOverlay, visible)

    const lngLatBounds = useMemo(() => {
      return toBounds(bounds)
    }, [bounds])

    useEffect(() => {
      if (init_dev === 0 && !imageOverlay && lngLatBounds && imageUrl) {
        init_dev += 1
        const instance = new T.ImageOverlay(imageUrl, lngLatBounds, props)
        setImageOverlay(instance)
      }
    }, [lngLatBounds, imageUrl])

    useEventProperties<T.ImageOverlay, ImageOverlayProps>(imageOverlay, props)

    useSetProperties<T.ImageOverlay, T.ImageOverlayOptions>(imageOverlay, {
      opacity: props.opacity,
      bounds: lngLatBounds,
      imageUrl,
    })

    return <></>
  }
)
export default ImageOverlay
