import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'

const TagChip = ({ text, onClick, selected }) => (
  <div className={selected ? "chip selected" : "chip"} onClick={() => onClick(text)}>
    {text}
  </div>
)

TagChip.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool.isRequired
}

export default TagChip
