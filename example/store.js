import creatStore from '../src'
import loggerMiddleware from '../src/loggerMiddleware'
import promiseMiddleware from '../src/promiseMiddleware'

let initState = {
  example: {
    count: 5,
    countDelay: 0,
    input: 'ccc'
  }
}

// 中间件从前往后执行
const middlewares = [promiseMiddleware, loggerMiddleware]

const { Provider, connect } = creatStore(initState, middlewares)

export {
  Provider,
  connect
}
