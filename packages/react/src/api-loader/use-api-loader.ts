import type { APILoaderConfig } from './types'
import { useEffect, useRef, useState } from 'react'
import { load } from './load-script'

interface LoadStatusProps {
  isLoaded: boolean | null
  error?: Error | null
}

const defaultValue = { isLoaded: false }

const useAPILoader = (config: APILoaderConfig) => {
  const [loadStatus, setLoadStatus] = useState<Partial<LoadStatusProps>>(defaultValue)

  const loadStatusRef = useRef<Partial<LoadStatusProps>>({})

  useEffect(() => {
    if (!Object.keys(loadStatusRef.current).length) {
      load(config)
        .then(() => {
          loadStatusRef.current.isLoaded = true
        })
        .catch(e => {
          loadStatusRef.current.error = e
        })
        .finally(() => {
          setLoadStatus(loadStatusRef.current)
        })
    }
  }, [config])

  return loadStatus
}

export default useAPILoader
