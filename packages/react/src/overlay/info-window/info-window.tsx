import type { UnDef } from '@/utils'
import type { InfoWindowProps } from './types'
import { useEventProperties, useInstanceAddRemove, usePortal, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toLngLat, toPoint } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useState } from 'react'

/** 覆盖物 - 信息窗（地图仅可同时展示一个信息窗体） */
const InfoWindow = forwardRef<UnDef<T.InfoWindow>, InfoWindowProps>(
  ({ open, lngLat, offset, isCustom, content, children, closeButton = true, ...props }, ref) => {
    const { map } = useContext(MapContext)
    const { container, Portal } = usePortal()
    const [infoWindow, setInfoWindow] = useState<T.InfoWindow>()

    let init_dev = 0

    useImperativeHandle(ref, () => infoWindow)

    useInstanceAddRemove(map, infoWindow, 'overLay')

    const useContent = useMemo(() => {
      return content || container
    }, [content, children])

    const useLngLat = useMemo(() => {
      return toLngLat(lngLat) || map!.getCenter()
    }, [lngLat])

    const useOffset = useMemo(() => {
      return toPoint(offset)
    }, [offset])

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
      if (init_dev === 0 && map && !infoWindow) {
        init_dev += 1
        const instance = new T.InfoWindow('', {
          ...props,
          offset: useOffset,
          closeButton: isCustom ? false : closeButton,
        })
        instance.setLngLat(map?.getCenter())
        setInfoWindow(instance)
      }
    }, [])

    useEffect(() => {
      if (map && infoWindow) {
        if (isCustom) removeContentClass()
        if (open) {
          infoWindow.setContent(useContent)
          map.openInfoWindow(infoWindow, useLngLat)
        } else {
          infoWindow.closeInfoWindow()
        }
      }
    }, [open, infoWindow])

    // useEffect(() => {
    //   setTimeout(() => {
    //     const element = document.getElementsByClassName('tdt-infowindow-content')
    //     if (isCustom) {
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
