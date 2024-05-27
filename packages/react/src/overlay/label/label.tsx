import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import type { LabelProps } from './types'
import { MapContext } from '@/map'
import { toLngLat, toPoint } from '@/utils'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import type { UnDef } from '@/utils'

/**  覆盖物 - 文本标注 */
const Label = forwardRef<UnDef<T.Label>, LabelProps>(
  ({ visible, label: labelStr, lngLat, offset, children, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [label, setLabel] = useState<T.Label>()

    let init_dev = 0

    useImperativeHandle(ref, () => label)

    useInstanceAddRemove(map, label, 'overLay')
    useInstanceVisible(label, visible)

    const useContent = useMemo(() => {
      return labelStr || children || ''
    }, [labelStr, children])

    const useLngLat = useMemo(() => {
      return toLngLat(lngLat)
    }, [lngLat])

    const useOffset = useMemo(() => {
      return toPoint(offset)
    }, [offset])

    useEffect(() => {
      if (init_dev === 0 && !label && lngLat) {
        init_dev += 1
        const instance = new T.Label({ text: useContent, position: useLngLat })
        setLabel(instance)
      }
    }, [lngLat])

    useSetProperties<T.Label, T.LabelOptions>(label, { label: useContent, lngLat: useLngLat })

    useSetProperties<T.Label, T.LabelOptions>(label, { ...props, offset: useOffset }, true)

    useEventProperties<T.Label, LabelProps>(label, props)

    return <></>
  }
)
export default Label
