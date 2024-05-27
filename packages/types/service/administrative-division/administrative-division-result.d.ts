declare namespace T {
  /** 此类表示 T.AdministrativeDivision的检索结果，没有构造函数 */
  class AdministrativeDivisionResult {
    /** 返回状态码，100表示正常，101表示没有查到结果 */
    getStatus: () => 100 | 101
    /** 返回响应信息 */
    getMsg: () => string
    /** 数据版本 */
    getDataVersion: () => string
    /** 返回行政区划数据信息 */
    getData: () => AdministrativeDivisionResultData | AdministrativeDivisionResultData[]
  }

  type AdminType = 'country' | 'province' | 'city'

  interface ParentAdministrativeDivision {
    /** 行政区划名称 */
    name: string
    /** 行政区划类别(省市县) */
    adminType: AdminType
    /** 行政区划码 */
    cityCode: string
  }

  interface AdministrativeDivisionResultData {
    /** 行政区划类别(省市县) */
    adminType: AdminType
    /** 行政区划坐标范围，逗号隔开 */
    bound: string
    /** 行政区划码 */
    cityCode: string
    /** 行政区划英文名称 */
    english: string
    /** 行政区划英文简称 */
    englishabbrevation: string
    /** 纬度 */
    lat: number
    /** 行政区划等级 */
    level: number
    /** 经度 */
    lnt: number
    /** 行政区划名称 */
    name: string
    /** 行政区划简称 */
    nameabbrevation: string
    /** 上级行政区划 */
    parents: Record<AdminType, ParentAdministrativeDivision>
  }
}
