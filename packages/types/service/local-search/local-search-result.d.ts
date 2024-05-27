declare namespace T {
  class LocalSearchResult {
    /**
     * 返回搜索类型
     *  - api 4.0 目前版本的普通/视野内/行政区划/纯地名搜索一律返回1
     */
    getResultType: () => QueryType
    /** 返回检索总条数 */
    getCount: () => number
    /** 返回检索关键词 */
    getKeyword: () => string
    /**
     * 返回点信息，当getResultType值为 1（普通搜索）时使用该方法获取点信息
     *  - api 4.0 目前版本的普通/视野内/行政区划/纯地名搜索的 getResultType 方法返回都是1，一律使用该方法获取点信息
     */
    getPois: () => LocalSearchPoi[]
    /**
     * 返回统计信息，当getResultType值为 2（视野内搜索）时使用该方法获取点信息
     *  - api 4.0 目前版本的视野内搜索 getResultType 值仍为 1，getStatistics()返回false，请使用 getPois 方法获取点信息
     */
    getStatistics: () => LocalSearchStatistics
    /**
     * 返回行政区省信息，当getResultType值为 3（行政区划搜索）时使用该方法获取点信息
     * - api 4.0 目前版本的行政区划搜索 getResultType 值仍为 1，getArea()返回false，请使用 getPois 方法获取点信息
     */
    getArea: () => LocalSearchArea
    /** 返回建议词信息，当getResultType值为 4（普通建议词搜索）时返回 */
    getSuggests: () => LocalSearchSuggest[]
    /** 搜索所依据的行政区划 */
    getPrompt: () => LocalSearchPrompt[]
    /** 返回线路信息，当getResultType值为 5（公交规划建议词搜索）时返回 */
    getLineData: () => LocalSearchLineData[]
  }

  /** 点信息 */
  interface LocalSearchPoi {
    /** 电话 */
    phone: string
    /** 坐标 */
    lonlat: string
    /** 地址 */
    address: string
    /** Poi点名称 */
    name: string
    /** poi类型（102表示公交站，普通poi该参数可以不返回） */
    poiType: string
    /** 点信息 id */
    hotPointID: string
  }

  /** 统计信息 */
  interface LocalSearchStatistics {
    /** 推荐显示城市 */
    priorityCitys: PriorityAdmin[]
    /** 搜索的关键字 */
    keyword: string
    /** 搜索的国家数量 */
    countryCount: number
    /** 搜索的城市数量 */
    citysCount: number
    /** 各省包含信息集合 */
    allAdmins: PriorityCity[]
    /** 搜索的省份数量 */
    provinceCount: number
  }

  /** 推荐显示城市/省 */
  interface PriorityAdmin {
    /** 统计数量 */
    count?: string
    /** 城市名称 */
    name: string
    /** 城市/省国标码 */
    adminCode: number
    childAdmins?: PriorityCity[]
  }

  /** 行政区省信息 */
  interface LocalSearchArea {
    /** 显示级别 */
    level: string
    /** 定位中心点坐标 */
    lonlat: string
    /** 行政区省名称 */
    name: string
    /** 行政区边界坐标，region坐标','隔开 */
    points: { region: string }[]
    /** 1-正常区域；2-特殊区域 */
    type: string
  }
  /** 建议词信息 */
  interface LocalSearchSuggest {
    /** 地址 */
    address: string
    /** 名称 */
    name: string
    /** 国标码 */
    gbCode: string
    /** 坐标位置，逗号隔开 */
    lonlat: string
  }
  /** 提示信息 */
  interface LocalSearchPrompt {
    /** 关键字 */
    keyword?: string
    /** 搜索的行政区信息 */
    admins: PriorityAdmin[]
    /**
     * 当 type = 1 时，会给出一个 admin 一个keyword 还有admincode，此时一般的提示为"是否在XXX搜索名称含XXX的结果"
     * 当 type = 2 时，会给出一个 admin 一个keyword 还有admincode， 此时一般提示为"在XXX没有搜索到相关的结果"
     * 当 type = 3 时，会给出多个admin 及对应的 admincode ，没有keyword，此时一般的提示为
     * '广东省汕尾市城区'
     * '山西省晋城市城区'
     * '山西省大同市城区'
     * '山西省长治市城区'
     * '山西省阳泉市城区'
     * 只列出名称即可，点击后，直接用这些关键字搜索即可完成行政区跳转
     */
    type: number
  }

  /** 线路信息 */
  interface LocalSearchLineData {
    /** poi点的poi类型（poiType =102表示公交站，其它值表示普通poi） */
    poiType: string
    /** 站数 */
    stationNum: string
    /** 线路名称 */
    name: string
    /** 线路的id */
    uuid: string
  }
}
