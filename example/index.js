import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from './store'

@connect()
class App extends Component {
  onClick = e => {
    const { dispatch } = this.props
    // dispatch({
    //   count: this.props.count + 1
    // })
    dispatch(function updateCount (prevState) {
      prevState.count = prevState.count + 1
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
