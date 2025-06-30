import type { UnDef } from '@/utils'
import type { LabelProps } from './types'
import { useEventProperties, useInstanceAddRemove, useInstanceVisible, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toLngLat, toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/**  覆盖物 - 文本标注 */
const Label = forwardRef<UnDef<T.Label>, LabelProps>(
  ({ visible, label: labelStr, lngLat, offset, children, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [label, setLabel] = useState<T.Label>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => label)

    useInstanceAddRemove(map, label, 'overLay')
    useInstanceVisible(label, visible)

    const useContent = useMemo(() => labelStr || children || '', [labelStr, children])

    const useLngLat = useMemo(() => toLngLat(lngLat || [0, 0]), [lngLat])

    const useOffset = useMemo(() => toPoint(offset), [offset])

    useEffect(() => {
      if (!readyRef.current && !!T.Label) {
        const instance = new T.Label({ text: useContent, position: useLngLat })
        readyRef.current = true
        setLabel(instance)
      }
    }, [])

    useSetProperties<T.Label, T.LabelOptionsExtend>(label, { label: useContent, lngLat: useLngLat })

    useSetProperties<T.Label, T.LabelOptionsExtend>(label, { ...props, offset: useOffset }, true)

    useEventProperties<T.Label, LabelProps>(label, props)

    return <></>
  }
)
export default Label
