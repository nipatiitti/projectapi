import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { changeSearch, addTag, removeTag } from '../actions/searchActions'

import Search from '../components/Search'

const mapStateToProps = state => {
  return {
    text: state.data.search,
    tags: state.data.tags,
    loading: state.loading.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearch: ( text ) => (
      dispatch(changeSearch(text))
    ),
    addTag: ( tag ) => (
      dispatch(addTag(tag))
    ),
    removeTag: ( tag ) => (
      dispatch(removeTag(tag))
    )
  }
}

const SearchContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search))

export default SearchContainer
