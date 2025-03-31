/**
 * 检测变量类型
 * @param {any} val 检测的目标
 */
export const getVariableType = (val: any) => {
  const value = Object.prototype.toString.call(val)
  const result = value.match(/\[object (\S*)\]/)?.[1]
  return result?.toLocaleLowerCase()
}

/**
 * 是否是字符串
 * @param {any} val 检测的目标
 */
export const isString = (val: any): val is string => getVariableType(val) === 'string'

/**
 * 是否是对象
 * @param {any} val 检测的目标
 */
export const isObject = (val: any): val is Record<any, any> => getVariableType(val) === 'object'

/**
 * 是否是数组
 * @param {any} val 检测的目标
 */
export const isArray = (val: any): val is Array<any> => getVariableType(val) === 'array'

/**
 * 是否是函数，但也有可能是Class
 * @param {any} val 检测的目标
 */
// eslint-disable-next-line ts/no-unsafe-function-type
export const isFunction = (val: any): val is Function => getVariableType(val) === 'function'
