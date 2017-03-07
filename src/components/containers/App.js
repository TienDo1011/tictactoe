import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setPomodoroLength, setBreakLength, setLongBreakLength, setIteration, setActivityType,
         setIterated, startTimer, tickTimer, pauseTimer, clearTimer, finishTimer
       } from '../../actions'
import Buttons from '../presentationals/Buttons'
import LengthSetters from '../presentationals/LengthSetters'
import Clock from '../presentationals/Clock'

const mapStateToProps = (state) => ({
  pomodoroLength: state.pomodoroLength,
  breakLength: state.breakLength,
  longBreakLength: state.longBreakLength,
  iteration: state.iteration,
  iterated: state.iterated,
  activity_type: state.activity_type,
  timer: state.timer
})

const mapDispatchToProps = (dispatch) => ({
  setBreakLength: (l) => dispatch(setBreakLength(l)),
  setLongBreakLength: (l) => dispatch(setLongBreakLength(l)),
  setIteration: (i) => dispatch(setIteration(i)),
  setIterated: (i) => dispatch(setIterated(i)),
  setActivityType: (t) => dispatch(setActivityType(t)),
  setPomodoroLength: (l) => dispatch(setPomodoroLength(l)),
  startTimer: (t) => dispatch(startTimer(t)),
  tickTimer: (t) => dispatch(tickTimer(t)),
  pauseTimer: (t) => dispatch(pauseTimer(t)),
  clearTimer: () => dispatch(clearTimer()),
  finishTimer: () => dispatch(finishTimer())
})

class App extends Component {

  constructor() {
    super()
    this.ONE_SEC = 500
  }

  componentDidUpdate() {
    const p = this.props
    const t = this
    const length = (p.activity_type == "p") ? p.pomodoroLength : p.breakLength
    let counter = p.timer.time || length
    const startTimeout = () => {
      setTimeout(() => {
        counter = counter - 1
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
      // p.clearTimer()
      console.log('run here!!!');
      if (p.iterated == (p.iteration - 1)) {
        setTimeout(() => {
          p.startTimer(p.longBreakLength)
          p.setIterated(p.iterated + 0.5);
        }, t.ONE_SEC)
      } else if (p.iterated == (p.iteration - 0.5)) {
        setTimeout(() => {
          const length = (p.activity_type == "p") ? p.breakLength : p.pomodoroLength
          console.log('1: iterated: ' + p.iterated + 'length:' + length);
          p.startTimer(length)
          p.setIterated(0);
        }, t.ONE_SEC)
      } else {
        console.log('get inside');
        setTimeout(() => {
          const length = (p.activity_type == "p") ? p.breakLength : p.pomodoroLength
          console.log('2: iterated: ' + p.iterated + 'length:' + length);
          p.startTimer(length)
          p.setIterated(p.iterated + 0.5);
        }, t.ONE_SEC)
      }
      // console.log(p.iterated);
      // console.log(p.timer);
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
          breakLength={p.breakLength}
          timer={p.timer} startTimer={p.startTimer}
          pauseTimer={p.pauseTimer} clearTimer={p.clearTimer}
          activity_type={p.activity_type}
        />
        <LengthSetters pomodoroLength={p.pomodoroLength} breakLength={p.breakLength}
          longBreakLength={p.longBreakLength} iteration={p.iteration}
          iterated={p.iterated}
          setPomodoroLength={p.setPomodoroLength} setBreakLength={p.setBreakLength}
          setLongBreakLength={p.setLongBreakLength} setIteration={p.setIteration}
          setActivityType={p.setActivityType}
        />
        <Clock setActivityType={p.setActivityType} timer={p.timer}
          pomodoroLength={p.pomodoroLength} breakLength={p.breakLength}
          activity_type={p.activity_type}
        />
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
