import React from 'react'
import PropTypes from 'prop-types'

import Text from '../../components/Text'

const Main = ({ author, body, title }) => (
  <div className="postItem">
    <Text text={`Title: ${title}`} />
  </div>
)

Main.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Main
