import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const FloatButton = ({ icon, onClick }) => (
  <div className="floatButton" onClick={() => {onClick && onClick()}}>
    {icon}
  </div>
)

FloatButton.propTypes = {
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default FloatButton
