import React from 'react'
import { Route, Switch } from 'react-router-dom'

import addPostContainer from '../../containers/addPostContainer'
import mainContainer from '../../containers/mainContainer'

const App = () => (
  <Switch>
    <Route exact path='/' render={mainContainer} />
    <Route exact path='/add' render={addPostContainer} />
  </Switch>
)


export default App
