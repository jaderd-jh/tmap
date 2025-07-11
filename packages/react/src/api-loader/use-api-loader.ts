import type { APILoaderConfig } from './types'
import { useEffect, useState } from 'react'
import { load } from './load-script'

const useAPILoader = (config: APILoaderConfig) => {
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
  }, [config])

  return { isLoaded, error }
}

export default useAPILoader
