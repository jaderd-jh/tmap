import type { ContextMenuItem } from './types'
import { useSetProperties } from '@/hooks'
import { useEffect, useMemo, useState } from 'react'

// 地图右键菜单项
const MenuItem = ({ text, visible, contextMenu, index, children, onClick = function () {} }: ContextMenuItem) => {
  const [menuItem, setMenuItem] = useState<T.MenuItem>()

  let init_dev = 0

  const useText = useMemo(() => {
    return text || children
  }, [text, children])

  useEffect(() => {
    if (init_dev === 0 && !menuItem && contextMenu && useText) {
      init_dev += 1
      const instance = new T.MenuItem(useText, onClick)
      setMenuItem(instance)
      contextMenu.addItem(instance)
      const contextMenuItems = document.getElementsByClassName('tdt-contextmenu-item')
      contextMenuItems[index || '0']?.classList.add(`tdt-contextmenu-item-${index}`)
    }
    return () => {
      // 天地图 api 4.0 contextMenu.removeItem 移除菜单项失效
      if (contextMenu && menuItem) contextMenu.removeItem(menuItem)
    }
  }, [contextMenu, menuItem, useText])

  useEffect(() => {
    if (menuItem) {
      const contextMenuItems = document.getElementsByClassName(`tdt-contextmenu-item-${index}`)
      // @ts-expect-error style
      if (visible === false) contextMenuItems[0].style.display = 'none'
      // @ts-expect-error style
      else contextMenuItems[0].style.display = 'block'
    }
  }, [visible])

  useSetProperties<T.MenuItem, T.MenuItemOptions>(menuItem, { text: useText || '' })

  return null
}
export default MenuItem
