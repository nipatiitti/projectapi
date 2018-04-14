import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'
import Chip from '../Search/searchTags'


const Main = ({ tags, body, title, onClick }) => {

  let allTags = [];
  tags.forEach(tag => allTags.push(tag))

  return (
    <div className="postItem" onClick={onClick}>
      <Text text={`${title}`} />
      <div className="chipContainer">
        {allTags.map(tag => (
          <Chip selected={false} text={tag} />
        ))}
      </div>
    </div>
  )
}

Main.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Main
