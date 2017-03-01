import React, { Component } from 'react'

class Setter extends Component {

  constructor() {
    super()
    this._increment = this._increment.bind(this)
    this._decrement = this._decrement.bind(this)
  }

  _increment() {
    const p = this.props
    p.setLength(p.length + 60000)
  }

  _decrement() {
    const p = this.props
    p.setLength(p.length - 60000)
  }

  render() {
    return (
      <section>
        <h3>{this.props.children}:</h3>
        <button onClick={this._increment}>+</button>
        <button onClick={this._decrement}>-</button>
        <span>{this.props.length} mins</span>
      </section>
    )
  }
}

export default Setter
