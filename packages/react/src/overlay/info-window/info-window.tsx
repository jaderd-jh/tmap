import type { UnDef } from '@/utils'
import type { InfoWindowProps } from './types'
import { useEventProperties, useInstanceAddRemove, usePortal, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toLngLat, toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/** 覆盖物 - 信息窗（地图仅可同时展示一个信息窗体） */
const InfoWindow = forwardRef<UnDef<T.InfoWindow>, InfoWindowProps>(
  ({ open, lngLat, offset, isCustom = false, content, children, closeButton = true, ...props }, ref) => {
    const { map } = useContext(MapContext)
    const { container, Portal } = usePortal()

    const [infoWindow, setInfoWindow] = useState<T.InfoWindow>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => infoWindow)

    useInstanceAddRemove(map, infoWindow, 'overLay')

    const useContent = useMemo(() => content || container, [content, children])

    const useLngLat = useMemo(() => toLngLat(lngLat) || map?.getCenter() || toLngLat([0, 0]), [lngLat])

    const useOffset = useMemo(() => toPoint(offset), [offset])

    const removeContentClass = () => {
      ;[
        'tdt-infowindow-content',
        'tdt-infowindow-content-wrapper',
        'tdt-infowindow-tip-container',
        'tdt-infowindow-tip',
      ].forEach(str => {
        Array.from(document.getElementsByClassName(str)).forEach(element => {
          element.className = ''
        })
      })
    }

    useEffect(() => {
      if (map && !readyRef.current) {
        const instance = new T.InfoWindow(useContent, {
          ...props,
          offset: useOffset,
          closeButton: isCustom ? false : closeButton,
        })
        instance.setLngLat(map.getCenter())
        readyRef.current = true
        setInfoWindow(instance)
      }
    }, [])

    useEffect(() => {
      if (infoWindow) {
        if (isCustom) removeContentClass()
        if (open) {
          map?.openInfoWindow(infoWindow, useLngLat!)
        } else {
          infoWindow.closeInfoWindow()
        }
      }
    }, [open, infoWindow])

    // useEffect(() => {
    //   setTimeout(() => {
    //     const element = document.getElementsByClassName('tdt-infowindow-content')
    //     if (custom) {
    //       if (element.length > 0) element[0].id = 'tmap-custom-info-window'
    //       const dom = document.getElementById('tmap-custom-info-window')
    //       if (dom) {
    //         dom.style.width = 'auto'
    //         const width = dom?.offsetWidth
    //         dom.style.width = `${width}px` || '120px'
    //       }
    //       removeContentClass()
    //     }
    //   })
    // }, [content, children])

    useEventProperties<T.InfoWindow, InfoWindowProps>(infoWindow, props)

    useSetProperties<T.InfoWindow, T.InfoWindowOptions>(infoWindow, {
      content: useContent,
      offset: useOffset,
      lngLat: useLngLat,
    })
    return <Portal>{children}</Portal>
  }
)
export default InfoWindow
