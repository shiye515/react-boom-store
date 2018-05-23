import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from './store'

@connect(store => store.example)
class App extends Component {
  onClick = e => {
    const { dispatch } = this.props
    // 跟 setState 一样，注释中的用法也可以，但是要注意同步设置example的其他属性，否则其他属性会被删除
    // dispatch({
    //   example: {
    //     count: this.props.count + 1,
    //   }
    // })
    dispatch(function updateCount (prevState) {
      prevState.example.count = prevState.example.count + 1
      return prevState
    })
  }
  onDelayClick=e => {
    const { dispatch } = this.props
    dispatch(new Promise(function (resolve) {
      setTimeout(function () {
        resolve(prevState => {
          prevState.example.countDelay = prevState.example.countDelay + 1
          return prevState
        })
      }, 1000)
    }))
  }
  onChange = e => {
    const { dispatch } = this.props
    const value = e.target.value
    dispatch(function (prevState) {
      prevState.example.input = value
      return prevState
    })
  }
  render () {
    const { count, input, countDelay } = this.props
    return (
      <div >
        <div>
          <span>count: {count}</span>
          <button onClick={this.onClick}>+1s</button>
        </div>
        <div>
          <span>count: {countDelay}</span>
          <button onClick={this.onDelayClick}>+1s Delay</button>
        </div>
        <div>
          input: {input}
        </div>
        <input value={input} onChange={this.onChange} />
      </div>
    )
  }
}

// render(
//   (
//     <App />
//   ),
//   document.getElementById('root')
// )

render(
  (
    <Provider>
      <App />
    </Provider>
  ),
  document.getElementById('root')
)
