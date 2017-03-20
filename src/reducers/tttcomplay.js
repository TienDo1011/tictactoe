import TicTacToe from './tictactoe';

export default class TTTComplay {
  static openingMove(board) {
    const conners = [0, 2, 6, 8];
    if (board[4] === 0) {
      return 4;
    }
    return conners[Math.floor(Math.random() * 4)];
  }

  static possibleMoves(board) {
    const moves = [];
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] === 0) {
        moves.push(i);
      }
    }
    return moves;
  }

  static score(state, depth) {
    if (state.hasWon && state.nextPlayer === 2) {
      return 10 - depth;
    } else if (state.hasWon && state.nextPlayer === 1) {
      return depth - 10;
    }
    return 0;
  }

  static minimax(state, depth = 0) {
    if (state.hasWon || state.hasDrawn) {
      if (state.hasWon) {
        console.log('the opposite of this player won', state.nextPlayer);
      }
      if (state.hasDrawn) {
        console.log('Drawn Drawn Drawn');
      }
      return {
        score: this.score(state, depth),
      };
    }
    const scores = [];
    const moves = [];
    let maxIndex;
    let minIndex;
    depth += 1;
    this.possibleMoves(state.board).forEach((move) => {
      const futureBoard = state.board.slice();
      if (state.nextPlayer === 1) {
        futureBoard[move] = 1;
      } else {
        futureBoard[move] = 2;
      }
      const openSpaces = state.openSpaces - 1;
      const nextState = {
        board: futureBoard,
        hasDrawn: TicTacToe.hasDrawn(futureBoard),
        hasWon: TicTacToe.hasWon(futureBoard, openSpaces),
        nextPlayer: state.nextPlayer === 1 ? 2 : 1,
        openSpaces,
      };
      const score = this.minimax(nextState, depth);
      scores.push(score.score);
      moves.push(move);
    });
    console.log('scores=====>', scores);
    console.log('moves====>', moves);
    if (state.nextPlayer === 1) {
      maxIndex = Math.max(...scores);
    } else {
      minIndex = Math.min(...scores);
    }
    return {
      score: scores[typeof maxIndex !== 'undefined' ? maxIndex : minIndex],
      move: moves[typeof maxIndex !== 'undefined' ? maxIndex : minIndex],
    };
  }

  static idealMove(state) {
    return this.minimax(state).move;
  }
}
