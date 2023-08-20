import React from 'react'

function Card({ children, onClick, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`} >{children}</div>
  )
}

export default Card