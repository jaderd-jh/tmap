export const pluginsUrl: Record<string, string[]> = {
  // D3.js绘制图形
  D3: [
    'https://lbs.tianditu.gov.cn/js/lib/d3/d3.min.js',
    'https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.min.js',
  ],
  // 热力图
  Heatmap: ['https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/HeatmapOverlay.min.js'],
  // 车辆轨迹跟踪动画
  CarTrack: [
    'https://lbs.tianditu.gov.cn/js/lib/d3/d3.min.js',
    'https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/D3SvgOverlay.min.js',
    'https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/CarTrack.min.js',
  ],
  // 缓冲区
  BufferTool: [
    'https://cdn.bootcss.com/Turf.js/3.0.14/turf.js',
    'https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/BufferTool.min.js',
  ],
  // 图片覆盖物
  ImageOverlay: ['https://lbs.tianditu.gov.cn/api/js4.0/opensource/openlibrary/ImageOverlay.min.js'],
}
