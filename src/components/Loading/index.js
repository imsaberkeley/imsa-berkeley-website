import React from 'react'
import logo from '../imsa-logo.png'

function Loading(props) {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', margin: '-52.5px 0 0 -45.5px' }}>
      <img
        src={logo}
        alt="Logo"
        height="30px"
        style={{ margin: "0 auto" }}
      />
      <div style={{ fontFamily: 'Crimson Text', textAlign: 'center' }}>Loading</div>
    </div>
  )
}

export default Loading
