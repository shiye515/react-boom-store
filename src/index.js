import React, { Component } from 'react'
import compose from './compose'
const defaultMap = state => state
/**
 * 创建context
 * @param {object} state 初始值
 */
export default function createStore (state = {}, middlewares = []) {
  const Store = React.createContext()
  let dispatch
  class Provider extends Component {
    constructor (props) {
      super(props)
      this.state = state
      dispatch = (updater, callback) => {
        this.setState(updater, function () {
          callback && callback(this.state)
        })
      }
      dispatch = compose(...middlewares)(dispatch)
    }
    render () {
      return (
        <Store.Provider value={this.state}>
          {this.props.children}
        </Store.Provider>
      )
    }
  }
  /**
   * 高阶组件，把state通过props透传
   * @param {function} mapStateToProps
   */
  function connect (mapStateToProps = defaultMap) {
    return function connectHOC (Component) {
      return function EnhancedComponent (props) {
        return (
          <Store.Consumer>
            {state => {
              if (!state) {
                throw new Error('please wrap the root component in a <Provider>')
              }
              return <Component {...props} {...mapStateToProps(state)} dispatch={dispatch} />
            }}
          </Store.Consumer>
        )
      }
    }
  }
  return {
    Provider,
    connect
  }
}
