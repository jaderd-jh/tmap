import type { LocalSearchProps } from './types'
import type { UnDef } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useSetProperties } from '@/hooks'
import { MapContext } from '@/map'

/** 服务类 - 搜索 */
const LocalSearch = forwardRef<UnDef<T.LocalSearch>, LocalSearchProps>(
  ({ queryType = 1, specifyAdminCode = 0, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [localSearch, setLocalSearch] = useState<T.LocalSearch>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => localSearch)

    useEffect(() => {
      if (map && !readyRef.current) {
        const instance = new T.LocalSearch(map, { ...props })
        readyRef.current = true
        setLocalSearch(instance)
      }
    }, [])

    useSetProperties<T.LocalSearch, LocalSearchProps>(localSearch, { pageCapacity: props.pageCapacity })

    useSetProperties<T.LocalSearch, LocalSearchProps>(localSearch, { queryType, specifyAdminCode }, true)

    return <></>
  }
)
export default LocalSearch
