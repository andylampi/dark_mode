import React from 'react'

const ButtonChange = ({click = () => {}, colorButton, colorWr }) => {
  return (
    <div id="container_change"  >
    <button id="change" onClick={click} style={{ backgroundColor: colorButton, color: colorWr }}>CAMBIA</button>
  </div>
  )
}

export default ButtonChange;
