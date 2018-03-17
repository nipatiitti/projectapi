const initialState = {
  data: []
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_DATA':
      return {
        data: action.data
      }
    default:
      return state
  }
}

export default data
