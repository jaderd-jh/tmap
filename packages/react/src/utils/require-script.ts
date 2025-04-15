export const requireScript = (src: string, id = 'jhqn-react-tmap-plugin'): Promise<void> => {
  if (!document) return Promise.reject(new Error('Document is not available.'))
  const headElement = document.head || document.getElementsByTagName('head')[0]
  const dom = document.getElementById(id)
  return new Promise((resolve, reject) => {
    if (dom) return resolve()
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = id
    script.async = true
    script.defer = true
    script.src = src
    script.onerror = () => {
      headElement.removeChild(script)
      reject(new URIError(`the script ${src} is no accessible.`))
    }
    script.onload = () => resolve()
    headElement.appendChild(script)
  })
}
