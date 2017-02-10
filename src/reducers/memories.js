import { List } from 'immutable';

export default function memories(state = List(), action) {
  switch (action.type) {
    case 'CALCULATE':
      const value = action.inputData + ' = ' + eval(action.inputData);
      return state.push(value);
    default:
      return state;
  }
}
