export const validatePostItem = ( postItem ) => {
  if (
    postItem.title
    && postItem.author
    && postItem.body
  ) return true
  else return false
}

export const hasProp = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
