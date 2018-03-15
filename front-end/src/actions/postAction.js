import {loading, error, baseUrl} from './utils'
import axios from 'axios'

// export const name = () => {
//   return {
//     type: 'TYPE_OF_THIS'
//   }
// }

export const newPost = ( postObject ) => {
  return (dispatch, getState) => {
    dispatch(loading(true))
    axios.post(`${baseUrl}/math`, {
      ...postObject
    })
    .then(({data}) => {
      console.log(data)
      dispatch(loading(false))
    })
    .catch(e => {
      console.log(e)
      dispatch(loading(false))
      dispatch(error(e.response))
    })
  }
}
