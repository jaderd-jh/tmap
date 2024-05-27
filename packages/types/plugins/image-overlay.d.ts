declare namespace T {
  /** 图片覆盖物类，用于添加一个只有一张图片的图层，图片会随缩放级别而自适应缩放 */
  class ImageOverlay extends Overlay {
    /**
     * 构造ImageOverlay对象，需要提供一个图片url，以及它覆盖的Bounds。图片会根据bounds大小显示
     * @param url 图片路径
     * @param bounds 图片覆盖地理范围
     * @param opts 请参考 ImageOverlayOptions
     */
    constructor(url: string, bounds: LngLatBounds, opts: ImageOverlayOptions)

    /** 获取图片透明度值 */
    getOpacity: () => number
    /** 设置图片透明度 */
    setOpacity: (opacity: number) => void
    /** 获取ImageOverlay的覆盖地理范围 */
    getBounds: () => LngLatBounds
    /** 设置ImageOverlay的覆盖地理范围 */
    setBounds: (bounds: LngLatBounds) => void
    /** 获取图片url */
    getImageUrl: () => string
    /** 设置图片url */
    setImageUrl: (url: string) => void
  }

  interface ImageOverlayOptions {
    /** 图片的透明度（可控） */
    opacity?: number
    /** 如果无法显示图像，浏览器将显示替代文本（不可控） */
    alt?: string

    /** ------------------ ⬇ 补充类型 ------------------ */

    /** 图片覆盖地理范围（可控） */
    bounds?: LngLatBounds
    /** 图片url（可控） */
    imageUrl?: string

    /** ------------------ ⬆ 补充类型 ------------------ */
  }
}
