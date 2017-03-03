import React, { Component } from 'react'
import Setter from './Setter'

class LengthSetters extends Component {
  render() {
    const p = this.props
    return (
      <section>
        <Setter length={p.pomodoroLength} setLength={p.setPomodoroLength}
          setActivityType={p.setActivityType}
        >
          Pomodoro
        </Setter>
        <Setter length={p.breakLength} setLength={p.setBreakLength}
          setActivityType={p.setActivityType}
        >
          Break
        </Setter>
      </section>
    )
  }
}

export default LengthSetters
