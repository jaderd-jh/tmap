import type { UnDef } from '@/utils'
import type { MilitarySymbolsProps } from './types'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/** 符号标绘控件 */
const MilitarySymbols = forwardRef<UnDef<T.MilitarySymbols>, MilitarySymbolsProps>(
  ({ visible, offset, position, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [militarySymbols, setMilitarySymbols] = useState<T.MilitarySymbols>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => militarySymbols)

    useInstanceVisible(militarySymbols, visible)
    useInstanceAddRemove(map, militarySymbols, 'control')

    useEffect(() => {
      if (!readyRef.current) {
        // eslint-disable-next-line new-cap
        const instance = new T.Control.militarySymbols(props)
        readyRef.current = true
        setMilitarySymbols(instance)
      }
    }, [])

    const useOffset = useMemo(() => toPoint(offset), [offset])

    useSetProperties<T.MilitarySymbols, T.MilitarySymbolsOptionsExtend>(
      militarySymbols,
      { position, offset: useOffset },
      true
    )

    return <></>
  }
)
export default MilitarySymbols
