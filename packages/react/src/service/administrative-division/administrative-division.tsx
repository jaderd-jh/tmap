import type { UnDef } from '@/utils'
import type { AdministrativeDivisionProps } from './types'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'

/** 服务类 - 行政区划 */
const AdministrativeDivision = forwardRef<UnDef<T.AdministrativeDivision>, AdministrativeDivisionProps>(
  ({ onSearch, searchWord, searchType, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [administrative, setAdministrative] = useState<T.AdministrativeDivision>()

    useImperativeHandle(ref, () => administrative)

    let init_dev = 0

    useEffect(() => {
      if (init_dev === 0 && map && !administrative) {
        init_dev += 1
        const instance = new T.AdministrativeDivision()
        setAdministrative(instance)
      }
    }, [])

    useEffect(() => {
      if (administrative && !!onSearch) {
        administrative.search({ searchWord, searchType, ...props }, onSearch)
      }
    }, [administrative, searchWord, searchType])

    return <></>
  }
)
export default AdministrativeDivision
