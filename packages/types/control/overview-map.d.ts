declare namespace T {
  namespace Control {
    /** 鹰眼地图控件，用来显示一个鹰眼地图, 继承自Control基类，拥有基类的所有方法 */
    declare class OverviewMap extends Control {
      /** 创建一个鹰眼地图控件 */
      constructor(opts?: OverviewMapOptions)

      /**
       * 设置鹰眼地图的按钮图片，要同时设置鹰眼地图打开和关闭状态下的两张图片
       * @param imgOpen 鹰眼地图在打开状态下的按钮图片
       * @param imgClose 鹰眼地图在关闭状态下的按钮图片
       */
      setButtonImage: (imgOpen: string, imgClose: string) => void
      /** 设置鹰眼地图和主地图之间空隙的背景颜色 */
      setBorderColor: (color: string) => void
      /** 设置鹰眼地图上的矩形框边框颜色 */
      setRectBorderColor: (color: string) => void
      /** 设置鹰眼地图上的矩形框背景颜色 */
      setRectBackColor: (color: string) => void
      /** 切换鹰眼地图的开-合状态 */
      changeView: () => void
      /** 返回该鹰眼的视图是否被打开 */
      isOpen: () => boolean
      /** 返回该鹰眼的地图对象 */
      getMiniMap: () => Map
      /** 添加事件监听函数 */
      addEventListener: <E extends keyof OverviewProtoEvents>(event: E, handler: OverviewProtoEvents[E]) => void

      /** 移除事件监听函数 */
      removeEventListener: <E extends keyof OverviewProtoEvents>(event: E, handler: OverviewProtoEvents[E]) => void
    }
    interface OverviewMapOptions extends ControlOptions {
      /**
       * 控件的停靠位置
       * @deprecated 使用 position 代替（anchor已无效，但官网api文档未修改）
       */
      anchor?: ControlOptions['position']
      /**
       * 缩略地图控件的大小
       * @description 不可控
       */
      size?: Point
      /**
       * 缩略地图添加到地图后的开合状态。true表示显示，false表示隐藏（不可控，如需要可调用changeView）
       * @description 不可控，如需要可调用overviewMap.changeView()切换
       */
      isOpen?: boolean
    }

    /** ------------------ ⬇ 补充类型 ------------------ */
    interface OverviewMapOptionsExtend extends OverviewMapOptions, ControlOptionsExtend {
      /**
       * 鹰眼地图在打开和关闭状态下的按钮图片
       * @description [打开状态下的按钮图片, 关闭状态下的按钮图片]
       * @description 可控
       */
      buttonImage?: [string, string]
      /**
       * 鹰眼地图和主地图之间空隙的背景颜色
       * @description 可控
       */
      borderColor?: string
      /**
       * 鹰眼地图上的矩形框边框颜色
       * @description 可控
       */
      rectBorderColor?: string
      /**
       * 鹰眼地图上的矩形框背景颜色
       * @description 可控
       */
      rectBackColor?: string
    }
    /** ------------------ ⬆ 补充类型 ------------------ */

    interface OverviewEvent extends MapEventBase {
      /** 是否打开状态 */
      isOpen: boolean
    }
    interface OverviewProtoEvents {
      /** 鹰眼视图控件的开合状态变化时触发事件 */
      viewchange: (e: OverviewEvent) => void
    }

    interface OverviewEvents {
      /** 鹰眼视图控件的开合状态变化时触发事件 */
      onViewChange: (e: OverviewEvent) => void
    }
  }
}
