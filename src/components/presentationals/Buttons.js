import React, { Component } from 'react'

class Buttons extends Component {
  constructor() {
    super()
    this._startTimer = this._startTimer.bind(this)
    this._pauseTimer = this._pauseTimer.bind(this)
    this._clearTimer = this._clearTimer.bind(this)
  }

  _startTimer() {
    const p = this.props
    let activityType = (p.activity_type == "p") ? p.pomodoroLength : p.breakLength
    let time = p.timer.time || activityType
    p.startTimer(time)
  }

  _pauseTimer() {
    const p = this.props
    p.pauseTimer(p.timer.time)
  }

  _clearTimer() {
    const p = this.props
    p.clearTimer()
  }

  render() {
    const p = this.props
    const is_active = this.props.timer.is_active
    const callback = (is_active) ? this._pauseTimer : this._startTimer
    const text = (is_active) ? 'Pause' : 'Start'
    return (
      <section>
        <button onClick={callback}>{text}</button>
        <button onClick={this._clearTimer}>Clear</button>
      </section>
    )
  }
}


export default Buttons
