import type { UnDef } from '@/utils'
import type { TransitRouteProps } from './types'
import { useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toLngLat } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'

/** 服务类 - 公交路线规划 */
const TransitRoute = forwardRef<UnDef<T.TransitRoute>, TransitRouteProps>(({ start, end, ...props }, ref) => {
  const { map } = useContext(MapContext)

  const [transitRoute, setTransitRoute] = useState<T.TransitRoute>()

  useImperativeHandle(ref, () => transitRoute)

  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && map && !transitRoute) {
      init_dev += 1
      const instance = new T.TransitRoute(map, props)
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
