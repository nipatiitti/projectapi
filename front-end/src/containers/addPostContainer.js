import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { newPost } from '../actions/postAction'

import Add from '../components/Add'

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newPost: ( postObject ) => (
      dispatch(newPost(postObject))
    )
  }
}

const AddPostContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Add))

export default AddPostContainer
