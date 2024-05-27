declare namespace T {
  /** 此类表示T.BusLineSearch的检索结果，没有构造函数，通过T.BusLineSearch的setGetBusLineCompleteCallback回调函数的参数得到 */
  class BusLine {
    /** 线路名称，如：68路 */
    lineName: string
    /** 线路类型，1表示公交；2表示地铁；3表示磁悬浮 */
    lineType: number
    /** 线路的长度，单位米 */
    length: number
    /** 线路的详细点信息，格式：x,y;x,y; */
    linePoint: string
    /** 始发车时间格式为：hh:mm 24小时制 */
    startTime: string
    /** 末班车时间格式为：hh:mm 24小时制 */
    endTime: string
    /** 公交线路的全程运营总时间，单位分钟 */
    totalTime: number
    /** 该线路所具有的站点总数量 */
    stationCount: number
    /** 发车间隔，单位秒 */
    interval: number
    /** 计费模式，0表示单一；1表示按距离；2表示按站 */
    ticketcal: number
    /** 全程票价，单位分 */
    totalPrice: number
    /** 起步票价，单位分 */
    startPrice: number
    /** 递增距离票价，单位千米 */
    increasedPrice: number
    /** 车站递增票价，按站 */
    increasedStep: number
    /** 是否支持月票，0表示不支持；1表示支持 */
    ismonTicket: number
    /** 是否双向行驶，0表示单项；1表示双向 */
    isBidirectional: number
    /** 是否人工售票，0表示有人；1表示无人 */
    isManual: number
    /** 状态，0表示使用中；1表示非使用中 */
    status: number
    /** 所属公交公司，公交线路所属公司 */
    company: string
    /** 返回公交站点个数 */
    getNumBusStations: () => number
    /** 返回某一个具体的公交站信息 */
    getBusStation: (i: number) => { lonlat: string; name: string; uuid: string }
    /** 返回公交线地理坐标点数组 */
    getPath: () => LngLat[]
  }
}
