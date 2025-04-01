import type { SeparatorProps } from './types'
import { useEffect, useRef } from 'react'

/** 右键菜单 - 分割线 */
const Separator = ({ contextMenu }: SeparatorProps) => {
  const readyRef = useRef<boolean>(false)

  useEffect(() => {
    if (!readyRef.current && contextMenu) {
      readyRef.current = true
      contextMenu.addSeparator()
    }
  }, [])

  return <></>
}
export default Separator
