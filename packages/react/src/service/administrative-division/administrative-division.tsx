import type { UnDef } from '@/utils'
import type { AdministrativeDivisionProps } from './types'
import { MapContext } from '@/map'
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'

/** 服务类 - 行政区划 */
const AdministrativeDivision = forwardRef<UnDef<T.AdministrativeDivision>, AdministrativeDivisionProps>(
  ({ onSearch, searchWord, searchType, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [administrative, setAdministrative] = useState<T.AdministrativeDivision>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => administrative)

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.AdministrativeDivision()
        readyRef.current = true
        setAdministrative(instance)
      }
    }, [])

    useEffect(() => {
      if (administrative) {
        administrative.search({ searchWord, searchType, ...props }, e => {
          onSearch?.(e)
        })
      }
    }, [administrative, searchWord, searchType])

    return <></>
  }
)
export default AdministrativeDivision
