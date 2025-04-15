import { APILoader, Map, Marker } from '@jhqn/react-tmap'
import { useState } from 'react'

const Example = () => {
  const [visible, setVisible] = useState(true)
  const [draggable, setDraggable] = useState(false)

  return (
    <>
      <button onClick={() => setVisible(!visible)}>{visible ? '隐藏' : '显示'}</button>
      <button onClick={() => setDraggable(!draggable)}>{draggable ? '关闭拖拽' : '启用拖拽'}</button>
      <Marker
        draggable={draggable}
        icon={{
          iconUrl: 'http://api.tianditu.gov.cn/img/map/markerA.png',
          iconSize: [19, 27],
          iconAnchor: [10, 25],
        }}
        lngLat={[120.26195, 29.27817]}
        visible={visible}
        onClick={e => window.console.log('onClick', e)}
        onDragEnd={e => window.console.log('onDragEnd', e)}
      />
    </>
  )
}

const Demo = () => (
  <APILoader style={{ width: '100%', height: '100%' }} tkey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Map center={[120.255393, 29.274522]} mapStyle="black" zoom={14}>
      <Example />
    </Map>
  </APILoader>
)

export default Demo
