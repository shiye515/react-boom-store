import creatStore from '../src'

const { Provider, connect } = creatStore({ count: 5 })

export {
  Provider,
  connect
}
