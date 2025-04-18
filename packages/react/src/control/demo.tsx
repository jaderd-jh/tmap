import { APILoader, Control, Map } from '@jhqn/react-tmap'
import { useRef } from 'react'

const Example = () => {
  const copyrightRef = useRef<T.ControlCopyright>()
  return (
    <Control.Copyright ref={copyrightRef} offset={[-40, -40]} position={window.T_ANCHOR_BOTTOM_RIGHT} visible={true}>
      <div className="text-#fff">版权所有：© 金华青鸟计算机信息技术有限公司</div>
    </Control.Copyright>
  )
}

const Demo = () => {
  return (
    <APILoader style={{ width: '100%', height: '100%' }} tkey="a7a90e05a37d3f6bf76d4a9032fc9129">
      <Map center={[120.255393, 29.274522]} mapStyle="black" zoom={14}>
        <Example />
      </Map>
    </APILoader>
  )
}

export default Demo
