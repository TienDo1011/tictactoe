import React, { Component } from 'react'
import Setter from './Setter'

class LengthSetters extends Component {
  render() {
    const p = this.props
    return (
      <section>
        <Setter length={p.pomodoroLength} setLength={p.setPomodoroLength}>
          Pomodoro
        </Setter>
        <Setter length={p.breakLength} setLength={p.setBreakLength}>
          Break
        </Setter>
      </section>
    )
  }
}

export default LengthSetters
