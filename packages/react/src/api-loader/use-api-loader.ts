import { useEffect, useState } from 'react'
import { load } from './load-script'
import type { APILoaderConfig } from './types'

const useAPILoader = (config: APILoaderConfig) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    load(config)
      .then(() => {
        setIsLoaded(true)
      })
      .catch(e => {
        setError(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, []) // config
  return { isLoading, isLoaded, error }
}

export default useAPILoader
