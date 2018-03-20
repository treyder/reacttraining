import React from 'react'
import PropTypes from 'prop-types'

const Artist = ({ onClick, selected, artistName }) => (
  <li
    onClick={onClick}
    style={{
        textDecoration: selected ? 'line-through' : 'none'
    }}
  >
    {artistName}
  </li>
)

Artist.propTypes = {
  onClick: PropTypes.func.isRequired,
  artistName: PropTypes.string.isRequired
}

export default Artist
