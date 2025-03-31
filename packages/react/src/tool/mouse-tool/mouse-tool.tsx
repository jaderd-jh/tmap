import type { Undefinable, VK } from '@/utils'
import type { MouseToolProps, MouseToolRef } from './types'
import { useEventProperties, useSetProperties } from '@/hooks'
import { MapContext } from '@/map'
import { toIcon } from '@/utils'
import { forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/** 地图工具集合 */
const MouseTool = forwardRef<Undefinable<MouseToolRef>, MouseToolProps>(({ open, type, toolOptions }, ref) => {
  const { map } = useContext(MapContext)

  const typeRef = useRef(type)

  const [mouseTool, setMouseTool] = useState<T.Tool>()

  const markerToolRef = useRef<T.MarkTool>()
  const polygonToolRef = useRef<T.PolygonTool>()
  const polylineToolRef = useRef<T.PolylineTool>()
  const rectangleToolRef = useRef<T.RectangleTool>()
  const circleToolRef = useRef<T.CircleTool>()
  const paintBrushToolRef = useRef<T.PaintBrushTool>()

  useImperativeHandle(ref, () => ({
    tool: mouseTool,
    marker: markerToolRef.current,
    polygon: polygonToolRef.current,
    polyline: polylineToolRef.current,
    rectangle: rectangleToolRef.current,
    circle: circleToolRef.current,
    paint: paintBrushToolRef.current,
  }))

  const toolProps = useMemo(() => {
    if (type) return (toolOptions as VK<any>)?.[type]
  }, [type])

  useEffect(() => {
    if (!open && mouseTool) {
      mouseTool.close()
      return
    }
    if (typeRef.current !== type && mouseTool) mouseTool.close()
    if (open && type !== null && type !== undefined) {
      if (map) {
        switch (type) {
          case 'marker':
            if (!markerToolRef.current) {
              markerToolRef.current = new T.MarkTool(map, { ...toolProps, icon: toIcon(toolProps.icon) })
              markerToolRef.current?.open()
            } else {
              markerToolRef.current?.open()
            }
            setMouseTool(markerToolRef.current)
            break
          case 'polygon':
            if (!polygonToolRef.current) {
              polygonToolRef.current = new T.PolygonTool(map, toolProps)
              polygonToolRef.current?.open()
            } else {
              polygonToolRef.current?.open()
            }
            setMouseTool(polygonToolRef.current)
            break
          case 'polyline':
            if (!polylineToolRef.current) {
              polylineToolRef.current = new T.PolylineTool(map, toolProps)
              polylineToolRef.current?.open()
            } else {
              polylineToolRef.current?.open()
            }
            setMouseTool(polylineToolRef.current)
            break
          case 'rectangle':
            if (!rectangleToolRef.current) {
              rectangleToolRef.current = new T.RectangleTool(map, toolProps)
              rectangleToolRef.current?.open()
            } else {
              rectangleToolRef.current?.open()
            }
            setMouseTool(rectangleToolRef.current)
            break
          case 'circle':
            if (!circleToolRef.current) {
              circleToolRef.current = new T.CircleTool(map, toolProps)
              circleToolRef.current?.open()
            } else {
              circleToolRef.current?.open()
            }
            setMouseTool(circleToolRef.current)
            break
          case 'paint':
            if (!paintBrushToolRef.current) {
              paintBrushToolRef.current = new T.PaintBrushTool(map, toolProps)
              paintBrushToolRef.current?.open()
            } else {
              paintBrushToolRef.current?.open()
            }
            setMouseTool(paintBrushToolRef.current)
            break
          default:
            break
        }
      }
    }
    typeRef.current = type
  }, [open, type])

  useEffect(() => {
    return () => {
      try {
        mouseTool?.close()
        map?.clearOverLays()
      } catch (err) {
        window.console.error(err)
      }
    }
  }, [])

  useEventProperties<T.Tool, MouseToolProps>(mouseTool, { ...toolProps })

  useSetProperties<T.Tool, MouseToolProps>(
    mouseTool,
    // @ts-expect-error tips & pointImage
    { tips: toolProps?.tips, pointImage: toolProps?.pointImage },
    true
  )

  return <></>
})
export default MouseTool
