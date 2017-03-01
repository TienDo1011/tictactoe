import React, { Component } from 'react'

class Clock extends Component {

  constructor() {
    super()
    this._setActivityType = this._setActivityType.bind(this)
  }

  _setActivityType(e) {
    const p = this.props
    p.setActivityType(e.currentTarget.innerText.toLowerCase())
  }

  render() {
    const p = this.props
    return (
      <section>
        <button onClick={this._setActivityType}>P</button>
        <button onClick={this._setActivityType}>B</button>
        <h2>{p.timer.time}</h2>
      </section>
    )
  }
}

export default Clock
