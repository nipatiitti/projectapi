import React from 'react'
import PropTypes from 'prop-types'
import MathJax from 'react-mathjax'

const Input = ({ children, inline, ...other}) => (
  <MathJax.Context>
    <div className="mathView">
      <MathJax.Node>
        {children}
      </MathJax.Node>
    </div>
  </MathJax.Context>
)

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Input
