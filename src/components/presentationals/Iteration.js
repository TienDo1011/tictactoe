import React, { Component } from 'react'

class Iteration extends Component {

  constructor() {
    super()
    this._increment = this._increment.bind(this)
    this._decrement = this._decrement.bind(this)
  }

  _increment() {
    const p = this.props
    p.setActivityType("p")
    p.setLength(p.length + 1)
  }

  _decrement() {
    const p = this.props
    p.setActivityType("p")
    p.setLength(p.length - 1)
  }

  render() {
    const p = this.props
    const length = p.length;
    return (
      <section>
        <h3>{p.children}:</h3>
        <button onClick={this._increment}>+</button>
        <button onClick={this._decrement}>-</button>
        <span> {Math.floor(p.iterated)} / {length} times</span>
      </section>
    )
  }
}

export default Iteration
