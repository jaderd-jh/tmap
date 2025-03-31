import type { PropsWithChildren } from 'react'
import type { APILoaderProps } from './types'
import useAPILoader from './use-api-loader'

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
