const initialState = {
  data: [],
  item: {}
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

    default:
      return state
  }
}

export default data
