import TicTacToe from './tictactoe';

const initialState = {
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  hasDrawn: false,
  hasWon: false,
  nextPlayer: 1,
  openSpaces: 9,
};

export default function ticTacToeApp(state = initialState, action) {
  switch (action.type) {
    case 'MOVE':
      if (state.hasWon || state.board[action.i] !== 0) {
        return state;
      }
      return TicTacToe.move(state, action.i);
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
