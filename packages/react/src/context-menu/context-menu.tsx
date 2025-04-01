import type { UnDef } from '@/utils'
import type { ContextMenuProps } from './types'
import { useEventProperties } from '@/hooks'
import { MapContext } from '@/map'
import { isDef } from '@/utils'
import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import MenuItem from './menu-item'
import Separator from './separator'

/** 右键菜单 */
const ContextMenuCompound = forwardRef<UnDef<T.ContextMenu>, ContextMenuProps>(
  ({ visible = true, children, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [contextMenu, setContextMenu] = useState<T.ContextMenu>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => contextMenu)

    const childArr = React.Children.toArray(children)

    useEffect(() => {
      if (!readyRef.current) {
        const instance = new T.ContextMenu(props)
        readyRef.current = true
        map?.addContextMenu(instance)
        setContextMenu(instance)
      }
    }, [])

    useEffect(() => {
      return () => {
        if (contextMenu) {
          // 从地图移除菜单的方式好离谱
          contextMenu.getItems()?.forEach(item => contextMenu.removeItem(item))
          contextMenu.getAllSeparator()?.forEach(() => contextMenu.removeSeparator(0))
          /** ⬇ 方法二： */
          // const contextMenus = document.getElementsByClassName('tdt-contextmenu')
          // // @ts-expect-error contextMenus
          // for (const menu of contextMenus) menu.remove()
        }
      }
    }, [contextMenu])

    const removeContextMenu = () => {
      if (!visible) contextMenu?.removeItem(undefined)
    }

    useEffect(() => {
      if (isDef(visible)) {
        if (contextMenu) map?.addEventListener('contextmenu', removeContextMenu)
        return () => {
          map?.removeEventListener('contextmenu', removeContextMenu)
        }
      }
    }, [visible, contextMenu])

    useEventProperties<T.ContextMenu, ContextMenuProps>(contextMenu, props)

    return (
      <>
        {contextMenu &&
          childArr.map((child, index) => {
            if (!React.isValidElement(child)) return child
            return React.cloneElement(child, { ...child.props, contextMenu, key: index, index })
          })}
      </>
    )
  }
)

export type CompoundedComponent = typeof ContextMenuCompound & {
  Item: typeof MenuItem
  Divider: typeof Separator
}

export const ContextMenu: CompoundedComponent = ContextMenuCompound as CompoundedComponent

/** 菜单项 */
ContextMenu.Item = MenuItem
/** 分割线 */
ContextMenu.Divider = Separator
