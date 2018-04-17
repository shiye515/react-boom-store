import creatStore from '../src'

let initState = {
  example: {
    count: 5
  }
}
const { Provider, connect, dispatch } = creatStore(initState)

export {
  Provider,
  connect,
  dispatch
}
