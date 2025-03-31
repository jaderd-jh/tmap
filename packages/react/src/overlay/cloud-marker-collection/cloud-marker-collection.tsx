import type { UnDef } from '@/utils'
import type { CloudMarkerCollectionProps } from './types'
import { useEventProperties, useInstanceAddRemove, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toLngLats } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/** 覆盖物 - 海量密集点 */
const CloudMarkerCollection = forwardRef<UnDef<T.CloudMarkerCollection>, CloudMarkerCollectionProps>(
  ({ lnglats, styles, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [cloudMarkerCollection, setCloudMarkerCollection] = useState<T.CloudMarkerCollection>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => cloudMarkerCollection)

    useInstanceAddRemove(map, cloudMarkerCollection, 'overLay')

    const uselnglats = useMemo(() => {
      const arr = toLngLats(lnglats) || []
      if (!arr.length) return [new T.LngLat(0, 0)]
      else return arr
    }, [lnglats])

    useEffect(() => {
      if (!readyRef.current && !!uselnglats.length) {
        if (document.createElement('canvas').getContext('2d')) {
          const instance = new T.CloudMarkerCollection(uselnglats, { ...props, ...styles })
          readyRef.current = true
          setCloudMarkerCollection(instance)
        } else {
          window.console.error('IE9及以上浏览器支持绘制海量点')
        }
      }
    }, [])

    useEventProperties<T.CloudMarkerCollection, CloudMarkerCollectionProps>(cloudMarkerCollection, props)

    useSetProperties<T.CloudMarkerCollection, CloudMarkerCollectionProps>(cloudMarkerCollection, {
      // ⬇ api 4.0 cloudMarkerCollection.setLnglats 不能设置为空（可以使用 [new T.LngLat(0, 0)] 代替），否则下次调用时失效
      lnglats: uselnglats,
      // ⬇ api 4.0 cloudMarkerCollection.setStyles不可用，报错：'this.setPoints is not a function'
      // styles: { ...props, ...styles },
    })

    return <></>
  }
)
export default CloudMarkerCollection
