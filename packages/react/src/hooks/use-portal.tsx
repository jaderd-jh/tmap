import type { ReactPortal } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { createRoot } from 'react-dom/client'

interface IPortal {
  render: (props: { children: React.ReactNode }) => ReactPortal | null
  remove: (elm?: HTMLElement) => void
}

const usePortal = () => {
  const [container] = useState<HTMLDivElement>(() => document.createElement('div'))

  const [portal, setPortal] = useState<IPortal>({ render: () => null, remove: () => null })

  const createPortalFn = useCallback<(elmm: HTMLDivElement) => IPortal>(elmm => {
    const render: IPortal['render'] = ({ children }) => {
      if (!children) return null
      return createPortal(children, elmm)
    }
    const remove: IPortal['remove'] = elm => {
      if (elm) createRoot(elm).unmount()
    }
    return { render, remove }
  }, [])

  useEffect(() => {
    const newPortal = createPortalFn(container)
    setPortal(newPortal)
    return () => {
      portal?.remove(container)
    }
  }, [container])

  return { Portal: portal?.render, container }
}

export default usePortal
