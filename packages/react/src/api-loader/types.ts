import type { pluginsUrl } from './load-script/plugins'
import type { CommonProps } from '@/utils'

export type Plugin = keyof typeof pluginsUrl

export interface APILoaderConfig {
  /** 天地图密钥 */
  tkey?: string
  /** 指定要加载的 JSAPI 的版本，缺省 4.0 */
  version?: string
  /** 插件列表 */
  plugins?: Plugin[]
}

export interface APILoaderProps extends APILoaderConfig, CommonProps {}
