import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
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
    this.ONE_SEC = 200
    this.counter
    this.alarmSound = new Audio('https://cdn.rawgit.com/Cu7ious/React-n-Redux-Pomodoro-Clock/0697fb10e56f3cb79a13e7063aa400010d43adf8/assets/sounds/Alarm-clock-sound-short.mp3') // 00:02
  }

  componentDidUpdate() {
    const p = this.props
    const t = this
    const timer = this.props.timer
    const length = (p.activity_type == "p") ? p.breakLength : p.pomodoroLength

    const startTimeout = () => {
      setTimeout(() => {
        t.counter = t.counter - 1
        if (t.counter === 0) {
          let type = (p.activity_type == "p") ? "b" : "p"
          p.finishTimer()
          p.setActivityType(type)
          t.alarmSound.play()
        } else {
          p.tickTimer(t.counter)
        }
      }, t.ONE_SEC)
    }

    if(timer.is_finished) {
      // p.clearTimer()
      console.log('run here!!!');
      p.clearTimer()
      if (p.iterated == (p.iteration - 1)) {
        setTimeout(() => {
          p.startTimer(p.longBreakLength)
          p.setIterated(p.iterated + 0.5);
        }, t.ONE_SEC)
      } else if (p.iterated == (p.iteration - 0.5)) {
        setTimeout(() => {
          console.log('1: iterated: ' + p.iterated + 'length:' + length);
          p.startTimer(length)
          p.setIterated(0);
        }, t.ONE_SEC)
      } else {
        console.log('get inside');
        setTimeout(() => {
          console.log('2: iterated: ' + p.iterated + 'length:' + length);
          p.startTimer(length)
          p.setIterated(p.iterated + 0.5);
          console.log('run here');
        }, t.ONE_SEC)
      }
      // console.log(p.iterated);
      // console.log(p.timer);
    }

    if (p.timer.is_active) {
      let length = (p.activity_type == "p") ? p.pomodoroLength : p.breakLength
      this.counter = (timer.time == 0) ? length : timer.time
      startTimeout()
    }
  }

  render() {
    const p = this.props
    return (
      <section>
        <Grid>
          <Buttons pomodoroLength={p.pomodoroLength}
            breakLength={p.breakLength}
            timer={p.timer} startTimer={p.startTimer}
            pauseTimer={p.pauseTimer} clearTimer={p.clearTimer}
            activity_type={p.activity_type}
            sounds={{
              alarm: this.alarmSound
            }}
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
        </Grid>
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
