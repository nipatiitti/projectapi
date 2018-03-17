export function getTopTen(Model, type) {
  if(Model) {
    return Model.find({ type }).sort('-time').limit(10).exec()
  } else {
    throw "Incorrect params"
  }
}
