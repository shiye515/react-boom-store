# react-boom-store

47行代码实现的 react 状态管理库，没有 action 直接提交 reducer 来改变 store

## Installation

react-boom-store requires **React 16.3.2 or later.**

```
npm install --save react-boom-store
```

## Documentation

```javascript
import creatStore from 'react-boom-store'
const Store = creatStore(initState)
const { Provider, connect, dispatch } = Store
```
其中 Provider, connect 可以参考 react-redux 中对应的概念

dispatch 就相当于 React 中的 setState

## Example

### store.js
```javascript
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
```
### index.js
```jsx
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from './store'

@connect(store => store.example)
class App extends Component {
  onClick = e => {
    const { dispatch } = this.props
    // 跟 setState 一样，注释中的用法也可以
    // dispatch({
    //   count: this.props.count + 1
    // })
    dispatch(function updateCount (prevState) {
      prevState.example.count = prevState.example.count + 1
      return prevState
    })
  }
  render () {
    const { count } = this.props
    return (
      <div onClick={this.onClick}>count: {count}</div>
    )
  }
}

render(
  (
    <Provider>
      <App />
    </Provider>
  ),
  document.getElementById('root')
)
```

## License

MIT
