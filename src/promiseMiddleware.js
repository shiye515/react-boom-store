function isPromise (value) {
  if (value !== null && typeof value === 'object') {
    return value && typeof value.then === 'function'
  }

  return false
}

export default function promiseMiddleware (dispatch) {
  return (updater, callback) => {
    if (isPromise(updater)) {
      updater.then(newState => {
        dispatch(newState, callback)
      })
    } else {
      return dispatch(updater, callback)
    }
  }
}
