import {loading, error, baseUrl} from './utils'
import axios from 'axios'

export const newData = ( data ) => {
  return {
    type: 'NEW_DATA',
    data
  }
}

export const getPosts = ( type ) => {
  return (dispatch) => {
    dispatch(loading(true))
    axios.get(`${baseUrl}/api?type=${type}`)
    .then(({data}) => {
      dispatch(newData(data))
      dispatch(loading(false))
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}
