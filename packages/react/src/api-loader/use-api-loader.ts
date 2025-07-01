import type { APILoaderConfig } from './types'
import { useEffect, useRef, useState } from 'react'
import { load } from './load-script'

const useAPILoader = (config: APILoaderConfig) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<Error>()

  const lint = useRef(false)

  const loadFn = async () => {
    if (lint.current) return
    await load(config)
      .then(() => {
        setIsLoaded(true)
      })
      .catch(e => {
        setError(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    loadFn()
    lint.current = true
  }, [config])

  return { isLoading, isLoaded, error }
}

export default useAPILoader
