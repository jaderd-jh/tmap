import type { APILoaderConfig } from '../types'
import { pluginsUrl } from './plugins'

enum LoadStatus {
  unload = 'unload',
  loading = 'loading',
  loaded = 'loaded',
}

let loadStatus: LoadStatus = LoadStatus.unload

const loadScript = (id: string, url: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(id)
    if (existingScript) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = url
    script.id = id
    script.type = 'text/javascript'
    script.async = true
    script.onload = () => resolve()
    script.onerror = e => reject(e)
    document.head.appendChild(script)
  })
}

const validateConfig = (config: APILoaderConfig): void => {
  if (typeof window === 'undefined') {
    throw new TypeError('天地图 JSAPI 只能在浏览器中使用')
  }

  if (!config.tkey) {
    throw new Error('缺少天地图密钥，申请地址：https://console.tianditu.gov.cn/api/key')
  }
}

export const load = async (options: APILoaderConfig, delay: number = 300): Promise<void> => {
  if (loadStatus === LoadStatus.loaded) {
    await new Promise(resolve => setTimeout(resolve, delay))
    return
  }

  loadStatus = LoadStatus.loading

  const config: APILoaderConfig = {
    tkey: options.tkey || '',
    version: options.version || '4.0',
    plugins: options.plugins || [],
  }

  try {
    validateConfig(config)

    // 加载主脚本
    await loadScript('tianditu-tk', `https://api.tianditu.gov.cn/api?v=${config.version}&tk=${config.tkey}`)

    // 加载插件脚本
    const pluginPromises = (config.plugins || [])
      .flatMap(name => pluginsUrl[name].map((url, index) => ({ id: `${name}_${index}`, url })))
      .map(item => loadScript(item.id, item.url))

    await Promise.all(pluginPromises)

    await new Promise(resolve => setTimeout(resolve, delay))

    loadStatus = LoadStatus.loaded
  } catch (error) {
    loadStatus = LoadStatus.unload
    throw error
  }
}
