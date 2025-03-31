import type { UnDef } from '@/utils'
import { isFunction } from '@/utils'
import { useEffect } from 'react'

/**
 * 绑定事件
 * @param instance 实例对象
 * @param props 实际传参
 */
// @ts-expect-error instance
const useEventProperties = <T extends T.MapEventListener, F extends VK<any>>(instance: UnDef<T>, props = {} as F) => {
  const instanceEventListenerFn = (type: 'on' | 'off') => {
    const regex = /^on[A-Z]/
    Object.entries(props).forEach(([key, fun]) => {
      if (regex.test(key) && isFunction(fun)) {
        const eName = key.toLocaleLowerCase().replace(/^on/, '') // 实际事件名
        if (eName && instance) {
          if (type === 'on') instance.addEventListener?.(eName, fun)
          if (type === 'off') instance.removeEventListener?.(eName, fun)
        }
      }
    })
  }

  useEffect(() => {
    if (instance) instanceEventListenerFn('on')
    return () => {
      instanceEventListenerFn('off')
    }
  }, [instance])
}
export default useEventProperties
