import React, { Component } from 'react'
const defaultMap = state => state
/**
 * 创建context
 * @param {object} state 初始值
 */
export default function creatStore (state = {}) {
  const Store = React.createContext({})
  let dispatch
  class Provider extends Component {
    constructor (props) {
      super(props)
      this.state = state
      dispatch = (updater, callback) => {
        // console.log(updater.name) // action name
        this.setState(updater, callback)
      }
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
   *
   * @param {function} mapStateToProps
   */
  function connect (mapStateToProps = defaultMap) {
    return function connectHOC (Component) {
      return function EnhancedComponent (props) {
        return (
          <Store.Consumer>
            {state => <Component {...props} {...mapStateToProps(state)} dispatch={dispatch} />}
          </Store.Consumer>
        )
      }
    }
  }
  return {
    Provider,
    connect,
    dispatch
  }
}
