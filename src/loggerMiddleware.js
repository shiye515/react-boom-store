export default function loggerMiddleware (dispatch) {
  return (updater, callback) => {
    const newUpdater = (prevState, ...argu) => {
      console.log('before', JSON.stringify(prevState))
      if (typeof updater === 'function') {
        return updater(prevState)
      } else {
        return updater
      }
    }
    return dispatch(newUpdater, function (state) {
      console.log('after ', JSON.stringify(state))
      callback && callback(state)
    })
  }
}
