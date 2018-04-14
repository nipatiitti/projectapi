import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import Latex from 'react-latex'

import Button from '../Button'
import Text from '../Text'

class ItemView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getById(this.props.match.params.id)
  }

  makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  splitText( text ) {
    if (!text)
      return 'Loading'

    else {
      const elements = text.split('$$')

      let items = []

      for(let i = 0; i < elements.length; i++) {
        if ( i % 2 === 1)
          items.push(
            <div key={this.makeid()}>
              <Latex displayMode={true}>{'$$' + elements[i] + '$$'}</Latex>
            </div>
          )
        else {
          items.push(
            <div key={this.makeid()}>
              <Text text={elements[i]} />
            </div>
          )
        }
      }

      return items
    }
  }



  render() {

    const { data, loading } = this.props

    const elements = this.splitText(data.body)

    return (
      <div className='mainView'>
        {elements}
      </div>
    )
  }
}

ItemView.propTypes = {
  getById: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default ItemView
