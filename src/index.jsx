/**
state = {
  board: Array,
  hasDrawn: boolean,
  hasWon: boolean,
  nextPlayer: number (1/2),
  openSpaces: number,
}
 */

import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/containers/App.jsx';
import tictactoeApp from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  tictactoeApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
