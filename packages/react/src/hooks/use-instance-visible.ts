import type { UnDef } from '@/utils'
import { useEffect } from 'react'

/**
 * 显示/隐藏实例
 * @param instance 实例对象
 * @param visible 是否可见
 */
const useInstanceVisible = <T extends { show: () => void; hide: () => void }>(
  instance: UnDef<T>,
  visible?: UnDef<boolean>
) => {
  useEffect(() => {
    setTimeout(() => {
      if (instance) {
        if (visible === false) instance.hide?.()
        else instance.show?.()
      }
    })
  }, [instance, visible])
}
export default useInstanceVisible
