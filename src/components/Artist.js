import React from 'react'
import PropTypes from 'prop-types'

const Artist = ({ onClick, selected, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: selected ? 'none' : 'none'
    }}
  >
    {text}
  </li>
)

Artist.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Artist
