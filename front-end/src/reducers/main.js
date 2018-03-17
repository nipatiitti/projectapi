import { combineReducers } from 'redux'

import error from './error'
import loading from './loading'
import data from './data'

const main = combineReducers({
  error,
  loading,
  data
})

export default main
