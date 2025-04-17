import type { UnDef, VK } from '@/utils'
import { isArray, isFunction } from '@/utils'
import { useEffect, useRef } from 'react'

const filterFun = (props: VK<any>) => {
  const fns = Object.keys(props).filter(key => isFunction(props[key]))
  const newProps = { ...props }
  fns.forEach(fn => delete newProps[fn])
  return newProps
}

/**
 * 受控属性
 * @param instance 实例对象
 * @param props 属性值
 * @param init 是否参与初始化 默认false
 * @param paramNames 指定set[属性名]
 * @param noCamelCases 非驼峰格式的set[属性名]
 */
const useSetProperties = <T extends VK<any>, F extends VK<any>>(
  instance = undefined as UnDef<T>,
  props = {} as F,
  init = false,
  paramNames: string[] = [],
  noCamelCases: string[] = []
) => {
  const prePropsRef = useRef(filterFun(props))

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
      const curProps = filterFun(props)
      const preProps = prePropsRef.current
      let names: string[] = []
      const propsKeys = Object.keys(curProps)
      if (isArray(paramNames) && paramNames.length > 0) names = propsKeys.filter(value => paramNames.includes(value))
      else names = propsKeys
      if (!init) {
        if (JSON.stringify(curProps) !== JSON.stringify(preProps)) setPropertiesFn(names)
      } else {
        setPropertiesFn(names)
      }
      prePropsRef.current = curProps
    }
  }, [instance, props])
}

export default useSetProperties
