import { useEffect, useRef } from 'react'
import type { UnDef, VK } from '@/utils'
import { isArray, isFunction } from '@/utils'

/**
 * 受控属性
 * @param instance 实例对象
 * @param props 属性值
 * @param init 是否参与初始化 默认false
 * @param paramNames 指定set[属性名]
 * @param noCamelCases 非驼峰格式的set[属性名]（例如 高德地图的zIndex(setzIndex) ）
 */
const useSetProperties = <T extends VK<any>, F extends VK<any>>(
  instance = {} as UnDef<T>,
  props = {} as F,
  init = false,
  paramNames: string[] = [],
  noCamelCases: string[] = []
) => {
  const prePropsRef = useRef(props)

  const instanceSetProperties = (name: string, value: any) => {
    let setName = ''
    if (noCamelCases.includes(name)) setName = `set${name}`
    else setName = `set${name.charAt(0).toUpperCase()}${name.slice(1)}`
    if (isFunction(instance?.[setName]) && value !== undefined) instance[setName](value)
  }

  const setPropertiesFn = (names: string[]) => {
    names.forEach(name => {
      if (isFunction(props[name])) return
      const propV = props[name]
      const preV = prePropsRef.current[name]
      if (propV !== undefined) {
        if (!init) {
          if (JSON.stringify(propV) !== JSON.stringify(preV)) instanceSetProperties(name, propV)
        } else {
          instanceSetProperties(name, propV)
        }
      }
    })
  }

  useEffect(() => {
    if (instance) {
      const preProps = prePropsRef.current
      let names: string[] = []
      const propsKeys = Object.keys(props)
      if (isArray(paramNames) && paramNames.length > 0) names = propsKeys.filter(value => paramNames.includes(value))
      else names = propsKeys
      if (!init) {
        if (JSON.stringify(props) !== JSON.stringify(preProps)) setPropertiesFn(names)
      } else {
        setPropertiesFn(names)
      }
      prePropsRef.current = props
    }
  }, [instance, props])
}

export default useSetProperties
