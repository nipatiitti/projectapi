import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Text from '../../components/Text'

const renderMain = () => (
  <div className='searchContainer'>
    <Text text="Welcome" />
  </div>
)

const App = () => (
  <div className='container'>
    <Route exact path='/' render={renderMain} />
  </div>
)

App.propTypes = {
}

export default App
