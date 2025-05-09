import type { UnDef } from '@/utils'
import type { ImageOverlayProps } from './types'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toBounds } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/**  开源插件 - 图片覆盖物 */
const ImageOverlay = forwardRef<UnDef<T.ImageOverlay>, ImageOverlayProps>(
  ({ visible, bounds, imageUrl, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [imageOverlay, setImageOverlay] = useState<T.ImageOverlay>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => imageOverlay)

    useInstanceAddRemove(map, imageOverlay, 'overLay')
    useInstanceVisible(imageOverlay, visible)

    const lngLatBounds = useMemo(
      () =>
        toBounds(
          bounds || [
            [0, 0],
            [0, 0],
          ]
        ),
      [bounds]
    )

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.ImageOverlay(imageUrl || '', lngLatBounds!, props)
        readyRef.current = true
        setImageOverlay(instance)
      }
    }, [])

    useEventProperties<T.ImageOverlay, ImageOverlayProps>(imageOverlay, props)

    useSetProperties<T.ImageOverlay, T.ImageOverlayOptionsExtend>(imageOverlay, {
      opacity: props.opacity,
      bounds: lngLatBounds,
      imageUrl,
    })

    return <></>
  }
)
export default ImageOverlay
