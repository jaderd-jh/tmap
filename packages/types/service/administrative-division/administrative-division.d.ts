declare namespace T {
  /** 此类用于获取行政区划信息 */
  class AdministrativeDivision {
    /** 创建一个获取行政区划的实例 */
    constructor()

    /** 根据检索词发起检索 */
    search: (config: AdministrativeDivisionOptions, callback: (e: AdministrativeDivisionResult) => void) => void
  }

  interface AdministrativeDivisionOptions {
    /** 查询行政区划的code/名称（可控） */
    searchWord: string
    /** 查询类型（可控） 0：根据code查询，1：根据名称查询 */
    searchType: 0 | 1
    /** 是否需要下一级信息（不可控） */
    needSubInfo?: boolean
    /** 是否需要所有子节点（不可控） */
    needAll?: boolean
    /** 是否需要行政区划范围（不可控） */
    needPolygon?: boolean
    /** 是否需要上一级所有信息（不可控） */
    needPre?: boolean
  }
}
