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
