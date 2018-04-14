export const changeSearch = ( text ) => {
  return {
    type: 'CHANGE_SEARCH',
    text: text.target.value
  }
}

export const addTag = ( tag ) => {
  return {
    type: 'ADD_TAG',
    tag
  }
}

export const removeTag = ( tag ) => {
  return {
    type: 'REMOVE_TAG',
    tag
  }
}
