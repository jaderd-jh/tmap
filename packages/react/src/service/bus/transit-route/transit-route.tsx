import type { UnDef } from '@/utils'
import type { TransitRouteProps } from './types'
import { useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toLngLat } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'

/** 服务类 - 公交路线规划 */
const TransitRoute = forwardRef<UnDef<T.TransitRoute>, TransitRouteProps>(({ start, end, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [transitRoute, setTransitRoute] = useState<T.TransitRoute>()
  const readyRef = useRef<boolean>(false)

  useImperativeHandle(ref, () => transitRoute)

  useEffect(() => {
    if (map && !readyRef.current) {
      const instance = new T.TransitRoute(map, props)
      readyRef.current = true
      setTransitRoute(instance)
    }
  }, [])

  useEffect(() => {
    if (transitRoute && start && end) {
      const startLL = toLngLat(start)
      const endLL = toLngLat(end)
      if (startLL && endLL) transitRoute.search(startLL, endLL)
    }
  }, [transitRoute, start, end])

  useSetProperties<T.TransitRoute, T.TransitRouteOptions>(transitRoute, { policy: props.policy })

  return <></>
})
export default TransitRoute
