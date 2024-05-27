import type { PropsWithChildren } from 'react'
import useAPILoader from './use-api-loader'
import type { APILoaderProps } from './types'

export const APILoader = (props: PropsWithChildren<APILoaderProps>) => {
  const { className, style, children, ...config } = props

  const { isLoading, isLoaded, error } = useAPILoader(config)

  const getView = () => {
    if (isLoading) {
      return <>加载中…</>
    }

    if (error) {
      return <>{error.message}</>
    }

    if (isLoaded) {
      return <>{children}</>
    }
  }

  return (
    <div className={className} style={style}>
      {getView()}
    </div>
  )
}
