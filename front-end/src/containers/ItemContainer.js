import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getById } from '../actions/getPosts'

import ItemView from '../components/ItemView'

const mapStateToProps = state => {
  return {
    data: state.data.item,
    loading: state.loading.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getById: ( id ) => (
      dispatch(getById(id))
    )
  }
}

const ItemContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemView))

export default ItemContainer
