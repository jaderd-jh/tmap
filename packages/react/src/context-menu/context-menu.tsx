import React, { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import MenuItem from './menu-item'
import Separator from './separator'
import type { ContextMenuProps } from './types'
import { MapContext } from '@/map'
import type { UnDef } from '@/utils'
import { useEventProperties } from '@/hooks'

/** 地图右键菜单 */
const ContextMenuCompound = forwardRef<UnDef<T.ContextMenu>, ContextMenuProps>(
  ({ visible = true, children, ...props }, ref) => {
    const { map } = useContext(MapContext)

    const [contextMenu, setContextMenu] = useState<T.ContextMenu>()

    useImperativeHandle(ref, () => contextMenu)

    const childArr = React.Children.toArray(children)

    let init_dev = 0

    useEffect(() => {
      if (init_dev === 0 && map && !contextMenu) {
        init_dev += 1
        const instance = new T.ContextMenu(props)
        map?.addContextMenu(instance)
        setContextMenu(instance)
      }
      return () => {
        if (map && contextMenu) {
          // 天地图 api 4.0 没有移除右键菜单的方法，手动移除好离谱
          const contextMenus = document.getElementsByClassName('tdt-contextmenu')
          // @ts-expect-error contextMenus
          for (const menu of contextMenus) menu.remove()
        }
      }
    }, [contextMenu])

    const removeContextMenu = () => {
      if (!visible) contextMenu?.removeItem(undefined)
    }

    useEffect(() => {
      if (visible !== undefined && visible !== null) {
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
