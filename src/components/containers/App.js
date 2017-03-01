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
  clearTimer: () => dispatch(clearTimer()),
  finishTimer: () => dispatch(finishTimer())
})

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <main className="react-calculator">
          <InputFieldContainer />
          <TotalRecallContainer />
          <ButtonSetNumbersContainer />
          <ButtonSetFunctionsContainer />
          <ButtonSetEquationsContainer />
        </main>
      </Provider>
    )
  }
}

export default App;
