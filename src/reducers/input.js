export default function input(state = '', action) {
  switch (action.type) {
    case 'ADD_OPERATION':
      return state + action.operation;
    case 'ADD_NUMBER':
      return state + action.number;
    case 'CALCULATE':
      return eval(state);
    case 'CLEAR':
      return '';
    case 'UNDO':
      return String(state).slice(0, String(state).length -1);
    default:
      return state;
  }
}
