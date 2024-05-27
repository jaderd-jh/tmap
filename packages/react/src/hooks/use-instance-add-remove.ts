import { useCallback, useEffect } from 'react'
import type { VK } from '@/utils'
import { type UnDef, isFunction } from '@/utils'

/**
 * 添加/移除实例
 * @param map
 * @param instance 实例对象
 * @param type 实例类型 overLay：覆盖物；control：控件；layer：图层
 * @param remove 是否移除
 */
const useInstanceAddRemove = (
  map: UnDef<T.Map>,
  instance: UnDef<any>,
  type: 'overLay' | 'control' | 'layer',
  remove?: UnDef<boolean>
) => {
  const fnCallback = useCallback(
    (param: 'add' | 'remove') => {
      const addName = `add${type.charAt(0).toUpperCase()}${type.slice(1)}`
      const removeName = `remove${type.charAt(0).toUpperCase()}${type.slice(1)}`
      if (instance) {
        if (param === 'add' && isFunction((map as VK<any>)[addName])) (map as VK<any>)[addName](instance)
        if (param === 'remove' && isFunction((map as VK<any>)[removeName])) (map as VK<any>)[removeName](instance)
      }
    },
    [instance]
  )

  useEffect(() => {
    if (map && instance) {
      if (remove === true) fnCallback('remove')
      else fnCallback('add')
    }
    return () => {
      if (instance) fnCallback('remove')
    }
  }, [instance, type, remove])
}
export default useInstanceAddRemove
