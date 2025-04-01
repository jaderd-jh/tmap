import type { UnDef } from '@/utils'
import type { ContextMenuItem } from './types'
import { useSetProperties } from '@/hooks'
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

/** 右键菜单 - 菜单项 */
const MenuItem = forwardRef<UnDef<T.MenuItem>, ContextMenuItem>(
  ({ text, contextMenu, children, onClick = () => {} }, ref) => {
    const [menuItem, setMenuItem] = useState<T.MenuItem>()
    const readyRef = useRef<boolean>(false)

    useImperativeHandle(ref, () => menuItem)

    const useText = useMemo(() => text || children || '', [text, children])

    useEffect(() => {
      if (!readyRef.current && contextMenu && useText) {
        const instance = new T.MenuItem(useText, onClick)
        readyRef.current = true
        contextMenu.addItem(instance)
        setMenuItem(instance)
      }
    }, [])

    useSetProperties<T.MenuItem, T.MenuItemOptions>(menuItem, {
      // ⬇ api 4.0 MenuItem.setText 失效，菜单项文本不可控
      text: useText,
    })

    return null
  }
)
export default MenuItem
