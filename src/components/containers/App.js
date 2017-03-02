import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setPomodoroLength, setBreakLength, setActivityType,
         startTimer, tickTimer, pauseTimer, clearTimer, finishTimer
       } from '../../actions'
import Buttons from '../presentationals/Buttons'
import LengthSetters from '../presentationals/LengthSetters'
import Clock from '../presentationals/Clock'

const mapStateToProps = (state) => ({
  pomodoroLength: state.pomodoroLength,
  breakLength: state.breakLength,
  activity_type: state.activity_type,
  timer: state.timer
})

const mapDispatchToProps = (dispatch) => ({
  setBreakLength: (l) => dispatch(setBreakLength(l)),
  setActivityType: (t) => dispatch(setActivityType(t)),
  setPomodoroLength: (l) => dispatch(setPomodoroLength(l)),
  startTimer: (t) => dispatch(startTimer(t)),
  tickTimer: (t) => dispatch(tickTimer(t)),
  pauseTimer: (t) => dispatch(pauseTimer(t)),
  clearTimer: (t) => dispatch(clearTimer(t)),
  finishTimer: () => dispatch(finishTimer())
})

class App extends Component {

  constructor() {
    super()
    this.ONE_SEC = 1000
  }

  componentDidUpdate() {
    const p = this.props
    const t = this
    let counter = p.timer.time
    const length = (p.activity_type == "p") ? p.breakLength : p.pomodoroLength
    const startTimeout = () => {
      setTimeout(() => {
        counter = counter - t.ONE_SEC
        if (counter === 0) {
          let type = (p.activity_type == "p") ? "b" : "p"
          p.finishTimer()
          p.setActivityType(type)
        } else {
          p.tickTimer(counter)
        }
      }, t.ONE_SEC)
    }

    if(p.timer.is_finished) {
      p.clearTimer()
      p.startTimer(length)
    }

    if (p.timer.is_active) {
      startTimeout()
    }
  }

  render() {
    const p = this.props
    return (
      <section>
        <Buttons pomodoroLength={p.pomodoroLength}
          timer={p.timer} startTimer={p.startTimer}
          pauseTimer={p.pauseTimer} clearTimer={p.clearTimer}
        />
        <LengthSetters pomodoroLength={p.pomodoroLength}
          breakLength={p.breakLength} setPomodoroLength={p.setPomodoroLength}
          setBreakLength={p.setBreakLength}
        />
        <Clock setActivityType={p.setActivityType} timer={p.timer} />
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
