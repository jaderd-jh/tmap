import type { UnDef } from '@/utils'
import type { LocalSearchProps } from './types'
import { useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'

/** 服务类 - 搜索 */
const LocalSearch = forwardRef<UnDef<T.LocalSearch>, LocalSearchProps>(
  ({ queryType = 1, specifyAdminCode = 0, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [localSearch, setLocalSearch] = useState<T.LocalSearch>()

    useImperativeHandle(ref, () => localSearch)

    let init_dev = 0

    useEffect(() => {
      if (init_dev === 0 && map && !localSearch) {
        init_dev += 1
        const instance = new T.LocalSearch(map, { ...props })
        setLocalSearch(instance)
      }
    }, [])

    useSetProperties<T.LocalSearch, LocalSearchProps>(localSearch, { pageCapacity: props.pageCapacity })

    useSetProperties<T.LocalSearch, LocalSearchProps>(localSearch, { queryType, specifyAdminCode }, true)

    return <></>
  }
)
export default LocalSearch
