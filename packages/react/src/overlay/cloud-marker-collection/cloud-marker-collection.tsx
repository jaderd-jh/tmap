import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import type { CloudMarkerCollectionProps } from './types'
import { MapContext } from '@/map'
import type { UnDef } from '@/utils'
import { toLngLats } from '@/utils'
import { useEventProperties, useInstanceAddRemove, useSetProperties } from '@/hooks'

/** 覆盖物 - 海量密集点 */
const CloudMarkerCollection = forwardRef<UnDef<T.CloudMarkerCollection>, CloudMarkerCollectionProps>(
  ({ lnglats, styles, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [cloudMarkerCollection, setCloudMarkerCollection] = useState<T.CloudMarkerCollection>()

    useImperativeHandle(ref, () => cloudMarkerCollection)

    useInstanceAddRemove(map, cloudMarkerCollection, 'overLay')

    let init_dev = 0

    useEffect(() => {
      if (init_dev === 0 && !cloudMarkerCollection && lnglats) {
        if (document.createElement('canvas').getContext('2d')) {
          init_dev += 1
          const instance = new T.CloudMarkerCollection(toLngLats(lnglats) || [], { ...props, ...styles })
          setCloudMarkerCollection(instance)
        } else {
          window.console.error('IE9及以上浏览器支持绘制海量点')
        }
      }
    }, [lnglats])

    useEventProperties<T.CloudMarkerCollection, CloudMarkerCollectionProps>(cloudMarkerCollection, props)

    useSetProperties<T.CloudMarkerCollection, CloudMarkerCollectionProps>(cloudMarkerCollection, {
      lnglats,
      // api 4.0 cloudMarkerCollection.setStyles不可用，报错：'this.setPoints is not a function'
      // styles: { ...props, ...styles },
    })

    return <></>
  }
)
export default CloudMarkerCollection
