import type { SeparatorProps } from './types'
import { useEffect } from 'react'

// 右键菜单项分隔线
const Separator = ({ index, contextMenu }: SeparatorProps) => {
  let init_dev = 0

  useEffect(() => {
    if (init_dev === 0 && contextMenu) {
      init_dev += 1
      contextMenu.addSeparator()
    }
    return () => {
      if (contextMenu && index !== undefined && index !== null) {
        contextMenu.removeSeparator(index)
      }
    }
  }, [])

  return <></>
}
export default Separator
