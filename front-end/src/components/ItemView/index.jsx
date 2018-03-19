import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import Button from '../Button'
import Text from '../Text'

class ItemView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getById(this.props.match.params.id)
  }

  render() {

    const { data, loading } = this.props

    return (
      <div className='mainView'>
        <Text text={`Author: ${data.author}`} />
        <Text text={`Title: ${data.title}`} />
        <Text text={`Content: ${data.body}`} />
      </div>
    )
  }
}

ItemView.propTypes = {
  getById: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default ItemView
