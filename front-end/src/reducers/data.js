const initialState = {
  data: [],
  item: {},
  search: '',
  tags: []
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_DATA':
      return Object.assign({}, state, {
        data: action.data
      })

    case 'OPEN_ITEM':
      return Object.assign({}, state, {
        item: action.data
      })

    case 'CHANGE_SEARCH':
      return Object.assign({}, state, {
        search: action.text
      })

    case 'ADD_TAG':
      return Object.assign({}, state, {
        tags: state.tags.concat([action.tag])
      })

    case 'REMOVE_TAG':
      return Object.assign({}, state, {
        tags: state.tags.filter(item => item !== action.tag)
      })

    default:
      return state
  }
}

export default data
