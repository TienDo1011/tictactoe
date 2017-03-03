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
    let activityType = (p.activity_type == "p") ? p.pomodoroLength : p.breakLength
    let time = p.timer.time || activityType
    // console.log(time);
    const mins = Math.floor(time / 60)
    const secs = (time % 60)
    return (
      <section>
        <button onClick={this._setActivityType}>P</button>
        <button onClick={this._setActivityType}>B</button>
        <h2>{mins}:{secs}</h2>
      </section>
    )
  }
}

export default Clock
