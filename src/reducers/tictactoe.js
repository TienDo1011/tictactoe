import TTTComplay from './tttcomplay';

export default class TicTacToe {
  static hasDrawn(board) {
    let hasDrawn = true;
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] === 0) {
        hasDrawn = false;
      }
    }
    return hasDrawn;
  }

  static hasWon(board, openSpaces) {
    if (openSpaces > 4) {
      return false;
    }
    let win = false;
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 1st, 2nd, 3rd row
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 1st, 2nd, 3rd column
      [0, 4, 8], [2, 4, 6],             // main, anti-diagonal
    ];
    for (let i = 0; i < winningCombos.length; i += 1) {
      if ((board[winningCombos[i][0]] === 2 &&
            board[winningCombos[i][1]] === 2 &&
            board[winningCombos[i][2]] === 2) ||
            (board[winningCombos[i][0]] === 1 &&
            board[winningCombos[i][1]] === 1 &&
            board[winningCombos[i][2]] === 1)) {
        win = true;
        return win;
      }
    }
    return win;
  }

  static move(state, i) {
    const board = state.board.slice();
    board[i] = 1;
    if (TicTacToe.hasDrawn(board)) {
      return {
        board,
        hasDrawn: true,
        hasWon: false,
        nextPlayer: 2,
        openSpaces: 0,
      };
    }
    let openSpaces = state.openSpaces - 1;
    const nextState = {
      ...state,
      board,
      nextPlayer: 2,
      openSpaces,
    };
    let idealMove;
    if (openSpaces >= 2) {
      if (openSpaces === 8) {
        idealMove = TTTComplay.openingMove(board);
      } else {
        idealMove = TTTComplay.idealMove(nextState);
      }
    }
    console.log('idealMove', idealMove);
    board[idealMove] = 2;
    openSpaces -= 1;
    if (TicTacToe.hasWon(board, openSpaces)) {
      return {
        board,
        hasDrawn: false,
        hasWon: 2,
        nextPlayer: 1,
        openSpaces,
      };
    }
    return {
      board,
      hasDrawn: false,
      hasWon: false,
      nextPlayer: 1,
      openSpaces,
    };
  }
}
