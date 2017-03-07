import React, { Component } from 'react'
import Setter from './Setter'
import Iteration from './Iteration'

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
        <Setter length={p.longBreakLength} setLength={p.setLongBreakLength}
          setActivityType={p.setActivityType}
        >
          Long Break
        </Setter>
        <Iteration length={p.iteration} setLength={p.setIteration}
          setActivityType={p.setActivityType} iterated={p.iterated}
        >
          Iteration
        </Iteration>
      </section>
    )
  }
}

export default LengthSetters
