import React from 'react'

const Cd = ({ onClick, selected, title }) => (
  <li
    onClick={onClick}
    style={{
        textDecoration: selected ? 'line-through' : 'none'
    }}
  >
    {title}
  </li>
)

export default Cd
