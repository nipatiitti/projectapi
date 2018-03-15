import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, NavLink } from 'react-router-dom'

import Text from '../../components/Text'

class App extends Component {
  componentDidMount () {
    this.props.setFallback('/')
  }

  search () {
    return (
      <div className='searchContainer'>
        <Text text="Welcome" />
      </div>
    )
  }

  render () {

    return (
      <div className='container'>

        <Route exact path='/' render={() => this.search()} />

      </div>
    )
  }
}

App.propTypes = {
  error: PropTypes.object,
  setFallback: PropTypes.func.isRequired
}

export default App
