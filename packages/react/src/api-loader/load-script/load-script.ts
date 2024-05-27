import type { APILoaderConfig } from '../types'
import { pluginsUrl } from './plugins'

export const load = async (options: APILoaderConfig) => {
  enum LoadStatus {
    unload = 'unload',
    loading = 'loading',
    loaded = 'loaded',
    failed = 'failed',
  }

  let loadStatus: string = LoadStatus.unload

  const config: APILoaderConfig = { tkey: '', version: '4.0', plugins: [] }

  const loadScript = (url: string) => {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script')
      script.src = url
      script.type = 'text/javascript'
      script.onload = () => resolve()
      script.onerror = e => {
        loadStatus = LoadStatus.failed
        reject(e)
      }
      document.body.appendChild(script)
    })
  }

  if (loadStatus === LoadStatus.unload) {
    loadStatus = LoadStatus.loading
    config.tkey = options.tkey || config.tkey
    config.version = options.version || config.version
    config.plugins = options.plugins || config.plugins
    const { tkey, version, plugins = [] } = config
    if (typeof window === 'undefined') {
      return new Promise((resolve, reject) => {
        reject(new Error('天地图 JSAPI 只能在浏览器中使用'))
      })
    }
    if (!tkey) {
      return new Promise((resolve, reject) => {
        reject(new Error('缺少天地图密钥，申请地址：https://console.tianditu.gov.cn/api/key'))
      })
    }
    await loadScript(`http://api.tianditu.gov.cn/api?v=${version}&tk=${tkey}`)
    await Promise.all(
      plugins
        .map(name => pluginsUrl[name])
        .flat()
        .map(url => loadScript(url))
    )
    loadStatus = LoadStatus.loaded
  }
  if (loadStatus === LoadStatus.loading) {
    return new Promise((resolve, reject) => {
      reject(new Error())
    })
  }
  if (loadStatus === LoadStatus.failed) {
    return new Promise((resolve, reject) => {
      reject(new Error('天地图 JSAPI 加载失败'))
    })
  }
}
