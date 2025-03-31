import type { UnDef } from '@/utils'
import type { MilitarySymbolsProps } from './types'
import { useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'

/** 符号标绘控件 */
const MilitarySymbols = forwardRef<UnDef<T.MilitarySymbols>, MilitarySymbolsProps>(
  ({ visible, offset, position, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [militarySymbols, setMilitarySymbols] = useState<T.MilitarySymbols>()

    let init_dev = 0

    useImperativeHandle(ref, () => militarySymbols)

    useInstanceVisible(militarySymbols, visible)
    useInstanceAddRemove(map, militarySymbols, 'control')

    useEffect(() => {
      if (init_dev === 0 && !militarySymbols) {
        init_dev += 1
        // eslint-disable-next-line new-cap
        const instance = new T.Control.militarySymbols(props)
        setMilitarySymbols(instance)
      }
    }, [])

    const useOffset = useMemo(() => {
      return toPoint(offset)
    }, [offset])

    useSetProperties<T.MilitarySymbols, T.MilitarySymbolsOptions>(
      militarySymbols,
      { position, offset: useOffset },
      true
    )

    return <></>
  }
)
export default MilitarySymbols
