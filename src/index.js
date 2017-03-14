/**
state = {
  breakLength:        (5min / 60000) [time in miliseconds]
  longBreakLength:        (5min / 60000) [time in miliseconds]
  iteration:        (4 times)
  iterated:         (times)
  pomodoroLength:     (25min / 60000) [time in miliseconds]
  activity_type:      'p' [string] p/b
  timer:              object
    is_active:        false [bool]
    is_finished:      false [bool]
    paused:           false [bool]
    time:             (0) [time in miliseconds] || -1
}
 */

import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/containers/App'

const store = createStore(
  combineReducers({
    breakLength: reducers.breakLength,
    longBreakLength: reducers.longBreakLength,
    iteration: reducers.iteration,
    iterated: reducers.iterated,
    pomodoroLength: reducers.pomodoroLength,
    activity_type: reducers.activity_type,
    timer: reducers.timer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

render();
